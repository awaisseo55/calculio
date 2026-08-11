import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much does a new car depreciate in the first year?",
    answer:
      "A new car typically loses somewhere around 15% to 25% of its value in the first year, with 20% commonly used as a rough rule of thumb. The exact figure varies a lot by make, model, specification and how in-demand that particular car is, so treat any single percentage as an illustrative estimate rather than a precise valuation.",
  },
  {
    question: "Does depreciation slow down over time?",
    answer:
      "Generally yes. The steepest drop usually happens in the first year, as a car changes from new to used, with a somewhat slower but still steady decline through years 2 to 5, and an even more gradual decline once a car is more than 5 years old and its price has settled closer to what similar used examples are worth.",
  },
  {
    question: "Which cars hold their value best?",
    answer:
      "Cars with strong reputations for reliability, low running costs, and steady demand in the used market tend to depreciate more slowly, while cars with high depreciation rates are often those that were heavily discounted when new, have higher running costs, or fall out of fashion quickly. Specific model research and used-market data are more reliable than a general rule of thumb if you need a precise answer for one particular car.",
  },
  {
    question: "Does mileage affect depreciation?",
    answer:
      "Yes, higher mileage vehicles are generally worth less than lower mileage examples of the same age and model, since more mileage usually means more wear and a shorter remaining useful life. This calculator estimates depreciation based on age alone, so a car covering unusually high or low annual mileage may depreciate faster or slower than shown here.",
  },
  {
    question: "Is buying a used car instead of new a way to avoid the steepest depreciation?",
    answer:
      "This is a common strategy. Since the first year usually sees the steepest percentage drop in value, buying a car that is 1 to 3 years old can mean someone else has already absorbed that initial hit, potentially offering better value if you plan to keep the car for several years afterwards.",
  },
  {
    question: "Does this calculator account for electric vehicle depreciation specifically?",
    answer:
      "No, this calculator uses general rule-of-thumb depreciation rates for typical petrol and diesel cars. Electric vehicle depreciation has behaved differently in recent years, partly due to rapidly changing battery technology and government incentives, so if you are researching an EV specifically, it is worth checking used EV market data separately.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        A car starts losing value the moment it is driven away from the
        forecourt, and that loss, depreciation, is usually the single
        biggest cost of car ownership over time. This calculator estimates
        how much a car could be worth after any number of years, using
        editable rule-of-thumb depreciation rates for the first year, years
        2 to 5, and beyond.
      </p>

      <h2>How to use the car depreciation calculator</h2>
      <p>
        Enter the purchase price and how many years you want to project
        forward. Typical illustrative depreciation rates are pre-filled for
        the first year, years 2 to 5, and year 6 onwards, reflecting the
        common pattern of a steeper initial drop followed by a slower,
        steadier decline. Adjust any of these rates if you have more
        specific data for the make and model you are researching, and the
        calculator will show the estimated value and total value lost for
        each year.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator applies a different depreciation rate to each stage
        of a car&apos;s life. In year 1, the full purchase price depreciates at
        the year 1 rate, reflecting the well-known steep initial drop.
        In years 2 to 5, the previous year&apos;s value depreciates at a
        second, usually lower, rate. From year 6 onwards, the remaining
        value depreciates at a third, typically even lower, rate, reflecting
        how a car&apos;s price tends to settle as it ages and the percentage
        drops become smaller against a lower base value.
      </p>

      <h2>Worked example</h2>
      <p>
        A car bought new for <strong>£25,000</strong>, using illustrative
        rates of 20% in year 1 and 15% for years 2 to 5: after year 1 it is
        worth £20,000, after year 2 around £17,000, after year 3 around
        £14,450, after year 4 around £12,283, and by the end of year 5
        around <strong>£10,440</strong>. That is a total loss of roughly{" "}
        <strong>£14,560</strong>, or about <strong>58%</strong> of the
        original price, over 5 years, a useful illustration of just how much
        of a new car&apos;s cost is depreciation rather than usage.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is treating a single depreciation percentage as
        accurate for every car. Depreciation varies enormously by make,
        model, specification, colour, mileage and condition, so this
        calculator is best used for broad financial planning, such as
        estimating running costs before buying, rather than valuing a
        specific car precisely.
      </p>
      <p>
        Another mistake is ignoring depreciation entirely when comparing the
        true cost of ownership between two cars. A cheaper car with high
        depreciation can end up costing more overall than a pricier car that
        holds its value well, once you account for what you would get back
        when you eventually sell or part-exchange it.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are financing a car, our{" "}
        <Link href="/calculators/car-loan-calculator-uk">
          car loan calculator
        </Link>{" "}
        works out monthly repayments and total interest, and our{" "}
        <Link href="/calculators/road-tax-calculator-uk">
          road tax calculator
        </Link>{" "}
        estimates your annual VED. To compare running costs across fuel
        types, see our{" "}
        <Link href="/calculators/fuel-efficiency-comparison-uk">
          fuel efficiency comparison calculator
        </Link>{" "}
        and our{" "}
        <Link href="/calculators/electric-car-running-cost-calculator-uk">
          electric car running cost calculator
        </Link>
        . Our guide comparing{" "}
        <Link href="/blog/electric-vs-petrol-cost-comparison-uk-2026">
          electric and petrol running costs
        </Link>{" "}
        looks at the wider cost picture beyond depreciation alone.
      </p>
    </div>
  );
}
