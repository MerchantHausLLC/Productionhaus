import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function PaymentsSurvey2025() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-light text-neutral-dark">
      <Header />

      <style>{`
        body { font-family: 'Inter', sans-serif; line-height: 1.7; }
        .post-container { max-width: 768px; }
        .accent-card { box-shadow: 0 20px 45px rgba(59, 10, 94, 0.25); }
      `}</style>

      <main className="px-6 sm:px-10 py-10">
        <article className="post-container mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-neutral-900">
            What the 2025 Payments Survey Reveals About How Customers Really Pay
          </h1>

          <p className="text-lg italic mb-6 text-neutral-dark/80">
            Payments aren’t just a checkout step anymore. They shape conversion, basket size, and margins.
          </p>

          <div className="rounded-xl bg-gradient-to-br from-purple-700 to-indigo-600 text-white p-8 mb-10 accent-card">
            <h2 className="text-2xl font-bold">Choice, Cost, and Checkout Reality</h2>
          </div>

          <h2 className="text-2xl font-bold mb-3">The headline numbers</h2>
          <ul className="list-disc ml-6 mb-8 space-y-2">
            <li>
              <strong>84.2%</strong> of retail sales still go through cards
            </li>
            <li>
              Alternative payments grew to <strong>5.0%</strong> of sales value
            </li>
            <li>
              Card processing costs remain at <strong>£1.48bn</strong>
            </li>
            <li>
              Cash still represents <strong>19.2%</strong> of transactions
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-3">Debit up. Credit cooling.</h2>
          <p className="mb-6">
            Debit remains the dominant choice while credit card usage continues to decline as customers avoid high-interest
            borrowing and seek flexible alternatives.
          </p>

          <h2 className="text-2xl font-bold mb-3">Alternative payments are no longer optional</h2>
          <p className="mb-6">
            BNPL and wallet-based payments are increasingly used for higher-value purchases, making them a strategic lever for
            increasing AOV.
          </p>

          <div className="border-l-4 border-cyan-400 bg-cyan-50 p-5 rounded-lg mb-8">
            <p className="font-medium">
              Merchant insight: payment mix is now a margin strategy—not a technical detail.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-3">Processing costs still bite</h2>
          <p className="mb-6">
            While volumes dipped slightly, long-term acceptance costs have more than doubled since 2019. Optimising payment
            routing and alternatives is now a competitive advantage.
          </p>

          <h2 className="text-2xl font-bold mb-3">Cash isn’t dead—just selective</h2>
          <p className="mb-10">
            Cash remains essential for certain customers and regions. Removing it outright can introduce unnecessary friction.
          </p>

          <hr className="mb-6" />

          <p className="text-sm text-neutral-dark/60">
            MerchantHaus Blog · December 2025 · Source: BRC Payments Survey 2025
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
