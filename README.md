<div align="center">

# ◍ &nbsp; A R Y A N &nbsp; T Y A G I &nbsp; ◍

### Charcoal &amp; Chalk — an animation-heavy portfolio for an ML / AI Engineer

<br />

![React](https://img.shields.io/badge/React_19-0A0A0B?style=for-the-badge&logo=react&logoColor=F4F3EE)
![Vite](https://img.shields.io/badge/Vite_6-0A0A0B?style=for-the-badge&logo=vite&logoColor=F4F3EE)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-0A0A0B?style=for-the-badge&logo=tailwindcss&logoColor=F4F3EE)
![Motion](https://img.shields.io/badge/Motion-0A0A0B?style=for-the-badge&logo=framer&logoColor=F4F3EE)
![Lenis](https://img.shields.io/badge/Lenis_Scroll-0A0A0B?style=for-the-badge&logoColor=F4F3EE)
![TypeScript](https://img.shields.io/badge/TypeScript-0A0A0B?style=for-the-badge&logo=typescript&logoColor=F4F3EE)

<br />

`#0A0A0B` &nbsp;▓▓▓▓▓&nbsp; `#141416` &nbsp;▓▓▓▓▓&nbsp; `#1E1E21` &nbsp;▓▓▓▓▓&nbsp; `#86847D` &nbsp;░░░░░&nbsp; `#B4B2AA` &nbsp;░░░░░&nbsp; `#F4F3EE`

_The only accent is **inversion** — chalk-on-charcoal flips to charcoal-on-chalk for emphasis._

</div>

---

## ✦ &nbsp; What's inside

<table>
<tr>
<td width="50%" valign="top">

### 🎞️ &nbsp;Motion
- **Lenis** smooth scroll, pumped from Motion's shared frame loop
- Kinetic **word / char reveals** &amp; clip wipes
- **Custom cursor** that inflates over interactive targets
- Scroll-driven **keyword highlighting** in the intro
- Seamless **marquees** for the stack ribbon

</td>
<td width="50%" valign="top">

### 🖼️ &nbsp;Projects showcase
- **Hover-to-expand** row overviews
- **Cursor-following** screenshot preview
- Accessible **modal** with focus trap
- **Portrait galleries** — 2–3 phone shots on a blurred backdrop for Android apps
- **Live demo** + source links per project

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🎨 &nbsp;Design system
- Monochrome **charcoal &amp; chalk** palette
- **Fraunces** (variable serif) + **Hanken Grotesk** + **JetBrains Mono**
- Chalkboard grain, grid &amp; vignette textures
- Signature **expo-out** easing curve

</td>
<td width="50%" valign="top">

### ♿ &nbsp;Accessible by default
- Every animation honors **`prefers-reduced-motion`**
- Cursor &amp; Lenis **hand control back** to the browser
- **Keyboard-navigable** project rows &amp; modal
- WCAG-aware contrast on faded chalk tones

</td>
</tr>
</table>

---

## ⚡ &nbsp; Quick start

```bash
npm install
npm run dev        # ▸ http://localhost:3000
npm run lint       # ▸ tsc --noEmit (type-check)
npm run build      # ▸ production bundle → dist/
```

> **Prerequisite:** Node.js · **Preview a build:** `npm run preview`

---

## 🗺️ &nbsp; Page map

```
Hero ──▶ About ──▶ Skills ──▶ Experience ──▶ Projects ──▶ Education ──▶ Contact
 │         │         │            │             │             │            │
 name    keyword   stack       single        hover +       the        say
 + type  spotlight ribbon      role card     galleries     paper       hello
 writer  + p.s.                              + modal        trail
```

---

## 🧩 &nbsp; Drop-in assets

The site ships with placeholders that **swap in automatically** the moment you add a real file — nothing breaks if a file is missing.

| Asset | Path | Spec |
| :-- | :-- | :-- |
| 🧍 **Portrait** | `public/portrait.png` | **Transparent cutout** (subject only, alpha bg), ≥1200px tall, ~3:4. Auto-toned to monochrome and edge-feathered into the slate — don't pre-crop or add a background. |
| 🖥️ **Desktop shot** | `public/projects/<slug>.png` | 16:10 screenshot, rendered grayscale. |
| 📱 **Phone gallery** | `public/projects/<slug>-1.png` … `-3.png` | 2–3 portrait shots for Android apps — shown whole on a blurred backdrop. Add just 1–2 and the rest gracefully collapse. |
| 📄 **Résumé** | `public/resume.pdf` | Already in place — replace to update. |

<details>
<summary><b>📌 &nbsp;Current project slugs &amp; screenshot filenames</b></summary>

<br />

| Project | Slug | Type | Screenshots expected |
| :-- | :-- | :-- | :-- |
| CarVal — Vehicle Valuation | `carval` | 🖥️ Desktop | `carval.png` |
| Gymini — AI Gym Planner | `gymini` | 📱 Gallery | `gymini-1.png`, `gymini-2.png`, `gymini-3.png` |
| Rate Limiter API | `rate-limiter` | 🖥️ Desktop | `rate-limiter.png` |
| MRRMS — Society Super-App | `mrrms` | 📱 Gallery | `mrrms-1.png`, `mrrms-2.png`, `mrrms-3.png` |
| H2O — Home to Office | `h2o` | 🖥️ Desktop | `h2o.png` |

Edit the `projects` array in **`src/components/Projects.tsx`** to change slugs, links (`github` / `live`), the `wip` badge, or gallery filenames.

</details>

---

## 🏗️ &nbsp; Architecture

```
src/
├─ App.tsx                 ◍ layout, scroll progress, section order
├─ index.css               ◍ @theme tokens · textures · keyframes
├─ lib/motion.ts           ◍ easing curves + reusable variants
└─ components/
   ├─ Hero · About · Skills · Experience · Projects · Education
   ├─ SmoothScroll.tsx     ◍ Lenis ⇄ Motion frame-loop sync
   └─ ui/
      ├─ Cursor.tsx        ◍ custom pointer (fine-pointer only)
      ├─ RevealText.tsx    ◍ word-by-word mask reveal
      ├─ Typewriter.tsx    ◍ type / delete loop with caret
      ├─ Marquee.tsx · MagneticButton.tsx · Section.tsx
```

<div align="center">

### 🛠️ &nbsp; Built with

![React](https://img.shields.io/badge/-React_19-1E1E21?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/-TypeScript-1E1E21?style=flat-square&logo=typescript&logoColor=3178C6)
![Vite](https://img.shields.io/badge/-Vite-1E1E21?style=flat-square&logo=vite&logoColor=646CFF)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_v4-1E1E21?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![Motion](https://img.shields.io/badge/-Motion-1E1E21?style=flat-square&logo=framer&logoColor=F4F3EE)
![Lenis](https://img.shields.io/badge/-Lenis-1E1E21?style=flat-square&logoColor=F4F3EE)
![Lucide](https://img.shields.io/badge/-Lucide-1E1E21?style=flat-square&logo=lucide&logoColor=F4F3EE)

</div>

---

<div align="center">

Made in Ghaziabad, India &nbsp;·&nbsp; © Aryan Tyagi

</div>
