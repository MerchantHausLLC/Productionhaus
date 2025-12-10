import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

type FeaturedSlide = {
  title: string;
  description: string;
  href: string;
  tag: string;
  gradient: string;
  textColor: string;
  buttonTextColor: string;
  buttonBg: string;
  date: string;
};

const slides: FeaturedSlide[] = [
  {
    title: "Beyond the Hype: Why 2026 Will Reset AI Expectations and Accelerate SaaS Payments",
    description:
      "Explore why the AI hype cycle will cool while embedded, automated SaaS payments become the default choice for merchants heading into 2026.",
    href: "/prediction-2026",
    tag: "Featured Prediction",
    gradient: "linear-gradient(135deg, #0f766e 0%, #0f172a 100%)",
    textColor: "text-white",
    buttonTextColor: "text-teal-900",
    buttonBg: "bg-white",
    date: "October 28, 2024"
  },
  {
    title: "Visa's VAMP: A New Era for Fraud and Dispute Management",
    description:
      "Discover how Visa's new Acquirer Monitoring Program is reshaping fraud prevention and dispute management across the payment ecosystem.",
    href: "/vamp",
    tag: "Latest Article",
    gradient: "linear-gradient(135deg, hsl(var(--crimson)) 0%, #8B0000 100%)",
    textColor: "text-white",
    buttonTextColor: "text-crimson",
    buttonBg: "bg-white",
    date: "September 12, 2024"
  }
];

export default function VampBlogBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = slides.length;
  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalSlides);
    }, 7000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="py-8 px-6">
      <div
        className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl transition-all duration-500"
        style={{
          background: activeSlide.gradient,
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)"
        }}
      >
        <a
          href={activeSlide.href}
          className="block group relative"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
            <div className={`flex-1 ${activeSlide.textColor}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/15 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                <span>{activeSlide.tag}</span>
                <span className="text-white/80">• {activeSlide.date}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                {activeSlide.title}
              </h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                {activeSlide.description}
              </p>
            </div>

            <div className="flex-shrink-0">
              <div
                className={`flex items-center gap-3 px-8 py-4 ${activeSlide.buttonBg} ${activeSlide.buttonTextColor} rounded-full font-bold text-lg group-hover:gap-5 transition-all duration-300 shadow-lg`}
              >
                Read Article
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>

        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-white" : "bg-white/40"}`}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
