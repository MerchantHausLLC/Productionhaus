import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Query API
 *
 * This page describes the Query API, which lets you download
 * transaction data from the gateway for reporting and analytics. It
 * summarises the communication protocol, required parameters and
 * typical use cases.
 */
const QueryAPI = () => {
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
              Query API
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Query API provides machine‑readable access to your
              transaction history. Use it to pull settlement statuses,
              customer vault data and other details for custom
              reporting.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whereas the gateway’s web interface lets you browse
                transactions manually, the Query API allows your
                application to request data programmatically. This is
                useful for reconciling orders with accounting systems
                or importing data into your own dashboards. The API
                returns records in a consistent format that you can
                parse and store.
              </p>
            </section>

            {/* Communication & Variables */}
            <section id="communication-variables" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Communication &amp; Variables
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                According to integration resources, the Query API uses
                HTTP over SSL to send requests to a specified endpoint.
                You may use either GET or POST to pass name/value
                pairs to the API. At a minimum
                you provide your <code>username</code> and
                <code>password</code> credentials. Additional optional
                parameters filter the results—for example
                <code>transaction_id</code>, <code>order_id</code>,
                <code>last_name</code> or date ranges.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The API also supports conditions to retrieve only
                specific transaction states such as pending
                authorisations, settled transactions or failed
                payments. To query the
                customer vault rather than transactions, include the
                <code>report_type=customer_vault</code> parameter and
                optionally specify a <code>customer_vault_id</code>.
              </p>
            </section>

            {/* Usage */}
            <section id="usage" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
              <p className="text-muted-foreground leading-relaxed">
                To call the API, construct a request string with your
                credentials and desired filters and send it to the
                endpoint specified by your service provider. The
                response is typically a series of name/value pairs or
                a delimited text file that includes one line per
                transaction. You can parse this response to generate
                reports or feed data into your CRM.
              </p>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Use Cases</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Query API is ideal for businesses that need
                automated reporting or integration with existing
                systems. Examples include daily settlement reports,
                reconciliation with ERP software, customer vault data
                synchronisation and custom analytics dashboards. By
                pulling data on demand, you avoid manual exports and
                keep your records up to date.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QueryAPI;