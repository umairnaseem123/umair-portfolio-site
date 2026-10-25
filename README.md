# Umair Nasim — Portfolio

React + Vite + Tailwind CSS + React Router + Framer Motion + Lucide.

## Run locally (Windows PowerShell)

    npm install
    npm run dev

Production build: `npm run build` (output in `dist/`), preview with `npm run preview`.

## Editing content

All text lives in `src/data/content.js`. Add `github` / `live` URLs to a project there and the
buttons appear automatically; empty fields are never rendered. Project detail pages
(`/projects/:slug`) only show sections that have data.

## Deploying

Vercel/Netlify: build command `npm run build`, output directory `dist`.
`vercel.json` is included so routes like `/projects/afcip` work on refresh.

## Contact form

There is no backend. Submitting opens the visitor's email app with the message pre-filled.
