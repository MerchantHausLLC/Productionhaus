import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { badgeVariants } from "./badge-utils";

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, BadgeVariantProps {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge };
export type { BadgeProps, BadgeVariantProps };
