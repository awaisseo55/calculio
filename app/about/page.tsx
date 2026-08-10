import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Target, Users } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Calculio",
  description:
    "Calculio is a free, fast calculator hub built specifically for the UK: mortgages, tax, motoring and health, no sign-up required. Read our mission and editorial standards.",
  alternates: { canonical: "/about" },
};

const points = [
  {
    icon: Target,
    title: "Built for the UK, specifically",
    description:
      "Every calculator on Calculio uses UK rules from the ground up: HMRC tax bands, DVLA vehicle tax, NHS BMI categories, rather than a generic international tool with the currency symbol swapped.",
  },
  {
    icon: BadgeCheck,
    title: "Clear, not clever",
    description:
      "We show the formula and a worked example behind every result, so you can understand how the number was reached, not just trust a black box.",
  },
  {
    icon: Users,
    title: "No sign-up, ever",
    description:
      "You shouldn't need an account to work out your take-home pay or a mortgage repayment. Every calculator is free and instant, with nothing to sign up for.",
  },
];

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About {siteConfig.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {siteConfig.name} is a free UK calculator hub built to give people fast,
          accurate answers to everyday maths, tax and financial questions. No sign-up, no
          downloads, just calculators that work.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Whether you&apos;re working out how much stamp duty you&apos;ll owe on a house
          purchase, checking your take-home pay before accepting a new job, or trying to
          understand your Vehicle Excise Duty band, {siteConfig.name} is built to give
          you a clear, correctly calculated answer in seconds, along with a plain English
          explanation of how we got there.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <point.icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-sm font-semibold text-foreground">{point.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="prose prose-neutral dark:prose-invert mt-14 max-w-none">
          <h2>Our mission</h2>
          <p>
            Our mission is simple: give everyone in the UK free, reliable calculators for
            the money and maths questions they run into day to day, from working out
            take-home pay to estimating stamp duty on a house purchase. Generic,
            US-built calculator tools rarely reflect UK rules properly. They&apos;ll
            often use the wrong tax bands, ignore National Insurance entirely, or apply a
            flat percentage where UK rules actually use tiered thresholds. Official
            government tools, on the other hand, are accurate but aren&apos;t always
            built for a quick, exploratory estimate; they can involve several pages of
            forms for a question that should take ten seconds to answer. We built{" "}
            {siteConfig.name} to sit in between those two extremes: fast and approachable
            like a consumer tool, but grounded in the actual rates and formulas that
            apply in the UK, the same way an official calculator would be.
          </p>
          <p>
            We&apos;re committed to keeping every calculator current as tax years change
            and rates are updated, which usually happens following the Spring and Autumn
            Budget, and to covering calculation needs that are underserved elsewhere,
            particularly around UK-specific taxes, benefits, vehicle rules and property
            costs. Over time, our aim is for {siteConfig.name} to be the first place
            someone in the UK thinks to check when they have a quick money or maths
            question, rather than sifting through several less relevant, often US-focused
            results to find an answer that actually applies to them.
          </p>

          <h2>Who we are</h2>
          <p>
            {siteConfig.name} is built and maintained by the Calculio Team, a small
            UK-based team of writers, developers and financial researchers. We deliberately
            keep our focus narrow and deep rather than broad and shallow: every calculator
            on this site uses UK tax bands, National Insurance rates, DVLA vehicle tax
            rules, NHS health guidance or other UK-specific regulations, rather than an
            international formula with the currency symbol changed. That UK-only focus
            runs through everything we publish, from the calculators themselves to the
            guides that sit alongside them.
          </p>
          <p>
            We review and update our calculators regularly as tax years and rates change,
            and we fact-check the figures we use against official guidance from HMRC, the
            DVLA, the NHS, GOV.UK and the Department for Work and Pensions (DWP), rather
            than relying on secondary sources that may already be out of date. {siteConfig.name}{" "}
            is also independent: we are not affiliated with, and do not receive payment
            from, any bank, tax firm, lender, insurer or other financial product provider
            whose figures might otherwise influence what our calculators show you. Our
            revenue comes from advertising shown alongside our content, not from steering
            you towards a particular product or provider.
          </p>

          <h2>What we cover</h2>
          <p>
            {siteConfig.name} is organised into six broad categories, each covering a
            cluster of related UK questions: Finance, for mortgages, take-home pay and
            everyday money calculations; Tax, for income tax, stamp duty and other HMRC
            liabilities; Motoring, for road tax, fuel costs and running costs; Health, for
            BMI, pregnancy timelines and other NHS-aligned tools; Home & Property, for
            buying, moving, renovating and owning a home; and Everyday, for quick
            calculations like ages and percentages that don&apos;t fit neatly elsewhere.
            You can browse any of these from our{" "}
            <Link href="/categories/finance">category pages</Link>, or search the full
            list on our <Link href="/calculators">calculators page</Link>. We add new
            calculators regularly, generally prioritising the questions we can see people
            actually searching for, and the gaps we notice in what&apos;s already
            available elsewhere.
          </p>

          <h2>How we build our calculators</h2>
          <p>
            Every calculator on {siteConfig.name} follows the same process before it goes
            live. We start by researching the current UK rates, thresholds and
            regulations that apply, using primary sources like HMRC and GOV.UK guidance
            rather than second-hand summaries that may have drifted from the original
            rules. We then build the calculation logic itself in TypeScript, keeping the
            formulas separate from the page design so they can be tested and updated
            independently. Before publishing, we test each calculator against known,
            verifiable scenarios, checking the output by hand against official examples
            or worked cases, to make sure the maths holds up.
          </p>
          <p>
            Once the calculation itself is correct, we write clear, plain English content
            around it: an explanation of how to use the calculator, a walkthrough of the
            formula or method behind it, and a worked example using real UK numbers so
            you can see exactly how a result was reached rather than just trusting a
            number on a screen. Finally, we revisit each calculator whenever the
            underlying rates change, which typically happens around the Spring and
            Autumn Budget announcements or the start of a new tax year, so the figures
            you see stay aligned with current rules rather than a stale snapshot from
            when the page was first published.
          </p>

          <h2>Editorial standards</h2>
          <p>
            Content on {siteConfig.name} is educational, not personal financial, tax,
            medical or legal advice. Our calculators and guides are designed to help you
            understand roughly what a result should look like, using publicly available
            rules and formulas, but they can&apos;t account for every detail of your own
            circumstances, such as your full tax history, health background or the
            specifics of a property chain. For any decision with real financial, health
            or legal consequences, we&apos;d always recommend speaking to a suitably
            qualified professional, such as an FCA-regulated financial adviser, a
            chartered accountant, a solicitor or licensed conveyancer, or your GP, as
            relevant to the situation.
          </p>
          <p>
            We reference official UK bodies, including HMRC, the DVLA, the NHS, GOV.UK,
            the DWP and the FCA, as the data sources behind our figures, and we link out
            to those sources where it&apos;s helpful for you to see the original rules
            yourself. We also welcome corrections: if you spot something that looks wrong,
            out of date, or unclear, please tell us via our{" "}
            <Link href="/contact">contact page</Link> and we&apos;ll look into it and
            update the page if needed. Health-related calculators and content on{" "}
            {siteConfig.name} are written in a supportive, non-prescriptive tone, and are
            never intended to diagnose or replace advice from a healthcare professional.
          </p>

          <h2>How we make money</h2>
          <p>
            {siteConfig.name} is free to use and always will be. We plan to cover our
            running costs through advertising, including Google AdSense, shown alongside
            our calculators and articles. Adverts do not influence the figures a
            calculator produces or the content of our guides; the calculation logic and
            written content are built entirely separately from how the site is
            monetised. We think it&apos;s fair for you to know how a free site like this
            one is funded, which is also why we&apos;re upfront about it here and in our{" "}
            <Link href="/disclaimer">disclaimer</Link>.
          </p>

          <h2>What we do not do</h2>
          <ul>
            <li>
              We do not sell your data. Calculator inputs are processed in your browser
              and are never sent to our servers. See our{" "}
              <Link href="/privacy">Privacy Policy</Link> for full detail.
            </li>
            <li>
              We do not require registration or an account for any calculator on this
              site, and we never will; every tool is free and instant.
            </li>
            <li>
              We do not offer financial products ourselves, such as mortgages, loans,
              savings accounts or insurance, and we are not a bank, lender or broker.
            </li>
            <li>
              We do not provide personalised financial, tax, medical or legal advice
              tailored to your individual circumstances, only general, educational
              information based on published UK rules.
            </li>
            <li>
              We do not accept payment to alter a calculator&apos;s figures or to favour
              one product or provider over another in our content.
            </li>
          </ul>

          <h2>Get in touch</h2>
          <p>
            Spotted something that looks wrong, or have a calculator you&apos;d like to
            see added? Visit our <Link href="/contact">contact page</Link> or email us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We read every
            message.
          </p>
          <p className="text-sm text-muted-foreground">
            The Calculio Team. Updated August 2026.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
