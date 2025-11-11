import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Developer Portal landing page
 *
 * This page introduces the developer guides section. It explains the
 * purpose of the portal and directs users to the Integration Overview
 * and individual integration guides. It uses the same Inter typography
 * and left‑hand navigation as the merchant portal for consistency.
 */
const DeveloperPortal = () => {
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
              Developer Guides
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Welcome to the developer guides. This section contains
              integration documentation for building custom payment
              solutions. Whether you’re embedding a hosted checkout page or
              implementing complex tokenization flows, you’ll find concise
              summaries and best practices here. Each guide is styled
              consistently with our merchant portal and includes anchor links
              for easy navigation.
            </p>

            {/* Overview section */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our developer guides are organised by integration method.
                Begin with the Integration Overview to learn about APIs
                versus SDKs and discover which approach best suits your
                use case. Then explore individual guides for detailed
                implementation notes and security considerations.
              </p>
            </section>

            {/* Getting Started section */}
            <section id="getting-started" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Getting Started
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To get started, visit the <a href="/IntegrationOverview" className="underline text-primary">Integration Overview</a>
                . It explains fundamental concepts such as the difference
                between Application Programming Interfaces (APIs) and
                Software Development Kits (SDKs) and lists the available
                integration options. From there, follow the links to
                specific guides such as Payment API, Three Step Redirect,
                Collect.js and more.
              </p>
            </section>

            {/* Additional Resources section */}
            <section id="additional-resources" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Additional Resources
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Throughout these guides you’ll find external citations and
                references to authoritative sources. Use them to dig deeper
                into topics like tokenization, PCI compliance and EMV.
                Should you need further assistance, please contact your
                service provider for developer support.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DeveloperPortal;