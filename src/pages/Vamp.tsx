import Image from "next/image";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Vamp = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          
          if (target.hasAttribute('data-animate')) {
            target.classList.remove('initial-hidden');
            target.classList.add('fade-up-active');
            observer.unobserve(target);
          } 
          else if (target.hasAttribute('data-animate-pop')) {
            target.classList.remove('initial-hidden');
            target.classList.add('pop-in-active');
            observer.unobserve(target);
          }
          else if (target.hasAttribute('data-stagger-parent')) {
            const staggerItems = target.querySelectorAll('.stagger-item');
            
            const firstItem = staggerItems[0];
            if (firstItem && firstItem.classList.contains('fade-up-active')) {
              observer.unobserve(target);
              return;
            }

            staggerItems.forEach((item, index) => {
              item.classList.add('initial-hidden');
              
              setTimeout(() => {
                item.classList.remove('initial-hidden');
                item.classList.add('fade-up-active');
              }, index * 100);
            });
            observer.unobserve(target);
          }
        }
      });
    }, observerOptions);

    const initialDelay = 1.8;
    
    document.querySelectorAll('[data-animate]').forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${initialDelay + index * 0.15}s`;
      observer.observe(element);
    });
    
    document.querySelectorAll('[data-animate-pop]').forEach((element) => {
      (element as HTMLElement).style.animationDelay = `${initialDelay + 0.5}s`;
      observer.observe(element);
    });

    document.querySelectorAll('[data-stagger-parent]').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA', color: '#1A1A1A' }}>
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.7;
        }
        .post-container {
            max-width: 800px;
        }
        .section-heading {
            border-left: 5px solid #DC143C;
            padding-left: 1rem;
            transition: all 0.3s ease-in-out;
        }
        .math-block {
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1.5rem 0;
            font-family: monospace;
            overflow-x: auto;
            border: 1px solid #ddd;
        }
        .callout {
            border-left: 4px solid #00CEDB;
            background-color: #edfcfd;
            padding: 1rem 1.5rem;
            border-radius: 8px;
        }
        .logo-text {
             font-family: 'Ubuntu', sans-serif;
             font-weight: 600;
        }
        
        @keyframes fade-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes reveal-title {
            0% { max-height: 0; opacity: 0; }
            100% { max-height: 100vh; opacity: 1; }
        }
        
        #main-title {
            max-height: 0; 
            opacity: 0;
            overflow: hidden;
            animation: reveal-title 1.5s ease-out 0.5s forwards; 
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.85; }
            50% { transform: scale(1.01); opacity: 1; }
            100% { transform: scale(1); opacity: 0.85; }
        }
        .tagline-pulse {
            opacity: 0.85;
            transition: all 0.3s;
            animation: pulse 5s ease-in-out infinite;
        }

        @keyframes pop-in {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
        }

        .initial-hidden {
            opacity: 0;
        }

        .fade-up-active {
            animation: fade-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .pop-in-active {
             animation: pop-in 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        
        .stagger-item {
            transform: translateY(10px);
        }

        .masked-image-container {
            position: relative;
            width: 100%;
            overflow: hidden;
            margin-bottom: 2.5rem;
            border-radius: 12px;
            background-color: #3C2F53;
        }

        .masked-image-container.shape-1 {
            height: 300px;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        
        .masked-image-container.shape-2 {
            height: 350px;
            clip-path: polygon(0 0, 100% 0, 100% 80%, 75% 100%, 0% 60%);
        }

        .masked-image-container.shape-3 {
            height: 280px;
            clip-path: polygon(0 0, 100% 0, 100% 70%, 0% 100%);
        }

        .masked-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            opacity: 0.7;
        }

        .masked-image-overlay-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            text-align: center;
            font-size: 2.5rem;
            font-weight: bold;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
            z-index: 10;
        }

        .masked-image-container.fade-up-active {
            animation: fade-up 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @media (max-width: 640px) {
          .masked-image-overlay-text {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <Header />

      <div className="p-4 sm:p-8">
        <div className="post-container mx-auto">
          
          {/* Header with Logo and Tagline */}
          <header className="mb-12 pt-8 border-b-4 flex items-center space-x-4" style={{ borderColor: '#DC143C' }}>
            <Image
              src="/assets/shield.webp"
              alt="MerchantHaus Shield Logo"
              width={48}
              height={48}
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight logo-text" style={{ color: '#1A1A1A' }}>
                MerchantHaus <span style={{ color: '#DC143C' }}>Blog</span>
              </h1>
              <p className="mt-2 mb-2 text-lg tracking-wider tagline-pulse" style={{ color: '#A9A9A9' }}>
                plug in, play, process.
              </p>
            </div>
          </header>

          {/* Main Title Section */}
          <h2 id="main-title" className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
            Visa's VAMP: A New Era for Fraud and Dispute Management
          </h2>
          
          <p className="text-lg mb-8 italic border-b pb-4 initial-hidden" data-animate style={{ color: 'rgba(26, 26, 26, 0.8)' }}>
            The world of payment processing is always evolving, and staying ahead means understanding Visa's new <strong>Visa Acquirer Monitoring Program (VAMP)</strong>. This global framework redefines how fraud and disputes are tracked and managed across the payment ecosystem.
          </p>
          
          {/* Masked Image 1: Header Visual */}
          <div className="masked-image-container shape-1 initial-hidden" data-animate>
            <Image
              src="/blog-images/vamp_header.webp"
              alt="Abstract global payment network"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 800px, 100vw"
            />
            <div className="masked-image-overlay-text text-xl sm:text-3xl lg:text-4xl">Shaping the Future of Payments</div>
          </div>

          {/* Section 1: What is VAMP */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-6 section-heading initial-hidden" data-animate style={{ color: '#DC143C' }}>
              What is VAMP and How Does It Work?
            </h3>
            
            <p className="mb-4 initial-hidden" data-animate>
              VAMP officially began replacing the previous, separate monitoring programs—the Visa Fraud Monitoring Program (VFMP) and the Visa Dispute Monitoring Program (VDMP)—starting in April 2025.
            </p>
            
            <p className="mb-4 initial-hidden" data-animate>
              The program's core is a single, unified metric called the <strong>VAMP Ratio</strong>, which measures an acquirer's or merchant's overall risk profile.
            </p>

            <h4 className="text-xl font-bold mt-6 mb-3 initial-hidden" data-animate style={{ color: '#1A1A1A' }}>
              The VAMP Ratio Calculation:
            </h4>
            
            <p className="mb-4 initial-hidden" data-animate>
              The ratio combines two critical components of card-not-present (CNP) transaction risk:
            </p>
            
            {/* VAMP Ratio Formula */}
            <div className="math-block initial-hidden" data-animate-pop>
              <div className="text-center mb-4" style={{ fontSize: '1.1rem' }}>
                VAMP Ratio = (Count of [Fraud (TC40) + Disputes (TC15)]) / (Count of Settled Transactions (TC05))
              </div>
              <ul className="text-sm mt-3 list-disc list-inside space-y-1" data-stagger-parent>
                <li className="stagger-item"><strong style={{ color: '#DC143C' }}>TC40s (Fraud Reports):</strong> Cases where a cardholder reports a fraudulent transaction to their bank.</li>
                <li className="stagger-item"><strong style={{ color: '#DC143C' }}>TC15s (All Disputes):</strong> All chargebacks, including both fraud-related and non-fraud disputes (e.g., merchandise quality or non-receipt).</li>
                <li className="stagger-item"><strong style={{ color: '#DC143C' }}>TC05s (Settled Transactions):</strong> The total count of all settled transactions in a calendar month.</li>
              </ul>
            </div>
          </div>

          {/* Masked Image 2: Metrics Visual */}
          <div className="masked-image-container shape-2 initial-hidden" data-animate>
            <Image
              src="/blog-images/vamp_metrics.webp"
              alt="Data analysis and trends"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 800px, 100vw"
            />
            <div className="masked-image-overlay-text text-xl sm:text-3xl">Understanding the Metrics</div>
          </div>

          {/* Section 2: Key Changes and Impact */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading initial-hidden" data-animate style={{ color: '#DC143C' }}>
              Key Changes and Merchant Impact
            </h3>
            
            <p className="mb-6 initial-hidden" data-animate>
              VAMP's consolidation into one framework and the calculation of the new ratio bring several major implications for merchants:
            </p>

            <ul className="list-disc ml-6 space-y-4" data-stagger-parent style={{ color: 'rgba(26, 26, 26, 0.9)' }}>
              <li className="stagger-item">
                <strong style={{ color: '#1A1A1A' }}>Unified Risk Management:</strong> By combining fraud and all dispute types into a single metric, VAMP encourages merchants and acquirers to address the root causes of <em>all</em> transactional issues, not just chargebacks.
              </li>
              <li className="stagger-item">
                <strong style={{ color: '#1A1A1A' }}>Increased Penalties for Non-Compliance:</strong> If a merchant's activity pushes their acquirer above VAMP's thresholds, the merchant can face financial penalties. For merchants, the <span style={{ color: '#DC143C', fontWeight: 'bold' }}>Excessive</span> threshold is around 2.2% in many regions, and exceeding this can result in fees per disputed transaction.
              </li>
              <li className="stagger-item">
                <strong style={{ color: '#1A1A1A' }}>Focus on Enumeration Attacks:</strong> VAMP introduces a separate monitoring element specifically for "enumeration" or card testing fraud, where criminals rapidly attempt small transactions to validate stolen card details. Merchants with a high rate of enumeration attempts may face penalties, regardless of their main VAMP ratio.
              </li>
              <li className="stagger-item">
                <strong style={{ color: '#1A1A1A' }}>The Double-Counting Effect:</strong> Since the ratio includes both fraud reports (TC40s) and chargebacks (TC15s), a single transaction that is first reported as fraud and then becomes a chargeback can be <span style={{ fontWeight: 'bold', color: '#00CEDB' }}>counted twice</span> against your VAMP ratio.
              </li>
            </ul>
          </div>

          {/* Masked Image 3: Security Visual */}
          <div className="masked-image-container shape-3 initial-hidden" data-animate>
            <Image
              src="/blog-images/vamp_security.webp"
              alt="Secure payment solutions"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 800px, 100vw"
            />
            <div className="masked-image-overlay-text text-xl sm:text-3xl">Protecting Your Transactions</div>
          </div>

          {/* Section 3: Actionable Steps */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading initial-hidden" data-animate style={{ color: '#DC143C' }}>
              Staying Compliant: Actionable Steps
            </h3>
            
            <p className="mb-4 initial-hidden" data-animate>
              Compliance is crucial, and merchants can take proactive steps to manage their risk and stay below VAMP's thresholds:
            </p>

            <div className="callout initial-hidden" data-animate>
              <ul className="list-disc ml-5 space-y-3" data-stagger-parent>
                <li className="stagger-item"><strong style={{ color: '#00CEDB' }}>Proactive Monitoring:</strong> Gain access to and regularly monitor your TC40 (fraud) and TC15 (dispute) data from your acquirer to track your VAMP ratio in real-time.</li>
                <li className="stagger-item"><strong style={{ color: '#00CEDB' }}>Layered Fraud Prevention:</strong> Implement robust fraud tools like AVS (Address Verification Service), CVV/CVC2 validation, and 3D Secure 2.0 to catch fraudulent transactions before they settle.</li>
                <li className="stagger-item"><strong style={{ color: '#00CEDB' }}>Leverage Dispute Tools:</strong> Utilize pre-dispute tools and alerts (like Visa's Order Insight) to resolve disputes directly with the cardholder before they escalate to a formal chargeback (TC15) and count against your ratio.</li>
                <li className="stagger-item"><strong style={{ color: '#00CEDB' }}>Address Root Causes:</strong> Analyze the data to understand why customers are disputing charges (e.g., poor fulfillment, misleading product descriptions) and make operational fixes.</li>
              </ul>
            </div>
            
            <p className="mt-6 text-lg font-medium initial-hidden" data-animate style={{ color: '#1A1A1A' }}>
              VAMP is a signal from Visa that fraud prevention and dispute management must be a top priority. By understanding this new framework and proactively implementing strong controls, your business can protect its transactional integrity and continue to grow securely.
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t initial-hidden" data-animate style={{ borderColor: 'rgba(169, 169, 169, 0.5)' }}>
            <p className="text-sm" style={{ color: '#A9A9A9' }}>
              Posted by the MerchantHaus Compliance Team | <time dateTime="2025-10-24">October 24, 2025</time>
            </p>
          </footer>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vamp;
