# Calculio — Project Instructions

These instructions apply to every session working on this project. Read this file in full before starting work. Follow it automatically; do not ask the user to re-specify anything covered here. If something is genuinely ambiguous, use best judgement based on the project's overall direction: a UK SEO calculator hub built for AdSense monetisation and eventual sale.

## Project context

- **Name:** Calculio
- **Domain:** calculio.co.uk
- **Owner:** Muhammad Awais, an SEO professional
- **Target audience:** UK adults searching for calculators and personal finance information
- **Business model:** SEO traffic, monetised with Google AdSense, with a planned exit sale on Empire Flippers or Flippa in 9 to 12 months
- **Content strategy:** rank on Google and get cited by AI tools (ChatGPT, Gemini, Claude, AI Overview)

Because the site is being built for an eventual sale, prioritise clean, consistent, well-documented work over shortcuts. A buyer's due diligence will look at content quality, technical SEO hygiene, and code cleanliness.

## Technical stack

- Next.js 15, App Router, TypeScript
- Tailwind CSS v4
- shadcn/ui components (built on base-ui primitives, not Radix — use the `render` prop pattern, not `asChild`)
- Framer Motion for animations
- Geist Sans and Geist Mono fonts
- Deployed on Vercel, auto-deploy from the GitHub `main` branch
- Dark mode as default, with a light mode toggle (next-themes)

## Categories

The site has 10 calculator categories, defined in `lib/categories.ts` (`CategorySlug` in `lib/types.ts`):

- **Finance, Tax, Motoring, Health, Home & Property, Everyday**: the original six, covering personal UK finance, tax, vehicles, health, property/DIY, and quick everyday maths.
- **Business**: UK small business owners and limited company directors (Corporation Tax, dividend vs salary, break-even, profit margin, and similar).
- **Pets**: pet owners (dog and cat age calculators, and similar).
- **Fitness**: runners and gym-goers (running pace, one-rep max, and similar).
- **Education**: UK students and graduates (student loan repayment, student budgeting, and similar).

Check this list before adding a new calculator or category, so it lands in the right existing category rather than creating a near-duplicate one. Adding a new category requires updating `lib/types.ts` (`CategorySlug`), `lib/categories.ts`, and `CATEGORY_SOURCES` in `app/calculators/[slug]/page.tsx` (a `Record<CategorySlug, string>`, so TypeScript will error if a category is missing from it).

## Writing style rules (strict)

These apply to every piece of user-facing content: calculator copy, blog posts, FAQs, meta titles, meta descriptions, headings, and UI text.

- British English throughout: colour, optimise, organisation, £ symbol.
- Never use em dashes ("—") anywhere, in any content, titles, headings, meta descriptions, or FAQs. Use commas, colons, semicolons, brackets, or full stops instead.
- Plain, simple English. Short sentences. Active voice. Easy words.
- Write like explaining to a friend, not a tax adviser. Reading level: broadsheet newspaper, not textbook.
- Reference UK bodies by name where relevant: HMRC, DVLA, NHS, GOV.UK, FCA.
- Do not fabricate specific URLs to external sites.
- Do not invent statistics. Verify worked examples and numeric claims (for example with a throwaway calculation) before writing them into content.
- Do not give personal financial, medical, or legal advice.
- Health content must use a supportive tone and never be prescriptive.

## Calculator standards

Every calculator must include:

- Working, tested TypeScript calculation logic in `lib/calc/`.
- A clean input form with proper labels, units, sensible defaults, and helper text.
- An animated result card using `font-mono` for numeric outputs.
- 900 to 1,300 words of unique SEO content below the calculator, covering: intro, how to use, formula explanation, a worked example with real UK numbers, common mistakes, and related calculators.
- A 5 to 6 question FAQ with `FAQPage` JSON-LD schema.
- `SoftwareApplication` and `BreadcrumbList` JSON-LD on the page.
- A meta title around 60 characters and a meta description around 155 characters.
- Canonical tag, Open Graph tags, and Twitter Card tags.
- A related calculators grid (4 cards) at the bottom.
- Internal links within the body to at least 3 relevant existing calculators and 1 or 2 relevant existing blog posts.
- A disclaimer link at the page bottom: "Results are estimates only. See our disclaimer."
- Currency formatted with the £ symbol and thousand separators (£1,234.56).
- A `SourcesPanel` (see `components/site/sources-panel.tsx`), populated via `sources`, `methodology`, `effectivePeriod`, `lastVerifiedDate`, and `assumptions` on the calculator's `CalculatorMeta` entry in `lib/calculators.ts`. See "Sources, methodology, and the last-verified date" below for the rules on filling these in.

