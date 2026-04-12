import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { PageSEO } from "@/components/PageSEO";

const accent = "#BA7517";
const accentLight = "#FAEEDA";
const accentDark = "#633806";

const heroImage = "/blog-images/construction-finance-hero.jpg";

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

  .cf-hero-banner {
    width: 100%;
    min-height: 420px;
    background-image: url('${heroImage}');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .cf-hero-banner::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.12) 100%);
  }

  .cf-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    width: 100%;
    padding: 3rem 1.5rem 2.5rem;
  }

  .cf-hero-inner .kicker {
    color: rgba(255,255,255,0.8);
  }

  .cf-hero-inner .kicker::before {
    background: ${accent};
  }

  .cf-hero-inner h1 {
    color: #fff;
    text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  }

  .cf-hero-inner .hero-sub {
    color: rgba(255,255,255,0.85);
  }

  .cf-hero-inner .hero-meta span {
    color: rgba(255,255,255,0.7);
  }

  .hero {
    border-bottom: 3px solid var(--color-text-primary);
    padding: 0 0 2rem;
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

  .savings-calc {
    background: var(--color-background-secondary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: var(--border-radius-lg);
    padding: 1.5rem;
    margin: 2rem 0;
  }

  .calc-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
  }

  .calc-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .calc-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: var(--color-text-secondary);
    min-width: 180px;
  }

  .calc-result {
    margin-top: 1.25rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--color-border-tertiary);
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
  }

  .calc-result-num {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2.5rem;
    font-weight: 900;
    color: ${accent};
    line-height: 1;
  }

  .calc-result-label {
    font-family: 'Source Serif 4', serif;
    font-size: 15px;
    color: var(--color-text-secondary);
    font-style: italic;
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
    position: relative;
  }

  .rec-num {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: ${accent};
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
    display: block;
  }

  .rec-card h3 {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    font-family: 'Playfair Display', Georgia, serif;
  }

  .rec-card p {
    font-size: 13.5px;
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.6;
  }

  .tech-future {
    background: var(--color-background-secondary);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    margin: 1.5rem 0;
    border: 0.5px solid var(--color-border-tertiary);
  }

  .tech-future-header {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--color-border-tertiary);
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 1rem;
  }

  .tech-future-header span {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-text-secondary);
  }

  .tech-future-row {
    padding: 0.85rem 1.25rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 1rem;
    border-bottom: 0.5px solid var(--color-border-tertiary);
    align-items: start;
    font-size: 14px;
  }

  .tech-future-row:last-child {
    border-bottom: none;
  }

  .tech-future-row:nth-child(odd) {
    background: var(--color-background-primary);
  }

  .badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    font-weight: 500;
  }

  .badge-amber {
    background: ${accentLight};
    color: ${accentDark};
  }

  .badge-teal {
    background: #E1F5EE;
    color: #085041;
  }

  .badge-blue {
    background: #E6F1FB;
    color: #0C447C;
  }

  .divider {
    border: none;
    border-top: 0.5px solid var(--color-border-tertiary);
    margin: 3rem 0;
  }

  @media (max-width: 600px) {
    .hero-stats { grid-template-columns: 1fr 1fr; }
    .hero-stats .hero-stat:last-child { grid-column: span 2; }
    .stat-row { grid-template-columns: 1fr; }
    .tech-future-row, .tech-future-header { grid-template-columns: 1fr 1fr; }
    .tech-future-row > *:last-child, .tech-future-header > *:last-child { display: none; }
    .cf-hero-banner { min-height: 360px; }
  }
