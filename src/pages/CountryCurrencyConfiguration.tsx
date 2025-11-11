import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Country/Currency Configuration
 *
 * This page describes how to set your default country and currency for
 * virtual terminal transactions. It explains why you might want to
 * customise these defaults and how to configure them in the portal【494814910899136†L49-L89】.
 */
const CountryCurrencyConfiguration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Country/Currency Configuration
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              If you process transactions in multiple currencies, you can set
              a default country and currency for manual transactions in the
              virtual terminal. This ensures that tax rates and currency
              symbols default to your preferred values.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This setting controls the default country and currency shown
                whenever you process a manual transaction. It does not affect
                API‑based processing or your settlement currency【494814910899136†L90-L111】.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                You need administrative permissions to change these settings.
                The list of available currencies depends on your processor and
                merchant account configuration【494814910899136†L49-L89】.
              </p>
            </section>

            {/* Setting Defaults */}
            <section id="setting-defaults" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Setting Defaults
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To update the default country and currency:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  Go to the country/currency configuration page in your portal.
                </li>
                <li>
                  Select a default country from the drop‑down list.
                </li>
                <li>
                  Choose your default currency. Only currencies supported by
                  your account will appear.
                </li>
                <li>
                  Click <em>Save</em>. If you are using risk tools, updating
                  your currency may reset thresholds to their default values【958898769232710†L112-L124】.
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CountryCurrencyConfiguration;