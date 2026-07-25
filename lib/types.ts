export type CategorySlug =
  | "finance"
  | "tax"
  | "motoring"
  | "health"
  | "home"
  | "everyday";

export interface CategoryMeta {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
}

export type SchemaType = "SoftwareApplication" | "HowTo";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CalculatorMeta {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  category: CategorySlug;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  icon: string;
  featured?: boolean;
  schemaType: SchemaType;
}
