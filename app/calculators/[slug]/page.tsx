import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, User, CalendarDays } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { FaqAccordion } from "@/components/calculators/faq-accordion";
import { RelatedCalculators } from "@/components/calculators/related-calculators";
import { calculatorComponents } from "@/components/calculators/registry";
import { calculatorContent } from "@/content/calculators/registry";
import { calculators, getCalculator, getRelatedCalculators } from "@/lib/calculators";
import { getCategory } from "@/lib/categories";
import { siteConfig } from "@/lib/site";
import type { CategorySlug } from "@/lib/types";

const CONTENT_REVIEWED_DATE = "11 August 2026";

const CATEGORY_SOURCES: Record<CategorySlug, string> = {
  finance: "HMRC and GOV.UK",
  tax: "HMRC and GOV.UK",
  motoring: "the DVLA and GOV.UK",
  health: "NHS guidance",
  home: "HMRC, GOV.UK and the DVLA",
  everyday: "GOV.UK and other official UK sources",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator) return {};

  const ogTitle = calculator.name;

  return {
    title: calculator.metaTitle,
    description: calculator.metaDescription,
    keywords: calculator.keywords,
    alternates: { canonical: `/calculators/${calculator.slug}` },
    openGraph: {
      title: calculator.metaTitle,
      description: calculator.metaDescription,
      url: `${siteConfig.url}/calculators/${calculator.slug}`,
      images: [
        {
          url: `/og?title=${encodeURIComponent(ogTitle)}&subtitle=${encodeURIComponent("calculio.co.uk")}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: calculator.metaTitle,
      description: calculator.metaDescription,
    },
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params;
  const calculator = getCalculator(slug);
  if (!calculator) notFound();

  const CalculatorComponent = calculatorComponents[slug];
  const content = calculatorContent[slug];
  if (!CalculatorComponent || !content) notFound();

  const { SeoContent, faq } = content;
  const category = getCategory(calculator.category);
  const related = getRelatedCalculators(slug, 3);

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: calculator.name,
    description: calculator.metaDescription,
    url: `${siteConfig.url}/calculators/${calculator.slug}`,
    applicationCategory:
      calculator.category === "health" ? "HealthApplication" : "FinanceApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Calculators", item: `${siteConfig.url}/calculators` },
      { "@type": "ListItem", position: 3, name: calculator.name, item: `${siteConfig.url}/calculators/${calculator.slug}` },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={softwareAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <Link href="/calculators" className="hover:text-foreground">Calculators</Link>
        {category && (
          <>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <Link href={`/categories/${category.slug}`} className="hover:text-foreground">
              {category.name}
            </Link>
          </>
        )}
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="text-foreground">{calculator.shortName}</span>
      </nav>

      <Reveal>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {calculator.h1}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {calculator.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="size-4" aria-hidden="true" />
              Written by The Calculio Team
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              Last updated {CONTENT_REVIEWED_DATE}
            </span>
          </div>
        </div>
      </Reveal>

      <div className="mt-10">
        <CalculatorComponent />
      </div>

      <div className="mt-20 border-t border-border/60 pt-14">
        <SeoContent />
      </div>

      <div className="mt-16 border-t border-border/60 pt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <div className="mt-6 max-w-3xl">
          <FaqAccordion items={faq} />
        </div>
      </div>

      <div className="mt-16 border-t border-border/60 pt-14">
        <RelatedCalculators calculators={related} />
      </div>

      <div className="mt-10 text-center text-xs text-muted-foreground">
        <p>
          This calculator uses rates and thresholds published by {CATEGORY_SOURCES[calculator.category]}.
          Results are estimates only. See our{" "}
          <Link href="/disclaimer" className="underline hover:text-foreground">
            disclaimer
          </Link>
          .
        </p>
        <p className="mt-1.5">
          Spotted an error or have feedback?{" "}
          <Link href="/contact" className="underline hover:text-foreground">
            Contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
