import { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import NavTree from "@/components/NavTree";

/**
 * Secure3DS page
 *
 * This page describes how to integrate payer authentication (also known as
 * 3‑D Secure) into your checkout flow. It summarises the official
 * documentation for performing 3‑D Secure using the Gateway.js library and
 * provides a quick start guide. Branding references to the original
 * provider have been removed.
 */
export default function Secure3DS() {
  useEffect(() => {
    document.title = "3‑D Secure Integration Guide";
  }, []);

  return (
    <>
      <Header />
      <main className="flex max-w-7xl mx-auto px-4 py-8">
        <NavTree />
        <div className="flex-1 docs-typography">
          <h1 className="text-3xl font-bold mb-4">3‑D Secure Integration Guide</h1>
          <p className="mb-6">
            Three‑Domain Secure (3‑DS) is a fraud prevention protocol that
            authenticates cardholders before you submit a transaction. It
            reduces e‑commerce payment fraud and increases customer
            confidence by sharing additional data between the merchant, card
            issuer and cardholder【344687996962422†screenshot】. For most
            transactions this happens behind the scenes, but in some cases
            customers may be challenged (for example, by entering a one‑time
            password)【344687996962422†screenshot】.
          </p>
          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Overview</h2>
            <p>
              Implementing 3‑D Secure requires Gateway.js. You must first
              load the Gateway.js script and create a public API key as
              described in the Gateway.js guide. Once the library is loaded,
              you can initialise the payer authentication module and then
              exchange data with the payment gateway. The key steps are
              summarised below.
            </p>
          </section>
          <section id="steps" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Quick Start Steps</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Initialise Gateway.js.</strong> Load the script and
                call <code>Gateway.create()</code> with your public key. The
                resulting object exposes the
                <code>get3DSecure()</code> method【582078734460959†screenshot】.
              </li>
              <li>
                <strong>Initialise payer authentication.</strong> Call
                <code>gateway.get3DSecure()</code> to obtain the 3‑DS
                interface【344687996962422†screenshot】.
              </li>
              <li>
                <strong>Create a transaction interface.</strong> Build an
                object containing details about the transaction, including
                card number, expiration date, currency, amount, cardholder
                name, email address and billing address【584822900609271†screenshot】.
                If you are using Collect.js, replace card details with the
                payment token; if using a saved customer, provide the
                customer vault token and amount【584822900609271†screenshot】.
              </li>
              <li>
                <strong>Start the authentication process.</strong> Mount the
                interface onto your page. For single‑page applications built
                with frameworks like React or Angular, ensure the mounted
                DOM element isn&apos;t destroyed during re‑renders【584822900609271†screenshot】.
              </li>
              <li>
                <strong>Attach callbacks.</strong> Register callbacks to
                handle different events: when the issuer requests a password,
                when 3‑DS data is ready, when the customer fails
                authentication, and to capture any errors【582078734460959†screenshot】.
              </li>
              <li>
                <strong>Send 3‑DS data to your backend.</strong> When the
                authentication completes, send the 3‑DS data returned from
                the callback to your server【582078734460959†screenshot】.
              </li>
              <li>
                <strong>Submit the transaction.</strong> Post the 3‑DS data
                to the payment API along with your private API key to
                finalise the transaction【582078734460959†screenshot】.
              </li>
            </ol>
          </section>
          <section id="notes" className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Additional Notes</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                For frictionless flows, the customer is authenticated
                automatically and you won&apos;t need to show any challenge screen【344687996962422†screenshot】.
              </li>
              <li>
                When using Collect.js, call the 3‑DS
                <code>configure()</code> method after the card details have
                been collected to provide the tokenised payment data【344687996962422†screenshot】.
              </li>
              <li>
                Customer vault integrations require only the customer vault
                token, currency and amount. Card details are not included
               【584822900609271†screenshot】.
              </li>
              <li>
                Always submit the final transaction via the secure payment
                API with your private key; do not include the private key in
                client‑side code.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}