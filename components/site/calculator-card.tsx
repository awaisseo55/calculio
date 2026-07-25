import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icon-map";
import type { CalculatorMeta } from "@/lib/types";
import { getCategory } from "@/lib/categories";

export function CalculatorCard({ calculator }: { calculator: CalculatorMeta }) {
  const Icon = getIcon(calculator.icon);
  const category = getCategory(calculator.category);

  return (
    <Link
      href={`/calculators/${calculator.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-start justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {category ? (
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
            {category.name}
          </span>
        ) : null}
      </div>
      <div>
        <h3 className="text-base font-semibold text-foreground">{calculator.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {calculator.description}
        </p>
      </div>
      <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-primary">
        Calculate
        <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
