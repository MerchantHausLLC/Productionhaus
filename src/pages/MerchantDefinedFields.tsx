import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Merchant Defined Fields
 *
 * Merchant defined fields (MDFs) let you capture additional data with each
 * transaction. This page explains what MDFs are, how to create them, the
 * available field types and where they appear in reports【716535113639864†L63-L92】【716535113639864†L125-L168】.
 */
const MerchantDefinedFields = () => {
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
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style>{`
            h1, h2, h3, h4, h5, h6, p, li, button, a, em, strong {
              font-family: 'Montserrat', sans-serif;
            }
          `}</style>
        </Head>
        <div className="max-w-5xl mx-auto flex">
          <NavTree />
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Merchant Defined Fields
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use custom fields to capture extra information during checkout.
              MDFs can appear on virtual terminal screens, payment pages,
              recurring schedules and reports.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can create up to 20 MDFs. Each field consists of a label,
                an internal alias and, optionally, a set of choices. MDFs are
                available for use in reports and can be displayed to customers
                on your payment forms【716535113639864†L63-L92】.
              </p>
            </section>

            {/* Creating Fields */}
            <section id="creating-fields" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Creating Fields
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To create an MDF:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  Go to the merchant defined fields page and click <em>Add
                  Field</em>.
                </li>
                <li>
                  Enter a label (what your users see) and an alias (used for
                  reporting). Aliases must be unique and cannot contain
                  spaces or special characters【716535113639864†L90-L120】.
                </li>
                <li>
                  Choose a field type and, if applicable, add the list of
                  choices.
                </li>
                <li>
                  Specify where the field should display (Virtual Terminal,
                  Customer Vault, Payment Form, API). Save your changes【716535113639864†L125-L168】.
                </li>
              </ol>
            </section>

            {/* Field Types */}
            <section id="field-types" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Field Types</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Plain Text:</strong> A single line text box.
                </li>
                <li>
                  <strong>Checkbox:</strong> A tick box for yes/no values.
                </li>
                <li>
                  <strong>Radio:</strong> A set of mutually exclusive options.
                </li>
                <li>
                  <strong>Select:</strong> A drop‑down menu allowing one choice
                  from a list【716535113639864†L63-L92】.
                </li>
              </ul>
            </section>

            {/* Additional Notes */}
            <section id="additional-notes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Additional Notes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Once created, MDFs can be reordered or edited. Deleting a
                field removes it from future transactions but does not delete
                data already stored in reports. Use caution when renaming
                aliases, as this may break integrations【716535113639864†L125-L168】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MerchantDefinedFields;