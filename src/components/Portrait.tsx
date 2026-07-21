import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

/**
 * Portrait that dissolves INTO the page rather than sitting in a frame on top.
 *
 * Charcoal & chalk treatment:
 *  - The image is expected to be a transparent cutout (subject only, alpha bg).
 *    Drop the real one at `public/portrait.png` — export spec in README.
 *  - A hard grayscale + contrast filter turns any photo monochrome, matching the
 *    chalkboard palette; a chalk-white `screen` pass lifts highlights like chalk
 *    dust, and a charcoal `multiply` gradient sinks the base into the bg.
 *  - `mask-image` feathers the edges to transparent so the slate shows through.
 *  - The shared grain layer (in App) sits over both photo and CSS, killing the
 *    "pasted on" seam.
 *  - Scroll parallax moves it slower than the text; disabled under reduced motion.
 *
 * Until the real PNG exists, a styled silhouette placeholder renders in its place
 * with the identical treatment, so layout + blend read correctly.
 */
export function Portrait() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 130]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.07]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.25]);

  const featherMask =
    "radial-gradient(120% 100% at 50% 32%, #000 44%, rgba(0,0,0,0.7) 64%, transparent 90%), linear-gradient(to bottom, #000 52%, transparent 97%)";

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity }}
      className="relative mx-auto h-[clamp(15rem,34vh,36rem)] w-full max-w-[19rem] sm:max-w-[22rem] lg:h-[clamp(22rem,50vh,40rem)] lg:max-w-[27rem]"
    >
      {/* Chalk backlight behind subject — reads as rim light, not a blob */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(58% 52% at 52% 38%, rgba(244,243,238,0.12), transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {!failed ? (
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage: featherMask,
            maskImage: featherMask,
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        >
          <img
            src="/portrait.png"
            alt="Aryan Tyagi"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top"
            style={{ filter: "grayscale(1) contrast(1.15) brightness(0.92)" }}
          />
          {/* Chalk highlight lift */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-screen"
            style={{
              background:
                "radial-gradient(70% 60% at 50% 30%, rgba(244,243,238,0.14), transparent 72%)",
            }}
          />
          {/* Sink the base into charcoal so it grounds into the bg */}
          <div
            className="pointer-events-none absolute inset-0 mix-blend-multiply"
            style={{
              background:
                "linear-gradient(to bottom, transparent 38%, rgba(10,10,11,0.92))",
            }}
          />
        </div>
      ) : (
        <PlaceholderSilhouette mask={featherMask} />
      )}
    </motion.div>
  );
}

function PlaceholderSilhouette({ mask }: { mask: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{ WebkitMaskImage: mask, maskImage: mask }}
      aria-hidden
    >
      <svg viewBox="0 0 400 520" className="h-full w-full" preserveAspectRatio="xMidYMin slice">
        <defs>
          <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2b2b2e" />
            <stop offset="55%" stopColor="#18181a" />
            <stop offset="100%" stopColor="#0a0a0b" />
          </linearGradient>
        </defs>
        {/* head + shoulders silhouette */}
        <path
          fill="url(#pg)"
          d="M200 70c46 0 78 36 78 88 0 34-14 62-34 78 42 14 78 44 96 86 12 28 18 60 20 110H40c2-50 8-82 20-110 18-42 54-72 96-86-20-16-34-44-34-78 0-52 32-88 78-88z"
        />
      </svg>
      <div className="absolute inset-0 flex items-end justify-center pb-[22%]">
        <span className="font-display text-6xl font-semibold tracking-tight text-ink/25">
          AT
        </span>
      </div>
    </div>
  );
}
