import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Cycles through phrases with a type-on / pause / delete loop and a blinking
 * caret. Under reduced motion it renders the first phrase statically (no loop).
 */
export function Typewriter({
  phrases,
  typeSpeed = 55,
  deleteSpeed = 28,
  hold = 1400,
  className = "",
}: {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  hold?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(phrases[0] ?? "");
      return;
    }
    const current = phrases[index % phrases.length];

    // Finished typing → hold, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    // Finished deleting → advance to next phrase.
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const next = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);
    const t = setTimeout(() => setText(next), deleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, reduce, typeSpeed, deleteSpeed, hold]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span
        className={`ml-0.5 inline-block w-[2px] self-stretch bg-chalk align-middle ${
          reduce ? "" : "animate-caret"
        }`}
        style={{ height: "1em" }}
        aria-hidden
      />
    </span>
  );
}
