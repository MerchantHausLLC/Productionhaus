import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Blind Credits
 *
 * A blind credit is a refund that isn’t associated with a previous sale.
 * Because funds are returned without a matching transaction, blind
 * credits carry higher risk. This guide explains what blind credits are,
 * the prerequisites for using them, the associated risks and how to
 * enable the feature if necessary【598181698523452†L55-L61】【598181698523452†L104-L135】.
 */
const BlindCredits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1 docs-typography">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blind Credits
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Blind credits should be used sparingly. Because they are not tied
              to an original sale, they open the door to fraud or misuse. Read
              this guide carefully before requesting access to blind credit
              functionality.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A blind credit is a standalone refund. Unlike a standard refund
                (which references a prior transaction), blind credits send
                funds directly to the cardholder without an original sale in
                the system【598181698523452†L55-L61】. Because of this, blind credits
                cannot be voided or reversed once processed.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                To issue blind credits, the “Virtual Terminal Access” permission
                must include the ability to create new credits. Additionally,
                blind credits must be enabled by your service provider; the
                option is not available when logged in as a merchant via the
                partner portal【598181698523452†L65-L81】.
              </p>
            </section>

            {/* Risks */}
            <section id="risks" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Risks</h2>
              <p className="text-muted-foreground leading-relaxed">
                Blind credits are vulnerable to abuse. Without a corresponding
                sale, there is little protection against issuing refunds to
                stolen cards or fraudsters. Service providers require a risk
                review before enabling blind credits, and many prohibit their
                use altogether【598181698523452†L85-L99】.
              </p>
            </section>

            {/* Enabling Blind Credits */}
            <section id="enabling" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Enabling Blind Credits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you still need to issue blind credits, follow these steps in
                your provider’s portal:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  In the partner portal, locate the merchant account and open
                  its advanced features settings【598181698523452†L104-L122】.
                </li>
                <li>
                  Enable either “Allow blind credit card credits” or “Allow
                  blind e‑check credits” depending on your needs.
                </li>
                <li>
                  Save your changes. Your service provider will contact you by
                  phone to confirm authorisation before enabling the feature【598181698523452†L104-L122】.
                </li>
              </ol>
              <p className="text-muted-foreground leading-relaxed">
                Once enabled, certain actions—such as updating the merchant’s
                email address or accessing security keys—may be restricted to
                protect against fraud【598181698523452†L127-L135】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlindCredits;