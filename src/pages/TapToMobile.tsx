import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { PageSEO } from "@/components/PageSEO";

const accent = "#993556";
const accentLight = "#FBEAF0";
const accentDark = "#4B1528";

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
    font-size: 7rem;
    font-weight: 900;
    color: var(--color-border-tertiary);
    opacity: 0.12;
    pointer-events: none;
    user-select: none;
    line-height: 1;
    z-index: 0;
  }

  .checklist {
    background: var(--color-background-secondary);
    border: 0.5px solid var(--color-border-tertiary);
    border-radius: var(--border-radius-lg);
    padding: 1.5rem;
    margin: 1.5rem 0;
  }

  .checklist-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
  }

  .checklist ol {
    list-style: none;
    counter-reset: checklist;
    padding: 0;
    margin: 0;
  }

  .checklist li {
    counter-increment: checklist;
    padding: 0.5rem 0;
    border-bottom: 0.5px solid var(--color-border-tertiary);
    font-size: 14px;
    display: flex;
    gap: 0.75rem;
    align-items: baseline;
  }

  .checklist li:last-child {
    border-bottom: none;
  }

  .checklist li::before {
    content: counter(checklist, decimal-leading-zero);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: ${accent};
    flex-shrink: 0;
    min-width: 1.5rem;
  }

  @media (max-width: 600px) {
    .hero-stats { grid-template-columns: 1fr 1fr; }
    .hero-stats .hero-stat:last-child { grid-column: span 2; }
    .stat-row { grid-template-columns: 1fr; }
    .watermark { font-size: 4rem; }
  }
