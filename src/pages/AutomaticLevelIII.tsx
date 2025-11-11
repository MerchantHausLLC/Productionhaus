import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Automatic Level III Template
 *
 * Merchants enrolled in enhanced Level III data services can automatically
 * attach purchase details to every transaction. This page explains what
 * Level III data is, notes the prerequisites for using the Automatic Level
 * III template and shows how to configure static or dynamic fields
 * within the portal【871145071477711†L54-L63】【871145071477711†L69-L80】.
 */
const AutomaticLevelIII = () => {
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
              Automatic Level III Template
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Level III data provides additional line‑item details for
              corporate or purchasing cards. Automating Level III fields
              ensures compliance and may reduce interchange fees.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                When enabled, the Automatic Level III feature inserts
                pre‑populated data into transactions. You can create a default
                template that applies to all sales, including fields such as
                order ID, purchase order number and tax amount【871145071477711†L100-L138】.
              </p>
            </section>

            {/* Prerequisites */}
            <section id="prerequisites" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Prerequisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must subscribe to the Level III Advantage service. Your
                processor must support Level III data, and you need
                administrative access to configure the template【871145071477711†L69-L72】.
              </p>
            </section>

            {/* Configuring Fields */}
            <section id="configuring-fields" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Configuring Fields
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Navigate to the Automatic Level III settings page and choose
                which fields to include. You can enter static values, such as
                a fixed order description, or use dynamic tokens that populate
                automatically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Order ID:</strong> Inserts the transaction’s order
                  number or invoice number.
                </li>
                <li>
                  <strong>PO Number:</strong> A purchase order reference.
                </li>
                <li>
                  <strong>Order Description:</strong> Uses the current
                  transaction ID or description field【871145071477711†L100-L138】.
                </li>
                <li>
                  <strong>Original Order Date:</strong> Populates with the
                  transaction date.
                </li>
                <li>
                  <strong>Product Cost and Tax:</strong> Derives values from
                  the transaction amount and tax percentage.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The system will not overwrite any Level III data you submit
                manually through the API or virtual terminal. Click <em>Save</em>
                to activate your template【871145071477711†L100-L138】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AutomaticLevelIII;