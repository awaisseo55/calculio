# Calculator Workflow — Calculio

This file is the persistent reference for adding calculators to Calculio. Claude Code reads this file at the start of every calculator-adding session and follows it exactly, alongside the full project rules in `/CLAUDE.md`. It also maintains a running log below of every calculator added.

`/CLAUDE.md` is the source of truth for categories, technical stack, and standards. If anything here ever conflicts with `/CLAUDE.md`, `/CLAUDE.md` wins. Always re-scan the codebase (`lib/calculators.ts`, `lib/calc/`) for the real current calculator list before adding new ones; do not rely on a memorised or hardcoded list, since this file's log can lag behind.

## Categories

Ten categories, defined in `lib/types.ts` (`CategorySlug`) and `lib/categories.ts`:
Finance, Tax, Motoring, Health, Home & Property, Everyday, Business, Pets, Fitness, Education.

## Standing Rules (condensed from /CLAUDE.md)

**Content and language**
- British English throughout (colour, optimise, organisation, £ symbol).
- No em dashes anywhere, in any content. Use commas, colons, semicolons, brackets, or full stops instead.
- Plain, simple English, short sentences, active voice. Broadsheet reading level, not textbook.
- Reference UK bodies by exact name: HMRC, DVLA, NHS, GOV.UK, DWP, FCA, Ofgem, ACAS, Student Loans Company, Bank of England, Companies House.
- Never fabricate external URLs, statistics, or figures. Verify worked examples with a throwaway calculation first.
- No personal financial, medical, or legal advice; frame as general information plus a prompt to seek professional advice.
- Health: supportive, never prescriptive, no aggressive weight-loss language.
- Finance: no specific investment recommendations.
- Property/tax: no specific legal advice.
- Pets: no veterinary/animal health advice; encourage a vet for health or behaviour concerns.
- Fitness: no extreme or medical-sounding claims; present as general training estimates, not guarantees.
- Business: no specific legal, formation, or investment advice; encourage a qualified accountant.

**Technical build requirements, every calculator**
- Working TypeScript calculation logic in `lib/calc/[name].ts`.
- Clean input form, sensible UK defaults, helper text.
- Animated result card, `font-mono` for numeric outputs.
- Currency formatted with £ and thousand separators (£1,234.56).
- 900 to 1,300 words of unique SEO content below the calculator.

**Required content structure, in order**
1. Intro (what it calculates and why it matters)
2. How to use this calculator
3. The formula or method explained in plain English
4. A worked example using realistic UK numbers
5. Common mistakes people make
6. Related calculators section (in-body links)

**SEO requirements, every calculator page**
- Unique meta title (~60 chars, primary keyword, ends "| Calculio"), unique meta description (~155 chars, soft CTA).
- Canonical tag, Open Graph and Twitter Card tags (uses the dynamic `/og` image route).
- `SoftwareApplication`, `BreadcrumbList`, and `FAQPage` JSON-LD.
- FAQ: 5 to 6 genuine, specific questions, 2 to 4 sentence answers.
- Related calculators grid: 4 cards (this is automatic via `getRelatedCalculators`, same category first).

**Internal linking rules**
- Body text links to at least 3 existing calculators and 1 to 2 existing blog posts.
- Anchor text must contain the actual keyword/name of the destination page, never "here" or "click below" or generic anchors.
- Use the Next.js `Link` component, never raw `<a>` tags.
- Skip a link entirely if there's no natural keyword match; do not force it.

**UK data accuracy**
- All UK tax/rate constants live in `lib/calc/uk-rates.ts`, the single source of truth. Do not duplicate rate constants in individual calculator files.
- Note the tax year in comments (2026/27 currently).
- Where a live external rate is needed (e.g. Bank of England base rate) that changes independent of the tax year, make it a user-editable input with a clearly labelled default, and tell the user to verify the current figure rather than asserting it as fact in prose.

## Registration checklist (four places, every new calculator)

1. `lib/calc/[slug-without-suffix].ts` — calculation logic and types.
2. `components/calculators/[slug]-calculator.tsx` — input form + animated result card, registered in `components/calculators/registry.tsx` (`calculatorComponents` map, keyed by full slug).
3. `content/calculators/[full-slug].tsx` — `faq` array and `SeoContent()` component, registered in `content/calculators/registry.tsx` (`calculatorContent` map).
4. `lib/calculators.ts` — metadata entry (`CalculatorMeta`) in the `calculators` array. This alone drives `/calculators`, the relevant `/categories/[slug]` page, and `sitemap.xml`.

Related calculators, sitemap, and the `/calculators` "All (N)" count are all automatic from `lib/calculators.ts`; nothing else needs manual count updates unless a page hardcodes a number (none currently do).

## Build and deploy

1. `npm run build`, zero errors, before committing.
2. Commit with a descriptive message listing exactly which calculators were added.
3. Push to `main` (Vercel auto-deploys, no manual step).

---

## Session Log

### 2026-08-18

Added 5 calculators, filling gaps in thinly-populated categories (Fitness, Pets, Education had 2 each; Business had 4; Everyday had 5):

| Calculator | Slug | Category |
|---|---|---|
| Degree Classification Calculator | `degree-classification-calculator-uk` | Education |
| Heart Rate Zone Calculator | `heart-rate-zone-calculator-uk` | Fitness |
| Late Payment Interest Calculator | `late-payment-interest-calculator-uk` | Business |
| Dog Food Calculator | `dog-food-calculator-uk` | Pets |
| Time Duration Calculator | `time-duration-calculator-uk` | Everyday |

No new constants added to `uk-rates.ts` (degree boundaries are academic convention not tax data; heart rate zones are sports-science convention; late payment statutory interest is expressed as base rate + 8% per the Late Payment of Commercial Debts (Interest) Act 1998, with base rate left as a user-editable input since it changes independently of the tax year).

Running total: 81 calculators.
