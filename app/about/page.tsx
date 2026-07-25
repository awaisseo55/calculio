import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Target, Users } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Calculio",
  description:
    "Calculio is a free, fast calculator hub built specifically for the UK — mortgages, tax, motoring and health, no sign-up required.",
  alternates: { canonical: "/about" },
};

const points = [
  {
    icon: Target,
    title: "Built for the UK, specifically",
    description:
      "Every calculator on Calculio uses UK rules from the ground up — HMRC tax bands, DVLA vehicle tax, NHS BMI categories — rather than a generic international tool with the currency symbol swapped.",
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
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About {siteConfig.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {siteConfig.name} is a free calculator hub built specifically for people living
          and working in the UK — mortgages, tax, motoring, health and everyday maths,
          all in one place, with UK-specific rules and rates built in from the start.
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
          <h2>Why we built Calculio</h2>
          <p>
            Most calculator websites are either aimed at a US audience, cluttered with
            adverts and pop-ups, or hide their working behind a vague &ldquo;result&rdquo;
            with no explanation. We wanted somewhere fast, clean and genuinely UK-focused
            — a place where a mortgage calculator uses real UK repayment maths, a road
            tax calculator uses the actual DVLA VED bands, and a take-home pay calculator
            understands the difference between Scottish and rest-of-UK Income Tax.
          </p>
          <h2>How we keep things accurate</h2>
          <p>
            Every calculator is built around publicly published rates and thresholds
            from HMRC, the DVLA, Revenue Scotland, the Welsh Revenue Authority and the
            NHS. Tax and duty rates change at every Budget, so while we do our best to
            keep figures current, we&apos;d always recommend double-checking anything
            with significant financial consequences against the official source on{" "}
            <a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer">
              gov.uk
            </a>{" "}
            before making a decision.
          </p>
          <h2>Get in touch</h2>
          <p>
            Spotted something that looks wrong, or have a calculator you&apos;d like to
            see added? Visit our <Link href="/contact">contact page</Link> — we read
            every message.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
