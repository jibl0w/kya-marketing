import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --navy: #080C14;
          --navy-2: #0B1119;
          --navy-3: #0D1420;
          --navy-4: #1A2540;
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --gold-dim: rgba(201,168,76,0.12);
          --gold-border: rgba(201,168,76,0.25);
          --text-primary: #E8E0D0;
          --text-secondary: #8A9AB5;
          --text-muted: #4A5568;
          --white-border: rgba(255,255,255,0.06);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: var(--navy);
          color: var(--text-primary);
          font-family: 'DM Sans', -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          line-height: 1.6;
        }

        .display { font-family: 'Cormorant Garamond', Georgia, serif; }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 32px; }

        section { padding: 110px 0; }

        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 18px;
        }

        .btn-primary {
          background: var(--gold);
          color: var(--navy);
          padding: 15px 34px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }

        .btn-secondary {
          background: transparent;
          color: var(--gold);
          padding: 15px 34px;
          border-radius: 8px;
          border: 1px solid var(--gold-border);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .btn-secondary:hover { background: var(--gold-dim); transform: translateY(-1px); }

        .card {
          background: var(--navy-3);
          border: 1px solid var(--white-border);
          border-radius: 12px;
          padding: 30px 26px;
          transition: border-color 0.2s, transform 0.2s;
        }
        .card:hover { border-color: var(--gold-border); transform: translateY(-2px); }

        .gold-badge {
          display: inline-block;
          background: var(--gold-dim);
          border: 1px solid var(--gold-border);
          color: var(--gold);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .tag-pill {
          display: inline-block;
          border: 1px solid var(--white-border);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 11px;
          color: var(--text-secondary);
          letter-spacing: 0.04em;
        }

        .divider {
          width: 48px;
          height: 2px;
          background: var(--gold);
          margin-bottom: 26px;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--gold); }

        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        .grid-5 { display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; }

        @media (max-width: 980px) {
          .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
          .grid-5 { grid-template-columns: repeat(2, 1fr); }
          section { padding: 74px 0; }
          .container { padding: 0 22px; }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(8,12,20,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--white-border)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <span className="display" style={{ fontSize: "26px", fontWeight: 700, color: "#E8E0D0", letterSpacing: "-0.02em" }}>
            KY<span style={{ color: "var(--gold)" }}>A</span>
          </span>
          <div className="nav-links" style={{ display: "flex", gap: "34px", alignItems: "center" }}>
            <a href="#about" className="nav-link">About</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#sectors" className="nav-link">Sectors</a>
            <a href="#who-we-serve" className="nav-link">Who We Serve</a>
            <a href="#contact" className="btn-primary" style={{ padding: "11px 24px" }}>Get in Touch</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: "110px", paddingBottom: "90px", background: "linear-gradient(180deg, var(--navy-2) 0%, var(--navy) 100%)" }}>
        <div className="container">
          <div className="gold-badge" style={{ marginBottom: "28px" }}>Nigeria — Asia Trade</div>
          <h1 className="display" style={{ fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "28px" }}>
            Source from Asia<br />
            <span style={{ color: "var(--gold)" }}>with Confidence</span>
          </h1>
          <p style={{ fontSize: "19px", lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: "600px", marginBottom: "44px", fontWeight: 300 }}>
            KYA connects Nigerian businesses with verified Asian suppliers — and keeps every trade structured, documented, and fully traceable from first enquiry to delivered goods.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "64px" }}>
            <a href="#contact" className="btn-primary">Start Sourcing</a>
            <a href="#how-it-works" className="btn-secondary">How It Works</a>
          </div>

          <div className="grid-3" style={{ maxWidth: "900px" }}>
            {[
              { label: "Verified Suppliers", desc: "Every supplier independently vetted" },
              { label: "Compliance-First", desc: "KYC, KYB and AML built in" },
              { label: "Fully Traceable", desc: "Every step documented and auditable" },
            ].map(item => (
              <div key={item.label} style={{ borderTop: "2px solid var(--gold)", paddingTop: "16px" }}>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "3px" }}>{item.label}</p>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "54px 0", background: "var(--navy-3)", borderTop: "1px solid var(--white-border)", borderBottom: "1px solid var(--white-border)" }}>
        <div className="container grid-4" style={{ textAlign: "center" }}>
          {[
            { value: "5", label: "Trade Categories", sub: "Verified supplier sectors" },
            { value: "24/7", label: "Platform Access", sub: "Source and track anytime" },
            { value: "100%", label: "Traceable", sub: "Full audit trail on every trade" },
            { value: "CBN", label: "Aligned", sub: "Regulatory compliance built in" },
          ].map(stat => (
            <div key={stat.label}>
              <p className="display" style={{ fontSize: "44px", fontWeight: 600, color: "var(--gold)", letterSpacing: "-0.02em", lineHeight: 1 }}>{stat.value}</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginTop: "10px" }}>{stat.label}</p>
              <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container grid-2" style={{ alignItems: "start", gap: "70px" }}>
          <div>
            <p className="section-label">About KYA</p>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
              Built for the Realities of Nigerian Trade
            </h2>
            <div className="divider" />
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "20px", fontWeight: 300 }}>
              KYA Digital Services is a Nigerian-registered technology company that connects Nigerian importers with verified suppliers in Asia and makes cross-border sourcing safe, compliant, and transparent.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "20px", fontWeight: 300 }}>
              We do not move money. We do not hold goods. We connect and verify — bringing together vetted suppliers and a compliance framework into a single trusted environment. You pay your supplier directly; we make the trade safe and documented.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "40px", fontWeight: 300 }}>
              Every transaction on the KYA platform is structured, documented, and traceable from initiation to closure.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["CAC Registered", "Nigeria-Based", "Not a PSP", "Not a Bank", "Trade Infrastructure"].map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Verified Suppliers", text: "Every supplier in the KYA network is independently verified. Factory checks, documentation review, and pre-shipment inspection are standard." },
              { title: "Compliance by Design", text: "Identity and business verification (KYC/KYB) and anti-money-laundering screening are built into onboarding — not bolted on afterwards." },
              { title: "Platform Coordination", text: "KYA coordinates the customer and the verified supplier through a single controlled digital interface, keeping every trade structured and documented." },
              { title: "Full Audit Trail", text: "Every action, document, and decision is logged and timestamped. KYA maintains a complete record of every trade from onboarding to closure." },
            ].map(item => (
              <div key={item.title} className="card">
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.75, fontWeight: 300 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: "var(--navy-2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p className="section-label">How It Works</p>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              A Structured Path from Enquiry to Delivery
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "560px", margin: "0 auto", fontWeight: 300, lineHeight: 1.75 }}>
              Every KYA transaction follows a documented process. You stay in control of your own payments; we keep the trade verified and traceable.
            </p>
          </div>

          <div className="grid-3">
            {[
              { step: "01", title: "Customer Verification", text: "Customers complete identity or business verification through compliance-first onboarding. Both individual and corporate accounts are supported." },
              { step: "02", title: "Supplier Selection", text: "Customers select from our network of verified Asian suppliers across five strategic trade categories, with full supplier profiles and audit records." },
              { step: "03", title: "Trade Documentation", text: "Required trade documents are managed through the platform, and the customer is supported in meeting the necessary import documentation requirements." },
              { step: "04", title: "Order & Direct Payment", text: "The customer places the order and pays the supplier directly, arranging their own payment. A deposit is paid before manufacturing begins. KYA does not handle or hold any funds." },
              { step: "05", title: "Manufacture, Inspection & Shipment", text: "Goods are produced and independently inspected before shipment. The supplier ships the goods and provides the post-shipment documents." },
              { step: "06", title: "Documentation & Closure", text: "Post-shipment documents are securely shared with the customer and recorded by KYA. The customer completes import clearance, and the trade closes with a full compliance and audit record." },
            ].map(item => (
              <div key={item.step} className="card">
                <p className="display" style={{ fontSize: "34px", fontWeight: 600, color: "var(--gold)", lineHeight: 1, marginBottom: "14px" }}>{item.step}</p>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3, marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.75, fontWeight: 300 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "52px", background: "var(--navy-3)", border: "1px solid var(--gold-border)", borderRadius: "12px", padding: "40px 44px", textAlign: "center" }}>
            <p className="display" style={{ fontSize: "22px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px", fontStyle: "italic" }}>
              Every step is recorded. Every party is verified. Every transaction is traceable.
            </p>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", fontWeight: 300 }}>
              KYA maintains a complete audit trail from customer onboarding to trade closure.
            </p>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "56px" }}>
            <div>
              <p className="section-label">Supplier Sectors</p>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Five Strategic Trade Categories
              </h2>
            </div>
            <p style={{ fontSize: "15px", color: "var(--text-secondary)", maxWidth: "390px", fontWeight: 300, lineHeight: 1.75 }}>
              Our verified supplier network covers the sectors most critical to Nigerian business growth and infrastructure development.
            </p>
          </div>

          <div className="grid-5">
            {[
              { icon: "⚡", title: "Electronics & Consumer Technology", text: "Devices, accessories, appliances, and smart technology." },
              { icon: "☀️", title: "Solar & Energy Infrastructure", text: "Solar systems, inverters, batteries, and energy equipment." },
              { icon: "⚙️", title: "Industrial Machinery & Equipment", text: "Machinery, generators, agricultural and industrial equipment." },
              { icon: "🏗️", title: "Construction & Building Materials", text: "Structural materials, fittings, and building supplies." },
              { icon: "📦", title: "Packaging & Manufacturing Inputs", text: "Raw materials, plastics, textiles, and packaging." },
            ].map((sector, i) => (
              <div key={i} className="card" style={{ textAlign: "center", padding: "28px 20px" }}>
                <div style={{ fontSize: "26px", marginBottom: "14px" }}>{sector.icon}</div>
                <h3 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px", lineHeight: 1.4 }}>{sector.title}</h3>
                <p style={{ fontSize: "11.5px", color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>{sector.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="who-we-serve" style={{ background: "var(--navy-2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label">Who We Serve</p>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Built for Two Audiences
            </h2>
          </div>

          <div className="grid-2">
            <div style={{ background: "var(--navy-3)", border: "1px solid var(--white-border)", borderRadius: "16px", padding: "52px 48px" }}>
              <div className="gold-badge" style={{ marginBottom: "32px" }}>Nigerian Importers &amp; Businesses</div>
              <h3 className="display" style={{ fontSize: "34px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.2 }}>Trade with Confidence</h3>
              <div className="divider" />
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "36px", fontWeight: 300 }}>
                Stop navigating the complexity of cross-border trade alone. KYA handles verification, documentation, and supplier due diligence — so you can focus on growing your business.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Access to verified, audited Asian suppliers",
                  "Structured trade documentation support",
                  "Regulatory-compliant import process",
                  "Full visibility and tracking at every stage",
                  "You stay in control of your own payments",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--gold)", fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary" style={{ marginTop: "40px", display: "inline-block" }}>
                Apply for Access
              </a>
            </div>

            <div style={{ background: "var(--navy-3)", border: "1px solid var(--white-border)", borderRadius: "16px", padding: "52px 48px" }}>
              <div className="gold-badge" style={{ marginBottom: "32px" }}>Asian Suppliers</div>
              <h3 className="display" style={{ fontSize: "34px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.2 }}>Reach Nigerian Buyers</h3>
              <div className="divider" />
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "36px", fontWeight: 300 }}>
                KYA connects verified suppliers with a growing base of Nigerian importers, and keeps every trade structured, documented, and traceable — so you can sell into Nigeria with confidence.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Access to verified Nigerian buyers",
                  "Structured, documented transactions",
                  "Full traceability on every trade",
                  "A trusted, compliant trade environment",
                  "A long-term route into the Nigerian market",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--gold)", fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-secondary" style={{ marginTop: "40px", display: "inline-block" }}>
                Join Our Network
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="grid-2" style={{ gap: "64px", alignItems: "start" }}>
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
                Let&apos;s Talk About Your Trade Needs
              </h2>
              <div className="divider" />
              <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "44px", fontWeight: 300 }}>
                Whether you are a Nigerian importer looking to source from Asia, or a supplier wanting to join our verified network — we want to hear from you.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "40px" }}>
                {[
                  { type: "Trade Enquiry", desc: "Nigerian importers and businesses looking to use the KYA platform for cross-border sourcing." },
                  { type: "Supplier Onboarding", desc: "Asian suppliers looking to join the KYA verified supplier network." },
                  { type: "Investor Relations", desc: "Investors interested in the KYA opportunity and growth trajectory." },
                  { type: "General Enquiry", desc: "Any other questions about KYA and how we work." },
                ].map(item => (
                  <div key={item.type} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--gold)", fontSize: "10px", marginTop: "6px", flexShrink: 0 }}>◆</span>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>{item.type}</p>
                      <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid var(--white-border)", paddingTop: "26px" }}>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Direct Email</p>
                <p style={{ fontSize: "16px", color: "var(--text-primary)", fontWeight: 500 }}>info@kya.com.ng</p>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>We respond within 2 business days</p>
              </div>
            </div>

            <div className="card" style={{ padding: "40px 36px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "8px" }}>Send Us a Message</h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "28px", fontWeight: 300, lineHeight: 1.7 }}>
                Complete this form and a member of our team will be in touch within 2 business days.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--navy-2)", borderTop: "1px solid var(--white-border)", padding: "64px 0 32px" }}>
        <div className="container">
          <div className="grid-4" style={{ gap: "40px", marginBottom: "48px" }}>
            <div>
              <span className="display" style={{ fontSize: "28px", fontWeight: 700, color: "#E8E0D0", letterSpacing: "-0.02em", display: "block", marginBottom: "16px" }}>
                KY<span style={{ color: "var(--gold)" }}>A</span>
              </span>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "20px", fontWeight: 300 }}>
                Digital trade infrastructure enabling structured, compliant, and fully traceable cross-border trade between Nigeria and Asia.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["CAC Registered", "Not a PSP", "Not a Bank"].map(tag => (
                  <span key={tag} className="tag-pill" style={{ fontSize: "10px", padding: "5px 11px" }}>{tag}</span>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "20px" }}>Platform</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Supplier Sectors", href: "#sectors" },
                  { label: "For Businesses", href: "#who-we-serve" },
                ].map(link => (
                  <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "20px" }}>Company</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "About KYA", href: "#about" },
                  { label: "Our Approach", href: "#how-it-works" },
                  { label: "Contact", href: "#contact" },
                ].map(link => (
                  <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "20px" }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>info@kya.com.ng</p>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--white-border)", paddingTop: "26px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>© 2026 KYA Digital Services Ltd. All rights reserved. CAC Registered. Nigeria.</p>
            <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>Not a Payment Service Provider · Not a Bank · Trade Infrastructure Platform</p>
          </div>
        </div>
      </footer>
    </>
  );
}