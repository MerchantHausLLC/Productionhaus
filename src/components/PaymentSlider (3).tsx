import { useState } from "react";
import { Smartphone, Shuffle, FileText, Repeat, Lock, BarChart2, Cpu, Landmark, ShieldAlert, Globe2 } from "lucide-react";
import { ServiceDetailModal } from "./ServiceDetailModal";
import shieldLogo from "@/assets/Shield.webp";

const services = [
  { 
    icon: Smartphone, 
    name: "Mobile & Contactless", 
    position: 1, 
    description: "Take payments anywhere, from any device.",
    features: [
      "Tap to Pay and digital wallet support (Apple Pay, Google Pay).",
      "Mobile checkout on phones and tablets, no extra hardware required.",
      "Syncs automatically with your Merchant Haus dashboard."
    ],
    benefits: [
      "Serve customers on the go — at events, deliveries, or in the field.",
      "Start accepting payments in minutes, no setup pain.",
      "Keep every sale visible and connected in real time."
    ]
  },
  { 
    icon: Shuffle, 
    name: "Omnichannel Payments", 
    position: 2, 
    description: "Unified payment experiences across every channel.",
    features: [
      "Accept in-person, online, in-app, or over-the-phone payments from one platform.",
      "Centralized reporting for every transaction and location.",
      "Seamless connection between POS, web, and mobile checkouts."
    ],
    benefits: [
      "Simplify operations with one payment view across all channels.",
      "Offer customers flexibility without adding systems or vendors.",
      "Improve consistency and trust across every touchpoint."
    ]
  },
  { 
    icon: FileText, 
    name: "Payment Flexibility", 
    position: 3, 
    description: "Every way your customers want to pay.",
    features: [
      "Accept credit, debit, ACH, and digital wallets.",
      "Customizable surcharging and convenience fee settings (where compliant).",
      "Stored credentials and tokenized repeat payments."
    ],
    benefits: [
      "Never lose a sale to limited options.",
      "Reduce processing friction while staying compliant.",
      "Offer smooth checkout experiences that increase conversion."
    ]
  },
  { 
    icon: Repeat, 
    name: "Subscriptions & Recurring Billing", 
    position: 4, 
    description: "Predictable revenue, simplified.",
    features: [
      "Automate billing cycles, renewals, and retries for failed payments.",
      "Manage plans and customer profiles from your portal.",
      "Detailed tracking for recurring revenue streams."
    ],
    benefits: [
      "Save time on manual invoicing and follow-ups.",
      "Improve customer retention with reliable renewals.",
      "Keep your cash flow steady and predictable."
    ]
  },
  { 
    icon: Lock, 
    name: "Fraud & Security", 
    position: 5, 
    description: "Advanced protection built into every transaction.",
    features: [
      "Real-time fraud detection using AI-driven risk scoring.",
      "End-to-end encryption and tokenization for sensitive data.",
      "PCI DSS and 3D Secure compliance baked in."
    ],
    benefits: [
      "Protect your revenue from fraud and chargebacks.",
      "Build customer trust through visible, frictionless security.",
      "Save time with automated monitoring and fewer disputes."
    ]
  },
  { 
    icon: BarChart2, 
    name: "Reporting & Insights", 
    position: 6, 
    description: "Clear data for smarter decisions.",
    features: [
      "Real-time transaction and settlement dashboards.",
      "Downloadable reports and trend analysis.",
      "Chargeback and refund visibility in one place."
    ],
    benefits: [
      "See what's driving your sales in real time.",
      "Track performance across channels, teams, or locations.",
      "Make data-backed decisions that grow revenue."
    ]
  },
  { 
    icon: Cpu, 
    name: "Modern POS", 
    position: 7, 
    description: "Smart terminals and software that adapt to your business.",
    features: [
      "EMV, chip, and NFC contactless support.",
      "Connects directly to your Merchant Haus account.",
      "Choose from countertop, mobile, or cloud-based POS setups."
    ],
    benefits: [
      "Speed up checkouts and reduce errors.",
      "Manage all terminals and devices from one dashboard.",
      "Deliver a modern checkout that matches your brand's polish."
    ]
  },
  { 
    icon: Landmark, 
    name: "Integrations", 
    position: 8, 
    description: "Works with the tools you already trust.",
    features: [
      "Compatible with major CRMs, POS systems, and accounting software.",
      "API and plugin-based connections for fast setup.",
      "Real-time data sync across platforms."
    ],
    benefits: [
      "Eliminate double entry and manual reconciliation.",
      "Keep payments, customer info, and reports aligned.",
      "Save hours of admin time every week."
    ]
  },
  { 
    icon: ShieldAlert, 
    name: "Developer Tools", 
    position: 9, 
    description: "Build with confidence.",
    features: [
      "RESTful APIs, SDKs, and sandbox environments.",
      "Secure tokenization and webhook support.",
      "White-label flexibility for branded integrations."
    ],
    benefits: [
      "Embed payments directly into your platform.",
      "Keep control of your experience without building from scratch.",
      "Launch faster with detailed docs and dedicated support."
    ]
  },
  { 
    icon: Globe2, 
    name: "Global Reach", 
    position: 10, 
    description: "Scale confidently across borders.",
    features: [
      "Accept payments in multiple currencies.",
      "Cross-border processing with built-in compliance.",
      "Global acquirer network via NMI infrastructure."
    ],
    benefits: [
      "Expand into new markets without operational complexity.",
      "Stay compliant with international payment standards.",
      "Build a global brand with local trust."
    ]
  },
];

