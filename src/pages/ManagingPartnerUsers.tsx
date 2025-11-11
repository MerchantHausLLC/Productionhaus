import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import NavTree from "@/components/NavTree";

/**
 * Managing Partner Users page
 *
 * This page summarises how partners can create and maintain users within the
 * partner portal. It covers the prerequisites for adding users, detailed
 * steps for creating and editing accounts, password resets, username changes
 * and deleting users. The information is drawn from support
 * resources【85496403689430†L51-L83】【85496403689430†L109-L149】.
 */
const ManagingPartnerUsers = () => {
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
              Managing Partner Users
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Partners can create multiple users for their accounts to control
              access to the partner portal. This guide shows how to add,
              update and delete users, reset passwords and request a primary
              username change.
            </p>

          {/* Overview */}
          <section id="overview" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Partners can add multiple users to manage access to the portal.
              Each user may have different permissions based on their
              role, and primary users always have full administrative access【85496403689430†L51-L56】.
            </p>
          </section>

          {/* Prerequisites */}
          <section id="prerequisites" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Prerequisites
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Affiliate or sub‑affiliate users must have the “Administrative user”
              permission to add new affiliate users. Primary users have this
              permission by default and it cannot be removed【85496403689430†L59-L64】.
            </p>
          </section>

          {/* Adding a New User */}
          <section id="adding-a-new-user" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Adding a New User
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To create a user, log in to the portal and go to
              <em>Settings → Users</em>. Click <strong>Add a User</strong> and
              provide the username, first name, last name, email and title. If
              the username is unavailable, you’ll need to choose a different one【85496403689430†L68-L76】.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Assign the appropriate permissions and click <em>Save Changes</em>.
              The new user will receive a welcome email with a link to set a
              password, valid for 24 hours【85496403689430†L77-L83】.
            </p>
          </section>

          {/* Password Reset */}
          <section id="password-reset" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Password Reset
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To reset a user’s password, navigate to <em>Settings → Users</em> and
              click on the username. Click the <strong>Reset Password</strong>
              button and confirm the action. The user will receive a reset
              email【85496403689430†L87-L96】.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A primary user’s password can be reset by another administrative
              user. If there are no administrative users available, contact
              support for assistance【85496403689430†L100-L105】.
            </p>
          </section>

          {/* Editing and Updating Users */}
          <section id="editing-and-updating" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Editing and Updating Users
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To update user details or permissions, log in to the portal
              and go to <em>Settings → Users</em>. Select the username you want to
              edit and update the first name, last name, email, title and
              permissions. Usernames themselves cannot be edited, and the
              primary user’s permissions cannot be removed【85496403689430†L109-L120】.
            </p>
          </section>

          {/* Requesting a Primary Username Change */}
          <section id="requesting-a-primary-username-change" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Requesting a Primary Username Change
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Only primary usernames can be changed. To request a change, email
              your support team with your account ID, current username and
              desired new username. The support team will confirm the request and
              update your account【85496403689430†L124-L137】.
            </p>
          </section>

          {/* Deleting a User */}
          <section id="deleting-a-user" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              Deleting a User
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To delete a user, go to <em>Settings → Users</em>, select the
              username and click the <strong>Delete User</strong> button. You
              will be asked to confirm; once confirmed, the deletion is
              permanent【85496403689430†L140-L149】. Primary users cannot be deleted.
            </p>
          </section>

          {/* User Permissions Overview */}
          <section id="user-permission-summary" className="space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-foreground">
              User Permission Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The partner portal offers several discrete permissions. The most
              common are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Manage merchant accounts:</strong> Allows the user to
                view and edit merchant records, onboard new merchants and access
                the List Accounts page【85496403689430†L155-L156】.
              </li>
              <li>
                <strong>Manage affiliate accounts:</strong> Enables viewing and
                managing sub‑affiliate records and onboarding new sub‑affiliate
                accounts【85496403689430†L156-L158】.
              </li>
              <li>
                <strong>Configure new and custom fee schedules:</strong> Lets
                users create, edit and manage fee schedules for merchants【85496403689430†L158-L161】.
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

export default ManagingPartnerUsers;