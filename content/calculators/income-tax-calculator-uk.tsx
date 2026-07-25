import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the personal allowance?",
    answer:
      "The personal allowance is the amount you can earn each tax year before you start paying any Income Tax — currently £12,570. It's gradually withdrawn for very high earners: for every £2 you earn above £100,000, you lose £1 of allowance, until it disappears completely once your income reaches £125,140.",
  },
  {
    question: "What are the current UK Income Tax bands?",
    answer:
      "In England, Wales and Northern Ireland, the basic rate is 20% on taxable income up to £37,700 above your personal allowance, the higher rate is 40% up to £125,140, and the additional rate is 45% above that. Scotland uses a six-band system with a starter rate of 19% and a top rate of 48%, on the same £12,570 personal allowance.",
  },
  {
    question: "Why does Scotland have different tax bands?",
    answer:
      "Income Tax on non-savings, non-dividend income (like salary) was partially devolved to the Scottish Parliament in 2016, allowing it to set its own rates and thresholds separately from the rest of the UK. National Insurance, by contrast, remains reserved to the UK Parliament and is the same everywhere.",
  },
  {
    question: "Is this the same as my take-home pay?",
    answer:
      "No — this calculator shows Income Tax only. Your actual take-home pay is also affected by National Insurance, pension contributions, and student loan repayments if applicable. Use our take-home pay calculator for the fuller picture including all of these deductions.",
  },
  {
    question: "Do I pay tax on savings and dividend income at the same rates?",
    answer:
      "No — savings interest and dividend income have their own separate tax-free allowances and rates (the Personal Savings Allowance and Dividend Allowance), which sit alongside but work differently from the main Income Tax bands used here for salary and other non-savings income.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the Income Tax calculator</h2>
      <p>
        Enter your annual income and select your region — England, Wales and Northern
        Ireland share the same Income Tax bands, while Scotland has its own separate
        structure. The calculator shows your personal allowance, taxable income, and a
        full breakdown of how much tax you pay in each band, along with your total
        Income Tax bill and effective (average) tax rate.
      </p>
      <p>
        This is a focused calculator that isolates Income Tax on its own — useful if
        you want to understand exactly how HMRC&apos;s banding system works, check a payslip,
        or plan around a pay rise, bonus, or new income source without pension and
        National Insurance deductions muddying the picture.
      </p>

      <h2>How UK Income Tax bands work</h2>
      <p>
        Income Tax in the UK is progressive and banded — you don&apos;t pay one flat
        rate on your whole income. Instead, your personal allowance (£12,570) is
        tax-free, then each band of taxable income above that is taxed at its own rate.
        For England, Wales and Northern Ireland: the basic rate of 20% applies to the
        first £37,700 of taxable income above your allowance, the higher rate of 40%
        applies to the next portion up to £125,140 of total income, and the additional
        rate of 45% applies above that.
      </p>
      <p>
        Scotland uses a more granular six-band system on the same personal allowance:
        a 19% starter rate, 20% basic rate, 21% intermediate rate, 42% higher rate, 45%
        advanced rate, and 48% top rate, with each band applying to a progressively
        smaller slice of income as you move up.
      </p>

      <h2>Worked example</h2>
      <p>
        Someone earning <strong>£55,000</strong> in England has a personal allowance of{" "}
        <strong>£12,570</strong>, leaving <strong>£42,430</strong> of taxable income.
        The first £37,700 of that is taxed at the basic rate of 20%, giving{" "}
        <strong>£7,540</strong>. The remaining £4,730 falls into the higher-rate band
        and is taxed at 40%, adding <strong>£1,892</strong>. Total Income Tax comes to{" "}
        <strong>£9,432</strong> — an effective rate of about 17.2% of the full £55,000
        salary, even though part of it is taxed at 40%.
      </p>
      <p>
        The same £55,000 salary in Scotland would be taxed slightly differently across
        the starter, basic, intermediate and higher bands, typically resulting in a
        somewhat higher total bill than in the rest of the UK at this income level,
        because Scotland&apos;s higher-rate threshold sits lower and its higher rate (42%) is
        applied sooner.
      </p>

      <h2>The personal allowance taper for high earners</h2>
      <p>
        If your income exceeds £100,000, your personal allowance starts shrinking — you
        lose £1 of allowance for every £2 you earn above that threshold. This creates an
        effective marginal tax rate of 60% on income between £100,000 and £125,140 in
        England, Wales and Northern Ireland, because you&apos;re paying 40% tax while
        simultaneously losing tax-free allowance. By £125,140, the personal allowance is
        gone entirely and every pound is taxed at the standard higher or additional
        rates.
      </p>

      <h2>Common questions when checking your tax</h2>
      <p>
        A common point of confusion is mixing up your tax code with the bands used here —
        most people have the standard 1257L code, reflecting the £12,570 personal
        allowance, but an emergency, adjusted, or BR/D0 code changes how much tax is
        deducted. It&apos;s also worth remembering this calculator covers salary-type income
        only; savings interest, dividends, and rental income each have their own separate
        tax treatment and allowances.
      </p>

      <h2>Related calculators</h2>
      <p>
        For the complete picture including National Insurance, pension contributions and
        student loan repayments, use our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay calculator</Link>.
        If you&apos;re self-employed or comparing a house purchase, our{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">stamp duty calculator</Link> and{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link> can help
        you plan the bigger picture.
      </p>
    </div>
  );
}
