import type { CalculatorMeta } from "./types";

export const calculators: CalculatorMeta[] = [
  {
    slug: "mortgage-calculator-uk",
    name: "Mortgage Calculator",
    shortName: "Mortgage",
    h1: "UK Mortgage Calculator",
    category: "home",
    description:
      "Estimate your monthly mortgage repayments, total interest and full amortisation schedule.",
    metaTitle: "Mortgage Calculator UK 2026 | Monthly Repayments | Calculio",
    metaDescription:
      "Free UK mortgage calculator. Work out monthly repayments, total interest and total cost for any property price, deposit, term and rate.",
    keywords: ["mortgage calculator uk", "monthly mortgage repayments", "mortgage repayment calculator"],
    icon: "Home",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "stamp-duty-calculator-uk",
    name: "Stamp Duty Calculator",
    shortName: "Stamp Duty",
    h1: "UK Stamp Duty Calculator (SDLT, LBTT & LTT)",
    category: "home",
    description:
      "Calculate Stamp Duty Land Tax, Land and Buildings Transaction Tax or Land Transaction Tax on your property purchase.",
    metaTitle: "Stamp Duty Calculator 2026 | SDLT, LBTT & LTT | Calculio",
    metaDescription:
      "Work out how much stamp duty you'll pay in England, Scotland or Wales in 2026, with a full band-by-band breakdown for your buyer type.",
    keywords: ["stamp duty calculator", "sdlt calculator", "lbtt calculator", "ltt calculator wales"],
    icon: "FileText",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "take-home-pay-calculator-uk",
    name: "Take-Home Pay Calculator",
    shortName: "Take-Home Pay",
    h1: "UK Take-Home Pay (Salary) Calculator",
    category: "finance",
    description:
      "See your net monthly and annual pay after Income Tax, National Insurance, pension and student loan deductions.",
    metaTitle: "Take-Home Pay Calculator UK 2026 | Net Salary | Calculio",
    metaDescription:
      "Calculate your UK take-home pay for 2026/27. See net salary after tax, National Insurance, pension and student loan repayments.",
    keywords: ["take home pay calculator", "net salary calculator uk", "salary calculator uk"],
    icon: "Wallet",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "income-tax-calculator-uk",
    name: "Income Tax Calculator",
    shortName: "Income Tax",
    h1: "UK Income Tax Calculator",
    category: "tax",
    description:
      "Break down exactly how much Income Tax you owe by band, for England, Wales, Northern Ireland or Scotland.",
    metaTitle: "Income Tax Calculator UK 2026/27 | By Tax Band | Calculio",
    metaDescription:
      "Calculate your UK Income Tax for 2025/26 or 2026/27. Full breakdown by personal allowance and tax band for all UK nations.",
    keywords: ["income tax calculator uk", "uk tax bands 2026", "income tax calculator"],
    icon: "Percent",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "road-tax-calculator-uk",
    name: "Road Tax (VED) Calculator",
    shortName: "Road Tax",
    h1: "UK Road Tax (VED) Calculator",
    category: "motoring",
    description:
      "Find your Vehicle Excise Duty rate based on fuel type, CO2 emissions, list price and first registration date.",
    metaTitle: "Road Tax Calculator UK 2026 | VED Rates | Calculio",
    metaDescription:
      "Calculate UK car tax (VED) for 2026. First-year and standard rates for petrol, diesel, hybrid and electric vehicles.",
    keywords: ["road tax calculator", "ved calculator", "car tax calculator uk"],
    icon: "Car",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "fuel-cost-calculator-uk",
    name: "Fuel Cost Calculator",
    shortName: "Fuel Cost",
    h1: "UK Fuel Cost Calculator",
    category: "motoring",
    description:
      "Work out how much a journey or trip will cost in fuel, based on distance, MPG and fuel price.",
    metaTitle: "Fuel Cost Calculator UK | Journey & Trip Cost | Calculio",
    metaDescription:
      "Calculate the fuel cost of any journey. Enter distance, MPG and fuel price per litre to get total cost and cost per mile.",
    keywords: ["fuel cost calculator", "petrol cost calculator", "mpg calculator uk"],
    icon: "Fuel",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "bmi-calculator-uk",
    name: "BMI Calculator",
    shortName: "BMI",
    h1: "BMI Calculator (UK / NHS)",
    category: "health",
    description:
      "Calculate your Body Mass Index and see which NHS weight category you fall into, plus a healthy weight range.",
    metaTitle: "BMI Calculator UK | NHS Categories | Calculio",
    metaDescription:
      "Free BMI calculator using metric or imperial units. See your NHS BMI category and healthy weight range instantly.",
    keywords: ["bmi calculator", "bmi calculator nhs", "body mass index calculator uk"],
    icon: "HeartPulse",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "pregnancy-due-date-calculator-uk",
    name: "Pregnancy Due Date Calculator",
    shortName: "Due Date",
    h1: "Pregnancy Due Date Calculator",
    category: "health",
    description:
      "Estimate your due date and current gestational week from your last period, conception date or IVF transfer date.",
    metaTitle: "Pregnancy Due Date Calculator UK | NHS Milestones | Calculio",
    metaDescription:
      "Work out your estimated due date and current week of pregnancy, plus key NHS antenatal milestones like your scans.",
    keywords: ["pregnancy due date calculator", "due date calculator uk", "gestational age calculator"],
    icon: "Baby",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    shortName: "Age",
    h1: "Age Calculator",
    category: "everyday",
    description:
      "Calculate exact age in years, months and days from any date of birth, plus total days, weeks and hours lived.",
    metaTitle: "Age Calculator | Exact Age in Years, Months, Days | Calculio",
    metaDescription:
      "Calculate your exact age in years, months and days, total days lived, and a countdown to your next birthday.",
    keywords: ["age calculator", "date of birth calculator", "how old am i"],
    icon: "Cake",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    shortName: "Percentage",
    h1: "Percentage Calculator",
    category: "everyday",
    description:
      "Four calculators in one: find a percentage of a number, work out percentage change, and more.",
    metaTitle: "Percentage Calculator | % of, Change, Increase | Calculio",
    metaDescription:
      "Free online percentage calculator. Find what X% of Y is, percentage change, and increase or decrease in seconds.",
    keywords: ["percentage calculator", "percentage increase calculator", "percentage change calculator"],
    icon: "Percent",
    schemaType: "SoftwareApplication",
  },
];

export function getCalculator(slug: string): CalculatorMeta | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function getCalculatorsByCategory(category: string): CalculatorMeta[] {
  return calculators.filter((c) => c.category === category);
}

export function getFeaturedCalculators(): CalculatorMeta[] {
  return calculators.filter((c) => c.featured);
}

export function getRelatedCalculators(slug: string, count = 3): CalculatorMeta[] {
  const current = getCalculator(slug);
  if (!current) return calculators.slice(0, count);
  const sameCategory = calculators.filter(
    (c) => c.category === current.category && c.slug !== slug
  );
  const others = calculators.filter(
    (c) => c.category !== current.category && c.slug !== slug
  );
  return [...sameCategory, ...others].slice(0, count);
}
