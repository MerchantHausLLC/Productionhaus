import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import NavTree from "@/components/NavTree";

/**
 * Kount Fraud Management page
 *
 * This page summarises the Kount Fraud Manager service, an AI‑driven
 * fraud prevention solution for card‑not‑present transactions. It
 * explains what the service is, highlights its key benefits, details
 * how it works and describes which gateway products support it. All
 * references to the original provider have been removed to maintain
 * neutral branding.
 */
export default function KountFraudManagement() {
  useEffect(() => {
    document.title = "Fraud Management with Kount";
  }, []);

  return (
    <>
      <Header />
      <main className="flex max-w-7xl mx-auto px-4 py-8">
        <NavTree />
        <div className="flex-1 docs-typography">
          <h1 className="text-3xl font-bold mb-4">Fraud Management</h1>
          <p className="mb-6">
            Kount Fraud Manager is an industry‑leading, AI‑driven fraud
            prevention service designed for eCommerce, mobile commerce and
            other card‑not‑present transactions. It uses a combination of
            supervised and unsupervised machine learning models to provide
            real‑time risk analysis and fraud assessment.
          </p>
          <section id="features" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Features & Benefits</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                The service owns and controls the entire technical stack,
                offering enterprise‑grade fraud management.
              </li>
              <li>
                It leverages a global data network, analysing more than 30
                billion transactions annually to generate unique risk scores
                for each merchant.
              </li>
              <li>
                Proprietary machine learning models produce three metrics:
                Omniscore, Persona and Fraud scores, delivering accurate
                real‑time decisions.
              </li>
              <li>
                The merchant portal displays a simple three‑way status for
                every transaction—Approved, Declined or Needs Review—to
                streamline decision making.
              </li>
              <li>
                Frictionless transaction flows reduce friction for genuine
                customers, improving satisfaction and conversion rates while
                limiting false positives.
              </li>
            </ul>
          </section>
          <section id="how-it-works" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
            <p>
              Once enabled, Kount begins working immediately without any
              additional configuration. A base risk model is applied to all
              transactions, and merchants can fine‑tune the behaviour by
              setting risk thresholds in the portal’s threshold management
              settings.
            </p>
            <p>
              Kount utilises a global database and adaptive AI to review
              transaction details. It may collect additional device and
              behavioural data via a Data Collector on consumer‑facing
              payment pages. This collector should not be used on merchant
              initiated transactions such as Virtual Terminal or Batch Upload
              to avoid mixing merchant data with customer data.
            </p>
          </section>
          <section id="supported-products" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Supported Gateway Products</h2>
            <p>
              Kount integrates with several gateway products. In most cases,
              the Data Collector operates automatically when using hosted
              payment features. For custom pages, you must pass a session
              identifier to the gateway on each transaction.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Checkout Pages:</strong> Collect Checkout and QuickClick
                automatically support Kount with no additional settings.
              </li>
              <li>
                <strong>Collect.js:</strong> Requires pairing with the
                Gateway.js library. You must send a session ID for each
                transaction so that Kount can collect device data.
              </li>
              <li>
                <strong>Gateway.js:</strong> Generates the necessary session
                information for third‑party checkout pages. Include the
                session ID variable on every transaction.
              </li>
              <li>
                <strong>Payment API:</strong> When used on consumer‑facing
                pages, pass a session ID variable for Kount to function
                correctly. For merchant initiated use cases such as Virtual
                Terminal or Batch Upload, omit the Data Collector.
              </li>
              <li>
                <strong>Virtual Terminal & Batch Upload:</strong> Supported
                without the Data Collector.
              </li>
            </ul>
          </section>
          <section id="enabling" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Enabling the Service</h2>
            <p>
              There is no special signup process for Kount. Merchants can
              enable it directly within their merchant portal, and partners
              can enable it for merchants through the value‑added services
              section in the partner portal.
            </p>
            <p>
              Once enabled, the Approval Rate Requirement (ARR) option
              becomes available. ARR lets merchants set a target approval
              percentage to maintain a desired risk level.
            </p>
          </section>
          <section id="scores" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Understanding the Kount Score</h2>
            <p>
              Each transaction receives a Kount score representing the risk
              assessment. The colour-coded display simplifies decision making:
              green indicates a low risk, yellow suggests additional
              verification may be required, and red means the transaction
              should be declined.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}