export const PaymentSlider = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isRotating, setIsRotating] = useState(false);

  const handleCardClick = (service: typeof services[0]) => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
      setSelectedService(service);
    }, 1000);
  };

  return (
    <section id="payments" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-ubuntu font-bold mb-4">
          Services
        </h2>
      </div>

      <div className="banner-container">
        <div className="center-shield">
          <img src={shieldLogo} alt="Merchant Haus Shield" />
        </div>
        
        <div 
          className={`slider-3d ${isRotating ? 'rotating' : ''}`} 
          style={{ "--quantity": services.length } as React.CSSProperties}
        >
          {services.map((service) => (
            <div
              key={service.position}
              className="slider-item"
              style={{ "--position": service.position } as React.CSSProperties}
              onClick={() => handleCardClick(service)}
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
                <div className="service-card-back">
                  <img src={shieldLogo} alt="Merchant Haus" className="card-back-logo" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="model-shadow" aria-hidden="true" />
      </div>

      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

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
          width: 200px;
          height: 200px;
          z-index: 1;
          pointer-events: none;
        }

        .center-shield img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 10px 30px rgba(220, 20, 60, 0.4));
        }

        .slider-3d {
          position: absolute;
          width: 160px;
          height: 200px;
          top: 10%;
          left: calc(50% - 80px);
          transform-style: preserve-3d;
          transform: perspective(1500px) rotateX(-18deg);
          animation: autoRun 40s linear infinite;
          z-index: 2;
        }

        .banner-container:hover .slider-3d:not(.rotating) {
          animation-play-state: paused;
        }

        .slider-3d.rotating {
          animation: spinToFront 1s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
        }

        @keyframes autoRun {
          from {
            transform: perspective(1500px) rotateX(-18deg) rotateY(0deg);
          }
          to {
            transform: perspective(1500px) rotateX(-18deg) rotateY(360deg);
          }
        }

        @keyframes spinToFront {
          from {
            transform: perspective(1500px) rotateX(-18deg) rotateY(var(--current-rotation, 0deg));
          }
          to {
            transform: perspective(1500px) rotateX(-18deg) rotateY(calc(var(--current-rotation, 0deg) + 360deg));
          }
        }

        .slider-item {
          position: absolute;
          inset: 0;
          transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(380px);
        }

        .service-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .service-card-front,
        .service-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .service-card-front {
          transform: rotateY(0deg);
        }

        .service-card-back {
          transform: rotateY(180deg);
          background: linear-gradient(135deg, rgba(245, 245, 245, 0.95) 0%, rgba(220, 220, 220, 0.95) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-back-logo {
          width: 60%;
          height: 60%;
          object-fit: contain;
          opacity: 0.4;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-card:hover .service-card-front {
          box-shadow: 0 15px 40px -5px rgba(220, 20, 60, 0.4);
        }

        .service-image {
          width: 100%;
          height: 100%;
          position: relative;
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
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
        }

        .model-shadow {
          position: absolute;
          inset: auto 0 0;
          height: 100px;
          background: radial-gradient(ellipse at center, rgba(220, 20, 60, 0.3) 0%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
        }

        @media (max-width: 1023px) {
          .center-shield {
            width: 150px;
            height: 150px;
          }
          .slider-3d {
            width: 140px;
            height: 180px;
            left: calc(50% - 70px);
          }
          .slider-item {
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(300px);
          }
        }

        @media (max-width: 767px) {
          .banner-container {
            min-height: 26rem;
          }
          .center-shield {
            width: 120px;
            height: 120px;
          }
          .slider-3d {
            width: 110px;
            height: 150px;
            left: calc(50% - 55px);
          }
          .slider-item {
            transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(210px);
          }
          .service-icon-wrap {
            width: 3rem;
            height: 3rem;
          }
          .service-icon {
            width: 1.5rem;
            height: 1.5rem;
          }
          .service-name {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};
