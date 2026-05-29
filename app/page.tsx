import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{
      background: "#080C14",
      color: "#E8E0D0",
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --navy: #080C14;
          --navy-2: #0D1420;
          --navy-3: #121B2E;
          --navy-4: #1A2540;
          --gold: #C9A84C;
          --gold-light: #E8C97A;
          --gold-dim: rgba(201, 168, 76, 0.15);
          --gold-border: rgba(201, 168, 76, 0.25);
          --text-primary: #E8E0D0;
          --text-secondary: #8A9AB5;
          --text-muted: #4A5568;
          --white-border: rgba(255,255,255,0.06);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        .display { font-family: 'Cormorant Garamond', serif; }
        .mono { font-family: 'DM Mono', monospace; }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--gold-light); }

        .btn-primary {
          background: var(--gold);
          color: var(--navy);
          padding: 12px 28px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s, transform 0.1s;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
        }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }

        .btn-secondary {
          border: 1px solid var(--gold-border);
          color: var(--gold);
          padding: 11px 28px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-decoration: none;
          display: inline-block;
          transition: all 0.2s;
          text-transform: uppercase;
          background: transparent;
          cursor: pointer;
        }
        .btn-secondary:hover { background: var(--gold-dim); }

        .card {
          background: var(--navy-2);
          border: 1px solid var(--white-border);
          border-radius: 12px;
          padding: 32px;
          transition: border-color 0.2s;
        }
        .card:hover { border-color: var(--gold-border); }

        .gold-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-border);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .divider {
          width: 40px;
          height: 2px;
          background: var(--gold);
          margin: 24px 0;
        }

        .stat-card {
          text-align: center;
          padding: 32px 24px;
          border-right: 1px solid var(--white-border);
        }
        .stat-card:last-child { border-right: none; }

        .step-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--gold-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: var(--gold);
          flex-shrink: 0;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(201, 168, 76, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201, 168, 76, 0.03) 0%, transparent 40%),
            linear-gradient(rgba(201, 168, 76, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.02) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 60px 60px, 60px 60px;
          pointer-events: none;
        }

        .tag {
          display: inline-block;
          background: var(--navy-3);
          border: 1px solid var(--white-border);
          border-radius: 4px;
          padding: 4px 10px;
          font-size: 11px;
          color: var(--text-secondary);
          font-family: 'DM Mono', monospace;
        }

        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .five-col { grid-template-columns: 1fr 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .four-col { grid-template-columns: 1fr 1fr !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-card { border-right: none; border-bottom: 1px solid var(--white-border); }
          .stat-card:last-child { border-bottom: none; }
          .hero-pad { padding: 80px 24px 60px !important; }
          .section-pad { padding: 80px 24px !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(8, 12, 20, 0.95)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 48px",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          <span className="display" style={{ fontSize: "26px", fontWeight: 700, color: "#E8E0D0", letterSpacing: "-0.02em" }}>
            KY<span style={{ color: "var(--gold)" }}>A</span>
          </span>
          <div className="hide-mobile" style={{ display: "flex", gap: "32px" }}>
            <a href="#about" className="nav-link">About</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#sectors" className="nav-link">Sectors</a>
            <a href="#who-we-serve" className="nav-link">Who We Serve</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a href="#contact" className="btn-secondary hide-mobile">Request Demo</a>
          <a href="#contact" className="btn-primary">Contact Us</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-pad" style={{ position: "relative", overflow: "hidden", padding: "130px 48px 110px", minHeight: "92vh", display: "flex", alignItems: "center" }}>
        <div className="hero-pattern" />
        <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "linear-gradient(135deg, transparent 30%, rgba(201,168,76,0.03) 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ maxWidth: "780px" }}>
            <div className="gold-badge" style={{ marginBottom: "36px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
              Nigeria — Asia Trade Infrastructure
            </div>
            <h1 className="display" style={{
              fontSize: "clamp(48px, 6.5vw, 92px)",
              fontWeight: 600,
              lineHeight: 1.03,
              letterSpacing: "-0.025em",
              color: "#E8E0D0",
              marginBottom: "32px"
            }}>
              The Infrastructure Layer for
              <em style={{ color: "var(--gold)", fontStyle: "italic", display: "block" }}>
                Nigeria–Asia Trade
              </em>
            </h1>
            <p style={{ fontSize: "19px", lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: "580px", marginBottom: "52px", fontWeight: 300 }}>
              KYA connects Nigerian businesses with verified Asian suppliers through a structured, compliance-first digital trade corridor — from customer verification to final settlement.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary" style={{ padding: "18px 40px", fontSize: "13px" }}>
                Request a Demo
              </a>
              <a href="#how-it-works" className="btn-secondary" style={{ padding: "17px 40px", fontSize: "13px" }}>
                How It Works
              </a>
            </div>
            <div style={{ marginTop: "72px", display: "flex", gap: "48px", flexWrap: "wrap" }}>
              {[
                { label: "Compliance-First", desc: "Built around CBN and international standards" },
                { label: "End-to-End", desc: "From KYC verification to final settlement" },
                { label: "Fully Traceable", desc: "Every step documented and auditable" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--gold-dim)", border: "1px solid var(--gold-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "3px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "3px" }}>{item.label}</p>
                    <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: "var(--navy-2)", borderTop: "1px solid var(--white-border)", borderBottom: "1px solid var(--white-border)" }}>
        <div className="stat-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { value: "5", label: "Trade Categories", sub: "Verified supplier sectors" },
            { value: "13", label: "Process Steps", sub: "Platform-controlled workflow" },
            { value: "100%", label: "Traceable", sub: "Full audit trail on every trade" },
            { value: "CBN", label: "Aligned", sub: "Regulatory compliance built in" },
          ].map(stat => (
            <div key={stat.label} className="stat-card">
              <p className="display" style={{ fontSize: "44px", fontWeight: 600, color: "var(--gold)", letterSpacing: "-0.02em", lineHeight: 1 }}>{stat.value}</p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginTop: "10px" }}>{stat.label}</p>
              <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px" }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section-pad" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <p className="section-label">About KYA</p>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
              Built for the Realities of Nigerian Trade
            </h2>
            <div className="divider" />
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "20px", fontWeight: 300 }}>
              KYA Digital Services is a Nigerian-registered technology company that operates as the infrastructure layer for cross-border trade between Nigeria and Asia.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "20px", fontWeight: 300 }}>
              We do not move money. We do not hold goods. We orchestrate — bringing together verified suppliers, regulated banking infrastructure, and compliance frameworks into a single controlled environment.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "40px", fontWeight: 300 }}>
              Every transaction on the KYA platform is structured, documented, and traceable from initiation to settlement.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["CAC Registered", "Nigeria-Based", "Not a PSP", "Not a Bank", "Trade Infrastructure"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Platform Orchestration", text: "KYA coordinates every party in the transaction — the customer, the banking layer, the supplier, and the settlement infrastructure — through a single controlled digital interface." },
              { title: "Compliance by Design", text: "Verification, documentation, and regulatory requirements are embedded into every step of the process, not added as an afterthought." },
              { title: "Supplier Verification", text: "Every supplier in the KYA network is independently verified. Factory audits, documentation checks, and pre-shipment inspections are standard." },
              { title: "Full Audit Trail", text: "Every action, document, and decision is logged and timestamped. KYA maintains a complete record of every trade from onboarding to closure." },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: "24px 28px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.65, color: "var(--text-secondary)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section-pad" style={{ background: "var(--navy-2)", padding: "120px 48px", borderTop: "1px solid var(--white-border)", borderBottom: "1px solid var(--white-border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <p className="section-label">The Process</p>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              A Structured Path from Enquiry to Delivery
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-secondary)", maxWidth: "540px", margin: "0 auto", fontWeight: 300, lineHeight: 1.75 }}>
              Every KYA transaction follows a documented, platform-controlled process. Nothing moves until each step is verified and authorised.
            </p>
          </div>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {[
              { step: "01", title: "Customer Verification", text: "Customers complete identity or business verification through compliance-first onboarding. Both individual and corporate accounts are supported." },
              { step: "02", title: "Supplier Selection", text: "Customers select from our network of verified Asian suppliers across five strategic trade categories, with full supplier profiles and audit records." },
              { step: "03", title: "Trade Documentation", text: "Required trade documents are submitted and verified through the platform, including all necessary regulatory filings and import documentation." },
              { step: "04", title: "Funding & Banking Structure", text: "The transaction is funded through regulated banking channels. A Letter of Credit is structured to protect both the importer and the supplier." },
              { step: "05", title: "Inspection & Shipment", text: "Goods are independently inspected before shipment. Shipping documents are verified by the platform before any funds are released to the supplier." },
              { step: "06", title: "Settlement & Closure", text: "Foreign exchange is processed through regulated channels. Funds settle to the supplier and the trade closes with a full compliance and audit record." },
            ].map((item) => (
              <div key={item.step} className="card">
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <div className="step-number">{item.step}</div>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-secondary)" }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "56px", background: "var(--navy-3)", border: "1px solid var(--gold-border)", borderRadius: "12px", padding: "40px 48px", textAlign: "center" }}>
            <p className="display" style={{ fontSize: "22px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "10px", fontStyle: "italic" }}>
              "Every step is recorded. Every party is verified. Every transaction is traceable."
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
              KYA maintains a complete audit trail from customer onboarding to final settlement.
            </p>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="section-pad" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p className="section-label">Supplier Sectors</p>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Five Strategic Trade Categories
              </h2>
            </div>
            <p style={{ fontSize: "15px", color: "var(--text-secondary)", maxWidth: "380px", fontWeight: 300, lineHeight: 1.75 }}>
              Our verified supplier network covers the sectors most critical to Nigerian business growth and infrastructure development.
            </p>
          </div>
          <div className="five-col" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
            {[
              { icon: "⚡", title: "Electronics & Consumer Technology", text: "Devices, accessories, appliances, and smart technology." },
              { icon: "☀️", title: "Solar & Energy Infrastructure", text: "Solar systems, inverters, batteries, and energy equipment." },
              { icon: "⚙️", title: "Industrial Machinery", text: "Production equipment, automation, and factory systems." },
              { icon: "🏗️", title: "Construction & Building Materials", text: "Structural materials, fittings, and building supplies." },
              { icon: "📦", title: "Packaging & Manufacturing Inputs", text: "Raw materials, plastics, textiles, and packaging." },
            ].map((sector, i) => (
              <div key={i} className="card" style={{ textAlign: "center", padding: "28px 20px" }}>
                <div style={{ fontSize: "28px", marginBottom: "14px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--navy-3)", borderRadius: "8px" }}>
                  {sector.icon}
                </div>
                <h3 style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px", lineHeight: 1.4 }}>{sector.title}</h3>
                <p style={{ fontSize: "11px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{sector.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="who-we-serve" className="section-pad" style={{ background: "var(--navy-2)", padding: "120px 48px", borderTop: "1px solid var(--white-border)", borderBottom: "1px solid var(--white-border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p className="section-label">Who We Serve</p>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Built for Two Audiences
            </h2>
          </div>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            <div style={{ background: "var(--navy-3)", border: "1px solid var(--gold-border)", borderRadius: "16px", padding: "52px 48px" }}>
              <div className="gold-badge" style={{ marginBottom: "32px" }}>Nigerian Importers & Businesses</div>
              <h3 className="display" style={{ fontSize: "34px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.2 }}>Trade with Confidence</h3>
              <div className="divider" />
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "36px", fontWeight: 300 }}>
                Stop navigating the complexity of cross-border trade alone. KYA handles verification, documentation, supplier due diligence, and banking coordination — so you can focus on growing your business.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Access to verified, audited Asian suppliers",
                  "Structured trade documentation support",
                  "Regulatory-compliant import process",
                  "Full visibility and tracking at every stage",
                  "No need to manage FX complexity directly",
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
              <div className="gold-badge" style={{ marginBottom: "32px" }}>Banking & Institutional Partners</div>
              <h3 className="display" style={{ fontSize: "34px", fontWeight: 600, marginBottom: "20px", lineHeight: 1.2 }}>A Structured Partner</h3>
              <div className="divider" />
              <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "36px", fontWeight: 300 }}>
                KYA provides institutional partners with pre-verified customers, structured trade documentation, and a controlled transaction environment that meets compliance and regulatory requirements.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Pre-verified KYC and KYB customer profiles",
                  "Structured trade documentation packages",
                  "Platform-controlled transaction flow",
                  "Full audit trail and compliance records",
                  "Reduced onboarding and due diligence burden",
                ].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--gold)", fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-secondary" style={{ marginTop: "40px", display: "inline-block" }}>
                Discuss Partnership
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 54px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "24px" }}>
                Let's Talk About Your Trade Needs
              </h2>
              <div className="divider" />
              <p style={{ fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "48px", fontWeight: 300 }}>
                Whether you are a Nigerian importer looking to source from Asia, a banking institution interested in partnership, or a supplier wanting to join our verified network — we want to hear from you.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
                {[
                  { type: "Trade Enquiry", desc: "Nigerian importers and businesses looking to use the KYA platform for cross-border sourcing." },
                  { type: "Banking Partnership", desc: "Financial institutions interested in partnering with KYA as part of the trade infrastructure." },
                  { type: "Supplier Onboarding", desc: "Asian suppliers looking to join the KYA verified supplier network." },
                  { type: "Investor Relations", desc: "Investors interested in the KYA opportunity and growth trajectory." },
                ].map(item => (
                  <div key={item.type} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--gold)", fontSize: "10px", marginTop: "5px", flexShrink: 0 }}>◆</span>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>{item.type}</p>
                      <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "24px 28px", background: "var(--navy-2)", border: "1px solid var(--white-border)", borderRadius: "10px" }}>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "6px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Direct Email</p>
                <p style={{ fontSize: "16px", color: "var(--text-primary)", fontWeight: 500 }}>info@kya.com.ng</p>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>We respond within 2 business days</p>
              </div>
            </div>
            <div style={{ background: "var(--navy-2)", border: "1px solid var(--white-border)", borderRadius: "16px", padding: "48px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: 600, marginBottom: "8px" }}>Request a Demo</h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "36px", lineHeight: 1.6 }}>
                Complete this form and a member of our team will be in touch within 2 business days.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--navy-2)", borderTop: "1px solid var(--white-border)", padding: "72px 48px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="four-col" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "64px" }}>
            <div>
              <span className="display" style={{ fontSize: "28px", fontWeight: 700, color: "#E8E0D0", letterSpacing: "-0.02em", display: "block", marginBottom: "16px" }}>
                KY<span style={{ color: "var(--gold)" }}>A</span>
              </span>
              <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "280px", marginBottom: "24px" }}>
                Digital trade infrastructure enabling structured, compliant, and fully traceable cross-border trade between Nigeria and Asia.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {["CAC Registered", "Not a PSP", "Not a Bank"].map(tag => (
                  <span key={tag} className="tag" style={{ fontSize: "10px" }}>{tag}</span>
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
                  { label: "For Institutions", href: "#who-we-serve" },
                ].map(item => (
                  <a key={item.label} href={item.href} className="nav-link" style={{ fontSize: "13px" }}>{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "20px" }}>Company</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "About KYA", href: "#about" },
                  { label: "Our Approach", href: "#how-it-works" },
                  { label: "Compliance", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map(item => (
                  <a key={item.label} href={item.href} className="nav-link" style={{ fontSize: "13px" }}>{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "20px" }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>info@kya.com.ng</p>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>Lagos, Nigeria</p>
              </div>
              <a href="#contact" className="btn-primary" style={{ display: "inline-block", padding: "10px 20px", fontSize: "12px" }}>
                Request Demo
              </a>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--white-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>© 2026 KYA Digital Services Ltd. All rights reserved. CAC Registered. Nigeria.</p>
            <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>Not a Payment Service Provider · Not a Bank · Trade Infrastructure Platform</p>
          </div>
        </div>
      </footer>

    </div>
  );
}