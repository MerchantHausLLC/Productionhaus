import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Collect.js
 *
 * This page explains how Collect.js works. Collect.js is a
 * JavaScript library that displays a hosted pop‑up form to collect
 * payment details and returns a token. Using tokens keeps sensitive
 * information off your server and reduces PCI scope【4979302280188†L185-L190】【973495872450596†L149-L156】.
 */
const CollectJs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <style>{`
            h1, h2, h3, h4, h5, h6, p, li, button, a, em, strong {
              font-family: 'Inter', sans-serif;
            }
          `}</style>
        </Head>
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Collect.js</h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Collect.js is a browser‑based tokenisation library. It
              displays a pop‑up form hosted on the gateway, collects
              payment data and returns a token that you use in place of
              card numbers【4979302280188†L185-L190】. By outsourcing data
              collection to the gateway, you keep sensitive details off
              your servers and minimise PCI scope.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Collect.js library works by injecting a small script
                into your checkout page. When triggered, it opens a
                secure pop‑up hosted on the gateway. Customers enter
                their payment details directly in this pop‑up. Once
                submitted, the gateway returns a one‑time token which
                represents the card or bank details【4979302280188†L185-L190】【973495872450596†L149-L156】.
              </p>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                To integrate Collect.js:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                  Include the Collect.js library on your checkout page
                  and configure it with your public API key. Only
                  public keys are used client‑side, so your secret
                  credentials remain hidden.
                </li>
                <li>
                  Add a button or event handler that triggers the
                  tokenisation popup. You can customise the popup’s
                  styling to match your brand.
                </li>
                <li>
                  When the customer submits their details, Collect.js
                  returns a token to your callback function. Send this
                  token to your server and use it with the Payment API
                  to complete the transaction.
                </li>
              </ol>
            </section>

            {/* Benefits */}
            <section id="benefits" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Collect.js replaces raw card or bank account data with
                tokens【973495872450596†L149-L156】. Because the popup form
                is hosted by the gateway, no payment information flows
                through your environment. This drastically reduces your
                PCI compliance footprint without sacrificing control over
                the checkout experience. You can still brand the popup
                and maintain a seamless flow.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CollectJs;