import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Billing Statement
 *
 * This guide explains how merchants can view their billing statements in the
 * portal when the service provider bills fees directly to the merchant. It
 * covers the prerequisites for enabling the statement, how to access and
 * understand the invoice and notes on the billing schedule【552348752727428†L49-L54】【552348752727428†L85-L98】.
 */
const BillingStatement = () => {
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
              Billing Statement
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              When your provider bills gateway and transaction fees directly to
              you, a billing statement is available in the portal. This page
              shows where to find the statement and how to interpret it.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The billing statement page lists the current balance due for
                your account. You can view individual invoices, download a
                PDF copy and print statements for your records【552348752727428†L85-L98】.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                The billing statement option is only available if your
                provider has enabled the “Bill to Merchant” setting. Partners
                must turn on the <em>Display Billing Statement</em> flag and
                optionally choose to send email notifications when fees are
                billed【552348752727428†L59-L70】. Users need the “Administrative Options”
                permission to access the statement【552348752727428†L72-L79】.
              </p>
            </section>

            {/* Viewing Your Statement */}
            <section id="viewing-statement" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Viewing Your Statement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                From the portal menu, navigate to <em>Settings → Billing
                Statement</em>. You’ll see your current balance and a list of
                invoices. Click an invoice to view line items and download a
                PDF. Some providers also offer a detailed per‑transaction fee
                breakdown via a drop‑down on each invoice【552348752727428†L101-L112】.
              </p>
            </section>

            {/* Billing Schedule */}
            <section id="billing-schedule" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Billing Schedule
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Invoices are generated on a regular schedule. Typically, fees
                are billed every Tuesday and Friday when the balance reaches a
                minimum amount (for example, $50). Any remaining monthly fees
                are billed on the first business day of the following month【552348752727428†L85-L98】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BillingStatement;