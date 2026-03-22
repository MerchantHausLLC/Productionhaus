import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ShoppingCart,
  Zap,
  Plug,
  Globe,
  Lock,
  Activity,
  TrendingDown,
  Shield,
  TrendingUp,
  Shuffle,
  ArrowUp,
  RefreshCw,
  RefreshCcw,
  Cloud,
  DollarSign,
  CreditCard,
  Smartphone,
  BarChart3,
  ClipboardList,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Section data – 7 merchant-first modular sections                   */
/* ------------------------------------------------------------------ */

type Section = {
  icon: ReactNode;
  heading: string;
  leftCopy: ReactNode;
  stats: { icon: ReactNode; text: string }[];
};

const iconClass = "w-5 h-5 text-current";
const sectionIconClass = "w-6 h-6 text-current";

const sections: Section[] = [
  {
    icon: <ShoppingCart className={sectionIconClass} strokeWidth={1.5} />,
    heading: "Seamless Platform Integrations",
    leftCopy: (
      <>
        <p>
          Connect instantly to 200+ leading commerce platforms and enterprise
          systems. No custom development. No gateway rebuilds. Deploy quickly and
          scale confidently with payment infrastructure built for high-volume operations.
        </p>
        <p>
          Engineered for organizations that demand speed to market without
          sacrificing performance or flexibility.
        </p>
      </>
    ),
    stats: [
      { icon: <ShoppingCart className={iconClass} strokeWidth={1.5} />, text: "200+ platform integrations" },
      { icon: <Zap className={iconClass} strokeWidth={1.5} />, text: "Go live in days, not months" },
      { icon: <Plug className={iconClass} strokeWidth={1.5} />, text: "Plug-and-play deployment" },
      { icon: <Globe className={iconClass} strokeWidth={1.5} />, text: "Compatible with leading systems" },
    ],
  },
  {
    icon: <Lock className={sectionIconClass} strokeWidth={1.5} />,
    heading: "Intelligent Fraud Protection",
    leftCopy: (
      <>
        <p>
          Reduce chargebacks by up to 70% with built-in 3D Secure, behavioral
          analysis, and adaptive fraud controls. Stop bad actors without
          introducing friction for legitimate transactions.
        </p>
        <p>
          Protect revenue while improving approval rates and reducing false
          declines.
        </p>
      </>
    ),
    stats: [
      { icon: <Lock className={iconClass} strokeWidth={1.5} />, text: "Up to 70% chargeback reduction" },
      { icon: <Activity className={iconClass} strokeWidth={1.5} />, text: "Real-time risk scoring" },
      { icon: <TrendingDown className={iconClass} strokeWidth={1.5} />, text: "Reduced false declines" },
      { icon: <Shield className={iconClass} strokeWidth={1.5} />, text: "Adaptive authentication" },
    ],
  },
  {
    icon: <TrendingUp className={sectionIconClass} strokeWidth={1.5} />,
    heading: "Approval Rate Optimization",
    leftCopy: (
      <>
        <p>
          Intelligent transaction routing and multi-processor redundancy help
          maximize authorization success. Automatically route transactions to
          optimize performance and minimize declines.
        </p>
        <p>
          Higher approval rates mean more completed transactions and more captured
          revenue.
        </p>
      </>
    ),
    stats: [
      { icon: <TrendingUp className={iconClass} strokeWidth={1.5} />, text: "Smart transaction routing" },
      { icon: <Shuffle className={iconClass} strokeWidth={1.5} />, text: "Multi-processor redundancy" },
      { icon: <Globe className={iconClass} strokeWidth={1.5} />, text: "40+ global processors" },
      { icon: <ArrowUp className={iconClass} strokeWidth={1.5} />, text: "Higher authorization rates" },
    ],
  },
  {
    icon: <Zap className={sectionIconClass} strokeWidth={1.5} />,
    heading: "High-Speed Processing",
    leftCopy: (
      <p>
        Sub-300 millisecond authorization speeds deliver smoother transaction
        experiences and reduce abandonment. Faster processing directly
        supports higher conversion rates and stronger operational throughput.
      </p>
    ),
    stats: [
      { icon: <Zap className={iconClass} strokeWidth={1.5} />, text: "< 300ms authorizations" },
      { icon: <TrendingDown className={iconClass} strokeWidth={1.5} />, text: "Lower transaction abandonment" },
      { icon: <ArrowUp className={iconClass} strokeWidth={1.5} />, text: "Faster transaction flow" },
      { icon: <TrendingUp className={iconClass} strokeWidth={1.5} />, text: "Stronger conversions" },
    ],
  },
  {
    icon: <RefreshCw className={sectionIconClass} strokeWidth={1.5} />,
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
      { icon: <RefreshCw className={iconClass} strokeWidth={1.5} />, text: "99.99% uptime" },
      { icon: <RefreshCcw className={iconClass} strokeWidth={1.5} />, text: "Intelligent failover" },
      { icon: <Cloud className={iconClass} strokeWidth={1.5} />, text: "Resilient cloud infrastructure" },
      { icon: <DollarSign className={iconClass} strokeWidth={1.5} />, text: "Protected peak revenue" },
    ],
  },
  {
    icon: <CreditCard className={sectionIconClass} strokeWidth={1.5} />,
    heading: "Omnichannel Payment Acceptance",
    leftCopy: (
      <>
        <p>
          Accept cards, digital wallets, ACH, and alternative payment methods
          across in-person, online, mobile, and recurring environments — all
          through a unified gateway.
        </p>
        <p>
          Deliver consistent payment experiences across every channel your
          organization operates.
        </p>
      </>
    ),
    stats: [
      { icon: <CreditCard className={iconClass} strokeWidth={1.5} />, text: "100+ payment methods" },
      { icon: <Smartphone className={iconClass} strokeWidth={1.5} />, text: "Wallet + ACH support" },
      { icon: <Globe className={iconClass} strokeWidth={1.5} />, text: "Global payment coverage" },
      { icon: <RefreshCcw className={iconClass} strokeWidth={1.5} />, text: "Recurring-ready" },
    ],
  },
  {
    icon: <BarChart3 className={sectionIconClass} strokeWidth={1.5} />,
    heading: "Real-Time Visibility & Control",
    leftCopy: (
      <p>
        Monitor transaction performance, fraud trends, approval rates, and
        portfolio activity in real time. Make faster optimization decisions backed
        by live reporting and actionable insights.
      </p>
    ),
    stats: [
      { icon: <BarChart3 className={iconClass} strokeWidth={1.5} />, text: "Real-time reporting" },
      { icon: <TrendingUp className={iconClass} strokeWidth={1.5} />, text: "Approval tracking" },
      { icon: <Shield className={iconClass} strokeWidth={1.5} />, text: "Fraud trend monitoring" },
      { icon: <ClipboardList className={iconClass} strokeWidth={1.5} />, text: "Advanced analytics" },
    ],
  },
];

