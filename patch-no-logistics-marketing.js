/**
 * KYA no longer takes part in freight or logistics (MARKETING SITE, kya.ng home page wording).
 * Run from C:\Codes\kya-marketing:   node patch-no-logistics-marketing.js   then   npm run build
 * Backup: app/page.tsx.bak-nolog3. All-or-nothing. Safe to run twice.
 * Set NEXT_PUBLIC_LOGISTICS_ENABLED=on in the marketing project's Vercel settings (and redeploy) to bring the old wording back.
 */
const fs = require("fs");
const path = require("path");
const p = path.join(process.cwd(), "app", "page.tsx");
if (!fs.existsSync(p)) { console.log("Missing app/page.tsx. Run this from C:\\Codes\\kya-marketing."); process.exit(1); }
const raw = fs.readFileSync(p, "utf8");
const crlf = raw.includes("\r\n");
let t = raw.replace(/\r\n/g, "\n");
if (t.includes("LOGISTICS_ON")) { console.log("Already patched."); process.exit(0); }
const problems = [];
function once(from, to, label) {
  const i = t.indexOf(from);
  if (i < 0) { problems.push("could not find " + label); return; }
  if (t.indexOf(from, i + 1) >= 0) { problems.push(label + " found more than once"); return; }
  t = t.slice(0, i) + to + t.slice(i + from.length);
}

once("export default function Home() {", 'const LOGISTICS_ON = process.env.NEXT_PUBLIC_LOGISTICS_ENABLED === "on";\n\nexport default function Home() {', "Home function");
once("from first enquiry to delivered goods.", '{LOGISTICS_ON ? "from first enquiry to delivered goods." : "from first enquiry to goods ready for collection."}', "hero sentence");
once("A Structured Path from Enquiry to Delivery", '{LOGISTICS_ON ? "A Structured Path from Enquiry to Delivery" : "A Structured Path from Enquiry to Collection"}', "section heading");
once('title: "Manufacture, Inspection & Shipment"', 'title: LOGISTICS_ON ? "Manufacture, Inspection & Shipment" : "Manufacture & Inspection"', "step 05 title");
const old5 = "Goods are produced. Once you have paid the balance and freight, the supplier inspects the goods and shares the inspection report and photos with you on the platform. Goods ship once the report is approved, and the supplier provides the post-shipment documents.";
const new5 = "Goods are produced. The supplier then inspects them and shares the inspection report and photos with you on the platform, together with its invoice. Once you approve the report, you pay the balance and the inspection cost directly to the supplier.";
once('"' + old5 + '"', 'LOGISTICS_ON ? "' + old5 + '" : "' + new5 + '"', "step 05 text");
const old6 = "Post-shipment documents are securely shared with the customer and recorded by KYA. The customer completes import clearance, and the trade closes with a full compliance and audit record.";
const new6 = "The supplier gives you the pickup address and the shipping documents. You arrange your own freight forwarder to collect the goods, and you complete import clearance. KYA's part of the trade closes with a full compliance and audit record.";
once('"' + old6 + '"', 'LOGISTICS_ON ? "' + old6 + '" : "' + new6 + '"', "step 06 text");
once('title: "Documentation & Closure"', 'title: LOGISTICS_ON ? "Documentation & Closure" : "Collection & Closure"', "step 06 title");

if (problems.length) { console.log("STOPPED. Nothing was changed.\n - " + problems.join("\n - ")); process.exit(1); }
fs.copyFileSync(p, p + ".bak-nolog3");
fs.writeFileSync(p, crlf ? t.replace(/\n/g, "\r\n") : t);
console.log("Patched app/page.tsx. Now run: npm run build");
