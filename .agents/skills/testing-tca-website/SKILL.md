---
name: testing-tca-website
description: Test the TCA Website visual assets and pages end-to-end. Use when verifying visual asset integration, page rendering, or branding changes.
---

# Testing the TCA Website

## Prerequisites

- Bun installed (used as package manager and dev server)
- Dependencies installed: `bun install`

## Devin Secrets Needed

None — this is a static frontend with no auth or API keys.

## Starting the Dev Server

```bash
cd /home/ubuntu/TCA-Website
bun dev
```

The server starts on `localhost:5173` by default. If that port is in use, Vite auto-increments (5174, 5175, etc.) — check the terminal output for the actual port.

## Pages with Visual Assets

| Page | Route | Assets to Verify |
|------|-------|------------------|
| Homepage | `/` | hero.png, the-problem.png, alpha-ecosystem.png, 3 model icons, 6 conservatory afternoon icons |
| The Model | `/the-model` | 5 outcome icons (academic-confidence, practice-habits, ensemble-responsibility, performance-confidence, feedback-literacy) |
| Music Program | `/music-program` | 6 program component icons (guided-practice, musicianship, ensemble, performance, repertoire, life-skills) |
| About | `/about` | mission.png |
| Partners | `/partners` | partner-ecosystem.png |
| All pages | header | tca-logo.png in top-left, favicon in browser tab |

## What to Check

1. **Images render as actual photos/illustrations** — not placeholder text boxes with emoji + label text like "Hero image / video placeholder"
2. **Icons render as circular cyan icon images** — not two-letter text abbreviations like "AA", "GP", "LS" in gradient boxes
3. **Header logo** is the TCA treble clef monogram image — not a cyan text box with "TCA"
4. **Favicon** shows the TCA monogram in the browser tab
5. **OG meta tag**: `document.querySelector('meta[property="og:image"]')` should return `/og-image.png`
6. **Favicon links**: Check for 3 links — `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`

## Icon Mapping

Icons are stored in `/public/icons/` and mapped via `src/components/tca/ui/icon-placeholder.tsx`. The `ICON_MAP` maps label strings to filenames. If a label isn't in the map, the component falls back to a text abbreviation — this fallback indicates a missing mapping, not a broken image.

## Build Verification

```bash
bun run check    # runs biome lint + format check
bun run build    # production build
```

## Tips

- The site uses Vite + React (not Next.js). No SSR, no API routes.
- Tailwind CSS v4 with CSS variables for brand colors.
- All assets are static PNGs in `/public/`.
- No CI is configured — rely on local `bun run check` and `bun run build` for validation.
- If ports 5173-5176 are occupied, the dev server may land on a higher port. Always check terminal output.
