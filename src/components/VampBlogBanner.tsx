import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type FeaturedArticle = {
  title: string;
  description: string;
  href: string;
  badge: string;
  date: string;
  gradient: string;
  shadow: string;
  badgeClassName: string;
  textClassName: string;
};

export default function VampBlogBanner() {
  const featuredArticles: FeaturedArticle[] = useMemo(
    () => [
      {
        title: "Beyond the Hype: Why 2026 Will Reset Our Expectations for AI and Accelerate SaaS Payments",
        description:
          "A forward look at how AI expectations will cool while embedded, automated payments become the default for merchants.",
        href: "/prediction-2026",
        badge: "Featured Outlook",
        date: "Nov 12, 2024",
        gradient: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
        shadow: "0 10px 40px rgba(14, 165, 233, 0.3)",
        badgeClassName: "bg-white/25 text-white",
        textClassName: "text-white"
      },
      {
        title: "Visa's VAMP: A New Era for Fraud and Dispute Management",
        description:
          "Discover how Visa's new Acquirer Monitoring Program is reshaping fraud prevention and dispute management across the payment ecosystem.",
        href: "/vamp",
        badge: "Fraud & Compliance",
        date: "Oct 22, 2024",
        gradient: "linear-gradient(135deg, hsl(var(--crimson)) 0%, #8B0000 100%)",
        shadow: "0 10px 40px rgba(220, 20, 60, 0.3)",
        badgeClassName: "bg-white/20 text-white",
        textClassName: "text-white"
      }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % featuredArticles.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  const activeArticle = featuredArticles[activeIndex];

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Featured Insights</p>
            <p className="text-sm text-muted-foreground">Stay ahead with our freshest takes on risk, payments, and automation.</p>
          </div>
          <div className="flex items-center gap-2">
            {featuredArticles.map((article, index) => (
              <button
                key={article.href}
                aria-label={`Show ${article.title}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-white border border-white/70 scale-110" : "bg-white/50 hover:bg-white"
                }`}
                style={{ boxShadow: index === activeIndex ? activeArticle.shadow : "none" }}
              />
            ))}
          </div>
        </div>

        <a
          href={activeArticle.href}
          className="block group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01]"
          style={{
            background: activeArticle.gradient,
            boxShadow: activeArticle.shadow
          }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
            <div className={`flex-1 ${activeArticle.textClassName}`}>
              <div className={`inline-block px-4 py-1 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 ${activeArticle.badgeClassName}`}>
                {activeArticle.badge} • {activeArticle.date}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{activeArticle.title}</h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">{activeArticle.description}</p>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg group-hover:gap-5 transition-all duration-300 shadow-lg">
                Read Article
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </a>
      </div>
    </section>
  );
}
