import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { PageSEO } from "@/components/PageSEO";
import { Link } from "react-router-dom";

// ─── Data ────────────────────────────────────────────────────────────────────

const offerings = [
  {
    label: "Fast Onboarding",
    body: "Start accepting payments in hours, not weeks. Simple setup, zero hidden delays, and a dedicated rep guiding you every step.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: "Enterprise Security",
    body: "PCI-compliant, end-to-end encrypted, and built to protect every transaction from authorization to settlement.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Human Support",
    body: "Real people. Real help. No bots, no ticket queues, no runaround — just a direct line to someone who knows your account.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Global Reach",
    body: "Accept payments from anywhere in the world, in multiple currencies, with seamless gateway integration across all your channels.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Fraud Prevention",
    body: "Advanced risk scoring, velocity checks, and real-time transaction monitoring — stop fraud before it ever reaches your bottom line.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "Revenue Optimization",
    body: "Smart analytics, decline recovery, and interchange optimization — tools that actively work to grow your revenue and cut processing costs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

const approach = [
  {
    tag: "Simple First",
    body: "We strip away unnecessary complexity so you can focus on scaling your operations — not managing your payment stack.",
  },
  {
    tag: "Secure Always",
    body: "Every transaction is protected with bank-grade encryption and the compliance standards your industry demands.",
  },
  {
    tag: "Scale Anywhere",
    body: "From mid-market to enterprise, our platform grows with you. No volume caps, no surprise repricing, no renegotiations.",
  },
];

const reasons = [
  {
    label: "Powered by NMI",
    body: "One of the most trusted names in global payments infrastructure, trusted by thousands of organizations worldwide.",
  },
  {
    label: "Transparent Pricing",
    body: "No hidden fees, no surprise line items. Just honest, consistent rates from day one.",
  },
  {
    label: "Built for Growth",
    body: "Whether you process 10 or 10,000 transactions a day, the infrastructure scales — and the rate stays flat.",
  },
  {
    label: "Developer-Friendly",
    body: "Clean APIs, comprehensive docs, and sandbox environments built for fast, clean integrations.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageSEO
        title="About"
        description="MerchantHaus empowers mid-market and enterprise organizations with modern payment infrastructure, transparent pricing, and dedicated U.S.-based support."
        path="/about"
      />
      <Header />
      <main className="bg-[#0C1017] text-[#F0EBE3] min-h-screen font-inter">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative px-6 md:px-16 lg:px-24 pt-24 pb-20 border-b border-white/[0.07] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about-hero.webp')" }}
          />
          <div className="absolute inset-0 bg-[#0C1017]/75" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-6 h-px bg-white/20" />
              <span className="text-[11px] tracking-[0.12em] uppercase text-white/40 font-light">
                About MerchantHaus
              </span>
            </div>

            <h1 className="text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.06] font-normal max-w-3xl mb-7 font-ubuntu">
              A modern approach to payments — built for organizations that{" "}
              <em className="italic text-white/35">never stop moving.</em>
            </h1>

            <p className="text-[1.05rem] leading-relaxed text-white/50 max-w-xl font-light">
              We believe technology should make payments invisible — reliable, secure,
              and beautifully simple to use. Through our partnership with{" "}
              <span className="text-white/80 font-medium">NMI</span>, we deliver
              everything your organization needs to accept cards, ACH, digital wallets,
              and more, without the friction.
            </p>
          </div>
        </section>

        {/* ── What We Offer ─────────────────────────────────── */}
        <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-white/[0.07]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="md:pt-2">
              <p className="text-[5rem] leading-none font-normal text-white/[0.06] select-none mb-3 font-ubuntu">
                01
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-white/30 font-light">
                What we offer
              </p>
            </div>

            <div>
              <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.2] font-normal mb-4 font-ubuntu">
                Everything you need to accept, manage, and scale payments.
              </h2>
              <p className="text-[0.95rem] leading-[1.85] text-white/45 font-light mb-10 max-w-lg">
                Whether you're onboarding a new division or scaling enterprise-wide
                operations, we make it fast, secure, and fully compliant.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]">
                {offerings.map((o, i) => (
                  <div
                    key={i}
                    className="bg-[#0C1017] p-6 hover:bg-white/[0.025] transition-colors duration-300 group"
                  >
                    <span className="block text-white/30 mb-5 group-hover:text-white/55 transition-colors duration-300">
                      {o.icon}
                    </span>
                    <p className="text-[0.88rem] font-medium mb-2.5 tracking-wide">
                      {o.label}
                    </p>
                    <p className="text-[0.8rem] leading-relaxed text-white/40 font-light">
                      {o.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Approach ──────────────────────────────────── */}
        <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-white/[0.07]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="md:pt-2">
              <p className="text-[5rem] leading-none font-normal text-white/[0.06] select-none mb-3 font-ubuntu">
                02
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-white/30 font-light">
                Our approach
              </p>
            </div>

            <div>
              <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.2] font-normal mb-10 font-ubuntu">
                Three principles. Zero compromise.
              </h2>

              <div className="border-t border-white/[0.07]">
                {approach.map((a, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[140px_1fr] gap-8 py-7 border-b border-white/[0.07] group cursor-default"
                  >
                    <p className="text-[0.88rem] font-normal text-white/60 pt-0.5 group-hover:text-white/85 transition-colors duration-200 font-ubuntu">
                      {a.tag}.
                    </p>
                    <p className="text-[0.88rem] leading-[1.8] text-white/45 font-light">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why MerchantHaus ──────────────────────────────── */}
        <section className="px-6 md:px-16 lg:px-24 py-20 border-b border-white/[0.07]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="md:pt-2">
              <p className="text-[5rem] leading-none font-normal text-white/[0.06] select-none mb-3 font-ubuntu">
                03
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-white/30 font-light">
                Why choose us
              </p>
            </div>

            <div>
              <h2 className="text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.2] font-normal mb-10 font-ubuntu">
                The infrastructure enterprises trust. The service they rarely get.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {reasons.map((r, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-[11px] tracking-[0.08em] text-white/20 font-light mt-0.5 shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[0.88rem] font-medium mb-1.5">{r.label}</p>
                      <p className="text-[0.82rem] leading-[1.75] text-white/40 font-light">
                        {r.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="px-6 md:px-16 lg:px-24 py-28">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.12em] uppercase text-white/30 font-light mb-6">
              Get started
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.12] mb-5 font-ubuntu">
              Ready to take the friction out of payments?
            </h2>
            <p className="text-[0.95rem] text-white/40 font-light leading-relaxed mb-10 max-w-md mx-auto">
              Join the organizations that trust MerchantHaus to power their payments.
              Fast deployment, enterprise-grade security, and support that actually delivers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-started"
                className="px-8 py-3.5 bg-white text-[#0C1017] text-[0.82rem] tracking-[0.08em] uppercase font-semibold hover:bg-white/90 transition-colors duration-200 rounded-sm"
              >
                Apply Now
              </Link>
              <a
                href="tel:15056006042"
                className="px-8 py-3.5 border border-white/20 text-[0.82rem] tracking-[0.08em] uppercase font-medium hover:bg-white/[0.04] transition-colors duration-200 rounded-sm text-white/70"
              >
                1-505-600-6042
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
