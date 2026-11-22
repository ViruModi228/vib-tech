# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is
Marketing website prototype for **VIB Tech Pty Ltd**, an Australian telecommunications infrastructure company
(network planning, fibre/copper/wireless construction, testing and commissioning, fault restoration).
Audience: Australian businesses, schools, councils, carriers; also job applicants (Careers page).
Tone: professional, plain-English, Australian spelling (organisation, colour, centre), no hype.

## Commands
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — static export to `out/` (must pass before you finish a change)
- `npm run typecheck` — TypeScript check
- `npm run preview:build` — portable flat-HTML build in `preview/` (uses NEXT_PUBLIC_PREVIEW=1)

## Stack
Next.js 15 App Router, React 19, TypeScript (strict), `motion` (import from `motion/react`), `lucide-react` icons.
`output: 'export'` in `next.config.mjs` — the site is fully static. Do NOT add server-only features
(API routes, server actions, `next/headers`, dynamic rendering) unless the user asks to move off static export.
No Tailwind or CSS framework: all styles are in `app/globals.css`.

## Structure
- `app/<route>/page.tsx` — one folder per page; pages are server components that compose components.
- `app/layout.tsx` — fonts (Inter body, Manrope headings via next/font), Header, Footer, metadata.
- `components/` — `'use client'` only where state/animation is needed (Header, ContactForm, Testimonials, Stats, Faq, JobCard, Reveal, Parallax, ScrollProgress).
- Photos live in `public/images/` (sources in `public/images/CREDITS.md`). Use plain `<img src={asset('/images/x.jpg')}>`
  (`asset` from `@/components/A`) or `<Parallax src=…>`, never CSS `background-image`, so the preview build resolves paths.
- `lib/data.ts` — single source of truth for content (company details, nav, services, industries, stats, process,
  testimonials, partners, team, jobs, perks). Prefer editing data here over hard-coding text in pages.
- `lib/validate.ts` — `isEmail`, `isAuPhone`, `isPostcode`, `Errors<T>` type.
- `components/Icon.tsx` — maps string icon names used in `lib/data.ts` to lucide components. When you add a new
  icon name to data, import and register it in this map.
- `components/A.tsx` — link wrapper. **Always import `Link` from `@/components/A`, not `next/link`**, so the
  portable preview build (plain relative `.html` links) keeps working.

## Styling conventions
- Mobile-first: base styles target phones, then `@media (min-width: …)` at **560, 768, 1024, 1280px**.
- Design tokens are CSS variables in `:root` (navy + green palette sampled from the logo: `--navy-*`, `--green-700`, `--accent-400/300`, `--soft`, `--grad`, radii, shadows).
  Reuse them; don't hard-code new colours.
- BEM-ish class names (`.card`, `.card__icon`, `.card--service`, state classes `.is-active`, `.is-open`, `.has-error`).
- Buttons: `.btn` + `.btn--primary | --dark | --ghost | --light | --outline-light`, sizes `--sm | --lg | --block`.
- Sections: `<section className="section [section--alt|section--dark|section--tight]"><div className="container">`.
- Inputs use 16px font (prevents iOS zoom). Respect `prefers-reduced-motion` (already handled globally and in `Reveal`).

## Forms
All forms validate client-side on submit, then live re-validate; show errors via `components/Field.tsx`
(`aria-invalid` + `aria-describedby`). They submit via `sendForm()` in `lib/submit.ts`, which posts to Formspree
(form ID in `formspreeId`, `lib/data.ts`) and shows a success state, or a `.form-error` alert if sending fails.
The recipient email is configured in the Formspree dashboard, not in code.
There is ONE form: `ContactForm` (Home `#enquiry`, Contact `#enquiry`). The client asked for no quote wizard, job
application/resume upload or newsletter. "Request a quote", service and job buttons link to `/contact/?topic=<value>#enquiry`
(and `&role=<job slug>` for careers), which pre-selects the topic. When wiring a real backend, keep the same validation.

## Content notes
- Logo files are in `public/brand/` (`vib-mark.png` for header/footer); favicons are `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`.
  The client has nbn's permission to use the nbn™ mark shown in the full logo.
- Real: ABN 11 623 997 571, ACN 623 997 571, founded 2016, 10k+ projects, address 92 Kapinka Pde, Riverlea Park SA 5120, directors Piyush and Vibhuti Gajera. Placeholders: testimonials, other stats, timeline milestones between 2016 and 2026.
- Careers page lists roles only (no application form); "Enquire about this role" goes to the contact form.
- Careers roles come from the client's position descriptions (Field Engineer, Network Planner, Technical Officer),
  including the approximate % time split per duty area. Keep those percentages accurate if editing.

## Before finishing a change
1. `npm run build` passes with no type errors.
2. Check the page at phone (≈390px), tablet (≈820px) and desktop (≈1440px) widths — no horizontal scrolling.
