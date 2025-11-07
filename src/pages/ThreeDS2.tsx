import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import shieldLogo from "@/assets/shield.webp";

const ThreeDS2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-neutral-light text-neutral-dark p-4 sm:p-8">
        <style>{`
          .post-container { max-width: 820px; }
          .section-heading { border-left: 5px solid #00CEDB; padding-left: 1rem; transition: all 0.3s ease-in-out; }
          .section-heading:hover { transform: translateX(6px); }
          .callout { border-left: 4px solid #DC143C; background-color: rgba(220, 20, 60, 0.08); padding: 1.25rem 1.75rem; border-radius: 10px; }
          .quick-list li::marker { color: #DC143C; }
          .tagline-pulse { animation: pulse-tagline 6s ease-in-out infinite; }
          @keyframes pulse-tagline { 0% { transform: scale(1); opacity: 0.75; } 50% { transform: scale(1.01); opacity: 1; } 100% { transform: scale(1); opacity: 0.75; } }
          @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(18px); } 100% { opacity: 1; transform: translateY(0); } }
          .intro { animation: fade-in-up 0.7s ease forwards; }
          .stat-pill { background: linear-gradient(135deg, #0B8793, #360033); color: white; }
          .stat-pill span { display: block; font-weight: 700; }
          .gradient-banner { background: linear-gradient(135deg, rgba(54, 0, 51, 0.85), rgba(11, 135, 147, 0.85)); }
        `}</style>

        <div className="post-container mx-auto">
          <header className="mb-12 pt-8 border-b-4 border-crimson flex items-center space-x-4">
            <img src={shieldLogo} alt="MerchantHaus Shield Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-dark font-ubuntu">
                MerchantHaus <span className="text-crimson">Blog</span>
              </h1>
              <p className="mt-2 mb-2 text-lg text-silver-grey tracking-wider tagline-pulse">plug in, play, process.</p>
            </div>
          </header>

          <div className="gradient-banner rounded-2xl p-8 text-white shadow-xl mb-10">
            <p className="uppercase text-xs tracking-[0.4em] mb-3">Authentication Futures</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              3D Secure 2: Security Without the Speed Bumps
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              Fraud is getting smarter. Your checkout should too. 3D Secure 2 (3DS2) lets you protect your customers and your bottom line — without slowing down sales.
            </p>
          </div>

          <section className="intro text-neutral-dark/90 space-y-4 text-lg leading-relaxed mb-10">
            <p>
              The newest version of 3D Secure is designed for the way modern shoppers buy — fast, mobile-first, and always-on. Instead of forcing every purchase through a clunky redirect, 3DS2 works behind the scenes to let genuine customers glide through checkout while isolating the outliers.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="stat-pill rounded-xl px-4 py-5 text-center shadow-lg">
                <span>80–95%</span>
                <small className="uppercase tracking-widest text-xs opacity-90">Frictionless approvals</small>
              </div>
              <div className="stat-pill rounded-xl px-4 py-5 text-center shadow-lg">
                <span>Instant</span>
                <small className="uppercase tracking-widest text-xs opacity-90">Risk decisions</small>
              </div>
              <div className="stat-pill rounded-xl px-4 py-5 text-center shadow-lg">
                <span>Smart</span>
                <small className="uppercase tracking-widest text-xs opacity-90">Step-up challenges</small>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4 section-heading text-neutral-dark">What’s Different About 3DS2?</h3>
            <div className="space-y-6 text-neutral-dark/90">
              <div className="callout shadow-md">
                <h4 className="font-semibold text-crimson mb-2">Frictionless for Real Buyers</h4>
                <p>Most shoppers never see an extra prompt or detour. With richer device and behavioral signals flowing silently to issuers, the experience stays invisible for legitimate customers.</p>
              </div>
              <div className="callout shadow-md">
                <h4 className="font-semibold text-crimson mb-2">Instant Decisions</h4>
                <p>3DS2 analyzes order history, device reputation, and risk profiles in milliseconds. Clean transactions are cleared instantly, and only the uncertain ones get flagged.</p>
              </div>
              <div className="callout shadow-md">
                <h4 className="font-semibold text-crimson mb-2">Smart Challenges</h4>
                <p>When authentication is needed, customers respond with a quick biometric, one-time passcode, or issuer app confirmation. The flow feels native on mobile, desktop, and in-app experiences.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4 section-heading text-neutral-dark">Why Should Merchants Care?</h3>
            <div className="grid gap-6 sm:grid-cols-2 text-neutral-dark/90">
              <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-silver-grey/30">
                <h4 className="font-semibold text-crimson mb-3">Fewer Chargebacks, Less Fraud</h4>
                <p>When a 3DS2 transaction is approved, liability often shifts to the issuing bank. That means fewer disputes draining revenue and support hours.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-silver-grey/30">
                <h4 className="font-semibold text-crimson mb-3">Checkout Conversion Intact</h4>
                <p>Customers finish the journey without roadblocks. Friction is reserved for the transactions that genuinely need extra scrutiny.</p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-silver-grey/30">
                <h4 className="font-semibold text-crimson mb-3">Confidence You Can Market</h4>
                <p>Transparent security builds trust. Shoppers know you’re protecting them, but they don’t feel hassled.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4 section-heading text-neutral-dark">What Should You Do Next?</h3>
            <div className="space-y-4 text-neutral-dark/90">
              <p>3DS2 thrives on data and collaboration. Set your teams up to win by focusing on enablement:</p>
              <ul className="list-disc ml-6 space-y-3 quick-list">
                <li>Send the richest payload you can: device fingerprints, shipping details, account tenure, and communication history.</li>
                <li>Keep plugins, SDKs, and payment integrations updated so authentication flows remain seamless.</li>
                <li>Coach customer support teams to explain challenges — they’re a protection step, not a decline.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-4 section-heading text-neutral-dark">Avoid These Common Pitfalls</h3>
            <div className="grid gap-5 sm:grid-cols-3 text-neutral-dark/90">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-silver-grey/40">
                <h4 className="font-semibold text-crimson mb-2">Forced Challenges</h4>
                <p>Let the risk engine decide when to challenge. Forcing every transaction adds unnecessary drop-off.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-silver-grey/40">
                <h4 className="font-semibold text-crimson mb-2">Ignoring Analytics</h4>
                <p>Watch challenge rates, approvals, and abandonment numbers to catch new friction points quickly.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-silver-grey/40">
                <h4 className="font-semibold text-crimson mb-2">No Support Playbook</h4>
                <p>Give frontline teams scripts for explaining 3DS2. Customers should feel protected, not rejected.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4 section-heading text-neutral-dark">Quick Summary</h3>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-silver-grey/30">
              <p className="text-neutral-dark/90 mb-4">
                3DS2 helps you reduce fraud, lower chargebacks, and boost checkout conversion — all with less friction for your best customers.
              </p>
              <p className="text-neutral-dark/90">
                Need help implementing the right flow for your ecommerce platform or want a readiness checklist? <strong>Reach out to the MerchantHaus team — we’re here to help.</strong>
              </p>
            </div>
          </section>

          <footer className="mt-16 pt-8 border-t border-silver-grey/50">
            <p className="text-sm text-silver-grey">
              Posted by the MerchantHaus Security Team | <time dateTime="2025-11-18">November 18, 2025</time>
            </p>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThreeDS2;
