import type { Transition, Variants } from "motion/react";
import { useReducedMotion } from "motion/react";

/** Critically damped default — no overshoot. Apple's move/reposition feel. */
export const springDefault: Transition = { type: "spring", bounce: 0, duration: 0.4 };

/** Slight overshoot — reserve for momentum-driven interactions (magnetic, drag). */
export const springMomentum: Transition = { type: "spring", bounce: 0.2, duration: 0.4 };

/** Strong expo-out for entrances — the signature curve of this redesign. */
export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.77, 0, 0.175, 1] as const;

/**
 * Returns reveal props that collapse to a plain opacity crossfade when the
 * user prefers reduced motion. Pass a directional offset for the full variant.
 */
export function useReveal(y = 24, blur = 6) {
  const reduce = useReducedMotion();
  if (reduce) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.4, ease: easeOut },
    } as const;
  }
  return {
    initial: { opacity: 0, y, filter: `blur(${blur}px)` },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, ease: easeOut },
  } as const;
}

/**
 * Word-by-word mask reveal. Wrap each word in an overflow-hidden span and give
 * the inner element these variants; drive with a `staggerChildren` parent.
 */
export const wordRise: Variants = {
  hidden: { y: "110%" },
  show: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: easeOut, delay: i * 0.05 },
  }),
};

/** Parent that staggers masked children into view on scroll. */
export const staggerParent = (stagger = 0.06): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

/** Char-level blur-rise, used for the hero name. */
export const charRise: Variants = {
  hidden: { opacity: 0, y: "0.55em", filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easeOut },
  },
};

/** Clip-path wipe reveal for images / panels. */
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1, ease: easeOut },
  },
};
