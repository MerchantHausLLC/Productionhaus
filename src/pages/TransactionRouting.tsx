import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Transaction Routing
 *
 * Transaction routing allows you to distribute transaction volume across
 * multiple processors. By assigning percentages to each processor, you
 * can load balance your payment traffic. This guide explains how to set
 * up routing, handle overflow and provides important considerations【150541236870658†L65-L107】.
 */
const TransactionRouting = () => {
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
              Transaction Routing
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use transaction routing to split your payment volume across
              multiple processors. This can help you optimise costs and
              maintain redundancy.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Routing allows you to assign a percentage of your overall
                transaction volume to each configured processor. The
                percentages reset each calendar month and do not split
                individual transactions; instead, the system counts
                transactions and routes them according to the allocation【150541236870658†L65-L107】.
              </p>
            </section>

            {/* Setting Percentages */}
            <section id="setting-percentages" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Setting Percentages
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To configure routing:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  Open the transaction routing settings page.
                </li>
                <li>
                  Enter a percentage for each processor. The total must add
                  up to 100%. A default processor receives any remaining
                  volume not specifically allocated【150541236870658†L109-L146】.
                </li>
                <li>
                  Save the changes. The routing table resets on the first of
                  each month. Percentages do not roll over, so unused
                  allocation is lost【150541236870658†L65-L107】.
                </li>
              </ol>
            </section>

            {/* Overflow & Default */}
            <section id="overflow-default" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Overflow &amp; Default
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If a processor reaches its assigned percentage before the end
                of the month, transactions will automatically flow to the
                default processor. Routing does not cascade retries—you can’t
                attempt a second processor if the first declines【150541236870658†L109-L146】.
              </p>
            </section>

            {/* Additional Notes */}
            <section id="additional-notes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Additional Notes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Routing is applied per transaction and does not influence
                batch settlement. Use reporting tools to monitor approval
                rates across processors and adjust percentages accordingly. If
                a processor stops working, set its percentage to 0% and
                allocate all volume to an alternative processor until the
                issue is resolved【150541236870658†L65-L107】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TransactionRouting;