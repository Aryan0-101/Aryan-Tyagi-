import type { ReactNode } from "react";

/**
 * Seamless CSS marquee. Renders the children twice inside a track that
 * translates -50%, so the loop is continuous. Pauses on hover and freezes
 * under reduced motion (see index.css). Direction flips the animation.
 */
export function Marquee({
  children,
  duration = 28,
  gap = "3rem",
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  gap?: string;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`marquee-mask group relative flex overflow-hidden ${className}`}>
      <div
        className="marquee-track group-hover:[animation-play-state:paused]"
        style={
          {
            "--marquee-dur": `${duration}s`,
            "--marquee-gap": gap,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <MarqueeContent gap={gap}>{children}</MarqueeContent>
        <MarqueeContent gap={gap} aria-hidden>
          {children}
        </MarqueeContent>
      </div>
    </div>
  );
}

function MarqueeContent({
  children,
  gap,
  ...rest
}: {
  children: ReactNode;
  gap: string;
  [key: string]: unknown;
}) {
  return (
    <div
      className="flex shrink-0 items-center"
      style={{ gap, paddingRight: gap }}
      {...rest}
    >
      {children}
    </div>
  );
}
