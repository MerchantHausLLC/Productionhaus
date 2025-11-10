import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * Merchant IP Restrictions
 *
 * This feature restricts portal access to specific IP addresses. Use IP
 * restrictions to enhance security by allowing only trusted networks to
 * access your account. This page summarises how to add and manage
 * allowed IPs, explains device recognition and notes important
 * considerations【808226590126602†L47-L105】.
 */
const MerchantIPRestrictions = () => {
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
              Merchant IP Restrictions
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Restricting access by IP address provides an extra layer of
              protection against unauthorized logins. Only users connecting
              from allowed addresses or recognised devices will be able to log
              in.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                When IP restrictions are enabled, only addresses listed in
                your allow list or devices you have explicitly recognised can
                access the portal. This reduces the risk of account
                compromise【808226590126602†L47-L105】.
              </p>
            </section>

            {/* Adding IP Addresses */}
            <section id="adding-ip" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Adding IP Addresses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To add a new IP address:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  Go to the IP restrictions settings page and click
                  <em>Add IP</em>【808226590126602†L47-L105】.
                </li>
                <li>
                  Enter the IP address in IPv4 or IPv6 format and save.
                </li>
                <li>
                  Repeat for each address you wish to allow. You can add
                  multiple entries【808226590126602†L111-L136】.
                </li>
              </ol>
              <p className="text-muted-foreground leading-relaxed">
                If you accidentally lock yourself out, contact support to
                remove the restriction. Do not add an IP you don’t control.
              </p>
            </section>

            {/* Device Recognition */}
            <section id="device-recognition" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Device Recognition
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You can optionally allow devices outside your IP list to log
                in by enabling device recognition. When you log in from a new
                browser, you’ll receive a verification email. Once you
                approve the device, future logins from that device are
                permitted even if the IP address is not on the list【808226590126602†L111-L136】.
              </p>
            </section>

            {/* Additional Notes */}
            <section id="additional-notes" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Additional Notes
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                IP restrictions apply to all users on the account. Make sure
                to add addresses for any office locations or mobile VPNs. If
                you can’t access your account due to IP restrictions, your
                provider can temporarily disable them to restore access【808226590126602†L111-L136】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MerchantIPRestrictions;