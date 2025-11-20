import type { ComponentPropsWithoutRef, ElementType, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import { useRevealAnimation } from "@/hooks/use-reveal-animation";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  threshold?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "ref">;

export const Reveal = <T extends ElementType = "div">({
  as,
  children,
  className,
  direction = "up",
  delay = 0,
  threshold,
  style,
  ...props
}: RevealProps<T>) => {
  const Component = (as || "div") as ElementType;
  const { ref, transitionClass } = useRevealAnimation({ direction, threshold });

  return (
    <Component
      ref={ref as Ref<HTMLElement>}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      className={cn(
        "will-change-transform transition-all duration-700 ease-out",
        transitionClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
