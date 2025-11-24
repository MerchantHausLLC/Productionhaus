import { useMemo } from "react";

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

  return (
    <section className="hidden md:block py-20 px-4 sm:px-6 bg-transparent">
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-block px-8 py-3 rounded-full border-2 border-neutral-700 bg-neutral-900">
          <h2 className="text-3xl sm:text-4xl font-ubuntu font-bold text-white">
            Platform Value at a Glance
          </h2>
        </div>
      </div>

      <div className="valuestats-banner-container">
        <div className="valuestats-slider-3d">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const rotation = idx * angle;
            const transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;

            return (
              <div
                key={stat.label}
                className="valuestats-slider-item"
                style={{ transform }}
              >
                <div className="valuestats-card">
                  <div className="valuestats-card-front">
                    <div className="valuestats-card-content">
                      <div className="valuestats-icon-wrap">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="valuestats-value">{stat.value}</div>
                      <div className="valuestats-label">{stat.label}</div>
                      <div className="valuestats-description-wrapper">
                        <div className="valuestats-description">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
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
          border: 1px solid #1f2937; /* subtle border */
          box-shadow:
            0 0 0 1px rgba(15, 23, 42, 0.7), /* inner edge */
            0 16px 42px rgba(0, 0, 0, 0.85), /* depth */
            0 0 20px rgba(59, 130, 246, 0.3); /* light glow */
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          background: linear-gradient(150deg, #020617, #020617 55%, #111827); /* inner gradient, slightly brighter */
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
          color: #f9fafb;
          text-align: center;
        }

        .valuestats-icon-wrap {
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #020617;
          border: 1px solid #4b5563;
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
        }

        .valuestats-description {
          line-height: 1.6;
        }

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

/**
 * Suggested test cases (to be implemented in your test suite):
 *
 * 1. Renders six cards with the expected labels and values, including the ACH settlement card.
 * 2. All cards are positioned evenly around a 3D ring.
 * 3. The entire ring of cards rotates smoothly in one direction due to the CSS keyframe animation.
 * 4. No card content is clipped at typical desktop viewport sizes.
 * 5. Card backgrounds and icon containers are fully opaque (no transparency).
 * 6. Each card has a subtle border, inner gradient, and light glow applied via box-shadow.
 * 7. Description text uses larger font size, increased line-height, and constrained max-width for improved readability.
 * 8. When prefers-reduced-motion is enabled, the carousel does not auto-rotate.
 */
