import { useEffect, useRef, useState, type HTMLAttributes, type Ref } from "react";

interface TypewriterRevealProps extends HTMLAttributes<HTMLElement> {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  speed?: number;
  delay?: number;
  once?: boolean;
  showCaret?: boolean;
  rootMargin?: string;
}

export function TypewriterReveal({
  text,
  as = "span",
  className,
  speed = 35,
  delay = 0,
  once = true,
  showCaret = true,
  rootMargin = "0px 0px -10% 0px",
  ...rest
}: TypewriterRevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (once && hasAnimated) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasAnimated) {
              setStartTyping(true);
              setHasAnimated(true);
            }
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setStartTyping(false);
            setHasAnimated(false);
          }
        });
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, once, rootMargin]);

  useEffect(() => {
    if (!startTyping) return;

    setDisplayedText("");
    setIsTyping(true);
    let index = 0;
    let interval: ReturnType<typeof setInterval> | null = null;

    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          if (interval) {
            clearInterval(interval);
          }
          setIsTyping(false);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimer);
      if (interval) {
        clearInterval(interval);
      }
      setIsTyping(false);
    };
  }, [delay, speed, startTyping, text]);

  const Component = as as keyof JSX.IntrinsicElements;
  const caretVisible = showCaret && isTyping;

  return (
    <Component
      ref={elementRef as unknown as Ref<HTMLElement>}
      className={className}
      aria-label={text}
      {...rest}
    >
      {displayedText}
      {caretVisible && <span className="inline-block w-[1px] h-[1em] bg-current ml-[2px] animate-pulse" />}
    </Component>
  );
}
