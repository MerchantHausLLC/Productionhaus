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
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MerchantApplicationDialog } from "./MerchantApplicationDialog";
import { ServiceCard } from "./ServiceCard";
import shieldLogo from "@/assets/shield.webp";
import { useParallax } from "@/hooks/use-parallax";

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
      "Accept all major credit cards, debit cards, and digital wallets with competitive rates and instant settlements.",
    fullDescription:
      "Our comprehensive payment processing solution enables businesses to accept all major credit cards, debit cards, and digital wallets seamlessly. With competitive transaction rates, instant settlements, and advanced reconciliation tools, you can streamline your payment operations and improve cash flow. Our platform supports EMV chip cards, contactless payments, and mobile wallets like Apple Pay and Google Pay. Get real-time reporting, automated invoicing, and dedicated merchant support available 24/7.",
    borderColor: "border-crimson",
    buttonColor: "bg-crimson hover:bg-crimson/90",
    bannerImage: "/card-banners/card1.webp",
  },
  {
    icon: ShieldAlert,
    title: "Advanced Fraud Detection",
    description: "Protect your business and your customers with our multi-layered fraud prevention system.",
    fullDescription:
      "Stay protected with our multi-layered fraud prevention system featuring AI-powered transaction monitoring, real-time risk assessment, and advanced encryption protocols. Our system automatically flags suspicious activities, uses machine learning to detect patterns, and provides customizable security rules. Features include 3D Secure authentication, tokenization, PCI DSS Level 1 compliance, and chargeback management tools. Reduce fraud losses while maintaining a smooth customer experience with intelligent risk scoring.",
    borderColor: "border-green-600",
    buttonColor: "bg-green-600 hover:bg-green-600/90",
    bannerImage: "/card-banners/card2.webp",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Process payments anywhere with our mobile-ready technology and POS systems for on-the-go businesses.",
    fullDescription:
      "Transform any smartphone or tablet into a powerful point-of-sale system with our mobile payment solutions. Perfect for businesses on the go, our mobile POS accepts payments anywhere with reliable offline mode capabilities. Features include inventory management, customer relationship tools, digital receipts, tip management, and split payment options. Compatible with Bluetooth card readers and supports both iOS and Android devices. Ideal for food trucks, pop-up shops, delivery services, and field service providers.",
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
    description: "Launch and grow your online presence with robust ecommerce tools.",
    fullDescription:
      "Launch and grow your online presence with robust ecommerce tools that keep you agile and secure. From payment gateways to customizable checkouts, we give you everything you need to sell, scale, and connect with customers—without the technical pain. Features include pre-built integrations with top shopping carts, customizable checkout pages for any brand, secure PCI-compliant transactions, and advanced ecommerce tools that help stores grow 35% faster.",
    borderColor: "border-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-600/90",
    bannerImage: "/card-banners/card7.webp",
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    description: "Unlock powerful insights from your transaction data with real-time analytics.",
    fullDescription:
      "Unlock powerful insights from your transaction data. Our analytics dashboard turns complex numbers into actionable trends, letting you track sales, customer behaviors, and campaign results in real time—no spreadsheets, no guesswork. Features include live dashboards with instant sales and refund metrics, custom reporting by product, channel, or region, customer segmentation and loyalty analytics. Merchants with analytics tools make decisions 2x faster.",
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
      "Connect to multiple payment processors and dynamically route every transaction for the best outcome—lower fees, higher approval rates, fewer declines. Control your entire payment stack without extra IT overhead. Features include lower transaction costs by up to 20%, built-in failover for always-on acceptance, unified reporting across all channels and providers, and automatic optimization of every payment path.",
    borderColor: "border-teal-600",
    buttonColor: "bg-teal-600 hover:bg-teal-600/90",
    bannerImage: "/card-banners/card4.webp",
  },
];

