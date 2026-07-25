import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Is the 4% drawdown rule accurate?",
    answer:
      "It is a widely used rule of thumb, not a guarantee. It suggests that withdrawing around 4% of your pension pot in the first year of retirement, then adjusting that amount for inflation each year after, has historically had a good chance of making a pot last 25 to 30 years. Actual safe withdrawal rates depend heavily on investment returns and inflation after you retire, so treat this as a starting point for a conversation, not a fixed answer.",
  },
  {
    question: "How much pension will I need to retire comfortably?",
    answer:
      "This varies enormously by lifestyle and location, but industry bodies such as the Pensions and Lifetime Savings Association publish regularly updated Retirement Living Standards that suggest rough annual income figures for a minimum, moderate or comfortable retirement. Enter your own target annual income into the calculator above to see how your projected pot compares.",
  },
  {
    question: "Does this calculator include the State Pension?",
    answer:
      "The main projection covers only your private or workplace pension pot. The result also shows the new State Pension separately, currently up to £12,534.60 a year for people with a full 35-year National Insurance record, added to your projected private pension income to give a combined estimate.",
  },
  {
    question: "What if my employer does not match my pension contributions?",
    answer:
      "Set the employer contribution field to whatever your workplace actually pays, including £0 if you are self-employed or your employer only pays the legal minimum on a lower band of earnings. Many employers match or exceed the statutory minimum, so it is worth checking your own pension scheme documents or asking HR for your exact contribution rate.",
  },
  {
    question: "Should I increase my pension contributions?",
    answer:
      "If your projection shows a gap against your target income, increasing your contribution rate, even by a small percentage, tends to make a bigger difference the earlier you do it, thanks to compounding over the remaining years to retirement. Pension contributions also usually reduce your Income Tax bill, since most schemes deduct contributions before tax is calculated.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. This calculator gives a general, illustrative projection based on the figures you enter and a set of simplifying assumptions. It is not personalised financial advice. For a plan tailored to your own circumstances, speak to a financial adviser regulated by the Financial Conduct Authority (FCA).",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Most people have a rough idea of how much is in their pension today,
        but a much fuzzier idea of what that pot might actually be worth by
        the time they retire, or what income it could realistically provide.
        This calculator projects your pension pot forward to your chosen
        retirement age, using your current savings, ongoing contributions and
        an expected rate of return, then estimates a possible annual income
        using the well-known 4% drawdown rule.
      </p>

      <h2>How to use the pension calculator</h2>
      <p>
        Enter your current age, the age you plan to retire, your current
        pension pot, your own monthly contribution, your employer&apos;s monthly
        contribution, and the annual return you expect your investments to
        achieve. The calculator then projects your pot at retirement, splits
        it between what you contributed and what came from investment growth,
        and estimates a possible annual and monthly income in retirement.
      </p>
      <p>
        It is worth entering your target annual income too, so the calculator
        can show whether your current plan is on track or whether there is a
        gap. Running the numbers a few different ways, with a slightly higher
        contribution or a later retirement age, often shows how much
        difference a relatively small change can make over a long time
        horizon.
      </p>

      <h2>How the projection works</h2>
      <p>
        Each month, your combined personal and employer contributions are
        added to your pot, then growth is applied to the new, larger balance,
        the same compounding principle used by our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          compound interest calculator
        </Link>
        . This repeats every month until your chosen retirement age. Once the
        projected pot is calculated, the 4% rule is applied to estimate a
        sustainable starting annual income: 4% of your pot in the first year
        of retirement, with the expectation that this amount would be
        adjusted for inflation in later years.
      </p>
      <p>
        The 4% figure comes from historical research into how withdrawal
        rates have performed against past investment returns and inflation
        over long retirement periods. It is a helpful planning benchmark
        rather than a promise, since future returns, inflation and how long
        your retirement lasts can all differ from the historical periods the
        rule was built on.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone aged <strong>30</strong>, planning to retire at{" "}
        <strong>67</strong>, a gap of 37 years. They currently have{" "}
        <strong>£15,000</strong> in their pension, pay in{" "}
        <strong>£300 a month</strong> themselves, and their employer adds a
        further <strong>£200 a month</strong>, with an assumed{" "}
        <strong>5%</strong> average annual return.
      </p>
      <p>
        Over 37 years, the calculator projects a pension pot of around{" "}
        <strong>£737,950</strong>. Applying the 4% rule to that pot suggests a
        starting annual income of roughly{" "}
        <strong>£29,518</strong>, or about <strong>£2,460 a month</strong>,
        before the State Pension is added on top. For someone with a full
        National Insurance record, the new State Pension currently adds up to
        a further £12,534.60 a year, taking a combined estimated income to
        somewhere in the region of £42,000 a year.
      </p>
      <p>
        Try lowering the assumed return to 3% in the calculator above with the
        same contributions. The projected pot falls noticeably, which shows
        how sensitive long-term projections are to the return assumption, and
        why it is worth being realistic rather than optimistic when choosing
        a figure to plan around.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A frequent mistake is assuming investment returns will be smooth and
        consistent every year. In reality, pension investments can rise and
        fall considerably from one year to the next, especially if invested
        heavily in shares, even though the long-term average may land close
        to the figure you enter. Treat any projection as a rough guide across
        decades, not a precise forecast for any single year.
      </p>
      <p>
        It is also easy to underestimate how much a small increase in
        contributions matters when there are many years left until
        retirement. Because of compounding, an extra 1% or 2% of salary paid
        in during your thirties can end up worth considerably more at
        retirement than the same percentage increase started in your
        fifties, simply because it has so much longer to grow.
      </p>
      <p>
        Finally, do not forget to check your pension charges. Annual
        management fees, even ones that look small, such as 1% versus 0.5%,
        compound in the same way your contributions do, and can meaningfully
        reduce your final pot over several decades. This calculator does not
        account for charges, so treat its output as a before-fees estimate.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you would rather save outside a pension wrapper, our{" "}
        <Link href="/calculators/isa-calculator-uk">ISA calculator</Link>{" "}
        shows how a Stocks and Shares or Lifetime ISA could grow tax-free
        instead. Our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          compound interest calculator
        </Link>{" "}
        breaks down the same underlying growth maths in more detail, and
        checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay
        </Link>{" "}
        will help you see how much room you realistically have to increase
        your pension contributions. For more on how pension contributions
        interact with tax, see our{" "}
        <Link href="/blog/uk-income-tax-2026-27">income tax guide</Link>, and
        for the maths behind long-term growth, read our guide to{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest
        </Link>
        .
      </p>
    </div>
  );
}
