import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

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
        <div className="vs-heading-chip inline-block px-8 py-3 rounded-full">
          <h2 className="font-ubuntu text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Platform Value at a Glance
          </h2>
        </div>
      </div>

      {/* Two-column layout: text left, carousel right */}
      <div className="vs-layout">
        {/* Left: animated text description */}
        <div className={`vs-text-panel ${textAnimating ? "vs-text-panel--exit" : "vs-text-panel--enter"}`}>
          <span className="vs-section-emoji" aria-hidden="true">
            {currentSection.emoji}
          </span>
          <h3 className="vs-section-heading">{currentSection.heading}</h3>
          <div className="vs-section-copy">{currentSection.leftCopy}</div>
        </div>

        {/* Right: 3D carousel */}
        <div
          className="vs-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="vs-carousel-scene">
            <div
              className="vs-carousel-ring"
              style={{
                transform: `rotateY(${-(active * (360 / TOTAL))}deg)`,
              }}
            >
              {sections.map((section, i) => {
                const angle = (360 / TOTAL) * i;
                /* Calculate relative angle from front for graduated opacity */
                let relAngle = ((angle - active * (360 / TOTAL)) % 360 + 360) % 360;
                if (relAngle > 180) relAngle = 360 - relAngle;
                const cardOpacity = i === active ? 1 : Math.max(0.25, 1 - relAngle / 220);
                const cardScale = i === active ? 1 : Math.max(0.82, 1 - relAngle / 900);
                return (
                  <div
                    key={section.heading}
                    className={`vs-carousel-card ${i === active ? "vs-carousel-card--active" : ""}`}
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(320px) scale(${cardScale})`,
                      opacity: cardOpacity,
                    }}
                    onClick={() => goTo(i)}
                  >
                    <div className="vs-card-emoji">{section.emoji}</div>
                    <h4 className="vs-card-title">{section.heading}</h4>
                    <ul className="vs-card-stats">
                      {section.stats.map((stat) => (
                        <li key={stat.text} className="vs-card-stat-item">
                          <span className="vs-card-stat-icon" aria-hidden="true">{stat.icon}</span>
                          <span className="vs-card-stat-text">{stat.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
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
          {isPaused ? "▶" : "❚❚"}
        </button>
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

        /* ===== Two-column layout ===== */
        .vs-layout {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: center;
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
          flex: 1 1 50%;
          min-width: 0;
          padding: 1rem 0;
          min-height: 360px;
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
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes vsTextExit {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-12px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vs-text-panel--enter,
          .vs-text-panel--exit {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }

        .vs-section-emoji {
          display: inline-block;
          font-size: 2.2rem;
          margin-bottom: 0.6rem;
        }

        .vs-section-heading {
          font-family: 'Ubuntu', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
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
          margin-bottom: 1.5rem;
        }

        .vs-section-copy p {
          margin: 0 0 0.85rem;
        }

        .vs-section-copy p:last-child {
          margin-bottom: 0;
        }

        /* ===== Right: 3D carousel ===== */
        .vs-carousel-wrapper {
          flex: 0 0 auto;
          width: 380px;
          height: 420px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vs-carousel-scene {
          width: 280px;
          height: 360px;
          perspective: 1000px;
          position: relative;
          transform: rotateX(2deg) rotateY(-5deg);
        }

        .vs-carousel-ring {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .vs-carousel-card {
          position: absolute;
          width: 240px;
          height: 310px;
          top: 15px;
          left: 10px;
          border-radius: 1.25rem;
          border: 1px solid var(--vs-card-border);
          background: var(--vs-card-bg);
          box-shadow:
            0 0 0 1px hsla(210 10% 23%, 0.08),
            0 8px 24px rgba(0, 0, 0, 0.12),
            0 2px 8px rgba(0, 0, 0, 0.08),
            0 0 20px hsla(var(--cyber-teal), 0.10);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          backface-visibility: visible;
          cursor: pointer;
          transition: box-shadow 0.5s ease, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease;
        }

        .dark .vs-carousel-card {
          box-shadow:
            0 0 0 1px rgba(15, 23, 42, 0.7),
            0 8px 24px rgba(0, 0, 0, 0.5),
            0 2px 8px rgba(0, 0, 0, 0.3),
            0 0 16px rgba(59, 130, 246, 0.12);
        }

        .vs-carousel-card--active {
          box-shadow:
            0 0 0 1px hsla(var(--cyber-teal), 0.2),
            0 16px 48px rgba(0, 0, 0, 0.15),
            0 4px 16px rgba(0, 0, 0, 0.1),
            0 0 40px hsla(var(--cyber-teal), 0.25),
            0 0 80px hsla(var(--cyber-teal), 0.12);
        }

        .dark .vs-carousel-card--active {
          box-shadow:
            0 0 0 1px rgba(59, 130, 246, 0.3),
            0 16px 48px rgba(0, 0, 0, 0.6),
            0 4px 16px rgba(0, 0, 0, 0.4),
            0 0 40px rgba(59, 130, 246, 0.3),
            0 0 80px rgba(59, 130, 246, 0.15);
        }

        .vs-card-emoji {
          font-size: 1.8rem;
          line-height: 1;
        }

        .vs-card-title {
          font-family: 'Ubuntu', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--vs-foreground);
          line-height: 1.25;
          margin: 0;
        }

        .vs-card-stats {
          list-style: none;
          margin: 0.4rem 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .vs-card-stat-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
        }

        .vs-card-stat-icon {
          flex: 0 0 auto;
          font-size: 1rem;
          line-height: 1;
          margin-top: 0.1rem;
        }

        .vs-card-stat-text {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--vs-foreground);
          line-height: 1.3;
        }

        /* ===== Navigation arrows ===== */
        .vs-nav-arrows {
          position: absolute;
          inset: 0;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.25rem;
        }

        .vs-arrow {
          pointer-events: auto;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--vs-card-border);
          background: var(--vs-heading-bg);
          color: var(--vs-foreground);
          font-size: 1.6rem;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        .vs-arrow:hover {
          background: hsla(var(--cyber-teal), 0.18);
          border-color: hsla(var(--cyber-teal), 0.5);
          transform: scale(1.08);
        }

        .dark .vs-arrow:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
        }

        /* ===== Bullet dots ===== */
        .vs-bullets {
          display: flex;
          justify-content: center;
          gap: 0.65rem;
          margin-top: 2.5rem;
        }

        .vs-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid hsla(var(--cyber-teal), 0.4);
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }

        .vs-bullet:hover {
          border-color: hsla(var(--cyber-teal), 0.7);
          transform: scale(1.15);
        }

        .vs-bullet--active {
          background: hsl(var(--cyber-teal));
          border-color: hsl(var(--cyber-teal));
          transform: scale(1.2);
        }

        .dark .vs-bullet {
          border-color: rgba(59, 130, 246, 0.4);
        }

        .dark .vs-bullet:hover {
          border-color: rgba(59, 130, 246, 0.7);
        }

        .dark .vs-bullet--active {
          background: hsl(210, 100%, 60%);
          border-color: hsl(210, 100%, 60%);
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
          border-radius: 0.5rem;
          transition: color 0.2s ease, background 0.2s ease;
          letter-spacing: 0.12em;
        }

        .vs-pause-btn:hover {
          color: var(--vs-foreground);
          background: hsla(var(--cyber-teal), 0.08);
        }

        /* ===== Responsive ===== */
        @media (max-width: 899px) {
          .vs-layout {
            flex-direction: column-reverse;
          }

          .vs-carousel-wrapper {
            width: 100%;
            max-width: 380px;
            height: 380px;
          }

          .vs-carousel-scene {
            width: 250px;
            height: 320px;
            perspective: 850px;
            transform: rotateX(2deg) rotateY(-3deg);
          }

          .vs-carousel-card {
            width: 220px;
            height: 290px;
            top: 10px;
            left: 10px;
          }

          .vs-text-panel {
            min-height: auto;
            text-align: center;
            align-items: center;
          }

          .vs-section-copy {
            max-width: 100%;
          }

        }

        @media (max-width: 480px) {
          .vs-carousel-wrapper {
            height: 340px;
          }

          .vs-carousel-scene {
            width: 210px;
            height: 280px;
            perspective: 700px;
            transform: rotateX(2deg) rotateY(-3deg);
          }

          .vs-carousel-card {
            width: 185px;
            height: 250px;
            top: 10px;
            left: 7px;
            padding: 1.1rem 1rem;
          }

          .vs-card-emoji {
            font-size: 1.4rem;
          }

          .vs-card-title {
            font-size: 0.92rem;
          }

          .vs-card-stat-text {
            font-size: 0.8rem;
          }

          .vs-carousel-card {
            transform-origin: center center;
          }
        }

        /* ===== Reduced motion ===== */
        @media (prefers-reduced-motion: reduce) {
          .vs-carousel-ring {
            transition: none;
          }

          .vs-text-panel--enter,
          .vs-text-panel--exit {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ValueStats;
