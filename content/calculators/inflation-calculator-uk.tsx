import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What does this inflation calculator show?",
    answer:
      "It estimates how much a price today could cost in future if it rises by the annual inflation rate you enter. It also shows how much buying power the same cash amount could lose over time.",
  },
  {
    question: "Which UK inflation rate should I enter?",
    answer:
      "Use the rate that best matches your purpose. CPI or CPIH figures from the Office for National Statistics are common for general UK inflation, but your own spending may rise faster or slower than the headline rate.",
  },
  {
    question: "Is this based on historic ONS inflation data?",
    answer:
      "No. This calculator uses the annual rate you enter, so it works for quick scenarios rather than a fixed historic index table. Check ONS data if you need exact historic CPI or CPIH figures.",
  },
  {
    question: "Why does inflation compound?",
    answer:
      "Inflation compounds because each year's price increase applies to the new higher price, not the original price. A 3% rise for five years is therefore more than 15% in total.",
  },
  {
    question: "Can inflation make savings worth less?",
    answer:
      "Yes. If prices rise faster than the interest you earn, the real buying power of your savings falls. That is why it helps to compare savings growth with inflation, not just the headline interest rate.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. This is a general estimate to help you understand inflation. It is not financial advice, and you should speak to a regulated adviser for personal decisions.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Inflation changes what your money can buy. A weekly shop, rent, energy bill or holiday fund can look
        affordable today, then feel tighter a few years later because prices have risen. This UK inflation
        calculator shows what an amount today could cost in future using the annual inflation rate you enter. It
        also shows the extra cost and the reduced buying power of the same cash amount.
      </p>

      <h2>How to use this inflation calculator</h2>
      <p>
        Enter the amount you want to test, the annual inflation rate, and the number of years. For example, you
        might enter £1,000, 3% inflation and 5 years. The calculator then compounds that rate each year and shows
        the estimated future cost. If you are checking your savings plan, compare this with our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">savings goal calculator</Link>{" "}
        or{" "}
        <Link href="/calculators/compound-interest-calculator-uk">compound interest calculator</Link>
        . If you want to see how rising prices affect household resilience, the{" "}
        <Link href="/calculators/emergency-fund-calculator-uk">emergency fund calculator</Link>{" "}
        can help you update your target.
      </p>

      <h2>The formula explained in plain English</h2>
      <p>
        The method is compound growth. The formula is future cost equals today's amount multiplied by one plus the
        annual inflation rate, raised to the number of years. With 3% inflation, the multiplier after one year is
        1.03. After two years it is 1.03 multiplied by 1.03. That second increase is applied to the already higher
        price, which is why inflation over several years is not just the annual rate multiplied by the number of
        years.
      </p>
      <p>
        The Office for National Statistics publishes official UK inflation measures, including CPI and CPIH. Those
        figures are averages across a basket of goods and services. Your personal inflation can differ if you spend
        more than average on rent, fuel, childcare, food or energy. Treat this calculator as a flexible scenario
        tool. Put in the rate you want to test, then adjust it to see how sensitive your budget is.
      </p>

      <h2>Worked example</h2>
      <p>
        Suppose a household spends £1,000 a month on a mix of food, bills and transport. If those costs rose by 3%
        a year for 5 years, the future monthly cost would be £1,159.27. That is an extra £159.27 a month. The same
        £1,000 kept as cash would have buying power of about £862.61 in today's terms after those 5 years. This is
        why inflation matters when planning longer goals, such as a deposit, retirement pot or emergency savings.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        The first mistake is using the latest inflation figure as if it will stay fixed for years. Inflation moves
        around. A single rate is useful for a scenario, not a promise. The second mistake is ignoring compounding.
        Small annual increases can become meaningful when they stack up year after year. The third mistake is
        comparing savings interest with inflation before tax, fees or account limits. For savings and ISA planning,
        read our{" "}
        <Link href="/blog/compound-interest-explained-uk">compound interest explained guide</Link>{" "}
        and{" "}
        <Link href="/blog/isa-guide-uk-2026-27">ISA guide UK 2026/27</Link>
        .
      </p>

      <h2>Related calculators</h2>
      <p>
        Use the{" "}
        <Link href="/calculators/compound-interest-calculator-uk">compound interest calculator</Link>{" "}
        to compare inflation with savings growth. The{" "}
        <Link href="/calculators/savings-goal-calculator-uk">savings goal calculator</Link>{" "}
        helps turn a future price into a monthly saving target. The{" "}
        <Link href="/calculators/emergency-fund-calculator-uk">emergency fund calculator</Link>{" "}
        is useful when bills have risen and your old safety buffer no longer feels enough.
      </p>
    </div>
  );
}
