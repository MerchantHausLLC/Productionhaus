import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import shieldLogo from "@/assets/shield.webp";

export default function PaymentsSurvey2025() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-light text-neutral-dark">
      <Header />

      <style>{`
        body { font-family: 'Inter', sans-serif; line-height: 1.7; }
        .post-container { max-width: 800px; }
        .section-heading { border-left: 5px solid #DC143C; padding-left: 1rem; transition: all 0.3s ease-in-out; }
        .callout { border-left: 4px solid #00CEDB; background-color: #edfcfd; padding: 1rem 1.5rem; border-radius: 8px; }
        .callout-warm { border-left: 4px solid #DC143C; background-color: #fff5f5; padding: 1rem 1.5rem; border-radius: 8px; }
        @keyframes reveal-title { 0% { max-height: 0; opacity: 0; } 100% { max-height: 100vh; opacity: 1; } }
        #main-title { max-height: 0; opacity: 0; overflow: hidden; animation: reveal-title 1.5s ease-out 0.5s forwards; }
        @keyframes pulse-tagline { 0% { transform: scale(1); opacity: 0.85; } 50% { transform: scale(1.01); opacity: 1; } 100% { transform: scale(1); opacity: 0.85; } }
        .tagline-pulse { animation: pulse-tagline 5s ease-in-out infinite; }
      `}</style>

      <main className="px-4 sm:px-8 py-4">
        <article className="post-container mx-auto">

          <header className="mb-12 pt-8 border-b-4 border-crimson flex items-center space-x-4">
            <img src={shieldLogo} alt="MerchantHaus Shield Logo" className="h-10 w-10 sm:h-12 sm:w-12" loading="lazy" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-dark font-ubuntu">
                MerchantHaus <span className="text-crimson">Blog</span>
              </h1>
              <p className="mt-2 mb-2 text-lg text-silver-grey tracking-wider tagline-pulse">plug in, play, process.</p>
            </div>
          </header>

          <h2 id="main-title" className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6">
            What the 2025 Payments Survey Reveals About How Customers Really Pay
          </h2>

          <p className="text-lg italic mb-8 text-neutral-dark/80 border-b pb-4">
            Payments aren't just a checkout step anymore. They shape conversion, basket size, and margins.
          </p>

          <div className="rounded-xl bg-gradient-to-br from-purple-700 to-indigo-600 text-white p-8 mb-10 shadow-xl">
            <p className="uppercase text-xs tracking-[0.4em] mb-3 opacity-80">Industry Insights · December 2025</p>
            <h3 className="text-2xl font-bold">Choice, Cost, and Checkout Reality</h3>
            <p className="mt-2 text-white/80">Source: BRC Payments Survey 2025</p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-6 section-heading text-crimson">The headline numbers</h3>
            <ul className="list-disc ml-6 mb-6 space-y-3 text-neutral-dark/90">
              <li><strong>84.2%</strong> of retail sales still go through cards</li>
              <li>Alternative payments grew to <strong>5.0%</strong> of sales value</li>
              <li>Card processing costs remain at <strong>£1.48bn</strong></li>
              <li>Cash still represents <strong>19.2%</strong> of transactions</li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">Debit up. Credit cooling.</h3>
            <p className="mb-4">
              Debit remains the dominant choice while credit card usage continues to decline as customers avoid high-interest
              borrowing and seek flexible alternatives.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">Alternative payments are no longer optional</h3>
            <p className="mb-4">
              BNPL and wallet-based payments are increasingly used for higher-value purchases, making them a strategic lever for
              increasing AOV.
            </p>
            <div className="callout">
              <p className="font-semibold mb-1">Merchant insight</p>
              <p>Payment mix is now a margin strategy — not a technical detail.</p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">Processing costs still bite</h3>
            <p className="mb-4">
              While volumes dipped slightly, long-term acceptance costs have more than doubled since 2019. Optimising payment
              routing and alternatives is now a competitive advantage.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">Cash isn't dead — just selective</h3>
            <p className="mb-4">
              Cash remains essential for certain customers and regions. Removing it outright can introduce unnecessary friction.
            </p>
            <div className="callout-warm">
              <p className="font-semibold mb-1">Key takeaway</p>
              <p>Understand your customer mix before making blanket decisions about payment method support.</p>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-silver-grey/50">
            <p className="text-sm text-silver-grey">
              Posted by the MerchantHaus Payments Team | <time dateTime="2025-12-01">December 2025</time>
            </p>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  );
}
