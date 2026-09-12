# Jae Lee — one-pager

A personal "about me" one-pager, built as a screen-printed poster: a deep
neutral ink, one acid accent, and nothing else. Served at `/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
npm run typecheck            # next typegen + tsc --noEmit
npm run lint                 # eslint
```

## What's here

| Path | What it is |
| --- | --- |
| `app/page.tsx` | The whole page — a React Server Component, no client JS |
| `app/globals.css` | The entire design system: plain CSS, custom properties |
| `app/layout.tsx` | Metadata (title, description, Open Graph, Twitter card) |
| `app/opengraph-image.tsx` | 1200×630 link-preview image, generated locally |
| `app/icon.tsx` | Accent monogram favicon, generated locally |
| `assets/fonts/` | Liberation Sans Bold (SIL OFL 1.1), used only by the two generated images |

Next.js (App Router) 16, React 19, TypeScript, plain CSS. No CSS framework, no
UI library, no client components, and no remote image or icon service — the page
uses the system Helvetica/Arial stack and draws everything else in CSS.

## Copy you will want to change

The name, the email (`jaequery@gmail.com`) and the link to it are real.
**Everything else is invented** so the build had nothing to wait on. Swap these
before this goes anywhere public:

- **Discipline and city** — "Design Engineer", "Seoul" (`app/page.tsx`, the kicker).
- **The availability tag** — "Available January 2027", repeated in the fine-print
  row and in the generated OG image.
- **The three projects** — `Halflight`, `Meridian`, `Nocturne` and their outcome
  paragraphs are fictional, as are the numbers in them.
- **The four practice cells** and the three about paragraphs — written in voice,
  but not from a real CV.

## Before deploying

`app/layout.tsx` falls back to `http://localhost:3000` for `metadataBase`, which
is what the `og:image` and `og:url` tags resolve against. Set
`NEXT_PUBLIC_SITE_URL` to the real origin or the link preview will point at
localhost.
