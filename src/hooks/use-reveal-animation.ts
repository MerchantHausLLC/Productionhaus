import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right";

type RevealOptions = {
  direction?: Direction;
  threshold?: number;
};

const hiddenTransforms: Record<Direction, string> = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8"
};

export const useRevealAnimation = ({
  direction = "up",
  threshold = 0.2
}: RevealOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  const transitionClass = isVisible
    ? "opacity-100 translate-x-0 translate-y-0"
    : `opacity-0 ${hiddenTransforms[direction]}`;

  return {
    ref: elementRef,
    isVisible,
    transitionClass
  };
};
