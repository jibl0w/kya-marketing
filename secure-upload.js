/**
 * KYA customer app — secure document upload.
 *
 * Run from the KYA-WEBSITE repo root:   node secure-upload.js
 *
 * Needs, in Supabase first:
 *   alter table transaction_documents add column if not exists uploaded_by text;
 *   alter table transaction_documents add column if not exists uploaded_by_role text;
 *
 * Replaces app/api/transactions/upload-document/route.ts (backup written).
 * Revert with:  git checkout app/api/transactions/upload-document/route.ts
 */

const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "app", "api", "transactions", "upload-document", "route.ts");

if (!fs.existsSync(FILE)) {
  console.error("Could not find " + FILE + ". Run this from the KYA-WEBSITE repo root.");
  process.exit(1);
}

const NEW_ROUTE = `import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { notifySupplierCustomerDocument } from "@/lib/supplier-notifications";
import { supabaseServer } from "@/lib/supabase-server";

// Every document type the platform accepts. Anything else is refused.
const KNOWN_TYPES = new Set([
  "signed_contract",
  "proforma_invoice",
  "payment_deposit",
  "payment_platform_fee",
  "payment_balance",
  "freight_invoice",
  "bill_of_lading",
  "commercial_invoice",
  "packing_list",
  "certificate_of_origin",
  "other",
  // Earlier routes, kept so their transactions still work.
  "form_m",
  "payment_confirmation",
]);

// Payment evidence comes only from the customer. A supplier must never be
// able to upload a "customer" payment receipt and then confirm it.
const SUPPLIER_FORBIDDEN = new Set([
  "payment_deposit",
  "payment_platform_fee",
  "payment_balance",
  "payment_confirmation",
]);

// The freight invoice is the supplier's document.
const CUSTOMER_FORBIDDEN = new Set(["freight_invoice"]);

const MAX_BYTES = 20 * 1024 * 1024;

// Customer uploads the supplier should hear about. The platform fee receipt
// is deliberately excluded: what KYA charges the customer is not the
// supplier's business.
const SUPPLIER_VISIBLE: Record<string, { en: string; zh: string }> = {
  payment_deposit: { en: "Deposit Payment Receipt", zh: "\\u5B9A\\u91D1\\u4ED8\\u6B3E\\u51ED\\u8BC1" },
  payment_balance: { en: "Balance & Freight Payment Receipt", zh: "\\u5C3E\\u6B3E\\u53CA\\u8FD0\\u8D39\\u4ED8\\u6B3E\\u51ED\\u8BC1" },
  signed_contract: { en: "Signed Contract", zh: "\\u5DF2\\u7B7E\\u7F72\\u5408\\u540C" },
};

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const docKey = formData.get("docKey") as string | null;
  const transactionId = formData.get("transactionId") as string | null;
  const existingDocId = formData.get("existingDocId") as string | null;
  const customLabel = (formData.get("customLabel") as string | null) || null;
  const version = parseInt(formData.get("version") as string) || 1;

  if (!file || !docKey || !transactionId) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (!KNOWN_TYPES.has(docKey)) {
    return NextResponse.json({ error: "Unknown document type" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File is too large. The limit is 20 MB." }, { status: 400 });
  }

  // ---- Who is uploading, and are they on this order? ----
  const { data: transaction } = await supabaseServer
    .from("transactions")
    .select("id, user_id, supplier_id")
    .eq("id", transactionId)
    .maybeSingle();

  // Same response whether the order does not exist or is not theirs,
  // so nothing is revealed about orders belonging to others.
  const notFound = NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!transaction) return notFound;

  let role: "customer" | "supplier" | null = null;

  if (transaction.user_id === userId) {
    role = "customer";
  } else if (transaction.supplier_id) {
    const { data: link } = await supabaseServer
      .from("supplier_users")
      .select("supplier_id")
      .eq("user_id", userId)
      .maybeSingle();
    if (link && link.supplier_id === transaction.supplier_id) role = "supplier";
  }

  if (!role) return notFound;

  if (role === "supplier" && SUPPLIER_FORBIDDEN.has(docKey)) {
    return NextResponse.json({ error: "Payment receipts can only be uploaded by the customer." }, { status: 403 });
  }
  if (role === "customer" && CUSTOMER_FORBIDDEN.has(docKey)) {
    return NextResponse.json({ error: "This document is provided by the supplier." }, { status: 403 });
  }

  // ---- Replacing an existing document: it must be on this order, of the
  //      same type, uploaded by the same side, and not yet approved. ----
  const replacing = !!existingDocId && existingDocId !== "null";
  if (replacing) {
    const { data: existing } = await supabaseServer
      .from("transaction_documents")
      .select("id, transaction_id, document_type, status, uploaded_by_role")
      .eq("id", existingDocId)
      .maybeSingle();

    if (!existing || existing.transaction_id !== transactionId || existing.document_type !== docKey) {
      return notFound;
    }
    // Documents from before uploader roles were recorded were all customer uploads.
    const existingRole = existing.uploaded_by_role || "customer";
    if (existingRole !== role) {
      return NextResponse.json({ error: "You cannot replace a document uploaded by the other party." }, { status: 403 });
    }
    if (existing.status === "approved") {
      return NextResponse.json({ error: "This document has already been approved and cannot be replaced. Please contact KYA." }, { status: 400 });
    }
  }

  // ---- Store the file ----
  const fileExt = file.name.split(".").pop();
  const fileName = userId + "/transactions/" + transactionId + "/" + docKey + "_" + Date.now() + "." + fileExt;
  const fileBuffer = await file.arrayBuffer();

  const { error: storageError } = await supabaseServer.storage
    .from("kya-documents")
    .upload(fileName, fileBuffer, { contentType: file.type, upsert: true });

  if (storageError) {
    return NextResponse.json({ error: storageError.message }, { status: 500 });
  }

  // Store the file PATH (not a public URL). Signed URLs are generated on demand.
  // The customer stays recorded as the owner (user_id), because other parts of
  // the platform rely on that. Who actually uploaded it is recorded separately.
  const now = new Date().toISOString();

  if (replacing) {
    const { error } = await supabaseServer
      .from("transaction_documents")
      .update({
        file_url: fileName,
        file_name: file.name,
        custom_label: customLabel,
        status: "pending",
        rejection_reason: null,
        uploaded_at: now,
        uploaded_by: userId,
        uploaded_by_role: role,
        version,
      })
      .eq("id", existingDocId as string);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  } else {
    const { error } = await supabaseServer
      .from("transaction_documents")
      .insert({
        transaction_id: transactionId,
        user_id: transaction.user_id,
        document_type: docKey,
        file_url: fileName,
        file_name: file.name,
        custom_label: customLabel,
        status: "pending",
        uploaded_at: now,
        uploaded_by: userId,
        uploaded_by_role: role,
        version: 1,
      });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Tell the supplier about customer uploads they need to see.
  if (role === "customer") {
    const visible = SUPPLIER_VISIBLE[docKey];
    if (visible) {
      await notifySupplierCustomerDocument(transactionId, visible.en, visible.zh);
    }
  }

  return NextResponse.json({ success: true });
}
`;

fs.writeFileSync(FILE + ".backup", fs.readFileSync(FILE, "utf8"), "utf8");
fs.writeFileSync(FILE, NEW_ROUTE, "utf8");

console.log("");
console.log("KYA customer app - secure document upload");
console.log("");
console.log("  OK       app/api/transactions/upload-document/route.ts  (replaced, backup written)");
console.log("");
console.log("Next:  npx tsc --noEmit");
console.log("");
