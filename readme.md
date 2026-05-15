# Personal Portfolio

A neo-brutalist single-page portfolio for Daniel Daza — Frontend Developer based in Barranquilla, Colombia.

**Repository:** [github.com/danie302/personal-porfolio](https://github.com/danie302/personal-porfolio)

## Tech stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | Custom CSS — no UI library |
| **Fonts** | Bricolage Grotesque · Instrument Serif · JetBrains Mono |
| **Hosting** | [Vercel](https://vercel.com/) |

## Sections

| Anchor | Description |
|--------|-------------|
| Hero | Full-viewport display type with animated entry and rotating star |
| `#about` | Bio and stat grid |
| `#work` | Project cards — colored neo-brutalist grid |
| `#experience` | Timeline with large year numbers |
| `#stack` | Skill tags grouped by category |
| `#contact` | Full-bleed CTA with email link and social links |

## Getting started

**Prerequisites:** Node.js 18+ and npm

```bash
git clone https://github.com/danie302/personal-porfolio.git
cd personal-porfolio
npm install
cp .env.example .env
# Fill in your values, then:
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build locally
```

## Environment variables

All personal content is driven by `NEXT_PUBLIC_*` variables — never hardcoded in components. The single entry point is `src/lib/env.ts`, which re-exports typed values; components import from there instead of reading `process.env` directly.

```bash
# Profile & contact
NEXT_PUBLIC_FULL_NAME="Daniel Daza"
NEXT_PUBLIC_JOB_TITLE="Frontend Developer"
NEXT_PUBLIC_TAGLINE="Building high-performance React/TypeScript interfaces"
NEXT_PUBLIC_EMAIL="you@example.com"
NEXT_PUBLIC_GITHUB_URL="https://github.com/danie302"
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/in/your-profile"

# About
NEXT_PUBLIC_BIO="Your bio paragraph."

# Assets
NEXT_PUBLIC_CV_PATH="/cv.pdf"
NEXT_PUBLIC_PROFILE_IMAGE="/images/profile.jpg"

# SEO
NEXT_PUBLIC_SITE_URL="https://your-domain.vercel.app"

# Structured content — single-line JSON wrapped in single quotes
NEXT_PUBLIC_EXPERIENCE='[{"role":"...","company":"...","period":"MMM YYYY – MMM YYYY · Location","highlights":["..."]}]'
NEXT_PUBLIC_PROJECTS='[{"title":"...","description":"...","tech":["..."],"repoUrl":"...","demoUrl":"..."}]'
NEXT_PUBLIC_SKILLS='{"frontend":["TypeScript","React"],"backend":["Node.js"]}'
```

The `period` field uses a `·` separator to embed the location: `"Nov 2021 – Current · Remote — Colombia"`. The Experience section parses this to extract the display year and location label.

See `.env.example` for the full list of keys.

## Project structure

```
src/
├── app/
│   ├── globals.css          # Design tokens (CSS vars), all component styles
│   ├── layout.tsx           # Font loading, metadata, html shell
│   └── page.tsx             # Composes all sections
├── components/
│   ├── Cursor.tsx           # Custom lerp cursor (client)
│   ├── Nav.tsx              # Fixed nav with mix-blend-mode: difference
│   ├── Marquee.tsx          # Infinite scrolling ticker
│   └── RevealObserver.tsx   # IntersectionObserver scroll-reveal (client)
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Work.tsx             # Project card grid
│   ├── Experience.tsx       # Timeline
│   ├── Stack.tsx            # Skill tags
│   └── Contact.tsx
├── lib/
│   └── env.ts               # Typed gateway to process.env
└── data/
    └── index.ts             # JSON parsers for experience / projects / skills
public/
├── cv.pdf
└── images/
```

## Deployment

1. Import the repo in the [Vercel dashboard](https://vercel.com/new).
2. Add every `NEXT_PUBLIC_*` variable under **Settings → Environment Variables**.
3. Push to `main` — Vercel builds and deploys automatically.
