# The Heal Beacon

Premium, editorial, SEO-focused health and wellness affiliate site for women 40+.
Positioning: evidence-aware weight-loss and wellness guidance (hormones, metabolism,
strength, nutrition, realistic product reviews). Calm, supportive, non-shaming, YMYL-safe.
It must read like a trustworthy health publication, not a ClickBank funnel.

- Brand: The Heal Beacon
- Domain: https://thehealbeacon.com
- Support email: hello@thehealbeacon.com
- Monogram: HB

## Tech stack

- Next.js (App Router, latest) + React + TypeScript (strict).
- Plain CSS in `app/globals.css` (no Tailwind). Design tokens in `lib/design-tokens.ts`.
- Fonts via `next/font/google`: Source Serif 4 (display, `--font-display`), Nunito Sans
  (body, `--font-body`).
- ESLint: `eslint-config-next` (core-web-vitals + typescript).
- Icons: `@phosphor-icons/react`.

## Commands

- `npm run dev` - local dev server (http://localhost:3000)
- `npm run build` - production build (run before declaring work done)
- `npm run start` - serve the production build
- `npm run lint` - eslint

Always run `npm run lint` and `npm run build` after changes.

## Single source of truth

`lib/design-tokens.ts` exports `site` (name, shortName, monogram, url, supportEmail,
ogImage, description) and `colors`. `app/layout.tsx` derives `metadataBase`, OpenGraph
url/siteName/image, and the title template from `site`. Do not hardcode the brand,
domain, or email anywhere else; import from `site`.

## Routes (app/)

- `/` homepage (components/home/*)
- `/weight-loss-after-40` pillar guide (the only pillar URL)
- `/start-here` -> redirects to `/weight-loss-after-40`
- `/guides`, `/guides/[slug]` (slugs come from `guides` only; `dynamicParams = false`)
- `/categories`, `/categories/[slug]`
- `/best`, `/best/[slug]` (affiliate comparison frameworks)
- Trust/legal: `/about`, `/how-we-review`, `/editorial-policy`, `/medical-disclaimer`,
  `/advertising-disclosure`, `/privacy-policy`, `/terms`, `/contact`
- `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`

Note: `/guides/weight-loss-after-40` intentionally returns 404 (pillar lives only at
`/weight-loss-after-40`) to avoid duplicate content.

## Content model

All guide/category/comparison content lives in `content/library.ts`; homepage content in
`content/homepage.ts`. Guides render through `components/layout/ArticleLayout.tsx`.

`Guide` supports: `sections` (with `body`, `bullets`, `image`, `callout`, and `subsections`
for H3s), `lead` (intro paragraphs), `heroImage`, `keyTakeaways`, `faqs`, `sources`,
`datePublished`/`dateModified`, and `medicalAbout` (YMYL subjects).

Article body paragraphs may contain inline `<a>` links (rendered via the `Prose` helper).
Use single-quoted href attributes inside the double-quoted TS strings.

## Schema (JSON-LD)

- Guides emit `Article` + `BreadcrumbList`, plus `FAQPage` (when `faqs` exist) and
  `MedicalWebPage` (when `medicalAbout` is set: about, lastReviewed, reviewedBy, audience).
- Homepage: `WebSite` + `Organization` (+ logo) + `ItemList` in
  `components/seo/HomepageJsonLd.tsx`.
- Do NOT add `Review`/`AggregateRating` unless ratings are real and truthful.
- Do NOT add `HowTo` (deprecated by Google in 2023 and a poor YMYL fit).

## Images

Article images live in `public/media/article-images/<slug>/` as optimized `.webp`.
Convert sources with `sharp` (preserve aspect ratio, no face cropping). Hero images use
`next/image` with `priority` (LCP). Inline images have explicit width/height to avoid CLS.
The homepage OG card is `public/media/og-home.png` (1200x630, generated from
`public/media/og-home.svg`).

## Design direction

Soft off-white (#FAF7F2), cream (#FFFDF8), deep sage (#5C6B53), warm terracotta (#A64E32),
charcoal-navy ink (#1B2A3D). Strong whitespace, restrained motion (reduced-motion honored),
premium editorial feel. Accessibility: skip-to-content link, visible focus rings, WCAG AA
contrast, responsive at 1080px and 720px breakpoints.

## YMYL / trust rules (non-negotiable)

- No guaranteed results; no "melt/torch fat" or "reset/crash metabolism" language.
- Use "may", "can", "is associated with" for conditional claims.
- Include "talk to a qualified healthcare professional" guidance where appropriate.
- No fake doctors, reviewers, credentials, testimonials, traffic, or testing claims.
  Author/reviewer is "The Heal Beacon Editorial Team" (Organization) unless a real,
  credentialed person actually reviews the content.
- Affiliate disclosure stays clear and near the top of `/best` pages; tone stays
  non-commercial. Use at most one soft program link inside informational guides.
- No em-dashes in user-facing copy (brand/style rule). Use commas, periods, or hyphens.

## Do not touch / do not commit

- `.agents/`, `skills-lock.json` (local agent tooling, gitignored).
- `.env` / any secrets or API keys.
- Do not modify git config. Do not push to `main` without explicit approval.

## Deployment

No deploy config is committed in this repo (no vercel.json / .github workflows). The repo
is hosted on GitHub (origin: socialmediahustle04/healthandfitness) and is presumably
deployed via a connected host (e.g. Vercel) that builds a tracked branch. Confirm which
branch the host builds before expecting production to update.
