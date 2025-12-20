import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

// Updated Pricing tiers including the new high-visibility Enterprise plan.
const pricingPlans = [
  {
    name: "Starter",
    description: "Essential fraud‑first foundation for secure businesses",
    monthlyPrice: 59,
    annualPrice: 588,
    features: [
      "Network Tokens (Customer Token Vault)",
      "Customer Vault secure storage",
      "Basic Fraud Prevention engine",
      "Mobile Payment Gateway device",
      "TXT2PAY billing tools",
      "Automatic Card Updater",
      "Standard dashboard & reporting",
      "Email support",
    ],
    limitations: [
      "AI‑powered fraud scoring (Kount)",
      "Level III data optimization",
      "Shopify premium integration",
      "Priority support",
      "API access",
      "Dedicated account manager",
      "White‑label options",
    ],
    gradient: "from-cyan-500/10 to-blue-500/10",
    popular: false,
  },
  {
    name: "Intermediate",
    description: "Advanced fraud protection with AI decisioning",
    monthlyPrice: 99,
    annualPrice: 986,
    features: [
      "Everything in Starter",
      "Kount AI Fraud Manager",
      "Enhanced rule‑based risk controls",
      "Priority support",
      "API access",
    ],
    limitations: [
      "Level III data optimization",
      "Shopify premium integration",
      "Dedicated account manager",
      "White‑label options",
    ],
    gradient: "from-orange-500/10 to-pink-500/10",
    popular: true,
  },
  {
    name: "Pro",
    description: "Full fraud suite + advanced data optimization",
    monthlyPrice: 149,
    annualPrice: 1484,
    features: [
      "Everything in Intermediate",
      "Level III Advantage (B2B optimization)",
      "Shopify Integration",
      "Custom analytics & reporting",
      "Dedicated account manager",
      "White‑label options",
    ],
    limitations: [],
    gradient: "from-blue-500/10 to-purple-500/10",
    popular: false,
  },
  {
    name: "Enterprise",
    description: "Bespoke solutions for high‑volume merchants",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Everything in Pro",
      "Custom Fraud Rulesets",
      "SLA performance guarantees",
      "Multi‑entity & Org management",
      "Dedicated engineering support",
      "Volume‑based processing rates",
      "Tailored implementation",
    ],
    limitations: [],
    // Unique Indigo-to-Emerald gradient for the Enterprise tier
    gradient: "from-indigo-500/20 via-blue-500/10 to-emerald-500/20",
    popular: false,
  },
];

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Secure, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Every plan includes our fraud‑first foundation: Network Tokens, Customer Vault, and Basic Fraud Prevention.
          </p>
          
          <Tabs value={billingCycle} onValueChange={(v) => setBillingCycle(v as "monthly" | "annual")} className="inline-flex">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">
                Annual
                <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                  Save 17%
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Updated grid for 4 columns on large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 bg-gradient-to-br ${plan.gradient} backdrop-blur-sm border-border/50 ${
                plan.popular ? "ring-2 ring-primary shadow-lg shadow-primary/20" : ""
              } ${plan.name === 'Enterprise' ? "border-emerald-500/30 shadow-lg shadow-emerald-500/5" : ""} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className={`text-2xl ${plan.name === 'Enterprise' ? "text-emerald-400" : ""}`}>
                  {plan.name}
                </CardTitle>
                <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                <div className="mt-4">
                  {typeof plan.monthlyPrice === "number" ? (
                    <>
                      <span className="text-4xl font-bold">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                      Custom
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3 min-h-[350px]">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className={`h-5 w-5 shrink-0 mt-0.5 ${plan.name === 'Enterprise' ? "text-emerald-500" : "text-primary"}`} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-start gap-2 opacity-50">
                    <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.name === 'Enterprise' ? "bg-emerald-600 hover:bg-emerald-700 text-white" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-center mb-8">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Features</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.name} className={`text-center py-4 px-4 font-semibold ${plan.name === 'Enterprise' ? "text-emerald-400" : ""}`}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">AI Fraud Detection (Kount)</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-muted-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-primary inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-primary inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-emerald-500 inline" /></td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">Support Level</td>
                  <td className="text-center py-4 px-4 text-sm">Email</td>
                  <td className="text-center py-4 px-4 text-sm">Priority</td>
                  <td className="text-center py-4 px-4 text-sm">Dedicated AM</td>
                  <td className="text-center py-4 px-4 text-sm font-semibold text-emerald-500">24/7 Engineering</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">Custom Processing Rates</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-muted-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-muted-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-muted-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-emerald-500 inline" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
