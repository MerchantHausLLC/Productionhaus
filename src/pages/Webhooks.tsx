import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Webhooks
 *
 * This page describes webhooks and how they differ from the Query API.
 * Webhooks provide near‑real‑time notifications of events happening on
 * your account. They “push” information to your application instead
 * of requiring you to poll for it.
 */
const Webhooks = () => {
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
              Webhooks
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Webhooks allow you to receive notifications whenever
              certain events occur on your account—such as transaction
              status changes, recurring billing updates or deposit
              events. Unlike the Query API, which requires your
              application to pull data on demand, webhooks push data to
              your endpoint in near real time.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A webhook is essentially an HTTP POST that the gateway
                sends to a URL you define. When a qualifying event
                occurs—such as a transaction settling or a subscription
                renewing—the gateway packages relevant details into a
                JSON or form‑encoded payload and posts it to your
                endpoint. Your system can then process the payload to
                update order statuses, trigger emails or sync data with
                other systems.
              </p>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                To set up webhooks:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>
                  Create a publicly accessible URL on your server that
                  can accept POST requests. Ensure it uses HTTPS to
                  secure data in transit.
                </li>
                <li>
                  Configure your webhook subscriptions via your
                  partner portal or API. Specify the types of events you
                  want to receive and provide your endpoint URL.
                </li>
                <li>
                  Implement logic to parse the incoming payload and
                  respond with a <code>200 OK</code> status. It’s good
                  practice to log the data and verify the signature or
                  authentication token supplied by the gateway.
                </li>
                <li>
                  Handle retries gracefully. Webhooks may be resent
                  multiple times if your server does not respond
                  promptly. Ensure your endpoint is idempotent so that
                  duplicate notifications do not create duplicate
                  records.
                </li>
              </ol>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Use Cases</h2>
              <p className="text-muted-foreground leading-relaxed">
                Common use cases for webhooks include updating order
                statuses when transactions settle, pausing or resuming
                recurring subscriptions, synchronising ledger entries
                when deposits occur and sending transactional emails or
                SMS messages. By reacting to events in real time, you
                can build a responsive system that keeps your customers
                informed without polling the gateway repeatedly.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Webhooks;