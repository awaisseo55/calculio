import type { CalculatorMeta } from "./types";
import { officialSources } from "./official-sources";

export const calculators: CalculatorMeta[] = [
  {
    slug: "mortgage-calculator-uk",
    name: "Mortgage Calculator",
    shortName: "Mortgage",
    h1: "UK Mortgage Calculator",
    category: "home",
    description:
      "Estimate your monthly mortgage repayments, total interest and full amortisation schedule.",
    metaTitle: "Mortgage Calculator UK 2026 | Monthly Repayments",
    metaDescription:
      "Free UK mortgage calculator. Work out monthly repayments, total interest and total cost for any property price, deposit, term and rate.",
    keywords: ["mortgage calculator uk", "monthly mortgage repayments", "mortgage repayment calculator"],
    icon: "Home",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.mortgageAffordability, officialSources.firstTimeBuyer],
    methodology:
      "Repayment figures use the standard capital repayment (amortisation) formula applied to your rate, term and loan amount; affordability ranges are benchmarked against MoneyHelper's independent mortgage guidance.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Individual lender criteria, product fees and rate offers vary; this is an estimate, not a mortgage offer.",
    ],
  },
  {
    slug: "stamp-duty-calculator-uk",
    name: "Stamp Duty Calculator",
    shortName: "Stamp Duty",
    h1: "UK Stamp Duty Calculator (SDLT, LBTT & LTT)",
    category: "home",
    description:
      "Calculate Stamp Duty Land Tax, Land and Buildings Transaction Tax or Land Transaction Tax on your property purchase.",
    metaTitle: "Stamp Duty Calculator 2026 | SDLT, LBTT & LTT",
    metaDescription:
      "Work out how much stamp duty you'll pay in England, Scotland or Wales in 2026, with a full band-by-band breakdown for your buyer type.",
    keywords: ["stamp duty calculator", "sdlt calculator", "lbtt calculator", "ltt calculator wales"],
    icon: "FileText",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.stampDuty, officialSources.stampDutyResidential],
    methodology:
      "SDLT is calculated using HMRC's published residential rate bands applied to your purchase price and buyer status.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a residential purchase in England or Northern Ireland; Scotland and Wales use separate LBTT/LTT systems.",
    ],
  },
  {
    slug: "take-home-pay-calculator-uk",
    name: "Take-Home Pay Calculator",
    shortName: "Take-Home Pay",
    h1: "UK Take-Home Pay (Salary) Calculator",
    category: "finance",
    description:
      "See your net monthly and annual pay after Income Tax, National Insurance, pension and student loan deductions.",
    metaTitle: "Take-Home Pay Calculator UK 2026 | Net Salary",
    metaDescription:
      "Calculate your UK take-home pay for 2026/27. See net salary after tax, National Insurance, pension and student loan repayments.",
    keywords: ["take home pay calculator", "net salary calculator uk", "salary calculator uk"],
    icon: "Wallet",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.incomeTax, officialSources.nationalInsuranceHowMuch, officialSources.scottishIncomeTax],
    methodology:
      "Take-home pay is calculated by applying HMRC's Income Tax bands and National Insurance thresholds to your gross salary.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard PAYE employment with no salary sacrifice, student loan, or pension contribution unless entered.",
      "Scottish taxpayers use separate bands, applied where selected.",
    ],
  },
  {
    slug: "income-tax-calculator-uk",
    name: "Income Tax Calculator",
    shortName: "Income Tax",
    h1: "UK Income Tax Calculator",
    category: "tax",
    description:
      "Break down exactly how much Income Tax you owe by band, for England, Wales, Northern Ireland or Scotland.",
    metaTitle: "Income Tax Calculator UK 2026/27 | By Tax Band",
    metaDescription:
      "Calculate your UK Income Tax for 2025/26 or 2026/27. Full breakdown by personal allowance and tax band for all UK nations.",
    keywords: ["income tax calculator uk", "uk tax bands 2026", "income tax calculator"],
    icon: "Percent",
    schemaType: "SoftwareApplication",

    sources: [officialSources.incomeTax, officialSources.scottishIncomeTax],
    methodology:
      "Tax owed is calculated by applying HMRC's Personal Allowance and Income Tax band rates directly to your taxable income.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard employment income; other income types such as dividends are taxed under separate rules.",
    ],
  },
  {
    slug: "road-tax-calculator-uk",
    name: "Road Tax (VED) Calculator",
    shortName: "Road Tax",
    h1: "UK Road Tax (VED) Calculator",
    category: "motoring",
    description:
      "Find your Vehicle Excise Duty rate based on fuel type, CO2 emissions, list price and first registration date.",
    metaTitle: "Road Tax Calculator UK 2026 | VED Rates",
    metaDescription:
      "Calculate UK car tax (VED) for 2026. First-year and standard rates for petrol, diesel, hybrid and electric vehicles.",
    keywords: ["road tax calculator", "ved calculator", "car tax calculator uk"],
    icon: "Car",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.vehicleTax, officialSources.vehicleTaxEV],
    methodology:
      "VED is calculated using DVLA/HMRC's published vehicle tax rate tables for your vehicle's registration date, fuel type and CO2 band.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a car registered on or after 1 April 2017; different rules apply to older vehicles.",
    ],
  },
  {
    slug: "fuel-cost-calculator-uk",
    name: "Fuel Cost Calculator",
    shortName: "Fuel Cost",
    h1: "UK Fuel Cost Calculator",
    category: "motoring",
    description:
      "Work out how much a journey or trip will cost in fuel, based on distance, MPG and fuel price.",
    metaTitle: "Fuel Cost Calculator UK | Journey & Trip Cost",
    metaDescription:
      "Calculate the fuel cost of any journey. Enter distance, MPG and fuel price per litre to get total cost and cost per mile.",
    keywords: ["fuel cost calculator", "petrol cost calculator", "mpg calculator uk"],
    icon: "Fuel",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Fuel cost is calculated by dividing your journey distance by your vehicle's fuel economy, then multiplying by the fuel price you enter.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Fuel prices vary daily and by retailer; enter a current local price for the most accurate estimate.",
    ],
  },
  {
    slug: "bmi-calculator-uk",
    name: "BMI Calculator",
    shortName: "BMI",
    h1: "BMI Calculator (UK / NHS)",
    category: "health",
    description:
      "Calculate your Body Mass Index and see which NHS weight category you fall into, plus a healthy weight range.",
    metaTitle: "BMI Calculator UK | NHS Categories",
    metaDescription:
      "Free BMI calculator using metric or imperial units. See your NHS BMI category and healthy weight range instantly.",
    keywords: ["bmi calculator", "bmi calculator nhs", "body mass index calculator uk"],
    icon: "HeartPulse",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.nhsBmiAdults, officialSources.nhsHealthyWeight],
    methodology:
      "BMI is calculated using the standard formula (weight in kg divided by height in metres squared) and categorised using NHS adult BMI bands.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "BMI is a general screening measure; it does not account for muscle mass, bone density or body composition.",
      "NHS guidance notes healthy BMI thresholds differ for Black, Asian and some other minority ethnic groups.",
    ],
  },
  {
    slug: "pregnancy-due-date-calculator-uk",
    name: "Pregnancy Due Date Calculator",
    shortName: "Due Date",
    h1: "Pregnancy Due Date Calculator",
    category: "health",
    description:
      "Estimate your due date and current gestational week from your last period, conception date or IVF transfer date.",
    metaTitle: "Pregnancy Due Date Calculator UK | NHS Milestones",
    metaDescription:
      "Work out your estimated due date and current week of pregnancy, plus key NHS antenatal milestones like your scans.",
    keywords: ["pregnancy due date calculator", "due date calculator uk", "gestational age calculator"],
    icon: "Baby",
    schemaType: "SoftwareApplication",

    sources: [officialSources.nhsPregnancyDueDate],
    methodology:
      "Your estimated due date is calculated as 280 days (40 weeks) from the first day of your last menstrual period, the same method used by the NHS.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is an estimate; only around 5% of babies arrive on their exact due date.",
      "If you know your conception date or have had a dating scan, that estimate may be more accurate than this calculation.",
    ],
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    shortName: "Age",
    h1: "Age Calculator",
    category: "everyday",
    description:
      "Calculate exact age in years, months and days from any date of birth, plus total days, weeks and hours lived.",
    metaTitle: "Age Calculator | Exact Age in Years, Months, Days",
    metaDescription:
      "Calculate your exact age in years, months and days, total days lived, and a countdown to your next birthday.",
    keywords: ["age calculator", "date of birth calculator", "how old am i"],
    icon: "Cake",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Age is calculated as the exact calendar difference between the date you enter and today, or a date you specify.",
    lastVerifiedDate: "2026-08-20",
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    shortName: "Percentage",
    h1: "Percentage Calculator",
    category: "everyday",
    description:
      "Four calculators in one: find a percentage of a number, work out percentage change, and more.",
    metaTitle: "Percentage Calculator | % of, Change, Increase",
    metaDescription:
      "Free online percentage calculator. Find what X% of Y is, percentage change, and increase or decrease in seconds.",
    keywords: ["percentage calculator", "percentage increase calculator", "percentage change calculator"],
    icon: "Percent",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Percentage results use standard arithmetic (part divided by whole, multiplied by 100) for each calculation mode.",
    lastVerifiedDate: "2026-08-20",
  },
  {
    slug: "compound-interest-calculator-uk",
    name: "Compound Interest Calculator",
    shortName: "Compound Interest",
    h1: "UK Compound Interest Calculator",
    category: "finance",
    description:
      "See how your savings grow over time with compound interest, including regular monthly contributions.",
    metaTitle: "Compound Interest Calculator UK 2026",
    metaDescription:
      "Work out how your savings grow with compound interest. Add monthly contributions and see a year by year breakdown of your balance.",
    keywords: ["compound interest calculator", "compound interest calculator uk", "savings growth calculator"],
    icon: "TrendingUp",
    schemaType: "SoftwareApplication",

    sources: [officialSources.isaAllowance],
    methodology:
      "Growth is calculated using the standard compound interest formula, applied to your starting amount, contributions, rate and term.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a fixed interest or growth rate for the full period; real returns vary year to year.",
      "Does not account for tax outside a tax-free wrapper such as an ISA.",
    ],
  },
  {
    slug: "savings-goal-calculator-uk",
    name: "Savings Goal Calculator",
    shortName: "Savings Goal",
    h1: "UK Savings Goal Calculator",
    category: "finance",
    description:
      "Find out how long it will take to reach your savings goal based on your monthly contributions and interest rate.",
    metaTitle: "Savings Goal Calculator UK | How Long to Save",
    metaDescription:
      "Calculate how long it will take to reach your savings target, based on your starting balance, monthly contribution and interest rate.",
    keywords: ["savings goal calculator", "savings calculator uk", "how long to save"],
    icon: "PiggyBank",
    schemaType: "SoftwareApplication",

    sources: [officialSources.isaAllowance],
    methodology:
      "Contribution figures are calculated by dividing your goal amount and timeframe, then projecting growth using the standard compound interest formula.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a fixed contribution and growth rate for the full period; actual returns vary.",
    ],
  },
  {
    slug: "loan-repayment-calculator-uk",
    name: "Loan Repayment Calculator",
    shortName: "Loan Repayment",
    h1: "UK Loan Repayment Calculator",
    category: "finance",
    description:
      "Work out your monthly loan repayment, total interest and a full repayment schedule for any personal loan.",
    metaTitle: "Loan Repayment Calculator UK | Monthly Cost",
    metaDescription:
      "Free UK loan repayment calculator. Work out your monthly payment, total interest and full repayment schedule for any personal loan.",
    keywords: ["loan repayment calculator", "loan calculator uk", "personal loan calculator"],
    icon: "Banknote",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Repayments use the standard amortising loan formula, applied to your loan amount, interest rate and term.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a fixed interest rate for the full term; variable-rate loans will differ.",
    ],
  },
  {
    slug: "credit-card-payoff-calculator-uk",
    name: "Credit Card Payoff Calculator",
    shortName: "Credit Card Payoff",
    h1: "UK Credit Card Payoff Calculator",
    category: "finance",
    description:
      "See how long it will take to clear your credit card balance and how much interest you will pay at different payment levels.",
    metaTitle: "Credit Card Payoff Calculator UK",
    metaDescription:
      "Work out how long it takes to pay off a credit card balance and how much interest you will pay, based on your monthly payment and APR.",
    keywords: ["credit card payoff calculator", "credit card calculator uk", "pay off credit card"],
    icon: "CreditCard",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Payoff time and interest are calculated by applying your card's interest rate and payment amount month by month until the balance reaches zero.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes no further spending is added to the card balance during the payoff period.",
    ],
  },
  {
    slug: "mortgage-overpayment-calculator-uk",
    name: "Mortgage Overpayment Calculator",
    shortName: "Mortgage Overpayment",
    h1: "UK Mortgage Overpayment Calculator",
    category: "finance",
    description:
      "Find out how much time and interest you could save by overpaying your mortgage each month.",
    metaTitle: "Mortgage Overpayment Calculator UK",
    metaDescription:
      "See how much interest and time you could save by overpaying your mortgage each month, with a new payoff date and total saving.",
    keywords: ["mortgage overpayment calculator", "overpay mortgage calculator uk", "mortgage overpayment savings"],
    icon: "CalendarCheck",
    schemaType: "SoftwareApplication",

    sources: [officialSources.mortgageAffordability],
    methodology:
      "Interest and term savings are calculated by comparing your standard amortisation schedule against the same schedule with overpayments applied.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes your lender allows the overpayment amount entered without an early repayment charge; check your mortgage terms.",
    ],
  },
  {
    slug: "national-insurance-calculator-uk",
    name: "National Insurance Calculator",
    shortName: "National Insurance",
    h1: "UK National Insurance Calculator",
    category: "tax",
    description:
      "Calculate how much National Insurance you pay as an employee or if you're self-employed, for 2025/26 and 2026/27.",
    metaTitle: "National Insurance Calculator UK 2026/27",
    metaDescription:
      "Work out your UK National Insurance contributions for 2026/27, whether you're employed or self-employed, with a full monthly breakdown.",
    keywords: ["national insurance calculator", "ni calculator uk", "class 4 national insurance calculator"],
    icon: "ShieldCheck",
    schemaType: "SoftwareApplication",

    sources: [officialSources.nationalInsurance, officialSources.nationalInsuranceHowMuch],
    methodology:
      "National Insurance is calculated using HMRC's published Class 1 thresholds and rates applied to your gross pay.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard employee (Class 1) National Insurance; self-employed contributions use separate Class 2/4 rates.",
    ],
  },
  {
    slug: "self-employed-tax-calculator-uk",
    name: "Self-Employed Tax Calculator",
    shortName: "Self-Employed Tax",
    h1: "UK Self-Employed Tax Calculator",
    category: "tax",
    description:
      "Work out your Income Tax, Class 2 and Class 4 National Insurance as a self-employed sole trader.",
    metaTitle: "Self-Employed Tax Calculator UK 2026/27",
    metaDescription:
      "Calculate your total tax bill as a self-employed sole trader, including Income Tax and Class 2 and Class 4 National Insurance.",
    keywords: ["self employed tax calculator", "sole trader tax calculator uk", "self employed tax calculator uk"],
    icon: "Briefcase",
    schemaType: "SoftwareApplication",

    sources: [officialSources.incomeTax, officialSources.nationalInsurance, officialSources.selfAssessment],
    methodology:
      "Tax and National Insurance are calculated using HMRC's published Income Tax bands and Class 2/4 National Insurance rates for the self-employed, applied to your profit after expenses.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard sole trader trading income; limited companies and partnerships are taxed differently.",
    ],
  },
  {
    slug: "dividend-tax-calculator-uk",
    name: "Dividend Tax Calculator",
    shortName: "Dividend Tax",
    h1: "UK Dividend Tax Calculator",
    category: "tax",
    description:
      "Calculate the tax you owe on dividend income above your tax-free dividend allowance.",
    metaTitle: "Dividend Tax Calculator UK 2026/27",
    metaDescription:
      "Work out how much tax you owe on dividend income in 2026/27, after your salary and the tax-free dividend allowance.",
    keywords: ["dividend tax calculator", "dividend tax calculator uk", "dividend allowance calculator"],
    icon: "LineChart",
    schemaType: "SoftwareApplication",

    sources: [officialSources.dividendTax],
    methodology:
      "Dividend tax is calculated using HMRC's dividend allowance and dividend tax rates, applied on top of your other taxable income.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes dividends from UK companies; different rules can apply to overseas dividends.",
    ],
  },
  {
    slug: "capital-gains-tax-calculator-uk",
    name: "Capital Gains Tax Calculator",
    shortName: "Capital Gains Tax",
    h1: "UK Capital Gains Tax Calculator",
    category: "tax",
    description:
      "Estimate the Capital Gains Tax owed on the sale of property, shares or other assets after your annual exempt amount.",
    metaTitle: "Capital Gains Tax Calculator UK 2026/27",
    metaDescription:
      "Estimate your UK Capital Gains Tax bill on property or other assets, after the annual exempt amount and your Income Tax band.",
    keywords: ["capital gains tax calculator", "cgt calculator uk", "capital gains tax calculator uk"],
    icon: "ArrowUpRight",
    schemaType: "SoftwareApplication",

    sources: [officialSources.capitalGainsTax],
    methodology:
      "Capital Gains Tax is calculated by applying HMRC's annual exempt amount and CGT rates to your gain after allowable costs.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard chargeable asset; property, business assets and shares can have different reliefs available.",
    ],
  },
  {
    slug: "mpg-calculator-uk",
    name: "MPG Calculator",
    shortName: "MPG",
    h1: "UK MPG Calculator",
    category: "motoring",
    description:
      "Work out your car's real fuel economy in miles per gallon, litres per 100km and cost per mile.",
    metaTitle: "MPG Calculator UK | Miles Per Gallon",
    metaDescription:
      "Calculate your car's real world MPG from distance driven and fuel used, plus litres per 100km and an estimated cost per mile.",
    keywords: ["mpg calculator", "mpg calculator uk", "miles per gallon calculator"],
    icon: "Gauge",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "MPG is calculated from the distance travelled and fuel used you enter, converted between imperial and metric units as needed.",
    lastVerifiedDate: "2026-08-20",
  },
  {
    slug: "congestion-charge-ulez-calculator-uk",
    name: "Congestion Charge and ULEZ Calculator",
    shortName: "Congestion Charge & ULEZ",
    h1: "London Congestion Charge and ULEZ Calculator",
    category: "motoring",
    description:
      "Work out your daily, weekly and annual London Congestion Charge and ULEZ costs based on your vehicle and how often you drive in.",
    metaTitle: "Congestion Charge & ULEZ Calculator UK",
    metaDescription:
      "Estimate your London Congestion Charge and ULEZ costs by vehicle type, emissions standard and how many days a week you drive in.",
    keywords: ["congestion charge calculator", "ulez calculator", "ulez charge calculator london"],
    icon: "MapPin",
    schemaType: "SoftwareApplication",

    sources: [officialSources.congestionCharge, officialSources.ulez],
    methodology:
      "Charges are calculated using Transport for London's published Congestion Charge and ULEZ daily rates and operating hours for your vehicle type.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard passenger car; rates and exemptions differ for vans, HGVs and motorcycles.",
      "Zone boundaries and exemption rules can change; always confirm on the TfL website before travelling.",
    ],
  },
  {
    slug: "tdee-calculator-uk",
    name: "TDEE Calculator",
    shortName: "TDEE",
    h1: "TDEE Calculator (Total Daily Energy Expenditure)",
    category: "health",
    description:
      "Estimate your total daily energy expenditure and general calorie guides for maintaining, losing or gaining weight.",
    metaTitle: "TDEE Calculator UK | Daily Calorie Needs",
    metaDescription:
      "Estimate your total daily energy expenditure (TDEE) and general calorie guidance for maintenance, mild loss or mild gain.",
    keywords: ["tdee calculator", "tdee calculator uk", "calorie calculator uk"],
    icon: "Flame",
    schemaType: "SoftwareApplication",

    sources: [officialSources.nhsPhysicalActivity],
    methodology:
      "TDEE is calculated using the Mifflin-St Jeor formula for basal metabolic rate, multiplied by an activity factor based on NHS physical activity guidance.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is a population-average estimate; individual metabolism can vary by up to 10-15%.",
    ],
  },
  {
    slug: "ideal-weight-calculator-uk",
    name: "Ideal Weight Calculator",
    shortName: "Ideal Weight",
    h1: "UK Ideal Weight Calculator",
    category: "health",
    description:
      "See an estimated healthy weight range for your height using several common formulas, alongside the NHS BMI range.",
    metaTitle: "Ideal Weight Calculator UK | Healthy Weight Range",
    metaDescription:
      "Estimate a healthy weight range for your height using the Devine, Robinson and NHS BMI methods. General guidance only, not medical advice.",
    keywords: ["ideal weight calculator", "healthy weight calculator uk", "ideal body weight calculator"],
    icon: "Scale",
    schemaType: "SoftwareApplication",

    sources: [officialSources.nhsHealthyWeight],
    methodology:
      "Ideal weight range is calculated from your height using standard healthy BMI band thresholds (18.5 to 24.9) referenced by the NHS.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is a general range, not a personal target; healthy weight depends on build, muscle mass and other factors a calculator can't measure.",
    ],
  },
  {
    slug: "paint-coverage-calculator-uk",
    name: "Paint Coverage Calculator",
    shortName: "Paint Coverage",
    h1: "UK Paint Coverage Calculator",
    category: "home",
    description:
      "Work out how many litres and tins of paint you need for a room, based on its size, coats and paint coverage rate.",
    metaTitle: "Paint Coverage Calculator UK | How Much Paint",
    metaDescription:
      "Calculate how many litres and tins of paint you need for any room, based on wall area, coats, doors, windows and coverage rate.",
    keywords: ["paint calculator", "paint coverage calculator uk", "how much paint do i need"],
    icon: "PaintBucket",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Paint required is calculated by dividing your total wall area (after deducting doors and windows) by your paint's stated coverage rate per litre.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Coverage rates vary by paint brand, wall texture and number of coats; check your specific product's data sheet.",
    ],
  },
  {
    slug: "tip-calculator-uk",
    name: "Tip Calculator",
    shortName: "Tip Calculator",
    h1: "UK Tip Calculator",
    category: "everyday",
    description:
      "Work out how much to tip, your total bill and how much each person owes if you're splitting the bill.",
    metaTitle: "Tip Calculator UK | Split the Bill",
    metaDescription:
      "Work out how much to tip in the UK, your total bill including the tip, and how much each person owes if you're splitting it.",
    keywords: ["tip calculator", "tip calculator uk", "bill splitting calculator"],
    icon: "Receipt",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "The suggested tip is calculated as your chosen percentage of the bill total, with the option to split evenly across a group.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Tipping in the UK is discretionary; this calculator suggests an amount, it doesn't set a rule.",
    ],
  },
  {
    slug: "isa-calculator-uk",
    name: "ISA Calculator",
    shortName: "ISA",
    h1: "UK ISA Calculator",
    category: "finance",
    description:
      "Project how a Cash, Stocks and Shares, Lifetime or Junior ISA could grow, and see how much you keep tax-free.",
    metaTitle: "ISA Calculator UK 2026/27 | Tax-Free Growth",
    metaDescription:
      "Work out how your ISA could grow over time, tax-free, across Cash, Stocks and Shares, Lifetime and Junior ISAs, with a comparison to taxed savings.",
    keywords: ["isa calculator", "isa calculator uk", "stocks and shares isa calculator", "lifetime isa calculator"],
    icon: "Coins",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.isaAllowance],
    methodology:
      "Contribution room is calculated against HMRC's published annual ISA allowance, split across the ISA types you specify.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard adult ISA allowances; Junior ISAs and Lifetime ISAs have their own separate limits.",
    ],
  },
  {
    slug: "pension-calculator-uk",
    name: "Pension Calculator",
    shortName: "Pension",
    h1: "UK Pension Calculator",
    category: "finance",
    description:
      "Project your pension pot at retirement and an estimated annual income, alongside the new State Pension.",
    metaTitle: "Pension Calculator UK 2026/27 | Retirement Pot",
    metaDescription:
      "Estimate your pension pot at retirement and a possible annual income using the 4% drawdown rule, alongside your State Pension.",
    keywords: ["pension calculator", "pension calculator uk", "retirement calculator uk", "pension pot calculator"],
    icon: "Sunset",
    schemaType: "SoftwareApplication",

    sources: [officialSources.workplacePensions],
    methodology:
      "Projected pension value is calculated using the standard compound growth formula, applied to your contributions, employer match and assumed growth rate.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a fixed contribution and growth rate for the full period; real pension fund returns vary year to year and are not guaranteed.",
    ],
  },
  {
    slug: "vat-calculator-uk",
    name: "VAT Calculator",
    shortName: "VAT",
    h1: "UK VAT Calculator",
    category: "tax",
    description:
      "Add VAT to a net amount or extract VAT from a gross amount, at the standard, reduced or zero rate.",
    metaTitle: "VAT Calculator UK 2026 | Add or Remove VAT",
    metaDescription:
      "Free UK VAT calculator. Add VAT to a net price or extract VAT from a gross price at 20%, 5% or 0%, with a full net, VAT and gross breakdown.",
    keywords: ["vat calculator", "vat calculator uk", "add vat calculator", "remove vat calculator"],
    icon: "ReceiptText",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.vat, officialSources.vatRates],
    methodology:
      "VAT is calculated using HMRC's standard, reduced and zero VAT rates, applied to add or remove VAT from the amount you enter.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes the standard 20% rate unless you select a reduced or zero-rated category; not all goods and services qualify for reduced rates.",
    ],
  },
  {
    slug: "car-loan-calculator-uk",
    name: "Car Loan Calculator",
    shortName: "Car Loan",
    h1: "UK Car Loan Calculator",
    category: "motoring",
    description:
      "Work out your monthly payment for a car loan, HP agreement or PCP deal, including an optional balloon payment.",
    metaTitle: "Car Loan Calculator UK | HP & PCP",
    metaDescription:
      "Calculate your monthly car finance payment for a personal loan, HP agreement or PCP deal, including deposit, part-exchange and balloon payment.",
    keywords: ["car loan calculator", "car finance calculator uk", "pcp calculator", "hp calculator car"],
    icon: "CarFront",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Repayments use the standard amortising loan formula, applied to your loan amount, interest rate and term.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a fixed interest rate for the full term; dealer finance and PCP agreements can have different structures.",
    ],
  },
  {
    slug: "bmr-calculator-uk",
    name: "BMR Calculator",
    shortName: "BMR",
    h1: "BMR Calculator (Basal Metabolic Rate)",
    category: "health",
    description:
      "Estimate the calories your body burns at complete rest, using the Mifflin-St Jeor or Harris-Benedict formula.",
    metaTitle: "BMR Calculator UK | Basal Metabolic Rate",
    metaDescription:
      "Free BMR calculator using the Mifflin-St Jeor or Harris-Benedict formula. Estimate the calories your body burns at rest each day.",
    keywords: ["bmr calculator", "basal metabolic rate calculator", "mifflin st jeor calculator"],
    icon: "Zap",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "BMR is calculated using the Mifflin-St Jeor equation, a standard formula based on your weight, height, age and sex.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is a population-average estimate; individual metabolism can vary.",
    ],
  },
  {
    slug: "inheritance-tax-calculator-uk",
    name: "Inheritance Tax Calculator",
    shortName: "Inheritance Tax",
    h1: "UK Inheritance Tax Calculator",
    category: "tax",
    description:
      "Estimate the Inheritance Tax due on an estate, including the nil-rate band, residence nil-rate band, and the reduced rate for charity gifts.",
    metaTitle: "Inheritance Tax Calculator UK 2026/27",
    metaDescription:
      "Estimate UK Inheritance Tax on an estate, including the nil-rate band, residence nil-rate band, gifts and charity donations, at 40% or a reduced 36%.",
    keywords: ["inheritance tax calculator", "iht calculator uk", "inheritance tax calculator uk"],
    icon: "Scroll",
    schemaType: "SoftwareApplication",

    sources: [officialSources.inheritanceTax],
    methodology:
      "Inheritance Tax is calculated using HMRC's published nil-rate band and residence nil-rate band thresholds, applied to your estate value.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard estate; trusts, business relief and agricultural relief can significantly change the amount due.",
    ],
  },
  {
    slug: "discount-calculator-uk",
    name: "Discount Calculator",
    shortName: "Discount",
    h1: "Discount Calculator",
    category: "everyday",
    description:
      "Work out the final price after a percentage or fixed amount discount, and exactly how much you save.",
    metaTitle: "Discount Calculator UK | Sale Price & Savings",
    metaDescription:
      "Free discount calculator. Work out the final price after a percentage or fixed amount off, how much you save, and the effective discount rate.",
    keywords: ["discount calculator", "sale price calculator", "percent off calculator"],
    icon: "Tag",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "The discounted price is calculated by applying your percentage or fixed discount to the original price you enter.",
    lastVerifiedDate: "2026-08-20",
  },
  {
    slug: "salary-increase-calculator-uk",
    name: "Salary Increase Calculator",
    shortName: "Salary Increase",
    h1: "UK Salary Increase Calculator",
    category: "tax",
    description:
      "See your new gross and net salary after a pay rise, plus your extra monthly take-home pay after tax.",
    metaTitle: "Salary Increase Calculator UK 2026/27 | Pay Rise",
    metaDescription:
      "Work out your new take-home pay after a pay rise. Enter a percentage or fixed increase to see your new gross salary, net pay, and real-terms gain.",
    keywords: ["salary increase calculator", "pay rise calculator uk", "pay rise take home calculator"],
    icon: "ArrowUpCircle",
    schemaType: "SoftwareApplication",

    sources: [officialSources.incomeTax, officialSources.nationalInsuranceHowMuch],
    methodology:
      "Take-home pay before and after your increase is calculated by applying HMRC's Income Tax and National Insurance rates to both salary figures.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard PAYE employment with no other changes to your tax code or deductions.",
    ],
  },
  {
    slug: "fuel-efficiency-comparison-uk",
    name: "Fuel Efficiency Comparison Calculator",
    shortName: "Fuel Efficiency Comparison",
    h1: "UK Fuel Efficiency Comparison Calculator",
    category: "motoring",
    description:
      "Compare the annual fuel cost of two vehicles side by side, based on mileage, MPG, fuel type and price per litre.",
    metaTitle: "Fuel Efficiency Comparison Calculator UK",
    metaDescription:
      "Compare two cars side by side on annual fuel cost, cost per mile, and the difference over 5 years, based on your own mileage and MPG.",
    keywords: ["fuel efficiency comparison", "compare car fuel costs", "mpg comparison calculator"],
    icon: "GitCompare",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Cost per mile and annual cost are calculated from the fuel economy, fuel price and annual mileage figures you enter for each vehicle.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Fuel prices vary daily and by retailer; results are only as accurate as the figures entered.",
    ],
  },
  {
    slug: "water-bill-calculator-uk",
    name: "Water Bill Calculator",
    shortName: "Water Bill",
    h1: "UK Water Bill Calculator",
    category: "home",
    description:
      "Estimate your annual and monthly water bill based on your household size, region, and whether you're on a meter.",
    metaTitle: "Water Bill Calculator UK | Annual & Monthly Cost",
    metaDescription:
      "Estimate your UK water bill by household size and region, metered or unmetered, with a comparison to typical UK household water spend.",
    keywords: ["water bill calculator", "water bill calculator uk", "average water bill uk"],
    icon: "Droplets",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Estimated water bill is calculated from your entered usage or household size, applied to typical UK water company charging structures.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Individual water company tariffs and standing charges vary by region; this is a general estimate, not a bill from your supplier.",
    ],
  },
  {
    slug: "flooring-calculator-uk",
    name: "Flooring Calculator",
    shortName: "Flooring",
    h1: "UK Flooring Calculator",
    category: "home",
    description:
      "Work out how much laminate, vinyl, wood, tile or carpet flooring you need, including wastage, and how many packs to buy.",
    metaTitle: "Flooring Calculator UK | How Much Flooring Needed",
    metaDescription:
      "Calculate how much flooring you need for any room, including wastage allowance, and how many packs of laminate, vinyl, wood or tile to buy.",
    keywords: ["flooring calculator uk", "how much laminate flooring do i need", "flooring cost calculator"],
    icon: "LayoutGrid",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Materials required are calculated by dividing your room's floor area by the coverage of your chosen flooring type, with an allowance for waste and cuts.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard rectangular room layout; complex layouts may need more material than estimated.",
    ],
  },
  {
    slug: "concrete-calculator-uk",
    name: "Concrete Calculator",
    shortName: "Concrete",
    h1: "UK Concrete Calculator",
    category: "home",
    description:
      "Work out how much concrete you need for a slab, footing, post hole or column, in cubic metres, weight and ready-mix bags.",
    metaTitle: "Concrete Calculator UK | Slabs, Footings & Post Holes",
    metaDescription:
      "Calculate how much concrete you need for a slab, footing, post hole or column, including volume, weight and the number of ready-mix bags.",
    keywords: ["concrete calculator uk", "how much concrete do i need", "concrete for post hole calculator"],
    icon: "Construction",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Concrete volume is calculated from the dimensions you enter using standard volume formulas, then converted to bags or ready-mix quantities.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard concrete mix; specialist mixes may have different yield rates.",
    ],
  },
  {
    slug: "kitchen-renovation-cost-calculator-uk",
    name: "Kitchen Renovation Cost Calculator",
    shortName: "Kitchen Renovation Cost",
    h1: "UK Kitchen Renovation Cost Calculator",
    category: "home",
    description:
      "Estimate the cost of a new kitchen by size and quality level, with a breakdown across units, worktops, appliances and more.",
    metaTitle: "Kitchen Renovation Cost Calculator UK 2026",
    metaDescription:
      "Estimate your kitchen renovation cost in 2026 by size and quality, budget to premium, with a full cost breakdown by category.",
    keywords: ["kitchen renovation cost uk", "how much does a new kitchen cost", "kitchen cost calculator uk"],
    icon: "ChefHat",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Cost estimate is built from typical UK price ranges for units, worktops, appliances, fitting and finishing, scaled to the kitchen size and spec level you select.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Actual costs vary significantly by region, tradesperson and material choice; treat this as a planning estimate, not a quote.",
    ],
  },
  {
    slug: "loft-insulation-calculator-uk",
    name: "Loft Insulation Calculator",
    shortName: "Loft Insulation",
    h1: "UK Loft Insulation Calculator",
    category: "home",
    description:
      "Work out how much extra loft insulation you need to reach the recommended 270mm depth, and roughly what it could save on energy bills.",
    metaTitle: "Loft Insulation Calculator UK | Rolls Needed",
    metaDescription:
      "Calculate how many rolls of loft insulation you need to reach the recommended 270mm depth, plus a rough estimate of energy bill savings.",
    keywords: ["loft insulation calculator uk", "how much loft insulation do i need", "loft insulation cost calculator"],
    icon: "Layers",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Material quantity and estimated savings are calculated from your loft area, target insulation depth and typical UK energy price figures.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Actual savings depend on your home's construction, existing insulation and energy usage patterns.",
    ],
  },
  {
    slug: "council-tax-calculator-uk",
    name: "Council Tax Calculator",
    shortName: "Council Tax",
    h1: "UK Council Tax Calculator 2026/27",
    category: "home",
    description:
      "Estimate your annual and monthly council tax bill by band and region, including single occupant discount and second home premium.",
    metaTitle: "Council Tax Calculator UK 2026/27 | By Band",
    metaDescription:
      "Estimate your UK council tax bill for 2026/27 by band and region, with single occupant discount, second home premium and a national average comparison.",
    keywords: ["council tax calculator uk", "how much is my council tax 2026", "council tax band calculator"],
    icon: "Landmark",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.councilTax],
    methodology:
      "Council Tax is calculated using your selected valuation band and local authority rate; band structure follows GOV.UK's published guidance.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Council Tax bands are based on 1991 property values in England, not current market value.",
      "Exact charges, discounts and local precepts are set independently by each council.",
    ],
  },
  {
    slug: "energy-bill-calculator-uk",
    name: "Energy Bill Calculator",
    shortName: "Energy Bill",
    h1: "UK Energy Bill Calculator 2026",
    category: "home",
    description:
      "Estimate your annual gas and electricity bill based on household size, property type, heating system and unit rates.",
    metaTitle: "Energy Bill Calculator UK 2026 | Gas & Electric",
    metaDescription:
      "Calculate your UK gas and electricity bill for 2026. Enter your household size, property type and heating system for an annual and monthly cost estimate.",
    keywords: ["energy bill calculator uk", "how much is my energy bill 2026", "gas and electric cost calculator"],
    icon: "Plug",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.energyPriceCap],
    methodology:
      "Estimated bill is calculated from your usage and Ofgem's published energy price cap unit rates and standing charges.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "The price cap applies to default/standard variable tariffs; fixed-rate deals can be higher or lower.",
      "The cap limits the rate per unit, not your total bill, which still depends on how much energy you use.",
    ],
  },
  {
    slug: "salary-to-hourly-calculator-uk",
    name: "Salary to Hourly Rate Calculator",
    shortName: "Salary to Hourly",
    h1: "UK Salary to Hourly Rate Calculator",
    category: "tax",
    description:
      "Convert your annual salary into a gross and net hourly rate, accounting for holidays, sick days and UK tax.",
    metaTitle: "Salary to Hourly Rate Calculator UK",
    metaDescription:
      "Convert your UK annual salary into an hourly rate. See your gross and net hourly pay after tax, plus a comparison to the National Living Wage.",
    keywords: ["salary to hourly uk", "hourly rate calculator uk", "convert annual salary to hourly"],
    icon: "Clock",
    schemaType: "SoftwareApplication",

    sources: [officialSources.minimumWage],
    methodology:
      "Hourly rate is calculated by dividing your annual or monthly salary by your standard working hours, referenced against GOV.UK's published minimum wage rates.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard working pattern with no unpaid overtime or irregular hours.",
    ],
  },
  {
    slug: "pregnancy-weeks-calculator-uk",
    name: "Pregnancy Weeks Calculator",
    shortName: "Pregnancy Weeks",
    h1: "How Many Weeks Pregnant Am I? Calculator",
    category: "health",
    description:
      "Track your current gestational week and day, trimester, and next NHS milestone from your last period, conception or IVF transfer date.",
    metaTitle: "Pregnancy Weeks Calculator UK | How Far Along",
    metaDescription:
      "Find out exactly how many weeks and days pregnant you are, your trimester, and your next NHS milestone, from your last period or conception date.",
    keywords: ["how many weeks pregnant calculator", "pregnancy weeks calculator uk", "gestational age calculator"],
    icon: "CalendarDays",
    schemaType: "SoftwareApplication",

    sources: [officialSources.nhsPregnancyDueDate],
    methodology:
      "Your current week of pregnancy is calculated from the first day of your last menstrual period, the same dating method used by the NHS.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is an estimate; a dating scan gives a more precise gestational age if available.",
    ],
  },
  {
    slug: "ovulation-calculator-uk",
    name: "Ovulation Calculator",
    shortName: "Ovulation",
    h1: "UK Ovulation and Fertility Calculator",
    category: "health",
    description:
      "Estimate your ovulation date, fertile window and next expected period from your last period date and average cycle length.",
    metaTitle: "Ovulation Calculator UK | Fertile Window",
    metaDescription:
      "Estimate your ovulation date and fertile window from your last period and cycle length, plus your next 3 projected cycles. Estimate only, NHS-aligned.",
    keywords: ["ovulation calculator uk", "fertile window calculator", "when am i most fertile uk"],
    icon: "Heart",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Fertile window is estimated using the standard menstrual cycle calculation method, based on the average cycle length you enter.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Cycle length and ovulation timing vary between individuals and cycles; this is a general estimate, not a fertility diagnosis.",
      "For personal fertility guidance, speak to your GP or a fertility specialist.",
    ],
  },
  {
    slug: "reduced-hours-pay-calculator-uk",
    name: "Reduced Hours Pay Calculator",
    shortName: "Reduced Hours Pay",
    h1: "UK Reduced Hours & Part-Time Pay Calculator",
    category: "tax",
    description:
      "Work out your new gross salary and take-home pay if you move to reduced or part-time hours, including the impact on your pension.",
    metaTitle: "Reduced Hours Pay Calculator UK 2026 | Part-Time Salary",
    metaDescription:
      "Calculate your new salary and take-home pay for reduced or part-time hours in the UK. See the impact on tax, National Insurance and your pension.",
    keywords: ["reduced hours pay calculator uk", "furlough pay calculator", "part time salary calculator uk"],
    icon: "Clock",
    schemaType: "SoftwareApplication",

    sources: [officialSources.incomeTax, officialSources.nationalInsuranceHowMuch],
    methodology:
      "Adjusted take-home pay is calculated by applying HMRC's Income Tax and National Insurance rates to your reduced salary figure.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard PAYE employment; salary sacrifice, pension or benefit changes are not included unless entered.",
    ],
  },
  {
    slug: "electric-car-running-cost-calculator-uk",
    name: "Electric Car Running Cost Calculator",
    shortName: "EV Running Cost",
    h1: "UK Electric Car Running Cost Calculator",
    category: "motoring",
    description:
      "Estimate your annual electric car running cost from mileage, efficiency and charging habits, and compare it to an equivalent petrol car.",
    metaTitle: "EV Running Cost Calculator UK 2026 | Electric Car Costs",
    metaDescription:
      "Calculate your UK electric car running cost for 2026, including home and public charging, insurance, servicing and VED, plus savings vs petrol.",
    keywords: ["ev running cost calculator uk", "electric car cost calculator", "is an electric car cheaper uk 2026"],
    icon: "Zap",
    featured: true,
    schemaType: "SoftwareApplication",

    sources: [officialSources.vehicleTaxEV],
    methodology:
      "Running cost is calculated from your electricity price, vehicle efficiency and annual mileage, referenced against DVLA/HMRC's published EV vehicle tax rules.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Electricity and home charging costs vary by tariff and region; public rapid charging is typically more expensive than home charging.",
    ],
  },
  {
    slug: "winter-fuel-payment-calculator-uk",
    name: "Winter Fuel Payment Calculator",
    shortName: "Winter Fuel Payment",
    h1: "UK Winter Fuel Payment Eligibility Calculator",
    category: "finance",
    description:
      "Check whether you are likely to be eligible for the Winter Fuel Payment and estimate how much you could get this winter.",
    metaTitle: "Winter Fuel Payment Calculator 2026 | Am I Eligible?",
    metaDescription:
      "Check your Winter Fuel Payment eligibility for 2026/27 and estimate your payment amount based on your age, household and income.",
    keywords: ["winter fuel payment calculator 2026", "am i eligible for winter fuel payment uk", "winter fuel payment amount"],
    icon: "Sunset",
    schemaType: "SoftwareApplication",

    sources: [officialSources.winterFuelPayment],
    methodology:
      "Payment amount is calculated using GOV.UK's published Winter Fuel Payment eligibility bands and rates.",
    effectivePeriod: "winter 2026 to 2027",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Eligibility depends on your date of birth and, since recent changes, your income; check GOV.UK for your personal position.",
    ],
  },
  {
    slug: "sick-pay-calculator-uk",
    name: "Sick Pay Calculator",
    shortName: "Sick Pay",
    h1: "UK Sick Pay Calculator (SSP & Company Pay)",
    category: "tax",
    description:
      "Estimate your Statutory Sick Pay and any company sick pay entitlement, with a breakdown of what your employer pays and when SSP runs out.",
    metaTitle: "Sick Pay Calculator UK 2026 | SSP & Company Pay",
    metaDescription:
      "Work out how much sick pay you'll get in the UK for 2026/27. See your Statutory Sick Pay and company sick pay breakdown for any number of sick days.",
    keywords: ["sick pay calculator uk", "ssp calculator 2026", "how much sick pay will i get uk"],
    icon: "ShieldCheck",
    schemaType: "SoftwareApplication",

    sources: [officialSources.statutorySickPay],
    methodology:
      "Sick pay is calculated using GOV.UK's published Statutory Sick Pay weekly rate, applied to your qualifying sick days.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes eligibility for SSP; some employees aren't eligible and some employers offer enhanced contractual sick pay instead.",
    ],
  },
  {
    slug: "redundancy-pay-calculator-uk",
    name: "Redundancy Pay Calculator",
    shortName: "Redundancy Pay",
    h1: "UK Redundancy Pay Calculator 2026",
    category: "tax",
    description:
      "Calculate your statutory redundancy pay based on your age, length of service and weekly pay, plus an enhanced package comparison.",
    metaTitle: "Redundancy Pay Calculator UK 2026 | Statutory & Enhanced",
    metaDescription:
      "Calculate your UK statutory redundancy pay for 2026/27 based on age, years of service and weekly pay, with a tax-free amount and enhanced pay comparison.",
    keywords: ["redundancy pay calculator uk 2026", "how much redundancy will i get", "statutory redundancy calculator"],
    icon: "Briefcase",
    schemaType: "SoftwareApplication",

    sources: [officialSources.redundancyPay, officialSources.redundancyRights],
    methodology:
      "Statutory redundancy pay is calculated using GOV.UK's published age-banded formula and weekly pay cap, applied to your age, length of service and weekly pay.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes at least 2 years' continuous employment, the minimum needed to qualify for statutory redundancy pay.",
      "Employers may offer enhanced redundancy pay above the statutory minimum; this covers the statutory entitlement only.",
    ],
  },
  {
    slug: "split-bill-calculator-uk",
    name: "Split Bill Calculator",
    shortName: "Split Bill",
    h1: "UK Split Bill & Tip Calculator",
    category: "everyday",
    description:
      "Split a restaurant bill evenly or by what everyone ordered, with tip included, and see exactly what each person owes.",
    metaTitle: "Split Bill Calculator UK | Restaurant Bill Splitter",
    metaDescription:
      "Split any bill between friends, with or without tip. Divide evenly or by what each person ordered and see a clear per-person breakdown.",
    keywords: ["split bill calculator uk", "restaurant bill splitter", "who pays what calculator"],
    icon: "LayoutGrid",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Each person's share is calculated by dividing the bill total (plus any tip) by the number of people, or by item if itemised.",
    lastVerifiedDate: "2026-08-20",
  },
  {
    slug: "child-benefit-calculator-uk",
    name: "Child Benefit Calculator",
    shortName: "Child Benefit",
    h1: "UK Child Benefit Calculator 2026/27",
    category: "finance",
    description:
      "Work out your weekly and annual Child Benefit, plus any High Income Child Benefit Charge if you or your partner earn over £60,000.",
    metaTitle: "Child Benefit Calculator UK 2026/27 | HICBC",
    metaDescription:
      "Calculate your UK Child Benefit for 2026/27 and any High Income Child Benefit Charge. See your weekly rate, annual total and net amount after HICBC.",
    keywords: ["child benefit calculator uk 2026", "high income child benefit charge calculator", "how much child benefit will i get"],
    icon: "Users",
    schemaType: "SoftwareApplication",

    sources: [officialSources.childBenefit, officialSources.childBenefitTaxCharge],
    methodology:
      "Payment amount and any High Income Child Benefit Charge are calculated using GOV.UK's published Child Benefit rates and HICBC thresholds.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "The High Income Child Benefit Charge is based on the higher earner's individual adjusted net income, not household income.",
    ],
  },
  {
    slug: "universal-credit-calculator-uk",
    name: "Universal Credit Calculator",
    shortName: "Universal Credit",
    h1: "UK Universal Credit Calculator 2026/27",
    category: "finance",
    description:
      "Estimate your monthly Universal Credit, including the standard allowance, child element, housing element and earnings taper.",
    metaTitle: "Universal Credit Calculator UK 2026/27 | Estimate Your UC",
    metaDescription:
      "Estimate how much Universal Credit you could get in 2026/27. See your standard allowance, child and housing elements, and the earnings taper reduction.",
    keywords: ["universal credit calculator uk 2026", "how much universal credit will i get", "uc calculator uk"],
    icon: "HandCoins",
    schemaType: "SoftwareApplication",

    sources: [officialSources.universalCredit],
    methodology:
      "Estimated award is calculated from GOV.UK's published standard allowance and element rates, based on the household details you enter.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Universal Credit depends on many individual circumstances; this is an estimate, not a benefits decision.",
      "Use GOV.UK's own benefits calculator for a personalised assessment before making decisions.",
    ],
  },
  {
    slug: "maternity-pay-calculator-uk",
    name: "Maternity Pay Calculator",
    shortName: "Maternity Pay",
    h1: "UK Maternity Pay Calculator 2026/27",
    category: "tax",
    description:
      "Work out your Statutory Maternity Pay across your full maternity leave, including the 90% rate, the standard rate and any unpaid weeks.",
    metaTitle: "Maternity Pay Calculator UK 2026/27 | SMP Calculator",
    metaDescription:
      "Calculate your UK maternity pay for 2026/27. See your 90% rate weeks, standard SMP rate weeks, unpaid weeks and a monthly breakdown across your leave.",
    keywords: ["maternity pay calculator uk 2026", "smp calculator", "how much maternity pay will i get"],
    icon: "Baby",
    schemaType: "SoftwareApplication",

    sources: [officialSources.maternityPayLeave],
    methodology:
      "Statutory Maternity Pay is calculated using GOV.UK's published 90%/flat-rate structure, applied to your average weekly earnings.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes eligibility for Statutory Maternity Pay; those who don't qualify may be eligible for Maternity Allowance instead.",
      "Does not include enhanced contractual maternity pay, which many employers offer above the statutory minimum.",
    ],
  },
  {
    slug: "salary-negotiation-calculator-uk",
    name: "Salary Negotiation Calculator",
    shortName: "Salary Negotiation",
    h1: "UK Salary Negotiation Calculator",
    category: "tax",
    description:
      "See the real take-home value of a pay rise offer, including bonus, pension and benefits changes, plus its 5-year value.",
    metaTitle: "Salary Negotiation Calculator UK | Pay Rise Value",
    metaDescription:
      "Work out the real take-home value of a salary negotiation. Compare current and target pay, bonus, pension and benefits, plus the 5-year value of the increase.",
    keywords: ["salary negotiation calculator uk", "should i ask for a pay rise calculator", "salary negotiation uk"],
    icon: "Handshake",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Suggested salary range is calculated from the market data range and increase percentage you enter, alongside your current salary.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is a planning tool based on figures you provide, not independent market data or a guarantee of any offer.",
    ],
  },
  {
    slug: "mortgage-affordability-calculator-uk",
    name: "Mortgage Affordability Calculator",
    shortName: "Mortgage Affordability",
    h1: "UK Mortgage Affordability Calculator",
    category: "finance",
    description:
      "Estimate how much you could borrow for a mortgage based on your income, existing debts and deposit.",
    metaTitle: "Mortgage Affordability Calculator UK | How Much Can I Borrow",
    metaDescription:
      "Estimate how much you could borrow for a UK mortgage based on your income, joint income, existing debts and deposit, plus a stress-tested repayment.",
    keywords: ["mortgage affordability calculator uk", "how much can i borrow calculator", "mortgage borrowing calculator uk"],
    icon: "KeyRound",
    schemaType: "SoftwareApplication",

    sources: [officialSources.mortgageAffordability, officialSources.firstTimeBuyer],
    methodology:
      "Affordability range is calculated using typical UK mortgage income multiples, benchmarked against MoneyHelper's independent mortgage affordability guidance.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Individual lender affordability assessments vary considerably and depend on credit history, existing debt and outgoings.",
      "This is a general estimate only; a mortgage broker or lender's own calculator is needed for a figure you can rely on.",
    ],
  },
  {
    slug: "rental-yield-calculator-uk",
    name: "Rental Yield Calculator",
    shortName: "Rental Yield",
    h1: "UK Buy-to-Let Rental Yield Calculator",
    category: "finance",
    description:
      "Work out gross and net rental yield, monthly cash flow and cash-on-cash return for a buy-to-let property.",
    metaTitle: "Rental Yield Calculator UK | Buy-to-Let Returns",
    metaDescription:
      "Calculate gross and net rental yield for a UK buy-to-let property, plus monthly cash flow and cash-on-cash return after mortgage, fees and running costs.",
    keywords: ["rental yield calculator uk", "buy to let yield calculator", "property investment calculator uk"],
    icon: "Building2",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Rental yield is calculated as annual rental income divided by property value, expressed as a percentage, using the standard gross or net yield formula.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Net yield figures depend on the costs you enter; omitted costs such as void periods or major repairs will overstate the yield.",
    ],
  },
  {
    slug: "simple-interest-calculator-uk",
    name: "Simple Interest Calculator",
    shortName: "Simple Interest",
    h1: "UK Simple Interest Calculator",
    category: "finance",
    description:
      "Calculate simple interest on savings or a loan over any term, with a year-by-year breakdown.",
    metaTitle: "Simple Interest Calculator UK | Interest on Savings",
    metaDescription:
      "Work out simple interest on a savings balance or loan for any principal, rate and time period, with a clear year-by-year breakdown of interest earned.",
    keywords: ["simple interest calculator uk", "simple interest calculator", "how to calculate simple interest"],
    icon: "Calculator",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Interest is calculated using the standard simple interest formula (principal multiplied by rate multiplied by time), with no compounding.",
    lastVerifiedDate: "2026-08-20",
  },
  {
    slug: "state-pension-age-calculator-uk",
    name: "State Pension Age Calculator",
    shortName: "State Pension Age",
    h1: "UK State Pension Age Calculator",
    category: "finance",
    description:
      "Find your State Pension age based on your date of birth, and see an estimated new State Pension amount.",
    metaTitle: "State Pension Age Calculator UK | Check Your Date",
    metaDescription:
      "Check your UK State Pension age based on your date of birth, how many years until you reach it, and an estimated new State Pension weekly amount.",
    keywords: ["state pension age calculator", "check my state pension age", "when can i retire uk calculator"],
    icon: "CalendarClock",
    schemaType: "SoftwareApplication",

    sources: [officialSources.statePensionAge, officialSources.newStatePension],
    methodology:
      "State Pension age is calculated using GOV.UK's published State Pension age timetable, based on the date of birth you enter.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "The State Pension age is periodically reviewed by GOV.UK and could change again in future for younger age groups.",
    ],
  },
  {
    slug: "debt-payoff-calculator-uk",
    name: "Debt Payoff Calculator",
    shortName: "Debt Payoff",
    h1: "UK Debt Payoff Calculator (Snowball vs Avalanche)",
    category: "finance",
    description:
      "Compare the snowball and avalanche methods to see how fast you could clear multiple debts, and the interest saved.",
    metaTitle: "Debt Payoff Calculator UK | Snowball vs Avalanche",
    metaDescription:
      "Compare the debt snowball and debt avalanche methods for multiple UK debts. See how many months to debt-free and how much interest each approach saves.",
    keywords: ["debt payoff calculator uk", "debt snowball calculator", "debt avalanche calculator uk"],
    icon: "TrendingDown",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Payoff time and total interest are calculated by applying each debt's interest rate and payment amount month by month, using the snowball or avalanche method you select.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes no further borrowing is added to the debts during the payoff period, and that payment amounts stay consistent.",
    ],
  },
  {
    slug: "minimum-wage-calculator-uk",
    name: "National Minimum Wage Calculator",
    shortName: "Minimum Wage",
    h1: "UK National Minimum Wage Calculator",
    category: "tax",
    description:
      "Check whether your pay meets the National Living Wage or National Minimum Wage for your age group.",
    metaTitle: "Minimum Wage Calculator UK 2026 | Am I Paid Enough",
    metaDescription:
      "Check your pay against the 2026 UK National Living Wage and National Minimum Wage rates for your age group, and see your minimum legal weekly and annual pay.",
    keywords: ["minimum wage calculator uk", "national living wage calculator", "am i being paid minimum wage uk"],
    icon: "PoundSterling",
    schemaType: "SoftwareApplication",

    sources: [officialSources.minimumWage],
    methodology:
      "Minimum pay due is calculated using GOV.UK's published National Living Wage and National Minimum Wage age-banded hourly rates.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a standard worker category; apprentice and accommodation offset rules can change the rate that applies.",
    ],
  },
  {
    slug: "overtime-pay-calculator-uk",
    name: "Overtime Pay Calculator",
    shortName: "Overtime Pay",
    h1: "UK Overtime Pay Calculator",
    category: "tax",
    description:
      "Work out your overtime pay at time-and-a-half, double time or a custom rate, plus your total weekly pay.",
    metaTitle: "Overtime Pay Calculator UK | Time and a Half",
    metaDescription:
      "Calculate your UK overtime pay at time-and-a-half, double time or a custom multiplier, and see your total pay for the week including standard hours.",
    keywords: ["overtime pay calculator uk", "time and a half calculator", "overtime calculator uk"],
    icon: "Hourglass",
    schemaType: "SoftwareApplication",

    sources: [officialSources.minimumWage],
    methodology:
      "Overtime pay is calculated by applying your overtime rate multiplier to your base hourly rate, referenced against GOV.UK's published minimum wage rates to flag any shortfall.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes your contract's stated overtime multiplier; there's no separate statutory overtime rate in UK law beyond the National Minimum Wage floor.",
    ],
  },
  {
    slug: "paternity-pay-calculator-uk",
    name: "Paternity Pay Calculator",
    shortName: "Paternity Pay",
    h1: "UK Statutory Paternity Pay Calculator 2026/27",
    category: "tax",
    description:
      "Work out your Statutory Paternity Pay for 1 or 2 weeks of leave, and your net pay after tax and National Insurance.",
    metaTitle: "Paternity Pay Calculator UK 2026/27 | SPP Calculator",
    metaDescription:
      "Calculate your UK Statutory Paternity Pay for 2026/27 across 1 or 2 weeks of leave, including the 90% earnings rate and net pay after tax and NI.",
    keywords: ["paternity pay calculator uk", "statutory paternity pay calculator", "spp calculator uk"],
    icon: "Baby",
    schemaType: "SoftwareApplication",

    sources: [officialSources.paternityPayLeave],
    methodology:
      "Statutory Paternity Pay is calculated using GOV.UK's published flat-rate/90% structure, applied to your average weekly earnings.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes eligibility for Statutory Paternity Pay; enhanced contractual paternity pay is not included unless entered.",
    ],
  },
  {
    slug: "car-depreciation-calculator-uk",
    name: "Car Depreciation Calculator",
    shortName: "Car Depreciation",
    h1: "UK Car Depreciation Calculator",
    category: "motoring",
    description:
      "Estimate how much a car could be worth after 1, 3, 5 or more years, and how much value it will lose.",
    metaTitle: "Car Depreciation Calculator UK | Future Value",
    metaDescription:
      "Estimate how much a car will depreciate over time. See its likely resale value after each year of ownership and total value lost using typical UK rates.",
    keywords: ["car depreciation calculator uk", "car value calculator uk", "how much will my car be worth"],
    icon: "Car",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Depreciation is calculated using a standard declining-balance formula, applied to the purchase price, annual depreciation rate and years of ownership you enter.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Actual resale value depends on mileage, condition, market demand and specific model, which a formula alone can't capture.",
    ],
  },
  {
    slug: "solar-panel-savings-calculator-uk",
    name: "Solar Panel Savings Calculator",
    shortName: "Solar Panel Savings",
    h1: "UK Solar Panel Savings Calculator",
    category: "home",
    description:
      "Estimate annual savings, export income and payback period for a home solar PV system.",
    metaTitle: "Solar Panel Savings Calculator UK | Payback Period",
    metaDescription:
      "Estimate how much a home solar PV system could save on electricity bills, plus export income and payback period, based on system size and UK energy prices.",
    keywords: ["solar panel savings calculator uk", "solar panel payback calculator", "is solar worth it uk calculator"],
    icon: "Sun",
    schemaType: "SoftwareApplication",

    sources: [officialSources.energyPriceCap],
    methodology:
      "Savings estimate is calculated from your system size, typical UK solar generation figures and Ofgem's published energy price cap unit rate.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Actual generation depends on your roof orientation, shading, location and weather; this is an estimate, not a guaranteed output.",
    ],
  },
  {
    slug: "corporation-tax-calculator-uk",
    name: "Corporation Tax Calculator",
    shortName: "Corporation Tax",
    h1: "UK Corporation Tax Calculator",
    category: "business",
    description:
      "Work out your Corporation Tax bill, including marginal relief, for any level of company profit.",
    metaTitle: "Corporation Tax Calculator UK 2026/27 | Marginal Relief",
    metaDescription:
      "Calculate UK Corporation Tax for 2026/27, including the small profits rate, main rate and marginal relief, for any level of company profit.",
    keywords: ["corporation tax calculator uk", "corporation tax calculator", "marginal relief calculator"],
    icon: "Building2",
    schemaType: "SoftwareApplication",

    sources: [officialSources.corporationTax],
    methodology:
      "Corporation Tax is calculated using HMRC's published small profits rate, main rate and marginal relief bands, applied to your company's taxable profit.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes standard (non-ring fence) trading profits; oil and gas ring-fence profits use separate rates.",
    ],
  },
  {
    slug: "dividend-vs-salary-calculator-uk",
    name: "Dividend vs Salary Calculator",
    shortName: "Dividend vs Salary",
    h1: "UK Dividend vs Salary Calculator",
    category: "business",
    description:
      "Compare take-home pay from taking company profit as salary versus dividends, after Corporation Tax, Income Tax and National Insurance.",
    metaTitle: "Dividend vs Salary Calculator UK | Take-Home Pay",
    metaDescription:
      "Compare salary and dividends for UK limited company directors. See take-home pay after Corporation Tax, Income Tax, employer NI and dividend tax.",
    keywords: ["dividend vs salary calculator uk", "salary vs dividends calculator", "director pay calculator uk"],
    icon: "ArrowLeftRight",
    schemaType: "SoftwareApplication",

    sources: [officialSources.dividendTax, officialSources.incomeTax, officialSources.nationalInsurance],
    methodology:
      "Both scenarios are calculated using HMRC's Income Tax, National Insurance and dividend tax rates, applied to the same total amount extracted from the company.",
    effectivePeriod: "2026/27 tax year",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes a single director-shareholder taking a simple salary/dividend split; Corporation Tax on company profits is also factored in.",
      "Does not account for pension contributions or other tax planning that could change the comparison.",
    ],
  },
  {
    slug: "break-even-calculator-uk",
    name: "Break-Even Calculator",
    shortName: "Break-Even",
    h1: "UK Break-Even Calculator",
    category: "business",
    description:
      "Work out how many units you need to sell, and at what revenue, to cover your fixed and variable costs.",
    metaTitle: "Break-Even Calculator UK | Units and Revenue",
    metaDescription:
      "Calculate your break-even point in units and revenue from your fixed costs, price per unit and variable cost per unit, plus units needed for a target profit.",
    keywords: ["break even calculator", "break even calculator uk", "break even point calculator"],
    icon: "Target",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Break-even point is calculated by dividing fixed costs by the contribution margin (price minus variable cost per unit).",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes fixed and variable costs stay constant at different volumes, which may not hold at very high or low output.",
    ],
  },
  {
    slug: "profit-margin-calculator-uk",
    name: "Profit Margin Calculator",
    shortName: "Profit Margin",
    h1: "UK Profit Margin Calculator",
    category: "business",
    description:
      "Work out your profit margin, markup percentage and profit from a cost price and selling price.",
    metaTitle: "Profit Margin Calculator UK | Margin and Markup",
    metaDescription:
      "Calculate profit margin and markup from a cost price and selling price, or work out the selling price needed to hit a target profit margin.",
    keywords: ["profit margin calculator", "markup calculator", "profit margin calculator uk"],
    icon: "TrendingUp",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Profit margin is calculated as profit divided by revenue, expressed as a percentage, for both gross and net margin.",
    lastVerifiedDate: "2026-08-20",
  },
  {
    slug: "dog-age-calculator-uk",
    name: "Dog Age Calculator",
    shortName: "Dog Age",
    h1: "Dog Age Calculator: Dog Years to Human Years",
    category: "pets",
    description:
      "Convert your dog's age into human years using a vet-referenced formula, more accurate than the old multiply-by-7 rule.",
    metaTitle: "Dog Age Calculator | Dog Years to Human Years",
    metaDescription:
      "Convert your dog's age into human years using a vet-referenced ageing formula, more accurate than the traditional multiply-by-7 rule of thumb.",
    keywords: ["dog age calculator", "dog years to human years", "dog age in human years calculator"],
    icon: "Dog",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Human-equivalent age is calculated using a standard breed-size-adjusted formula, since dogs of different sizes age at different rates.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is a general estimate; individual dogs age differently based on breed, health and lifestyle.",
      "For any health or behaviour concern, speak to a vet rather than relying on an age estimate.",
    ],
  },
  {
    slug: "cat-age-calculator-uk",
    name: "Cat Age Calculator",
    shortName: "Cat Age",
    h1: "Cat Age Calculator: Cat Years to Human Years",
    category: "pets",
    description:
      "Convert your cat's age into human years using the standard age chart used by vets and cat welfare charities.",
    metaTitle: "Cat Age Calculator | Cat Years to Human Years",
    metaDescription:
      "Convert your cat's age into human years using the standard cat ageing chart, showing which human life stage your cat has reached.",
    keywords: ["cat age calculator", "cat years to human years", "cat age in human years calculator"],
    icon: "Cat",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Human-equivalent age is calculated using a standard formula reflecting a cat's faster early-life development and slower ageing after year two.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is a general estimate; individual cats age differently based on breed, health and lifestyle.",
      "For any health or behaviour concern, speak to a vet rather than relying on an age estimate.",
    ],
  },
  {
    slug: "running-pace-calculator-uk",
    name: "Running Pace Calculator",
    shortName: "Running Pace",
    h1: "UK Running Pace Calculator",
    category: "fitness",
    description:
      "Work out your running pace per km or mile, and predict your finish time for other race distances.",
    metaTitle: "Running Pace Calculator | Pace and Race Predictor",
    metaDescription:
      "Calculate your running pace per km or mile from a distance and time, and predict your finish time for 5k, 10k, half marathon and marathon distances.",
    keywords: ["running pace calculator", "race time predictor", "marathon pace calculator"],
    icon: "Footprints",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Pace, time and distance are calculated using the standard speed-distance-time formula, converted between common race distances and units.",
    lastVerifiedDate: "2026-08-20",
  },
  {
    slug: "one-rep-max-calculator-uk",
    name: "One Rep Max Calculator",
    shortName: "One Rep Max",
    h1: "One Rep Max (1RM) Calculator",
    category: "fitness",
    description:
      "Estimate your one-rep max from a weight and rep count, plus a training percentage table.",
    metaTitle: "One Rep Max Calculator | 1RM Estimator",
    metaDescription:
      "Estimate your one-rep max (1RM) from the weight and reps you lifted, using the Epley formula, plus a percentage table for training loads.",
    keywords: ["one rep max calculator", "1rm calculator", "epley formula calculator"],
    icon: "Dumbbell",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Estimated one-rep max is calculated using the Epley or Brzycki formula, standard strength-training estimates based on weight lifted and reps completed.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is a mathematical estimate, not a substitute for an actual tested lift; formulas become less accurate above around 10 reps.",
      "Always use proper form and appropriate spotting or safety equipment when testing strength.",
    ],
  },
  {
    slug: "student-loan-repayment-calculator-uk",
    name: "Student Loan Repayment Calculator",
    shortName: "Student Loan",
    h1: "UK Student Loan Repayment Calculator",
    category: "education",
    description:
      "See how much you will repay towards your student loan each month, based on your salary and repayment plan.",
    metaTitle: "Student Loan Repayment Calculator UK 2026/27",
    metaDescription:
      "Calculate your UK student loan repayments for 2026/27 by salary and plan type (Plan 1, 2, 4, 5 or Postgraduate Loan), monthly and annually.",
    keywords: ["student loan repayment calculator", "student loan calculator uk", "plan 2 student loan calculator"],
    icon: "GraduationCap",
    schemaType: "SoftwareApplication",

    sources: [officialSources.studentLoanRepayment],
    methodology:
      "Repayments are calculated using GOV.UK's published repayment threshold and rate for your loan plan, applied to your income above the threshold.",
    effectivePeriod: "2026/27",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Assumes repayment through UK PAYE employment; self-employed and overseas repayment rules differ slightly.",
    ],
  },
  {
    slug: "student-budget-calculator-uk",
    name: "Student Budget Calculator",
    shortName: "Student Budget",
    h1: "UK Student Budget Calculator",
    category: "education",
    description:
      "Plan your monthly student budget, comparing your loan, grants and other income against rent, food and other costs.",
    metaTitle: "Student Budget Calculator UK | Plan Your Money",
    metaDescription:
      "Plan your university budget with this UK student budget calculator. Compare your maintenance loan and other income against rent, food and living costs.",
    keywords: ["student budget calculator uk", "university budget calculator", "student budget planner"],
    icon: "Wallet",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Budget breakdown is calculated from typical UK student living cost categories, scaled to the income and location details you enter.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Actual costs vary significantly by city, accommodation type and lifestyle; figures are general estimates, not a personal budget plan.",
    ],
  },
  {
    slug: "degree-classification-calculator-uk",
    name: "Degree Classification Calculator",
    shortName: "Degree Classification",
    h1: "UK Degree Classification Calculator",
    category: "education",
    description:
      "Estimate your UK degree classification from your Year 2 and Year 3 marks, using common university weighting schemes.",
    metaTitle: "Degree Classification Calculator UK | First, 2:1, 2:2",
    metaDescription:
      "Estimate your UK degree classification from your Year 2 and Year 3 average marks. Try different weighting schemes and see how close you are to the next band.",
    keywords: ["degree classification calculator", "degree classification calculator uk", "2:1 calculator"],
    icon: "Scroll",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Weighted average is calculated by applying standard UK degree classification weighting (commonly year 2 and year 3 marks) to the module marks you enter.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Exact weighting and classification boundaries vary by university; always confirm your institution's specific regulations.",
    ],
  },
  {
    slug: "heart-rate-zone-calculator-uk",
    name: "Heart Rate Zone Calculator",
    shortName: "Heart Rate Zones",
    h1: "Heart Rate Zone Calculator",
    category: "fitness",
    description:
      "Work out your estimated maximum heart rate and training zones, from easy recovery pace to maximum effort.",
    metaTitle: "Heart Rate Zone Calculator | Training Zones by Age",
    metaDescription:
      "Calculate your estimated maximum heart rate and 5 training zones from your age, with an optional Karvonen method using your resting heart rate.",
    keywords: ["heart rate zone calculator", "target heart rate calculator", "max heart rate calculator"],
    icon: "Heart",
    schemaType: "SoftwareApplication",

    sources: [officialSources.nhsPhysicalActivity],
    methodology:
      "Heart rate zones are calculated using the standard age-based maximum heart rate formula, divided into training zones referenced against NHS physical activity guidance.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "This is a population-average estimate; individual maximum heart rate can vary meaningfully from the age-based formula.",
      "Speak to a doctor before starting a new exercise programme if you have an existing heart condition.",
    ],
  },
  {
    slug: "late-payment-interest-calculator-uk",
    name: "Late Payment Interest Calculator",
    shortName: "Late Payment Interest",
    h1: "UK Late Payment Interest Calculator",
    category: "business",
    description:
      "Work out statutory interest and compensation you can claim on an overdue business invoice under UK late payment law.",
    metaTitle: "Late Payment Interest Calculator UK | Statutory Interest",
    metaDescription:
      "Calculate statutory interest and fixed compensation on an overdue UK business invoice under the Late Payment of Commercial Debts Act 1998.",
    keywords: ["late payment interest calculator", "statutory interest calculator uk", "late payment calculator uk"],
    icon: "HandCoins",
    schemaType: "SoftwareApplication",

    sources: [officialSources.latePaymentInterest],
    methodology:
      "Statutory interest is calculated using the Late Payment of Commercial Debts (Interest) Act 1998 formula: the Bank of England base rate plus 8%, applied to the overdue amount and number of days late.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Applies to business-to-business commercial contracts only, not consumer contracts.",
      "Fixed compensation amounts follow the statutory bands set out in the Act.",
    ],
  },
  {
    slug: "dog-food-calculator-uk",
    name: "Dog Food Calculator",
    shortName: "Dog Food",
    h1: "Dog Food Calculator",
    category: "pets",
    description:
      "Estimate how much to feed your dog each day, based on their weight, activity level and their food's energy content.",
    metaTitle: "Dog Food Calculator UK | Daily Portion Estimate",
    metaDescription:
      "Work out an estimated daily food portion for your dog based on their weight, activity level and food's kcal content. A helpful starting point, not vet advice.",
    keywords: ["dog food calculator", "how much to feed my dog", "dog portion calculator"],
    icon: "Dog",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Daily portion is calculated from your dog's weight and typical UK feeding guideline ratios for standard adult maintenance energy needs.",
    lastVerifiedDate: "2026-08-20",
    assumptions: [
      "Feeding guidelines vary by food brand, your dog's activity level and life stage; always check your specific food's packaging.",
      "For any concern about your dog's weight or diet, speak to a vet rather than relying on a calculator.",
    ],
  },
  {
    slug: "time-duration-calculator-uk",
    name: "Time Duration Calculator",
    shortName: "Time Duration",
    h1: "Time Duration Calculator",
    category: "everyday",
    description:
      "Calculate the hours and minutes between two times, deduct unpaid breaks, and work out pay from an hourly rate.",
    metaTitle: "Time Duration Calculator | Hours Between Two Times",
    metaDescription:
      "Calculate hours and minutes worked between two times, deduct unpaid breaks, and see decimal hours and pay for timesheets or freelance billing.",
    keywords: ["time duration calculator", "hours calculator", "time card calculator uk"],
    icon: "Clock",
    schemaType: "SoftwareApplication",

    sources: [],
    methodology:
      "Duration is calculated as the exact difference between the start and end times you enter, including optional break deductions.",
    lastVerifiedDate: "2026-08-20",
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
