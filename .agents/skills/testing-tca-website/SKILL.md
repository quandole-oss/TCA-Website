---
name: testing-tca-website
description: Test the TCA Website end-to-end by running the dev server and verifying page content in the browser. Use when checking copy changes, layout, or BrainLift alignment.
---

# Testing the TCA Website

## Prerequisites

- Bun installed (project uses Bun as package manager)
- Dependencies installed: `bun install`

## Starting the Dev Server

```bash
cd /home/ubuntu/TCA-Website
bun run dev
```

The dev server typically starts on `localhost:5173`. If that port is taken, Vite auto-increments (5174, 5175, etc.). Check the terminal output for the actual port.

## Project Structure

All page components are in `src/components/tca/pages/`:

| Page | Route | File |
|------|-------|------|
| Home | `/` | `home.tsx` |
| The Model | `/the-model` | `model.tsx` |
| Music Program | `/music-program` | `music-program.tsx` |
| Admissions | `/admissions` | `admissions.tsx` |
| Events | `/events` | `events.tsx` |
| Guides | `/guides` | `guides.tsx` |
| Partners | `/partners` | `partners.tsx` |
| FAQ | `/faq` | `faq.tsx` |
| About | `/about` | `about.tsx` |
| Contact | `/contact` | `contact.tsx` |

UI components are in `src/components/tca/ui/` and layout in `src/components/tca/layout/`.

## Testing Approach

1. **Use browser GUI testing** — navigate pages via the nav bar, scroll to sections, click interactive elements (FAQ accordions, dropdowns)
2. **Verify text from both DOM and visual** — the HTML output includes DOM content; compare against expected copy
3. **Record the session** — use screen recording with annotations for test_start/assertion at each verification point
4. **Check interactive elements** — FAQ accordions expand on click, contact form dropdowns show correct options

## Key Content to Verify (BrainLift Alignment)

These are the core claims from the BrainLift document. If any copy changes are made, verify these haven't regressed:

- **Grade range**: Should be grades 7–12 (appears on home, FAQ, events, contact dropdown)
- **Schedule**: Ensemble & Performance should be the largest afternoon block (currently 1:30–3:00 PM). Check the Model page.
- **College prep language**: "conservatory and college prep track" should appear on home hero, admissions intro, FAQ answers
- **Hiring philosophy**: Guides page should emphasize performance-track credentials first
- **Ecosystem framing**: About page should reference "Same playbook, different passion" for TSA/TCA parallel

## Common Issues

- **Port conflicts**: If `bun run dev` fails, check for existing processes on port 5173+ and either kill them or let Vite auto-select
- **FAQ answers hidden by default**: Click the FAQ question button to expand and verify the answer text
- **Contact dropdown**: Must click the `<select>` element to visually verify options; DOM also shows all `<option>` elements
- **Outline buttons on light backgrounds**: Some buttons use white text/border meant for dark sections. If a button appears invisible, check whether it's on a light background and needs navy styling.

## Lint & Type Check

```bash
bun run lint
bun run typecheck
```

The build script runs typecheck before building: `tsc --noEmit && vite build`.

## Devin Secrets Needed

None required for basic testing. The site is a static frontend with no backend API calls.
