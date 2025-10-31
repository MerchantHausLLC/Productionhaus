import { useEffect, useMemo, useState, useRef } from "react";
import {
  Smartphone,
  Shuffle,
  FileText,
  Repeat,
  Lock,
  BarChart2,
  Cpu,
  Landmark,
  ShieldAlert,
  Globe2,
} from "lucide-react";

/**
 * ImprovedPaymentSlider
 *
 * This component implements a 3D carousel with dual sliders (A/B setup).
 * Each card spends 50% of its revolution in Slider A (front of shield, z-index 7)
 * and 50% in Slider B (behind shield, z-index 3).
 */
export default function ImprovedPaymentSlider() {
  const services = useMemo(
    () => [
      {
        icon: Smartphone,
        name: "Mobile & Contactless",
        description: "Take payments anywhere, from any device.",
      },
      {
        icon: Shuffle,
        name: "Omnichannel Payments",
        description:
          "Unified payment experiences across every channel.",
      },
      {
        icon: FileText,
        name: "Payment Flexibility",
        description: "Every way your customers want to pay.",
      },
      {
        icon: Repeat,
        name: "Subscriptions & Recurring Billing",
        description: "Predictable revenue, simplified.",
      },
      {
        icon: Lock,
        name: "Fraud & Security",
        description: "Advanced protection built into every transaction.",
      },
      {
        icon: BarChart2,
        name: "Reporting & Insights",
        description: "Clear data for smarter decisions.",
      },
      {
        icon: Cpu,
        name: "Modern POS",
        description: "Smart terminals and software that adapt to your business.",
      },
      {
        icon: Landmark,
        name: "Integrations",
        description: "Works with the tools you already trust.",
      },
      {
        icon: ShieldAlert,
        name: "Developer Tools",
        description: "Build with confidence.",
      },
      {
        icon: Globe2,
        name: "Global Reach",
        description: "Scale confidently across borders.",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [pauseUntil, setPauseUntil] = useState(0);
  const dragStartIndex = useRef(0);

  // Compute per‑card transforms for dual-slider setup.
  // Each card spends 50% of its revolution in Slider A (front) and 50% in Slider B (back).
  const cardStyles = useMemo(() => {
    const quantity = services.length;
    const angle = 360 / quantity;
    const radius = 380;
    return services.map((_, idx) => {
      const offset = (idx - currentIndex + quantity) % quantity;
      const rotation = offset * angle;
      return {
        transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
        offset,
      };
    });
  }, [services, currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      if (now > pauseUntil) {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length, pauseUntil]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    dragStartIndex.current = currentIndex;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    const threshold = 50;
    if (Math.abs(delta) > threshold) {
      const direction = delta > 0 ? -1 : 1;
      setCurrentIndex((dragStartIndex.current + direction + services.length) % services.length);
      setStartX(e.clientX);
      dragStartIndex.current = currentIndex;
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setPauseUntil(Date.now() + 10000);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    dragStartIndex.current = currentIndex;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - startX;
    const threshold = 50;
    if (Math.abs(delta) > threshold) {
      const direction = delta > 0 ? -1 : 1;
      setCurrentIndex((dragStartIndex.current + direction + services.length) % services.length);
      setStartX(e.touches[0].clientX);
      dragStartIndex.current = currentIndex;
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      setPauseUntil(Date.now() + 10000);
    }
  };

  const handleCardClick = (clickedIndex: number) => {
    setCurrentIndex(clickedIndex);
  };

  return (
    <section id="payments" className="py-12 relative overflow-hidden bg-gradient-to-br from-neutral-dark via-black to-neutral-dark">
      <div className="max-w-5xl mx-auto px-4 text-center mb-12">
        <div className="inline-block px-8 py-3 rounded-full border-2 border-white bg-transparent">
          <h2 className="text-3xl sm:text-4xl font-ubuntu font-bold text-white">
            Payment Services
          </h2>
        </div>
      </div>

      <div 
        className="banner-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Center Shield Logo */}
        <div className="center-shield">
          <img src="/redshield.webp" alt="Shield" className="w-full h-full object-contain" />
        </div>
        
        {/* Slider B - Behind shield (z-index: 3) - Shows positions 5-9 (back half) */}
        <div className="slider-3d slider-back">
          {services.map((service, idx) => {
            const { transform, offset } = cardStyles[idx];
            // Hide positions 0-4 (front half)
            const shouldHide = offset >= 0 && offset <= 4;
            return (
              <div
                key={`back-${service.name}`}
                className="slider-item"
                style={{ 
                  transform, 
                  visibility: shouldHide ? 'hidden' : 'visible',
                  pointerEvents: shouldHide ? 'none' : 'auto'
                }}
                onClick={() => handleCardClick(idx)}
              >
                <div className="service-card">
                  <div className="service-card-front">
                    <div className="service-image">
                      <div className="service-overlay">
                        <div className="service-icon-wrap">
                          <service.icon className="service-icon" />
                        </div>
                        <span className="service-name">{service.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slider A - In front of shield (z-index: 7) - Shows positions 0-4 (front half) */}
        <div className="slider-3d slider-front">
          {services.map((service, idx) => {
            const { transform, offset } = cardStyles[idx];
            // Hide positions 5-9 (back half)
            const shouldHide = offset >= 5 && offset <= 9;
            return (
              <div
                key={`front-${service.name}`}
                className="slider-item"
                style={{ 
                  transform,
                  visibility: shouldHide ? 'hidden' : 'visible',
                  pointerEvents: shouldHide ? 'none' : 'auto'
                }}
                onClick={() => handleCardClick(idx)}
              >
                <div className="service-card">
                  <div className="service-card-front">
                    <div className="service-image">
                      <div className="service-overlay">
                        <div className="service-icon-wrap">
                          <service.icon className="service-icon" />
                        </div>
                        <span className="service-name">{service.name}</span>
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
        .banner-container {
          width: 100%;
          min-height: clamp(28rem, 70vh, 40rem);
          text-align: center;
          overflow: hidden;
          position: relative;
          perspective: 1500px;
        }

        .center-shield {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 520px;
          height: 520px;
          z-index: 5;
          pointer-events: none;
          filter: drop-shadow(0 10px 40px rgba(220, 20, 60, 0.6));
        }

        .slider-3d {
          position: absolute;
          width: 160px;
          height: 200px;
          top: 10%;
          left: calc(50% - 80px);
          transform-style: preserve-3d;
          transform: perspective(1500px) rotateX(-18deg);
        }

        .slider-back {
          z-index: 3;
        }

        .slider-front {
          z-index: 7;
        }

        .slider-item {
          position: absolute;
          inset: 0;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .service-card-front {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-card-front {
          transform: scale(1.05);
          box-shadow: 0 15px 40px -5px rgba(220, 20, 60, 0.4);
        }

        .service-image {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(135deg,
            hsl(var(--primary)) 0%,
            hsl(var(--primary) / 0.95) 50%,
            hsl(var(--primary) / 0.85) 100%
          );
        }

        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1rem;
        }

        .service-icon-wrap {
          width: 4rem;
          height: 4rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .service-icon {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .service-name {
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          text-align: center;
          font-family: 'Inter', sans-serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .service-card:hover .service-overlay {
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%);
        }

        @media (max-width: 1023px) {
          .center-shield {
            width: 420px;
            height: 420px;
          }
          .slider-3d {
            width: 140px;
            height: 180px;
            left: calc(50% - 70px);
          }
        }

        @media (max-width: 767px) {
          .banner-container {
            min-height: 26rem;
          }
          .center-shield {
            width: 320px;
            height: 320px;
          }
          .slider-3d {
            width: 110px;
            height: 150px;
            left: calc(50% - 55px);
          }
        }
      `}</style>
    </section>
  );
}