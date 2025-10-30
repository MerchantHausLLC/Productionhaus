import { useEffect, useState } from "react";

interface TypewriterParagraphProps {
  emphasis: string;
  text: string;
  startDelay?: number;
  className?: string;
}

export function TypewriterParagraph({
  emphasis,
  text,
  startDelay = 0,
  className = "",
}: TypewriterParagraphProps) {
  const fullText = `${emphasis} ${text}`.trimEnd();
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    setDisplayedLength(0);
    let interval: ReturnType<typeof setInterval> | null = null;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev >= fullText.length) {
            if (interval) {
              clearInterval(interval);
            }
            return prev;
          }
          return prev + 1;
        });
      }, 35);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [fullText, startDelay]);

  const emphasisEnd = Math.min(displayedLength, emphasis.length);
  const typedEmphasis = emphasis.slice(0, emphasisEnd);
  const typedRest =
    displayedLength > emphasis.length
      ? fullText.slice(emphasis.length, displayedLength)
      : "";
  const isTyping = displayedLength < fullText.length;

  return (
    <p className={`typewriter-paragraph leading-relaxed text-neutral-dark/80 ${className}`.trim()}>
      <span className="font-semibold text-neutral-dark">{typedEmphasis}</span>
      <span>{typedRest}</span>
      {isTyping && <span className="typewriter-caret" />}
    </p>
  );
}
