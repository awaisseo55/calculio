import { calculateReadingTime } from "./reading-time";
import type { CategorySlug } from "./types";
import { officialSources, type OfficialSource } from "./official-sources";

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
  sources: OfficialSource[];
  methodology: string;
  effectivePeriod?: string;
  lastVerifiedDate: string; // ISO date, only bumped on an actual figure review, not a redeploy
  assumptions?: string[];
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

    sources: [officialSources.stampDuty, officialSources.stampDutyResidential],
    methodology:
      "SDLT thresholds and rates are taken directly from HMRC's residential property rate bands and applied to the example purchase prices used in this guide.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a purchase in England or Northern Ireland; Scotland and Wales use separate Land and Buildings Transaction Tax and Land Transaction Tax systems.",
      "Assumes a standard freehold residential purchase, not a leasehold with an unusual premium structure.",
    ],
  },
  {
    slug: "uk-income-tax-2026-27",
    title: "UK Income Tax 2026/27: Bands, Rates, and How Much You'll Pay",
    metaTitle: "UK Income Tax 2026/27: Bands, Rates Explained",
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

    sources: [officialSources.incomeTax, officialSources.scottishIncomeTax, officialSources.nationalInsuranceHowMuch],
    methodology:
      "Income Tax bands and rates are taken directly from HMRC's published Personal Allowance and tax band figures for 2026/27, cross-checked against the separate Scottish Income Tax bands where relevant.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes income taxed through PAYE or Self Assessment; other income types, such as dividends, are taxed under separate rules.",
      "Personal Allowance tapering above £100,000 is applied as published; it does not account for salary sacrifice or pension contributions that could change your adjusted net income.",
    ],
  },
  {
    slug: "mortgage-deposit-uk-2026",
    title: "How Much Deposit Do I Need for a Mortgage in 2026?",
    metaTitle: "How Much Mortgage Deposit Do You Need in 2026?",
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

    sources: [officialSources.mortgageAffordability, officialSources.firstTimeBuyer],
    methodology:
      "Deposit and loan-to-value figures are based on typical UK mortgage lending tiers and MoneyHelper's independent guidance on mortgage affordability, rather than any single lender's specific criteria.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Individual lender criteria vary; this guide describes general LTV tiers, not a guaranteed offer from any specific lender.",
      "Government scheme details are correct as published but may be withdrawn or changed by the relevant lender or government body.",
    ],
  },
  {
    slug: "uk-car-tax-2026-ved-guide",
    title: "UK Car Tax Rates 2026: Complete VED Guide by Fuel Type",
    metaTitle: "UK Car Tax (VED) Rates 2026: Complete Guide",
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

    sources: [officialSources.vehicleTax, officialSources.vehicleTaxEV],
    methodology:
      "VED bands and rates are taken directly from DVLA/HMRC's published vehicle tax rate tables for cars registered on or after 1 April 2017, including the separate rules for electric and low-emission vehicles.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a car registered on or after 1 April 2017; different rules apply to older vehicles.",
      "The expensive car supplement threshold and premium rate are applied as published and may not reflect optional extras added after the list price was set.",
    ],
  },
  {
    slug: "healthy-bmi-adults-uk",
    title: "BMI Calculator UK: What's a Healthy BMI for Adults?",
    metaTitle: "Healthy BMI Range for UK Adults Explained",
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

    sources: [officialSources.nhsBmiAdults, officialSources.nhsHealthyWeight],
    methodology:
      "BMI categories and healthy weight ranges are taken directly from NHS guidance for adults.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "BMI is a general screening measure, not a diagnosis; it does not account for muscle mass, bone density or body composition.",
      "NHS guidance notes that healthy BMI thresholds differ for Black, Asian and some other minority ethnic groups; this is reflected in the ranges given.",
    ],
  },
  {
    slug: "self-employed-tax-guide-uk-2026",
    title: "The Complete UK Self-Employed Tax Guide for 2026/27",
    metaTitle: "Self-Employed Tax Guide UK 2026/27 | Income Tax & NI",
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

    sources: [officialSources.incomeTax, officialSources.nationalInsurance, officialSources.selfAssessment],
    methodology:
      "Income Tax and Class 2/Class 4 National Insurance figures are taken directly from HMRC's published rates for the self-employed, applied to the worked example in this guide.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard sole trader trading income; different rules apply to limited companies and partnerships.",
      "Allowable expenses are described in general terms; individual circumstances affect exactly what can be claimed.",
    ],
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

    sources: [officialSources.isaAllowance],
    methodology:
      "The compound interest formula shown is the standard mathematical formula used across the financial industry; ISA allowance figures are taken from HMRC's published rules.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a fixed interest or growth rate for the full period shown; real returns vary year to year, especially for investments rather than savings accounts.",
      "Does not account for tax on interest earned outside a tax-free wrapper such as an ISA.",
    ],
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

    sources: [officialSources.congestionCharge, officialSources.ulez],
    methodology:
      "Congestion Charge and ULEZ operating hours, zones and daily rates are taken directly from Transport for London's published guidance.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard passenger car; rates and exemptions differ for vans, HGVs, motorcycles and other vehicle types.",
      "Boundary and exemption rules can change; always confirm your specific vehicle and route on the TfL website before travelling.",
    ],
  },
  {
    slug: "uk-state-pension-guide-2026",
    title: "How Much Is My State Pension Worth in 2026? UK State Pension Guide",
    metaTitle: "UK State Pension 2026: How Much Will You Get?",
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

    sources: [officialSources.statePensionHowMuch, officialSources.newStatePension, officialSources.statePensionAge],
    methodology:
      "State Pension amounts and qualifying year requirements are taken directly from GOV.UK's published new State Pension guidance.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes eligibility for the new State Pension (men born on or after 6 April 1951, women born on or after 6 April 1953); different rules apply to the basic State Pension.",
      "Your actual amount depends on your individual National Insurance record; only GOV.UK's State Pension forecast tool can give a personal figure.",
    ],
  },
  {
    slug: "first-home-cost-uk-2026",
    title: "The Real Cost of Buying Your First Home in the UK 2026",
    metaTitle: "Real Cost of Buying Your First Home UK 2026",
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

    sources: [officialSources.stampDuty, officialSources.mortgageAffordability, officialSources.firstTimeBuyer],
    methodology:
      "Stamp Duty and mortgage cost figures are taken from HMRC's SDLT rates and MoneyHelper's mortgage guidance, applied to the example costs discussed in this guide.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard residential purchase in England or Northern Ireland.",
      "Additional costs such as surveys, solicitor fees and removals vary by provider and are given as general ranges, not fixed quotes.",
    ],
  },
  {
    slug: "freelancer-hourly-rate-uk-2026",
    title: "How to Calculate Your True Hourly Rate as a UK Freelancer",
    metaTitle: "True Freelance Hourly Rate Calculator Guide UK",
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

    sources: [officialSources.incomeTax, officialSources.nationalInsurance, officialSources.selfAssessment],
    methodology:
      "Tax and National Insurance figures used in the worked examples are taken from HMRC's published rates for the self-employed.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes sole trader status; limited company contractors are taxed differently.",
      "Does not account for IR35 status, which can significantly change take-home pay for some contractors.",
    ],
  },
  {
    slug: "uk-council-tax-guide-2026",
    title: "The Complete UK Council Tax Guide for 2026/27",
    metaTitle: "UK Council Tax Guide 2026/27: Bands, Discounts",
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

    sources: [officialSources.councilTax],
    methodology:
      "Council Tax band structure and valuation approach are taken directly from GOV.UK's guidance; exact charges are set independently by each local council.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Council Tax bands are based on 1991 property values in England, not current market value.",
      "Individual council charges, discounts and local precepts vary by area and are not fixed nationally.",
    ],
  },
  {
    slug: "reduce-uk-energy-bills-2026",
    title: "How to Reduce Your UK Energy Bills in 2026",
    metaTitle: "How to Reduce Your UK Energy Bills in 2026",
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

    sources: [officialSources.energyPriceCap],
    methodology:
      "Unit rate and standing charge figures are taken directly from Ofgem's published energy price cap.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "The price cap applies to default/standard variable tariffs; fixed-rate deals can be higher or lower.",
      "The price cap sets a maximum rate per unit, not a maximum bill; actual bills still depend on how much energy you use.",
    ],
  },
  {
    slug: "electric-vs-petrol-cost-comparison-uk-2026",
    title: "Is an Electric Car Cheaper Than Petrol in the UK in 2026?",
    metaTitle: "Electric vs Petrol Car Costs UK 2026",
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

    sources: [officialSources.vehicleTaxEV, officialSources.vehicleTax],
    methodology:
      "Vehicle tax figures are taken from DVLA/HMRC's published vehicle tax rate tables, including the rules for electric vehicles.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Running cost comparisons use example fuel/electricity prices at the time of writing, which change regularly.",
      "Does not account for individual insurance, servicing or depreciation differences between specific models.",
    ],
  },
  {
    slug: "uk-redundancy-guide-2026",
    title: "UK Redundancy Rights and Pay Explained for 2026",
    metaTitle: "UK Redundancy Rights and Pay Guide 2026",
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

    sources: [officialSources.redundancyPay, officialSources.redundancyRights],
    methodology:
      "Statutory redundancy pay figures and the weekly pay cap are taken directly from GOV.UK's published redundancy calculator rules.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes at least 2 years' continuous employment, the minimum needed to qualify for statutory redundancy pay.",
      "Employers may offer enhanced redundancy pay above the statutory minimum; this guide covers the statutory entitlement only.",
    ],
  },
  {
    slug: "uk-sick-pay-guide-2026",
    title: "Understanding UK Sick Pay: Your Rights Explained",
    metaTitle: "UK Sick Pay Rules Explained 2026 | SSP Guide",
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

    sources: [officialSources.statutorySickPay],
    methodology:
      "Statutory Sick Pay rates and eligibility rules are taken directly from GOV.UK's published SSP guidance.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes eligibility for SSP; some employees are not eligible and some employers offer enhanced contractual sick pay instead.",
      "SSP is not payable for the first 3 qualifying waiting days in most cases.",
    ],
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

    sources: [officialSources.winterFuelPayment],
    methodology:
      "Eligibility and payment amounts are taken directly from GOV.UK's published Winter Fuel Payment guidance.",
    effectivePeriod: "winter 2026 to 2027",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Eligibility depends on your date of birth and, since recent changes, your income; check GOV.UK for your personal position.",
      "Payments are usually automatic; this guide does not cover every edge case, such as living abroad or in a care home.",
    ],
  },
  {
    slug: "uk-child-benefit-guide-2026",
    title: "The Complete UK Child Benefit Guide 2026",
    metaTitle: "UK Child Benefit Guide 2026: Rates & HICBC",
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

    sources: [officialSources.childBenefit, officialSources.childBenefitTaxCharge],
    methodology:
      "Child Benefit rates and the High Income Child Benefit Charge thresholds are taken directly from GOV.UK's published guidance.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "The High Income Child Benefit Charge is based on the higher earner's individual adjusted net income, not household income.",
      "Rates shown are the standard weekly rates; backdating and other edge cases are not covered in full.",
    ],
  },
  {
    slug: "uk-maternity-pay-guide-2026",
    title: "How Much Maternity Pay Will You Get in the UK 2026",
    metaTitle: "UK Maternity Pay 2026: SMP Rates Explained",
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

    sources: [officialSources.maternityPayLeave],
    methodology:
      "Statutory Maternity Pay rates and the 90%/flat-rate structure are taken directly from GOV.UK's published maternity pay and leave guidance.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes eligibility for Statutory Maternity Pay; those who don't qualify may be eligible for Maternity Allowance instead, which has different rules.",
      "Does not cover enhanced contractual maternity pay, which many employers offer above the statutory minimum.",
    ],
  },
  {
    slug: "uk-student-loan-repayment-guide-2026",
    title: "UK Student Loan Repayment 2026: Plans 1, 2, 4, 5 and Postgraduate Explained",
    metaTitle: "UK Student Loan Repayment 2026: All Plans Explained",
    metaDescription:
      "How UK student loan repayment works in 2026: thresholds and rates for Plans 1, 2, 4, 5 and Postgraduate loans, interest, write-off rules, and a worked example.",
    excerpt:
      "Repayment thresholds and rates for every UK student loan plan, a worked example on a £35,000 salary, how interest and write-off periods work, and whether overpaying makes sense.",
    category: "Education",
    categorySlug: "education",
    categoryHref: "/categories/education",
    tags: ["student loan", "Plan 2", "graduates", "repayment", "education"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-13",
    updatedDate: "2026-08-13",
    featuredImage:
      "/og?title=UK%20Student%20Loan%20Repayment%202026%3A%20Plans%201%2C%202%2C%204%2C%205%20and%20Postgraduate%20Explained&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK student loan repayment plans and thresholds for 2026",
    wordCount: 1480,

    sources: [officialSources.studentLoanRepayment],
    methodology:
      "Repayment thresholds and rates for each student loan plan are taken directly from GOV.UK's published student loan repayment guidance.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes repayment through UK PAYE employment; self-employed and overseas repayment rules differ slightly.",
      "Threshold figures are UK-wide; Plan 1 has separate thresholds for Scotland and Northern Ireland in some years.",
    ],
  },
  {
    slug: "how-much-mortgage-can-i-afford-uk-2026",
    title: "How Much Mortgage Can I Afford in the UK in 2026?",
    metaTitle: "How Much Mortgage Can I Afford UK 2026?",
    metaDescription:
      "Estimate how much mortgage you can afford in the UK in 2026. Learn how income multiples, deposits, outgoings and interest rates affect your budget.",
    excerpt:
      "Learn how lenders use income, outgoings, deposits and interest rates to assess mortgage affordability, with a clear worked example and practical checks.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["mortgage affordability", "house buying", "income multiple", "deposit", "LTV"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-17",
    updatedDate: "2026-08-17",
    featuredImage: "/blog/mortgage-affordability-uk-2026.jpg",
    featuredImageAlt: "Couple reviewing their mortgage affordability and household budget in a UK home",
    wordCount: 1295,

    sources: [officialSources.mortgageAffordability, officialSources.firstTimeBuyer],
    methodology:
      "Affordability ranges are based on typical UK mortgage lending multiples and MoneyHelper's independent mortgage affordability guidance, not any single lender's underwriting model.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Individual lender affordability assessments vary considerably and depend on credit history, existing debt and outgoings.",
      "This guide gives a general estimate only; a mortgage broker or lender's own affordability calculator is needed for a figure you can rely on.",
    ],
  },
  {
    slug: "salary-vs-dividends-uk-2026",
    title: "Salary vs Dividends: How UK Limited Company Directors Should Pay Themselves in 2026/27",
    metaTitle: "Salary vs Dividends UK 2026/27: Director's Guide",
    metaDescription:
      "How UK limited company directors should split salary and dividends in 2026/27, with a worked example, current dividend tax rates, and common mistakes to avoid.",
    excerpt:
      "How Income Tax, National Insurance and Corporation Tax interact when you pay yourself salary versus dividends, with a worked £10,000 example and the small-salary strategy most directors use.",
    category: "Business",
    categorySlug: "business",
    categoryHref: "/categories/business",
    tags: ["salary vs dividends", "limited company", "corporation tax", "dividend tax", "director pay"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-20",
    updatedDate: "2026-08-20",
    featuredImage: "/blog/salary-vs-dividends-2026.jpg",
    featuredImageAlt: "UK limited company director reviewing salary and dividend paperwork for 2026/27",
    wordCount: 1280,

    sources: [officialSources.dividendTax, officialSources.corporationTax, officialSources.nationalInsuranceHowMuch],
    methodology:
      "Income Tax, National Insurance and dividend tax figures are taken directly from HMRC's published rates for 2026/27, applied to the worked example in this guide.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a single director-shareholder taking a straightforward salary and dividend split from a UK limited company.",
      "The worked example looks at personal tax only; it does not fold in employer National Insurance or the Corporation Tax already paid on profit before a dividend can be distributed, both of which are separate company-side costs.",
    ],
  },
  {
    slug: "tdee-vs-bmr-calories-explained",
    title: "TDEE vs BMR: How Many Calories Do You Actually Need Each Day?",
    metaTitle: "TDEE vs BMR Explained: How Many Calories You Need",
    metaDescription:
      "The difference between BMR and TDEE explained, the Mifflin-St Jeor formula behind both, activity multipliers, and a full worked calorie example.",
    excerpt:
      "What BMR and TDEE actually measure, the Mifflin-St Jeor formula used to estimate both, and a worked example showing exactly how activity level changes your daily calorie needs.",
    category: "Health",
    categorySlug: "health",
    categoryHref: "/categories/health",
    tags: ["TDEE", "BMR", "calories", "weight management", "metabolism"],
    authorSlug: "james-whitfield",
    reviewerSlug: "sophie-whitmore",
    publishDate: "2026-08-20",
    updatedDate: "2026-08-20",
    featuredImage: "/blog/tdee-vs-bmr-guide.jpg",
    featuredImageAlt: "Person planning meals and tracking calories based on their TDEE and BMR",
    wordCount: 1180,

    sources: [officialSources.nhsPhysicalActivity],
    methodology:
      "BMR is calculated using the Mifflin-St Jeor formula, the equation generally considered most accurate for modern adults; TDEE activity multipliers follow the general activity bands referenced in NHS physical activity guidance for adults.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "BMR and TDEE formulas are population-average estimates; individual metabolism can reasonably vary 10-15% either side of the calculated figure.",
      "Does not account for individual body composition (muscle vs fat mass), which affects resting calorie burn but isn't captured by the formula's inputs.",
    ],
  },
  {
    slug: "capital-gains-tax-uk-2026-27",
    title: "Capital Gains Tax UK 2026/27: How Much Will You Pay?",
    metaTitle: "Capital Gains Tax UK 2026/27: Rates, Allowance & Example",
    metaDescription:
      "Work out UK Capital Gains Tax for 2026/27 on property or shares, with current rates, the £3,000 exempt amount, and a full worked example.",
    excerpt:
      "What counts as a capital gain, the £3,000 annual exempt amount, the 18% and 24% rates, and a full worked example on selling a rental property.",
    category: "Tax",
    categorySlug: "tax",
    categoryHref: "/categories/tax",
    tags: ["capital gains tax", "CGT", "HMRC", "property tax", "shares"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-21",
    updatedDate: "2026-08-21",
    featuredImage:
      "/og?title=Capital%20Gains%20Tax%20UK%202026%2F27%3A%20How%20Much%20Will%20You%20Pay%3F&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK Capital Gains Tax rates and allowances for 2026/27",
    wordCount: 1708,

    sources: [officialSources.capitalGainsTax],
    methodology:
      "Capital Gains Tax rates and the annual exempt amount are taken directly from HMRC's published Capital Gains Tax guidance, applied to the worked example in this guide.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-21",
    assumptions: [
      "Assumes a standard chargeable asset such as a second property or shares held outside an ISA; different reliefs can apply to business assets.",
      "The worked example assumes the whole gain falls within one tax band; a gain that straddles both basic and higher rate bands is split proportionally.",
    ],
  },
  {
    slug: "uk-inheritance-tax-guide-2026",
    title: "UK Inheritance Tax Explained: Thresholds, Rates and How to Reduce Your Bill",
    metaTitle: "UK Inheritance Tax Guide 2026/27: Thresholds & Rates",
    metaDescription:
      "How UK Inheritance Tax works for 2026/27: the nil-rate band, residence nil-rate band, 40% rate, the 7-year gift rule, and a full worked example.",
    excerpt:
      "The nil-rate band, the residence nil-rate band, how the 7-year gift rule works, and a worked example on a £950,000 estate left to children.",
    category: "Tax",
    categorySlug: "tax",
    categoryHref: "/categories/tax",
    tags: ["inheritance tax", "IHT", "estate planning", "HMRC", "nil-rate band"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-21",
    updatedDate: "2026-08-21",
    featuredImage:
      "/og?title=UK%20Inheritance%20Tax%20Explained%3A%20Thresholds%2C%20Rates%20and%20How%20to%20Reduce%20Your%20Bill&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK Inheritance Tax thresholds and rates for 2026/27",
    wordCount: 1671,

    sources: [officialSources.inheritanceTax],
    methodology:
      "Inheritance Tax thresholds and rates are taken directly from HMRC's published nil-rate band and residence nil-rate band guidance, applied to the worked example in this guide.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-21",
    assumptions: [
      "Assumes a standard UK estate; trusts, business relief and agricultural relief can significantly change the amount due and are not covered in full.",
      "The residence nil-rate band assumes the main home is left to direct descendants and the estate is below the £2,000,000 taper threshold.",
    ],
  },
  {
    slug: "corporation-tax-uk-small-business-2026",
    title: "Corporation Tax for Small UK Companies: Rates, Marginal Relief and a Worked Example",
    metaTitle: "Corporation Tax UK 2026/27: Rates & Marginal Relief",
    metaDescription:
      "UK Corporation Tax rates for 2026/27 explained: the 19% small profits rate, 25% main rate, marginal relief, and a full worked example for £100,000 profit.",
    excerpt:
      "The 19% small profits rate, the 25% main rate, how marginal relief tapers the two together, and a worked example for a company on £100,000 profit.",
    category: "Business",
    categorySlug: "business",
    categoryHref: "/categories/business",
    tags: ["corporation tax", "marginal relief", "limited company", "HMRC", "small business"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-21",
    updatedDate: "2026-08-21",
    featuredImage:
      "/og?title=Corporation%20Tax%20for%20Small%20UK%20Companies%3A%20Rates%2C%20Marginal%20Relief%20and%20a%20Worked%20Example&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide to UK Corporation Tax rates and marginal relief for 2026/27",
    wordCount: 1592,

    sources: [officialSources.corporationTax],
    methodology:
      "Corporation Tax rates, thresholds and the marginal relief formula are taken directly from HMRC's published Corporation Tax rates guidance, applied to the worked example in this guide.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-21",
    assumptions: [
      "Assumes a single company with no associated companies; the £50,000 and £250,000 thresholds are divided between associated companies.",
      "Assumes standard trading profit with no augmented profits from dividends received from other companies, which can affect the marginal relief calculation.",
    ],
  },
  {
    slug: "isa-guide-uk-2026-27",
    title: "ISA Guide 2026/27: Cash, Stocks and Shares, Lifetime or Junior, Which Should You Pick?",
    metaTitle: "ISA Guide UK 2026/27: Cash vs Stocks & Shares vs LISA",
    metaDescription:
      "A plain English guide to UK ISAs for 2026/27: the £20,000 allowance, Cash vs Stocks and Shares vs Lifetime ISAs, and how much tax you could save.",
    excerpt:
      "The £20,000 ISA allowance, how the four main ISA types differ, how the Lifetime ISA's 25% bonus works, and a worked example against taxable savings.",
    category: "Finance",
    categorySlug: "finance",
    categoryHref: "/categories/finance",
    tags: ["ISA", "Lifetime ISA", "savings", "tax-free savings", "personal finance"],
    authorSlug: "james-whitfield",
    reviewerSlug: "emily-thorne",
    publishDate: "2026-08-21",
    updatedDate: "2026-08-21",
    featuredImage:
      "/og?title=ISA%20Guide%202026%2F27%3A%20Cash%2C%20Stocks%20and%20Shares%2C%20Lifetime%20or%20Junior%2C%20Which%20Should%20You%20Pick%3F&subtitle=calculio.co.uk",
    featuredImageAlt: "Calculio guide comparing Cash, Stocks and Shares, Lifetime and Junior ISAs for 2026/27",
    wordCount: 1542,

    sources: [officialSources.isaAllowance],
    methodology:
      "ISA allowances and the Lifetime ISA bonus rate are taken directly from HMRC's published ISA guidance, applied to the worked example in this guide.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-21",
    assumptions: [
      "The taxable savings comparison assumes a higher-rate taxpayer with a £500 Personal Savings Allowance and no other tax-free savings income used elsewhere.",
      "Lifetime ISA figures assume an eligible saver aged 18 to 39 opening the account and using it for a first home worth up to £450,000 or retirement from age 60.",
    ],
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

export function getRelatedBlogPosts(slug: string, count = 3): BlogPostMeta[] {
  const current = getBlogPost(slug);
  const others = getOtherBlogPosts(slug);
  if (!current) return others.slice(0, count);
  const sameCategory = others.filter((p) => p.categorySlug === current.categorySlug);
  const rest = others.filter((p) => p.categorySlug !== current.categorySlug);
  return [...sameCategory, ...rest].slice(0, count);
}

export function getBlogPostsByCategory(categorySlug: CategorySlug): BlogPostMeta[] {
  return getAllBlogPosts().filter((p) => p.categorySlug === categorySlug);
}

export function getArticlesWrittenBy(authorSlug: string): BlogPostMeta[] {
  return getAllBlogPosts().filter((p) => p.authorSlug === authorSlug);
}

export function getArticlesReviewedBy(reviewerSlug: string): BlogPostMeta[] {
  return getAllBlogPosts().filter((p) => p.reviewerSlug === reviewerSlug);
}

export function getPostReadingTime(post: BlogPostMeta): number {
  return calculateReadingTime(post.wordCount);
}
