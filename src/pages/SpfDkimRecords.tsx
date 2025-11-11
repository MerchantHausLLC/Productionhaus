import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * SPF & DKIM Records
 *
 * This guide explains how to configure Sender Policy Framework (SPF) and
 * DomainKeys Identified Mail (DKIM) records to improve email deliverability.
 * It summarises why domain alignment matters, provides step‑by‑step
 * instructions for creating or updating your SPF record and details how to
 * add DKIM CNAME records to your DNS. The content is based on official
 * guidance but is generalised for partner use【373579914961976†L61-L77】【373579914961976†L94-L107】.
 */
const SpfDkimRecords = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className="bg-background py-16 px-6">
        {/* Load Inter font */}
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
              SPF &amp; DKIM Records
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Email providers use SPF and DKIM to verify that messages are
              authorised to send from your domain. Setting these records
              correctly helps prevent your emails from being marked as spam or
              rejected by recipient mail servers.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                SPF and DKIM are DNS records that establish trust between your
                email server and recipients. Without them, your outbound emails
                may appear spoofed and get filtered or bounced. An SPF record
                lists the servers authorised to send email on behalf of your
                domain, while DKIM adds a digital signature to each message so
                receiving servers can verify its integrity【373579914961976†L82-L87】.
              </p>
            </section>

            {/* Why Add Records */}
            <section id="why-add-records" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Why Add Records</h2>
              <p className="text-muted-foreground leading-relaxed">
                If your emails are sent from a third‑party provider, the
                recipient’s spam filters may see a mismatch between the from
                address and the sending server. By publishing the provider’s
                SPF and DKIM records in your DNS, you show that the provider is
                authorised to send on your behalf. This alignment greatly
                improves deliverability and reduces the likelihood of messages
                ending up in junk folders【373579914961976†L61-L77】.
              </p>
            </section>

            {/* SPF Setup */}
            <section id="spf-setup" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">SPF Setup</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                An SPF record is a TXT entry in your DNS that declares which
                mail servers are authorised to send email for your domain. A
                typical SPF record looks like this:
              </p>
              <pre className="bg-muted p-4 rounded text-foreground overflow-auto">
v=spf1 include:example.com ~all
              </pre>
              <p className="text-muted-foreground leading-relaxed">
                Replace <code>example.com</code> with the domain of your email
                provider. Add the line using your domain registrar’s DNS
                management tools. If you already have an SPF record, add the
                provider using the <code>include:</code> directive to avoid
                multiple SPF records【373579914961976†L94-L107】.
              </p>
            </section>

            {/* DKIM Setup */}
            <section id="dkim-setup" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">DKIM Setup</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DKIM uses public/private key pairs to sign outgoing emails.
                Your provider will supply one or more CNAME records that you
                must add to your DNS. Each record typically looks like:
              </p>
              <pre className="bg-muted p-4 rounded text-foreground overflow-auto">
selector._domainkey IN CNAME selector.provider.com
              </pre>
              <p className="text-muted-foreground leading-relaxed">
                Replace <code>selector</code> with the value provided by your
                email service and <code>provider.com</code> with the DKIM host
                they specify. After creating the CNAME records, allow up to 48
                hours for DNS propagation. Your provider’s interface should
                show when the keys validate【373579914961976†L120-L162】.
              </p>
            </section>

            {/* Additional Tips */}
            <section id="additional-tips" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Additional Tips</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Only one SPF record should exist per domain. If you need
                  multiple providers, combine them using the <code>include:</code>
                  directive.
                </li>
                <li>
                  DKIM selectors can rotate periodically. Add new CNAME
                  records before removing old ones to avoid breaks in
                  signature validation.
                </li>
                <li>
                  After updating DNS, use an online SPF/DKIM checker to
                  confirm the records are published correctly. Some email
                  services provide a status page for verification.
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

export default SpfDkimRecords;