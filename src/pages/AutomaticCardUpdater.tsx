import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Automatic Card Updater
 *
 * The Automatic Card Updater (ACU) service automatically refreshes
 * expired or reissued card details on file. This reduces declined
 * transactions and improves customer retention. This guide summarises
 * the prerequisites for using ACU, the available configuration options and
 * how to run an update immediately when necessary【106422696026495†L54-L60】.
 */
const AutomaticCardUpdater = () => {
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
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style>{`
            h1, h2, h3, h4, h5, h6, p, li, button, a, em, strong {
              font-family: 'Inter', sans-serif;
            }
          `}</style>
        </Head>
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Automatic Card Updater
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Automatic Card Updater service keeps your stored card
              information current by automatically replacing expired or
              reissued cards. This helps reduce decline rates and ensures
              recurring subscriptions and stored credentials continue
              seamlessly.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                ACU periodically contacts card networks to obtain updated card
                numbers and expiry dates. Updated data is applied to your
                customer vault and any active recurring schedules to prevent
                declines【106422696026495†L54-L60】.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Automatic Card Updater must be enabled on your account by your
                service provider. Not all processors support ACU, and
                additional fees may apply. You’ll need administrative
                permissions to configure the service and run updates.
              </p>
            </section>

            {/* Configuration */}
            <section id="configuration" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Configuration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On the ACU settings page you can choose how often updates run
                (monthly, quarterly or annually) and what card statuses to
                update. You can also decide whether to update cards in your
                customer vault, recurring subscriptions or both. A status area
                shows how many cards will be updated in the next run and when
                it is scheduled【106422696026495†L90-L110】.
              </p>
              <details className="border border-border rounded p-4">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Options explained
                </summary>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Frequency:</strong> Choose the cadence for
                    updates—monthly is recommended for active subscription
                    businesses.
                  </li>
                  <li>
                    <strong>Include expired cards only:</strong> Update only
                    cards that have already expired or that were declined due
                    to expiry.
                  </li>
                  <li>
                    <strong>Update customer vault:</strong> When enabled,
                    updated card data overwrites entries in your stored
                    customer profiles.
                  </li>
                  <li>
                    <strong>Update recurring subscriptions:</strong> Applies
                    updated card details to active recurring schedules
                    automatically.
                  </li>
                </ul>
              </details>
            </section>

            {/* Running Updates */}
            <section id="running-updates" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Running Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                ACU runs automatically on the schedule you choose. If you need
                to force an update—for example after enabling the service—you
                can click the <em>Run Now</em> button. The system will
                contact the networks immediately and apply any updates found.
                Depending on network availability, updates may take several
                hours to complete【106422696026495†L81-L86】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AutomaticCardUpdater;