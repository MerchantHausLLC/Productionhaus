import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * What is ACH?
 *
 * The Automated Clearing House (ACH) network moves funds between bank
 * accounts. This page introduces ACH, explains how to set up ACH
 * processing, describes common return/error codes, outlines NACHA
 * compliance requirements and lists best practices for merchants【66003999016269†L45-L80】.
 */
const WhatIsACH = () => {
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
              What is ACH?
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The Automated Clearing House (ACH) is an electronic network for
              transferring funds between bank accounts in the United States.
              ACH payments are commonly used for payroll, bill payments and
              recurring subscriptions.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                ACH transfers are batch‑processed, low‑cost and suitable for
                recurring or large payments. Funds are typically available
                within one to two business days. Unlike card payments, ACH
                debits can be returned for reasons such as insufficient funds
                or incorrect account information【66003999016269†L45-L80】.
              </p>
            </section>

            {/* Setting Up ACH */}
            <section id="setting-up-ach" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Setting Up ACH
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To process ACH payments:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Choose an ACH processor supported by your account.</li>
                <li>Add the processor to your merchant account and configure
                    funding instructions.</li>
                <li>
                  Collect your customer’s bank routing and account number and
                  obtain authorisation. Use a signed ACH authorisation form
                  or an online agreement【66003999016269†L62-L80】.
                </li>
              </ol>
            </section>

            {/* Returns & Errors */}
            <section id="returns-errors" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Returns &amp; Errors
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ACH debits can be returned with an R‑code explaining the
                reason. Common returns include insufficient funds (R01),
                account closed (R02) and invalid account number (R03). You
                can obtain the return code and description from your
                processor’s reporting tools【66003999016269†L86-L110】.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If an entry is returned, do not retry without correcting the
                underlying issue. Excessive returns can result in fines and
                loss of ACH processing privileges.
              </p>
            </section>

            {/* NACHA Compliance */}
            <section id="nacha-compliance" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                NACHA Compliance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The National Automated Clearing House Association (NACHA)
                governs ACH. You must obtain proper authorisation, notify
                customers before debiting their account, and retain
                documentation for two years. Certain transactions, such as
                international or telemarketing debits, have additional
                requirements【66003999016269†L158-L170】.
              </p>
            </section>

            {/* SEC Codes */}
            <section id="sec-codes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">SEC Codes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each ACH entry must be classified with a Standard Entry Class
                (SEC) code, such as PPD for consumer payments, CCD for
                corporate transactions or WEB for online entries. See the
                SEC Code Configuration page for more details.
              </p>
            </section>

            {/* Processing ACH */}
            <section id="processing-ach" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Processing ACH Transactions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When submitting an ACH transaction, ensure that your
                application sends the correct SEC code, transaction amount
                and customer details to your processor. Monitor for returns
                and correct any issues promptly.【66003999016269†L86-L110】
              </p>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Best Practices
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Use a signed authorisation form for every ACH debit.</li>
                <li>Verify account information before submitting debits.</li>
                <li>Notify customers of upcoming debits in advance.</li>
                <li>Respond promptly to returns and correct errors.</li>
              </ul>
            </section>

            {/* FAQs */}
            <section id="faqs" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">FAQs</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Can I process international ACH?</strong> International
                debits require special authorisation and may not be supported
                by all processors. Check with your provider for details.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>How long do ACH transfers take?</strong> Credits
                typically take one business day to settle, while debits take
                two business days. Cut‑off times vary by processor.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WhatIsACH;