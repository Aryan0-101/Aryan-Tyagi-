import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Smooth-scroll root. Lenis runs with autoRaf disabled and is pumped from
 * Motion's shared `frame` loop, so `useScroll`/`useTransform` stay perfectly in
 * sync with the smoothed scroll position (no double rAF, no jitter).
 *
 * Respects prefers-reduced-motion by handing scrolling back to the browser.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 1.15,
        lerp: 0.09,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        // expo-out — matches the redesign's signature curve
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
