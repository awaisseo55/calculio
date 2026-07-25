import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What's the difference between percentage change and percentage points?",
    answer:
      "Percentage change measures the relative change between two numbers — for example, going from £80 to £100 is a 25% increase. Percentage points measure the simple difference between two percentages — going from an interest rate of 4% to 5% is a rise of 1 percentage point, but it's actually a 25% increase in relative terms. Mixing these up is one of the most common maths mistakes in news and finance.",
  },
  {
    question: "How do I work out a percentage discount?",
    answer:
      "Use the 'subtract %' mode: enter the original price and the discount percentage, and it will show you the final price after the discount is applied. For example, a £150 item with a 20% discount comes to £120.",
  },
  {
    question: "How do I work out what percentage one number is of another?",
    answer:
      "Use the 'X is what % of Y' mode. For example, if you scored 30 out of 150 on a test, entering 30 as X and 150 as Y shows you scored 20%.",
  },
  {
    question: "Why is my percentage increase and decrease not symmetrical?",
    answer:
      "Because percentages are relative to the starting number, increasing a number by X% and then decreasing the result by the same X% doesn't get you back to the original number. For example, £100 increased by 10% is £110, but £110 decreased by 10% is £99, not £100 — the base amount you're taking the percentage of has changed.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the percentage calculator</h2>
      <p>
        This calculator covers four of the most common percentage questions people
        search for, organised as tabs so you can jump straight to the one you need:
        finding what a percentage of a number is, working out what percentage one
        number is of another, calculating the percentage change between two numbers, and
        adding or subtracting a percentage from a value (useful for discounts, mark-ups,
        tips and price rises).
      </p>
      <p>
        Percentages come up constantly in everyday life — discounts while shopping,
        interest rates on savings and loans, exam results, pay rises, and comparing
        statistics in the news. Getting comfortable with how each type of percentage
        calculation works makes all of these much easier to sanity-check yourself,
        rather than just trusting a headline figure.
      </p>

      <h2>The four modes explained</h2>
      <h3>1. X% of Y</h3>
      <p>
        This answers &ldquo;what is 20% of 150?&rdquo; — multiply the number by the
        percentage, then divide by 100. So 20% of £150 is (20 ÷ 100) × 150 = £30.
      </p>
      <h3>2. X is what % of Y</h3>
      <p>
        This answers &ldquo;30 is what percentage of 150?&rdquo; — divide X by Y, then
        multiply by 100. So 30 ÷ 150 × 100 = 20%.
      </p>
      <h3>3. Percentage change from X to Y</h3>
      <p>
        This answers &ldquo;what&apos;s the percentage increase or decrease from 80 to
        100?&rdquo; — subtract the original from the new value, divide by the original,
        then multiply by 100. So (100 − 80) ÷ 80 × 100 = 25% increase.
      </p>
      <h3>4. Add or subtract a percentage</h3>
      <p>
        This answers &ldquo;what is 150 plus 20%?&rdquo; or &ldquo;what is 150 minus
        20%?&rdquo; — multiply the value by (1 + the percentage as a decimal) to
        increase, or (1 − the percentage as a decimal) to decrease. So £150 plus 20% is
        150 × 1.20 = £180, and £150 minus 20% is 150 × 0.80 = £120.
      </p>

      <h2>Worked example: a shopping discount</h2>
      <p>
        A jacket is priced at <strong>£85</strong> and is reduced by{" "}
        <strong>30%</strong> in a sale. Using the &ldquo;subtract %&rdquo; mode: 85 ×
        (1 − 0.30) = 85 × 0.70 = <strong>£59.50</strong>. If you later see the same
        jacket back at full price and want to know the percentage increase from the sale
        price, that&apos;s the &ldquo;percentage change&rdquo; mode: (85 − 59.50) ÷ 59.50 ×
        100 = roughly <strong>42.9%</strong> — noticeably higher than the original 30%
        discount, because the base amount changed.
      </p>

      <h2>A common trap: percentage points vs percentage change</h2>
      <p>
        One of the easiest percentage mistakes to make is confusing a change in
        percentage points with a percentage change. If a savings account&apos;s interest
        rate moves from 4% to 5%, that&apos;s a rise of <strong>1 percentage point</strong>{" "}
        — but expressed as a percentage change, it&apos;s actually a{" "}
        <strong>25% increase</strong> in the interest rate itself (1 ÷ 4 × 100 = 25%).
        Both statements are technically correct, but they tell very different stories,
        which is why it&apos;s worth being precise about which one you mean, especially when
        reading financial or statistical reporting.
      </p>

      <h2>Where percentages show up in real UK life</h2>
      <p>
        Beyond the maths classroom, percentages are baked into almost every financial
        decision — mortgage interest rates, credit card APRs, VAT at the till, pay rise
        negotiations, exam grade boundaries, and investment returns are all expressed as
        percentages. Being able to quickly check a percentage calculation yourself, ​
        rather than relying on a headline figure, is a genuinely useful everyday skill.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you&apos;re working out a pay rise or salary change, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay calculator</Link>{" "}
        shows the full effect after tax and deductions, not just the gross percentage
        increase. For a quick everyday use of percentages, our{" "}
        <Link href="/calculators/tip-calculator-uk">tip calculator</Link> applies
        the same maths to working out a tip and splitting a bill.
      </p>
    </div>
  );
}
