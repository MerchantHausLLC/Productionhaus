import { Shield, TrendingUp, Users, Zap } from "lucide-react";

export const ValueStats = () => {
  const stats = [
    {
      icon: Shield,
      value: "10+",
      label: "Years of Excellence",
      description: "Trusted by thousands of merchants nationwide"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable payment processing when you need it"
    },
    {
      icon: Users,
      value: "5000+",
      label: "Active Merchants",
      description: "Growing businesses across the United States"
    },
    {
      icon: Zap,
      value: "<1s",
      label: "Transaction Speed",
      description: "Lightning-fast payment processing"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-muted/20 dark:from-neutral-dark dark:to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
