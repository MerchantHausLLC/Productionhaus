import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Invoice Look & Feel
 *
 * Merchants using the invoice service can customise the appearance of
 * their invoices by uploading a logo. This page outlines the
 * prerequisites, where to upload the logo and notes on how it is
 * applied to invoices【222464056923731†L47-L86】.
 */
const InvoiceLookFeel = () => {
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
              Invoice Look &amp; Feel
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Customise your electronic invoices with a logo to reinforce your
              brand. Logos appear on invoices sent via the invoicing
              feature but do not affect standard receipts.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The invoice look &amp; feel settings allow you to upload a
                custom image that appears at the top of your invoices. You
                can change the logo at any time, and new invoices will use
                the updated image【222464056923731†L72-L86】.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must have the electronic invoicing service enabled on
                your account. Only users with administrative privileges can
                change the invoice appearance【222464056923731†L47-L71】.
              </p>
            </section>

            {/* Adding a Logo */}
            <section id="adding-logo" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Adding a Logo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To upload a logo:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  Navigate to the invoice look &amp; feel settings page.
                </li>
                <li>
                  Click <em>Add Logo</em> and select your image file. The
                  recommended file types are JPEG or PNG, and the file should
                  be less than 1&nbsp;MB【222464056923731†L47-L71】.
                </li>
                <li>
                  Use the cropping tool to adjust the image as needed and
                  click <em>Save</em>. The logo will appear on all future
                  invoices【222464056923731†L72-L86】.
                </li>
              </ol>
              <p className="text-muted-foreground leading-relaxed">
                Note that uploading a logo only affects electronic invoices and
                does not change the appearance of standard receipts【222464056923731†L72-L86】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default InvoiceLookFeel;