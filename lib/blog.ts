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
  {
    slug: "self-employed-tax-guide-uk-2026",
    title: "The Complete UK Self-Employed Tax Guide for 2026/27",
    metaTitle: "Self-Employed Tax Guide UK 2026/27 | Income Tax & NI | Calculio",
    metaDescription:
      "A complete guide to self-employed tax in the UK for 2026/27: Income Tax, Class 2 and Class 4 National Insurance, allowable expenses, and a full worked example.",
    excerpt:
      "Income Tax, Class 2 and Class 4 National Insurance, allowable expenses and payments on account, explained in plain English with a full worked example.",
    category: "Tax",
    categorySlug: "tax",
    categoryHref: "/categories/tax",
    tags: ["self-employed", "self-assessment", "HMRC", "sole trader", "tax"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage: "/blog/self-employed-tax-guide-2026.jpg",
    featuredImageAlt: "Self-employed sole trader working out UK tax for 2026/27",
    wordCount: 2650,
  },
  {
    slug: "compound-interest-explained-uk",
    title: "Compound Interest Explained: The Simple Formula That Makes You Rich Slowly",
    metaTitle: "Compound Interest Explained: The Formula That Builds Wealth",
    metaDescription:
      "How compound interest actually works, the formula behind it, why time matters more than the rate, and how the same maths can work against you on debt.",
    excerpt:
      "The formula behind compound interest, why starting early beats saving more later, and how the same maths that grows your savings can grow your debt.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["compound interest", "savings", "investing", "ISA", "personal finance"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage: "/blog/compound-interest-explained.jpg",
    featuredImageAlt: "Compound interest growth chart showing savings compounding over time",
    wordCount: 1600,
  },
  {
    slug: "london-driving-charges-2026",
    title: "Driving in London 2026: ULEZ, Congestion Charge, and What You Actually Pay",
    metaTitle: "London Driving Charges 2026: ULEZ & Congestion Charge Guide",
    metaDescription:
      "A clear guide to London's ULEZ and Congestion Charge in 2026: who pays, how much, how to check if your car is exempt, and how to avoid a penalty.",
    excerpt:
      "Who pays the ULEZ and Congestion Charge, how much it costs combined, which vehicles are exempt, and how the daily cost adds up over a working month.",
    category: "Motoring",
    categorySlug: "motoring",
    categoryHref: "/categories/motoring",
    tags: ["ULEZ", "congestion charge", "London driving", "TfL", "motoring costs"],
    authorSlug: "james-whitfield",
    reviewerSlug: "daniel-ashcroft",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage: "/blog/ulez-london-driving-guide.jpg",
    featuredImageAlt: "London ULEZ and Congestion Charge zone sign for drivers",
    wordCount: 1300,
  },
  {
    slug: "uk-state-pension-guide-2026",
    title: "How Much Is My State Pension Worth in 2026? UK State Pension Guide",
    metaTitle: "UK State Pension 2026: How Much Will You Get? | Calculio",
    metaDescription:
      "How much the UK State Pension is worth in 2026, how to qualify with National Insurance years, State Pension age, deferring, and inherited pension rules.",
    excerpt:
      "The full new State Pension amount for 2026/27, how 35 qualifying years work, State Pension age changes, deferring, and what married couples can inherit.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["state pension", "National Insurance", "retirement", "DWP", "State Pension age"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage:
      "/og?title=How%20Much%20Is%20My%20State%20Pension%20Worth%20in%202026%3F%20UK%20State%20Pension%20Guide&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to the UK State Pension for 2026",
    wordCount: 1437,
  },
  {
    slug: "first-home-cost-uk-2026",
    title: "The Real Cost of Buying Your First Home in the UK 2026",
    metaTitle: "Real Cost of Buying Your First Home UK 2026 | Calculio",
    metaDescription:
      "Every cost of buying your first UK home in 2026: deposit, stamp duty, solicitor and survey fees, mortgage fees, insurance and moving costs, with an example.",
    excerpt:
      "Deposit, stamp duty, solicitor and survey fees, mortgage fees, insurance and moving costs, all worked through on a real £275,000 first home example.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["first-time buyer", "mortgage", "stamp duty", "moving costs", "property"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage:
      "/og?title=The%20Real%20Cost%20of%20Buying%20Your%20First%20Home%20in%20the%20UK%202026&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to the real cost of buying your first UK home",
    wordCount: 1353,
  },
  {
    slug: "freelancer-hourly-rate-uk-2026",
    title: "How to Calculate Your True Hourly Rate as a UK Freelancer",
    metaTitle: "True Freelance Hourly Rate Calculator Guide UK | Calculio",
    metaDescription:
      "How to work out your true hourly rate as a UK freelancer, after tax, National Insurance, expenses and unbilled hours, with a full worked example.",
    excerpt:
      "Why your gross hourly rate is misleading, and a simple formula to work out what you actually need to charge once tax, expenses and admin time are counted.",
    category: "Tax",
    categorySlug: "tax",
    categoryHref: "/categories/tax",
    tags: ["freelancer", "self-employed", "hourly rate", "pricing", "sole trader"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-25",
    updatedDate: "2026-07-25",
    featuredImage:
      "/og?title=How%20to%20Calculate%20Your%20True%20Hourly%20Rate%20as%20a%20UK%20Freelancer&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to calculating your true freelance hourly rate",
    wordCount: 1413,
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
