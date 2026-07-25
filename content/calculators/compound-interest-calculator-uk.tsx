import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is compound interest in simple terms?",
    answer:
      "Compound interest is interest paid on your interest, not just on your original deposit. Each time interest is added, your balance grows, so the next round of interest is calculated on a bigger number. Over many years, this snowball effect can add up to far more than your original contributions.",
  },
  {
    question: "Does the compounding frequency really make a difference?",
    answer:
      "Yes, but usually a small one compared to the interest rate itself. Daily compounding grows your balance slightly faster than monthly, which is slightly faster than annual, because interest starts earning its own interest sooner. Over many years the gap can still add up to a noticeable amount.",
  },
  {
    question: "Is compound interest the same for savings accounts and ISAs?",
    answer:
      "The maths is the same, but ISAs add a tax advantage: any interest or growth inside a Cash ISA or Stocks and Shares ISA is tax free, up to your annual ISA allowance. A normal savings account may be taxed once your interest goes above your Personal Savings Allowance.",
  },
  {
    question: "How much should I save each month to hit a target?",
    answer:
      "It depends on your interest rate, how long you have, and your target amount. Try our savings goal calculator, which works this out the other way round: tell it your target and it estimates the monthly contribution and time needed.",
  },
  {
    question: "Does compound interest work against me on debt?",
    answer:
      "Yes, the same maths applies to debt, particularly credit cards, which is why balances can grow quickly if you only make minimum payments. Our credit card payoff calculator shows how much interest builds up over time on an unpaid balance.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the compound interest calculator</h2>
      <p>
        Enter how much you are starting with, how much you plan to add each month,
        your expected annual interest rate, how many years you are saving for, and
        how often the interest compounds. The calculator instantly shows your final
        balance, how much of that is your own money, and how much is interest earned
        on top.
      </p>
      <p>
        This tool is useful for planning almost any long term savings goal: an
        emergency fund, a house deposit, or simply seeing what your current savings
        habit could grow into over time. It also pairs well with our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>
        , which works backwards from a target amount to tell you how long it will
        take to get there.
      </p>

      <h2>What compound interest actually means</h2>
      <p>
        Simple interest pays you the same amount each year, based only on your
        original deposit. Compound interest is different. Once interest is added to
        your balance, it becomes part of the pot that earns the next round of
        interest. This means your money grows faster over time, especially over
        longer periods, because you are earning interest on your interest as well as
        on your original savings.
      </p>
      <p>
        The compounding frequency you choose, annually, monthly or daily, affects how
        often this happens. More frequent compounding means interest starts working
        for you sooner, though the difference between monthly and daily compounding
        is usually small compared with the effect of the interest rate itself.
      </p>
      <p>
        To put a number on that, take £5,000 saved with £200 added every month at 5%
        for 10 years. Compounding annually gives a final balance of around{" "}
        <strong>£39,143</strong>. Compounding monthly gives around{" "}
        <strong>£39,421</strong>. Compounding daily gives around{" "}
        <strong>£39,446</strong>. The gap between annual and daily compounding here
        is about £300, real money, but small next to the roughly £10,400 earned in
        interest overall. The interest rate you are offered matters far more than
        how often it compounds.
      </p>

      <h2>Why time matters more than almost anything else</h2>
      <p>
        Time is the most powerful ingredient in compound interest, more powerful
        than the interest rate in many real world cases. A lump sum of £10,000
        earning 5% a year, with no further contributions at all, grows to around{" "}
        <strong>£26,533</strong> after 20 years. Left for 30 years instead, it grows
        to around <strong>£43,219</strong>. That extra decade very nearly doubles
        the growth, simply because there is more time for interest to earn interest
        on itself.
      </p>
      <p>
        This is why starting early, even with small amounts, tends to beat waiting
        until you can save more but starting later. A pound saved in your twenties
        has decades longer to compound than a pound saved in your forties.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you start with <strong>£5,000</strong> and add{" "}
        <strong>£200 a month</strong>, at an annual interest rate of{" "}
        <strong>5%</strong>, compounding monthly, for <strong>10 years</strong>.
      </p>
      <p>
        Over that time you would pay in <strong>£29,000</strong> in total (your
        £5,000 start plus £200 a month for 120 months). But your final balance would
        be closer to <strong>£39,400</strong>, meaning you earned around{" "}
        <strong>£10,400</strong> in interest, roughly a third on top of what you paid
        in yourself. That extra money came entirely from compounding, not from your
        own contributions.
      </p>
      <p>
        Try changing the term to 20 years in the calculator above with the same
        numbers. The balance grows to around £96,000, more than double the 10 year
        figure, even though the monthly contribution has not changed at all. That
        difference is entirely down to compounding having twice as long to work.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming interest rates stay fixed for years at a time.
        Savings rates move with the wider economy, so treat any long term projection
        as a rough guide rather than a guarantee. It is also easy to forget tax: if
        your savings sit outside an ISA and your interest goes above your Personal
        Savings Allowance, some of that interest could be taxed, which this
        calculator does not account for. Finally, remember that regular
        contributions matter just as much as the interest rate. In the example above,
        stopping monthly contributions early would make a much bigger difference to
        your final balance than a small change in interest rate.
      </p>
      <p>
        Another mistake worth avoiding is comparing two savings products purely on
        their headline rate without checking how often they compound and whether the
        rate is fixed or variable. A slightly lower rate that compounds monthly can
        sometimes beat a slightly higher rate that only compounds annually, though
        the gap is usually modest. Always read the small print on whether a rate is
        guaranteed for a set period or can change at any time, since a rate that
        drops part way through your savings term will change your real world result
        compared with this calculator&apos;s projection.
      </p>
      <p>
        Once you know how your savings could grow, it is worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay</Link>{" "}
        to see how much you can realistically afford to save each month, and our{" "}
        <Link href="/blog/uk-income-tax-2026-27">income tax guide</Link> if you want
        to understand how tax affects the money you are setting aside in the first
        place.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are saving towards a house, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        and{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">mortgage deposit guide</Link>{" "}
        can help you work out how big a deposit you will need, and how a bigger
        deposit changes your monthly repayment. If you are carrying any debt
        alongside your savings, it is usually worth clearing higher interest debt
        first, since the interest rate on credit cards is normally far higher than
        anything a savings account will pay you.
      </p>
    </div>
  );
}
