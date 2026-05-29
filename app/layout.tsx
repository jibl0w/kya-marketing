import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KYA Digital Services — Nigeria-Asia Trade Infrastructure",
  description: "KYA connects Nigerian businesses with verified Asian suppliers through a structured, compliance-first digital trade corridor.",
  keywords: ["Nigeria trade", "Asia trade", "import infrastructure", "trade finance", "Nigeria Asia corridor"],
  openGraph: {
    type: "website",
    siteName: "KYA Digital Services",
    title: "KYA — Nigeria-Asia Trade Infrastructure",
    description: "Structured, compliant, and fully traceable cross-border trade between Nigeria and Asia.",
    url: "https://kya.ng",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#080C14" }}>
        {children}
      </body>
    </html>
  );
}