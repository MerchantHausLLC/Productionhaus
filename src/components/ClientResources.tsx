import { TypewriterReveal } from "./TypewriterReveal";
import { ArrowRight } from "lucide-react";

export default function ClientResources() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-ubuntu text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
          Client Resources
        </h2>
        <p className="font-inter text-base text-muted-foreground max-w-2xl mx-auto font-light">
          Comprehensive tools and documentation for your success
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <a
          href="/TheMerchantPortal"
          className="group relative overflow-hidden border border-border p-8 transition-all duration-300 hover:border-foreground/30"
        >
          <div className="relative z-10">
            <TypewriterReveal
              as="h3"
              text="Merchant Portal"
              className="text-2xl font-bold mb-4 font-ubuntu text-foreground"
              speed={40}
              delay={400}
            />
            <p className="text-muted-foreground mb-6 leading-relaxed font-inter font-light text-sm">
              Access comprehensive guides for transaction reporting, account management,
              settings configuration, and partner user administration.
            </p>
            <div className="flex items-center gap-2 text-foreground font-inter font-medium text-sm tracking-wide uppercase group-hover:gap-4 transition-all">
              Explore Portal
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </a>

        <a
          href="/developer-guides"
          className="group relative overflow-hidden border border-border p-8 transition-all duration-300 hover:border-foreground/30"
        >
          <div className="relative z-10">
            <TypewriterReveal
              as="h3"
              text="Developer Guides"
              className="text-2xl font-bold mb-4 font-ubuntu text-foreground"
              speed={40}
              delay={600}
            />
            <p className="text-muted-foreground mb-6 leading-relaxed font-inter font-light text-sm">
              Complete integration documentation for building custom payment solutions.
              From Payment APIs to SDKs, webhooks, and fraud management tools.
            </p>
            <div className="flex items-center gap-2 text-foreground font-inter font-medium text-sm tracking-wide uppercase group-hover:gap-4 transition-all">
              View Documentation
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
