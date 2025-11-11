import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Collect Checkout
 *
 * This page summarises the Collect Checkout service, which
 * provides a hosted checkout page that can be integrated into
 * your website or application. Because the entire checkout flow is
 * served by the gateway, no payment data ever touches your
 * environment【4979302280188†L194-L198】.
 */
const CollectCheckout = () => {
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
              Collect Checkout
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Collect Checkout offers a fully hosted checkout page that
              you can embed into most web‑based payment flows. It lives
              entirely on the gateway’s servers, which means no payment
              data ever touches your environment【4979302280188†L194-L198】.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Collect Checkout is designed for merchants who want a
                streamlined integration without handling sensitive data.
                Instead of building your own checkout form, you point
                customers to a hosted payment page that is customised via
                configuration settings. This page collects all payment
                and billing information and then redirects shoppers back
                to your site with the result.
              </p>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use Collect Checkout you typically follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                  Generate a checkout session on your server by calling
                  the gateway’s API with the order details. The
                  response includes a unique checkout URL.
                </li>
                <li>
                  Redirect or embed the customer to this URL. The
                  hosted page collects payment and billing details and
                  displays confirmation screens.
                </li>
                <li>
                  Once the payment completes, the gateway redirects
                  back to your return URL with the transaction status
                  so you can fulfil the order.
                </li>
              </ol>
            </section>

            {/* Benefits */}
            <section id="benefits" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Because Collect Checkout runs entirely on the gateway, no
                payment data flows through your infrastructure【4979302280188†L194-L198】.
                This makes PCI compliance easier and reduces your
                development effort. You still retain control over the
                look and feel via configuration and can provide a
                seamless redirect or modal experience for your
                customers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CollectCheckout;