`;

function SavingsCalculator() {
  const [volume, setVolume] = useState(500000);
  const saving = Math.round(volume * 0.015);

  return (
    <div className="savings-calc">
      <div className="calc-title">Level III Savings Calculator</div>
      <div className="calc-row">
        <span className="calc-label">Annual B2B Card Volume ($)</span>
        <input
          type="range"
          min={100000}
          max={5000000}
          step={50000}
          value={volume}
          onChange={e => setVolume(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, minWidth: 100, textAlign: "right" }}>
          ${(volume / 1000).toFixed(0)}k
        </span>
      </div>
      <div className="calc-result">
        <span className="calc-result-num">${saving.toLocaleString()}</span>
        <span className="calc-result-label">in annual interchange savings at up to 1.5% reduction</span>
      </div>
    </div>
  );
}

export default function ConstructionFinance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="The Digital Transformation of Construction Finance"
        description="Strategic integration of payment gateways, CRM ecosystems, and margin optimization for the construction industry."
        path="/construction-finance"
      />
      <style>{blogStyles}</style>

      <Header />

      {/* Hero Banner with Background Image */}
      <div className="cf-hero-banner">
        <div className="cf-hero-inner">
          <div className="kicker">MerchantHaus — Industry Analysis — 2025</div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", letterSpacing: "-0.02em", margin: "0 0 1.25rem" }}>
            The Digital Transformation of Construction Finance
          </h1>
          <p className="hero-sub">Strategic integration of payment gateways, CRM ecosystems, and margin optimization for an industry at the crossroads of legacy process and modern capital demands.</p>
          <div className="hero-meta">
            <span>MerchantHaus</span>
            <span>Plug in, play and process</span>
            <span>merchanthaus.io</span>
            <span>NMI Gateway Partnership</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="blog-root">

        <div className="hero" style={{ paddingTop: "2rem" }}>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">70%</span>
              <span className="hero-stat-label">of contractors face regular payment delays</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">$30B</span>
              <span className="hero-stat-label">ConTech market by 2034</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">15&times;</span>
              <span className="hero-stat-label">faster payments with Bill Connect</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--color-text-secondary)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          The global construction industry is undergoing a fundamental reorganization of its financial infrastructure — transitioning from legacy, manual processes toward a fully integrated digital ecosystem. For merchants and ISOs operating within this environment, the adoption of sophisticated FinTech and ConTech is no longer a matter of competitive advantage. It is one of operational survival.
        </p>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>The Anatomy of Construction Liquidity</h2>
          </div>

          <p>The construction industry's "payment problem" is a complex intersection of structural, seasonal, and behavioral factors. Subcontractors frequently bear the brunt of this instability — often required to front expenses for custom materials and specialized labor while awaiting progress payments that may take 30, 60, or even 90 days to clear.</p>

          <div className="pullquote">
            <p>"82% of contractors report payment delays exceeding 30 days — embedding financial instability directly into the operating model."</p>
            <cite>PYMNTS Intelligence Research</cite>
          </div>

          <p>When cash flow dries up, material orders are postponed, equipment rentals delayed, and the most skilled subcontractors may prioritize jobs where payment is more reliable. This creates a negative feedback loop: project delays lead to further payment delays, which in turn increase overall project cost and erode the thin margins typical of construction contracts.</p>

          <div className="stat-row">
            <div className="stat-card">
              <span className="stat-card-num">82%</span>
              <span className="stat-card-label">would adopt digital payments to accelerate cash flow</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-num">10–20</span>
              <span className="stat-card-label">admin hours saved weekly through automated billing</span>
            </div>
          </div>

          <div className="callout">
            <div className="callout-label">Structural friction</div>
            <p>Traditional retainage — withholding 5–10% of contract value until final completion — locks capital at precisely the moment firms need it most. Combined with seasonal demand swings, forecasting cash flow without digital tooling is nearly impossible.</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Strategic Billing &amp; Cash Flow Optimization</h2>
          </div>

          <p>To combat systemic cash constraints, construction firms are adopting aggressively structured billing cycles designed to align revenue more closely with the actual cost curve of a project. The goal is simple: reduce the financial pressure on the contractor by getting paid closer to when costs are incurred.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Strategy</th>
                <th>Mechanism</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Front-Loaded Schedules</td>
                <td>Weight mobilization and materials phases more heavily</td>
                <td>Reduces initial financing pressure</td>
              </tr>
              <tr>
                <td>Bi-Weekly Billing</td>
                <td>Reduce cycles from 30 days to 14 days</td>
                <td>Improves cash velocity across portfolio</td>
              </tr>
              <tr>
                <td>Strategic Deposits</td>
                <td>Require 10–30% of contract for specialized materials</td>
                <td>Mitigates risk on custom scope</td>
              </tr>
              <tr>
                <td>Early Payment Incentives</td>
                <td>Offer small discounts for payment within 10 days</td>
                <td>Incentivizes client promptness</td>
              </tr>
            </tbody>
          </table>

          <p>Milestone billing, in particular, ties invoices to tangible deliverables rather than arbitrary calendar dates — providing clarity for the client and reducing disputes over subjective "percentage complete" assessments.</p>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>The NMI Gateway Platform</h2>
          </div>

          <p>For a payment technology coordination intermediary like MerchantHaus, the choice of NMI (Network Merchants, Inc.) is a strategic decision that directly addresses the specific needs of the B2B construction sector. NMI's "partner-first," processor-agnostic architecture is especially valuable in construction, where firms often need to route different transaction types through different processing banks to optimize rates or manage risk.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Channel</th>
                <th>Tool</th>
                <th>Construction Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Office / Remote</td>
                <td>Virtual Terminal</td>
                <td>Phone orders, mailed invoices, change orders</td>
              </tr>
              <tr>
                <td>Field / On-Site</td>
                <td>iProcess / Tap to Pay</td>
                <td>Accept payment upon service completion</td>
              </tr>
              <tr>
                <td>Online</td>
                <td>Collect Checkout</td>
                <td>Hosted payment page, reduces PCI scope</td>
              </tr>
              <tr>
                <td>Recurring</td>
                <td>Customer Vault</td>
                <td>Phase 2 contracts, maintenance agreements</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <div className="callout-label">White-Label Advantage</div>
            <p>NMI's white-labeling capability allows MerchantHaus to present the gateway under its own brand — extending the "Plug in, play and process" experience directly to merchants and ISO partners. The "Merchant Central" tool further streamlines underwriting and onboarding, getting U.S. merchants approved and processing in a fraction of traditional timelines.</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>ACH, eCheck, and the Cost of Payment Methods</h2>
          </div>

          <p>While credit cards offer speed, the high interchange fees associated with commercial and rewards cards can eat into the narrow margins of a construction project. This has driven significant adoption of ACH and eCheck payments for high-value invoices.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Cost Structure</th>
                <th>Speed</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ACH / eCheck</td>
                <td>$0.10–$1.50 flat fee</td>
                <td>1–3 business days</td>
                <td>Large progress payments, material bills</td>
              </tr>
              <tr>
                <td>Credit Card</td>
                <td>1.5%–3.5% of total</td>
                <td>Instant auth, 1–2 day settle</td>
                <td>Urgent repairs, travel, tools</td>
              </tr>
              <tr>
                <td>Wire Transfer</td>
                <td>$15–$50 per transaction</td>
                <td>Same day / near-instant</td>
                <td>High-value final payments, land</td>
              </tr>
            </tbody>
          </table>

          <p>The NMI gateway's support for electronic checks replaces the manual workflow of mailing, receiving, and depositing physical checks — eliminating the several days of "mail float" that adds to an already strained payment cycle. NACHA compliance and SEC code automation (CCD for B2B, PPD for personal) are handled natively.</p>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2>Level II &amp; Level III Processing</h2>
          </div>

          <p>For construction firms dealing primarily with other businesses or government entities, Level II and Level III processing represent the single most effective method for reducing the cost of credit card acceptance. Card networks offer lower interchange rates because the additional transaction data reduces fraud risk.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Card Type</th>
                <th>Standard Rate</th>
                <th>Level III Rate</th>
                <th>Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visa Purchasing</td>
                <td>2.65% + $0.10</td>
                <td>1.90% + $0.10</td>
                <td><span className="badge badge-amber">0.75% reduction</span></td>
              </tr>
              <tr>
                <td>Mastercard Corporate</td>
                <td>2.75% + $0.10</td>
                <td>1.85% + $0.10</td>
                <td><span className="badge badge-amber">0.90% reduction</span></td>
              </tr>
            </tbody>
          </table>

          <p>NMI's "Level III Advantage" extension automatically identifies eligible B2B/B2G cards via BIN lookup and populates required line-item fields — commodity codes, unit prices, discount rates, and shipping data — without manual entry.</p>

          <SavingsCalculator />

          <div className="callout">
            <div className="callout-label">Government Contracts</div>
            <p>For many public sector contracts, providing Level III line-item data is a mandatory bidding requirement — making this capability a key differentiator for firms entering the government market, not just a cost optimization.</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">06</span>
            <h2>CRM Ecosystems &amp; Automation</h2>
          </div>

          <p>The modern construction office relies on an interconnected tech stack. Three CRM platforms have emerged as sector leaders, each serving a distinct market segment:</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Primary Market</th>
                <th>Financial Strength</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Procore</td>
                <td>Enterprise GCs</td>
                <td>Automated lien waiver exchange, 500+ integrations</td>
              </tr>
              <tr>
                <td>Buildertrend</td>
                <td>Residential Builders</td>
                <td>QuickBooks / Xero financial sync</td>
              </tr>
              <tr>
                <td>Jobber</td>
                <td>Field Services</td>
                <td>Quote-to-invoice automation, on-site payment</td>
              </tr>
            </tbody>
          </table>

          <div className="pullquote">
            <p>"Standard project management tools lack a marketing layer. GoHighLevel fills this gap — handling lead capture, missed call text-backs, and review automation before handing off to the execution platform."</p>
          </div>

          <p>NMI's Bill Connect extension automates the invoice-to-payment reconciliation loop. When an invoice is sent from QuickBooks, the client receives a secure NMI-powered payment link. Once paid, the invoice is automatically reconciled and marked closed — delivering a 40% reduction in overdue invoices and payments received up to 15 days faster.</p>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">07</span>
            <h2>Legal Compliance: Lien Waiver Automation</h2>
          </div>

          <p>In construction, the exchange of money is almost always contingent on the exchange of legal documents. Managing lien waivers through manual mail, notarization, and spreadsheet tracking is a primary driver of payment delays — GCs routinely withhold funds until signed waivers are received.</p>

          <p>Digital platforms like CountBricks and Beam now integrate lien waiver management directly into the payment workflow. "Payment gates" automatically hold funds until a state-compliant lien waiver is digitally signed. Conditional waivers are generated automatically at invoice submission; unconditional waivers are released the moment payment clears — protecting owners while getting subcontractors paid days or weeks faster.</p>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">08</span>
            <h2>Security, Tokenization &amp; Fraud Defense</h2>
          </div>

          <p>The high transaction values in construction make the industry a prime target for payment fraud. NMI's multi-layered security framework addresses this at every layer:</p>

          <div className="callout">
            <div className="callout-label">Customer Vault</div>
            <p>Sensitive card data is replaced with randomized tokens stored securely in NMI's vault. When a client returns for Phase 2 work, the firm can charge the vault directly — no re-entry of payment details required. Network tokenization ensures tokens auto-update when cards expire, preventing declines on recurring service contracts.</p>
          </div>

          <p>The Fraud Defense Suite provides real-time risk analysis on every transaction — analyzing IP address, transaction velocity, and geographic data to flag "card-not-present" risk before settlement occurs.</p>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">09</span>
            <h2>The 2025–2034 ConTech Outlook</h2>
          </div>

          <p>The construction industry is no longer a late adopter of technology. The global ConTech market is projected to grow from $7 billion in 2025 to over $30 billion by 2034, fueled by the convergence of AI, digital twins, robotics, and blockchain-based settlement.</p>

          <div className="tech-future">
            <div className="tech-future-header">
              <span>Technology Trend</span>
              <span>Productivity Gain</span>
              <span>Financial Impact</span>
            </div>
            {[
              ["Robotic Automation", "40% faster task completion", "Reduces labor-related overhead", "amber"],
              ["BIM / AI Coordination", "15% overall site productivity", "Prevents budget-destroying rework", "teal"],
              ["Modular Construction", "50–60% faster delivery", "Accelerated revenue generation", "blue"],
              ["Blockchain Transactions", "Near-instant settlement", "Eliminates payment intermediaries", "teal"],
            ].map(([trend, gain, impact, color], i) => (
              <div key={i} className="tech-future-row">
                <span style={{ fontWeight: 500 }}>{trend}</span>
                <span><span className={`badge badge-${color}`}>{gain}</span></span>
                <span style={{ color: "var(--color-text-secondary)", fontSize: 13 }}>{impact}</span>
              </div>
            ))}
          </div>

          <p>AI-powered BIM tools that detect structural clashes before ground is broken can prevent the rework that typically consumes 10–15% of a construction budget. Digital twins integrating real-time financial data provide unprecedented transparency for lenders — often leading directly to lower insurance premiums and higher property valuations.</p>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">10</span>
            <h2>Strategic Recommendations</h2>
          </div>

          <p>For construction leaders, the path forward requires treating financial infrastructure with the same engineering precision applied to physical projects. Five actions differentiate the firms that will lead through 2034:</p>

          <div className="rec-grid">
            {[
              ["Omnichannel Payment Acceptance", "Ensure payments can be collected anywhere — on-site via mobile, by phone via virtual terminal, or online via an integrated invoice link."],
              ["Activate Level III Processing", "For any firm processing B2B or government payments, NMI's automatic data optimization is the most direct route to reclaiming lost interchange margin."],
              ["Automate Accounting Sync", "Use Bill Connect or custom API integrations so payments reconcile automatically within QuickBooks or Xero, eliminating data entry errors entirely."],
              ["Digitize Lien Waiver Workflows", "Implement automated lien waiver exchanges to remove the legal bottleneck that delays fund releases from lenders and general contractors."],
              ["Invest in Full-Stack Connectivity", "Link the marketing layer of lead generation to the project management layer of job execution with Zapier or direct API — creating a seamless digital thread for every customer."],
            ].map(([title, desc], i) => (
              <div key={i} className="rec-card">
                <span className="rec-num">Rec {String(i + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="divider" />

        <footer style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--color-text-secondary)", letterSpacing: "0.08em", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <span>MerchantHaus</span>
            <span>Plug in, play and process</span>
            <span>merchanthaus.io</span>
            <span>Empowering merchants & ISOs</span>
            <span>2025</span>
          </div>
        </footer>

      </div>

      <Footer />
    </div>
  );
}