const TOTAL = sections.length;
const AUTO_INTERVAL = 5000;

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

export const ValueStats = () => {
  const [active, setActive] = useState(0);
  const [textAnimating, setTextAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Auto-rotation */
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTextAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % TOTAL);
        setTextAnimating(false);
      }, 350);
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    if (!isPaused) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, startTimer]);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      setTextAnimating(true);
      setTimeout(() => {
        setActive(index);
        setTextAnimating(false);
      }, 350);
      if (!isPaused) startTimer();
    },
    [active, isPaused, startTimer]
  );

  const goNext = useCallback(() => {
    goTo((active + 1) % TOTAL);
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    goTo((active - 1 + TOTAL) % TOTAL);
  }, [active, goTo]);

  const currentSection = sections[active];

  return (
    <section className="vs-section py-20 px-4 sm:px-6 bg-transparent">
      {/* Section heading */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="font-rajdhani text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase">
          Platform Capabilities at a Glance
        </h2>
      </div>

      {/* Two-column layout: text left, card right */}
      <div className="vs-layout">
        {/* Left: animated text description */}
        <div className={`vs-text-panel ${textAnimating ? "vs-text-panel--exit" : "vs-text-panel--enter"}`}>
          <span className="vs-section-icon" aria-hidden="true">
            {currentSection.icon}
          </span>
          <h3 className="vs-section-heading">{currentSection.heading}</h3>
          <div className="vs-section-copy">{currentSection.leftCopy}</div>
        </div>

        {/* Right: flat card display */}
        <div
          className="vs-card-panel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`vs-flat-card ${textAnimating ? "vs-flat-card--exit" : "vs-flat-card--enter"}`}>
            <div className="vs-card-icon">{currentSection.icon}</div>
            <h4 className="vs-card-title">{currentSection.heading}</h4>
            <ul className="vs-card-stats">
              {currentSection.stats.map((stat) => (
                <li key={stat.text} className="vs-card-stat-item">
                  <span className="vs-card-stat-icon" aria-hidden="true">{stat.icon}</span>
                  <span className="vs-card-stat-text">{stat.text}</span>
                </li>
              ))}
            </ul>
            <div className="vs-card-index">
              {String(active + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
            </div>
          </div>

          {/* Arrow navigation */}
          <div className="vs-nav-arrows">
            <button
              className="vs-arrow vs-arrow--prev"
              onClick={goPrev}
              aria-label="Previous card"
            >
              ‹
            </button>
            <button
              className="vs-arrow vs-arrow--next"
              onClick={goNext}
              aria-label="Next card"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Bullet navigation */}
      <div className="vs-bullets">
        {sections.map((section, i) => (
          <button
            key={section.heading}
            className={`vs-bullet ${i === active ? "vs-bullet--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${section.heading}`}
          />
        ))}
      </div>

      {/* Pause / Play toggle */}
      <div className="vs-pause-wrap">
        <button
          className="vs-pause-btn"
          onClick={() => setIsPaused((p) => !p)}
          aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
        >
          {isPaused ? "▶" : "II"}
        </button>
      </div>

      <style>{`
        /* ===== CSS variables ===== */
        .vs-section {
          --vs-card-bg: hsl(0 0% 100%);
          --vs-card-border: hsl(var(--border));
          --vs-foreground: hsl(var(--foreground));
          --vs-muted: hsla(0, 0%, 30%, 0.85);
          --vs-heading-bg: hsla(0, 0%, 0%, 0.03);
          --vs-heading-border: hsla(0, 0%, 0%, 0.1);
          --vs-heading-foreground: hsl(var(--foreground));
          overflow-x: clip;
        }

        .dark .vs-section {
          --vs-card-bg: hsl(0 0% 10%);
          --vs-card-border: hsl(0 0% 20%);
          --vs-foreground: hsl(0 0% 95%);
          --vs-muted: rgba(200, 200, 200, 0.8);
          --vs-heading-bg: rgba(255, 255, 255, 0.05);
          --vs-heading-border: rgba(255, 255, 255, 0.1);
          --vs-heading-foreground: hsl(0 0% 95%);
        }

        /* ===== Two-column layout ===== */
        .vs-layout {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: stretch;
        }

        @media (min-width: 900px) {
          .vs-layout {
            flex-direction: row;
            align-items: center;
            gap: 4rem;
          }
        }

        /* ===== Left: animated text panel ===== */
        .vs-text-panel {
          flex: 1 1 55%;
          min-width: 0;
          padding: 1rem 0;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .vs-text-panel--enter {
          animation: vsTextEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .vs-text-panel--exit {
          animation: vsTextExit 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards;
        }

        @keyframes vsTextEnter {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes vsTextExit {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-12px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-text-panel--enter,
          .vs-text-panel--exit,
          .vs-flat-card--enter,
          .vs-flat-card--exit {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }

        .vs-section-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          margin-bottom: 0.6rem;
          color: var(--vs-foreground);
          opacity: 0.7;
        }

        .vs-section-heading {
          font-family: 'Rajdhani', system-ui, sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 700;
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
          margin-bottom: 1.5rem;
        }

        .vs-section-copy p {
          margin: 0 0 0.85rem;
        }

        .vs-section-copy p:last-child {
          margin-bottom: 0;
        }

        /* ===== Right: flat card panel ===== */
        .vs-card-panel {
          flex: 0 0 auto;
          width: 340px;
          position: relative;
        }

        .vs-flat-card {
          background: var(--vs-card-bg);
          border: 1px solid var(--vs-card-border);
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.3s ease;
        }

        .vs-flat-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .dark .vs-flat-card {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .dark .vs-flat-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        .vs-flat-card--enter {
          animation: vsCardEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .vs-flat-card--exit {
          animation: vsCardExit 0.35s cubic-bezier(0.55, 0, 1, 0.45) forwards;
        }

        @keyframes vsCardEnter {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes vsCardExit {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-8px); }
        }

        .vs-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.8rem;
          height: 1.8rem;
          color: var(--vs-foreground);
          opacity: 0.7;
        }

        .vs-card-title {
          font-family: 'Rajdhani', system-ui, sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--vs-foreground);
          line-height: 1.25;
          margin: 0;
        }

        .vs-card-stats {
          list-style: none;
          margin: 0.6rem 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .vs-card-stat-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .vs-card-stat-icon {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1rem;
          height: 1rem;
          margin-top: 0.15rem;
          color: var(--vs-foreground);
          opacity: 0.6;
        }

        .vs-card-stat-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--vs-foreground);
          line-height: 1.3;
        }

        .vs-card-index {
          margin-top: 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: var(--vs-muted);
          text-transform: uppercase;
          font-family: 'Montserrat', system-ui, sans-serif;
        }

        /* ===== Navigation arrows ===== */
        .vs-nav-arrows {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .vs-arrow {
          width: 40px;
          height: 40px;
          border: 1px solid var(--vs-card-border);
          background: transparent;
          color: var(--vs-foreground);
          font-size: 1.4rem;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .vs-arrow:hover {
          background: hsla(0, 0%, 0%, 0.06);
          border-color: hsla(0, 0%, 0%, 0.3);
        }

        .dark .vs-arrow:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* ===== Bullet dots ===== */
        .vs-bullets {
          display: flex;
          justify-content: center;
          gap: 0.65rem;
          margin-top: 2.5rem;
        }

        .vs-bullet {
          width: 10px;
          height: 10px;
          border-radius: 0;
          border: 1.5px solid hsla(0, 0%, 0%, 0.2);
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .vs-bullet:hover {
          border-color: hsla(0, 0%, 0%, 0.5);
        }

        .vs-bullet--active {
          background: hsl(var(--foreground));
          border-color: hsl(var(--foreground));
        }

        .dark .vs-bullet {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .dark .vs-bullet:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }

        .dark .vs-bullet--active {
          background: hsl(0 0% 90%);
          border-color: hsl(0 0% 90%);
        }

        /* ===== Pause button ===== */
        .vs-pause-wrap {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }

        .vs-pause-btn {
          background: none;
          border: none;
          color: var(--vs-muted);
          font-size: 0.85rem;
          cursor: pointer;
          padding: 0.35rem 0.75rem;
          transition: color 0.2s ease, background 0.2s ease;
          letter-spacing: 0.12em;
        }

        .vs-pause-btn:hover {
          color: var(--vs-foreground);
          background: hsla(0, 0%, 0%, 0.05);
        }

        /* ===== Responsive ===== */
        @media (max-width: 899px) {
          .vs-layout {
            flex-direction: column-reverse;
          }

          .vs-card-panel {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
          }

          .vs-text-panel {
            min-height: auto;
            text-align: center;
            align-items: center;
          }

          .vs-section-copy {
            max-width: 100%;
          }

          .vs-nav-arrows {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ValueStats;
