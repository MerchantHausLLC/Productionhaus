import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroVideo from "@/assets/Hero.webm";

const wordSets = {
  line1: ["Solutions", "Technology", "Systems", "Processing", "Platforms", "Services", "Infrastructure", "Architecture"],
  line2: ["Advance", "Grow", "Secure", "Empower", "Optimize", "Transform", "Scale", "Elevate"],
  line3: ["Business", "Enterprise", "Operations", "Organization", "Revenue", "Portfolio", "Growth", "Performance"]
};

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWords, setCurrentWords] = useState({ line1: 0, line2: 0, line3: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomIndex = (max: number, previous: number) => {
    let newIndex = Math.floor(Math.random() * max);
    while (newIndex === previous && max > 1) {
      newIndex = Math.floor(Math.random() * max);
    }
    return newIndex;
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWords(prev => ({
          line1: getRandomIndex(wordSets.line1.length, prev.line1),
          line2: getRandomIndex(wordSets.line2.length, prev.line2),
          line3: getRandomIndex(wordSets.line3.length, prev.line3),
        }));
        setIsAnimating(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover" poster="/hero-replacement.webp">
          <source src={heroVideo} type="video/webm" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated Headline */}
        <div
          className={`font-ubuntu font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ letterSpacing: '0.02em' }}
        >
          <div className="flex flex-col gap-1">
            <div>
              <span className="text-white">Payment </span>
              <span
                className={`inline-block transition-all duration-400 ease-in-out ${
                  isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                } text-white/70`}
              >
                {wordSets.line1[currentWords.line1]}
              </span>
            </div>
            <div>
              <span className="text-white">That </span>
              <span
                className={`inline-block transition-all duration-400 ease-in-out ${
                  isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                } text-white/70`}
              >
                {wordSets.line2[currentWords.line2]}
              </span>
            </div>
            <div>
              <span className="text-white">Your </span>
              <span
                className={`inline-block transition-all duration-400 ease-in-out ${
                  isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
                } text-white/70`}
              >
                {wordSets.line3[currentWords.line3]}
              </span>
            </div>
          </div>
        </div>

        {/* Subtle divider */}
        <div
          className={`mx-auto mt-8 mb-6 w-16 h-px bg-white/40 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        />

        {/* Subheadline */}
        <p
          className={`font-inter text-lg sm:text-xl md:text-2xl text-white/80 font-light tracking-wide transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Integrated payments. Enterprise performance.
        </p>

        {/* Body Text */}
        <p
          className={`font-inter text-sm sm:text-base text-white/60 max-w-2xl mx-auto mt-4 leading-relaxed transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Deploy a unified payment gateway in days — supporting cards, ACH, and secure pay links across every channel your organization operates.
        </p>

        {/* CTA Buttons */}
        <div
          className={`pt-8 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-[900ms] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-inter font-medium text-base px-10 py-6 rounded-none tracking-wide transition-all w-full sm:w-auto"
          >
            <a href="https://ops-terminal.merchant.haus/contact">Get Started</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border border-white/40 text-white hover:bg-white/10 font-inter font-medium text-base px-10 py-6 rounded-none tracking-wide transition-all w-full sm:w-auto"
          >
            <a href="#solutions">Explore Solutions</a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-16 transition-all duration-700 delay-[1100ms] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronDown className="w-6 h-6 text-white/40 animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};
