import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Three Step Redirect Integration
 *
 * This page summarises the Three Step Redirect method. It explains
 * how the integration works, why it reduces PCI scope and what
 * benefits it offers compared to a direct post. Content is
 * derived from independent sources describing the advantages of the
 * Three Step Redirect API【973495872450596†L106-L118】.
 */
const ThreeStepRedirect = () => {
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
              Three Step Redirect
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Three Step Redirect is designed to reduce your PCI
              compliance burden by hosting the payment form on the
              gateway. It is the recommended approach for custom
              web‑based payment flows where you want a branded
              experience without touching cardholder data directly【973495872450596†L106-L118】.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Instead of sending card data from your server, the Three
                Step Redirect separates the transaction into three
                distinct steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                  Your system initiates the transaction by posting
                  basic order details to the gateway. The response
                  includes a temporary payment token.
                </li>
                <li>
                  You redirect the customer’s browser to a hosted
                  payment form on the gateway, passing the token. The
                  customer enters their payment details directly on
                  this secure page, keeping sensitive data off of your
                  servers.
                </li>
                <li>
                  After the form is submitted, the gateway sends your
                  system a notification (via redirect or callback)
                  along with the result. You then finalise the order
                  using the token.
                </li>
              </ol>
            </section>

            {/* Benefits */}
            <section id="benefits" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Independent experts highlight two key advantages of the
                Three Step Redirect: it significantly reduces your PCI
                footprint and still offers a high‑end look and feel for
                customers【973495872450596†L106-L118】. Because the
                gateway handles the payment form, you avoid collecting
                cardholder data directly. This method is also required
                when using payer authentication services such as Verified
                by Visa or Mastercard SecureCode, making it well suited
                for high‑risk e‑commerce【973495872450596†L106-L118】.
              </p>
            </section>

            {/* Implementation */}
            <section id="implementation" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Implementation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementing a Three Step Redirect integration usually
                involves creating two endpoints on your server: one to
                initiate the transaction and one to handle the callback.
                After receiving the payment token, redirect the
                customer’s browser to the hosted payment form and
                include any order metadata you need to persist. When the
                gateway posts back the result, verify the signature and
                complete the order. Because the payment form is fully
                hosted, you can use the gateway’s styling options or
                CSS overrides to match your brand.
              </p>
            </section>

            {/* Considerations */}
            <section id="considerations" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                When using a hosted form, you have less control over the
                user interface than with a direct post. Check the
                gateway’s documentation for available customisation
                options. Also be prepared to handle asynchronous
                callbacks, including retry logic in case network
                interruptions prevent immediate delivery of the result.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThreeStepRedirect;