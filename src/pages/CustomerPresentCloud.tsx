import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Customer Present Cloud
 *
 * This page introduces the Customer Present Cloud, a browser‑based
 * point‑of‑sale system for EMV transactions. It removes the need
 * for software installation and driver maintenance and works on any
 * operating system.
 */
const CustomerPresentCloud = () => {
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
              Customer Present Cloud
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Customer Present Cloud is a browser‑based point of sale
              solution that eliminates the need for software
              installation and driver maintenance. It runs on any
              operating system and provides the fastest path to EMV
              integration.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                With Customer Present Cloud, you don’t need to deploy
                drivers or SDKs on merchant PCs. Instead, a web
                application communicates with payment devices through a
                secure cloud service. Because it runs in a standard
                browser, it’s operating‑system agnostic and can be
                launched from any compatible device.
              </p>
            </section>

            {/* Benefits */}
            <section id="benefits" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
              <p className="text-muted-foreground leading-relaxed">
                The cloud‑based approach provides several advantages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>No need to install or update drivers or SDKs locally.</li>
                <li>Works on Windows, macOS, Linux and other operating systems without modification.</li>
                <li>Speeds up EMV certification by removing dependencies on specific hardware or OS.</li>
                <li>Centralised updates and maintenance via the cloud service.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CustomerPresentCloud;