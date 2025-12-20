import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

/**
 * NavTree Component - Sidebar Navigation for Developer Guides and Merchant Portal
 *
 * This component provides hierarchical navigation for documentation pages.
 * Uses React Router's Link component for SPA-style navigation without page reloads.
 * Supports dark/light themes through design system tokens.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface NavChild {
  title: string;
  href: string;
}

interface NavPage {
  title: string;
  href: string;
  children?: NavChild[];
}

interface NavSection {
  title: string;
  href?: string;
  children?: (NavPage | NavSection)[];
}

type NavItem = NavSection | NavPage;

// ============================================================================
// ICON COMPONENTS
// ============================================================================

const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const FileText: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const Hash: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="9" y2="9" />
    <line x1="4" x2="20" y1="15" y2="15" />
    <line x1="10" x2="8" y1="3" y2="21" />
    <line x1="16" x2="14" y1="3" y2="21" />
  </svg>
);

const FolderOpen: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
  </svg>
);

// ============================================================================
// NAVIGATION DATA - Complete structure for Developer Guides and Merchant Portal
// ============================================================================

const navData: NavItem[] = [
  // Merchant Portal Section
  {
    title: "The Merchant Portal",
    href: "/TheMerchantPortal",
  },
  {
    title: "Reports",
    children: [
      {
        title: "Transaction Reports",
        href: "/TransactionReports",
      },
      {
        title: "Subscription Reports",
        href: "/SubscriptionReports",
      },
    ],
  },
  {
    title: "User Management",
    children: [
      {
        title: "Merchant User Accounts",
        href: "/MerchantUserAccounts",
      },
      {
        title: "Managing Partner Users",
        href: "/ManagingPartnerUsers",
      },
      {
        title: "Two-Factor Authentication",
        href: "/TwoFactorAuthentication",
      },
      {
        title: "Password Policy (90-Day)",
        href: "/PasswordPolicy90Day",
      },
    ],
  },
  {
    title: "Settings",
    children: [
      {
        title: "Account Information",
        href: "/AccountInformation",
      },
      {
        title: "Test Mode",
        href: "/TestMode",
      },
      {
        title: "Merchant IP Restrictions",
        href: "/MerchantIPRestrictions",
      },
      {
        title: "Service Provider Contacts",
        href: "/MerchantServiceProviderContacts",
      },
      {
        title: "Settlement Schedule",
        href: "/SettlementSchedule",
      },
      {
        title: "Report Configuration",
        href: "/ReportConfiguration",
      },
      {
        title: "Transaction Routing",
        href: "/TransactionRouting",
      },
    ],
  },
  {
    title: "Email & Communications",
    children: [
      {
        title: "SPF & DKIM Records",
        href: "/SpfDkimRecords",
      },
      {
        title: "DKIM/SPF Validation",
        href: "/DkimSpfValidation",
      },
      {
        title: "Email Template Changes",
        href: "/EmailTemplateChanges",
      },
      {
        title: "Invoice Look & Feel",
        href: "/InvoiceLookFeel",
      },
    ],
  },
  {
    title: "Billing & Payments",
    children: [
      {
        title: "Billing Statement",
        href: "/BillingStatement",
      },
      {
        title: "Blind Credits",
        href: "/BlindCredits",
      },
      {
        title: "Customer Fee Configuration",
        href: "/CustomerFeeConfiguration",
      },
      {
        title: "Country/Currency Config",
        href: "/CountryCurrencyConfiguration",
      },
      {
        title: "SEC Code Configuration",
        href: "/SecCodeConfiguration",
      },
    ],
  },
  // Developer Guides Section
  {
    title: "Developer Guides",
    href: "/developer-guides",
  },
  {
    title: "Getting Started",
    children: [
      {
        title: "Integration Overview",
        href: "/IntegrationOverview",
      },
      {
        title: "What is ACH?",
        href: "/WhatIsACH",
      },
    ],
  },
  {
    title: "Integration Methods",
    children: [
      {
        title: "Direct Connect API",
        href: "/DirectConnect",
      },
      {
        title: "Payment API",
        href: "/PaymentAPI",
      },
      {
        title: "Three-Step Redirect",
        href: "/ThreeStepRedirect",
      },
      {
        title: "Gateway.js",
        href: "/GatewayJs",
      },
      {
        title: "Collect.js",
        href: "/CollectJs",
      },
      {
        title: "Collect Checkout",
        href: "/CollectCheckout",
      },
      {
        title: "Hosted Payment Page",
        href: "/HostedPaymentPage",
      },
      {
        title: "Query API",
        href: "/QueryAPI",
      },
      {
        title: "Webhooks",
        href: "/Webhooks",
      },
    ],
  },
  {
    title: "Mobile & Device SDKs",
    children: [
      {
        title: "Mobile SDK",
        href: "/MobileSDK",
      },
      {
        title: "Payment Device SDK",
        href: "/PaymentDeviceSDK",
      },
      {
        title: "Customer Present Cloud",
        href: "/CustomerPresentCloud",
      },
    ],
  },
  {
    title: "Security & Verification",
    children: [
      {
        title: "3D Secure",
        href: "/Secure3DS",
      },
      {
        title: "Address Verification (AVS)",
        href: "/AddressVerification",
      },
      {
        title: "Card ID Verification (CVV)",
        href: "/CardIDVerification",
      },
      {
        title: "Kount Fraud Management",
        href: "/KountFraudManagement",
      },
    ],
  },
  {
    title: "Advanced Features",
    children: [
      {
        title: "Automatic Card Updater",
        href: "/AutomaticCardUpdater",
      },
      {
        title: "Automatic Level III",
        href: "/AutomaticLevelIII",
      },
      {
        title: "Merchant Defined Fields",
        href: "/MerchantDefinedFields",
      },
    ],
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Determines if a navigation item has child pages
 */
