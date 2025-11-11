import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Merchant User Accounts page
 *
 * This component summarises how merchants manage user accounts in the
 * merchant portal. It covers prerequisites, adding new users, resetting
 * passwords and editing existing accounts. The information is adapted
 * from official support resources【777226075576522†L51-L57】【777226075576522†L74-L92】.
 */
const MerchantUserAccounts = () => {
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
              Merchant User Accounts
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Manage the people who can access your merchant gateway. This guide
              explains how to add and configure users, reset passwords and update
              existing accounts.
            </p>

          {/* Overview */}
          <section id="overview" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The User Accounts section allows merchants to create new
              usernames, edit permissions and notifications, delete users and
              resend welcome emails. Every account has at least one primary
              user, and there is no limit to the number of sub‑users【777226075576522†L51-L57】.
            </p>
          </section>

          {/* Prerequisites */}
          <section id="prerequisites" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Prerequisites
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To access the User Accounts page, a user needs the “Access
              Administrative Options” permission. Primary users have this
              permission by default and it cannot be removed【777226075576522†L60-L65】.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Navigate to <em>Options → Settings → User Accounts</em> via the
              left‑hand menu, or from the home page go to <em>Utilities →
              Settings → User Accounts</em>【777226075576522†L67-L70】.
            </p>
          </section>

          {/* Adding a New User */}
          <section id="adding-a-new-user" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Adding a New Merchant User
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Only primary or administrative users can add new merchant users. To
              do this, log in to the portal and navigate to
              <em>User Accounts</em>. Click <strong>Add a New User</strong> and
              enter the new user’s first name, last name, email address, title
              (optional) and username. If the username is already taken, you’ll
              need to choose another【777226075576522†L74-L92】.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Next, select the appropriate permissions and email notifications for
              the user. When you click <em>Create User</em>, they will receive a
              welcome email with a link to set a password. This link is valid for
              24 hours. If it expires, you can resend the welcome email from the
              user’s edit page【777226075576522†L86-L93】.
            </p>
          </section>

          {/* Password Reset */}
          <section id="password-reset" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Password Reset
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Resetting a user’s password immediately invalidates the current
              password, so only do this when the user is ready to set a new one.
              Primary users can reset their own password via <em>Settings → User
              Accounts</em>; if they cannot log in, the service provider can
              reset it on their behalf【777226075576522†L96-L116】.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sub‑users with administrative permissions can reset their own
              passwords. Otherwise, a primary or admin user must reset it via
              their User Accounts page, or the service provider can do
              this through the Partner Portal【777226075576522†L119-L139】.
            </p>
          </section>

          {/* Editing & Updating */}
          <section id="editing-and-updating" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Editing and Updating Users
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To edit a user, go to <em>Settings → User Accounts</em> and click the
              username you wish to change. You can update the first name, last
              name, email, title, permissions and notifications. Usernames
              themselves cannot be changed; if you need a different username,
              request a primary username change via support【777226075576522†L145-L151】.
            </p>
          </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MerchantUserAccounts;