import { useEffect, useRef, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Section data – 7 merchant-first modular sections                   */
/* ------------------------------------------------------------------ */

type Section = {
  emoji: string;
  heading: string;
  leftCopy: ReactNode;
  stats: { icon: string; text: string }[];
};

const sections: Section[] = [
  {
    emoji: "🛒",
    heading: "Seamless eCommerce Integrations",
    leftCopy: (
      <>
        <p>
          Connect instantly to 200+ leading eCommerce platforms and shopping
          carts. No custom development. No gateway rebuilds. Launch quickly and
          scale confidently with a payment infrastructure built for growth.
        </p>
        <p>
          Designed for merchants who want speed to market without sacrificing
          performance or flexibility.
        </p>
      </>
    ),
    stats: [
      { icon: "🛒", text: "200+ eCommerce integrations" },
      { icon: "🚀", text: "Go live in days, not months" },
      { icon: "🔌", text: "Plug-and-play setup" },
      { icon: "🌎", text: "Compatible with leading platforms" },
    ],
  },
  {
    emoji: "🔒",
    heading: "Intelligent Fraud Protection",
    leftCopy: (
      <>
        <p>
          Reduce chargebacks by up to 70% with built-in 3D Secure, behavioral
          analysis, and adaptive fraud controls. Stop bad actors without
          introducing friction for legitimate customers.
        </p>
        <p>
          Protect revenue while improving approval rates and reducing false
          declines.
        </p>
      </>
    ),
    stats: [
      { icon: "🔒", text: "Up to 70% chargeback reduction" },
      { icon: "🧠", text: "Real-time risk scoring" },
      { icon: "📉", text: "Reduced false declines" },
      { icon: "🛡", text: "Adaptive authentication" },
    ],
  },
  {
    emoji: "📈",
    heading: "Approval Rate Optimization",
    leftCopy: (
      <>
        <p>
          Intelligent transaction routing and multi-processor redundancy help
          maximize authorization success. Automatically route transactions to
          optimize performance and minimize declines.
        </p>
        <p>
          Higher approval rates mean more completed checkouts and more captured
          revenue.
        </p>
      </>
    ),
    stats: [
      { icon: "📈", text: "Smart transaction routing" },
      { icon: "🔀", text: "Multi-processor redundancy" },
      { icon: "🌍", text: "40+ global processors" },
      { icon: "⬆️", text: "Higher authorization rates" },
    ],
  },
  {
    emoji: "⚡",
    heading: "High-Speed Processing",
    leftCopy: (
      <p>
        Sub-300 millisecond authorization speeds create smoother checkout
        experiences and reduce abandoned carts. Faster transactions directly
        support higher conversion rates and stronger customer satisfaction.
      </p>
    ),
    stats: [
      { icon: "⚡", text: "< 300ms authorizations" },
      { icon: "📉", text: "Fewer abandoned carts" },
      { icon: "🚀", text: "Faster checkout flow" },
      { icon: "📈", text: "Stronger conversions" },
    ],
  },
  {
    emoji: "🔁",
    heading: "Enterprise-Grade Uptime",
    leftCopy: (
      <>
        <p>
          Built on resilient infrastructure with automatic failover protection,
          your payments stay online even during peak demand or upstream
          disruptions.
        </p>
        <p>Revenue doesn't stop — even when others do.</p>
      </>
    ),
    stats: [
      { icon: "🔁", text: "99.99% uptime" },
      { icon: "🔄", text: "Intelligent failover" },
      { icon: "☁️", text: "Resilient cloud infrastructure" },
      { icon: "💵", text: "Protected peak revenue" },
    ],
  },
  {
    emoji: "💳",
    heading: "Omnichannel Payment Acceptance",
    leftCopy: (
      <>
        <p>
          Accept cards, digital wallets, ACH, and alternative payment methods
          across in-store, online, mobile, and recurring environments — all
          through a unified gateway.
        </p>
        <p>
          Deliver consistent payment experiences wherever your customers
          transact.
        </p>
      </>
    ),
    stats: [
      { icon: "💳", text: "100+ payment methods" },
      { icon: "📱", text: "Wallet + ACH support" },
      { icon: "🌎", text: "Global payment coverage" },
      { icon: "🔄", text: "Recurring-ready" },
    ],
  },
  {
    emoji: "📊",
    heading: "Real-Time Visibility & Control",
    leftCopy: (
      <p>
        Monitor transaction performance, fraud trends, approval rates, and
        merchant activity in real time. Make faster optimization decisions backed
        by live reporting and actionable insights.
      </p>
    ),
    stats: [
      { icon: "📊", text: "Real-time reporting" },
      { icon: "📈", text: "Approval tracking" },
      { icon: "🛡", text: "Fraud trend monitoring" },
      { icon: "📋", text: "Advanced analytics" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Intersection Observer reveal hook (scroll-triggered)               */
/* ------------------------------------------------------------------ */

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ------------------------------------------------------------------ */
/*  Single two-column section                                          */
/* ------------------------------------------------------------------ */

function ValueSection({
  section,
}: {
  section: Section;
}) {
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className="vs-row">
      {/* Left: text window */}
      <div className={`vs-text ${visible ? "vs-text--visible" : ""}`}>
        <span className="vs-section-emoji" aria-hidden="true">
          {section.emoji}
        </span>
        <h3 className="vs-section-heading">{section.heading}</h3>
        <div className="vs-section-copy">{section.leftCopy}</div>
      </div>

      {/* Right: stat card */}
      <div className={`vs-card ${visible ? "vs-card--visible" : ""}`}>
        <ul className="vs-stat-list">
          {section.stats.map((stat) => (
            <li key={stat.text} className="vs-stat-item">
              <span className="vs-stat-icon" aria-hidden="true">
                {stat.icon}
              </span>
              <span className="vs-stat-text">{stat.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export const ValueStats = () => {
  return (
    <section className="vs-section py-20 px-4 sm:px-6 bg-transparent">
      {/* Section heading */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <div className="vs-heading-chip inline-block px-8 py-3 rounded-full">
          <h2 className="font-ubuntu text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Platform Value at a Glance
          </h2>
        </div>
      </div>

      {/* Modular sections */}
      <div className="vs-sections-wrap">
        {sections.map((section) => (
          <ValueSection key={section.heading} section={section} />
        ))}
      </div>

      <style>{`
        /* ===== CSS variables ===== */
        .vs-section {
          --vs-card-bg: linear-gradient(150deg, hsl(0 0% 100%), hsl(210 17% 97%));
          --vs-card-border: hsl(var(--border));
          --vs-card-shadow:
            0 0 0 1px hsla(210 10% 23%, 0.08),
            0 12px 32px rgba(0, 0, 0, 0.07),
            0 0 24px hsla(var(--cyber-teal), 0.10);
          --vs-icon-bg: hsl(var(--muted));
          --vs-foreground: hsl(var(--foreground));
          --vs-muted: hsla(0, 0%, 30%, 0.85);
          --vs-heading-bg: hsla(var(--cyber-teal), 0.08);
          --vs-heading-border: hsla(var(--cyber-teal), 0.35);
          --vs-heading-foreground: hsl(var(--foreground));
          --vs-stat-highlight: hsl(var(--cyber-teal));
          overflow-x: clip;
        }

        .dark .vs-section {
          --vs-card-bg: linear-gradient(150deg, #020617, #020617 55%, #111827);
          --vs-card-border: #1f2937;
          --vs-card-shadow:
            0 0 0 1px rgba(15, 23, 42, 0.7),
            0 12px 32px rgba(0, 0, 0, 0.7),
            0 0 18px rgba(59, 130, 246, 0.20);
          --vs-icon-bg: #020617;
          --vs-foreground: #f9fafb;
          --vs-muted: rgba(229, 231, 235, 0.9);
          --vs-heading-bg: rgba(17, 24, 39, 0.9);
          --vs-heading-border: rgba(55, 65, 81, 0.8);
          --vs-heading-foreground: #f9fafb;
          --vs-stat-highlight: hsl(210, 100%, 60%);
        }

        .vs-heading-chip {
          border: 2px solid var(--vs-heading-border);
          background: var(--vs-heading-bg);
          color: var(--vs-heading-foreground);
          transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease;
        }

        /* ===== Sections wrapper ===== */
        .vs-sections-wrap {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        /* ===== Each row (two-column) ===== */
        .vs-row {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: stretch;
        }

        @media (min-width: 768px) {
          .vs-row {
            flex-direction: row;
            align-items: center;
            gap: 3rem;
          }
        }

        /* ===== Left: text window ===== */
        .vs-text {
          flex: 1 1 55%;
          min-width: 0;
          padding: 1rem 0;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .vs-text--visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-text {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        .vs-section-emoji {
          display: inline-block;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .vs-section-heading {
          font-family: 'Ubuntu', sans-serif;
          font-size: clamp(1.5rem, 3.5vw, 2.2rem);
          font-weight: 800;
          line-height: 1.15;
          color: var(--vs-foreground);
          margin: 0 0 1rem;
          letter-spacing: -0.01em;
        }

        .vs-section-copy {
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.75;
          color: var(--vs-muted);
          max-width: 36rem;
        }

        .vs-section-copy p {
          margin: 0 0 0.85rem;
        }

        .vs-section-copy p:last-child {
          margin-bottom: 0;
        }

        /* ===== Right: stat card ===== */
        .vs-card {
          flex: 0 0 auto;
          width: 100%;
          max-width: 340px;
          border-radius: 1.25rem;
          border: 1px solid var(--vs-card-border);
          background: var(--vs-card-bg);
          box-shadow: var(--vs-card-shadow);
          padding: 2rem 1.75rem;
          opacity: 0;
          transform: translateY(24px) scale(0.97);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
                      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }

        .vs-card--visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-card {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        @media (min-width: 768px) {
          .vs-card {
            flex: 0 0 340px;
          }
        }

        @media (max-width: 767px) {
          .vs-card {
            max-width: 100%;
            margin: 0 auto;
          }
        }

        /* ===== Stat list ===== */
        .vs-stat-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .vs-stat-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }

        .vs-stat-icon {
          flex: 0 0 auto;
          font-size: 1.4rem;
          line-height: 1;
          margin-top: 0.1rem;
        }

        .vs-stat-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--vs-foreground);
          line-height: 1.35;
          letter-spacing: 0.01em;
        }

        /* Bold numbers / highlight within text */
        .vs-stat-text strong,
        .vs-stat-text b {
          color: var(--vs-stat-highlight);
        }

        /* ===== Hover effect on card ===== */
        @media (hover: hover) {
          .vs-card:hover {
            box-shadow:
              var(--vs-card-shadow),
              0 0 20px hsla(var(--cyber-teal), 0.18);
            transform: translateY(-2px) scale(1.005);
            transition-delay: 0s;
          }

          .dark .vs-card:hover {
            box-shadow:
              var(--vs-card-shadow),
              0 0 20px rgba(59, 130, 246, 0.25);
          }
        }
      `}</style>
    </section>
  );
};

export default ValueStats;
