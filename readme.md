# Personal Portfolio

A modern, responsive web portfolio to present myself as a web developer—who I am, what I've built, and how to get in touch.

**Repository:** [github.com/danie302/personal-porfolio](https://github.com/danie302/personal-porfolio)

## Overview

This site is a single destination for recruiters, clients, and collaborators. Visitors can learn about my background, browse past work, see the technologies I use, download my CV, and reach out by email.

## Features

| Section | Description |
|--------|-------------|
| **About** | Short introduction: role, focus areas, and what I'm looking for |
| **Experience** | Work history, education, and relevant milestones |
| **Projects** | Selected work with titles, descriptions, tech used, and links (live demo / repo) |
| **Skills** | Languages, frameworks, tools, and areas of strength |
| **CV** | One-click download of my resume (PDF) |
| **Contact** | Email link or form so visitors can get in touch |

## Planned site structure

```
/                 → Hero + short pitch
#about            → Bio and photo
#experience       → Timeline or cards
#projects         → Project grid or list
#skills           → Tech stack badges or categories
#contact          → Email CTA + optional social links
```

## Tech stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI** | [Material UI (MUI)](https://mui.com/) |
| **Hosting** | [Vercel](https://vercel.com/) |

Static assets (profile image, project thumbnails) and the downloadable CV live in `public/` (e.g. `public/cv.pdf`).

## Environment variables

Personal and site content is driven by a **`.env`** file so the same values can be reused across components, metadata, and deployments without hardcoding.

1. Copy the template: `cp .env.example .env`
2. Fill in your values in `.env` (never commit this file).
3. On Vercel, add the same variables under **Project → Settings → Environment Variables**.

| File | Purpose |
|------|---------|
| `.env` | Your real data (local + secrets if any) — **gitignored** |
| `.env.example` | Committed template with placeholder keys — safe to share |

In Next.js, variables exposed to the browser must use the `NEXT_PUBLIC_` prefix. The app reads them through a single module (e.g. `src/lib/env.ts`) so components import typed config instead of calling `process.env` everywhere.

### Example variables

```bash
# Profile & contact
NEXT_PUBLIC_FULL_NAME="Your Name"
NEXT_PUBLIC_JOB_TITLE="Web Developer"
NEXT_PUBLIC_TAGLINE="Building modern web experiences"
NEXT_PUBLIC_EMAIL="you@example.com"
NEXT_PUBLIC_GITHUB_URL="https://github.com/danie302"
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/in/your-profile"

# About
NEXT_PUBLIC_BIO="Short introduction about yourself, focus areas, and goals."

# Assets & CV
NEXT_PUBLIC_CV_PATH="/cv.pdf"
NEXT_PUBLIC_PROFILE_IMAGE="/images/profile.jpg"

# Site (SEO / metadata)
NEXT_PUBLIC_SITE_URL="https://your-domain.vercel.app"
```

Structured lists (experience, projects, skills) can live in `.env` as JSON strings for full reuse, or stay in `src/data/` files that only reference env for URLs and contact details—pick one approach and keep it consistent.

```bash
# Optional: JSON arrays (escape quotes in .env or use a single-line minified JSON)
NEXT_PUBLIC_PROJECTS='[{"title":"Project A","description":"...","tech":["Next.js"],"demoUrl":"...","repoUrl":"..."}]'
NEXT_PUBLIC_EXPERIENCE='[{"role":"Developer","company":"...","period":"2024 – Present","highlights":["..."]}]'
NEXT_PUBLIC_SKILLS='{"frontend":["TypeScript","React"],"tools":["Git","Vercel"]}'
```

## Getting started

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repository
git clone https://github.com/danie302/personal-porfolio.git
cd personal-porfolio

# Install dependencies
npm install

# Configure personal data
cp .env.example .env
# Edit .env with your name, email, links, bio, etc.

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Production build (optional, before deploy)
npm run build
npm start
```

## Customization checklist

Before publishing, update `.env` (and Vercel env vars for production):

- [ ] `NEXT_PUBLIC_FULL_NAME`, `NEXT_PUBLIC_JOB_TITLE`, `NEXT_PUBLIC_TAGLINE`
- [ ] `NEXT_PUBLIC_BIO` and `NEXT_PUBLIC_PROFILE_IMAGE`
- [ ] `NEXT_PUBLIC_EXPERIENCE` (or data file fed from env)
- [ ] `NEXT_PUBLIC_PROJECTS` (titles, descriptions, stack, demo/repo URLs)
- [ ] `NEXT_PUBLIC_SKILLS` (grouped by category)
- [ ] `NEXT_PUBLIC_CV_PATH` and file at `public/cv.pdf`
- [ ] `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_GITHUB_URL`, optional LinkedIn
- [ ] `NEXT_PUBLIC_SITE_URL` for metadata and Open Graph
- [ ] Favicon and OG image in `public/`

## Project structure

```
personal-porfolio/
├── .env                  # Personal data (not committed)
├── .env.example          # Template for all env keys
├── public/
│   ├── cv.pdf
│   └── images/
├── src/
│   ├── app/              # Next.js App Router (layout, page, metadata)
│   ├── components/       # Reusable MUI-based UI (Hero, ProjectCard, …)
│   ├── sections/         # Page sections (About, Experience, …)
│   ├── lib/
│   │   └── env.ts        # Typed access to process.env
│   ├── theme/            # MUI theme customization
│   └── data/             # Optional parsers for JSON env vars
├── readme.md
└── package.json
```

## Deployment

The app is deployed on **Vercel**, connected to [danie302/personal-porfolio](https://github.com/danie302/personal-porfolio):

1. Import the GitHub repo in the [Vercel dashboard](https://vercel.com/new).
2. Vercel auto-detects Next.js; default build command `npm run build` and output `.next` are fine.
3. Add every `NEXT_PUBLIC_*` variable from `.env.example` in **Settings → Environment Variables** (Production, Preview, Development).
4. Push to `main` to trigger preview and production deployments.
5. Optionally add a custom domain under Project → Settings → Domains.
6. After deploy, confirm CV download and `mailto:` links use the values from env on the live URL.

## Contact

Displayed on the site from `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_GITHUB_URL`, and related env vars—not hardcoded in components.

- GitHub: [@danie302](https://github.com/danie302)

## License

This project is for personal use. Adjust or add a license if you open-source any part of it.
