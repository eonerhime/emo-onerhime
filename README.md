# emo-onerhime

Personal portfolio site for Emo Onerhime — Full-Stack Product Engineer & AI Agent Developer. Built with Next.js, showcasing shipped products including SportsPred, HireFlow, AfroJamz, toutMessages, Abara, Glowreeyah, AlphaDeck, and Cecilia Onerhime.

Live at [emo-onerhime.vercel.app](https://emo-onerhime.vercel.app).

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion for scroll/reveal animations
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

```text
src/
  app/            Root layout, page, favicon/OG image generation
  components/     Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
  data/           Content: experience.ts, projects.ts, skills.ts
  lib/            Shared helpers (og.tsx for Open Graph image generation)
public/
  projects/       Project cover images
```

Sections are composed in [src/app/page.tsx](src/app/page.tsx). Content (projects, skills, experience) lives in [src/data/](src/data/) and is edited directly rather than pulled from a CMS.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Notes for contributors

This project runs on a customized Next.js build — read [AGENTS.md](AGENTS.md) and the docs under `node_modules/next/dist/docs/` before making framework-level changes, as APIs and conventions may differ from stock Next.js.
