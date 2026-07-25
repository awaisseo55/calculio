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
  {
    slug: "compound-interest-calculator-uk",
    name: "Compound Interest Calculator",
    shortName: "Compound Interest",
    h1: "UK Compound Interest Calculator",
    category: "finance",
    description:
      "See how your savings grow over time with compound interest, including regular monthly contributions.",
    metaTitle: "Compound Interest Calculator UK 2026 | Calculio",
    metaDescription:
      "Work out how your savings grow with compound interest. Add monthly contributions and see a year by year breakdown of your balance.",
    keywords: ["compound interest calculator", "compound interest calculator uk", "savings growth calculator"],
    icon: "TrendingUp",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "savings-goal-calculator-uk",
    name: "Savings Goal Calculator",
    shortName: "Savings Goal",
    h1: "UK Savings Goal Calculator",
    category: "finance",
    description:
      "Find out how long it will take to reach your savings goal based on your monthly contributions and interest rate.",
    metaTitle: "Savings Goal Calculator UK | How Long to Save | Calculio",
    metaDescription:
      "Calculate how long it will take to reach your savings target, based on your starting balance, monthly contribution and interest rate.",
    keywords: ["savings goal calculator", "savings calculator uk", "how long to save"],
    icon: "PiggyBank",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "loan-repayment-calculator-uk",
    name: "Loan Repayment Calculator",
    shortName: "Loan Repayment",
    h1: "UK Loan Repayment Calculator",
    category: "finance",
    description:
      "Work out your monthly loan repayment, total interest and a full repayment schedule for any personal loan.",
    metaTitle: "Loan Repayment Calculator UK | Monthly Cost | Calculio",
    metaDescription:
      "Free UK loan repayment calculator. Work out your monthly payment, total interest and full repayment schedule for any personal loan.",
    keywords: ["loan repayment calculator", "loan calculator uk", "personal loan calculator"],
    icon: "Banknote",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "credit-card-payoff-calculator-uk",
    name: "Credit Card Payoff Calculator",
    shortName: "Credit Card Payoff",
    h1: "UK Credit Card Payoff Calculator",
    category: "finance",
    description:
      "See how long it will take to clear your credit card balance and how much interest you will pay at different payment levels.",
    metaTitle: "Credit Card Payoff Calculator UK | Calculio",
    metaDescription:
      "Work out how long it takes to pay off a credit card balance and how much interest you will pay, based on your monthly payment and APR.",
    keywords: ["credit card payoff calculator", "credit card calculator uk", "pay off credit card"],
    icon: "CreditCard",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "mortgage-overpayment-calculator-uk",
    name: "Mortgage Overpayment Calculator",
    shortName: "Mortgage Overpayment",
    h1: "UK Mortgage Overpayment Calculator",
    category: "finance",
    description:
      "Find out how much time and interest you could save by overpaying your mortgage each month.",
    metaTitle: "Mortgage Overpayment Calculator UK | Calculio",
    metaDescription:
      "See how much interest and time you could save by overpaying your mortgage each month, with a new payoff date and total saving.",
    keywords: ["mortgage overpayment calculator", "overpay mortgage calculator uk", "mortgage overpayment savings"],
    icon: "CalendarCheck",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "national-insurance-calculator-uk",
    name: "National Insurance Calculator",
    shortName: "National Insurance",
    h1: "UK National Insurance Calculator",
    category: "tax",
    description:
      "Calculate how much National Insurance you pay as an employee or if you're self-employed, for 2025/26 and 2026/27.",
    metaTitle: "National Insurance Calculator UK 2026/27 | Calculio",
    metaDescription:
      "Work out your UK National Insurance contributions for 2026/27, whether you're employed or self-employed, with a full monthly breakdown.",
    keywords: ["national insurance calculator", "ni calculator uk", "class 4 national insurance calculator"],
    icon: "ShieldCheck",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "self-employed-tax-calculator-uk",
    name: "Self-Employed Tax Calculator",
    shortName: "Self-Employed Tax",
    h1: "UK Self-Employed Tax Calculator",
    category: "tax",
    description:
      "Work out your Income Tax, Class 2 and Class 4 National Insurance as a self-employed sole trader.",
    metaTitle: "Self-Employed Tax Calculator UK 2026/27 | Calculio",
    metaDescription:
      "Calculate your total tax bill as a self-employed sole trader, including Income Tax and Class 2 and Class 4 National Insurance.",
    keywords: ["self employed tax calculator", "sole trader tax calculator uk", "self employed tax calculator uk"],
    icon: "Briefcase",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "dividend-tax-calculator-uk",
    name: "Dividend Tax Calculator",
    shortName: "Dividend Tax",
    h1: "UK Dividend Tax Calculator",
    category: "tax",
    description:
      "Calculate the tax you owe on dividend income above your tax-free dividend allowance.",
    metaTitle: "Dividend Tax Calculator UK 2026/27 | Calculio",
    metaDescription:
      "Work out how much tax you owe on dividend income in 2026/27, after your salary and the tax-free dividend allowance.",
    keywords: ["dividend tax calculator", "dividend tax calculator uk", "dividend allowance calculator"],
    icon: "LineChart",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "capital-gains-tax-calculator-uk",
    name: "Capital Gains Tax Calculator",
    shortName: "Capital Gains Tax",
    h1: "UK Capital Gains Tax Calculator",
    category: "tax",
    description:
      "Estimate the Capital Gains Tax owed on the sale of property, shares or other assets after your annual exempt amount.",
    metaTitle: "Capital Gains Tax Calculator UK 2026/27 | Calculio",
    metaDescription:
      "Estimate your UK Capital Gains Tax bill on property or other assets, after the annual exempt amount and your Income Tax band.",
    keywords: ["capital gains tax calculator", "cgt calculator uk", "capital gains tax calculator uk"],
    icon: "ArrowUpRight",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "mpg-calculator-uk",
    name: "MPG Calculator",
    shortName: "MPG",
    h1: "UK MPG Calculator",
    category: "motoring",
    description:
      "Work out your car's real fuel economy in miles per gallon, litres per 100km and cost per mile.",
    metaTitle: "MPG Calculator UK | Miles Per Gallon | Calculio",
    metaDescription:
      "Calculate your car's real world MPG from distance driven and fuel used, plus litres per 100km and an estimated cost per mile.",
    keywords: ["mpg calculator", "mpg calculator uk", "miles per gallon calculator"],
    icon: "Gauge",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "congestion-charge-ulez-calculator-uk",
    name: "Congestion Charge and ULEZ Calculator",
    shortName: "Congestion Charge & ULEZ",
    h1: "London Congestion Charge and ULEZ Calculator",
    category: "motoring",
    description:
      "Work out your daily, weekly and annual London Congestion Charge and ULEZ costs based on your vehicle and how often you drive in.",
    metaTitle: "Congestion Charge & ULEZ Calculator UK | Calculio",
    metaDescription:
      "Estimate your London Congestion Charge and ULEZ costs by vehicle type, emissions standard and how many days a week you drive in.",
    keywords: ["congestion charge calculator", "ulez calculator", "ulez charge calculator london"],
    icon: "MapPin",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "tdee-calculator-uk",
    name: "TDEE Calculator",
    shortName: "TDEE",
    h1: "TDEE Calculator (Total Daily Energy Expenditure)",
    category: "health",
    description:
      "Estimate your total daily energy expenditure and general calorie guides for maintaining, losing or gaining weight.",
    metaTitle: "TDEE Calculator UK | Daily Calorie Needs | Calculio",
    metaDescription:
      "Estimate your total daily energy expenditure (TDEE) and general calorie guidance for maintenance, mild loss or mild gain.",
    keywords: ["tdee calculator", "tdee calculator uk", "calorie calculator uk"],
    icon: "Flame",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "ideal-weight-calculator-uk",
    name: "Ideal Weight Calculator",
    shortName: "Ideal Weight",
    h1: "UK Ideal Weight Calculator",
    category: "health",
    description:
      "See an estimated healthy weight range for your height using several common formulas, alongside the NHS BMI range.",
    metaTitle: "Ideal Weight Calculator UK | Healthy Weight Range | Calculio",
    metaDescription:
      "Estimate a healthy weight range for your height using the Devine, Robinson and NHS BMI methods. General guidance only, not medical advice.",
    keywords: ["ideal weight calculator", "healthy weight calculator uk", "ideal body weight calculator"],
    icon: "Scale",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "paint-coverage-calculator-uk",
    name: "Paint Coverage Calculator",
    shortName: "Paint Coverage",
    h1: "UK Paint Coverage Calculator",
    category: "home",
    description:
      "Work out how many litres and tins of paint you need for a room, based on its size, coats and paint coverage rate.",
    metaTitle: "Paint Coverage Calculator UK | How Much Paint | Calculio",
    metaDescription:
      "Calculate how many litres and tins of paint you need for any room, based on wall area, coats, doors, windows and coverage rate.",
    keywords: ["paint calculator", "paint coverage calculator uk", "how much paint do i need"],
    icon: "PaintBucket",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "tip-calculator-uk",
    name: "Tip Calculator",
    shortName: "Tip Calculator",
    h1: "UK Tip Calculator",
    category: "everyday",
    description:
      "Work out how much to tip, your total bill and how much each person owes if you're splitting the bill.",
    metaTitle: "Tip Calculator UK | Split the Bill | Calculio",
    metaDescription:
      "Work out how much to tip in the UK, your total bill including the tip, and how much each person owes if you're splitting it.",
    keywords: ["tip calculator", "tip calculator uk", "bill splitting calculator"],
    icon: "Receipt",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "isa-calculator-uk",
    name: "ISA Calculator",
    shortName: "ISA",
    h1: "UK ISA Calculator",
    category: "finance",
    description:
      "Project how a Cash, Stocks and Shares, Lifetime or Junior ISA could grow, and see how much you keep tax-free.",
    metaTitle: "ISA Calculator UK 2026/27 | Tax-Free Growth | Calculio",
    metaDescription:
      "Work out how your ISA could grow over time, tax-free, across Cash, Stocks and Shares, Lifetime and Junior ISAs, with a comparison to taxed savings.",
    keywords: ["isa calculator", "isa calculator uk", "stocks and shares isa calculator", "lifetime isa calculator"],
    icon: "Coins",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "pension-calculator-uk",
    name: "Pension Calculator",
    shortName: "Pension",
    h1: "UK Pension Calculator",
    category: "finance",
    description:
      "Project your pension pot at retirement and an estimated annual income, alongside the new State Pension.",
    metaTitle: "Pension Calculator UK 2026/27 | Retirement Pot | Calculio",
    metaDescription:
      "Estimate your pension pot at retirement and a possible annual income using the 4% drawdown rule, alongside your State Pension.",
    keywords: ["pension calculator", "pension calculator uk", "retirement calculator uk", "pension pot calculator"],
    icon: "Sunset",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "vat-calculator-uk",
    name: "VAT Calculator",
    shortName: "VAT",
    h1: "UK VAT Calculator",
    category: "tax",
    description:
      "Add VAT to a net amount or extract VAT from a gross amount, at the standard, reduced or zero rate.",
    metaTitle: "VAT Calculator UK 2026 | Add or Remove VAT | Calculio",
    metaDescription:
      "Free UK VAT calculator. Add VAT to a net price or extract VAT from a gross price at 20%, 5% or 0%, with a full net, VAT and gross breakdown.",
    keywords: ["vat calculator", "vat calculator uk", "add vat calculator", "remove vat calculator"],
    icon: "ReceiptText",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "car-loan-calculator-uk",
    name: "Car Loan Calculator",
    shortName: "Car Loan",
    h1: "UK Car Loan Calculator",
    category: "motoring",
    description:
      "Work out your monthly payment for a car loan, HP agreement or PCP deal, including an optional balloon payment.",
    metaTitle: "Car Loan Calculator UK | HP & PCP | Calculio",
    metaDescription:
      "Calculate your monthly car finance payment for a personal loan, HP agreement or PCP deal, including deposit, part-exchange and balloon payment.",
    keywords: ["car loan calculator", "car finance calculator uk", "pcp calculator", "hp calculator car"],
    icon: "CarFront",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "bmr-calculator-uk",
    name: "BMR Calculator",
    shortName: "BMR",
    h1: "BMR Calculator (Basal Metabolic Rate)",
    category: "health",
    description:
      "Estimate the calories your body burns at complete rest, using the Mifflin-St Jeor or Harris-Benedict formula.",
    metaTitle: "BMR Calculator UK | Basal Metabolic Rate | Calculio",
    metaDescription:
      "Free BMR calculator using the Mifflin-St Jeor or Harris-Benedict formula. Estimate the calories your body burns at rest each day.",
    keywords: ["bmr calculator", "basal metabolic rate calculator", "mifflin st jeor calculator"],
    icon: "Zap",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "inheritance-tax-calculator-uk",
    name: "Inheritance Tax Calculator",
    shortName: "Inheritance Tax",
    h1: "UK Inheritance Tax Calculator",
    category: "tax",
    description:
      "Estimate the Inheritance Tax due on an estate, including the nil-rate band, residence nil-rate band, and the reduced rate for charity gifts.",
    metaTitle: "Inheritance Tax Calculator UK 2026/27 | Calculio",
    metaDescription:
      "Estimate UK Inheritance Tax on an estate, including the nil-rate band, residence nil-rate band, gifts and charity donations, at 40% or a reduced 36%.",
    keywords: ["inheritance tax calculator", "iht calculator uk", "inheritance tax calculator uk"],
    icon: "Scroll",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "discount-calculator-uk",
    name: "Discount Calculator",
    shortName: "Discount",
    h1: "Discount Calculator",
    category: "everyday",
    description:
      "Work out the final price after a percentage or fixed amount discount, and exactly how much you save.",
    metaTitle: "Discount Calculator UK | Sale Price & Savings | Calculio",
    metaDescription:
      "Free discount calculator. Work out the final price after a percentage or fixed amount off, how much you save, and the effective discount rate.",
    keywords: ["discount calculator", "sale price calculator", "percent off calculator"],
    icon: "Tag",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "salary-increase-calculator-uk",
    name: "Salary Increase Calculator",
    shortName: "Salary Increase",
    h1: "UK Salary Increase Calculator",
    category: "tax",
    description:
      "See your new gross and net salary after a pay rise, plus your extra monthly take-home pay after tax.",
    metaTitle: "Salary Increase Calculator UK 2026/27 | Pay Rise | Calculio",
    metaDescription:
      "Work out your new take-home pay after a pay rise. Enter a percentage or fixed increase to see your new gross salary, net pay, and real-terms gain.",
    keywords: ["salary increase calculator", "pay rise calculator uk", "pay rise take home calculator"],
    icon: "ArrowUpCircle",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "fuel-efficiency-comparison-uk",
    name: "Fuel Efficiency Comparison Calculator",
    shortName: "Fuel Efficiency Comparison",
    h1: "UK Fuel Efficiency Comparison Calculator",
    category: "motoring",
    description:
      "Compare the annual fuel cost of two vehicles side by side, based on mileage, MPG, fuel type and price per litre.",
    metaTitle: "Fuel Efficiency Comparison Calculator UK | Calculio",
    metaDescription:
      "Compare two cars side by side on annual fuel cost, cost per mile, and the difference over 5 years, based on your own mileage and MPG.",
    keywords: ["fuel efficiency comparison", "compare car fuel costs", "mpg comparison calculator"],
    icon: "GitCompare",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "water-bill-calculator-uk",
    name: "Water Bill Calculator",
    shortName: "Water Bill",
    h1: "UK Water Bill Calculator",
    category: "home",
    description:
      "Estimate your annual and monthly water bill based on your household size, region, and whether you're on a meter.",
    metaTitle: "Water Bill Calculator UK | Annual & Monthly Cost | Calculio",
    metaDescription:
      "Estimate your UK water bill by household size and region, metered or unmetered, with a comparison to typical UK household water spend.",
    keywords: ["water bill calculator", "water bill calculator uk", "average water bill uk"],
    icon: "Droplets",
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
