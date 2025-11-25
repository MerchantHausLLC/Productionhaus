import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck, Lock, DollarSign, CreditCard } from "lucide-react";
import { useEffect, useRef } from "react";
import shieldLogo from "@/assets/shield.webp";

const Blog = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const cardContainers = mainElement.querySelectorAll('.card-container');

    const handleMouseOver = (container: Element) => {
      mainElement.classList.add('main-dimmed');
      (container as HTMLElement).style.zIndex = '10';
    };

    const handleMouseOut = (container: Element) => {
      (container as HTMLElement).style.zIndex = '1';
      
      setTimeout(() => {
        const isHovering = Array.from(cardContainers).some(c => c.matches(':hover'));
        if (!isHovering) {
          mainElement.classList.remove('main-dimmed');
        }
      }, 50);
    };

    cardContainers.forEach(container => {
      container.addEventListener('mouseover', () => handleMouseOver(container));
      container.addEventListener('mouseout', () => handleMouseOut(container));
    });

    return () => {
      cardContainers.forEach(container => {
        container.removeEventListener('mouseover', () => handleMouseOver(container));
        container.removeEventListener('mouseout', () => handleMouseOut(container));
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-neutral-dark">
      <Header />
      
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .logo-text {
             font-family: 'Ubuntu', sans-serif;
             font-weight: 600;
        }
        .card-container {
            perspective: 1000px;
            z-index: 1;
        }
        main {
            transition: filter 0.5s ease;
        }
        main.main-dimmed {
            filter: brightness(0.95);
        }

        .card-shadow {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
            transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease;
            transform-style: preserve-3d;
            filter: none; 
        }
        
        .card-shadow:hover {
            transform: scale(1.04) rotateX(4deg) rotateY(-4deg);
            box-shadow: 0 25px 40px -8px rgba(0, 0, 0, 0.3), 0 10px 15px -5px rgba(0, 0, 0, 0.1);
            z-index: 10;
            filter: none !important;
        }
        
        .hover-crimson-arrow:hover .arrow-icon {
            transform: translateX(5px);
            color: #DC143C;
        }
        .arrow-icon {
            transition: all 0.3s ease;
        }
      `}</style>

      <main ref={mainRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Hero / Featured Article */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 font-ubuntu text-foreground">
            Latest Insights <span className="text-cyber-teal">on the Digital Frontier</span>
          </h2>
          
          <div className="card-container">
            <div className="bg-card dark:bg-card/80 rounded-2xl overflow-hidden shadow-xl border border-border dark:border-border/50 card-shadow hover-crimson-arrow">
              <a href="/vamp" className="block">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-96 relative">
                    <img 
                      src="/blog-images/vamp_header.webp" 
                      alt="Visa VAMP Featured Image" 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase bg-crimson">
                      Featured
                    </span>
                  </div>
                  <div className="p-6 sm:p-10 flex flex-col justify-center">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-cyber-teal">
                      Compliance & Fraud
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-ubuntu text-foreground">
                      Visa's VAMP: A New Era for Fraud and Dispute Management
                    </h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      VAMP replaces legacy programs (VFMP/VDMP) with a unified metric, reshaping how merchants and acquirers manage risk. Learn what it means for your business.
                    </p>
                    <div className="flex items-center font-semibold text-foreground">
                      Read Article
                      <ArrowRight className="arrow-icon w-5 h-5 ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 font-ubuntu text-foreground">
            Explore Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="px-4 py-2 text-sm text-white rounded-full hover:bg-opacity-90 transition-colors flex items-center bg-crimson">
              <ShieldCheck className="w-4 h-4 mr-2" /> Compliance (4)
            </a>
            <a href="#" className="px-4 py-2 text-sm bg-muted dark:bg-muted/50 rounded-full hover:bg-muted/80 dark:hover:bg-muted/70 transition-colors flex items-center text-foreground">
              <Lock className="w-4 h-4 mr-2" /> Fraud Prevention (7)
            </a>
            <a href="#" className="px-4 py-2 text-sm bg-muted dark:bg-muted/50 rounded-full hover:bg-muted/80 dark:hover:bg-muted/70 transition-colors flex items-center text-foreground">
              <DollarSign className="w-4 h-4 mr-2" /> FinTech News (12)
            </a>
            <a href="#" className="px-4 py-2 text-sm bg-muted dark:bg-muted/50 rounded-full hover:bg-muted/80 dark:hover:bg-muted/70 transition-colors flex items-center text-foreground">
              <CreditCard className="w-4 h-4 mr-2" /> Payments Tech (5)
            </a>
          </div>
        </section>

        {/* Article Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Card 1: VAMP Article */}
            <div className="card-container">
              <div className="bg-card dark:bg-card/80 rounded-xl overflow-hidden card-shadow hover-crimson-arrow">
                <a href="/vamp" className="block">
                  <img 
                    src="/blog-images/vamp_metrics.webp" 
                    alt="VAMP Metrics" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-crimson">
                      Compliance
                    </p>
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      Visa VAMP: Decoding the New Risk Ratio
                    </h4>
                    <p className="text-sm mb-4 text-muted-foreground">
                      A deep dive into the TC40 and TC15 metrics that determine your program enrollment.
                    </p>
                    <div className="flex items-center text-sm font-medium text-foreground">
                      Read More
                      <ArrowRight className="arrow-icon w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 2: 3D Secure Article */}
            <div className="card-container">
              <div className="bg-card dark:bg-card/80 rounded-xl overflow-hidden card-shadow hover-crimson-arrow">
                <a href="/3ds" className="block">
                  <img 
                    src="/blog-images/3ds_ai.png" 
                    alt="3D Secure Authentication" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-cyber-teal">
                      Fraud Prevention
                    </p>
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      Understanding 3D Secure: Protecting Merchants and Customers
                    </h4>
                    <p className="text-sm mb-4 text-muted-foreground">
                      How modern authentication can boost security without sacrificing conversion rates.
                    </p>
                    <div className="flex items-center text-sm font-medium text-foreground">
                      Read More
                      <ArrowRight className="arrow-icon w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 3: Tap-to-Mobile */}
            <div className="card-container">
              <div className="bg-card dark:bg-card/80 rounded-xl overflow-hidden card-shadow hover-crimson-arrow">
                <a href="/tap-to-mobile" className="block">
                  <img
                    src="/blog-images/TAP1.webp"
                    alt="Tap-to-mobile point of sale"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
                      Payments Tech
                    </p>
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      Tap-to-Mobile Is the New POS
                    </h4>
                    <p className="text-sm mb-4 text-muted-foreground">
                      Turn any NFC phone into a softPOS and start taking contactless payments with zero extra hardware.
                    </p>
                    <div className="flex items-center text-sm font-medium text-foreground">
                      Read More
                      <ArrowRight className="arrow-icon w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 4: 3DS2 Deep Dive */}
            <div className="card-container">
              <div className="bg-card dark:bg-card/80 rounded-xl overflow-hidden card-shadow hover-crimson-arrow">
                <a href="/3ds2" className="block">
                  <img
                    src="/blog-images/3ds_handshake.png"
                    alt="3D Secure 2 authentication experience"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-cyber-teal">
                      Fraud Prevention
                    </p>
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      3D Secure 2: Security Without the Speed Bumps
                    </h4>
                    <p className="text-sm mb-4 text-muted-foreground">
                      Learn how 3DS2 keeps checkout fast for trusted customers while shifting fraud liability away from your business.
                    </p>
                    <div className="flex items-center text-sm font-medium text-foreground">
                      Read More
                      <ArrowRight className="arrow-icon w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
          
          {/* Pagination/Load More */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 border-2 font-semibold rounded-full transition-colors border-crimson text-crimson hover:bg-crimson hover:text-white">
              Load More Articles
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Blog;
