import React from "react";

interface RequiredIndicatorProps {
  children?: React.ReactNode;
}

/**
 * Small pill that clearly marks a field as required.
 * Uses solid attention color so it remains visible in both light and dark themes.
 */
export const RequiredIndicator = ({ children = "Required" }: RequiredIndicatorProps) => {
  return (
    <span
      className="
        ml-2 inline-flex items-center gap-1
        rounded-full border border-[hsl(var(--attention))]
        bg-[hsl(var(--attention))] px-2 py-0.5
        text-[10px] font-semibold uppercase tracking-wide
        text-[hsl(var(--attention-foreground))]
        shadow-sm
      "
    >
      <span>{children}</span>
      {/* Visual asterisk only – label already conveys required in text */}
      <span aria-hidden="true">*</span>
    </span>
  );
};
