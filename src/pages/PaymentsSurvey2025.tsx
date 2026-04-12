import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { PageSEO } from "@/components/PageSEO";

const accent = "#185FA5";
const accentLight = "#E6F1FB";
const accentDark = "#042C53";

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
    grid-template-columns: repeat(4, 1fr);
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
    .stat-row { grid-template-columns: 1fr; }
    .watermark { font-size: 4rem; }
  }
`;

export default function PaymentsSurvey2025() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="What the 2025 Payments Survey Reveals About How Customers Really Pay"
        description="Analysis of the BRC Payments Survey 2025 — insights on card dominance, alternative payment growth, processing costs, and cash resilience."
        path="/payments-survey-2025"
      />
      <style>{blogStyles}</style>

      <Header />

      <div className="blog-root">

        <div className="hero" style={{ position: "relative", overflow: "hidden" }}>
          <span className="watermark">PAYMENTS</span>
          <div className="kicker">MerchantHaus — Industry Insights — December 2025</div>
          <h1>What the 2025 Payments Survey Reveals About How Customers Really Pay</h1>
          <p className="hero-sub">Payments aren't just a checkout step anymore. They shape conversion, basket size, and margins — and the latest data shows the landscape is shifting fast.</p>
          <div className="hero-meta">
            <span>MerchantHaus</span>
            <span>Payments Team</span>
            <span>BRC Payments Survey 2025</span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">84.2%</span>
              <span className="hero-stat-label">retail sales via cards</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">5.0%</span>
              <span className="hero-stat-label">alternative payment share</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">&pound;1.48B</span>
              <span className="hero-stat-label">card processing costs</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">19.2%</span>
              <span className="hero-stat-label">cash transaction share</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--color-text-secondary)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          The BRC Payments Survey 2025 offers one of the clearest snapshots of how consumer payment behavior is evolving — and where merchants need to focus their strategy. Cards dominate, alternatives are surging, costs remain high, and cash is far from dead. Here's what the data tells us.
        </p>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>The Headline Numbers</h2>
          </div>

          <p>The survey paints a picture of a market in transition. Cards remain the overwhelming default for retail transactions, capturing 84.2% of sales value. But the margins around card processing remain high, and the emergence of alternative payment methods is creating new strategic levers for merchants who pay attention.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Card share of retail sales</td>
                <td>84.2%</td>
                <td>Stable</td>
              </tr>
              <tr>
                <td>Alternative payment share</td>
                <td>5.0%</td>
                <td>Growing</td>
              </tr>
              <tr>
                <td>Card processing costs</td>
                <td>&pound;1.48bn</td>
                <td>Persistent</td>
              </tr>
              <tr>
                <td>Cash transaction share</td>
                <td>19.2%</td>
                <td>Declining slowly</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Debit Up, Credit Cooling</h2>
          </div>

          <p>Debit remains the dominant choice while credit card usage continues to decline as customers avoid high-interest borrowing and seek flexible alternatives. The shift reflects broader consumer sentiment — a preference for spending within means rather than accumulating revolving debt.</p>

          <div className="pullquote">
            <p>"The steady migration from credit to debit signals a fundamental change in consumer financial psychology — not a temporary blip."</p>
            <cite>BRC Payments Survey 2025</cite>
          </div>

          <p>For merchants, this means lower average interchange rates on a per-transaction basis, but also a more price-sensitive customer base that responds to payment flexibility at checkout.</p>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>Alternative Payments Are No Longer Optional</h2>
          </div>

          <p>BNPL and wallet-based payments are increasingly used for higher-value purchases, making them a strategic lever for increasing AOV. What was once a niche checkout option is now a mainstream expectation — particularly among younger demographics.</p>

          <div className="stat-row">
            <div className="stat-card">
              <span className="stat-card-num">5.0%</span>
              <span className="stat-card-label">of total sales value via alternatives</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-num">Higher</span>
              <span className="stat-card-label">AOV with BNPL at checkout</span>
            </div>
          </div>

          <div className="callout">
            <div className="callout-label">Merchant Insight</div>
            <p>Payment mix is now a margin strategy — not a technical detail. Offering the right mix of payment options directly impacts conversion rates and average order value.</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>Processing Costs Still Bite</h2>
          </div>

          <p>While volumes dipped slightly, long-term acceptance costs have more than doubled since 2019. Optimising payment routing and alternatives is now a competitive advantage — not an operational afterthought.</p>

          <div className="callout">
            <div className="callout-label">Cost Reality</div>
            <p>At &pound;1.48 billion in card processing costs across UK retail, even marginal improvements in routing efficiency or interchange optimization represent significant savings at scale.</p>
          </div>

          <p>Merchants who actively manage their payment mix — routing transactions to the lowest-cost method that matches customer preference — are reclaiming margin that was previously considered an unavoidable cost of doing business.</p>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2>Cash Isn't Dead — Just Selective</h2>
          </div>

          <p>Cash remains essential for certain customers and regions. Removing it outright can introduce unnecessary friction and alienate a meaningful segment of the customer base.</p>

          <div className="callout">
            <div className="callout-label">Key Takeaway</div>
            <p>Understand your customer mix before making blanket decisions about payment method support. Cash at 19.2% of transactions means nearly one in five purchases still happens in physical currency.</p>
          </div>

          <div className="pullquote">
            <p>"The merchants who win aren't the ones who chase the newest payment method — they're the ones who match their payment stack to their actual customer base."</p>
            <cite>MerchantHaus Payments Team</cite>
          </div>
        </section>

        <hr className="divider" />

        <footer style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--color-text-secondary)", letterSpacing: "0.08em", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <span>MerchantHaus</span>
            <span>Plug in, play and process</span>
            <span>merchanthaus.io</span>
            <span>Payments Team</span>
            <span>December 2025</span>
          </div>
        </footer>

      </div>

      <Footer />
    </div>
  );
}
