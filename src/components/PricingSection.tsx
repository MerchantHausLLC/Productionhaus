import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

// Updated Pricing tiers including the new high-visibility Enterprise plan.
const pricingPlans = [
  {
    name: "Foundation",
    description: "Essential fraud-first platform for growing organizations",
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
      "AI\u2011powered fraud scoring (Kount)",
      "Level III data optimization",
      "Shopify premium integration",
      "Priority support",
      "API access",
      "Dedicated account manager",
      "White\u2011label options",
    ],
    gradient: "from-cyan-500/10 to-blue-500/10",
    popular: false,
  },
  {
    name: "Growth",
    description: "Advanced fraud protection with AI decisioning",
    monthlyPrice: 99,
    annualPrice: 986,
    features: [
      "Everything in Foundation",
      "Kount AI Fraud Manager",
      "Enhanced rule\u2011based risk controls",
      "Priority support",
      "API access",
    ],
    limitations: [
      "Level III data optimization",
      "Shopify premium integration",
      "Dedicated account manager",
      "White\u2011label options",
    ],
    gradient: "from-orange-500/10 to-pink-500/10",
    popular: true,
  },
  {
    name: "Scale",
    description: "Full fraud suite + advanced data optimization",
    monthlyPrice: 149,
    annualPrice: 1484,
    features: [
      "Everything in Growth",
      "Level III Advantage (B2B optimization)",
      "Shopify Integration",
      "Custom analytics & reporting",
      "Dedicated account manager",
      "White\u2011label options",
    ],
    limitations: [],
    gradient: "from-blue-500/10 to-purple-500/10",
    popular: false,
  },
  {
    name: "Enterprise",
    description: "Bespoke solutions for high-volume organizations",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Everything in Scale",
      "Custom Fraud Rulesets",
      "SLA performance guarantees",
      "Multi\u2011entity & Org management",
      "Dedicated engineering support",
      "Volume\u2011based processing rates",
      "Tailored implementation",
    ],
    limitations: [],
    gradient: "from-indigo-500/20 via-blue-500/10 to-emerald-500/20",
    popular: false,
  },
];

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="py-24 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-ubuntu text-foreground">
            Transparent Pricing
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 font-inter font-light">
            Every plan includes our fraud-first foundation: Network Tokens, Customer Vault, and Basic Fraud Prevention. Custom volume pricing available.
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
              className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-background backdrop-blur-sm border-border ${
                plan.popular ? "ring-1 ring-foreground shadow-lg" : ""
              } animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">
                  {plan.name}
                </CardTitle>
                <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                <div className="mt-4">
                  {typeof plan.monthlyPrice === "number" ? (
                    <>
                      <span className="text-4xl font-bold">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : Math.round((plan.annualPrice as number) / 12)}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                      {billingCycle === "annual" && (
                        <div className="text-xs text-muted-foreground mt-1">
                          ${plan.annualPrice} billed annually
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-4xl font-bold">
                      Custom
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3 min-h-[350px]">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className={`h-5 w-5 shrink-0 mt-0.5 text-foreground`} />
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
                  className="w-full rounded-none font-inter"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <a href="/#contact">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </a>
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
                    <th key={plan.name} className="text-center py-4 px-4 font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">AI Fraud Detection (Kount)</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-muted-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-foreground inline" /></td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">Support Level</td>
                  <td className="text-center py-4 px-4 text-sm">Email</td>
                  <td className="text-center py-4 px-4 text-sm">Priority</td>
                  <td className="text-center py-4 px-4 text-sm">Dedicated AM</td>
                  <td className="text-center py-4 px-4 text-sm font-semibold">24/7 Engineering</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">Custom Processing Rates</td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-muted-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-muted-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><X className="h-5 w-5 text-muted-foreground inline" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-foreground inline" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