export const Solutions = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const shieldGlowRef = useParallax<HTMLDivElement>({ speed: 0.12 });
  const shieldLogoRef = useParallax<HTMLImageElement>({ speed: 0.18 });
  const topGradientRef = useParallax<HTMLDivElement>({ speed: 0.06 });
  const bottomGradientRef = useParallax<HTMLDivElement>({ speed: 0.09 });
  const globeRef = useParallax<HTMLImageElement>({ speed: 0.14 });

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

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  const closeFullscreen = () => {
    setSelectedCard(null);
  };

  const handleGetStarted = () => {
    closeFullscreen();
    setIsApplicationOpen(true);
  };

  return (
    <section
      id="services"
      className="w-full py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-muted/50 dark:bg-neutral-dark/30"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={topGradientRef}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(var(--crimson),0.14),transparent_60%)]"
        />
        <div
          ref={bottomGradientRef}
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,hsla(var(--cyber-teal),0.16),transparent_65%)]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            ref={globeRef}
            src="/images/globe-background.png"
            alt="Global Payment Network"
            className="relative w-full max-w-5xl h-auto object-contain opacity-25 md:opacity-35 contrast-125 saturate-125 drop-shadow-[0_0_60px_rgba(220,20,60,0.18)]"
          />
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center -mt-24 sm:-mt-28">
            <div className="relative flex items-center justify-center">
              <div
                ref={shieldGlowRef}
                className="absolute inset-0 bg-gradient-radial from-crimson/30 to-cyber-teal/20 blur-3xl scale-150"
              />
              <img
                ref={shieldLogoRef}
                src={shieldLogo}
                alt="MerchantHaus Shield"
                className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <header className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="font-ubuntu font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
              CORE SERVICES
            </h2>
            <p className="font-inter text-lg md:text-xl text-muted-foreground">
              Comprehensive payment solutions designed to help your business thrive in today's digital economy.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-crimson hover:bg-crimson/90 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
              >
                <a href="/quote">Get a Quote</a>
              </Button>
            </div>
          </header>

          <div
            className="
              grid gap-6 sm:gap-7 lg:gap-8
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {solutions.map((solution, index) => (
              <ServiceCard
                key={`${solution.title}-${index}`}
                title={solution.title}
                description={solution.description}
                image={solution.bannerImage || "/card-banners/card1.webp"}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Fullscreen Modal with Flip Animation */}
      {selectedCard !== null && (
        <div
          className="fixed inset-0 z-50 bg-neutral-dark/95 dark:bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in overflow-y-auto"
          onClick={closeFullscreen}
        >
          <div
            className="relative max-w-4xl w-full max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] bg-background dark:bg-card rounded-3xl shadow-2xl overflow-hidden animate-scale-in flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'flipIn 0.6s ease-out'
            }}
          >
            {/* Banner Image in Modal */}
            {solutions[selectedCard].bannerImage && (
              /*
               * The fullscreen modal banner image should occupy less vertical
               * space relative to its width. Changing the aspect ratio from
               * 16/9 to 3/1 makes the banner significantly shallower,
               * focusing attention on the modal content below.
               */
              <div className="relative w-full aspect-[3/1] overflow-hidden shrink-0">
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
            <div className="p-6 sm:p-8 md:p-12 overflow-y-auto max-h-full flex-1">
              {/* Large icon */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-crimson/20 to-cyber-teal/20 flex items-center justify-center mb-6 md:mb-8 animate-scale-in">
                {(() => {
                  const Icon = solutions[selectedCard].icon;
                  return <Icon className="w-10 h-10 md:w-12 md:h-12 text-crimson" strokeWidth={2} />;
                })()}
              </div>
              {/* Content with typewriter effect */}
              <h2 className="font-ubuntu font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6 min-h-[3rem] md:min-h-[4rem]">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </h2>
              <p className="font-inter text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                {solutions[selectedCard].fullDescription}
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className={`${solutions[selectedCard].buttonColor} text-white font-inter font-medium rounded-lg px-8`}
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  onClick={closeFullscreen}
                  className="font-inter font-medium rounded-lg px-8"
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
      <MerchantApplicationDialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen} />
    </section>
  );
};
