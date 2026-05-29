"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  async function handleSubmit() {
    if (!form.firstName || !form.email || !form.enquiryType || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us at info@kya.ng");
      }
    } catch {
      setError("Something went wrong. Please email us at info@kya.ng");
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "var(--navy-3)",
    border: "1px solid var(--white-border)",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "13px",
    color: "var(--text-primary)",
    outline: "none",
    width: "100%",
    fontFamily: "inherit",
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--gold-dim)", border: "1px solid var(--gold-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "24px" }}>
          ✓
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: 600, color: "var(--gold)", marginBottom: "12px" }}>Message Received</h3>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7 }}>
          Thank you for reaching out. A member of the KYA team will respond within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <input
          placeholder="First Name *"
          value={form.firstName}
          onChange={e => update("firstName", e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Last Name"
          value={form.lastName}
          onChange={e => update("lastName", e.target.value)}
          style={inputStyle}
        />
      </div>
      <input
        type="email"
        placeholder="Email Address *"
        value={form.email}
        onChange={e => update("email", e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Company / Organisation"
        value={form.company}
        onChange={e => update("company", e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Phone Number (optional)"
        value={form.phone}
        onChange={e => update("phone", e.target.value)}
        style={inputStyle}
      />
      <select
        value={form.enquiryType}
        onChange={e => update("enquiryType", e.target.value)}
        style={{ ...inputStyle, color: form.enquiryType ? "var(--text-primary)" : "var(--text-muted)" }}
      >
        <option value="" disabled>Type of Enquiry *</option>
        <option>Trade Enquiry — I want to import goods</option>
        <option>Banking Partnership</option>
        <option>Supplier Onboarding</option>
        <option>Investor Relations</option>
        <option>General Enquiry</option>
      </select>
      <textarea
        placeholder="Tell us about your enquiry... *"
        value={form.message}
        onChange={e => update("message", e.target.value)}
        rows={4}
        style={{ ...inputStyle, resize: "none" }}
      />
      {error && (
        <p style={{ fontSize: "13px", color: "#ef4444", textAlign: "center" }}>{error}</p>
      )}
      <button
        onClick={handleSubmit}
        disabled={submitting}
        style={{
          background: submitting ? "var(--gold-dim)" : "var(--gold)",
          color: "var(--navy)",
          padding: "16px",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "13px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          border: "none",
          cursor: submitting ? "not-allowed" : "pointer",
          width: "100%",
          marginTop: "4px",
        }}
      >
        {submitting ? "Sending..." : "Send Message →"}
      </button>
      <p style={{ fontSize: "11px", color: "var(--text-muted)", textAlign: "center" }}>
        We respond within 2 business days · info@kya.ng
      </p>
    </div>
  );
}