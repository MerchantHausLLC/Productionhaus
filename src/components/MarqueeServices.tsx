import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Full list of service cards
const services = [
  { title: "Payments", icon: "/icons/payments.svg" },
  { title: "Onboarding", icon: "/icons/onboarding.svg" },
  { title: "Security", icon: "/icons/security.svg" },
  { title: "Analytics", icon: "/icons/analytics.svg" },
  { title: "Compliance", icon: "/icons/compliance.svg" },
  { title: "Integrations", icon: "/icons/integrations.svg" },
  { title: "Support", icon: "/icons/support.svg" },
  { title: "Merchant Tools", icon: "/icons/merchant-tools.svg" },
  { title: "Billing", icon: "/icons/billing.svg" },
  { title: "Risk", icon: "/icons/risk.svg" },
  { title: "Fraud Prevention", icon: "/icons/fraud.svg" },
  { title: "CRM", icon: "/icons/crm.svg" },
  { title: "Terminals", icon: "/icons/terminals.svg" },
  { title: "eCommerce", icon: "/icons/ecommerce.svg" },
  { title: "Reporting", icon: "/icons/reporting.svg" },
];

export default function MarqueeServices() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Manual scroll navigation
  const scroll = (direction: "left" | "right") => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const cardWidth = 216; // approx w-48 + gap
    if (direction === "left") {
      marquee.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      marquee.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  // 3D tilt effect based on cursor position + zoom effects
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * -15;

    // Card zooms to 1.1x scale
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  };

  // Reset tilt and zoom on mouse leave
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="relative overflow-hidden py-12">
      {/* Scrollable marquee container with auto-scroll */}
      <div className="overflow-hidden mask-gradient">
        <div
          ref={marqueeRef}
          className="flex gap-6 px-10 animate-scroll hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {/* Triple the services array for infinite scroll illusion */}
          {[...services, ...services, ...services].map((s, i) => (
            <div
              key={i}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className="relative flex-shrink-0 w-48 h-64 rounded-2xl bg-card border border-border shadow-md transition-transform duration-300 ease-out hover:shadow-xl group"
            >
              {/* Card content - icon and title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
                <img
                  src={s.icon}
                  alt={s.title}
                  className="w-16 h-16 mb-4 transition-transform duration-300 ease-out group-hover:scale-[1.5]"
                />
                <h3 className="text-foreground text-lg font-semibold">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons - left and right arrows */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
        <button
          onClick={() => scroll("left")}
          className="pointer-events-auto nav-arrow-button z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="pointer-events-auto nav-arrow-button z-10"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
