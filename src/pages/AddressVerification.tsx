import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Address Verification (AVS)
 *
 * This page describes the Address Verification Service, which helps reduce
 * fraud by checking that the billing address provided matches the card
 * issuer’s records. It summarises how AVS works, how to configure rules
 * for domestic and international transactions and explains optional
 * settings such as blocking specific response codes【764566919379929†L59-L67】【764566919379929†L94-L102】.
 */
const AddressVerification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Address Verification (AVS)
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              AVS compares the billing information provided by a customer
              against the records held by their card issuer. By enabling AVS
              checks you can automatically reject transactions with mismatched
              addresses, helping to prevent fraudulent purchases.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                When a transaction is submitted, the address verification
                service validates the street number and postcode (or ZIP code)
                with the card issuer. The issuer responds with a code
                indicating whether the address matches their records【764566919379929†L59-L67】.
              </p>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                AVS returns result codes such as <em>Y</em> (match), <em>N</em>
                (no match) and others. The gateway uses these codes to
                determine whether to accept or reject the transaction. You can
                configure your own rules for domestic and international cards
                based on these codes【764566919379929†L79-L91】.
              </p>
            </section>

            {/* Configuring Rules */}
            <section id="configuring-rules" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Configuring Rules
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To enable AVS, navigate to the AVS settings page and toggle
                the service on. You’ll see separate rule sets for domestic and
                international transactions. Choose which response codes should
                cause a decline. If you work with multiple processors, you can
                create different rule sets per processor【764566919379929†L94-L102】【764566919379929†L129-L147】.
              </p>
            </section>

            {/* Additional Options */}
            <section id="additional-options" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Additional Options
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beyond the basic match/no match rules, AVS allows you to block
                specific conditions such as partial matches or unsupported
                services. You can also require AVS only on the first
                transaction for recurring payments【764566919379929†L154-L171】.
              </p>
              <details className="border border-border rounded p-4">
                <summary className="cursor-pointer font-semibold text-foreground">
                  View common AVS codes
                </summary>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                  <li>
                    <strong>Y:</strong> Street and ZIP code match – typically
                    approve.
                  </li>
                  <li>
                    <strong>N:</strong> Neither matches – reject or review.
                  </li>
                  <li>
                    <strong>A:</strong> Street matches but ZIP does not – may be
                    risky.
                  </li>
                  <li>
                    <strong>U:</strong> Address information unavailable – decide
                    based on your risk tolerance.
                  </li>
                </ul>
              </details>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddressVerification;