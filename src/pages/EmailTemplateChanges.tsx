import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Email Template Changes
 *
 * Merchants and partners can request changes to the automated email
 * templates used for receipts and notifications. This page summarises
 * the template types available, describes common modifications and
 * explains how to submit a change request【61280691409487†L45-L100】.
 */
const EmailTemplateChanges = () => {
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
              Email Template Changes
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Automated emails sent from the portal can be customised to match
              your branding or include additional information. Because
              templates are shared across all merchants, changes must be
              requested through support.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                There are three main templates: the merchant receipt sent to
                you when a transaction occurs, the customer receipt sent to
                your customer and a printable receipt page for in‑person
                transactions【61280691409487†L45-L100】. These templates can
                include your logo, contact details and custom text.
              </p>
            </section>

            {/* Template Types */}
            <section id="template-types" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Template Types</h2>
              <p className="text-muted-foreground leading-relaxed">
                The following templates are available:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Merchant email receipt:</strong> Notification to you
                  after each transaction, showing the customer information and
                  transaction details.
                </li>
                <li>
                  <strong>Customer email receipt:</strong> Sent to your
                  customer as proof of purchase.
                </li>
                <li>
                  <strong>Printable receipt:</strong> A web page you can print
                  or save as PDF for walk‑in customers.
                </li>
              </ul>
            </section>

            {/* Making Changes */}
            <section id="making-changes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Making Changes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Common changes include adding surcharges or tax amounts to the
                receipt, showing merchant‑defined fields, changing the “from”
                address or subject line, removing certain fields and adding
                custom messaging. To add a logo or image, upload it to a
                hosted location and provide the URL with your request【61280691409487†L45-L100】.
              </p>
              <details className="border border-border rounded p-4">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Tips for customisation
                </summary>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>
                    Keep changes concise to ensure receipts are easy to read.
                  </li>
                  <li>
                    Provide exact wording and the location where it should
                    appear.
                  </li>
                  <li>
                    For images, make sure the URL is publicly accessible over
                    HTTPS.
                  </li>
                </ul>
              </details>
            </section>

            {/* Request Process */}
            <section id="request-process" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Request Process
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To request an email template change, contact your support team
                and provide your account ID, the template you want to modify
                and a description of the changes. Attach any images or specify
                custom fields you want to include. Support will implement
                approved changes and let you know when they’re live【61280691409487†L45-L100】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EmailTemplateChanges;