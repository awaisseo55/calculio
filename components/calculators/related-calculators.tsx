import { CalculatorCard } from "@/components/site/calculator-card";
import type { CalculatorMeta } from "@/lib/types";

export function RelatedCalculators({ calculators }: { calculators: CalculatorMeta[] }) {
  if (calculators.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Related calculators
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calc) => (
          <CalculatorCard key={calc.slug} calculator={calc} />
        ))}
      </div>
    </div>
  );
}
