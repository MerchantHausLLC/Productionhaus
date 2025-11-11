import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import NavTree from "@/components/NavTree";

/**
 * GatewayJs page
 *
 * This page introduces the Gateway.js library, a lightweight JavaScript file
 * that you can embed on your checkout page to access additional payment
 * gateway services. The guidance here distils the official documentation
 * into a concise quick start guide and notes about best practices. All
 * references to the original provider have been removed to match the
 * MerchantHaus branding.
 */
export default function GatewayJs() {
  useEffect(() => {
    document.title = "Gateway.js Quick Start";
  }, []);

  return (
    <>
      <Header />
      <main className="flex max-w-7xl mx-auto px-4 py-8">
        <NavTree />
        <div className="flex-1 docs-typography">
          <h1 className="text-3xl font-bold mb-4">Gateway.js Quick Start</h1>
          <p className="mb-6">
            Gateway.js is a JavaScript library that allows you to extend your
            integration with additional gateway services. By loading the
            library into your checkout page, you can enable advanced features
            such as payer authentication and fraud prevention without having
            to build those capabilities yourself.
          </p>
          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p>
              The Gateway.js script is retrieved directly from the payment
              gateway&apos;s servers and should <strong>never</strong> be hosted on
              your own domain. Doing so ensures that the library remains
              up‑to‑date and that sensitive code isn&apos;t tampered with. The
              script tag looks like this:
            </p>
            <pre className="bg-muted p-4 rounded my-4 overflow-auto text-sm">
{`<script
  src="https://secure.networkmerchants.com/js/v1/Gateway.js">
</script>`}
            </pre>
            <p>
              Loading the script from the gateway means you always get the
              latest version. This is explicitly recommended in the official
              documentation.
            </p>
          </section>
          <section id="getting-started" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Add the script tag.</strong> Copy the snippet above
                into the <code>&lt;head&gt;</code> or before the closing
                <code>&lt;/body&gt;</code> tag of your checkout page. The
                library will load asynchronously.
              </li>
              <li>
                <strong>Create a public API key.</strong> The library
                authenticates using a public key with Checkout permissions. You
                can generate this key in your merchant dashboard under
                Settings &rarr; Security Keys. Once created, you&apos;ll use it
                when initialising the library.
              </li>
              <li>
                <strong>Initialise the library.</strong> Call
                <code>Gateway.create()</code> with your public key. This
                returns a new Gateway instance you can use to access
                additional services:
                <pre className="bg-muted p-4 rounded my-2 overflow-auto text-sm">
{`const gateway = Gateway.create('YOUR_PUBLIC_KEY_HERE');`}
                </pre>
              </li>
              <li>
                <strong>Enable extensions.</strong> Gateway.js supports
                optional modules such as payer authentication (3‑D Secure) and
                fraud prevention. After initialising, call methods on the
                gateway instance to configure these services. For example,
                <code>gateway.get3DSecure()</code> returns the object used
                for 3‑D Secure flows and <code>gateway.getKount()</code>
                provides fraud prevention features.
              </li>
            </ol>
          </section>
          <section id="best-practices" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Best Practices</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Always load the script over HTTPS from the official gateway
                domain. Avoid serving it from your own server to ensure you
                receive security updates.
              </li>
              <li>
                Restrict the scope of your public key. Create one key per
                environment (test or production) and rotate keys regularly.
              </li>
              <li>
                Only initialise extensions you intend to use. Unused
                components don&apos;t need to be initialised, keeping your
                integration lean and performant.
              </li>
              <li>
                Consult the official API reference for detailed methods and
                callback signatures. This page provides a high‑level overview
                to get you started quickly.
              </li>
            </ul>
          </section>
          <section id="use-cases" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
            <p>
              Gateway.js is ideal for merchants who wish to add advanced
              services to an existing checkout page without rebuilding their
              integration. For example, you can implement 3‑D Secure to
              authenticate cardholders prior to submission or integrate a
              machine‑learning fraud solution such as Kount. Because the
              library exposes modular APIs, you can pick and choose features
              based on your risk and compliance requirements.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}