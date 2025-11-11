import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Payment API (Direct Post)
 *
 * This page describes the classic Payment API integration method. It
 * explains what the API does, outlines prerequisites and PCI
 * considerations, summarises how requests are sent and highlights
 * important points to remember. Citations come from the developer
 * marketing page and independent articles about the Direct Post
 * method.
 */
const PaymentAPI = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Payment API</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Payment API, sometimes called the Direct Post method, is
              the simplest way to post transactions directly from your
              server to the gateway. It supports both web‑based and non
              web‑based applications but places greater PCI responsibilities
              on the integrator.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At its core, the Payment API is a simple HTTP interface for
                processing transactions. Your server sends a POST request
                containing order details, payment information and
                authentication credentials. The gateway returns a
                response indicating whether the transaction was approved
                or declined. This method gives you complete control over
                the payment flow, but you are responsible for handling
                sensitive data securely and ensuring compliance with
                industry standards.
              </p>
            </section>

            {/* Prerequisites & PCI */}
            <section id="prerequisites-pci" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites &amp; PCI Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Before implementing the Payment API, you should perform a
                PCI vulnerability scan and ensure that your systems meet
                all data security requirements. Independent sources note
                that the direct post method is better suited for
                businesses with the resources to handle PCI compliance
                themselves. If you operate in a
                high‑risk environment or lack a dedicated security team,
                consider using a tokenisation or hosted solution instead.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To protect your account during development, never use
                live credentials or real card data in test environments.
                Always use a test merchant account and designated test keys.
                The official documentation stresses this point and warns
                developers not to use real API keys when testing.
              </p>
            </section>

            {/* Usage */}
            <section id="usage" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
              <p className="text-muted-foreground leading-relaxed">
                To submit a transaction you will send a POST request to the
                payment endpoint with name/value pairs representing the
                transaction type, amount, card details and customer
                information. A typical request might include fields such
                as <code>username</code>, <code>password</code>,
                <code>amount</code>, <code>payment_token</code> or card
                data, and order identifiers. The gateway will return a
                response string containing an approval indicator,
                response message and transaction ID.
              </p>
              <details className="border border-border rounded p-4">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Tips for sending requests
                </summary>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>Use HTTPS for all communication to ensure data is encrypted in transit.</li>
                  <li>Store your API credentials securely and rotate passwords regularly.</li>
                  <li>Validate all input on your server to prevent injection or tampering.</li>
                  <li>Test against the gateway’s sandbox environment before going live. Real cards should never be used for testing.</li>
                </ul>
              </details>
            </section>

            {/* Considerations */}
            <section id="considerations" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Payment API offers maximum control but also brings
                additional responsibilities. Because your server handles cardholder
                data directly, you must maintain a secure environment and
                ensure compliance with the Payment Card Industry Data
                Security Standard (PCI DSS). Many integrators choose
                tokenisation or hosted solutions to reduce scope. If you
                decide to proceed with the Payment API, budget time and
                resources for regular security audits and vulnerability
                scans.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentAPI;