import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Custom cursor: a small chalk dot that tracks the pointer 1:1, and a larger
 * ring that lags behind with spring physics. The ring inflates over
 * interactive elements and can render a contextual label (e.g. "view", "open")
 * driven by `data-cursor` attributes on hover targets.
 *
 * Fine-pointer only. On touch/coarse devices it never mounts and the native
 * cursor is untouched (see index.css `.custom-cursor`).
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string>("");
  const [active, setActive] = useState(false);
  const [down, setDown] = useState(false);

  // Dot tracks instantly; ring lags with spring.
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 380, damping: 34, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 380, damping: 34, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor");

    const move = (e: PointerEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [role='button'], [data-cursor]"
      );
      if (target) {
        setActive(true);
        setLabel(target.dataset.cursor ?? "");
      } else {
        setActive(false);
        setLabel("");
      }
    };
    const downH = () => setDown(true);
    const upH = () => setDown(false);
    const leave = () => {
      dotX.set(-100);
      dotY.set(-100);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", downH);
    window.addEventListener("pointerup", upH);
    window.addEventListener("pointerout", (e) => {
      if (!e.relatedTarget) leave();
    });

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", downH);
      window.removeEventListener("pointerup", upH);
      document.body.classList.remove("custom-cursor");
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]" aria-hidden>
      {/* Lagging ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            width: active ? (label ? 76 : 52) : 34,
            height: active ? (label ? 76 : 52) : 34,
            opacity: down ? 0.55 : 1,
            scale: down ? 0.9 : 1,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className="flex items-center justify-center rounded-full border border-chalk/70 bg-chalk/5 backdrop-invert-[0.04]"
        >
          {label && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-chalk">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Instant dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: active ? 0 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="h-1.5 w-1.5 rounded-full bg-chalk"
        />
      </motion.div>
    </div>
  );
}
