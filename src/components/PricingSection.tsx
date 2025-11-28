import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    monthlyPrice: 29,
    annualPrice: 290,
    features: [
      "Up to 1,000 transactions/month",
      "Basic payment processing",
      "Email support",
      "Standard dashboard",
      "2 team members",
    ],
    limitations: [
      "Advanced analytics",
      "Custom integrations",
      "Priority support",
      "White-label options",
    ],
    gradient: "from-cyan-500/10 to-blue-500/10",
    popular: false,
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    monthlyPrice: 99,
    annualPrice: 990,
    features: [
      "Up to 10,000 transactions/month",
      "Advanced payment processing",
      "Priority email & chat support",
      "Advanced analytics dashboard",
      "10 team members",
      "Custom integrations",
      "API access",
    ],
    limitations: [
      "White-label options",
      "Dedicated account manager",
    ],
    gradient: "from-orange-500/10 to-pink-500/10",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    monthlyPrice: 299,
    annualPrice: 2990,
    features: [
      "Unlimited transactions",
      "Enterprise payment processing",
      "24/7 dedicated support",
      "Custom analytics & reporting",
      "Unlimited team members",
      "Custom integrations",
      "Full API access",
      "White-label options",
      "Dedicated account manager",
      "SLA guarantees",
    ],
    limitations: [],
    gradient: "from-blue-500/10 to-purple-500/10",
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your business needs. All plans include our core features.
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 bg-gradient-to-br ${plan.gradient} backdrop-blur-sm border-border/50 ${
                plan.popular ? "ring-2 ring-primary shadow-lg shadow-primary/20" : ""
              } animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-center mb-8">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
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
                  <td className="py-4 px-4">Monthly Transactions</td>
                  <td className="text-center py-4 px-4">1,000</td>
                  <td className="text-center py-4 px-4">10,000</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">Team Members</td>
                  <td className="text-center py-4 px-4">2</td>
                  <td className="text-center py-4 px-4">10</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">Analytics Dashboard</td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-muted-foreground inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary inline" />
                  </td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">API Access</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-muted-foreground inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary inline" />
                  </td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">Custom Integrations</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-muted-foreground inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary inline" />
                  </td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">White-label Options</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-muted-foreground inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-muted-foreground inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary inline" />
                  </td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">Support Level</td>
                  <td className="text-center py-4 px-4">Email</td>
                  <td className="text-center py-4 px-4">Priority</td>
                  <td className="text-center py-4 px-4">24/7 Dedicated</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-4">SLA Guarantees</td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-muted-foreground inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <X className="h-5 w-5 text-muted-foreground inline" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="h-5 w-5 text-primary inline" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
