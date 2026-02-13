import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type IconProps = {
  className?: string;
};

// Simple internal icon components so we don't depend on external icon libraries
const ZapIcon = ({ className }: IconProps) => (
  <span className={className} aria-hidden="true">
    ⚡
  </span>
);

const TrendingUpIcon = ({ className }: IconProps) => (
  <span className={className} aria-hidden="true">
    📈
  </span>
);

const ShoppingCartIcon = ({ className }: IconProps) => (
  <span className={className} aria-hidden="true">
    🛒
  </span>
);

const ShieldCheckIcon = ({ className }: IconProps) => (
  <span className={className} aria-hidden="true">
    ✅
  </span>
);

const UsersIcon = ({ className }: IconProps) => (
  <span className={className} aria-hidden="true">
    👥
  </span>
);

/* ------------------------------------------------------------------ */
/*  Helper: extract rotateY (yaw) degrees from a CSS matrix3d string  */
/* ------------------------------------------------------------------ */
function extractYawFromMatrix(matrixStr: string): number | null {
  // matrix3d(m11, m12, m13, m14, m21, …, m44) — 16 values
  const match = matrixStr.match(/matrix3d\((.+)\)/);
  if (!match) {
    // 2-D matrix — no Y rotation
    return 0;
  }
  const v = match[1].split(",").map((s) => parseFloat(s.trim()));
  if (v.length < 16) return null;
  // rotateY angle = atan2(m13, m33)  (indices 2, 10 in 0-based)
  const yaw = Math.atan2(v[2], v[10]) * (180 / Math.PI);
  return yaw;
}