const hasChildren = (item: NavItem): item is NavSection => {
  return 'children' in item && Array.isArray(item.children) && item.children.length > 0;
};

/**
 * Checks if the current path matches or is a child of the given href
 */
const isActiveRoute = (href: string, currentPath: string): boolean => {
  // Handle anchor links
  const basePath = href.split('#')[0];
  return currentPath === basePath || currentPath.startsWith(basePath + '/');
};

// ============================================================================
// NAV ITEM COMPONENT
// ============================================================================

interface NavItemRendererProps {
  item: NavItem;
  parentKey: string;
  openSections: Record<string, boolean>;
  toggleSection: (key: string) => void;
  currentPath: string;
  depth?: number;
}

const NavItemRenderer: React.FC<NavItemRendererProps> = ({
  item,
  parentKey,
  openSections,
  toggleSection,
  currentPath,
  depth = 0,
}) => {
  const key = `${parentKey}/${item.title}`;
  const isOpen = !!openSections[key];
  const hasChildItems = hasChildren(item);
  const isAnchorLink = item.href?.includes('#');
  const isActive = item.href ? isActiveRoute(item.href, currentPath) : false;

  // Styling classes based on depth and item type
  const baseClasses = "flex items-center w-full transition-colors duration-150 group rounded";

  const linkClasses = cn(
    baseClasses,
    isAnchorLink
      ? "text-xs text-muted-foreground hover:text-primary py-1 px-2"
      : depth === 0
        ? "text-sm font-medium text-sidebar-primary hover:text-primary py-1.5 px-2"
        : "text-sm text-sidebar-foreground hover:text-primary py-1 px-2",
    "hover:bg-sidebar-accent",
    isActive && !isAnchorLink && "bg-sidebar-accent text-primary"
  );

  // Render simple link (no children or anchor link)
  if (!hasChildItems || isAnchorLink) {
    const IconComponent = isAnchorLink ? Hash : FileText;

    return (
      <li className="list-none">
        <Link
          to={item.href!}
          className={linkClasses}
          title={item.title}
        >
          <IconComponent
            className={cn(
              "mr-1.5 flex-shrink-0",
              isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
            )}
          />
          <span className="truncate text-left">{item.title}</span>
        </Link>
      </li>
    );
  }

  // Render collapsible section with children
  return (
    <li className="list-none">
      <div className="flex items-center w-full gap-1">
        {item.href ? (
          // Section with its own page
          <Link
            to={item.href}
            className={cn(linkClasses, "flex-1 min-w-0")}
            title={`Go to ${item.title}`}
          >
            <FileText
              className={cn(
                "mr-1.5 flex-shrink-0",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
              )}
            />
            <span className="truncate text-left">{item.title}</span>
          </Link>
        ) : (
          // Category header (no page)
          <span className="flex-1 text-sm font-medium text-sidebar-primary min-w-0 px-2 py-1.5 flex items-center">
            <FolderOpen className="mr-1.5 flex-shrink-0 text-muted-foreground" />
            <span className="truncate text-left">{item.title}</span>
          </span>
        )}

        {/* Expand/Collapse toggle button */}
        <button
          onClick={() => toggleSection(key)}
          className="p-1 rounded hover:bg-sidebar-accent text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
          aria-expanded={isOpen}
          aria-controls={`sub-menu-${key.replace(/[^a-zA-Z0-9]/g, '-')}`}
          aria-label={isOpen ? `Collapse ${item.title}` : `Expand ${item.title}`}
        >
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </button>
      </div>

      {/* Child items */}
      {isOpen && (
        <ul
          id={`sub-menu-${key.replace(/[^a-zA-Z0-9]/g, '-')}`}
          className="space-y-0.5 mt-0.5 ml-3 pl-2 border-l border-sidebar-border"
        >
          {item.children!.map((child) => (
            <NavItemRenderer
              key={`${key}/${child.title}`}
              item={child}
              parentKey={key}
              openSections={openSections}
              toggleSection={toggleSection}
              currentPath={currentPath}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

// ============================================================================
// MAIN NAVTREE COMPONENT
// ============================================================================

const NavTree: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Initialize open sections based on current path
  const getInitialOpenSections = useCallback((): Record<string, boolean> => {
    const openSections: Record<string, boolean> = {};

    const findAndOpenParents = (items: NavItem[], parentKey: string) => {
      for (const item of items) {
        const key = `${parentKey}/${item.title}`;

        if (hasChildren(item)) {
          // Check if any child matches current path
          const hasActiveChild = item.children!.some((child) => {
            if (child.href && isActiveRoute(child.href, currentPath)) {
              return true;
            }
            if (hasChildren(child)) {
              return child.children!.some(
                (grandChild) => grandChild.href && isActiveRoute(grandChild.href, currentPath)
              );
            }
            return false;
          });

          if (hasActiveChild || (item.href && isActiveRoute(item.href, currentPath))) {
            openSections[key] = true;
          }

          findAndOpenParents(item.children!, key);
        }
      }
    };

    findAndOpenParents(navData, '');
    return openSections;
  }, [currentPath]);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(getInitialOpenSections);

  const toggleSection = useCallback((key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // Memoize the nav title based on current location
  const navTitle = useMemo(() => {
    const isDeveloperSection = currentPath.startsWith('/developer') ||
      ['/IntegrationOverview', '/DirectConnect', '/PaymentAPI', '/ThreeStepRedirect',
       '/GatewayJs', '/CollectJs', '/CollectCheckout', '/HostedPaymentPage', '/QueryAPI',
       '/Webhooks', '/MobileSDK', '/PaymentDeviceSDK', '/CustomerPresentCloud',
       '/Secure3DS', '/AddressVerification', '/CardIDVerification', '/KountFraudManagement',
       '/AutomaticCardUpdater', '/AutomaticLevelIII', '/MerchantDefinedFields', '/WhatIsACH'
      ].includes(currentPath);

    return isDeveloperSection ? "Developer Guides" : "Documentation";
  }, [currentPath]);

  return (
    <nav
      className="w-full lg:w-64 bg-sidebar border-r border-sidebar-border text-sidebar-foreground backdrop-blur-sm overflow-y-auto flex-shrink-0"
      style={{ maxHeight: 'calc(100vh - 4rem)' }}
      aria-label="Documentation navigation"
    >
      {/* Sticky header */}
      <div className="sticky top-0 bg-sidebar border-b border-sidebar-border px-4 py-3 z-10">
        <h2 className="text-base font-semibold text-sidebar-primary">{navTitle}</h2>
      </div>

      {/* Navigation items */}
      <ul className="space-y-0.5 p-3">
        {navData.map((item) => (
          <NavItemRenderer
            key={item.title}
            item={item}
            parentKey=""
            openSections={openSections}
            toggleSection={toggleSection}
            currentPath={currentPath}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavTree;
