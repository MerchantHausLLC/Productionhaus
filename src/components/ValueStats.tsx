import { ShieldCheck, TrendingUp, Users, Zap, ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";

export const ValueStats = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const stats = [
    {
      icon: Zap,
      value: "99.99%",
      label: "Uptime",
      description: "The NMI Gateway maintains enterprise-grade reliability through redundant data centers and live failover routing."
    },
    {
      icon: TrendingUp,
      value: "175+",
      label: "Processor Connections",
      description: "Merchants can process through more than 175 global acquirers — one of the broadest connection networks in the industry."
    },
    {
      icon: ShoppingCart,
      value: "200+",
      label: "Shopping Cart & POS Integrations",
      description: "Compatible with over 200 shopping carts, point-of-sale, and eCommerce platforms for seamless checkout flexibility."
    },
    {
      icon: ShieldCheck,
      value: "up to 70%",
      label: "3D Secure & Fraud Tools Reduce Chargebacks",
      description: "Merchants who enable built-in fraud protection and 3-D Secure typically experience 50–70% fewer disputes on card-not-present transactions."
    },
    {
      icon: Users,
      value: "Level 1",
      label: "PCI DSS Certified",
      description: "The platform meets the highest level of security certification recognized for providers processing more than six million transactions annually."
    }
  ];

  return (
    <section className="hidden md:block py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/20 dark:from-neutral-dark dark:to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isExpanded = expandedCards.has(index);
            const descriptionLength = stat.description.length;
            const shouldTruncate = descriptionLength > 100;
            
            return (
              <div
                key={index}
                className="text-center space-y-3 p-4 rounded-xl bg-card dark:bg-card/50 border border-border dark:border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col"
                style={{ aspectRatio: "9/16" }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className={`text-xs text-muted-foreground transition-all duration-300 ${!isExpanded && shouldTruncate ? 'line-clamp-3' : ''}`}>
                    {stat.description}
                  </div>
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleCard(index)}
                      className="mt-2 text-xs text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-1 font-medium"
                      aria-label={isExpanded ? "Show less" : "Show more"}
                    >
                      {isExpanded ? "Less" : "More"}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
