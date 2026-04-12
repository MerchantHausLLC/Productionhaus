import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { PageSEO } from "@/components/PageSEO";

const accent = "#993C1D";
const accentLight = "#FAECE7";
const accentDark = "#4A1B0C";

const blogStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap');

  .blog-root {
    font-family: 'Source Serif 4', Georgia, serif;
    color: var(--color-text-primary);
    max-width: 860px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
    line-height: 1.75;
    font-size: 17px;
  }

  .blog-root h1, .blog-root h2, .blog-root h3 {
    font-family: 'Playfair Display', Georgia, serif;
    line-height: 1.2;
    font-weight: 700;
  }

  .hero {
    border-bottom: 3px solid var(--color-text-primary);
    padding: 3rem 0 2rem;
    margin-bottom: 3rem;
  }

  .kicker {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .kicker::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 2px;
    background: ${accent};
  }

  .hero h1 {
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    margin: 0 0 1.25rem;
    color: var(--color-text-primary);
  }

  .hero-sub {
    font-size: 1.15rem;
    font-style: italic;
    color: var(--color-text-secondary);
    max-width: 600px;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  .hero-meta {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--color-text-secondary);
    letter-spacing: 0.08em;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--color-border-tertiary);
    border: 1px solid var(--color-border-tertiary);
    border-radius: var(--border-radius-md);
    overflow: hidden;
    margin: 2rem 0;
  }

  .hero-stat {
    background: var(--color-background-primary);
    padding: 1.25rem;
    text-align: center;
  }

  .hero-stat-num {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2.4rem;
    font-weight: 900;
    color: ${accent};
    line-height: 1;
    display: block;
    margin-bottom: 4px;
  }

  .hero-stat-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-secondary);
    display: block;
  }

  .section {
    margin-bottom: 3.5rem;
    position: relative;
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-border-tertiary);
  }

  .section-num {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--color-text-secondary);
    letter-spacing: 0.1em;
    flex-shrink: 0;
  }

  .section h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .section p {
    margin-bottom: 1.25rem;
    color: var(--color-text-primary);
  }

  .pullquote {
    border-left: 3px solid ${accent};
    margin: 2rem 0;
    padding: 0.5rem 0 0.5rem 1.5rem;
  }

  .pullquote p {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.3rem;
    font-style: italic;
    font-weight: 400;
    color: var(--color-text-primary);
    margin: 0 0 0.5rem;
    line-height: 1.5;
  }

  .pullquote cite {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--color-text-secondary);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-style: normal;
  }

  .callout {
    background: var(--color-background-secondary);
    border-left: 3px solid ${accent};
    border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
    padding: 1.25rem 1.5rem;
    margin: 2rem 0;
  }

  .callout-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: ${accent};
    margin-bottom: 0.4rem;
    font-weight: 500;
  }

  .callout p {
    margin: 0;
    font-size: 15px;
    color: var(--color-text-primary);
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    margin: 1.5rem 0;
    font-family: 'Source Serif 4', Georgia, serif;
  }

  .data-table thead th {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
    border-bottom: 1.5px solid var(--color-text-primary);
    padding: 0.5rem 0.75rem;
    text-align: left;
    font-weight: 400;
  }

  .data-table tbody tr:nth-child(even) {
    background: var(--color-background-secondary);
  }

  .data-table tbody td {
    padding: 0.65rem 0.75rem;
    border-bottom: 0.5px solid var(--color-border-tertiary);
    vertical-align: top;
    line-height: 1.5;
  }

  .data-table tbody td:first-child {
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .stat-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 1.5rem 0;
  }

  .stat-card {
    background: var(--color-background-secondary);
    border-radius: var(--border-radius-md);
    padding: 1rem 1.25rem;
    border: 0.5px solid var(--color-border-tertiary);
  }

  .stat-card-num {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${accent};
    line-height: 1;
    display: block;
  }

  .stat-card-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 4px;
    display: block;
  }

  .divider {
    border: none;
    border-top: 0.5px solid var(--color-border-tertiary);
    margin: 3rem 0;
  }

  .watermark {
    position: absolute;
    top: -20px;
    right: -20px;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 8rem;
    font-weight: 900;
    color: var(--color-border-tertiary);
    opacity: 0.12;
    pointer-events: none;
    user-select: none;
    line-height: 1;
    z-index: 0;
  }

  @media (max-width: 600px) {
    .hero-stats { grid-template-columns: 1fr 1fr; }
    .hero-stats .hero-stat:last-child { grid-column: span 2; }
    .stat-row { grid-template-columns: 1fr; }
    .watermark { font-size: 4rem; }
  }
