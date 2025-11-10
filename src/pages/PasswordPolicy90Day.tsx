import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";
import NavTree from "@/components/NavTree";

/**
 * 90‑Day Password Policy
 *
 * Merchants who do not enable two‑factor authentication must reset their
 * password every 90 days. This guide outlines how the policy works,
 * provides instructions for changing your password and explains how to
 * exempt yourself by enabling 2FA【903905329378022†L50-L79】【903905329378022†L87-L163】.
 */
const PasswordPolicy90Day = () => {
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
              90‑Day Password Policy
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              To improve security, accounts without two‑factor authentication
              are required to update their password every 90 days. A
              countdown banner in the portal reminds you when it’s time to
              change your password.
            </p>

            {/* Overview */}
            <section id="overview" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                When the 90‑day policy is active, a progress bar displays the
                number of days remaining until your password expires. You can
                change your password at any time, and the counter resets to
                90 days【903905329378022†L50-L79】.
              </p>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                Password expiration only applies to users who have not
                enabled two‑factor authentication. Each time you log in, the
                portal will check when your password was last updated. If
                it’s been more than 90 days, you’ll be prompted to create a
                new password before proceeding【903905329378022†L87-L163】.
              </p>
            </section>

            {/* Resetting Your Password */}
            <section id="resetting-password" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                Resetting Your Password
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To change your password, go to <em>Settings → Password</em> and
                enter your current password along with a new one. Passwords
                must meet the complexity requirements shown on the page. After
                saving, you’ll be logged out and must sign in again with the
                new password【903905329378022†L87-L163】.
              </p>
            </section>

            {/* 2FA Exemptions */}
            <section id="2fa-exemptions" className="space-y-4 mb-12">
              <h2 className="text-2xl font-semibold text-foreground">
                2FA Exemptions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Enabling two‑factor authentication removes the password
                expiration requirement. Once 2FA is active, you won’t need to
                change your password every 90 days, and you will gain access
                to additional security features such as device recognition
                and bypassing password prompts for a set period【903905329378022†L87-L163】.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PasswordPolicy90Day;