import { useState } from "react";

/**
 * NavTree component
 *
 * A collapsible navigation tree that lists all guides and their
 * subsections. Each top level item links to a page, and if the page
 * contains sections, a toggle button reveals anchor links to those
 * sections. This component is designed for the MerchantHaus partner site.
 */
const NavTree = () => {
  // Track which top level sections are open
  const [open, setOpen] = useState<Record<string, boolean>>({});

  // Toggle expand/collapse for a section
  const toggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  /**
   * Navigation data
   *
   * The nav tree is organised into high‑level categories. Each category
   * contains pages, and pages may contain anchor links to their sections.
   * This structure allows the tree to expand and collapse at multiple levels.
   */
  const navData = [
    {
      title: "The Merchant Portal",
      href: "/TheMerchantPortal",
    },
    {
      title: "Settings",
      children: [
        {
          title: "Merchant User Accounts",
          href: "/MerchantUserAccounts",
          children: [
            { title: "Overview", href: "/MerchantUserAccounts#overview" },
            { title: "Prerequisites", href: "/MerchantUserAccounts#prerequisites" },
            { title: "Adding a New User", href: "/MerchantUserAccounts#adding-a-new-user" },
            { title: "Password Reset", href: "/MerchantUserAccounts#password-reset" },
            { title: "Editing & Updating", href: "/MerchantUserAccounts#editing-and-updating" },
          ],
        },
        {
          title: "SPF & DKIM Records",
          href: "/SpfDkimRecords",
          children: [
            { title: "Overview", href: "/SpfDkimRecords#overview" },
            { title: "Why Add Records", href: "/SpfDkimRecords#why-add-records" },
            { title: "SPF Setup", href: "/SpfDkimRecords#spf-setup" },
            { title: "DKIM Setup", href: "/SpfDkimRecords#dkim-setup" },
            { title: "Additional Tips", href: "/SpfDkimRecords#additional-tips" },
          ],
        },
        {
          title: "Account Information",
          href: "/AccountInformation",
          children: [
            { title: "Overview", href: "/AccountInformation#overview" },
            { title: "Prerequisites", href: "/AccountInformation#prerequisites" },
            { title: "Editing Your Details", href: "/AccountInformation#editing" },
            { title: "Restrictions", href: "/AccountInformation#restrictions" },
          ],
        },
        {
          title: "Address Verification (AVS)",
          href: "/AddressVerification",
          children: [
            { title: "Overview", href: "/AddressVerification#overview" },
            { title: "How It Works", href: "/AddressVerification#how-it-works" },
            { title: "Configuring Rules", href: "/AddressVerification#configuring-rules" },
            { title: "Additional Options", href: "/AddressVerification#additional-options" },
          ],
        },
        {
          title: "Automatic Card Updater",
          href: "/AutomaticCardUpdater",
          children: [
            { title: "Overview", href: "/AutomaticCardUpdater#overview" },
            { title: "Prerequisites", href: "/AutomaticCardUpdater#prerequisites" },
            { title: "Configuration", href: "/AutomaticCardUpdater#configuration" },
            { title: "Running Updates", href: "/AutomaticCardUpdater#running-updates" },
          ],
        },
        {
          title: "Automatic Level III Template",
          href: "/AutomaticLevelIII",
          children: [
            { title: "Overview", href: "/AutomaticLevelIII#overview" },
            { title: "Prerequisites", href: "/AutomaticLevelIII#prerequisites" },
            { title: "Configuring Fields", href: "/AutomaticLevelIII#configuring-fields" },
          ],
        },
        {
          title: "Billing Statement",
          href: "/BillingStatement",
          children: [
            { title: "Overview", href: "/BillingStatement#overview" },
            { title: "Prerequisites", href: "/BillingStatement#prerequisites" },
            { title: "Viewing Your Statement", href: "/BillingStatement#viewing-statement" },
            { title: "Billing Schedule", href: "/BillingStatement#billing-schedule" },
          ],
        },
        {
          title: "Blind Credits",
          href: "/BlindCredits",
          children: [
            { title: "Overview", href: "/BlindCredits#overview" },
            { title: "Prerequisites", href: "/BlindCredits#prerequisites" },
            { title: "Risks", href: "/BlindCredits#risks" },
            { title: "Enabling Blind Credits", href: "/BlindCredits#enabling" },
          ],
        },
        {
          title: "Card ID Verification (CVV)",
          href: "/CardIDVerification",
          children: [
            { title: "Overview", href: "/CardIDVerification#overview" },
            { title: "How It Works", href: "/CardIDVerification#how-it-works" },
            { title: "Settings", href: "/CardIDVerification#settings" },
            { title: "Result Codes", href: "/CardIDVerification#result-codes" },
            { title: "Additional Notes", href: "/CardIDVerification#additional-notes" },
          ],
        },
        {
          title: "Country/Currency Configuration",
          href: "/CountryCurrencyConfiguration",
          children: [
            { title: "Overview", href: "/CountryCurrencyConfiguration#overview" },
            { title: "Prerequisites", href: "/CountryCurrencyConfiguration#prerequisites" },
            { title: "Setting Defaults", href: "/CountryCurrencyConfiguration#setting-defaults" },
          ],
        },
        {
          title: "Customer Fee Configuration",
          href: "/CustomerFeeConfiguration",
          children: [
            { title: "Overview", href: "/CustomerFeeConfiguration#overview" },
            { title: "Prerequisites", href: "/CustomerFeeConfiguration#prerequisites" },
            { title: "Creating Fees", href: "/CustomerFeeConfiguration#creating-fees" },
            { title: "Fee Types", href: "/CustomerFeeConfiguration#fee-types" },
          ],
        },
        {
          title: "DKIM & SPF Validation",
          href: "/DkimSpfValidation",
          children: [
            { title: "Overview", href: "/DkimSpfValidation#overview" },
            { title: "Domain Validation", href: "/DkimSpfValidation#domain-validation" },
            { title: "Updating DNS", href: "/DkimSpfValidation#updating-dns" },
            { title: "Checking Status", href: "/DkimSpfValidation#checking-status" },
          ],
        },
        {
          title: "Email Template Changes",
          href: "/EmailTemplateChanges",
          children: [
            { title: "Overview", href: "/EmailTemplateChanges#overview" },
            { title: "Template Types", href: "/EmailTemplateChanges#template-types" },
            { title: "Making Changes", href: "/EmailTemplateChanges#making-changes" },
            { title: "Request Process", href: "/EmailTemplateChanges#request-process" },
          ],
        },
        {
          title: "Service Provider Contact Details",
          href: "/MerchantServiceProviderContacts",
          children: [
            { title: "Overview", href: "/MerchantServiceProviderContacts#overview" },
            { title: "Finding Support Info", href: "/MerchantServiceProviderContacts#finding-info" },
            { title: "Updating Contact Details", href: "/MerchantServiceProviderContacts#updating-details" },
          ],
        },
        {
          title: "Invoice Look & Feel",
          href: "/InvoiceLookFeel",
          children: [
            { title: "Overview", href: "/InvoiceLookFeel#overview" },
            { title: "Prerequisites", href: "/InvoiceLookFeel#prerequisites" },
            { title: "Adding a Logo", href: "/InvoiceLookFeel#adding-logo" },
          ],
        },
        {
          title: "Merchant Defined Fields",
          href: "/MerchantDefinedFields",
          children: [
            { title: "Overview", href: "/MerchantDefinedFields#overview" },
            { title: "Creating Fields", href: "/MerchantDefinedFields#creating-fields" },
            { title: "Field Types", href: "/MerchantDefinedFields#field-types" },
            { title: "Additional Notes", href: "/MerchantDefinedFields#additional-notes" },
          ],
        },
        {
          title: "Merchant IP Restrictions",
          href: "/MerchantIPRestrictions",
          children: [
            { title: "Overview", href: "/MerchantIPRestrictions#overview" },
            { title: "Adding IP Addresses", href: "/MerchantIPRestrictions#adding-ip" },
            { title: "Device Recognition", href: "/MerchantIPRestrictions#device-recognition" },
            { title: "Additional Notes", href: "/MerchantIPRestrictions#additional-notes" },
          ],
        },
        {
          title: "90‑Day Password Policy",
          href: "/PasswordPolicy90Day",
          children: [
            { title: "Overview", href: "/PasswordPolicy90Day#overview" },
            { title: "How It Works", href: "/PasswordPolicy90Day#how-it-works" },
            { title: "Resetting Your Password", href: "/PasswordPolicy90Day#resetting-password" },
            { title: "2FA Exemptions", href: "/PasswordPolicy90Day#2fa-exemptions" },
          ],
        },
        {
          title: "Report Configuration",
          href: "/ReportConfiguration",
          children: [
            { title: "Overview", href: "/ReportConfiguration#overview" },
            { title: "Creating Templates", href: "/ReportConfiguration#creating-templates" },
            { title: "Using Templates", href: "/ReportConfiguration#using-templates" },
          ],
        },
        {
          title: "SEC Code Configuration",
          href: "/SecCodeConfiguration",
          children: [
            { title: "Overview", href: "/SecCodeConfiguration#overview" },
            { title: "Setting a Default", href: "/SecCodeConfiguration#setting-default" },
            { title: "Allowed Codes", href: "/SecCodeConfiguration#allowed-codes" },
          ],
        },
        {
          title: "Settlement Schedule",
          href: "/SettlementSchedule",
          children: [
            { title: "Overview", href: "/SettlementSchedule#overview" },
            { title: "Capture Types", href: "/SettlementSchedule#capture-types" },
            { title: "Setting Your Schedule", href: "/SettlementSchedule#setting-schedule" },
            { title: "Additional Notes", href: "/SettlementSchedule#additional-notes" },
          ],
        },
        {
          title: "Test Mode",
          href: "/TestMode",
          children: [
            { title: "Overview", href: "/TestMode#overview" },
            { title: "Enabling Test Mode", href: "/TestMode#enabling-test-mode" },
            { title: "Flushing Transactions", href: "/TestMode#flushing-transactions" },
            { title: "Limitations", href: "/TestMode#limitations" },
          ],
        },
        {
          title: "Transaction Routing",
          href: "/TransactionRouting",
          children: [
            { title: "Overview", href: "/TransactionRouting#overview" },
            { title: "Setting Percentages", href: "/TransactionRouting#setting-percentages" },
            { title: "Overflow & Default", href: "/TransactionRouting#overflow-default" },
            { title: "Additional Notes", href: "/TransactionRouting#additional-notes" },
          ],
        },
        {
          title: "Two‑Factor Authentication",
          href: "/TwoFactorAuthentication",
          children: [
            { title: "Overview", href: "/TwoFactorAuthentication#overview" },
            { title: "Setting Up 2FA", href: "/TwoFactorAuthentication#setting-up" },
            { title: "Logging In", href: "/TwoFactorAuthentication#logging-in" },
            { title: "Lost Access", href: "/TwoFactorAuthentication#lost-access" },
          ],
        },
      ],
    },
    {
      title: "Partner Management",
      children: [
        {
          title: "Managing Partner Users",
          href: "/ManagingPartnerUsers",
          children: [
            { title: "Overview", href: "/ManagingPartnerUsers#overview" },
            { title: "Prerequisites", href: "/ManagingPartnerUsers#prerequisites" },
            { title: "Adding a New User", href: "/ManagingPartnerUsers#adding-a-new-user" },
            { title: "Password Reset", href: "/ManagingPartnerUsers#password-reset" },
            { title: "Editing & Updating", href: "/ManagingPartnerUsers#editing-and-updating" },
            { title: "Requesting a Primary Username Change", href: "/ManagingPartnerUsers#requesting-a-primary-username-change" },
            { title: "Deleting a User", href: "/ManagingPartnerUsers#deleting-a-user" },
            { title: "User Permission Summary", href: "/ManagingPartnerUsers#user-permission-summary" },
          ],
        },
      ],
    },
    {
      title: "Reporting",
      children: [
        {
          title: "Transaction Reports",
          href: "/TransactionReports",
          children: [
            { title: "Overview", href: "/TransactionReports#overview" },
            { title: "Prerequisites", href: "/TransactionReports#prerequisites" },
            { title: "Snapshot vs. Search", href: "/TransactionReports#snapshot-vs-search" },
            { title: "Grouping Options", href: "/TransactionReports#grouping-options" },
            { title: "How to Run Reports", href: "/TransactionReports#how-to-run-reports" },
          ],
        },
        {
          title: "Subscription Reports",
          href: "/SubscriptionReports",
          children: [
            { title: "Overview", href: "/SubscriptionReports#overview" },
            { title: "Prerequisites", href: "/SubscriptionReports#prerequisites" },
            { title: "Search Filters", href: "/SubscriptionReports#search-filters" },
            { title: "Pausing Subscriptions", href: "/SubscriptionReports#pausing-subscriptions" },
            { title: "Exporting Reports", href: "/SubscriptionReports#exporting-reports" },
          ],
        },
      ],
    },
    {
      title: "Payment Gateway Solutions",
      children: [
        {
          title: "What is ACH?",
          href: "/WhatIsACH",
          children: [
            { title: "Overview", href: "/WhatIsACH#overview" },
            { title: "Setting Up ACH", href: "/WhatIsACH#setting-up-ach" },
            { title: "Returns & Errors", href: "/WhatIsACH#returns-errors" },
            { title: "NACHA Compliance", href: "/WhatIsACH#nacha-compliance" },
            { title: "SEC Codes", href: "/WhatIsACH#sec-codes" },
            { title: "Processing ACH", href: "/WhatIsACH#processing-ach" },
            { title: "Best Practices", href: "/WhatIsACH#best-practices" },
            { title: "FAQs", href: "/WhatIsACH#faqs" },
          ],
        },
      ],
    },
  ];

  // Recursively render navigation items. The key includes the parent titles to
  // ensure uniqueness for nested items. When an item has children, clicking
  // the button toggles the open state for that key. Anchor links are used
  // directly when no children exist.
  const renderItems = (items: any[], parentKey = "") => {
    return items.map((item) => {
      const key = `${parentKey}${item.title}`;
      if (item.children && item.children.length > 0) {
        const isOpen = !!open[key];
        return (
          <li key={key}>
            <button
              onClick={() => toggle(key)}
              className="w-full flex items-center justify-between font-semibold text-foreground px-2 py-1 hover:bg-muted rounded"
            >
              <span>{item.title}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <ul className="pl-4 mt-1 space-y-1">
                {renderItems(item.children, `${key}/`)}
              </ul>
            )}
          </li>
        );
      }
      return (
        <li key={key}>
          <a
            href={item.href}
            className="block font-semibold text-foreground px-2 py-1 hover:bg-muted rounded"
          >
            {item.title}
          </a>
        </li>
      );
    });
  };

  return (
    <nav
      className="w-56 border-r border-border pr-4 mr-4 sticky top-0 max-h-screen overflow-y-auto"
      aria-label="Page navigation"
    >
      <ul className="space-y-2">
        {renderItems(navData)}
      </ul>
    </nav>
  );
};

export default NavTree;