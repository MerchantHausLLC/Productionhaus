import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Payment Device SDK (Windows/Linux)
 *
 * This page covers the SDKs for Windows and Linux that help developers
 * integrate software with payment terminals. The SDK abstracts many
 * complexities and includes a downloadable emulator with sample code
 * and server binaries【4979302280188†L109-L116】.
 */
const PaymentDeviceSDK = () => {
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
              Payment Device SDK (Windows/Linux)
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Payment Device SDKs for Windows and Linux enable
              developers to integrate software with a variety of
              payment terminals. They abstract the complexities of
              interacting with devices and include a downloadable
              emulator with sample code and server binaries【4979302280188†L109-L116】.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                These SDKs provide libraries and tools to communicate with
                EMV‑certified payment terminals on Windows or Linux
                platforms. They allow your application to initiate and
                manage transactions without handling low‑level device
                protocols.
              </p>
            </section>

            {/* Features */}
            <section id="features" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Abstracts device communication to simplify integration【4979302280188†L109-L116】.</li>
                <li>Supports numerous payment terminals and configurations.</li>
                <li>Includes a payment device emulator for Windows with example client code, integration guide and server binaries【4979302280188†L109-L116】.</li>
                <li>Documentation and code samples to accelerate development.</li>
              </ul>
            </section>

            {/* Use Cases */}
            <section id="use-cases" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Use Cases</h2>
              <p className="text-muted-foreground leading-relaxed">
                These SDKs are ideal for independent software vendors
                building point‑of‑sale systems, kiosks or unattended
                payment solutions on desktop platforms. The emulation
                environment enables developers to test without owning
                hardware and to validate integrations before deploying
                to physical devices.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PaymentDeviceSDK;