import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavTree from "@/components/NavTree";

/**
 * Merchant Portal Landing Page
 *
 * This page acts as the landing page for Merchant Portal resources on the MerchantHaus
 * partner site. It provides a high-level introduction and links to individual guides
 * on transaction reporting and account management. Uses React Router Links for
 * instant SPA navigation without page reloads.
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
        <div className="max-w-6xl mx-auto flex gap-8">
          <NavTree />
          <div className="flex-1 docs-typography min-w-0">
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
                <Link
                  to="/TransactionReports"
                  className="font-semibold text-primary hover:underline"
                >
                  View Guide →
                </Link>
              </div>
              {/* Card for Merchant User Accounts */}
              <div className="p-6 border border-border rounded-2xl hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-2 text-foreground">
                  Merchant User Accounts
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Step-by-step instructions on adding, editing and removing merchant
                  users, resetting passwords and assigning the correct permissions.
                </p>
                <Link
                  to="/MerchantUserAccounts"
                  className="font-semibold text-primary hover:underline"
                >
                  View Guide →
                </Link>
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
                <Link
                  to="/ManagingPartnerUsers"
                  className="font-semibold text-primary hover:underline"
                >
                  View Guide →
                </Link>
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