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
  {
    slug: "uk-council-tax-guide-2026",
    title: "The Complete UK Council Tax Guide for 2026/27",
    metaTitle: "UK Council Tax Guide 2026/27: Bands, Discounts | Calculio",
    metaDescription:
      "A complete guide to UK council tax for 2026/27: bands A to H explained, how bills are calculated, discounts and exemptions, and how to challenge your band.",
    excerpt:
      "Council tax bands A to H explained, how your bill is calculated, who gets a discount or exemption, and what happens if you do not pay.",
    category: "Home",
    categorySlug: "home",
    categoryHref: "/categories/home",
    tags: ["council tax", "council tax bands", "local government", "UK property", "household bills"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-29",
    updatedDate: "2026-07-29",
    featuredImage:
      "/og?title=The%20Complete%20UK%20Council%20Tax%20Guide%20for%202026%2F27&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK council tax bands and bills for 2026/27",
    wordCount: 2350,
  },
  {
    slug: "reduce-uk-energy-bills-2026",
    title: "How to Reduce Your UK Energy Bills in 2026",
    metaTitle: "How to Reduce Your UK Energy Bills in 2026 | Calculio",
    metaDescription:
      "Practical ways to cut your UK gas and electricity bills in 2026: the Ofgem price cap explained, room-by-room savings, insulation payback, and grants available.",
    excerpt:
      "The Ofgem price cap explained, room-by-room ways to save, which home improvements actually pay back, and the grants and schemes worth checking.",
    category: "Home",
    categorySlug: "home",
    categoryHref: "/categories/home",
    tags: ["energy bills", "Ofgem", "gas and electricity", "home improvements", "cost of living"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-07-29",
    updatedDate: "2026-07-29",
    featuredImage:
      "/og?title=How%20to%20Reduce%20Your%20UK%20Energy%20Bills%20in%202026&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to reducing UK gas and electricity bills in 2026",
    wordCount: 2350,
  },
  {
    slug: "electric-vs-petrol-cost-comparison-uk-2026",
    title: "Is an Electric Car Cheaper Than Petrol in the UK in 2026?",
    metaTitle: "Electric vs Petrol Car Costs UK 2026 | Calculio",
    metaDescription:
      "A full UK cost comparison of electric vs petrol cars for 2026: upfront price, running costs, charging, depreciation, and when an EV actually saves money.",
    excerpt:
      "Upfront price, running costs, charging practicalities, depreciation and the mileage break-even point that decides whether an EV actually saves you money.",
    category: "Motoring",
    categorySlug: "motoring",
    categoryHref: "/categories/motoring",
    tags: ["electric cars", "EV", "petrol", "motoring costs", "road tax"],
    authorSlug: "james-whitfield",
    reviewerSlug: "daniel-ashcroft",
    publishDate: "2026-08-01",
    updatedDate: "2026-08-01",
    featuredImage:
      "/og?title=Is%20an%20Electric%20Car%20Cheaper%20Than%20Petrol%20in%20the%20UK%20in%202026%3F&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide comparing electric and petrol car costs in the UK for 2026",
    wordCount: 1420,
  },
  {
    slug: "uk-redundancy-guide-2026",
    title: "UK Redundancy Rights and Pay Explained for 2026",
    metaTitle: "UK Redundancy Rights and Pay Guide 2026 | Calculio",
    metaDescription:
      "A complete guide to UK redundancy in 2026: statutory pay rules, notice periods, tax on redundancy pay, enhanced packages, and your rights during the process.",
    excerpt:
      "Statutory redundancy pay by age band, notice periods, the £30,000 tax-free limit, enhanced packages, and what to check before signing anything.",
    category: "Tax",
    categorySlug: "tax",
    categoryHref: "/categories/tax",
    tags: ["redundancy", "employment rights", "HMRC", "ACAS", "notice period"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-01",
    updatedDate: "2026-08-01",
    featuredImage:
      "/og?title=UK%20Redundancy%20Rights%20and%20Pay%20Explained%20for%202026&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK redundancy rights and pay for 2026",
    wordCount: 1400,
  },
  {
    slug: "uk-sick-pay-guide-2026",
    title: "Understanding UK Sick Pay: Your Rights Explained",
    metaTitle: "UK Sick Pay Rules Explained 2026 | SSP Guide | Calculio",
    metaDescription:
      "How UK sick pay works in 2026: the new SSP rate and day-one rules, company sick pay schemes, self-employed options, and your rights when off sick.",
    excerpt:
      "The new 2026 SSP rate and day-one rules, how company sick pay schemes usually work, and what self-employed workers can claim instead.",
    category: "Tax",
    categorySlug: "tax",
    categoryHref: "/categories/tax",
    tags: ["sick pay", "SSP", "employment rights", "self-employed", "HMRC"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-01",
    updatedDate: "2026-08-01",
    featuredImage:
      "/og?title=Understanding%20UK%20Sick%20Pay%3A%20Your%20Rights%20Explained&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK sick pay rights and Statutory Sick Pay",
    wordCount: 1380,
  },
  {
    slug: "winter-fuel-payment-guide-2026",
    title: "The Winter Fuel Payment: Everything You Need to Know for 2026",
    metaTitle: "Winter Fuel Payment 2026 Guide: Eligibility & Amount",
    metaDescription:
      "Everything about the UK Winter Fuel Payment for 2026/27: who qualifies, how much you get, how to apply, and other cold weather support available.",
    excerpt:
      "Who qualifies for the Winter Fuel Payment in 2026/27, how much you could get, the income clawback rules, and other winter energy support to check.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["Winter Fuel Payment", "DWP", "pensioners", "energy bills", "benefits"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-01",
    updatedDate: "2026-08-01",
    featuredImage:
      "/og?title=The%20Winter%20Fuel%20Payment%3A%20Everything%20You%20Need%20to%20Know%20for%202026&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to the UK Winter Fuel Payment for 2026/27",
    wordCount: 1360,
  },
  {
    slug: "uk-child-benefit-guide-2026",
    title: "The Complete UK Child Benefit Guide 2026",
    metaTitle: "UK Child Benefit Guide 2026: Rates & HICBC | Calculio",
    metaDescription:
      "A complete guide to UK Child Benefit for 2026/27: current rates, the High Income Child Benefit Charge, whether to claim, and how to apply.",
    excerpt:
      "Current Child Benefit rates for 2026/27, how the High Income Child Benefit Charge works between £60,000 and £80,000, and why it can still be worth claiming.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["Child Benefit", "HICBC", "HMRC", "families", "benefits"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-08",
    updatedDate: "2026-08-08",
    featuredImage:
      "/og?title=The%20Complete%20UK%20Child%20Benefit%20Guide%202026&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK Child Benefit and the High Income Child Benefit Charge for 2026",
    wordCount: 2252,
  },
  {
    slug: "uk-maternity-pay-guide-2026",
    title: "How Much Maternity Pay Will You Get in the UK 2026",
    metaTitle: "UK Maternity Pay 2026: SMP Rates Explained | Calculio",
    metaDescription:
      "How much maternity pay you'll get in the UK for 2026/27: SMP rates, enhanced employer schemes, Maternity Allowance, and planning your finances.",
    excerpt:
      "Statutory Maternity Pay rates for 2026/27, what happens after week 39, enhanced employer schemes, and Maternity Allowance for the self-employed.",
    category: "Tax",
    categorySlug: "tax",
    categoryHref: "/categories/tax",
    tags: ["maternity pay", "SMP", "HMRC", "pregnancy", "employment rights"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-08",
    updatedDate: "2026-08-08",
    featuredImage:
      "/og?title=How%20Much%20Maternity%20Pay%20Will%20You%20Get%20in%20the%20UK%202026&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK maternity pay and Statutory Maternity Pay rates for 2026/27",
    wordCount: 2206,
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
