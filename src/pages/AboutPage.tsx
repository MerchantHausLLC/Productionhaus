import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Shield, Zap, Users, Lock, TrendingUp, Globe } from "lucide-react";
import { TypewriterParagraph } from "@/components/TypewriterParagraph";
import { useParallax } from "@/hooks/use-parallax";

const AboutPage = () => {
  const crimsonAuraRef = useParallax<HTMLDivElement>({ speed: 0.06 });
  const tealAuraRef = useParallax<HTMLDivElement>({ speed: 0.1 });
  const purpleAuraRef = useParallax<HTMLDivElement>({ speed: 0.14 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-neutral-light text-neutral-dark p-8 sm:p-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            ref={crimsonAuraRef}
            className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-crimson/15 blur-3xl"
          />
          <div
            ref={tealAuraRef}
            className="absolute -bottom-44 -right-24 h-96 w-96 rounded-full bg-cyber-teal/20 blur-3xl"
          />
          <div
            ref={purpleAuraRef}
            className="absolute top-1/4 right-1/3 h-72 w-72 rounded-full bg-purple-light/20 blur-3xl"
          />
        </div>
        <style>{`
          .section-card {
            background: #fff;
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.03);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }
          .section-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 25px 40px -8px rgba(0,0,0,0.15);
          }
        `}</style>

        {/* ABOUT MERCHANT HAUS */}
        <section className="max-w-5xl mx-auto mb-16">
          <h1 className="text-5xl sm:text-6xl font-ubuntu font-extrabold text-neutral-dark mb-6">
            About <span className="text-crimson">Merchant Haus</span>
          </h1>
          <p className="text-lg text-silver-grey max-w-3xl">
            A modern approach to payments — helping businesses accept, manage, and grow payments in a world that never stops moving.
          </p>
        </section>

        {/* CORE DESCRIPTION */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="section-card p-8">
            <p className="text-lg leading-relaxed mb-6">
              We believe technology should make payments invisible—reliable, secure, and beautifully simple to use.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Through our partnership with <span className="font-semibold text-cyber-teal">NMI</span>, one of the most trusted names in global payments infrastructure, we deliver everything a business needs to accept cards, ACH, digital wallets, and more—without the friction.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're launching a new storefront or scaling an enterprise operation, we're here to make it happen fast, secure, and fully compliant.
            </p>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-ubuntu font-bold text-neutral-dark mb-8">
            What We <span className="text-crimson">Offer</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="section-card p-6">
              <Zap className="w-10 h-10 text-crimson mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Fast Onboarding</h3>
              <p className="text-neutral-dark/80">
                Start accepting payments in hours, not weeks. Simple setup, no hidden delays.
              </p>
            </div>

            <div className="section-card p-6">
              <Shield className="w-10 h-10 text-cyber-teal mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Enterprise Security</h3>
              <p className="text-neutral-dark/80">
                PCI-compliant, encrypted, and built to protect every transaction from start to finish.
              </p>
            </div>

            <div className="section-card p-6">
              <Users className="w-10 h-10 text-purple-light mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Human Support</h3>
              <p className="text-neutral-dark/80">
                Real people, real help. We're here when you need us—no bots, no runaround.
              </p>
            </div>

            <div className="section-card p-6">
              <Globe className="w-10 h-10 text-crimson mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Global Reach</h3>
              <p className="text-neutral-dark/80">
                Accept payments from anywhere, in multiple currencies, with seamless integration.
              </p>
            </div>

            <div className="section-card p-6">
              <Lock className="w-10 h-10 text-cyber-teal mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Fraud Prevention</h3>
              <p className="text-neutral-dark/80">
                Advanced tools to detect and prevent fraud before it impacts your business.
              </p>
            </div>

            <div className="section-card p-6">
              <TrendingUp className="w-10 h-10 text-purple-light mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-3">Revenue Optimization</h3>
              <p className="text-neutral-dark/80">
                Smart analytics and insights to help you grow revenue and reduce costs.
              </p>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="section-card relative overflow-hidden p-8 bg-gradient-to-br from-purple-dark to-purple-light">
            <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="text-3xl font-ubuntu font-bold mb-6 text-neutral-dark">Our Approach</h2>
              <div className="space-y-4 text-lg">
                <TypewriterParagraph
                  emphasis="Simple First."
                  text="We strip away unnecessary complexity so you can focus on growing your business."
                />
                <TypewriterParagraph
                  emphasis="Secure Always."
                  text="Every transaction is protected with bank-grade encryption and compliance standards."
                  startDelay={1200}
                />
                <TypewriterParagraph
                  emphasis="Scale Anywhere."
                  text="From startup to enterprise, our platform grows with you—no limits, no surprises."
                  startDelay={2400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-ubuntu font-bold text-neutral-dark mb-8">
            Why Choose <span className="text-crimson">MerchantHaus</span>
          </h2>
          <div className="section-card p-8">
            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <span className="text-crimson font-bold mr-3 text-2xl">•</span>
                <span><strong>Powered by NMI:</strong> One of the most reliable payment platforms in the world, trusted by thousands of businesses globally.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyber-teal font-bold mr-3 text-2xl">•</span>
                <span><strong>Transparent Pricing:</strong> No hidden fees, no surprises. Just honest, straightforward rates.</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-light font-bold mr-3 text-2xl">•</span>
                <span><strong>Built for Growth:</strong> Whether you process 10 or 10,000 transactions a day, we scale with you.</span>
              </li>
              <li className="flex items-start">
                <span className="text-crimson font-bold mr-3 text-2xl">•</span>
                <span><strong>Developer-Friendly:</strong> Clean APIs, comprehensive docs, and sandbox environments for seamless integration.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="max-w-5xl mx-auto text-center">
          <div className="section-card p-12 text-neutral-dark">
            <h2 className="text-4xl font-ubuntu font-bold mb-6 text-neutral-dark">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-neutral-dark/80">
              Join the businesses that trust MerchantHaus to power their payments. Fast setup, enterprise-grade security, and support that actually helps.
            </p>
            <a
              href="https://ops-terminal.merchant.haus/merchant-apply"
              className="inline-block bg-crimson hover:bg-crimson/90 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              Apply Now
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
