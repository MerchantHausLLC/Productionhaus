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

  .formula-block {
    background: var(--color-background-secondary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: var(--border-radius-md);
    padding: 1.5rem;
    margin: 1.5rem 0;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
  }

  .formula-block .formula-main {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--color-text-primary);
  }

  .formula-block ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .formula-block li {
    padding: 0.3rem 0;
    color: var(--color-text-secondary);
    font-size: 12px;
  }

  .formula-block li strong {
    color: ${accent};
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

export default function Vamp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Visa's VAMP: A New Era for Fraud and Dispute Management"
        description="Understanding Visa's new Acquirer Monitoring Program — the unified framework replacing VFMP and VDMP for fraud and dispute management."
        path="/vamp"
      />
      <style>{blogStyles}</style>

      <Header />

      <div className="blog-root">

        <div className="hero" style={{ position: "relative", overflow: "hidden" }}>
          <span className="watermark">VAMP</span>
          <div className="kicker">MerchantHaus — Compliance &amp; Risk — 2025</div>
          <h1>Visa's VAMP: A New Era for Fraud and Dispute Management</h1>
          <p className="hero-sub">The world of payment processing is always evolving — Visa's new Acquirer Monitoring Program redefines how fraud and disputes are tracked across the entire ecosystem.</p>
          <div className="hero-meta">
            <span>MerchantHaus</span>
            <span>Compliance Team</span>
            <span>October 2025</span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">1</span>
              <span className="hero-stat-label">unified metric replaces two programs</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">2.2%</span>
              <span className="hero-stat-label">excessive threshold for merchants</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">2&times;</span>
              <span className="hero-stat-label">double-counting risk per transaction</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--color-text-secondary)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          The global framework of Visa's <strong>Visa Acquirer Monitoring Program (VAMP)</strong> consolidates fraud and dispute monitoring into a single, unified program — replacing the separate VFMP and VDMP. For merchants and acquirers, understanding this shift is critical to maintaining healthy processing relationships.
        </p>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>What Is VAMP and How Does It Work?</h2>
          </div>

          <p>VAMP officially began replacing the previous, separate monitoring programs — the Visa Fraud Monitoring Program (VFMP) and the Visa Dispute Monitoring Program (VDMP) — starting in April 2025.</p>

          <p>The program's core is a single, unified metric called the <strong>VAMP Ratio</strong>, which measures an acquirer's or merchant's overall risk profile by combining two critical components of card-not-present (CNP) transaction risk.</p>

          <div className="formula-block">
            <div className="formula-main">
              VAMP Ratio = (Count of [Fraud (TC40) + Disputes (TC15)]) / (Count of Settled Transactions (TC05))
            </div>
            <ul>
              <li><strong>TC40s (Fraud Reports):</strong> Cases where a cardholder reports a fraudulent transaction to their bank.</li>
              <li><strong>TC15s (All Disputes):</strong> All chargebacks, including both fraud-related and non-fraud disputes (e.g., merchandise quality or non-receipt).</li>
              <li><strong>TC05s (Settled Transactions):</strong> The total count of all settled transactions in a calendar month.</li>
            </ul>
          </div>

          <div className="pullquote">
            <p>"VAMP represents the most significant structural change to Visa's risk monitoring since the original fraud and dispute programs were separated."</p>
            <cite>Visa Risk Operations</cite>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Key Changes and Merchant Impact</h2>
          </div>

          <p>VAMP's consolidation into one framework and the calculation of the new ratio bring several major implications for merchants:</p>

          <data-table />
          <table className="data-table">
            <thead>
              <tr>
                <th>Change</th>
                <th>Implication</th>
                <th>Merchant Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unified Risk Metric</td>
                <td>Fraud and all dispute types combined into one ratio</td>
                <td>Address root causes of all transactional issues</td>
              </tr>
              <tr>
                <td>Increased Penalties</td>
                <td>Exceeding 2.2% threshold triggers per-dispute fees</td>
                <td>Monitor ratio in real-time via acquirer reporting</td>
              </tr>
              <tr>
                <td>Enumeration Monitoring</td>
                <td>Separate tracking for card-testing attacks</td>
                <td>Implement velocity checks and bot detection</td>
              </tr>
              <tr>
                <td>Double-Counting Risk</td>
                <td>TC40 + TC15 from same transaction counted twice</td>
                <td>Resolve fraud reports before they escalate to chargebacks</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <div className="callout-label">Double-Counting Effect</div>
            <p>Since the ratio includes both fraud reports (TC40s) and chargebacks (TC15s), a single transaction that is first reported as fraud and then becomes a chargeback can be counted twice against your VAMP ratio — making proactive fraud prevention even more critical.</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>VAMP Thresholds and Enforcement</h2>
          </div>

          <p>Visa has established clear thresholds for both acquirers and merchants. Understanding where your business falls within these tiers is the first step toward compliance.</p>

          <div className="stat-row">
            <div className="stat-card">
              <span className="stat-card-num">0.3%</span>
              <span className="stat-card-label">Standard threshold for acquirers</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-num">2.2%</span>
              <span className="stat-card-label">Excessive threshold for merchants</span>
            </div>
          </div>

          <p>If a merchant's activity pushes their acquirer above VAMP's thresholds, the merchant can face financial penalties. For merchants, the "Excessive" threshold is around 2.2% in many regions, and exceeding this can result in fees per disputed transaction — penalties that escalate the longer a merchant remains above threshold.</p>

          <div className="callout">
            <div className="callout-label">Enumeration Attacks</div>
            <p>VAMP introduces a separate monitoring element specifically for "enumeration" or card testing fraud, where criminals rapidly attempt small transactions to validate stolen card details. Merchants with a high rate of enumeration attempts may face penalties regardless of their main VAMP ratio.</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>Staying Compliant: Actionable Steps</h2>
          </div>

          <p>Compliance is crucial, and merchants can take proactive steps to manage their risk and stay below VAMP's thresholds. The key is layered prevention — addressing fraud and disputes at every stage of the transaction lifecycle.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Mechanism</th>
                <th>VAMP Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proactive Monitoring</td>
                <td>Real-time access to TC40 and TC15 data from acquirer</td>
                <td>Catch ratio trends before they breach thresholds</td>
              </tr>
              <tr>
                <td>Layered Fraud Prevention</td>
                <td>AVS, CVV/CVC2 validation, 3D Secure 2.0</td>
                <td>Reduces TC40 fraud reports at source</td>
              </tr>
              <tr>
                <td>Pre-Dispute Resolution</td>
                <td>Visa Order Insight and chargeback alerts</td>
                <td>Resolve before TC15 chargebacks are filed</td>
              </tr>
              <tr>
                <td>Root Cause Analysis</td>
                <td>Analyze dispute reasons (fulfillment, descriptions)</td>
                <td>Eliminates recurring dispute patterns</td>
              </tr>
            </tbody>
          </table>

          <div className="pullquote">
            <p>"VAMP is a signal from Visa that fraud prevention and dispute management must be a top priority. Understanding this framework and proactively implementing strong controls protects transactional integrity."</p>
            <cite>MerchantHaus Compliance Team</cite>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2>Recommendations</h2>
          </div>

          <p>By treating VAMP compliance as an ongoing operational discipline — not a one-time checkbox — merchants can protect their processing relationships and maintain healthy approval rates across all card brands.</p>

          <div className="callout">
            <div className="callout-label">Key Takeaway</div>
            <p>VAMP is a signal from Visa that fraud prevention and dispute management must be a top priority. By understanding this new framework and proactively implementing strong controls, your business can protect its transactional integrity and continue to grow securely.</p>
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
