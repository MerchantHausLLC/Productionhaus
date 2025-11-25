import { ReactNode } from "react";

interface RequiredIndicatorProps {
  children?: ReactNode;
}

export const RequiredIndicator = ({ children = "Required" }: RequiredIndicatorProps) => (
  <span className="ml-2 inline-flex items-center rounded-full bg-[hsl(var(--attention))]/20 px-2 py-0.5 text-xs font-semibold text-[hsl(var(--attention-foreground))]">
    {children}
  </span>
);
