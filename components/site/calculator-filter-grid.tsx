"use client";

import * as React from "react";
import { CalculatorCard } from "@/components/site/calculator-card";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import type { CalculatorMeta, CategoryMeta } from "@/lib/types";

interface CalculatorFilterGridProps {
  calculators: CalculatorMeta[];
  categories: CategoryMeta[];
  initialCategory?: string;
}

export function CalculatorFilterGrid({
  calculators,
  categories,
  initialCategory = "all",
}: CalculatorFilterGridProps) {
  const [active, setActive] = React.useState(initialCategory);

  const filtered =
    active === "all" ? calculators : calculators.filter((c) => c.category === active);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter calculators by category">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition",
            active === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:text-foreground"
          )}
        >
          All ({calculators.length})
        </button>
        {categories.map((cat) => {
          const count = calculators.filter((c) => c.category === cat.slug).length;
          if (count === 0) return null;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActive(cat.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                active === cat.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((calc, i) => (
          <Reveal key={calc.slug} delay={Math.min(i * 0.04, 0.3)}>
            <CalculatorCard calculator={calc} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
