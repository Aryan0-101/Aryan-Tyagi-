import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useReveal } from "../../lib/motion";
import { RevealText } from "./RevealText";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reveal = useReveal(40, 8);
  return (
    <motion.section id={id} {...reveal} className={`scroll-mt-28 py-24 md:py-36 ${className}`}>
      {children}
    </motion.section>
  );
}

/**
 * Section header: a large index-free display title that prints in word-by-word,
 * flanked by a hairline rule and a small chalk-marked kicker.
 */
export function SectionHeading({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <div className="mb-14 md:mb-20">
      {kicker && (
        <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-chalk" />
          {kicker}
        </div>
      )}
      <div className="flex items-end justify-between gap-6">
        <RevealText
          as="h2"
          text={title}
          className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink"
        />
        <span className="mb-3 hidden h-px flex-1 max-w-[40%] bg-line-strong md:block" />
      </div>
    </div>
  );
}
