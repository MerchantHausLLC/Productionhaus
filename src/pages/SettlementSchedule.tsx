import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Settlement Schedule
 *
 * For terminal capture processors, merchants can choose what time of day
 * their transactions settle. This page explains the difference between
 * terminal and host capture, how to adjust your settlement time and
 * important notes about processing cycles.
 */
const SettlementSchedule = () => {
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
              Settlement Schedule
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Adjust the time of day your terminal‑captured transactions are
              submitted for settlement. This ensures your funding occurs at
              a time convenient for your operations.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Terminal capture means that authorisations are stored on the
                gateway until you settle. You can control when settlement
                occurs by setting a cut‑off time. Host capture processors
                settle automatically at the processor’s discretion and cannot
                be configured.
              </p>
            </section>

            {/* Capture Types */}
            <section id="capture-types" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Capture Types
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Terminal capture</strong> stores authorisations on the
                gateway and requires you to specify when to send them for
                settlement. <strong>Host capture</strong> routes
                authorisations directly to the processor, which batches and
                settles them automatically.
              </p>
            </section>

            {/* Setting Your Schedule */}
            <section id="setting-schedule" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Setting Your Schedule
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To adjust your settlement time:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  Go to the settlement schedule page and select the processor
                  you want to configure.
                </li>
                <li>
                  Choose a settlement time from the drop‑down list. The
                  available times may vary by processor.
                </li>
                <li>
                  Save your changes. The new schedule will take effect on
                  the next processing day. Changes made after the cut‑off
                  may not apply until the following day.
                </li>
              </ol>
            </section>

            {/* Additional Notes */}
            <section id="additional-notes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Additional Notes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Settlement time affects funding but not transaction approval.
                If you process high volumes, consider scheduling settlement
                outside of business hours to avoid delays in your daily
                operations. Note that same‑day funding options may have
                different cut‑off requirements.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SettlementSchedule;