# Blog Workflow — Calculio

This file is the persistent reference for adding blog posts to Calculio. Claude Code reads this file at the start of every blog-adding session and follows it exactly, alongside the full project rules in `/CLAUDE.md`.

`/CLAUDE.md` is the source of truth for categories, technical stack, and standards. If anything here ever conflicts with `/CLAUDE.md`, `/CLAUDE.md` wins. Always re-scan the codebase (`lib/blog.ts`, `content/blog/`, `app/blog/`) for the real current post list before adding new ones; do not rely on a memorised or hardcoded list, since this file's log can lag behind.

## Categories

Ten categories, defined in `lib/types.ts` (`CategorySlug`) and `lib/categories.ts`: Finance, Tax, Motoring, Health, Home & Property (categorySlug `home`, displayed on blog posts as "Home"), Everyday, Business, Pets, Fitness, Education.

Note: an earlier version of the session prompt that seeded this file only listed six categories (Finance, Tax, Motoring, Health, Home, Everyday). That list was stale. Business, Pets, Fitness and Education exist on the site and calculators in those categories can also support blog posts.

## Standing Rules (condensed from /CLAUDE.md)

**Content and language**
- British English throughout (colour, optimise, organisation, £ symbol).
- No em dashes anywhere, in any content. Use commas, colons, semicolons, brackets, or full stops instead.
- Plain, simple English, short sentences, active voice. Broadsheet reading level, not textbook.
- Reference UK bodies by exact name: HMRC, DVLA, NHS, GOV.UK, DWP, FCA, Ofgem, ACAS.
- Never fabricate external URLs, statistics, or figures. Verify worked examples with a throwaway calculation first, and cross-check figures against `lib/calc/uk-rates.ts`.
- No personal financial, medical, or legal advice; frame as general information plus a prompt to seek professional advice.
- Health: supportive, never prescriptive. Finance: no specific investment recommendations.

**Required structure, every post**
1. Introduction (hooks the reader, links the primary supporting calculator early)
2. 6 to 9 H2 sections, H3 subsections where a section has multiple distinct parts
3. At least one worked example with realistic UK numbers
4. A comparison or breakdown table where the topic supports one
5. FAQ: 6 genuine questions, 2 to 4 sentence answers
6. Closing CTA section linking back to the primary calculator

**Technical build requirements, every post**
- Sticky table of contents on desktop, collapsed dropdown on mobile (`components/blog/table-of-contents.tsx`, driven by the `toc` export).
- Reading time at ~250 words/minute (automatic via `getPostReadingTime`, driven by `wordCount` on the metadata entry).
- Publish date and last updated date, both visible (automatic via `AuthorByline`).
- Byline: "Calculio Team" pattern, using the named author/reviewer personas in `lib/authors.ts` (James Whitfield writes; Emily Thorne reviews Tax/Finance/Business/Education; Daniel Ashcroft reviews Motoring; Sophie Whitmore reviews Health).
- Featured image: use the dynamic `/og?title=...&subtitle=calculio.co.uk` route, URL-encoding the post title. Do not create or request manual image files.
- `Article`, `BreadcrumbList` and `FAQPage` JSON-LD (all automatic from the metadata entry and `faq` export, no manual work needed).

**SEO requirements, every post**
- Unique meta title (~60 chars, primary keyword, ends "| Calculio"), unique meta description (~155 chars, soft CTA).
- Canonical tag, Open Graph and Twitter Card tags (automatic from the metadata entry).

**Internal linking rules (strict)**
- Body text links to at least 4 existing calculators and 1 to 2 existing blog posts.
- Anchor text must contain the actual keyword/name of the destination page, never "here" or "click below" or generic anchors.
- Use the Next.js `Link` component, never raw `<a>` tags.
- Skip a link entirely if there's no natural keyword match; do not force it.
- Cross-link new posts back into 1 to 2 relevant existing calculator or blog pages too, so old content also links forward to new content.

**Related content**
- Related calculators grid (4 cards): register the post's slug in `RELATED_CALCULATOR_SLUGS` in `app/blog/[slug]/page.tsx`.
- Related articles: automatic via `getRelatedBlogPosts` (same category first), no manual work needed.
- CTA section: register the post's slug in `CTA_CONTENT` in `app/blog/[slug]/page.tsx`. Posts missing from either map silently show no CTA or the wrong related calculators, so do not skip this step.

**Disclaimer**
- Automatic on every post via the shared `DISCLAIMER` constant in `app/blog/[slug]/page.tsx`, linking to `/disclaimer`. No per-post work needed.

## Default Word Count

1,500 to 1,700 words, unless a specific session request overrides this. Always confirm the actual word count used for each post in the final summary.

## Registration checklist (four places, every new post)

1. `content/blog/[slug].tsx` — `toc`, `faq`, and `ArticleContent()` exports.
2. `content/blog/registry.tsx` — import and add to the `blogContent` map.
3. `lib/blog.ts` — `BlogPostMeta` entry in the `blogPosts` array, including `sources` (pulled from `lib/official-sources.ts`, add a new entry there if the topic isn't covered yet, never inline/guess a URL), `methodology`, `effectivePeriod`, `lastVerifiedDate`, and `assumptions`.
4. `app/blog/[slug]/page.tsx` — entries in both `CTA_CONTENT` and `RELATED_CALCULATOR_SLUGS`.

The `/blog` listing page, category pages, and `sitemap.xml` are all automatic from `lib/blog.ts`; nothing else needs manual updates unless a page hardcodes a count (none currently do).

## Build and deploy

1. `npm run build`, zero errors, before committing.
2. Commit with a descriptive message listing exactly which posts were added.
3. Push to `main` (Vercel auto-deploys, no manual step).

---

## Session Log

### 2026-08-21

Added 4 blog posts, each supporting an existing calculator that had no dedicated blog post yet:

| Title | Slug | Category | Word count |
|---|---|---|---|
| Capital Gains Tax UK 2026/27: How Much Will You Pay? | `capital-gains-tax-uk-2026-27` | Tax | 1,612 |
| UK Inheritance Tax Explained: Thresholds, Rates and How to Reduce Your Bill | `uk-inheritance-tax-guide-2026` | Tax | 1,634 |
| Corporation Tax for Small UK Companies: Rates, Marginal Relief and a Worked Example | `corporation-tax-uk-small-business-2026` | Business | 1,589 |
| ISA Guide 2026/27: Cash, Stocks and Shares, Lifetime or Junior, Which Should You Pick? | `isa-guide-uk-2026-27` | Finance | 1,571 |

Topics were chosen by cross-referencing `lib/calculators.ts` (81 calculators) against `lib/blog.ts` (23 existing posts at the time) to find calculators with clear commercial/search intent and no supporting guide: Capital Gains Tax, Inheritance Tax, Corporation Tax and ISAs all had a working calculator but no blog post.

Running total: 27 blog posts.
