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
  {
    slug: "flooring-calculator-uk",
    name: "Flooring Calculator",
    shortName: "Flooring",
    h1: "UK Flooring Calculator",
    category: "home",
    description:
      "Work out how much laminate, vinyl, wood, tile or carpet flooring you need, including wastage, and how many packs to buy.",
    metaTitle: "Flooring Calculator UK | How Much Flooring Needed | Calculio",
    metaDescription:
      "Calculate how much flooring you need for any room, including wastage allowance, and how many packs of laminate, vinyl, wood or tile to buy.",
    keywords: ["flooring calculator uk", "how much laminate flooring do i need", "flooring cost calculator"],
    icon: "LayoutGrid",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "concrete-calculator-uk",
    name: "Concrete Calculator",
    shortName: "Concrete",
    h1: "UK Concrete Calculator",
    category: "home",
    description:
      "Work out how much concrete you need for a slab, footing, post hole or column, in cubic metres, weight and ready-mix bags.",
    metaTitle: "Concrete Calculator UK | Slabs, Footings & Post Holes | Calculio",
    metaDescription:
      "Calculate how much concrete you need for a slab, footing, post hole or column, including volume, weight and the number of ready-mix bags.",
    keywords: ["concrete calculator uk", "how much concrete do i need", "concrete for post hole calculator"],
    icon: "Construction",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "kitchen-renovation-cost-calculator-uk",
    name: "Kitchen Renovation Cost Calculator",
    shortName: "Kitchen Renovation Cost",
    h1: "UK Kitchen Renovation Cost Calculator",
    category: "home",
    description:
      "Estimate the cost of a new kitchen by size and quality level, with a breakdown across units, worktops, appliances and more.",
    metaTitle: "Kitchen Renovation Cost Calculator UK 2026 | Calculio",
    metaDescription:
      "Estimate your kitchen renovation cost in 2026 by size and quality, budget to premium, with a full cost breakdown by category.",
    keywords: ["kitchen renovation cost uk", "how much does a new kitchen cost", "kitchen cost calculator uk"],
    icon: "ChefHat",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "loft-insulation-calculator-uk",
    name: "Loft Insulation Calculator",
    shortName: "Loft Insulation",
    h1: "UK Loft Insulation Calculator",
    category: "home",
    description:
      "Work out how much extra loft insulation you need to reach the recommended 270mm depth, and roughly what it could save on energy bills.",
    metaTitle: "Loft Insulation Calculator UK | Rolls Needed | Calculio",
    metaDescription:
      "Calculate how many rolls of loft insulation you need to reach the recommended 270mm depth, plus a rough estimate of energy bill savings.",
    keywords: ["loft insulation calculator uk", "how much loft insulation do i need", "loft insulation cost calculator"],
    icon: "Layers",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "council-tax-calculator-uk",
    name: "Council Tax Calculator",
    shortName: "Council Tax",
    h1: "UK Council Tax Calculator 2026/27",
    category: "home",
    description:
      "Estimate your annual and monthly council tax bill by band and region, including single occupant discount and second home premium.",
    metaTitle: "Council Tax Calculator UK 2026/27 | By Band | Calculio",
    metaDescription:
      "Estimate your UK council tax bill for 2026/27 by band and region, with single occupant discount, second home premium and a national average comparison.",
    keywords: ["council tax calculator uk", "how much is my council tax 2026", "council tax band calculator"],
    icon: "Landmark",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "energy-bill-calculator-uk",
    name: "Energy Bill Calculator",
    shortName: "Energy Bill",
    h1: "UK Energy Bill Calculator 2026",
    category: "home",
    description:
      "Estimate your annual gas and electricity bill based on household size, property type, heating system and unit rates.",
    metaTitle: "Energy Bill Calculator UK 2026 | Gas & Electric | Calculio",
    metaDescription:
      "Calculate your UK gas and electricity bill for 2026. Enter your household size, property type and heating system for an annual and monthly cost estimate.",
    keywords: ["energy bill calculator uk", "how much is my energy bill 2026", "gas and electric cost calculator"],
    icon: "Plug",
    featured: true,
    schemaType: "SoftwareApplication",
  },
  {
    slug: "salary-to-hourly-calculator-uk",
    name: "Salary to Hourly Rate Calculator",
    shortName: "Salary to Hourly",
    h1: "UK Salary to Hourly Rate Calculator",
    category: "tax",
    description:
      "Convert your annual salary into a gross and net hourly rate, accounting for holidays, sick days and UK tax.",
    metaTitle: "Salary to Hourly Rate Calculator UK | Calculio",
    metaDescription:
      "Convert your UK annual salary into an hourly rate. See your gross and net hourly pay after tax, plus a comparison to the National Living Wage.",
    keywords: ["salary to hourly uk", "hourly rate calculator uk", "convert annual salary to hourly"],
    icon: "Clock",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "pregnancy-weeks-calculator-uk",
    name: "Pregnancy Weeks Calculator",
    shortName: "Pregnancy Weeks",
    h1: "How Many Weeks Pregnant Am I? Calculator",
    category: "health",
    description:
      "Track your current gestational week and day, trimester, and next NHS milestone from your last period, conception or IVF transfer date.",
    metaTitle: "Pregnancy Weeks Calculator UK | How Far Along | Calculio",
    metaDescription:
      "Find out exactly how many weeks and days pregnant you are, your trimester, and your next NHS milestone, from your last period or conception date.",
    keywords: ["how many weeks pregnant calculator", "pregnancy weeks calculator uk", "gestational age calculator"],
    icon: "CalendarDays",
    schemaType: "SoftwareApplication",
  },
  {
    slug: "ovulation-calculator-uk",
    name: "Ovulation Calculator",
    shortName: "Ovulation",
    h1: "UK Ovulation and Fertility Calculator",
    category: "health",
    description:
      "Estimate your ovulation date, fertile window and next expected period from your last period date and average cycle length.",
    metaTitle: "Ovulation Calculator UK | Fertile Window | Calculio",
    metaDescription:
      "Estimate your ovulation date and fertile window from your last period and cycle length, plus your next 3 projected cycles. Estimate only, NHS-aligned.",
    keywords: ["ovulation calculator uk", "fertile window calculator", "when am i most fertile uk"],
    icon: "Heart",
    schemaType: "SoftwareApplication",
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
  },
  {
    slug: "child-benefit-calculator-uk",
    name: "Child Benefit Calculator",
    shortName: "Child Benefit",
    h1: "UK Child Benefit Calculator 2026/27",
    category: "finance",
    description:
      "Work out your weekly and annual Child Benefit, plus any High Income Child Benefit Charge if you or your partner earn over £60,000.",
    metaTitle: "Child Benefit Calculator UK 2026/27 | HICBC | Calculio",
    metaDescription:
      "Calculate your UK Child Benefit for 2026/27 and any High Income Child Benefit Charge. See your weekly rate, annual total and net amount after HICBC.",
    keywords: ["child benefit calculator uk 2026", "high income child benefit charge calculator", "how much child benefit will i get"],
    icon: "Users",
    schemaType: "SoftwareApplication",
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
