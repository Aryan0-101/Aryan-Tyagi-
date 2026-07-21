import { motion } from "motion/react";
import { staggerParent, wordRise } from "../../lib/motion";

/**
 * Word-by-word mask reveal. Each word rises out of an overflow-hidden clip so
 * the line "prints" onto the page. Drives on scroll-into-view once.
 */
export function RevealText({
  text,
  className = "",
  stagger = 0.055,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      variants={staggerParent(stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.16em", marginBottom: "-0.16em" }}
          aria-hidden
        >
          <motion.span variants={wordRise} custom={i} className="inline-block will-change-transform">
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
