import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Lock, BadgeCheck } from "lucide-react";
import { CalculatorSearch } from "@/components/site/calculator-search";
import { CategoryCard } from "@/components/site/category-card";
import { CalculatorCard } from "@/components/site/calculator-card";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/categories";
import { getFeaturedCalculators } from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Free UK Calculators for Money, Tax, Motoring & Health`,
  description:
    "Calculio is a free UK calculator hub — mortgage, stamp duty, take-home pay, income tax, road tax, BMI and more. Fast, accurate, no sign-up.",
  alternates: { canonical: "/" },
};

const valueProps = [
  {
    icon: BadgeCheck,
    title: "Built for the UK",
    description:
      "Every calculator uses UK-specific rules — HMRC tax bands, DVLA road tax, NHS BMI categories — not generic US maths.",
  },
  {
    icon: Zap,
    title: "Fast by design",
    description:
      "Every page is pre-built and served instantly. No spinners, no waiting — just answers.",
  },
  {
    icon: Lock,
    title: "No sign-up, no tracking forms",
    description:
      "Use any calculator instantly. We don't ask for your email or personal details to see a result.",
  },
  {
    icon: ShieldCheck,
    title: "Clear, honest numbers",
    description:
      "We show our working — formulas and worked examples, not just a black-box result.",
  },
];

const testimonials = [
  {
    quote:
      "Worked out our stamp duty in under a minute before we made an offer. Simple and clear.",
    name: "Home mover",
    role: "Placeholder testimonial",
  },
  {
    quote:
      "Finally a take-home pay calculator that accounts for my student loan plan properly.",
    name: "Calculio user",
    role: "Placeholder testimonial",
  },
  {
    quote: "Clean, quick, and it doesn't try to sell me a mortgage broker every five seconds.",
    name: "Calculio user",
    role: "Placeholder testimonial",
  },
];

export default function HomePage() {
  const featured = getFeaturedCalculators();

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-success" />
              Built for the UK &middot; Updated for 2026/27
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-3xl text-balance font-sans text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              UK calculators that get straight to the{" "}
              <span className="text-gradient">answer</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Mortgage, stamp duty, take-home pay, road tax, BMI and more — free, fast,
              and built specifically around UK rules. No sign-up required.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 w-full max-w-xl">
            <CalculatorSearch variant="bar" />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="rounded-full px-6" render={<Link href="/calculators" />}>
                Browse all calculators
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6"
                render={<Link href="/calculators/mortgage-calculator-uk" />}
              >
                Try the mortgage calculator
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Browse by category
            </h2>
            <p className="max-w-2xl text-muted-foreground sm:text-base">
              Ten categories, one home for every UK calculation you need.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 0.05}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Featured calculators
                </h2>
                <p className="mt-2 max-w-2xl text-muted-foreground sm:text-base">
                  The tools people reach for most.
                </p>
              </div>
              <Link
                href="/calculators"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-primary hover:underline sm:justify-start"
              >
                View all
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((calc, i) => (
              <Reveal key={calc.slug} delay={i * 0.05}>
                <CalculatorCard calculator={calc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Why Calculio
            </h2>
            <p className="mt-3 text-muted-foreground sm:text-base">
              We built the calculator hub we wished existed — quick, honest, and made for
              people living in the UK.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-success/10 text-success">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What people say
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.quote} delay={i * 0.05}>
                <figure className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-6">
                  <blockquote className="text-sm leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">{t.name}</span>
                    {" · "}
                    {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
