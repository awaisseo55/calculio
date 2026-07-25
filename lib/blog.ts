import { calculateReadingTime } from "./reading-time";
import type { CategorySlug } from "./types";

export interface BlogPostMeta {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  categorySlug: CategorySlug;
  categoryHref: string;
  tags: string[];
  authorSlug: string;
  reviewerSlug: string;
  publishDate: string; // ISO date
  updatedDate: string; // ISO date
  featuredImage: string;
  featuredImageAlt: string;
  wordCount: number;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "how-much-stamp-duty-uk-2026",
    title: "How Much Stamp Duty Will I Pay in 2026? UK SDLT Rates Explained",
    metaTitle: "How Much Stamp Duty Will I Pay in 2026? UK SDLT Guide",
    metaDescription:
      "Work out your 2026 UK stamp duty in seconds. Full SDLT rate tables for first-time buyers, next-home buyers, and additional properties, with worked examples.",
    excerpt:
      "Full 2026 SDLT rate tables for first-time buyers, home movers and additional properties, plus Scotland's LBTT and Wales's LTT, with worked examples throughout.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["stamp duty", "SDLT", "first-time buyer", "UK property", "tax"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage: "/blog/stamp-duty-2026.jpg",
    featuredImageAlt: "UK terraced houses with stamp duty calculator overlay for 2026",
    wordCount: 2300,
  },
  {
    slug: "uk-income-tax-2026-27",
    title: "UK Income Tax 2026/27: Bands, Rates, and How Much You'll Pay",
    metaTitle: "UK Income Tax 2026/27: Bands, Rates Explained | Calculio",
    metaDescription:
      "UK Income Tax bands and rates for 2026/27, including the Scottish bands, the 60% tax trap, and National Insurance, with worked examples.",
    excerpt:
      "Personal Allowance, Basic, Higher and Additional Rate bands for 2026/27, plus Scotland's separate bands and the 60% tax trap explained with real numbers.",
    category: "Tax",
    categorySlug: "tax",
    categoryHref: "/categories/tax",
    tags: ["income tax", "HMRC", "tax bands", "PAYE", "self-assessment"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage: "/blog/income-tax-2026.jpg",
    featuredImageAlt: "UK income tax bands and rates 2026/27 with HMRC illustration",
    wordCount: 1276,
  },
  {
    slug: "mortgage-deposit-uk-2026",
    title: "How Much Deposit Do I Need for a Mortgage in 2026?",
    metaTitle: "How Much Mortgage Deposit Do You Need in 2026? | Calculio",
    metaDescription:
      "UK mortgage deposit requirements for 2026, from 5% to 25% deposits, government schemes that help, and how deposit size affects your rate.",
    excerpt:
      "Minimum deposit requirements by LTV tier, government schemes like the LISA and Mortgage Guarantee Scheme, and how much a bigger deposit really saves.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["mortgage", "first-time buyer", "deposit", "LTV", "help to buy"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage: "/blog/mortgage-deposit-2026.jpg",
    featuredImageAlt: "First-time buyer saving for UK mortgage deposit in 2026",
    wordCount: 1229,
  },
  {
    slug: "uk-car-tax-2026-ved-guide",
    title: "UK Car Tax Rates 2026: Complete VED Guide by Fuel Type",
    metaTitle: "UK Car Tax (VED) Rates 2026: Complete Guide | Calculio",
    metaDescription:
      "UK car tax rates for 2026 covering petrol, diesel, hybrid and electric vehicles, first-year VED bands, the expensive car supplement, and how to pay.",
    excerpt:
      "First-year and standard VED rates for every fuel type in 2026, including the rule change that means electric vehicles now pay car tax too.",
    category: "Motoring",
    categorySlug: "motoring",
    categoryHref: "/categories/motoring",
    tags: ["car tax", "VED", "road tax", "DVLA", "electric vehicles"],
    authorSlug: "james-whitfield",
    reviewerSlug: "daniel-ashcroft",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage: "/blog/car-tax-2026.jpg",
    featuredImageAlt: "UK car tax VED rates 2026 with fuel type breakdown",
    wordCount: 1209,
  },
  {
    slug: "healthy-bmi-adults-uk",
    title: "BMI Calculator UK: What's a Healthy BMI for Adults?",
    metaTitle: "Healthy BMI Range for UK Adults Explained | Calculio",
    metaDescription:
      "What counts as a healthy BMI for UK adults, NHS categories explained, healthy weight ranges by height, and why BMI isn't the whole picture.",
    excerpt:
      "NHS BMI categories for adults, healthy weight ranges by height, how thresholds differ by ethnicity, and why BMI works best alongside other measures.",
    category: "Health",
    categorySlug: "health",
    categoryHref: "/categories/health",
    tags: ["BMI", "health", "NHS", "weight management", "healthy weight"],
    authorSlug: "james-whitfield",
    reviewerSlug: "sophie-whitmore",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage: "/blog/bmi-guide-uk.jpg",
    featuredImageAlt: "Healthy BMI range chart for UK adults according to NHS",
    wordCount: 1210,
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogPosts(): BlogPostMeta[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getOtherBlogPosts(slug: string): BlogPostMeta[] {
  return getAllBlogPosts().filter((p) => p.slug !== slug);
}

export function getBlogPostsByCategory(categorySlug: CategorySlug): BlogPostMeta[] {
  return getAllBlogPosts().filter((p) => p.categorySlug === categorySlug);
}

export function getPostReadingTime(post: BlogPostMeta): number {
  return calculateReadingTime(post.wordCount);
}
