import React, { useState, useMemo, useCallback } from 'react';

// --- Icon SVGs (Equivalent to lucide-react) ---

// Icon for collapsible sections (closed)
const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

// Icon for collapsible sections (open)
const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

// Icon for links
const FileText = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
);

// Icon for anchor links
const Hash = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>
);

/**
 * Navigation Data Structure Definition
 * (Using a representative slice of the original data)
 */
const navData = [
    { title: "The Merchant Portal", href: "/TheMerchantPortal" },
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
          ],
        },
        { 
          title: "SPF & DKIM Records", 
          href: "/SpfDkimRecords", 
          children: [
            { title: "Overview", href: "/SpfDkimRecords#overview" },
            { title: "Why Add Records", href: "/SpfDkimRecords#why-add-records" },
            { title: "SPF Setup", href: "/SpfDkimRecords#spf-setup" },
          ]
        },
      ],
    },
    {
      title: "Developer Guides",
      children: [
        { title: "Developer Portal", href: "/DeveloperPortal" },
        { 
          title: "Payment API", 
          href: "/PaymentAPI", 
          children: [
            { title: "Overview", href: "/PaymentAPI#overview" },
            { title: "Prerequisites & PCI", href: "/PaymentAPI#prerequisites-pci" },
            { title: "Usage", href: "/PaymentAPI#usage" },
          ]
        },
      ],
    },
];

/**
 * Recursive component to render a single Nav item (page or section)
 */
const NavItem = ({ item, parentKey, open, toggle }) => {
  const key = `${parentKey}/${item.title}`;
  const isOpen = !!open[key];
  const isCollapsible = item.children && item.children.length > 0;
  
  // Determine if it's an anchor link (Level 3 or deeper)
  const isAnchor = parentKey.split('/').length > 2;

  const baseClasses = "flex items-center w-full rounded-lg transition-colors duration-150 group";
  const linkClasses = isAnchor 
    ? "text-sm text-gray-500 hover:text-blue-600 px-3 py-1" 
    : "text-base font-medium text-gray-700 hover:text-blue-600 px-3 py-2";

  const renderContent = useMemo(() => {
    // 1. Simple Link (Anchor or top-level page without sub-sections)
    if (!isCollapsible || isAnchor) {
      return (
        <a href={item.href} className={`${baseClasses} ${linkClasses} hover:bg-gray-100/50`}>
          {isAnchor ? <Hash className="mr-2 text-gray-400 group-hover:text-blue-600" /> : <FileText className="mr-2 text-gray-400 group-hover:text-blue-600" />}
          <span className="truncate">{item.title}</span>
        </a>
      );
    }

    // 2. Collapsible Parent (Category or Page with anchors)
    return (
      <div className="flex justify-between items-center w-full">
        {item.href ? (
          // Page with anchors: clickable link + toggle button
          <a 
            href={item.href} 
            className={`${baseClasses} ${linkClasses} flex-grow hover:bg-gray-100/50`}
            title={`Go to ${item.title} page`}
          >
            <FileText className="mr-2 text-gray-400 group-hover:text-blue-600" />
            <span className="truncate">{item.title}</span>
          </a>
        ) : (
          // Category container: unclickable title + toggle button
          <span className={`${linkClasses} flex-grow text-gray-800 cursor-default`}>
             <span className="truncate">{item.title}</span>
          </span>
        )}
        
        {/* The Toggle Button for children visibility */}
        <button
          onClick={() => toggle(key)}
          className="p-1.5 ml-2 rounded-full text-gray-500 hover:bg-gray-200 hover:text-blue-600 focus:outline-none transition-transform"
          aria-expanded={isOpen}
          aria-controls={`sub-menu-${key}`}
          title={isOpen ? "Collapse section" : "Expand section"}
        >
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </button>
      </div>
    );
  }, [item, isCollapsible, isAnchor, key, isOpen, toggle, linkClasses, baseClasses]);

  return (
    <li className="list-none">
      {renderContent}
      
      {/* This is the fixed part: use ml-4 for consistent left indentation 
        and pt-1 for spacing between parent and children.
      */}
      {isCollapsible && isOpen && (
        <ul 
          id={`sub-menu-${key}`} 
          className="space-y-1 mt-1 ml-4 pt-1 border-l border-gray-200"
        >
          {item.children.map((child) => (
            <NavItem 
              key={`${key}/${child.title}`} 
              item={child} 
              parentKey={key} 
              open={open} 
              toggle={toggle} 
            />
          ))}
        </ul>
      )}
    </li>
  );
};


/**
 * NavTree component (main container)
 */
