# Portfolio Mlarrosa

A statically generated personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Vercel for hosting

## Local development

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Create a production build:
   `npm run build`

## Content files

Update these files to personalize the portfolio:

- `src/content/profile.ts`
- `src/content/experience.ts`
- `src/content/projects.ts`
- `src/content/planned-projects.ts`
- `src/content/socials.ts`
- `src/content/stack.ts`

The current content is structured and ready to edit, but some links and copy are placeholders until you replace them with your real details.

## Design notes

- The layout is intentionally minimal and reference-driven.
- The background uses a subtle Death Star-inspired surface treatment instead of overt franchise styling.
- Sections are organized as a single-page portfolio for fast scanning and easy maintenance.

## Deployment on Vercel

1. Push the repository to GitHub.
2. Sign in to Vercel and import the repository.
3. Keep the default framework detection for Next.js.
4. Deploy the `main` branch.
5. After the first deployment, optionally attach your custom domain in the Vercel project settings.

## Recommended next content pass

Before launch, replace these placeholder values:

- Email address in `src/content/socials.ts`
- LinkedIn URL in `src/content/socials.ts`
- Resume destination in `src/content/profile.ts`
- Project descriptions and roadmap items with your real work
