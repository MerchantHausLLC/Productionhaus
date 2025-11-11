import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Test Mode
 *
 * Test mode allows you to process transactions without sending them to
 * your processor. Use this feature when developing integrations or
 * training staff. This guide explains how test mode works, how to
 * enable it, how to clear test transactions and the limitations【622169487517722†L79-L118】.
 */
const TestMode = () => {
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
              Test Mode
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Enable test mode to simulate payments without affecting real
              funds. This is useful for development, testing and staff
              training.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                When test mode is on, transactions are marked as “TEST” and
                are never sent to your processor. They do not settle or
                incur fees and cannot be captured or refunded【622169487517722†L79-L118】.
              </p>
            </section>

            {/* Enabling Test Mode */}
            <section id="enabling-test-mode" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Enabling Test Mode
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To enable test mode:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Navigate to the test mode settings page.</li>
                <li>Turn on the test mode toggle and save.</li>
                <li>
                  The portal will display a banner indicating that you are in
                  test mode. All transactions processed while enabled will be
                  marked accordingly【622169487517722†L79-L118】.
                </li>
              </ol>
            </section>

            {/* Flushing Transactions */}
            <section id="flushing-transactions" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Flushing Transactions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Test transactions clutter your reports. Use the <em>Flush
                Test Transactions</em> button to clear all test entries. Only
                test transactions are removed; live data remains intact【622169487517722†L131-L150】.
              </p>
            </section>

            {/* Limitations */}
            <section id="limitations" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                While in test mode, you cannot capture, refund or void
                transactions. Test mode does not simulate declines from
                processors or third‑party services, so successful results
                should not be interpreted as an approval guarantee【622169487517722†L79-L118】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TestMode;