import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { springMomentum } from "../../lib/motion";

/**
 * Button/link that leans toward the cursor (magnetic) and springs on press.
 * Magnetism is disabled on touch/coarse pointers and under reduced motion.
 *
 * Monochrome invert language:
 *   primary → chalk fill, charcoal text (the "emphasis inversion")
 *   ghost   → hairline outline that fills to chalk on hover
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "ghost",
  className = "",
  ...rest
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  [key: string]: unknown;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-chalk text-[#0a0a0b]"
      : "border border-line-strong text-ink";

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref as never}
      href={href}
      onClick={onClick}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      transition={springMomentum}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      {/* Ghost fill-up on hover: a chalk panel wipes from the bottom */}
      {variant === "ghost" && (
        <span className="absolute inset-0 -z-0 translate-y-full bg-chalk transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0" />
      )}
      <span
        className={`relative z-10 inline-flex items-center gap-2 ${
          variant === "ghost" ? "transition-colors duration-300 group-hover/btn:text-[#0a0a0b]" : ""
        }`}
      >
        {children}
      </span>
    </Comp>
  );
}
