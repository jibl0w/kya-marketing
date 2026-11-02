import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Everything a visitor types is shown inside an email, so it must be made safe first.
function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function oneLine(v: unknown, max: number): string {
  return String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }

  const firstName = oneLine(body.firstName, 100);
  const lastName = oneLine(body.lastName, 100);
  const email = oneLine(body.email, 200);
  const company = oneLine(body.company, 200);
  const phone = oneLine(body.phone, 50);
  const enquiryType = oneLine(body.enquiryType, 100);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!firstName || !email || !enquiryType || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const inbox = process.env.ADMIN_EMAIL;
  if (!resend || !inbox) {
    console.error("Contact form: email service not configured");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }
  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  try {
    await resend.emails.send({
      from,
      to: inbox,
      subject: "KYA Website Enquiry — " + enquiryType + " from " + firstName + " " + lastName,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #080C14; color: #E8E0D0; padding: 40px; border-radius: 12px;">
          <h2 style="color: #C9A84C; font-size: 24px; margin-bottom: 8px;">KYA Digital Services</h2>
          <p style="color: #8A9AB5; font-size: 13px; margin-bottom: 32px;">New enquiry from kya.ng</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #E8E0D0;">${esc(firstName)} ${esc(lastName)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #E8E0D0;"><a href="mailto:${esc(email)}" style="color: #C9A84C;">${esc(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #E8E0D0;">${esc(company) || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #E8E0D0;">${esc(phone) || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568;">Enquiry Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #C9A84C; font-weight: 600;">${esc(enquiryType)}</td>
            </tr>
          </table>
          <div style="background: #0D1420; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 20px; margin-bottom: 32px;">
            <p style="font-size: 12px; color: #4A5568; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
            <p style="font-size: 14px; color: #E8E0D0; line-height: 1.7; margin: 0;">${esc(message).replace(/\r?\n/g, "<br/>")}</p>
          </div>
          <p style="font-size: 11px; color: #4A5568;">Received from kya.ng contact form</p>
        </div>
      `,
    });

    await resend.emails.send({
      from,
      to: email,
      subject: "KYA — We received your enquiry",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #080C14; color: #E8E0D0; padding: 40px; border-radius: 12px;">
          <h2 style="color: #C9A84C; font-size: 24px; margin-bottom: 8px;">KYA Digital Services</h2>
          <p style="color: #E8E0D0; font-size: 16px; margin-bottom: 16px;">Hi ${esc(firstName)},</p>
          <p style="color: #8A9AB5; font-size: 15px; line-height: 1.7; margin-bottom: 24px;">
            Thank you for reaching out to KYA Digital Services. We have received your enquiry and a member of our team will respond within 2 business days.
          </p>
          <div style="background: #0D1420; border: 1px solid rgba(201,168,76,0.25); border-radius: 8px; padding: 20px; margin-bottom: 32px;">
            <p style="font-size: 12px; color: #4A5568; margin-bottom: 4px;">Your enquiry type</p>
            <p style="font-size: 14px; color: #C9A84C; font-weight: 600; margin: 0;">${esc(enquiryType)}</p>
          </div>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 32px 0;" />
          <p style="font-size: 12px; color: #4A5568; line-height: 1.6;">
            KYA Digital Services Ltd · CAC Registered · Nigeria<br/>
            Not a PSP · Not a Bank · Trade Infrastructure Platform<br/>
            ${esc(inbox)} · kya.ng
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 500 });
  }
}
