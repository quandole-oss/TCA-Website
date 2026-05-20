---
name: testing-tca-website
description: Test the TCA Website end-to-end. Use when verifying route changes, page content, footer links, or visual regressions.
---

# Testing the TCA Website

## Dev Server

```bash
cd /home/ubuntu/TCA-Website
bun run dev
# Runs on http://localhost:5177 by default (check vite.config.ts for port)
```

The dev server uses Vite with HMR. Changes are reflected immediately.

## Lint & Typecheck

```bash
# Biome lint + format check
npx biome check src/

# TypeScript typecheck
bunx tsc --noEmit
```

Note: `bun run lint` may fail with remote execution errors. Use `npx biome check` directly as a workaround.

## Key Routes to Test

| Route | Page | Key Content |
|-------|------|-------------|
| `/` | Home | Hero video, grade range (7-12), schedule comparison |
| `/the-model` | Model | Afternoon schedule, ensemble-heavy structure |
| `/music-program` | Music Program | 6 conservatory components with icons |
| `/admissions` | Admissions | College prep language, interest form |
| `/events` | Events | Grade range in diagnostic audience |
| `/faq` | FAQ | Grade range answer, "not right fit" section |
| `/contact` | Contact | Grade dropdown (7th-12th only), form fields |
| `/about` | About | Alpha ecosystem quote |
| `/guides` | Guides | Performance-first hiring language |
| `/partners` | Partners | Ecosystem positioning |
| `/privacy` | Privacy Policy | 4 placeholder sections, email link |
| `/terms` | Terms of Use | 4 placeholder sections, email link |
| `/anything-invalid` | 404 | "PAGE NOT FOUND", "404", Back to Home button |

## Footer Links

The footer contains links to all main pages plus:
- Privacy Policy (`/privacy`)
- Terms of Use (`/terms`)
- 6 Alpha ecosystem school external links

## Common Issues

- **Outline buttons on light backgrounds**: The `outline` variant of CTAButton uses white text/border (designed for dark sections). On light backgrounds, use a custom Link with navy styling instead.
- **Icon clipping**: Icons use circular badge design (navy bg, cyan artwork). If icons appear clipped, check the container's `overflow` and padding.
- **Tunnel expiry**: Dev tunnels via `deploy expose` expire when the environment restarts. Re-expose if the user reports S3 authorization errors.

## Exposing to User

```bash
# Use the deploy tool to expose localhost:5177
# Credentials will be provided (user/password for HTTP basic auth)
```

The tunnel proxy requires HTTP basic auth — these are NOT app login credentials.
