import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ShieldCheck, Lock, CreditCard } from "lucide-react";
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
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA' }}>
      <Header />
      
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F8F9FA;
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
        <section id="category-compliance" className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8" style={{ fontFamily: 'Ubuntu, sans-serif', color: '#1A1A1A' }}>
            Latest Insights <span style={{ color: '#00CEDB' }}>on the Digital Frontier</span>
          </h2>
          
          <div className="card-container">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 card-shadow hover-crimson-arrow">
              <a href="/vamp" className="block">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-96 relative">
                    <img 
                      src="/blog-images/vamp_header.webp" 
                      alt="Visa VAMP Featured Image" 
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase" style={{ backgroundColor: '#DC143C' }}>
                      Featured
                    </span>
                  </div>
                  <div className="p-6 sm:p-10 flex flex-col justify-center">
                    <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#00CEDB' }}>
                      Compliance & Fraud
                    </p>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Ubuntu, sans-serif', color: '#1A1A1A' }}>
                      Visa's VAMP: A New Era for Fraud and Dispute Management
                    </h3>
                    <p className="mb-6 leading-relaxed" style={{ color: '#A9A9A9' }}>
                      VAMP replaces legacy programs (VFMP/VDMP) with a unified metric, reshaping how merchants and acquirers manage risk. Learn what it means for your business.
                    </p>
                    <div className="flex items-center font-semibold" style={{ color: '#1A1A1A' }}>
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
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Ubuntu, sans-serif', color: '#1A1A1A' }}>
            Explore Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="#category-compliance"
              className="px-4 py-2 text-sm text-white rounded-full hover:bg-opacity-90 transition-colors flex items-center"
              style={{ backgroundColor: '#DC143C' }}
            >
              <ShieldCheck className="w-4 h-4 mr-2" /> Compliance Insights
            </a>
            <a
              href="#category-fraud-prevention"
              className="px-4 py-2 text-sm bg-gray-200 rounded-full hover:bg-gray-300 transition-colors flex items-center"
              style={{ color: '#1A1A1A' }}
            >
              <Lock className="w-4 h-4 mr-2" /> Fraud Prevention Strategies
            </a>
            <a
              href="#category-payments-tech"
              className="px-4 py-2 text-sm bg-gray-200 rounded-full hover:bg-gray-300 transition-colors flex items-center"
              style={{ color: '#1A1A1A' }}
            >
              <CreditCard className="w-4 h-4 mr-2" /> Payments Tech Innovations
            </a>
          </div>
        </section>

        {/* Article Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Card 1: VAMP Article */}
            <div className="card-container" id="category-compliance-secondary">
              <div className="bg-white rounded-xl overflow-hidden card-shadow hover-crimson-arrow">
                <a href="/vamp" className="block">
                  <img 
                    src="/blog-images/vamp_metrics.webp" 
                    alt="VAMP Metrics" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#DC143C' }}>
                      Compliance
                    </p>
                    <h4 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                      Visa VAMP: Decoding the New Risk Ratio
                    </h4>
                    <p className="text-sm mb-4" style={{ color: '#A9A9A9' }}>
                      A deep dive into the TC40 and TC15 metrics that determine your program enrollment.
                    </p>
                    <div className="flex items-center text-sm font-medium" style={{ color: '#1A1A1A' }}>
                      Read More
                      <ArrowRight className="arrow-icon w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 2: 3D Secure Article */}
            <div className="card-container" id="category-fraud-prevention">
              <div className="bg-white rounded-xl overflow-hidden card-shadow hover-crimson-arrow">
                <a href="/3ds" className="block">
                  <img 
                    src="/blog-images/3ds_ai.png" 
                    alt="3D Secure Authentication" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#00CEDB' }}>
                      Fraud Prevention
                    </p>
                    <h4 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                      Understanding 3D Secure: Protecting Merchants and Customers
                    </h4>
                    <p className="text-sm mb-4" style={{ color: '#A9A9A9' }}>
                      How modern authentication can boost security without sacrificing conversion rates.
                    </p>
                    <div className="flex items-center text-sm font-medium" style={{ color: '#1A1A1A' }}>
                      Read More
                      <ArrowRight className="arrow-icon w-4 h-4 ml-2" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 3: POS Solutions */}
            <div className="card-container" id="category-payments-tech">
              <div className="bg-white rounded-xl overflow-hidden card-shadow hover-crimson-arrow">
                <a href="/services#omnichannel-payments" className="block">
                  <img 
                    src="/blog-images/pos_terminal.png" 
                    alt="Point of Sale Solutions" 
                    className="w-full h-40 object-cover bg-gradient-to-br from-gray-100 to-gray-50"
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(26, 26, 26, 0.6)' }}>
                      Payments Tech
                    </p>
                    <h4 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                      Modern POS Solutions: Beyond the Terminal
                    </h4>
                    <p className="text-sm mb-4" style={{ color: '#A9A9A9' }}>
                      How next-gen point of sale systems are transforming retail experiences.
                    </p>
                    <div className="flex items-center text-sm font-medium" style={{ color: '#1A1A1A' }}>
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
            <button className="px-6 py-3 border-2 font-semibold rounded-full transition-colors" style={{ borderColor: '#DC143C', color: '#DC143C' }} 
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#DC143C';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#DC143C';
              }}>
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
