import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Customer Fee Configuration
 *
 * Merchants can add surcharges, convenience fees and miscellaneous fees to
 * their transactions using the customer fee configuration tools. This
 * guide summarises the prerequisites for adding fees, how to create
 * new fees and the differences between the available fee types【344513904639358†L51-L74】.
 */
const CustomerFeeConfiguration = () => {
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
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style>{`
            h1, h2, h3, h4, h5, h6, p, li, button, a, em, strong {
              font-family: 'Montserrat', sans-serif;
            }
          `}</style>
        </Head>
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Customer Fee Configuration
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              To offset processing costs or recover bank fees, you can charge
              additional fees on customer transactions. This page explains the
              options available and how to configure them.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The fee configuration tool allows you to apply surcharges,
                convenience fees and miscellaneous fees to card and ACH
                transactions processed through the virtual terminal【344513904639358†L51-L74】. Each
                fee type has unique rules and maximum amounts.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your service provider must enable the customer fee feature, and
                you need administrative permissions to configure fees. Some
                processors or card brands restrict or prohibit surcharging,
                so be sure to check your merchant agreement【344513904639358†L105-L142】.
              </p>
            </section>

            {/* Creating Fees */}
            <section id="creating-fees" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Creating Fees
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On the fee configuration page you can create a new fee by
                choosing its type, giving it a label and setting a fixed or
                percentage amount. You can decide whether the fee applies to
                card payments, ACH payments or both. Toggle the fee on or off
                as needed and save your changes.
              </p>
            </section>

            {/* Fee Types */}
            <section id="fee-types" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Fee Types</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                There are three types of fees you can configure:
              </p>
              <details className="border border-border rounded p-4 mb-4">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Surcharge
                </summary>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  A surcharge is a percentage or flat fee applied to credit
                  card transactions to recoup interchange costs. Surcharges
                  may be restricted by state or card brand rules and usually
                  cannot exceed 4% of the transaction amount.
                </p>
              </details>
              <details className="border border-border rounded p-4 mb-4">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Convenience Fee
                </summary>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Convenience fees are charged for providing an alternative
                  payment channel, such as online payments instead of in‑person.
                  They must be a flat amount and cannot vary based on the
                  payment type or amount【741732206429404†L274-L275】.
                </p>
              </details>
              <details className="border border-border rounded p-4">
                <summary className="cursor-pointer font-semibold text-foreground">
                  Miscellaneous Fee
                </summary>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Miscellaneous fees can be used to pass on specific costs,
                  such as return check fees or other non‑processing expenses.
                  You may set a flat amount or percentage, subject to
                  processor approval【344513904639358†L105-L142】.
                </p>
              </details>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CustomerFeeConfiguration;