export const ValueStats = () => {
  const stats = useMemo(
    () => [
      {
        icon: ZapIcon,
        value: "99.99%",
        label: "Uptime",
        description:
          "The NMI Gateway maintains enterprise-grade reliability through redundant data centers and live failover routing.",
      },
      {
        icon: TrendingUpIcon,
        value: "175+",
        label: "Processor Connections",
        description:
          "Merchants can process through more than 175 global acquirers — one of the broadest connection networks in the industry.",
      },
      {
        icon: ShoppingCartIcon,
        value: "200+",
        label: "Shopping Cart & POS Integrations",
        description:
          "Compatible with over 200 shopping carts, point-of-sale, and eCommerce platforms for seamless checkout flexibility.",
      },
      {
        icon: ShieldCheckIcon,
        value: "up to 70%",
        label: "3D Secure & Fraud Tools Reduce Chargebacks",
        description:
          "Merchants who enable built-in fraud protection and 3-D Secure typically experience 50–70% fewer disputes on card-not-present transactions.",
      },
      {
        icon: UsersIcon,
        value: "Level 1",
        label: "PCI DSS Certified",
        description:
          "The platform meets the highest level of security certification recognized for providers processing more than six million transactions annually.",
      },
      {
        icon: ShieldCheckIcon,
        value: "7–10 Days",
        label: "ACH Settlement Window",
        description:
          "ACH transactions processed through NMI settle within 7–10 business days, giving merchants a reliable and predictable window for when funds will clear. This consistency helps with cash-flow planning and eliminates uncertainty around deposit timing.",
      },
    ],
    []
  );

  const quantity = stats.length;
  const angle = 360 / quantity;
  const radius = 320;

  /* ----- state ---------------------------------------------------- */
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ----- refs ----------------------------------------------------- */
  const ringRef = useRef<HTMLDivElement>(null);
  const lastSmartSelectTime = useRef(0);
  const rafId = useRef(0);

  /* ----- reduced-motion detection --------------------------------- */
  const prefersReducedMotion = useRef(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mql.matches;
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  /* ----- smart-select loop --------------------------------------- */
  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) return;

    let active = true;

    const tick = () => {
      if (!active) return;
      const now = performance.now();
      if (now - lastSmartSelectTime.current >= 120) {
        const ringEl = ringRef.current;
        if (ringEl) {
          const style = getComputedStyle(ringEl);
          const yaw = extractYawFromMatrix(style.transform);
          if (yaw !== null) {
            const frontIdx =
              ((Math.round(-yaw / angle) % quantity) + quantity) % quantity;
            setSelectedIndex((prev) => (prev !== frontIdx ? frontIdx : prev));
          }
        }
        lastSmartSelectTime.current = now;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      active = false;
      cancelAnimationFrame(rafId.current);
    };
  }, [isPaused, angle, quantity]);

  /* ----- interaction handlers ------------------------------------ */
  const handleCardClick = useCallback(
    (idx: number) => {
      setSelectedIndex(idx);
      setIsPaused(true);
    },
    []
  );

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent, idx: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardClick(idx);
      }
    },
    [handleCardClick]
  );

  const goToPrev = useCallback(() => {
    setSelectedIndex((p) => (p - 1 + quantity) % quantity);
    setIsPaused(true);
  }, [quantity]);

  const goToNext = useCallback(() => {
    setSelectedIndex((p) => (p + 1) % quantity);
    setIsPaused(true);
  }, [quantity]);

  const togglePause = useCallback(() => {
    setIsPaused((p) => !p);
  }, []);

  /* ----- carousel hover / focus handlers ------------------------- */
  const handleCarouselEnter = useCallback(() => setIsPaused(true), []);
  const handleCarouselLeave = useCallback(() => setIsPaused(false), []);

  /* ----- computed ring style ------------------------------------- */
  const ringStyle: React.CSSProperties = isPaused
    ? {
        animationPlayState: "paused",
        transform: `rotateX(-14deg) rotateY(${-selectedIndex * angle}deg)`,
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }
    : {};

  /* ----- active stat --------------------------------------------- */
  const activeStat = stats[selectedIndex];

  return (
    <section className="valuestats-section py-20 px-4 sm:px-6 bg-transparent">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="valuestats-heading-chip inline-block px-8 py-3 rounded-full">
          <h2 className="font-ubuntu text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Platform Value at a Glance
          </h2>
        </div>
      </div>

      {/* === Two-column layout wrapper === */}
      <div className="valuestats-layout">
        {/* LEFT: text panel */}
        <div className="valuestats-panel">
          <span className="valuestats-kicker">Selected highlight</span>
          <div className="valuestats-panel-value" key={`v-${selectedIndex}`}>
            {activeStat.value}
          </div>
          <h3 className="valuestats-panel-label" key={`l-${selectedIndex}`}>
            {activeStat.label}
          </h3>
          <p className="valuestats-panel-desc" key={`d-${selectedIndex}`}>
            {activeStat.description}
          </p>

          <div className="valuestats-controls">
            <button
              type="button"
              className="valuestats-ctrl-btn"
              onClick={goToPrev}
              aria-label="Previous stat"
            >
              ‹ Prev
            </button>
            <button
              type="button"
              className="valuestats-ctrl-btn valuestats-ctrl-btn--toggle"
              onClick={togglePause}
              aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
            >
              {isPaused ? "▶ Resume" : "⏸ Pause"}
            </button>
            <button
              type="button"
              className="valuestats-ctrl-btn"
              onClick={goToNext}
              aria-label="Next stat"
            >
              Next ›
            </button>
          </div>
        </div>

        {/* RIGHT: carousel shell (clipped on desktop) */}
        <div
          className="valuestats-carousel-shell"
          onMouseEnter={handleCarouselEnter}
          onMouseLeave={handleCarouselLeave}
          onFocus={handleCarouselEnter}
          onBlur={(e) => {
            // only un-pause if focus leaves the shell entirely
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              handleCarouselLeave();
            }
          }}
        >
          <div className="valuestats-banner-container">
            <div
              ref={ringRef}
              className="valuestats-slider-3d"
              style={ringStyle}
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                const rotation = idx * angle;
                const transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;
                const isSelected = idx === selectedIndex;

                return (
                  <div
                    key={stat.label}
                    className="valuestats-slider-item"
                    style={{ transform }}
                  >
                    <button
                      type="button"
                      className={`valuestats-card-btn${isSelected ? " valuestats-card-btn--selected" : ""}`}
                      onClick={() => handleCardClick(idx)}
                      onKeyDown={(e) => handleCardKeyDown(e, idx)}
                      aria-label={`${stat.value} — ${stat.label}`}
                      aria-pressed={isSelected}
                    >
                      <div className="valuestats-card">
                        <div className="valuestats-card-front">
                          <div className="valuestats-card-content">
                            <div className="valuestats-icon-wrap">
                              <Icon className="w-7 h-7" />
                            </div>
                            <div className="valuestats-value">
                              {stat.value}
                            </div>
                            <div className="valuestats-label">
                              {stat.label}
                            </div>
                            <div className="valuestats-description-wrapper">
                              <div className="valuestats-description">
                                {stat.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ===== CSS variables (unchanged) ===== */
        .valuestats-section {
          --vs-card-bg: linear-gradient(150deg, hsl(0 0% 100%), hsl(210 17% 97%));
          --vs-card-border: hsl(var(--border));
          --vs-card-shadow:
            0 0 0 1px hsla(210 10% 23%, 0.08),
            0 16px 42px rgba(0, 0, 0, 0.08),
            0 0 28px hsla(var(--cyber-teal), 0.12);
          --vs-icon-bg: hsl(var(--muted));
          --vs-icon-border: hsl(var(--border));
          --vs-foreground: hsl(var(--foreground));
          --vs-muted: hsla(0, 0%, 30%, 0.85);
          --vs-heading-bg: hsla(var(--cyber-teal), 0.08);
          --vs-heading-border: hsla(var(--cyber-teal), 0.35);
          --vs-heading-foreground: hsl(var(--foreground));
        }

        .dark .valuestats-section {
          --vs-card-bg: linear-gradient(150deg, #020617, #020617 55%, #111827);
          --vs-card-border: #1f2937;
          --vs-card-shadow:
            0 0 0 1px rgba(15, 23, 42, 0.7),
            0 16px 42px rgba(0, 0, 0, 0.85),
            0 0 20px rgba(59, 130, 246, 0.3);
          --vs-icon-bg: #020617;
          --vs-icon-border: #4b5563;
          --vs-foreground: #f9fafb;
          --vs-muted: rgba(229, 231, 235, 0.9);
          --vs-heading-bg: rgba(17, 24, 39, 0.9);
          --vs-heading-border: rgba(55, 65, 81, 0.8);
          --vs-heading-foreground: #f9fafb;
        }

        .valuestats-heading-chip {
          border: 2px solid var(--vs-heading-border);
          background: var(--vs-heading-bg);
          color: var(--vs-heading-foreground);
          transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease;
        }

        /* ===== Two-column layout ===== */
        .valuestats-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        @media (min-width: 1024px) {
          .valuestats-layout {
            flex-direction: row;
            align-items: center;
            gap: 0;
          }
        }

        /* ===== Left panel ===== */
        .valuestats-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          padding: 1.5rem;
          max-width: 28rem;
        }

        @media (min-width: 1024px) {
          .valuestats-panel {
            flex: 0 0 45%;
            align-items: flex-start;
            text-align: left;
            padding: 2rem 2.5rem 2rem 1rem;
          }
        }

        .valuestats-kicker {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--vs-muted);
          margin-bottom: 0.25rem;
        }

        .valuestats-panel-value {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: 0.03em;
          color: var(--vs-foreground);
          line-height: 1.1;
        }

        .valuestats-panel-label {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 700;
          color: var(--vs-foreground);
          margin: 0.15rem 0 0.4rem;
        }

        .valuestats-panel-desc {
          font-size: 0.92rem;
          line-height: 1.7;
          color: var(--vs-muted);
          max-width: 26rem;
          margin-bottom: 1.25rem;
        }

        /* ===== Controls ===== */
        .valuestats-controls {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .valuestats-ctrl-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.45rem 1rem;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: 9999px;
          border: 1px solid var(--vs-card-border);
          background: var(--vs-icon-bg);
          color: var(--vs-foreground);
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .valuestats-ctrl-btn:hover,
        .valuestats-ctrl-btn:focus-visible {
          border-color: var(--vs-heading-border);
          box-shadow: 0 0 0 2px hsla(var(--cyber-teal), 0.18);
          outline: none;
        }

        .dark .valuestats-ctrl-btn:hover,
        .dark .valuestats-ctrl-btn:focus-visible {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
        }

        /* ===== Carousel shell (clipped on desktop) ===== */
        .valuestats-carousel-shell {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 1024px) {
          .valuestats-carousel-shell {
            flex: 0 0 55%;
            clip-path: inset(0 0 0 45%);
            justify-content: flex-end;
          }
        }

        .valuestats-banner-container {
          width: 100%;
          min-height: clamp(26rem, 64vh, 36rem);
          position: relative;
          overflow: visible;
          perspective: 1600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 1024px) {
          .valuestats-banner-container {
            transform: translateX(15%);
          }
        }

        .valuestats-slider-3d {
          position: relative;
          width: 340px;
          height: 320px;
          transform-style: preserve-3d;
          animation: valuestats-spin 45s linear infinite;
        }

        @keyframes valuestats-spin {
          from {
            transform: rotateX(-14deg) rotateY(0deg);
          }
          to {
            transform: rotateX(-14deg) rotateY(360deg);
          }
        }

        .valuestats-slider-item {
          position: absolute;
          inset: 0;
          /* Allow pointer events to pass through the invisible
             positioning layer to the button within */
          pointer-events: none;
        }

        /* ===== Card button wrapper (keyboard + click accessible) ===== */
        .valuestats-card-btn {
          display: block;
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          pointer-events: auto;
          -webkit-appearance: none;
          appearance: none;
        }

        .valuestats-card-btn:focus-visible .valuestats-card-front {
          box-shadow:
            var(--vs-card-shadow),
            0 0 0 3px hsla(var(--cyber-teal), 0.5);
        }

        .valuestats-card-btn--selected .valuestats-card-front {
          box-shadow:
            var(--vs-card-shadow),
            0 0 14px hsla(var(--cyber-teal), 0.35);
        }

        .dark .valuestats-card-btn--selected .valuestats-card-front {
          box-shadow:
            var(--vs-card-shadow),
            0 0 14px rgba(59, 130, 246, 0.35);
        }

        .valuestats-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }

        .valuestats-card-front {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1.1rem;
          overflow: hidden;
          border: 1px solid var(--vs-card-border);
          box-shadow: var(--vs-card-shadow);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: var(--vs-card-bg);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
        }

        .valuestats-card-content {
          position: absolute;
          inset: 0;
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: var(--vs-foreground);
          text-align: center;
        }

        .valuestats-icon-wrap {
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--vs-icon-bg);
          border: 1px solid var(--vs-icon-border);
          color: var(--vs-foreground);
        }

        .valuestats-value {
          font-size: 1.9rem;
          font-weight: 800;
          letter-spacing: 0.03em;
        }

        .valuestats-label {
          font-size: 1rem;
          font-weight: 600;
          opacity: 0.95;
        }

        .valuestats-description-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.82rem;
          max-width: 16rem;
          color: var(--vs-muted);
        }

        .valuestats-description {
          line-height: 1.6;
        }

        /* ===== Responsive ===== */
        @media (max-width: 1023px) {
          .valuestats-banner-container {
            min-height: 24rem;
          }
          .valuestats-slider-3d {
            width: 300px;
            height: 300px;
          }
          .valuestats-description-wrapper {
            max-width: 14rem;
          }
        }

        @media (max-width: 767px) {
          .valuestats-banner-container {
            min-height: 22rem;
          }
          .valuestats-slider-3d {
            width: 260px;
            height: 280px;
          }
          .valuestats-description-wrapper {
            max-width: 13rem;
          }
        }

        /* ===== Reduced motion ===== */
        @media (prefers-reduced-motion: reduce) {
          .valuestats-slider-3d {
            animation: none;
            transform: rotateX(-14deg) rotateY(0deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ValueStats;
