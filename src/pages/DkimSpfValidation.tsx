import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * DKIM & SPF Validation
 *
 * This guide describes the domain validation tool for automated emails.
 * By verifying that SPF and DKIM records are properly configured, you
 * ensure that emails sent from the portal use your own domain and avoid
 * deliverability issues. The article covers the overall process,
 * interpreting validation statuses and updating DNS【454465210956063†L49-L84】【454465210956063†L101-L140】.
 */
const DkimSpfValidation = () => {
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
              DKIM &amp; SPF Validation
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Use the domain validation tool to check that your DNS records
              include the correct SPF and DKIM entries. This prevents your
              automated emails from being sent from a generic domain and
              improves deliverability.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The portal can send receipts and notifications using your
                company’s domain. To do this, your DNS must include specific
                SPF and DKIM records. The validation tool checks these
                records and reports whether they are present and configured
                correctly【454465210956063†L49-L84】.
              </p>
            </section>

            {/* Domain Validation */}
            <section id="domain-validation" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Domain Validation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The tool displays a status for each email domain you have on
                file. A green “Validated” status means SPF and DKIM records
                were found and are correct. “Unable to Validate” indicates
                that the tool could not confirm the records—often because
                propagation is still in progress. “Invalid” means the
                required records were missing or incorrect【454465210956063†L101-L140】.
              </p>
            </section>

            {/* Updating DNS */}
            <section id="updating-dns" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Updating DNS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To validate your domain, add the SPF and DKIM records
                provided by your email service to your DNS. The SPF record
                should use the <code>include:</code> directive to authorise
                the sending domain. For DKIM, create one or more CNAME
                records pointing to your provider’s public keys. Use your
                registrar’s DNS management tools to add these entries and
                wait for propagation【454465210956063†L49-L84】.
              </p>
            </section>

            {/* Checking Status */}
            <section id="checking-status" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Checking Status
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                After adding the records, return to the validation tool and
                click <em>Check DNS Records</em>. The status will update to
                reflect whether the records are correct. If the tool cannot
                validate your domain, double‑check that the records were
                entered exactly as provided and contact your registrar if
                needed【454465210956063†L101-L140】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DkimSpfValidation;