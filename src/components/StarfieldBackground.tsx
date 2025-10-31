import { memo, useMemo, type CSSProperties } from 'react';

/**
 * StarfieldBackground (Stable, Depth Blur, No External CSS)
 * --------------------------------------------------------
 * - Twinkle + natural curved drift using CSS keyframes.
 * - Depth-based blur & brightness for parallax feel.
 * - No timers or shooting stars; super lightweight.
 * - Self-contained: no CSS files or extra deps.
 */
export type StarfieldBackgroundProps = {
  count?: number;
  zIndex?: number;
  className?: string;
};

export const StarfieldBackground = memo(function StarfieldBackground({
  count = 80,
  zIndex = 0,
  className = '',
}: StarfieldBackgroundProps) {
  const stars = useMemo(() => {
    return Array.from({ length: Math.max(0, count) }, (_, i) => {
      const depth = Math.random(); // 0 (far) → 1 (near)
      const direction = Math.random() * 360;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${0.5 + depth * 2}px`,
        brightness: 0.4 + depth * 0.6,
        blur: `${(1 - depth) * 2}px`,
        twinkleDelay: `${Math.random() * 5}s`,
        twinkleDuration: `${2 + Math.random() * 3}s`,
        driftDuration: `${15 + (1 - depth) * 40}s`,
        driftDistance: `${2 + depth * 6}px`,
        direction,
      };
    });
  }, [count]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden -z-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-gray-600" />
      
    <div
      data-testid="starfield-container"
      className={`fixed inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex }}
      aria-hidden="true"
    >
      <style>{`
        /* Twinkle */
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Natural curved drift loop (feels like slow parallax) */
        @keyframes drift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(calc(var(--dx) * 0.5), calc(var(--dy) * 0.3)); }
          50% { transform: translate(calc(var(--dx) * 1), calc(var(--dy) * 0.8)); }
          75% { transform: translate(calc(var(--dx) * 0.6), calc(var(--dy) * -0.4)); }
          100% { transform: translate(0, 0); }
        }

        .animate-twinkle-parallax {
          animation:
            twinkle 3s infinite ease-in-out,
            drift var(--drift-duration) infinite cubic-bezier(0.42, 0, 0.58, 1);
          transform-origin: center;
          will-change: transform, opacity, filter;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-twinkle-parallax { animation: none !important; }
        }
      `}</style>

      {/* Background gradient (Tailwind + fallback inline gradient) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-gray-900"
        style={{
          background:
            'linear-gradient(to bottom, #000000 0%, #0b0b0b 55%, #111111 100%)',
        }}
      />

      {/* Stars */}
      {stars.map((star) => {
        const dx =
          Math.cos((star.direction * Math.PI) / 180) *
          parseFloat(star.driftDistance);
        const dy =
          Math.sin((star.direction * Math.PI) / 180) *
          parseFloat(star.driftDistance);

        const starStyle: CSSProperties & {
          '--drift-duration': string;
          '--dx': string;
          '--dy': string;
        } = {
          left: star.left,
          top: star.top,
          width: star.size,
          height: star.size,
          opacity: star.brightness,
          filter: `blur(${star.blur})`,
          animationDelay: star.twinkleDelay,
          animationDuration: star.twinkleDuration,
          '--drift-duration': star.driftDuration,
          '--dx': `${dx}px`,
          '--dy': `${dy}px`,
        };

        return (
          <div
            data-testid="star"
            key={star.id}
            className="absolute bg-white rounded-full animate-twinkle-parallax"
            style={starStyle}
          />
        );
      })}
    </div>
  );
});

export default StarfieldBackground;