`;

export default function ThreeDS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Understanding 3D Secure: Protecting Merchants and Customers"
        description="How 3D Secure authentication protects online card transactions by verifying cardholder identity before payment approval."
        path="/3ds"
      />
      <style>{blogStyles}</style>

      <Header />

      <div className="blog-root">

        <div className="hero" style={{ position: "relative", overflow: "hidden" }}>
          <span className="watermark">3DS</span>
          <div className="kicker">MerchantHaus — Security &amp; Compliance — 2025</div>
          <h1>Understanding 3D Secure: Protecting Merchants and Customers</h1>
          <p className="hero-sub">In an increasingly digital payments world, fraud prevention isn't optional — it's essential. 3D Secure offers an added layer of authentication that builds confidence and reduces disputes.</p>
          <div className="hero-meta">
            <span>MerchantHaus</span>
            <span>Compliance Team</span>
            <span>October 2025</span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">3</span>
              <span className="hero-stat-label">domains working together</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">100+</span>
              <span className="hero-stat-label">data points for risk scoring</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">PSD2</span>
              <span className="hero-stat-label">SCA compliance enabled</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--color-text-secondary)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          3D Secure (Three-Domain Secure) is an authentication protocol designed to protect online card transactions by verifying the cardholder's identity before the payment is approved. Originally introduced as "Verified by Visa" and "Mastercard SecureCode," it has evolved into 3D Secure 2, offering faster and more seamless authentication experiences.
        </p>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>What Is 3D Secure?</h2>
          </div>

          <p>The "three domains" refer to the merchant/acquirer, the card network, and the issuer — all working together to ensure each online transaction is validated securely and legitimately.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Role</th>
                <th>Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Merchant / Acquirer</td>
                <td>Initiates authentication request</td>
                <td>Collects transaction data and passes to network</td>
              </tr>
              <tr>
                <td>Card Network</td>
                <td>Routes and manages protocol</td>
                <td>Directory server connects merchant to issuer</td>
              </tr>
              <tr>
                <td>Issuer</td>
                <td>Authenticates cardholder</td>
                <td>Verifies identity and approves or challenges</td>
              </tr>
            </tbody>
          </table>

          <div className="pullquote">
            <p>"3D Secure transforms online card payments from a trust-based model to a verification-based model — shifting the burden of proof from the merchant to the card ecosystem."</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Why It Matters to Merchants</h2>
          </div>

          <p>For merchants processing card-not-present transactions, 3D Secure addresses the most expensive risks in the payment chain: fraud losses, chargeback costs, and the erosion of customer trust.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Mechanism</th>
                <th>Business Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reduced Fraud &amp; Chargebacks</td>
                <td>Verifies cardholder identity before authorization</td>
                <td>Lower dispute rates and financial losses</td>
              </tr>
              <tr>
                <td>Liability Shift</td>
                <td>Authenticated transactions shift fraud liability to issuer</td>
                <td>Fewer merchant-borne fraud losses</td>
              </tr>
              <tr>
                <td>Improved Trust</td>
                <td>Visible security measures at checkout</td>
                <td>Higher conversion and retention rates</td>
              </tr>
              <tr>
                <td>SCA Compliance</td>
                <td>Meets PSD2 Strong Customer Authentication requirements</td>
                <td>Access to EU/EEA markets without friction</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>How 3D Secure 2 Improves the Experience</h2>
          </div>

          <p>Unlike the older version, 3DS2 introduces a frictionless flow that allows low-risk transactions to be approved instantly, while high-risk transactions trigger step-up authentication like biometrics or one-time passwords.</p>

          <div className="stat-row">
            <div className="stat-card">
              <span className="stat-card-num">80–95%</span>
              <span className="stat-card-label">frictionless approval rate</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-num">100+</span>
              <span className="stat-card-label">data points per risk assessment</span>
            </div>
          </div>

          <div className="callout">
            <div className="callout-label">Frictionless Authentication</div>
            <p>Most transactions authenticate automatically using background data — device fingerprint, behavioral signals, and transaction history — reducing customer drop-off while maintaining security. Mobile and in-app payment flows are fully supported.</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>What Merchants Should Do</h2>
          </div>

          <p>To fully leverage 3D Secure, merchants should partner with their acquirer or gateway to enable 3DS2 within their payment flow. The key is treating authentication as an integrated part of the checkout experience, not a bolt-on afterthought.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Priority</th>
                <th>Expected Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enable 3DS2 via gateway</td>
                <td>Immediate</td>
                <td>Liability shift and SCA compliance</td>
              </tr>
              <tr>
                <td>Educate teams and customers</td>
                <td>Ongoing</td>
                <td>Reduced support tickets from challenges</td>
              </tr>
              <tr>
                <td>Monitor conversion rates</td>
                <td>Weekly</td>
                <td>Optimize challenge thresholds</td>
              </tr>
              <tr>
                <td>Layer with AVS, CVV, tokenization</td>
                <td>Immediate</td>
                <td>Defense-in-depth fraud prevention</td>
              </tr>
            </tbody>
          </table>

          <div className="pullquote">
            <p>"The merchants who see the best results from 3DS2 are the ones who treat it as a conversion tool, not just a compliance checkbox."</p>
            <cite>MerchantHaus Compliance Team</cite>
          </div>
        </section>

        <hr className="divider" />

        <footer style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--color-text-secondary)", letterSpacing: "0.08em", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <span>MerchantHaus</span>
            <span>Plug in, play and process</span>
            <span>merchanthaus.io</span>
            <span>Compliance Team</span>
            <span>October 2025</span>
          </div>
        </footer>

      </div>

      <Footer />
    </div>
  );
}
