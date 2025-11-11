import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Subscription Reports
 *
 * Subscription reports let you search and analyse recurring payment
 * schedules. This page explains the prerequisites, available search
 * filters, how to pause subscriptions and how to export your results【549718991979132†L50-L118】【549718991979132†L124-L149】.
 */
const SubscriptionReports = () => {
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
              Subscription Reports
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Generate reports on your recurring subscriptions to see which
              schedules are active, completed or past due. Use filters to
              search by customer, plan, amount and more.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Subscription reports provide insight into your recurring billing
                activity. You can search by subscription ID, order ID, customer
                name, account number, plan, amount range and start/end dates【549718991979132†L50-L76】【549718991979132†L82-L118】.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                You need the “Access Recurring/Installment” permission to run
                subscription reports. At least one active recurring plan must
                exist on your account【549718991979132†L50-L76】.
              </p>
            </section>

            {/* Search Filters */}
            <section id="search-filters" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Search Filters
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The search form allows you to filter subscriptions by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Subscription ID, order ID or customer name</li>
                <li>Payment account number or company name</li>
                <li>
                  Plan name or ID, amount and start/end date range【549718991979132†L82-L118】
                </li>
                <li>
                  Status (active, completed, deleted) and whether to include
                  expired cards【549718991979132†L82-L118】
                </li>
              </ul>
            </section>

            {/* Pausing Subscriptions */}
            <section id="pausing-subscriptions" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Pausing Subscriptions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You can pause individual schedules or all schedules at once.
                Select a schedule in the results and click <em>Pause</em> to
                stop further charges. Use <em>Pause All</em> to suspend all
                recurring payments until you resume them【549718991979132†L124-L149】.
              </p>
            </section>

            {/* Exporting Reports */}
            <section id="exporting-reports" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Exporting Reports
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                After running your search, click <em>Download</em> to export the
                results as a CSV file for further analysis. Use the report
                configuration tool to customise which columns are included.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SubscriptionReports;