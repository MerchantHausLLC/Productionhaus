import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Hosted Payment Page (QuickClick)
 *
 * This page describes the hosted payment page service, sometimes
 * referred to as QuickClick. It is a simple copy‑and‑paste checkout
 * solution for merchants who don’t have the resources to build a
 * custom integration. The solution is ideal for small merchants or
 * website builders with limited options【973495872450596†L136-L145】.
 */
const HostedPaymentPage = () => {
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
              Hosted Payment Page
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A hosted payment page provides a turnkey checkout solution.
              Also known as QuickClick, it lets you add a payment button
              or link to your website without writing server‑side code【973495872450596†L136-L145】.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                QuickClick is designed for merchants who want to accept
                payments online but lack the development resources to
                implement a custom checkout. It generates a simple HTML
                form or button that posts transaction details to the
                gateway, bypassing the need to handle card data yourself.
              </p>
            </section>

            {/* Implementation */}
            <section id="implementation" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Implementation</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use a hosted payment page, log in to your merchant
                portal and configure a QuickClick button with product
                details, amount and optional description. The portal
                generates HTML code that you paste into your website.
                When a customer clicks the button, they are taken to a
                secure hosted checkout page to enter payment details. The
                gateway then redirects them back to your return URL with
                the result.
              </p>
            </section>

            {/* Benefits */}
            <section id="benefits" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
              <p className="text-muted-foreground leading-relaxed">
                QuickClick is ideal for small merchants, bloggers or
                site builders who don’t have server‑side scripting
                support【973495872450596†L136-L145】. It allows you to
                start accepting payments quickly without worrying about
                PCI compliance, since the payment page is hosted by the
                gateway. You can also generate buttons for donations or
                recurring memberships using the same mechanism.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HostedPaymentPage;