## Blog post standards

Every blog post must include:

- 1,000 to 1,500 words.
- A sticky table of contents on desktop, collapsed above the content on mobile, with smooth-scroll anchor links.
- A featured image at 1200x630, stored in `/public/blog/`, with a lowercase, hyphenated filename.
- The featured image used as: post header, blog card image, OG image, Twitter card image, and Article JSON-LD image. Note: per prior direction from the owner, the featured image displays on the `/blog` listing page and blog cards only, not as a visible image on the individual post page itself; it is still used in the meta tags (OG, Twitter, JSON-LD) on the post page.
- A reading time indicator (~250 words per minute).
- Publish date and last updated date, both visible.
- A "Calculio Team" byline (see `lib/authors.ts` for the author and reviewer persona pattern already in use).
- A 6 question FAQ with `FAQPage` JSON-LD schema.
- `Article` and `BreadcrumbList` JSON-LD.
- A related calculators grid (4 cards).
- A related articles section.
- A disclaimer link at the bottom pointing to `/disclaimer`.
- A `SourcesPanel`, populated via `sources`, `methodology`, `effectivePeriod`, `lastVerifiedDate`, and `assumptions` on the post's `BlogPostMeta` entry in `lib/blog.ts`. See "Sources, methodology, and the last-verified date" below.

## Sources, methodology, and the last-verified date

Every calculator and blog post carries a `SourcesPanel` (`components/site/sources-panel.tsx`), driven by fields on its metadata entry (`CalculatorMeta` in `lib/calculators.ts`, `BlogPostMeta` in `lib/blog.ts`):

- `sources`: real links to the exact official pages the figures come from (HMRC, GOV.UK, NHS, DVLA, DWP, FCA, Ofgem, TfL, MoneyHelper, and similar). Pull from `lib/official-sources.ts` where a topic is already covered; add a new entry there rather than inlining a URL, so a page move only needs updating in one place. **Never add a URL without verifying it actually resolves first** (a web search or fetch), never guess a URL from a pattern. If no genuine official regulator or body applies to a topic (most pure-maths, pets, and everyday calculators), leave `sources` as an empty array rather than forcing a citation that doesn't really exist; the panel hides the "Official sources" block automatically when empty.
- `methodology`: one or two sentences on how the figure is actually calculated (the formula, or which published rates it applies).
- `effectivePeriod`: the tax year or period the figures apply to (for example `"2026/27 tax year"`), omitted where the topic isn't tied to a specific period.
- `lastVerifiedDate`: the date someone actually checked this page's figures against the cited source. **This must only move when a real check happens, not on every redeploy or unrelated edit.** Do not bulk-touch this field as part of an unrelated commit; it is meant to answer "when did we last confirm this is still correct," not "when did this file last change" (that's what git history and `updatedDate`/`publishDate` are for).
- `assumptions`: short, honest notes on what the calculation does and doesn't account for (residency assumptions, statutory vs enhanced entitlements, and similar).

## SEO requirements on every page

- Unique meta title, meta description, and canonical tag.
- Open Graph and Twitter Card tags.
- JSON-LD structured data, using the schema types appropriate to the page.
- Semantic HTML: `article`, `section`, `header`, `footer` where appropriate.
- Exactly one `h1` per page, with a proper `h2`/`h3` hierarchy beneath it.
- All internal links use the Next.js `Link` component. Never use raw `<a>` tags for internal links.
- `sitemap.xml` is generated automatically from the calculator, category, and blog data files, so it updates whenever a new route is added to those files. Confirm new routes appear after adding them.

## Internal linking priority

- Every calculator links to at least 3 related calculators and 1 to 2 blog posts.
- Every blog post links to at least 4 related calculators and 1 to 2 other blog posts.
- Category pages link to all their calculators and any relevant blog posts.
- The homepage highlights popular calculators; update this when new ones are added if the homepage displays counts or a curated list.

## UK tax and finance data

- All UK tax constants (Income Tax bands, National Insurance rates, VED bands, Stamp Duty bands, dividend allowance, Capital Gains Tax exempt amount, ISA allowances, and similar) live in `lib/calc/uk-rates.ts`. This is the single source of truth; do not duplicate rate constants in individual calculator files.
- Include the tax year in comments (for example, 2026/27).
- When rates change, usually after a Budget, update only this one file, then bump `lastVerifiedDate` (see "Sources, methodology, and the last-verified date") on every calculator and blog post whose figures were actually re-checked against the new rates, not the whole site.

