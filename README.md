# VIB Tech Pty Ltd — Website

Prototype website for VIB Tech Pty Ltd, an Australian telecommunications infrastructure company.
Built with **Next.js 15 (App Router) + React 19 + TypeScript**, animated with **motion**, icons from **lucide-react**,
and styled with plain CSS using mobile-first media queries. Forms validate in the browser and are emailed via
[Formspree](https://formspree.io) (see section 7).

## 1. Requirements

- **Node.js 20 or 22 (LTS)** — download from https://nodejs.org. Check with `node -v`.
  (If you use nvm: `nvm use` picks up the `.nvmrc` file.)
- **VS Code** — https://code.visualstudio.com
- Optional: the **Claude Code** extension for VS Code (VS Code will suggest it when you open the folder).

## 2. Run it locally

1. Unzip `vib-tech-website.zip` somewhere (e.g. `Documents/vib-tech`).
2. In VS Code: **File → Open Folder…** and choose the `vib-tech` folder.
3. Open a terminal in VS Code: **Terminal → New Terminal** (or ``Ctrl+` ``).
4. Install dependencies (first time only, takes a minute or two):
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open **http://localhost:3000** in your browser. Edits to any file reload the page automatically.
   Stop the server with `Ctrl+C` in the terminal.

Tip: you can also press **F5** in VS Code (“Next.js: dev server”) to start it and open the browser.

## 3. Other commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload at http://localhost:3000 |
| `npm run build` | Production build. Exports a static site into `out/` |
| `npm start` | Serves the built `out/` folder locally (run `npm run build` first) |
| `npm run typecheck` | Checks TypeScript types without building |
| `npm run preview:build` | Builds a portable copy in `preview/` with relative paths (opens from any folder or sub-path) |

## 4. Deploying

`npm run build` produces plain static files in `out/`. Upload that folder to any static host
(Vercel, Netlify, Cloudflare Pages, cPanel hosting, S3, etc.). On Vercel or Netlify you can also just
connect the Git repository; the build command is `npm run build` and the output folder is `out`.

## 5. Where things are

```
app/                 Pages (Next.js App Router)
  layout.tsx         Shared layout: fonts, header, footer, site title/description
  globals.css        ALL styling and media queries (breakpoints 560 / 768 / 1024 / 1280px)
  page.tsx           Home
  services/ industries/ about/ careers/ contact/   One folder per page (page.tsx)
components/          Reusable pieces: Header, Footer, forms, slider, cards, animations
lib/data.ts          ALL site content: company details, services, industries, jobs, testimonials, team
lib/validate.ts      Form validation helpers (email, Australian phone, postcode)
scripts/             build-preview.mjs (portable preview build)
```

**To change wording, phone numbers, services or job ads, edit `lib/data.ts`.** Most text lives there.

## 6. Placeholders to replace before going live

Phone number, email, office addresses, testimonials, stats, timeline and leadership team names in
`lib/data.ts` and `app/contact/page.tsx`, plus the map placeholder on the Contact page.

## 7. Next steps for production

- Replace the stock photos in `public/images/` with real VIB Tech project photos (see `public/images/CREDITS.md`).

## 7. Form emails (Formspree)

The site has one form (Contact us, on the Home and Contact pages). It sends through Formspree.

1. Sign up at https://formspree.io with the email address that should receive enquiries and verify it.
2. Create a new form. Copy its ID (the part after `/f/` in the endpoint, e.g. `xyzabcde`).
3. Paste it into `formspreeId` in `lib/data.ts` and rebuild.

Each email's subject says which form it came from, and replying goes straight to the person who submitted it.
To change the receiving address later, change it in the Formspree dashboard (Form → Settings); no code change needed.

- Add a privacy policy page, sitemap, analytics and SEO metadata per page.