const NavTree = () => {
  const [open, setOpen] = useState({});

  const toggle = useCallback((key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // Re-map the navData to include the full original data set
  // This is where you would place the full data array if this component were
  // truly standalone, but for demonstration, we use the simplified array above.
  const fullNavData = [
    { title: "The Merchant Portal", href: "/TheMerchantPortal" },
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
    {
      title: "Developer Guides",
      children: [
        { title: "Developer Portal", href: "/DeveloperPortal" },
        { title: "Integration Overview", href: "/IntegrationOverview", children: [
            { title: "What Are APIs & SDKs?", href: "/IntegrationOverview#what-are-apis-and-sdks" },
            { title: "Integration Options", href: "/IntegrationOverview#integration-options" },
        ]},
        { title: "Payment API", href: "/PaymentAPI", children: [
            { title: "Overview", href: "/PaymentAPI#overview" },
            { title: "Prerequisites & PCI", href: "/PaymentAPI#prerequisites-pci" },
            { title: "Usage", href: "/PaymentAPI#usage" },
            { title: "Considerations", href: "/PaymentAPI#considerations" },
        ]},
        { title: "Three Step Redirect", href: "/ThreeStepRedirect", children: [
            { title: "Overview", href: "/ThreeStepRedirect#overview" },
            { title: "Benefits", href: "/ThreeStepRedirect#benefits" },
            { title: "Implementation", href: "/ThreeStepRedirect#implementation" },
            { title: "Considerations", href: "/ThreeStepRedirect#considerations" },
        ]},
        { title: "Collect.js", href: "/CollectJs", children: [
            { title: "Overview", href: "/CollectJs#overview" },
            { title: "How It Works", href: "/CollectJs#how-it-works" },
            { title: "Benefits", href: "/CollectJs#benefits" },
        ]},
        { title: "Collect Checkout", href: "/CollectCheckout", children: [
            { title: "Overview", href: "/CollectCheckout#overview" },
            { title: "How It Works", href: "/CollectCheckout#how-it-works" },
            { title: "Benefits", href: "/CollectCheckout#benefits" },
        ]},
        { title: "Hosted Payment Page", href: "/HostedPaymentPage", children: [
            { title: "Overview", href: "/HostedPaymentPage#overview" },
            { title: "Implementation", href: "/HostedPaymentPage#implementation" },
            { title: "Benefits", href: "/HostedPaymentPage#benefits" },
        ]},
        { title: "Query API", href: "/QueryAPI", children: [
            { title: "Overview", href: "/QueryAPI#overview" },
            { title: "Communication & Variables", href: "/QueryAPI#communication-variables" },
            { title: "Usage", href: "/QueryAPI#usage" },
            { title: "Use Cases", href: "/QueryAPI#use-cases" },
        ]},
        { title: "Webhooks", href: "/Webhooks", children: [
            { title: "Overview", href: "/Webhooks#overview" },
            { title: "How It Works", href: "/Webhooks#how-it-works" },
            { title: "Use Cases", href: "/Webhooks#use-cases" },
        ]},
        { title: "Customer Present Cloud", href: "/CustomerPresentCloud", children: [
            { title: "Overview", href: "/CustomerPresentCloud#overview" },
            { title: "Benefits", href: "/CustomerPresentCloud#benefits" },
        ]},
        { title: "Mobile SDK (iOS/Android)", href: "/MobileSDK", children: [
            { title: "Overview", href: "/MobileSDK#overview" },
            { title: "Features", href: "/MobileSDK#features" },
            { title: "Use Cases", href: "/MobileSDK#use-cases" },
        ]},
        { title: "Payment Device SDK (Windows/Linux)", href: "/PaymentDeviceSDK", children: [
            { title: "Overview", href: "/PaymentDeviceSDK#overview" },
            { title: "Features", href: "/PaymentDeviceSDK#features" },
            { title: "Use Cases", href: "/PaymentDeviceSDK#use-cases" },
        ]},
        { title: "Direct Connect & Gateway Emulator", href: "/DirectConnect", children: [
            { title: "Overview", href: "/DirectConnect#overview" },
            { title: "Gateway Emulator", href: "/DirectConnect#gateway-emulator" },
            { title: "Considerations", href: "/DirectConnect#considerations" },
        ]},
        { title: "Gateway.js", href: "/GatewayJs", children: [
            { title: "Overview", href: "/GatewayJs#overview" },
            { title: "Getting Started", href: "/GatewayJs#getting-started" },
            { title: "Best Practices", href: "/GatewayJs#best-practices" },
            { title: "Use Cases", href: "/GatewayJs#use-cases" },
        ]},
        { title: "3‑D Secure (Payer Auth)", href: "/Secure3DS", children: [
            { title: "Overview", href: "/Secure3DS#overview" },
            { title: "Quick Start Steps", href: "/Secure3DS#steps" },
            { title: "Additional Notes", href: "/Secure3DS#notes" },
        ]},
        { title: "Kount Fraud Management", href: "/KountFraudManagement", children: [
            { title: "Features & Benefits", href: "/KountFraudManagement#features" },
            { title: "How It Works", href: "/KountFraudManagement#how-it-works" },
            { title: "Supported Products", href: "/KountFraudManagement#supported-products" },
            { title: "Enabling the Service", href: "/KountFraudManagement#enabling" },
            { title: "Kount Score", href: "/KountFraudManagement#scores" },
        ]},
      ],
    },
  ];

  return (
    <nav
      className="w-full lg:w-72 bg-white p-6 max-h-screen overflow-y-auto"
      aria-label="Documentation navigation tree"
    >
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">MerchantHaus Guides</h2>
      <ul className="space-y-2">
        {fullNavData.map((item) => (
          <NavItem 
            key={item.title} 
            item={item} 
            parentKey="" 
            open={open} 
            toggle={toggle} 
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavTree;

