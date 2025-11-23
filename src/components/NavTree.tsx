import React, { useState, useMemo, useCallback } from 'react';

/**
 * Updated NavTree component that supports dark and light themes.
 *
 * The original NavTree used hard‑coded gray colours and borders, so it
 * remained light even when the `.dark` class was applied to the root.  This
 * revision replaces those static colours with design‑system tokens and dark
 * variants.  Backgrounds, borders and text now come from the `sidebar`
 * colour palette in `tailwind.config.ts`/`index.css`, and hover states
 * reference primary/accent tokens.  As a result, the component responds to
 * the dark/light toggle provided by next‑themes.
 */

// Icon definitions remain unchanged from the original file
const ChevronRight = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);
const FileText = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
);
const Hash = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>
);

// A truncated sample of navigation data; the full structure can be added as needed
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
        ],
      },
    ],
  },
];

/**
 * NavItem renders a single navigation entry.  It computes a depth level to
 * determine styling (anchor links are level ≥2).  Colour classes use
 * design‑system tokens: `text-sidebar-foreground`, `text-muted-foreground`
 * for default text, and `hover:text-primary` for hover states.  The
 * background on hover comes from `sidebar-accent` so it adapts to dark mode.
 */
const NavItem = ({ item, parentKey, open, toggle }) => {
  const key = `${parentKey}/${item.title}`;
  const isOpen = !!open[key];
  const isCollapsible = item.children && item.children.length > 0;
  // Determine depth level for styling (anchor links are level 3+)
  const depth = parentKey.split('/').filter(Boolean).length;
  const isAnchor = depth >= 2;
  // Base layout classes, intentionally colour‑agnostic
  const baseClasses = "flex items-center w-full transition-colors duration-150 group";
  // Use tokens instead of static gray shades
  const linkClasses = isAnchor
    ? "text-xs text-muted-foreground hover:text-primary py-1 px-2"
    : depth === 0
    ? "text-sm font-medium text-sidebar-primary hover:text-primary py-1.5 px-2"
    : "text-sm text-sidebar-foreground hover:text-primary py-1 px-2";

  const renderContent = useMemo(() => {
    // Simple link (no children or anchor link)
    if (!isCollapsible || isAnchor) {
      return (
        <a
          href={item.href}
          className={`${baseClasses} ${linkClasses} hover:bg-sidebar-accent rounded`}
          title={item.title}
        >
          {isAnchor ? (
            <Hash className="mr-1.5 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
          ) : (
            <FileText className="mr-1.5 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
          )}
          <span className="truncate text-left">{item.title}</span>
        </a>
      );
    }
    // Collapsible parent with children
    return (
      <div className="flex items-center w-full gap-1">
        {item.href ? (
          // Page with sections: clickable link
          <a
            href={item.href}
            className={`${baseClasses} ${linkClasses} flex-1 hover:bg-sidebar-accent rounded min-w-0`}
            title={`Go to ${item.title}`}
          >
            <FileText className="mr-1.5 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
            <span className="truncate text-left">{item.title}</span>
          </a>
        ) : (
          // Category container: non-clickable title
          <span className={`${linkClasses} flex-1 text-sidebar-primary font-medium min-w-0 px-2 py-1.5`}>
            <span className="truncate text-left block">{item.title}</span>
          </span>
        )}
        {/* Collapse/Expand toggle button */}
        <button
          onClick={() => toggle(key)}
          className="p-1 rounded hover:bg-sidebar-accent text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
          aria-expanded={isOpen}
          aria-controls={`sub-menu-${key}`}
          aria-label={isOpen ? `Collapse ${item.title}` : `Expand ${item.title}`}
        >
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </button>
      </div>
    );
  }, [item, isCollapsible, isAnchor, key, isOpen, toggle, linkClasses, baseClasses]);

  return (
    <li className="list-none">
      {renderContent}
      {/* Nested children with consistent indentation */}
      {isCollapsible && isOpen && (
        <ul
          id={`sub-menu-${key}`}
          className="space-y-0.5 mt-0.5 ml-3 pl-2 border-l border-sidebar-border"
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
 * NavTree component
 *
 * Container uses `bg-sidebar` and `border-sidebar-border` to pick up the
 * appropriate background and border colours from the design tokens.
 */
const NavTree = () => {
  const [open, setOpen] = useState({});
  const toggle = useCallback((key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);
  const fullNavData = navData; // In a real implementation, expand the navigation structure
  return (
    <nav
      className="w-full lg:w-64 bg-sidebar border-r border-sidebar-border text-sidebar-foreground backdrop-blur-sm overflow-y-auto"
      style={{ maxHeight: 'calc(100vh - 4rem)' }}
      aria-label="Documentation navigation"
    >
      <div className="sticky top-0 bg-sidebar border-b border-sidebar-border px-4 py-3 z-10">
        <h2 className="text-base font-semibold text-sidebar-primary">Documentation</h2>
      </div>
      <ul className="space-y-0.5 p-3">
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
