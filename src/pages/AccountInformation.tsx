import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Account Information
 *
 * This guide outlines how to view and edit your account details. It
 * summarises which fields can be modified in the portal and explains
 * important restrictions such as changes that require assistance from
 * your service provider.
 */
const AccountInformation = () => {
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
              Account Information
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Your account profile contains key details about your business,
              contact information and banking setup. This page explains what
              you can edit directly in the portal and when you’ll need to
              contact support to make changes.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The account information page shows your business name, address,
                phone number, email address, time zone and other settings.
                Users with administrative permissions can update most of this
                information directly.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                To access and edit account information, you need the
                “Administrative Options” permission. Primary users have this by
                default.
              </p>
            </section>

            {/* Editing Your Details */}
            <section id="editing" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Editing Your Details
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                From the account information screen you can update contact
                details such as your address, phone number and email. You can
                also choose the receipt language, time zone and whether to
                display your phone number on customer receipts. Banking details
                can be edited if you have the proper permissions and there are
                no pending deposits.
              </p>
            </section>

            {/* Restrictions */}
            <section id="restrictions" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Restrictions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some fields cannot be changed in the portal. For example, you
                can’t edit your business name or billing contact information
                yourself; contact your service provider to update these. If
                blind credits are enabled on your account, banking edits may be
                locked for security reasons.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccountInformation;