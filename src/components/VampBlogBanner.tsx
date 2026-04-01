import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

type FeaturedSlide = {
  title: string;
  description: string;
  href: string;
  tag: string;
  date: string;
};

const slides: FeaturedSlide[] = [
  {
    title: "What the 2025 Payments Survey Reveals About How Customers Really Pay",
    description:
      "Cards still dominate, but wallets and BNPL are now essential levers for margin and AOV. Here's what the data says about your payment mix strategy.",
    href: "/payments-survey-2025",
    tag: "Latest Article",
    date: "December 2025"
  },
  {
    title: "3D Secure 2: Security Without the Speed Bumps",
    description:
      "Fraud is getting smarter. Your checkout should too. 3DS2 lets you protect your customers and your bottom line — without slowing down sales.",
    href: "/3ds2",
    tag: "Fraud Prevention",
    date: "November 2025"
  },
  {
    title: "Visa's VAMP: A New Era for Fraud and Dispute Management",
    description:
      "Discover how Visa's new Acquirer Monitoring Program is reshaping fraud prevention and dispute management across the payment ecosystem.",
    href: "/vamp",
    tag: "Compliance",
    date: "October 2025"
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
    <section className="py-12 px-6">
      <div
        className="relative max-w-7xl mx-auto overflow-hidden border border-border transition-all duration-500 bg-card"
        style={{
          boxShadow: "none"
        }}
      >
        <a
          href={activeSlide.href}
          className="block group relative"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
            <div className="flex-1 text-foreground">
              <div className="inline-flex items-center gap-2 px-4 py-1 border border-foreground/20 text-sm font-inter font-medium mb-4 tracking-wide uppercase">
                <span>{activeSlide.tag}</span>
                <span className="text-foreground/50">&middot; {activeSlide.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-ubuntu mb-3 text-foreground">
                {activeSlide.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl font-inter font-light">
                {activeSlide.description}
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 px-8 py-4 bg-foreground text-background font-inter font-medium text-sm tracking-wide uppercase group-hover:gap-5 transition-all duration-300">
                Read Article
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </a>

        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 w-8 transition-all duration-300 ${index === activeIndex ? "bg-foreground" : "bg-foreground/30"}`}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-5">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
        >
          Browse all articles
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