`;

export default function TapToMobile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Tap-to-Mobile Is the New POS: How to Get Paid With Just a Phone in 2025"
        description="How Tap-to-Mobile turns any NFC phone into a secure payment terminal — and why it's the fastest-growing acceptance method for merchants."
        path="/tap-to-mobile"
      />
      <style>{blogStyles}</style>

      <Header />

      <div className="blog-root">

        <div className="hero" style={{ position: "relative", overflow: "hidden" }}>
          <span className="watermark">TAP</span>
          <div className="kicker">MerchantHaus — Merchant Acceptance — 2025</div>
          <h1>Tap-to-Mobile Is the New POS</h1>
          <p className="hero-sub">In 2025, the fastest-growing POS terminal isn't a terminal at all — it's a smartphone. Tap-to-Mobile turns any NFC phone into a secure payment acceptance device with zero extra hardware.</p>
          <div className="hero-meta">
            <span>MerchantHaus</span>
            <span>Payments Team</span>
            <span>November 2025</span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">$0</span>
              <span className="hero-stat-label">hardware cost to start</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">Hours</span>
              <span className="hero-stat-label">to onboard not weeks</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">NFC</span>
              <span className="hero-stat-label">cards and wallets accepted</span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", fontWeight: 300, color: "var(--color-text-secondary)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Tap-to-Mobile (also called Tap-to-Phone or softPOS) turns any NFC-enabled smartphone into a secure payment acceptance device, letting merchants take contactless cards and wallets with zero extra hardware. For many businesses, it's the simplest path to contactless payments with the lowest cost to start and scale.
        </p>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">01</span>
            <h2>Smartphones Are Eating the POS Terminal</h2>
          </div>

          <p>The old POS stack was hardware-first: a countertop terminal plus a payments app. Tap-to-Mobile flips that on its head. The phone becomes the terminal, while software becomes the POS.</p>

          <p>That change is showing up everywhere — pop-ups, food trucks, service pros, and even in permanent retail as a "third lane" for line-busting. NMI's 2025 outlook calls Tap-to-Mobile one of the biggest accelerants of contactless growth, driven by lower barriers to acceptance and faster time-to-revenue.</p>

          <div className="pullquote">
            <p>"Most customers already assume they can tap. If you can't accept a tap when they're ready to pay, you're not missing a feature — you're leaking revenue."</p>
            <cite>NMI 2025 Payments Outlook</cite>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">02</span>
            <h2>Why Merchants Care</h2>
          </div>

          <p>Tap-to-Mobile removes the biggest barriers to payment acceptance: upfront hardware cost, long deployment timelines, and device management complexity.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Advantage</th>
                <th>Detail</th>
                <th>Who Benefits Most</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lower upfront cost</td>
                <td>No terminals to buy, ship, or replace</td>
                <td>Startups, seasonal sellers, franchise rollouts</td>
              </tr>
              <tr>
                <td>Faster rollouts</td>
                <td>Onboard once, download app, start taking taps in hours</td>
                <td>Multi-location businesses</td>
              </tr>
              <tr>
                <td>Field-sales friendly</td>
                <td>If your business moves, your POS moves too</td>
                <td>Service pros, events, pop-ups</td>
              </tr>
              <tr>
                <td>OTA updates</td>
                <td>New features and compliance updates arrive over the air</td>
                <td>All merchants — no device swaps needed</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">03</span>
            <h2>Where Tap-to-Mobile Fits Best</h2>
          </div>

          <p>Like any tool, Tap-to-Mobile has sweet spots and limitations. The merchants who get the most value are the ones who match the technology to the right use case.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Use Case</th>
                <th>Fit</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quick-service &amp; small retail</td>
                <td>Excellent</td>
                <td>Line busting, curbside, or backup lanes</td>
              </tr>
              <tr>
                <td>Events &amp; venues</td>
                <td>Excellent</td>
                <td>Booths, runners, merch tables, festivals</td>
              </tr>
              <tr>
                <td>Service professionals</td>
                <td>Excellent</td>
                <td>Plumbers, electricians, home care, delivery-plus-pay</td>
              </tr>
              <tr>
                <td>Micro-merchants</td>
                <td>Excellent</td>
                <td>Side hustles, weekend markets, first-time sellers</td>
              </tr>
              <tr>
                <td>High-volume multi-lane retail</td>
                <td>Limited</td>
                <td>Dedicated hardware still wins on speed + peripherals</td>
              </tr>
              <tr>
                <td>Complex hospitality</td>
                <td>Hybrid</td>
                <td>Software POS + some fixed endpoints likely needed</td>
              </tr>
              <tr>
                <td>Rugged environments</td>
                <td>Limited</td>
                <td>Extra device protection and battery discipline required</td>
              </tr>
            </tbody>
          </table>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">04</span>
            <h2>Choosing a Provider in 2025</h2>
          </div>

          <p>Not all Tap-to-Mobile solutions are created equal. The checklist below covers the questions that separate production-ready platforms from demo-ware.</p>

          <div className="checklist">
            <div className="checklist-title">Provider Evaluation Checklist</div>
            <ol>
              <li><strong>Device &amp; OS support:</strong> iOS/Android coverage, minimum models, NFC reliability.</li>
              <li><strong>Acceptance breadth:</strong> EMV contactless, Apple Pay/Google Pay, regional wallets.</li>
              <li><strong>Security &amp; certification:</strong> PCI CPoC/softPOS certification, encryption, runtime protection.</li>
              <li><strong>Pricing clarity:</strong> Clean per-transaction rates, no hidden enablement fees.</li>
              <li><strong>Onboarding speed:</strong> Automated KYC, smart fallbacks for edge cases.</li>
              <li><strong>POS compatibility:</strong> Standalone use and/or API/SDK for embedding.</li>
              <li><strong>Offline behavior:</strong> Safe queuing, reliable reconnection handling.</li>
              <li><strong>Support model:</strong> 24/7 coverage, SLAs, clear ownership for device issues.</li>
            </ol>
          </div>

          <div className="callout">
            <div className="callout-label">Due Diligence</div>
            <p>If a provider can't confidently answer these points, they're not ready for your merchants — or your brand.</p>
          </div>
        </section>

        <hr className="divider" />

        <section className="section">
          <div className="section-header">
            <span className="section-num">05</span>
            <h2>The Takeaway</h2>
          </div>

          <p>Tap-to-Mobile is moving from "nice-to-have" to default acceptance. For many merchants, it's the simplest path to contactless payments with the lowest cost to start and scale.</p>

          <div className="pullquote">
            <p>"The smart play isn't ripping out terminals overnight — it's adding Tap-to-Mobile where it expands revenue fastest: events, quick-service peaks, and field sales."</p>
            <cite>MerchantHaus Payments Team</cite>
          </div>

          <div className="callout">
            <div className="callout-label">Want Help Mapping Fit?</div>
            <p>Drop your merchant type (quick-service, events, multi-site retail, service pros, etc.) and we'll sketch a rollout plan that makes Tap-to-Mobile pay for itself.</p>
          </div>
        </section>

        <hr className="divider" />

        <footer style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "var(--color-text-secondary)", letterSpacing: "0.08em", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <span>MerchantHaus</span>
            <span>Plug in, play and process</span>
            <span>merchanthaus.io</span>
            <span>Payments Team</span>
            <span>November 2025</span>
          </div>
        </footer>

      </div>

      <Footer />
    </div>
  );
}
