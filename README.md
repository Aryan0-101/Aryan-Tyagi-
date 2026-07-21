# Aryan Tyagi — Portfolio

Charcoal-and-chalk, animation-heavy portfolio for an ML / AI Engineer. Built with
React 19, Vite, Tailwind v4, Motion, and Lenis smooth scroll.

## Run locally

**Prerequisites:** Node.js

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # tsc --noEmit
npm run build
```

## Adding your assets

The site ships with placeholders that are replaced automatically once you drop
real files at these paths:

| Asset | Path | Spec |
| --- | --- | --- |
| Portrait | `public/portrait.png` | **Transparent cutout** (subject only, alpha background), shoulders-up or half-body, ≥1200px tall, roughly 3:4. It is auto-toned to **monochrome** (grayscale + chalk highlight lift) and its edges are feathered so it dissolves into the slate — do **not** pre-crop it into a frame or add a background. |
| Project shots | `public/projects/<slug>.png` | 16:10 screenshot (rendered grayscale in the hover preview). Slugs: `vehicle-valuation`, `rate-limiter`, `landmark-detector`, `smart-traffic`, `music-genre`. |
| Résumé | `public/resume.pdf` | Already in place (copy of `resume_2-1.pdf`); replace to update. |

Repo links per project live in the `github` field of the `projects` array in
`src/components/Projects.tsx`.

## Design system

- **Palette:** charcoal `#0A0A0B`, chalk `#F4F3EE`, and greys in between. The only
  "accent" is **inversion** — chalk-on-charcoal flips to charcoal-on-chalk for
  emphasis. Brand logos in the stack ribbon are the sole controlled pops of color,
  revealed on hover. Tokens in `src/index.css` `@theme`.
- **Type:** Fraunces (display — a high-contrast variable serif with optical
  sizing) + Hanken Grotesk (body) via Google Fonts, JetBrains Mono (labels).
- **Motion:** Lenis smooth scroll (`SmoothScroll.tsx`) pumped from Motion's shared
  frame loop so `useScroll` stays in sync; kinetic type, marquees, a custom
  cursor (`ui/Cursor.tsx`), cursor-following project previews, and clip/word
  reveals in `src/lib/motion.ts`. All motion respects `prefers-reduced-motion`
  (the custom cursor and Lenis both hand control back to the browser).

