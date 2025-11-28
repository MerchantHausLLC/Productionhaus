import { TypewriterReveal } from "./TypewriterReveal";
import { ArrowRight } from "lucide-react";

export default function ClientResources() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-ubuntu text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          Client Resources
        </h2>
        <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          Comprehensive tools and documentation for your success
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <a
          href="/TheMerchantPortal"
          className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          style={{
            border: "2px solid hsl(var(--cyber-teal))",
            background: "linear-gradient(135deg, rgba(0, 206, 219, 0.05), rgba(0, 206, 219, 0.02))"
          }}
        >
          <div className="relative z-10">
            <TypewriterReveal
              as="h3"
              text="Merchant Portal"
              className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50"
              speed={40}
              delay={400}
            />
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Access comprehensive guides for transaction reporting, account management, 
              settings configuration, and partner user administration. Everything you need 
              to manage your merchant operations efficiently.
            </p>
            <div className="flex items-center gap-2 text-cyber-teal font-semibold group-hover:gap-4 transition-all">
              Explore Portal
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        <a
          href="/developer-guides"
          className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          style={{
            border: "2px solid hsl(var(--crimson))",
            background: "linear-gradient(135deg, rgba(220, 20, 60, 0.05), rgba(220, 20, 60, 0.02))"
          }}
        >
          <div className="relative z-10">
            <TypewriterReveal
              as="h3"
              text="Developer Guides"
              className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50"
              speed={40}
              delay={600}
            />
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Complete integration documentation for building custom payment solutions. 
              From Payment APIs to SDKs, webhooks, and fraud management tools—build 
              with confidence using our comprehensive developer resources.
            </p>
            <div className="flex items-center gap-2 text-crimson font-semibold group-hover:gap-4 transition-all">
              View Documentation
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>
    </section>
  );
}
