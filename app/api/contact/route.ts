import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, company, phone, enquiryType, message } = await req.json();

  if (!firstName || !email || !enquiryType || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL || "",
      subject: "KYA Website Enquiry — " + enquiryType + " from " + firstName + " " + lastName,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #080C14; color: #E8E0D0; padding: 40px; border-radius: 12px;">
          <h2 style="color: #C9A84C; font-size: 24px; margin-bottom: 8px;">KYA Digital Services</h2>
          <p style="color: #8A9AB5; font-size: 13px; margin-bottom: 32px;">New enquiry from kya.ng</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #E8E0D0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #E8E0D0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #E8E0D0;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #E8E0D0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #4A5568;">Enquiry Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 13px; color: #C9A84C; font-weight: 600;">${enquiryType}</td>
            </tr>
          </table>
          <div style="background: #0D1420; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 20px; margin-bottom: 32px;">
            <p style="font-size: 12px; color: #4A5568; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
            <p style="font-size: 14px; color: #E8E0D0; line-height: 1.7; margin: 0;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #4A5568;">Received from kya.ng contact form</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: email,
      subject: "KYA — We received your enquiry",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #080C14; color: #E8E0D0; padding: 40px; border-radius: 12px;">
          <h2 style="color: #C9A84C; font-size: 24px; margin-bottom: 8px;">KYA Digital Services</h2>
          <p style="color: #E8E0D0; font-size: 16px; margin-bottom: 16px;">Hi ${firstName},</p>
          <p style="color: #8A9AB5; font-size: 15px; line-height: 1.7; margin-bottom: 24px;">
            Thank you for reaching out to KYA Digital Services. We have received your enquiry and a member of our team will respond within 2 business days.
          </p>
          <div style="background: #0D1420; border: 1px solid rgba(201,168,76,0.25); border-radius: 8px; padding: 20px; margin-bottom: 32px;">
            <p style="font-size: 12px; color: #4A5568; margin-bottom: 4px;">Your enquiry type</p>
            <p style="font-size: 14px; color: #C9A84C; font-weight: 600; margin: 0;">${enquiryType}</p>
          </div>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 32px 0;" />
          <p style="font-size: 12px; color: #4A5568; line-height: 1.6;">
            KYA Digital Services Ltd · CAC Registered · Nigeria<br/>
            Not a PSP · Not a Bank · Trade Infrastructure Platform<br/>
            info@kya.ng · kya.ng
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}