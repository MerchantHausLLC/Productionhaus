import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * This page acts as the landing page for Merchant Portal resources on the MerchantHaus
 * partner site. It provides a high‑level introduction and links to individual guides
 * on transaction reporting and account management. The layout mirrors the existing
 * MerchantHaus pages, using the same header and footer components and the same
 * tailwind utility classes found in the Terms page. Cards are used for each guide
 * to create a clear and approachable navigation experience.
 */
const TheMerchantPortal = () => {
  useEffect(() => {
    // Always start scrolled to the top when navigating to this page
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        {/* Load Montserrat fonts */}
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
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
        <div className="max-w-6xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Merchant Portal
            </h1>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Welcome to the Merchant Portal resource centre. Here you can learn how to
              report on your transactions, manage merchant and partner users, and
              understand the permissions required to make changes in your gateway or
              partner account. Select a guide below to get started.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Card for Transaction Reports */}
              <div className="p-6 border border-border rounded-2xl hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-2 text-foreground">
                  Transaction Reports
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Learn how to use the reporting tools to search and analyse
                  transactions, run snapshots by settlement batch or payment type,
                  and export results for further analysis.
                </p>
                <a
                  href="/TransactionReports"
                  className="font-semibold text-primary hover:underline"
                >
                  View Guide →
                </a>
              </div>
              {/* Card for Merchant User Accounts */}
              <div className="p-6 border border-border rounded-2xl hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-2 text-foreground">
                  Merchant User Accounts
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Step‑by‑step instructions on adding, editing and removing merchant
                  users, resetting passwords and assigning the correct permissions.
                </p>
                <a
                  href="/MerchantUserAccounts"
                  className="font-semibold text-primary hover:underline"
                >
                  View Guide →
                </a>
              </div>
              {/* Card for Managing Partner Users */}
              <div className="p-6 border border-border rounded-2xl hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-2 text-foreground">
                  Managing Partner Users
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Understand how to create and manage users on your partner account,
                  including how to reset passwords, change primary usernames and
                  assign roles.
                </p>
                <a
                  href="/ManagingPartnerUsers"
                  className="font-semibold text-primary hover:underline"
                >
                  View Guide →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TheMerchantPortal;