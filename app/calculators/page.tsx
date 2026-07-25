import type { Metadata } from "next";
import { CalculatorFilterGrid } from "@/components/site/calculator-filter-grid";
import { JsonLd } from "@/components/site/json-ld";
import { calculators } from "@/lib/calculators";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "All UK Calculators",
  description:
    "Browse every free Calculio calculator: mortgage, stamp duty, take-home pay, income tax, road tax, fuel cost, BMI, pregnancy, age and percentage.",
  alternates: { canonical: "/calculators" },
};

export default function CalculatorsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: calculators.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteConfig.url}/calculators/${c.slug}`,
      name: c.name,
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={itemListSchema} />
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          All UK calculators
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Every calculator on Calculio, in one place. Filter by category to find what you
          need, or use search in the header for a quick jump.
        </p>
      </div>

      <div className="mt-10">
        <CalculatorFilterGrid calculators={calculators} categories={categories} />
      </div>
    </div>
  );
}