## Git and deployment workflow

- After every logical unit of work, commit with a clear message describing what changed.
- Push to the GitHub `main` branch after every commit.
- Do not ask for permission to commit and push. Do it automatically after finishing a task.
- Vercel auto-deploys from `main`, so pushing to `main` means deploying to production. Keep this in mind: verify builds pass locally (`npm run build`) before pushing where practical, since a broken build on `main` goes live.

## Domain setup

- Primary URL: `https://calculio.co.uk`
- All canonical tags, sitemap entries, and JSON-LD `@id` and `url` fields must use `https://calculio.co.uk`.
- The environment variable `NEXT_PUBLIC_SITE_URL` is set to `https://calculio.co.uk`.

## Design system

- Geist Sans for headings and body text, Geist Mono for numeric outputs.
- Dark mode by default, with a next-themes toggle in the header.
- Blue accent colour (`#2563EB` or similar), emerald for positive results (`#10B981`).
- `rounded-2xl` on cards, soft shadows, subtle gradients.
- Generous whitespace, mobile-first responsive layout.
- Framer Motion for micro-animations: hover states, card entries, and result reveals.

## Content safety

- No aggressive weight loss or dieting language in health calculators.
- No specific investment recommendations in finance calculators.
- No specific legal advice in property or tax calculators.
- No veterinary or animal health advice in pet calculators (dog/cat age, and similar); encourage a vet for any health or behaviour concern.
- No extreme, unsafe, or medical-sounding claims in fitness calculators (pace, one-rep max, and similar); present results as general training estimates, not guarantees.
- No specific legal, business formation, or investment advice in business calculators; encourage a qualified accountant for company-specific decisions.
- Always include appropriate disclaimers.
- Encourage professional advice for personal decisions (a regulated financial adviser, a GP, HMRC, or a solicitor, as relevant).

## When adding new calculators

1. Check the existing calculators list in `lib/calculators.ts` first, to avoid duplicates.
2. Add the calculation logic in `lib/calc/`.
3. Add the UI component in `components/calculators/` and register it in `components/calculators/registry.tsx`.
4. Add the SEO content and FAQ in `content/calculators/` and register it in `content/calculators/registry.tsx`.
5. Add the calculator's metadata entry to `lib/calculators.ts` (this automatically updates the `/calculators` listing, the relevant `/categories/[slug]` page, and `sitemap.xml`), including `sources`, `methodology`, `effectivePeriod`, `lastVerifiedDate` and `assumptions` (see "Sources, methodology, and the last-verified date").
6. Update the homepage if it displays a calculator count or curated list.
7. Update the internal search index if it is not automatically driven by `lib/calculators.ts`.
8. Verify the new route builds and loads before committing.

## When adding new blog posts

1. Check the `/blog` listing first, to avoid duplicating topics already covered.
2. Add the post metadata to `lib/blog.ts` (this automatically updates `sitemap.xml` and the `/blog` listing, sorted newest first), including `sources`, `methodology`, `effectivePeriod`, `lastVerifiedDate` and `assumptions` (see "Sources, methodology, and the last-verified date").
3. Write the article content and FAQ in `content/blog/` and register it in `content/blog/registry.tsx`.
4. Add entries for the new post to the `CTA_CONTENT` and `RELATED_CALCULATOR_SLUGS` maps in `app/blog/[slug]/page.tsx`. Posts missing from these maps will silently show no calculator CTA or the wrong related calculators, so do not skip this step.
5. Generate or source a featured image at the expected path in `/public/blog/`, using a lowercase, hyphenated filename that matches the `featuredImage` field.
6. Update relevant category pages if they feature specific blog posts (most category pages populate this automatically from `categorySlug`; verify rather than assume).
7. Verify the new route builds and loads before committing.

## Existing project conventions worth knowing

- Author and reviewer personas live in `lib/authors.ts` and are mapped by category (Tax and Finance content reviewed by Emily Thorne, Motoring by Daniel Ashcroft, Health by Sophie Whitmore, all written by James Whitfield).
- JSX text must use `&apos;`, `&ldquo;`, and `&rdquo;` for apostrophes and quotes (the `react/no-unescaped-entities` lint rule enforces this). Plain JS string literals, such as FAQ answer arrays, do not need escaping.
- Branded placeholder blog images can be generated programmatically via `scripts/generate-blog-images.mjs` (sharp plus inline SVG) when no real image is supplied.
- Before writing a worked numeric example into content, verify the figure with a throwaway calculation rather than estimating it, to avoid inventing statistics.
