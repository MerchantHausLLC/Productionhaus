import { ShieldCheck, TrendingUp, Users, Zap, ShoppingCart } from "lucide-react";

export const ValueStats = () => {
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
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/20 dark:from-neutral-dark dark:to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-5 md:p-6 rounded-xl bg-card dark:bg-card/50 border border-border dark:border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
