import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Card ID Verification (CVV)
 *
 * Card ID verification settings (CVV) help reduce fraud by requiring the
 * cardholder’s security code during a transaction. This page explains
 * what CVV is, how the verification process works, how to configure
 * settings for domestic and international transactions and what the
 * different result codes mean【152515723291701†L54-L60】【152515723291701†L96-L137】.
 */
const CardIDVerification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style>{`
            h1, h2, h3, h4, h5, h6, p, li, button, a, em, strong {
              font-family: 'Montserrat', sans-serif;
            }
          `}</style>
        </Head>
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Card ID Verification (CVV)
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The card verification value (CVV) is a three‑ or four‑digit code
              printed on cards. Requiring it for every transaction reduces
              fraudulent use of stolen card numbers.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                CVV is used to confirm that the purchaser has the physical card
                in hand. The code is not stored on the magnetic stripe or chip,
                so it cannot be captured during a data breach【152515723291701†L54-L60】.
              </p>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                During payment, the cardholder enters their CVV. The processor
                requests verification from the issuer, who returns a result
                code. You can decide which codes should cause a decline and
                which should be allowed【152515723291701†L70-L83】.
              </p>
            </section>

            {/* Settings */}
            <section id="settings" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Settings</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On the CVV settings page you can enable the rule for each
                processor and choose whether it applies to domestic, foreign or
                all cards. If you have multiple processors, configure each one
                separately【152515723291701†L118-L137】.
              </p>
              <details className="border border-border rounded p-4">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Best practices
                </summary>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>
                    Require CVV for every card‑not‑present transaction to deter
                    fraud.
                  </li>
                  <li>
                    Avoid marking CVV as optional, as fraudsters often omit
                    the code.
                  </li>
                  <li>
                    Use CVV together with AVS for even stronger verification.
                  </li>
                </ul>
              </details>
            </section>

            {/* Result Codes */}
            <section id="result-codes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Result Codes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The issuer returns a code indicating whether the CVV matched.
                Common codes include【152515723291701†L96-L114】:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>M:</strong> Match – proceed with the transaction.
                </li>
                <li>
                  <strong>N:</strong> No match – decline or review the sale.
                </li>
                <li>
                  <strong>P:</strong> CVV not processed – treat with caution.
                </li>
                <li>
                  <strong>S:</strong> CVV should be present but the cardholder
                  reported it was not – likely fraudulent.
                </li>
                <li>
                  <strong>U:</strong> Issuer unavailable or not certified –
                  decide based on risk appetite.
                </li>
              </ul>
            </section>

            {/* Additional Notes */}
            <section id="additional-notes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Additional Notes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A history section logs all changes to your CVV rules and who
                made them【152515723291701†L141-L150】. You can configure multiple
                rules per processor, and CVV is optional—if you choose not to
                reject transactions, the code will still be checked but will
                not block sales【152515723291701†L154-L165】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CardIDVerification;