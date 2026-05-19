---
name: testing-tca-visuals
description: Test TCA Website visual assets (icons, images) render correctly across all pages. Use when verifying icon integration, image cropping, or visual asset changes.
---

# Testing TCA Website Visual Assets

## Prerequisites

- Dev server running: `bun dev` (default port 5173, may use 5174+ if port taken)
- Verify server is serving static files: `curl -s http://localhost:<port>/icons/guided-practice.png | xxd | head -1` should show PNG magic bytes `8950 4e47`, not HTML

## Pages with Icons

| Page | Route | Icon Section | Count | Background |
|------|-------|-------------|-------|------------|
| Homepage | `/` | TCA Model | 3 | White cards |
| Homepage | `/` | Conservatory Afternoon | 6 | Dark navy cards |
| Music Program | `/music-program` | Program Components | 6 | White cards |
| The Model | `/the-model` | What Students Build | 5 | Dark navy cards |

## Icon Files (12 total in `/public/icons/`)

- guided-practice.png, musicianship.png, ensemble.png, performance.png
- repertoire.png, life-skills.png, accelerated-academics.png, academic-confidence.png
- practice-habits.png, ensemble-responsibility.png, performance-confidence.png, feedback-literacy.png

## What to Check

1. **Icons render as `<img>` elements** — not fallback text abbreviations like "GP", "AA", "M"
2. **Transparent backgrounds** — no gray rectangle, checkerboard, or gradient visible around icons
3. **Clean edges on both backgrounds** — icons should look good on white cards AND dark navy cards
4. **All icons visually distinct** — each of the 12 icons should have a unique design
5. **Correct icon-to-label mapping** — the icon visual should match its label (e.g., "Ensemble" shows group figures)

## Common Failure Modes

- **Stale dev server**: If icons show HTML instead of images, kill and restart the dev server
- **Gray background artifacts**: Usually means the cropping script didn't properly remove the composite background. Check individual PNG files by opening them directly in browser (`localhost:<port>/icons/<name>.png`)
- **Text fallback showing**: The `icon-placeholder.tsx` component falls back to text initials if the image path lookup fails. Check ICON_MAP in that file matches the label strings used in page components

## Build Verification

```bash
bun run lint      # biome check
bun run typecheck # tsc --noEmit  
bun run build     # vite build
```

All three must pass with zero errors.

## Devin Secrets Needed

None — this is a static site with no auth or API keys required for testing.
