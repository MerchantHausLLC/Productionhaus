import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { MerchantApplicationDialog } from "./MerchantApplicationDialog";
import shieldLogo from "@/assets/rshield.webp";
import { solutions } from "./Solutions.data";

export const Solutions = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
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

  // REMOVED: Infinite cycling marquee animation
  // useEffect(() => {
  //   const container = marqueeRef.current;
  //   if (!container) return;

  //   const scrollSpeed = 1; // pixels per frame
    
  //   const animate = () => {
  //     if (isPausedRef.current) {
  //       animationFrameRef.current = requestAnimationFrame(animate);
  //       return;
  //     }

  //     scrollPositionRef.current += scrollSpeed;
      
  //     // Get the actual content width (one set of cards)
  //     const contentWidth = 320 * solutions.length + 24 * (solutions.length - 1); // card width * count + gaps
      
  //     // Reset position when we've scrolled past one full set
  //     if (scrollPositionRef.current >= contentWidth) {
  //       scrollPositionRef.current = 0;
  //     }
      
  //     container.scrollLeft = scrollPositionRef.current;
  //     animationFrameRef.current = requestAnimationFrame(animate);
  //   };

  //   animationFrameRef.current = requestAnimationFrame(animate);

  //   return () => {
  //     if (animationFrameRef.current) {
  //       cancelAnimationFrame(animationFrameRef.current);
  //     }
  //   };
  // }, []);

  // Pause on hover
  const handleMarqueeMouseEnter = () => {
    // isPausedRef.current = true; // No longer needed for auto-scroll
  };

  const handleMarqueeMouseLeave = () => {
    // isPausedRef.current = false; // No longer needed for auto-scroll
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
    setIsApplicationOpen(true);
  };

  // Tilt effect handler for cards based on cursor position
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, index: number) => {
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
    <section id="services" className="py-20 px-4 sm:px-6 bg-muted/50 dark:bg-neutral-dark/30 relative overflow-visible">
      {/* Shield Logo - Positioned within Solutions section */}
      <div className="relative -mt-32 mb-12 z-20 pointer-events-none">
        <div className="flex justify-center">
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-radial from-crimson/30 to-cyber-teal/20 blur-3xl scale-150" />
            <img 
              src={shieldLogo} 
              alt="MerchantHaus Shield" 
              className="h-48 w-48 md:h-64 md:w-64 object-contain drop-shadow-2xl relative z-10 animate-scale-in"
            />
          </div>
        </div>
      </div>

      {/* Globe Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsla(var(--crimson),0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,hsla(var(--cyber-teal),0.16),transparent_65%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/images/globe-background.png"
            alt="Global Payment Network"
            className="relative w-full max-w-5xl h-auto object-contain opacity-25 md:opacity-35 contrast-125 saturate-125 drop-shadow-[0_0_60px_rgba(220,20,60,0.18)]"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto overflow-visible relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-ubuntu font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            CORE SERVICES
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Comprehensive payment solutions designed to help your business thrive in today's digital economy.
          </p>
          <Button 
            asChild
            className="bg-crimson hover:bg-crimson/90 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
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
                    className="service-card marquee-card flex-shrink-0"
                    style={{ width: "320px", aspectRatio: "3/4" }}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {(solution.bannerImage && (
                      <div className="card-image-visual relative w-full aspect-[16/9] overflow-hidden rounded-t-[1.5rem]">
                        <img
                          src={solution.bannerImage}
                          alt={solution.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          draggable={false}
                        />
                      </div>
                    )) || <div className="relative w-full aspect-[16/9] rounded-t-[1.5rem] bg-muted/40" />}

                    <div className="service-card-body">
                      <div className="service-card-icon">
                        <Icon className="h-6 w-6 text-[hsl(var(--crimson))]" strokeWidth={2} />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold font-ubuntu">{solution.title}</h3>
                        <p className="text-base leading-relaxed text-neutral-600">{solution.description}</p>
                      </div>

                      <div className="service-card-footer">
                        <button
                          type="button"
                          className="service-card-button"
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
              <div className="relative w-full aspect-[16/9] overflow-hidden shrink-0">
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
