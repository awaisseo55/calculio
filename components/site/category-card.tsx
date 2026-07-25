import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "@/lib/icon-map";
import type { CategoryMeta } from "@/lib/types";
import { getCalculatorsByCategory } from "@/lib/calculators";

export function CategoryCard({ category }: { category: CategoryMeta }) {
  const Icon = getIcon(category.icon);
  const count = getCalculatorsByCategory(category.slug).length;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:text-primary" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-foreground">{category.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {category.shortDescription}
        </p>
      </div>
      <span className="text-xs font-medium text-muted-foreground">
        {count} {count === 1 ? "calculator" : "calculators"}
      </span>
    </Link>
  );
}
