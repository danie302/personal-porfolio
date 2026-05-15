# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for a web developer. Built with Next.js (App Router), TypeScript, and Material UI. Deployed on Vercel.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:3000
npm run build        # production build
npm start            # serve production build locally
```

Before running, copy `.env.example` to `.env` and fill in personal data — the app will not work without these values.

## Architecture

All personal content (name, bio, email, links, CV path, profile image, SEO data) is read from `NEXT_PUBLIC_*` environment variables, never hardcoded in components. The single source of truth is `src/lib/env.ts`, which re-exports typed values from `process.env` — **all components import from there instead of calling `process.env` directly**.

Structured content (projects, experience, skills) can live either as JSON strings in `.env` (parsed in `src/data/`) or as static data files in `src/data/` that only pull URLs/emails from env. One approach should be used consistently — don't mix both.

The layout is a single scrollable page with anchor-based navigation (`#about`, `#experience`, `#projects`, `#skills`, `#contact`). Source is organized as:

- `src/app/` — Next.js App Router entry (layout, page, metadata/Open Graph)
- `src/sections/` — one file per page section (About, Experience, Projects, Skills, Contact)
- `src/components/` — reusable MUI-based UI pieces (e.g. `ProjectCard`)
- `src/theme/` — MUI theme customization
- `src/lib/env.ts` — typed env access
- `src/data/` — optional parsers for JSON env vars or static content arrays
- `public/` — static assets: `cv.pdf`, `images/profile.jpg`, favicon, OG image

## Environment variables

See `.env.example` for the full list. All are prefixed `NEXT_PUBLIC_` (browser-exposed). The most important ones:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FULL_NAME` | Name shown in hero and metadata |
| `NEXT_PUBLIC_EMAIL` | Contact link target |
| `NEXT_PUBLIC_CV_PATH` | Path to downloadable PDF (e.g. `/cv.pdf`) |
| `NEXT_PUBLIC_SITE_URL` | Used for Open Graph and canonical URLs |

On Vercel, these must be added under Project → Settings → Environment Variables for all environments (Production, Preview, Development).
