import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * SEC Code Configuration
 *
 * Standard Entry Class (SEC) codes describe the purpose of an ACH
 * transaction. This page explains why the correct SEC code is
 * important, how to set a default code in the portal and lists the
 * most common codes【867580162626699†L55-L102】.
 */
const SecCodeConfiguration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SEC Code Configuration
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Choosing the correct SEC code for each ACH transaction is a
              regulatory requirement. It specifies how the transaction was
              authorised and processed.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                NACHA rules require you to classify each ACH entry with a
                Standard Entry Class code. The code describes whether the
                transaction is a consumer or corporate payment, how the
                authorisation was obtained (online, phone, in person) and
                whether it’s a one‑time or recurring debit【867580162626699†L55-L102】.
              </p>
            </section>

            {/* Setting a Default */}
            <section id="setting-default" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Setting a Default
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                On the SEC code configuration page, select a default code
                from the drop‑down list. Only codes supported by your
                processor will appear. The default applies to the virtual
                terminal and customer vault; API calls can specify their
                own code【867580162626699†L103-L123】.
              </p>
            </section>

            {/* Allowed Codes */}
            <section id="allowed-codes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Allowed Codes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Common SEC codes include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>PPD:</strong> Prearranged Payment and Deposit –
                  consumer‑initiated recurring or single payments.
                </li>
                <li>
                  <strong>CCD:</strong> Corporate Credit or Debit – payments
                  between businesses.
                </li>
                <li>
                  <strong>WEB:</strong> Online entries authorised via
                  website【867580162626699†L55-L102】.
                </li>
                <li>
                  <strong>TEL:</strong> Telephone‑initiated debits.
                </li>
                <li>
                  <strong>ARC:</strong> Accounts Receivable Entry – converting
                  cheques to electronic debits.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SecCodeConfiguration;