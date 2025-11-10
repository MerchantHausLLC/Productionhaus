import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Service Provider Contact Details
 *
 * Merchants can view their service provider’s contact information in the
 * portal. This guide explains where to find that information and how
 * partners can update the contact details displayed to merchants【482123191563672†L45-L74】【482123191563672†L79-L107】.
 */
const MerchantServiceProviderContacts = () => {
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
              Service Provider Contact Details
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Support information is displayed within the portal so your
              merchants know who to contact. This page shows where merchants
              find those details and how partners can update them.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At the top of the merchant portal there is a Help icon that
                opens a support drop‑down. The email, phone number and web
                address displayed here come from the partner’s contact
                configuration【482123191563672†L45-L74】.
              </p>
            </section>

            {/* Finding Support Info */}
            <section id="finding-info" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Finding Support Info
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Merchants can access support details by clicking the Help
                icon. The portal will show the partner’s phone number, email
                and URL if provided. If no details are configured, only a
                generic support email appears【482123191563672†L45-L74】.
              </p>
            </section>

            {/* Updating Contact Details */}
            <section id="updating-details" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Updating Contact Details
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Partners can update these fields in the partner portal under
                their account settings. Add your support phone number, email
                address and website URL. Merchants will then see the
                updated information whenever they click Help【482123191563672†L79-L107】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MerchantServiceProviderContacts;