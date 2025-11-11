import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Integration Overview
 *
 * This page explains the difference between APIs and SDKs and
 * summarises the various integration methods available to build
 * payment solutions. It provides high level guidance on when to
 * choose each option. Citations are drawn from publicly
 * available sources explaining APIs, SDKs and NMI integration
 * methods【973495872450596†L65-L88】【973495872450596†L90-L96】.
 */
const IntegrationOverview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Integration Overview";
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1 docs-typography">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Integration Overview
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Before diving into individual integration guides, it’s important
              to understand the fundamentals. This overview explains
              what APIs and SDKs are, how they differ and which
              integration options are available. The goal is to help you
              choose the right approach for your project.
            </p>

            {/* What are APIs & SDKs */}
            <section id="what-are-apis-and-sdks" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                What Are APIs &amp; SDKs?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                An <strong>Application Programming Interface (API)</strong> is a
                set of communication protocols, subroutine definitions and
                tools that allow different software systems to
                interoperate. APIs make it possible for your custom
                application to talk to a payment gateway【973495872450596†L65-L88】.
                In contrast, a <strong>Software Development Kit (SDK)</strong> is
                a more complete collection of software components. It may
                include libraries, sample code and documentation that
                help you build an application from the ground up【973495872450596†L65-L88】.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simply put, an SDK gives you a framework and building
                blocks for creating software, whereas an API provides
                specific functions that let software components talk to
                one another. Many gateway integrations combine both: an
                SDK to handle device‑level interactions and an API for
                server‑side transactions.
              </p>
            </section>

            {/* Integration Options */}
            <section id="integration-options" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Integration Options
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our platform offers several integration methods tailored to
                different use cases. The following list briefly
                introduces each option. Click the links to read the full
                guide for implementation details.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <a href="/PaymentAPI" className="underline text-primary">
                    Payment API
                  </a>{" "}
                  – A classic direct post integration that processes
                  transactions via HTTP requests. It’s simple but
                  requires you to meet PCI standards【4979302280188†L140-L147】.
                </li>
                <li>
                  <a href="/ThreeStepRedirect" className="underline text-primary">
                    Three Step Redirect
                  </a>{" "}
                  – Reduces your PCI footprint by hosting the payment
                  form on the gateway and returning a token for final
                  authorisation【973495872450596†L106-L118】.
                </li>
                <li>
                  <a href="/CollectJs" className="underline text-primary">
                    Collect.js
                  </a>{" "}
                  – A pop‑up tokenisation library that replaces raw
                  payment data with tokens, minimising PCI exposure【4979302280188†L185-L190】.
                </li>
                <li>
                  <a href="/CollectCheckout" className="underline text-primary">
                    Collect Checkout
                  </a>{" "}
                  – A hosted checkout page that lives entirely on the
                  gateway servers, keeping your environment out of
                  scope【4979302280188†L194-L198】.
                </li>
                <li>
                  <a href="/HostedPaymentPage" className="underline text-primary">
                    Hosted Payment Page (QuickClick)
                  </a>{" "}
                  – A simple copy‑and‑paste checkout solution for
                  merchants without development resources【973495872450596†L136-L145】.
                </li>
                <li>
                  <a href="/QueryAPI" className="underline text-primary">
                    Query API
                  </a>{" "}
                  – Download transaction data for custom reporting and
                  analytics【4979302280188†L210-L214】.
                </li>
                <li>
                  <a href="/Webhooks" className="underline text-primary">
                    Webhooks
                  </a>{" "}
                  – Push real‑time notifications of events to your
                  application【4979302280188†L202-L207】.
                </li>
                <li>
                  <a href="/CustomerPresentCloud" className="underline text-primary">
                    Customer Present Cloud
                  </a>{" "}
                  – A browser‑based point of sale system for EMV
                  transactions with no software installation【4979302280188†L87-L94】.
                </li>
                <li>
                  <a href="/MobileSDK" className="underline text-primary">
                    Mobile SDK (iOS/Android)
                  </a>{" "}
                  – Libraries for encrypted mobile card reader
                  integrations【4979302280188†L96-L102】.
                </li>
                <li>
                  <a href="/PaymentDeviceSDK" className="underline text-primary">
                    Payment Device SDK (Windows/Linux)
                  </a>{" "}
                  – Tools to integrate with payment terminals and a
                  virtual device emulator【4979302280188†L109-L116】.
                </li>
                <li>
                  <a href="/DirectConnect" className="underline text-primary">
                    Direct Connect & Gateway Emulator
                  </a>{" "}
                  – Pre‑equip devices for the platform and emulate
                  Authorize.Net transactions【4979302280188†L128-L136】【973495872450596†L160-L169】.
                </li>
                <li>
                  <a href="/Secure3DS" className="underline text-primary">
                    3D Secure Server (3DS2)
                  </a>{" "}
                  – Hosted 3DS authentication for card scheme
                  compliance【4979302280188†L162-L170】.
                </li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IntegrationOverview;