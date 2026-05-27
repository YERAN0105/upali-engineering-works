# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (also runs TypeScript check)
npm run start    # serve the production build
npm run lint     # ESLint via next lint
npx tsc --noEmit # type-check without building
```

There are no tests in this project.

## Architecture

Single-page marketing website built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v3. The entire site is one statically-rendered route (`/`).

**Page composition** — `src/app/page.tsx` imports and stacks all section components in order: Header → Hero → TrustedBy → About → VehicleValuation → SpareParts → WhyChooseUs → Team → Branches → Contact → Footer. Each section component is self-contained (its own data, markup, and styles). Most are React Server Components; two require `"use client"`:

- `FadeInSection` — IntersectionObserver wrapper that adds `.visible` to `.anim-fade` elements on scroll. Accepts optional `delay` (ms) and `className` props.
- `ValuationForm` — Formspree-backed enquiry form with controlled status state (`idle | sending | success | error`)

**Animation contract** — The `.anim-fade` / `.anim-fade.visible` CSS classes live in `globals.css`. `FadeInSection` is the only component that applies them. Wrap any block in `<FadeInSection delay={n}>` (delay in ms) to opt into the scroll-triggered fade.

**Marquee contract** — `TrustedBy.tsx` renders a continuously scrolling logo strip between Hero and About. The animation is driven by `.marquee-outer` / `.marquee-track` / `@keyframes marquee` in `globals.css` (speed: `32s`). The logo list is duplicated in the markup so the `-50%` translate creates a seamless loop. Hovering sets `animation-play-state: paused`. Each logo entry in the `LOGOS` array accepts an optional `img` field (`"/logos/filename.png"`) — entries with `img` render an `<img>` tag; entries without it render a styled text badge as a placeholder. Logo files go in `public/logos/`.

**Theming** — Two source-of-truth locations that must stay in sync:
1. `tailwind.config.ts` lines 5–6: `NAVY` and `AMBER` constants — controls all Tailwind utility classes (`bg-navy`, `text-amber`, etc.)
2. `globals.css` `:root` block — CSS custom properties for any non-Tailwind usage

To retheme, change the hex values in **both** places.

**SEO / metadata** — All SEO is in `src/app/layout.tsx`: Next.js `Metadata` export (title, description, Open Graph, Twitter card) and an inline JSON-LD `<script>` for `AutomotiveBusiness` structured data including all four branches.

**Section scroll targets** — Each section uses `id="..."` and `scroll-mt-20` to offset for the fixed 80px header. Nav links in `Header.tsx` use matching `href="#..."` anchors.

## Key placeholder values to replace

| File | What to change |
|---|---|
| `src/components/ValuationForm.tsx:20` | `FORMSPREE_ID = "YOUR_FORM_ID"` — get a free ID from formspree.io |
| `src/components/Branches.tsx` | `BRANCHES` array — phone numbers, addresses, Maps URLs, contact names |
| `src/components/Contact.tsx:1` | `WHATSAPP_NUMBER` constant |
| `src/components/Team.tsx` | `TEAM` array — names, roles, bios |
| `src/app/layout.tsx` | Domain URL (`https://upaliengineering.lk`), phone, email in metadata and `jsonLd` |
| `src/components/TrustedBy.tsx` | `LOGOS` array — add `img: "/logos/filename.png"` to each entry once you have real logo files; remove `category` field and `ACCENT` constant once all placeholders are replaced |
| `public/logos/` | Partner logo images referenced by `TrustedBy.tsx` |
| `public/` | Add `og-image.png` (1200×630 px) for social sharing previews |
| `public/` | Add `hero-image.jpg` and `about-shop.jpg` to replace the styled placeholder divs in `Hero.tsx` and `About.tsx` |

Image placeholders are styled `<div>` blocks with inline comments — replace each with an `<img>` tag or `next/image` pointing to a file in `public/`.
