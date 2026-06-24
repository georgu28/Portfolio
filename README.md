# George Gu — Portfolio

Single-page, recruiter-focused portfolio. Built with **Next.js 16 (App Router) · React 19 · Tailwind v4 · shadcn/ui**. Statically prerendered for fast first paint and full crawlability (all content is in the server-rendered HTML — visible without JavaScript).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## Where content lives

All site content is in a single file: **`src/data/resume.tsx`** (the `DATA` object) — identity, contact/CTAs, work, projects, skills, education, publication. Each work and project entry leads with an `impact: { value, label }` metric, which the UI renders first.

- `src/app/page.tsx` — the single-page layout (hero + sections).
- `src/components/section/work-section.tsx` — impact-first experience cards.
- `src/components/project-card.tsx` — impact-first project cards.
- `src/components/navbar.tsx` — floating dock (section anchors + GitHub/LinkedIn/Resume + theme).
- `src/app/globals.css` — design tokens (monochrome base + single blue accent `#2563EB`).

## TODO — fill in placeholders

These are clearly marked in `src/data/resume.tsx` as `REPLACE_*`:

- [ ] **DOI URL** for the *Antibiotics* 2023 paper (`publication.doi`).
- [ ] **GitHub repo URL** for Scalable Search Engine.
- [ ] **GitHub repo URL** for Resume Screener.
- [ ] **Live-demo (Streamlit) URL** for Resume Screener.

Already in place: `public/resume.pdf`, `public/images/headshot1.jpg` (hero — swap to `headshot2.jpg` via `DATA.headshotUrl`), company logos, and the Resume Screener screenshot.

## Deploy (Vercel)

This repo (`georgu28/Portfolio`) previously served a Vite app. After pushing this Next.js app:

- In the Vercel project settings, ensure **Framework Preset = Next.js** (usually auto-detected). Clear any custom Build/Output settings left over from the Vite setup.
- No environment variables required.
