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
    grid-template-columns: repeat(3, 1fr);
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

  .rec-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 1.5rem;
  }

  .rec-card {
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: var(--border-radius-lg);
    padding: 1.25rem;
    background: var(--color-background-primary);
  }

  .rec-card h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    font-family: 'Playfair Display', Georgia, serif;
    color: ${accent};
  }

  .rec-card p {
    font-size: 13.5px;
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .hero-stats { grid-template-columns: 1fr 1fr; }
    .hero-stats .hero-stat:last-child { grid-column: span 2; }
    .stat-row { grid-template-columns: 1fr; }
    .rec-grid { grid-template-columns: 1fr; }
    .watermark { font-size: 4rem; }
  }
`;

export default function ThreeDS2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="3D Secure 2: Security Without the Speed Bumps"
        description="How 3DS2 reduces fraud, lowers chargebacks, and boosts checkout conversion with frictionless authentication."
        path="/3ds2"
      />
      <style>{blogStyles}</style>

      <Header />

      <div className="blog-root">

        <div className="hero" style={{ position: "relative", overflow: "hidden" }}>
          <span className="watermark">3DS2</span>
          <div className="kicker">MerchantHaus — Authentication Futures — 2025</div>
          <h1>3D Secure 2: Security Without the Speed Bumps</h1>
          <p className="hero-sub">Fraud is getting smarter. Your checkout should too. 3DS2 lets you protect your customers and your bottom line — without slowing down sales.</p>
          <div className="hero-meta">
            <span>MerchantHaus</span>
            <span>Security Team</span>
            <span>November 2025</span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">80–95%</span>
              <span className="hero-stat-label">frictionless approvals</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">Instant</span>
              <span className="hero-stat-label">risk decisions</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">Smart</span>
              <span className="hero-stat-label">step-up challenges</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--color-text-secondary)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          The newest version of 3D Secure is designed for the way modern shoppers buy — fast, mobile-first, and always-on. Instead of forcing every purchase through a clunky redirect, 3DS2 works behind the scenes to let genuine customers glide through checkout while isolating the outliers.
        </p>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>What's Different About 3DS2?</h2>
          </div>

          <p>3DS2 represents a fundamental rethinking of how authentication works in online payments. Rather than interrupting every transaction with a redirect, it uses rich device and behavioral data to make real-time risk decisions — silently, in milliseconds.</p>

          <div className="rec-grid">
            <div className="rec-card">
              <h3>Frictionless for Real Buyers</h3>
              <p>Most shoppers never see an extra prompt. With richer device and behavioral signals flowing silently to issuers, the experience stays invisible for legitimate customers.</p>
            </div>
            <div className="rec-card">
              <h3>Instant Decisions</h3>
              <p>3DS2 analyzes order history, device reputation, and risk profiles in milliseconds. Clean transactions are cleared instantly, and only uncertain ones get flagged.</p>
            </div>
            <div className="rec-card">
              <h3>Smart Challenges</h3>
              <p>When authentication is needed, customers respond with a quick biometric, one-time passcode, or issuer app confirmation. The flow feels native on mobile, desktop, and in-app.</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Why Should Merchants Care?</h2>
          </div>

          <p>For merchants processing card-not-present transactions, 3DS2 addresses the three most expensive friction points: chargebacks, fraud losses, and checkout abandonment — simultaneously.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Benefit</th>
                <th>How It Works</th>
                <th>Bottom Line</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fewer Chargebacks</td>
                <td>Liability shifts to issuing bank on authenticated transactions</td>
                <td>Less revenue and support hours lost to disputes</td>
              </tr>
              <tr>
                <td>Conversion Intact</td>
                <td>Friction reserved for genuinely risky transactions</td>
                <td>Customers finish the journey without roadblocks</td>
              </tr>
              <tr>
                <td>Marketable Security</td>
                <td>Transparent protection builds brand trust</td>
                <td>Shoppers feel protected without feeling hassled</td>
              </tr>
            </tbody>
          </table>

          <div className="pullquote">
            <p>"3DS2 is unique in that it simultaneously reduces fraud, lowers dispute costs, and improves checkout conversion — a rare triple win in payment optimization."</p>
            <cite>MerchantHaus Security Team</cite>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>What Should You Do Next?</h2>
          </div>

          <p>3DS2 thrives on data and collaboration. Set your teams up to win by focusing on enablement — the richer the data you send, the more frictionless the experience becomes.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Action</th>
                <th>Detail</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Send rich payloads</td>
                <td>Device fingerprints, shipping details, account tenure, communication history</td>
                <td>Higher frictionless approval rate</td>
              </tr>
              <tr>
                <td>Keep integrations updated</td>
                <td>Plugins, SDKs, and payment integrations on latest versions</td>
                <td>Seamless authentication flows</td>
              </tr>
              <tr>
                <td>Coach support teams</td>
                <td>Explain challenges as protection, not declines</td>
                <td>Better customer experience and fewer escalations</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>Avoid These Common Pitfalls</h2>
          </div>

          <p>Even well-implemented 3DS2 can underperform if merchants fall into common traps. The protocol is designed to be adaptive — let the risk engine do its job.</p>

          <div className="rec-grid">
            <div className="rec-card">
              <h3>Forced Challenges</h3>
              <p>Let the risk engine decide when to challenge. Forcing every transaction adds unnecessary drop-off and undermines the frictionless benefit.</p>
            </div>
            <div className="rec-card">
              <h3>Ignoring Analytics</h3>
              <p>Watch challenge rates, approvals, and abandonment numbers to catch new friction points quickly before they impact revenue.</p>
            </div>
            <div className="rec-card">
              <h3>No Support Playbook</h3>
              <p>Give frontline teams scripts for explaining 3DS2. Customers should feel protected, not rejected.</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2>Summary</h2>
          </div>

          <p>3DS2 helps you reduce fraud, lower chargebacks, and boost checkout conversion — all with less friction for your best customers.</p>

          <div className="callout">
            <div className="callout-label">Ready to Implement?</div>
            <p>Need help implementing the right flow for your ecommerce platform or want a readiness checklist? Reach out to the MerchantHaus team — we're here to help.</p>
          </div>
        </section>

        <hr className="divider" />

        <footer style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--color-text-secondary)", letterSpacing: "0.08em", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <span>MerchantHaus</span>
            <span>Plug in, play and process</span>
            <span>merchanthaus.io</span>
            <span>Security Team</span>
            <span>November 2025</span>
          </div>
        </footer>

      </div>

      <Footer />
    </div>
  );
}
