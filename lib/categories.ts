import type { CategoryMeta, CategorySlug } from "./types";

export const categories: CategoryMeta[] = [
  {
    slug: "finance",
    name: "Finance",
    shortDescription: "Mortgages, salary and take-home pay",
    description:
      "Work out mortgage repayments, take-home pay and other everyday money calculations built around UK rules and rates.",
    icon: "Landmark",
  },
  {
    slug: "tax",
    name: "Tax",
    shortDescription: "Income tax, stamp duty and HMRC bands",
    description:
      "Calculate income tax, stamp duty and other UK tax liabilities using up-to-date HMRC bands and thresholds.",
    icon: "Receipt",
  },
  {
    slug: "motoring",
    name: "Motoring",
    shortDescription: "Road tax, fuel costs and running costs",
    description:
      "Estimate vehicle running costs, from DVLA road tax (VED) bands to fuel spend for any journey.",
    icon: "Car",
  },
  {
    slug: "health",
    name: "Health",
    shortDescription: "BMI, pregnancy and wellbeing tools",
    description:
      "Simple, NHS-aligned health calculators to help you understand BMI, pregnancy timelines and more.",
    icon: "HeartPulse",
  },
  {
    slug: "home",
    name: "Home & Property",
    shortDescription: "Mortgages, stamp duty, renovation and DIY",
    description:
      "Everything to do with buying, moving, renovating and owning a home in the UK, from mortgage costs and stamp duty to flooring, concrete, kitchen renovation costs and loft insulation for your next DIY project.",
    icon: "Home",
  },
  {
    slug: "everyday",
    name: "Everyday",
    shortDescription: "Age, percentages and quick maths",
    description:
      "Quick, handy calculators for everyday questions — ages, percentages and more, solved in seconds.",
    icon: "Sparkles",
  },
];

export function getCategory(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export function isCategorySlug(slug: string): slug is CategorySlug {
  return categories.some((c) => c.slug === slug);
}
