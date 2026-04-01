import type { LucideIcon } from "lucide-react";
import {
  BarChart2,
  CreditCard,
  Globe,
  Lock,
  Repeat,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Shuffle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Button } from "./ui/button";
import shieldLogo from "@/assets/shield.webp";

type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  borderColor: string;
  buttonColor: string;
  bannerImage?: string;
};

/* NOTE: Keeping solutions inline is fine since it's not exported.
   We only change rendering to 16:9 and single-pass mapping. */
const solutions: Solution[] = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Accept all major credit cards, debit cards, and digital wallets with competitive rates and rapid settlements.",
    fullDescription:
      "Our comprehensive payment processing solution enables organizations to accept all major credit cards, debit cards, and digital wallets seamlessly. With competitive transaction rates, rapid settlements, and advanced reconciliation tools, you can streamline your payment operations and improve cash flow. Our platform supports EMV chip cards, contactless payments, and mobile wallets like Apple Pay and Google Pay. Get real-time reporting, automated invoicing, and dedicated support available 24/7.",
    borderColor: "border-crimson",
    buttonColor: "bg-crimson hover:bg-crimson/90",
    bannerImage: "/card-banners/card1.webp",
  },
  {
    icon: ShieldAlert,
    title: "Advanced Fraud Detection",
    description: "Protect your organization and your customers with our multi-layered fraud prevention system.",
    fullDescription:
      "Stay protected with our multi-layered fraud prevention system featuring AI-powered transaction monitoring, real-time risk assessment, and advanced encryption protocols. Our system automatically flags suspicious activities, uses machine learning to detect patterns, and provides customizable security rules. Features include 3D Secure authentication, tokenization, PCI DSS Level 1 compliance, and chargeback management tools. Reduce fraud losses while maintaining a frictionless transaction experience with intelligent risk scoring.",
    borderColor: "border-green-600",
    buttonColor: "bg-green-600 hover:bg-green-600/90",
    bannerImage: "/card-banners/card2.webp",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Process payments anywhere with our mobile-ready technology and POS systems for distributed operations.",
    fullDescription:
      "Transform any smartphone or tablet into a powerful point-of-sale system with our mobile payment solutions. Built for organizations with distributed operations, our mobile POS accepts payments anywhere with reliable offline mode capabilities. Features include inventory management, customer relationship tools, digital receipts, tip management, and split payment options. Compatible with Bluetooth card readers and supports both iOS and Android devices. Ideal for field service providers, events, distributed teams, and multi-location organizations.",
    borderColor: "border-orange-400",
    buttonColor: "bg-orange-400 hover:bg-orange-400/90",
    bannerImage: "/card-banners/card4.webp",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Expand internationally with multi-currency support and local payment methods in over 200 countries.",
    fullDescription:
      "Expand your business globally with our international payment infrastructure supporting 135+ currencies and local payment methods across 200+ countries. Accept popular regional payment methods including Alipay, WeChat Pay, iDEAL, and SEPA transfers. Features include automatic currency conversion, dynamic currency conversion at checkout, multi-currency settlements, and local acquiring to reduce cross-border fees. Our platform handles complex tax calculations, compliance requirements, and provides localized checkout experiences to maximize conversion rates in every market.",
    borderColor: "border-emerald-600",
    buttonColor: "bg-emerald-600 hover:bg-emerald-600/90",
    bannerImage: "/card-banners/card5.webp",
  },
  {
    icon: Lock,
    title: "Network Tokenization",
    description: "Enhance payment security and approval rates with network tokenization.",
    fullDescription:
      "Enhance payment security and approval rates with network tokenization. By replacing sensitive card data with unique, encrypted tokens, you minimize the risk of breaches and keep recurring payments running smoothly—even when cards are updated or replaced. Features include up to 3% increase in transaction approvals, reduces PCI compliance burdens, automatic card updater to prevent failed recurring payments, and vault-stored tokens for maximum safety.",
    borderColor: "border-indigo-600",
    buttonColor: "bg-indigo-600 hover:bg-indigo-600/90",
    bannerImage: "/card-banners/card6.webp",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    description: "Launch and scale your online payment acceptance with enterprise-grade ecommerce tools.",
    fullDescription:
      "Launch and scale your online payment acceptance with enterprise-grade ecommerce tools that keep you agile and secure. From payment gateways to customizable checkout experiences, we give you everything you need to sell, scale, and maintain compliance — without the engineering overhead. Features include pre-built integrations with leading commerce platforms, customizable checkout pages for any brand, secure PCI-compliant transactions, and advanced tools that help organizations grow 35% faster.",
    borderColor: "border-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-600/90",
    bannerImage: "/card-banners/card7.webp",
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    description: "Unlock powerful insights from your transaction data with real-time analytics.",
    fullDescription:
      "Unlock powerful insights from your transaction data. Our analytics dashboard transforms complex data into actionable trends, letting you track volume, authorization rates, and performance metrics in real time — no spreadsheets, no guesswork. Features include live dashboards with instant transaction and refund metrics, custom reporting by product, channel, or region, segmentation and portfolio analytics. Organizations with analytics tools make decisions 2x faster.",
    borderColor: "border-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-600/90",
    bannerImage: "/card-banners/card10.webp",
  },
  {
    icon: Repeat,
    title: "Subscription Billing",
    description: "Automate your billing and grow your subscription base with smart recurring revenue tools.",
    fullDescription:
      "Automate your billing and grow your subscription base with tools that handle the complexity for you. Create, manage, and optimize plans—while smart dunning and card updating keep your revenue steady. Features include flexible trial, renewal, and proration options, automated failed payment recovery, card updater and retry logic to reduce churn. 46% of consumers pay for at least one subscription service, making this a crucial revenue stream.",
    borderColor: "border-amber-500",
    buttonColor: "bg-amber-500 hover:bg-amber-500/90",
    bannerImage: "/card-banners/subscriptions.webp",
  },
  {
    icon: ShieldCheck,
    title: "Chargeback Management",
    description: "Win more disputes and keep more revenue with automated chargeback management.",
    fullDescription:
      "Don't let disputes eat into your bottom line. Our automated system tracks, compiles, and submits evidence on your behalf, making it easier to contest chargebacks and reclaim lost revenue. Features include real-time chargeback alerts, 20% higher reversal rates with rapid response, integrated evidence templates for major card brands, and analytics to spot and stop patterns before they repeat.",
    borderColor: "border-indigo-700",
    buttonColor: "bg-indigo-700 hover:bg-indigo-700/90",
    bannerImage: "/card-banners/chargebacks.webp",
  },
  {
    icon: Shuffle,
    title: "Payment Orchestration",
    description: "Smart routing for better approvals, lower costs, and optimized payment paths.",
    fullDescription:
      "Connect to multiple payment processors and dynamically route every transaction for the best outcome — lower fees, higher approval rates, fewer declines. Control your entire payment stack without added engineering overhead. Features include lower transaction costs by up to 20%, built-in failover for always-on acceptance, unified reporting across all channels and providers, and automatic optimization of every payment path.",
    borderColor: "border-teal-600",
    buttonColor: "bg-teal-600 hover:bg-teal-600/90",
    bannerImage: "/card-banners/card4.webp",
  },
];

