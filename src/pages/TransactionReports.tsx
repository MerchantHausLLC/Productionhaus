import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Transaction Reports page
 *
 * This component provides an overview of transaction reporting tools. It
 * explains the difference between the Snapshot and Search forms, lists the
 * grouping options available, and outlines step‑by‑step instructions for
 * common reports. The content is adapted from the official support
 * articles on transaction reports【233504715877241†L69-L104】【233504715877241†L160-L186】 and restructured into an easy‑to‑follow guide.
 */
const TransactionReports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto flex">
          {/* Navigation tree on the left */}
          <NavTree />
          {/* Content area */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Transaction Reports
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This guide introduces the transaction reporting feature and shows
              you how to run the most common reports. Reporting tools allow you
              to search transactions across a wide range of fields and drill into
              the data by date, processor, card type, user and more. Use the
              sections below to learn the basics and then explore deeper as
              needed.
            </p>

          {/* Overview */}
          <section id="overview" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The reporting feature lets merchants search transactions using a
              variety of parameters. Reports can be generated via two forms:
              <strong className="font-semibold"> Transaction Snapshot</strong>, which
              provides a high‑level summary across multiple criteria, and
              <strong className="font-semibold"> Search Transactions</strong>, which
              allows precise searches on fields such as last name, email or
              transaction ID【233504715877241†L99-L104】. The Snapshot form offers eight
              grouping options, while the search form contains up to 15 standard
              fields plus any merchant‑defined fields on your account.
            </p>
          </section>

          {/* Prerequisites */}
          <section id="prerequisites" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Prerequisites
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To access transaction reports, a user must have the “Access
              Transaction Reports” permission. The account must also have at least
              one active processor. If you wish to view transactions processed
              by other users on the account, you’ll need the “Access Other
              Users’ Transactions” permission【233504715877241†L82-L88】.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Navigate to the reporting tools via the left‑hand menu of the
              portal or from the home page by selecting <em>Reporting →
              Transactions</em>【233504715877241†L89-L94】.
            </p>
          </section>

          {/* Snapshot vs Search */}
          <section id="snapshot-vs-search" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Snapshot vs. Search
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The <strong>Transaction Snapshot</strong> form provides an at‑a‑glance
              view of your activity. You can group results by settlement batch,
              card/payment type, processor, user, source or date range【233504715877241†L115-L133】.
              Each snapshot shows columns for pending authorisations, charges,
              refunds, returns/chargebacks, voids, declines and totals【233504715877241†L139-L153】.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The <strong>Search Transactions</strong> form supports more
              granular queries. Standard fields include customer name, email,
              transaction ID and date. Up to twenty merchant‑defined fields may
              also be available【233504715877241†L99-L104】.
            </p>
          </section>

          {/* Grouping Options */}
          <section id="grouping-options" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Snapshot Grouping Options
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Settlement Batch:</strong> Group transactions by daily
                settlement batch; see totals for sales, captures and unsettled
                transactions【233504715877241†L160-L170】.
              </li>
              <li>
                <strong>Card/Payment Type:</strong> Filter transactions by card
                network or payment method; approval percentages highlight issues
                with a particular card scheme【233504715877241†L216-L234】.
              </li>
              <li>
                <strong>Payment Processor:</strong> Separate volume across
                multiple processors and compare approval rates to spot
                configuration problems【233504715877241†L240-L260】.
              </li>
              <li>
                <strong>User Account:</strong> Break out activity by user name
                and compare approval percentages to identify training needs【233504715877241†L266-L283】.
              </li>
              <li>
                <strong>Transaction Source:</strong> Report on transactions by
                origin (Virtual Terminal, API, Batch Upload, Mobile etc.)【233504715877241†L289-L302】.
              </li>
              <li>
                <strong>Day/Week/Month:</strong> Summarise transactions over
                different time periods to view trends【233504715877241†L130-L131】.
              </li>
              <li>
                <strong>Merchant‑Defined Fields:</strong> Use custom
                fields configured in your gateway to group transactions【233504715877241†L132-L133】.
              </li>
            </ul>
          </section>

          {/* Running Reports */}
          <section id="how-to-run-reports" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              How to Run Common Reports
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Settlement Batch Report
                </h3>
                <p className="leading-relaxed mb-2">
                  Use this report to see totals for sales/captured authorisations
                  on a given day. Select <em>Group By: Settlement Batch</em>, choose
                  a date range and, if needed, a settlement time. The results
                  display batches per processor; click the magnifying glass to
                  drill down into transactions【233504715877241†L160-L187】.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Resettle a Failed Batch
                </h3>
                <p className="leading-relaxed mb-2">
                  If a settlement fails, the gateway attempts to retry
                  automatically. After resolving any processor issues, go to
                  <em>Transaction Snapshot → Settlement Batch</em>, select the failed
                  batch and choose <em>Resettle Batches</em> to re‑submit
                  it【233504715877241†L193-L211】.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Card/Payment Type Report
                </h3>
                <p className="leading-relaxed mb-2">
                  Group by card or payment type to analyse volumes across
                  Visa, Mastercard, e‑checks and more. Approval percentages help
                  diagnose card‑specific declines【233504715877241†L216-L234】.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Payment Processor Report
                </h3>
                <p className="leading-relaxed mb-2">
                  Compare performance between processors in multi‑MID accounts.
                  Low approval rates can highlight configuration or platform
                  issues【233504715877241†L240-L260】.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  User Account Report
                </h3>
                <p className="leading-relaxed mb-2">
                  Separate transactions by username to see individual
                  contributions and approval percentages【233504715877241†L266-L283】.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Transaction Source Report
                </h3>
                <p className="leading-relaxed mb-2">
                  Identify where transactions originate – such as Virtual
                  Terminal, API or Shopify – to understand channel performance【233504715877241†L289-L302】.
                </p>
              </div>
            </div>
          </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TransactionReports;