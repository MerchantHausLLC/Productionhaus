import { useEffect, useRef } from "react";

type UseParallaxOptions = {
  speed?: number;
  axis?: "x" | "y";
  maxTranslate?: number;
};

/**
 * Provides a ref that applies a smooth parallax translation to the element
 * based on the page scroll position. The element stays in document flow while
 * its visual position is translated using transform for better performance.
 */
export const useParallax = <T extends HTMLElement>({
  speed = 0.2,
  axis = "y",
  maxTranslate,
}: UseParallaxOptions = {}) => {
  const elementRef = useRef<T | null>(null);
  const initialOffsetRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const element = elementRef.current;
    if (!element) return;

    let isMounted = true;
    element.style.willChange = "transform";

    const updateOffset = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      initialOffsetRef.current = rect.top + window.scrollY;
      scheduleUpdate();
    };

    const applyTransform = () => {
      if (!isMounted || !elementRef.current) return;
      const scrollPosition = window.scrollY;
      let translate = (scrollPosition - initialOffsetRef.current) * speed;

      if (maxTranslate !== undefined) {
        translate = Math.max(Math.min(translate, maxTranslate), -maxTranslate);
      }

      const translateX = axis === "x" ? translate : 0;
      const translateY = axis === "y" ? translate : 0;
      elementRef.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    };

    const scheduleUpdate = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = requestAnimationFrame(applyTransform);
    };

    const handleScroll = () => scheduleUpdate();

    updateOffset();
    scheduleUpdate();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateOffset);
    window.addEventListener("orientationchange", updateOffset);

    return () => {
      isMounted = false;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOffset);
      window.removeEventListener("orientationchange", updateOffset);
      if (element) {
        element.style.transform = "";
        element.style.willChange = "";
      }
    };
  }, [axis, maxTranslate, speed]);

  return elementRef;
};
