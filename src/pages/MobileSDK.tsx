import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Mobile SDK (iOS/Android)
 *
 * This page describes the mobile SDKs for iOS and Android. These
 * libraries include a mobile card reader library and end‑to‑end
 * encryption so you can process swiped or keyed‑in payments without
 * handling sensitive data【4979302280188†L96-L102】【973495872450596†L127-L134】.
 */
const MobileSDK = () => {
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
              Mobile SDK (iOS/Android)
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The mobile SDKs provide libraries for iOS and Android
              applications requiring encrypted mobile card readers. They
              include a card reader library and end‑to‑end encryption
              so that both swiped and keyed‑in payment data never touches
              your app【4979302280188†L96-L102】【973495872450596†L127-L134】.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The mobile SDKs are designed for developers building
                native apps. They abstract away the complexities of
                interacting with encrypted card readers by providing
                prebuilt classes and methods. The SDK handles
                card‑present and card‑not‑present flows uniformly so you
                can focus on your user interface.
              </p>
            </section>

            {/* Features */}
            <section id="features" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Mobile card reader library for supported hardware devices【4979302280188†L96-L102】.</li>
                <li>End‑to‑end encryption library to send payment data securely【4979302280188†L96-L102】.</li>
                <li>Support for both swiped and keyed‑in card entries【973495872450596†L127-L134】.</li>
                <li>Examples and documentation to speed up integration.</li>
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Use Cases</h2>
              <p className="text-muted-foreground leading-relaxed">
                The mobile SDKs are ideal for apps that accept card
                present transactions on phones or tablets—for example
                point‑of‑sale apps, on‑the‑go invoicing tools or event
                ticket sales. By using the SDK you avoid dealing with
                raw card data and ensure encryption is handled
                correctly.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MobileSDK;