export const Solutions = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollPositionRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  // Typewriter effect for modal title
  useEffect(() => {
    if (selectedCard !== null) {
      const fullText = solutions[selectedCard].title;
      setTypewriterText("");
      let index = 0;

      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setTypewriterText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [selectedCard]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    const { body } = document;
    const previousOverflow = body.style.overflow;

    if (selectedCard !== null) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = previousOverflow;
    }

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [selectedCard]);

  // Scroll handler for arrow navigation
  const scrollLeft = () => {
    const container = marqueeRef.current;
    if (!container) return;
    container.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = marqueeRef.current;
    if (!container) return;
    container.scrollBy({ left: 340, behavior: 'smooth' });
  };

  // Pause on hover handlers are left in place but currently unused
  const handleMarqueeMouseEnter = () => {
    // intentionally blank
  };

  const handleMarqueeMouseLeave = () => {
    // intentionally blank
  };

  // Update card glow based on position relative to center
  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    const updateCardGlows = () => {
      const cards = container.querySelectorAll('.marquee-card');
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distanceFromCenter = Math.abs(containerCenter - cardCenter);
        const maxDistance = containerRect.width / 2;
        const intensity = Math.max(0, 1 - distanceFromCenter / maxDistance);
        (card as HTMLElement).style.setProperty('--glow-intensity', intensity.toString());
      });
    };

    updateCardGlows();
    container.addEventListener('scroll', updateCardGlows);
    window.addEventListener('resize', updateCardGlows);

    return () => {
      container.removeEventListener('scroll', updateCardGlows);
      window.removeEventListener('resize', updateCardGlows);
    };
  }, []);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const closeFullscreen = () => {
    setSelectedCard(null);
  };

  const handleGetStarted = () => {
    closeFullscreen();
    window.location.href = "/#contact";
  };

  // Tilt effect handler for cards based on cursor position
  const handleMouseMove = (e: MouseEvent<HTMLElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    // Calculate cursor position relative to card center (-1 to 1)
    const deltaX = (e.clientX - cardCenterX) / (rect.width / 2);
    const deltaY = (e.clientY - cardCenterY) / (rect.height / 2);
    // Apply tilt transform (max 15 degrees)
    const tiltX = deltaY * -15;
    const tiltY = deltaX * 15;
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale(1.02)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-background relative overflow-visible border-t border-border">
      {/* Minimal shield logo */}
      <div className="relative mb-16 z-20 pointer-events-none">
        <div className="flex justify-center">
          <img
            src={shieldLogo}
            alt="MerchantHaus Shield"
            className="h-24 w-24 md:h-32 md:w-32 object-contain opacity-80"
          />
        </div>
      </div>
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/globe-background.png"
            alt="Global Payment Network"
            className="relative w-full max-w-5xl h-auto object-contain opacity-[0.06]"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto overflow-visible relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-ubuntu font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Core Services
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
            Comprehensive payment solutions designed to help your organization thrive in today's digital economy.
          </p>
          <Button
            asChild
            className="bg-foreground hover:bg-foreground/90 text-background font-inter font-medium rounded-none px-10 py-6 text-sm tracking-wide shadow-none transition-all uppercase"
          >
            <a href="/quote">Get a Quote</a>
          </Button>
        </div>
        <div className="relative">
          <div 
            ref={marqueeRef}
            className="marquee-container overflow-x-auto"
            onMouseEnter={handleMarqueeMouseEnter}
            onMouseLeave={handleMarqueeMouseLeave}
          >
            <div className="marquee-content flex gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <article
                    key={`${solution.title}-${index}`}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="service-card service-card--has-bg marquee-card flex-shrink-0 w-[320px] md:w-[360px] aspect-[3/4] md:aspect-[4/5]"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {/* Full background image with dimming & desaturation */}
                    {solution.bannerImage && (
                      <img
                        src={solution.bannerImage}
                        alt=""
                        aria-hidden="true"
                        className="service-card-bg-img"
                        draggable={false}
                      />
                    )}
                    <div className="service-card-bg-overlay" />
                    <div className="service-card-body relative z-10">
                      <div className="service-card-icon service-card-icon--light">
                        <Icon className="h-6 w-6 text-foreground/80 dark:text-white/80" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold font-ubuntu text-foreground dark:text-white">{solution.title}</h3>
                        <p className="text-base leading-relaxed text-foreground/70 dark:text-white/70">{solution.description}</p>
                      </div>
                      <div className="service-card-footer">
                        <button
                          type="button"
                          className="service-card-button service-card-button--light"
                          onClick={() => handleCardClick(index)}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-6 px-4">
            <button
              onClick={scrollLeft}
              className="nav-arrow-button"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="nav-arrow-button"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Services Banner Link */}
        <a
          href="/services"
          className="block mt-12 mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
        >
          <img
            src="/images/services-banner.webp"
            alt="Explore Our Services"
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      </div>
      {/* Fullscreen Modal with Flip Animation */}
      {selectedCard !== null && (
        <div
          className="fixed inset-0 z-50 bg-neutral-dark/95 dark:bg-black/95 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 animate-fade-in overflow-y-auto"
          onClick={closeFullscreen}
        >
          <div
            className="relative max-w-4xl w-full my-auto bg-background dark:bg-card shadow-2xl overflow-hidden animate-scale-in flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'flipIn 0.6s ease-out',
              maxHeight: 'calc(100vh - 2rem)'
            }}
          >
            {/* Banner Image in Modal */}
            {solutions[selectedCard].bannerImage && (
              /*
               * The fullscreen modal banner image should occupy less vertical
               * space relative to its width. Changing the aspect ratio from
               * 16/9 to 3/1 makes the banner significantly shallower on small
               * screens while desktop-specific CSS widens it back toward a
               * 4/3 framing to mirror the mobile composition.
               */
              <div className="solutions-modal-banner relative w-full aspect-[3/1] overflow-hidden shrink-0">
                <img
                  src={solutions[selectedCard].bannerImage}
                  alt={solutions[selectedCard].title}
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            )}
            {/* Close button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-neutral-dark/10 dark:bg-white/10 hover:bg-neutral-dark/20 dark:hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <div className="p-6 sm:p-8 md:p-12 overflow-y-auto flex-1 min-h-0">
              {/* Large icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-none border border-border flex items-center justify-center mb-6 md:mb-8 animate-scale-in">
                {(() => {
                  const Icon = solutions[selectedCard].icon;
                  return <Icon className="w-10 h-10 md:w-12 md:h-12 text-foreground/70" strokeWidth={1.5} />;
                })()}
              </div>
              {/* Content with typewriter effect */}
              <h2 className="font-ubuntu font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6 min-h-[3rem] md:min-h-[4rem]">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </h2>
              <p className="font-inter text-base md:text-lg text-muted-foreground leading-relaxed">
                {solutions[selectedCard].fullDescription}
              </p>
            </div>
            {/* CTA Buttons - Fixed at bottom */}
            <div className="shrink-0 p-6 sm:p-8 md:px-12 border-t border-border bg-background dark:bg-card">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-foreground text-background hover:bg-foreground/90 font-inter font-medium rounded-none px-8"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  onClick={closeFullscreen}
                  className="font-inter font-medium rounded-none px-8 border-foreground/20"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes flipIn {
          0% {
            transform: perspective(1000px) rotateY(-90deg) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: perspective(1000px) rotateY(10deg) scale(1.05);
          }
          100% {
            transform: perspective(1000px) rotateY(0deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};
