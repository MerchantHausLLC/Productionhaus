import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Customer Present Cloud
 *
 * This page introduces the Customer Present Cloud, a browser‑based
 * point‑of‑sale system for EMV transactions. It removes the need
 * for software installation and driver maintenance and works on any
 * operating system【4979302280188†L87-L94】.
 */
const CustomerPresentCloud = () => {
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
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
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
              Customer Present Cloud
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Customer Present Cloud is a browser‑based point of sale
              solution that eliminates the need for software
              installation and driver maintenance. It runs on any
              operating system and provides the fastest path to EMV
              integration【4979302280188†L87-L94】.
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