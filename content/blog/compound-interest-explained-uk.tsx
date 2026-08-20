import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-compound-interest", label: "What is compound interest?" },
  { id: "simple-vs-compound", label: "Simple interest vs compound interest" },
  { id: "the-formula", label: "The compound interest formula" },
  { id: "time-advantage", label: "Why time matters more than the rate" },
  { id: "compounding-frequency", label: "Does compounding frequency matter?" },
  { id: "against-you", label: "When compound interest works against you" },
  { id: "worked-example", label: "Worked example" },
  { id: "how-to-use-it", label: "Putting compounding to work" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the compound interest calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "What is compound interest in the simplest possible terms?",
    answer:
      "Compound interest is interest earned on your interest, not just on the money you originally put in. Each time interest is added to your balance, that interest becomes part of the pot that earns the next round of interest. Over many years, this snowball effect means your money grows faster and faster, even if you never add another pound of your own.",
  },
  {
    question: "How much difference does compounding frequency actually make?",
    answer:
      "Less than most people expect. Daily compounding grows your balance slightly faster than monthly, which is slightly faster than annual, because interest starts earning its own interest sooner. But over a typical savings term, the gap between monthly and daily compounding is usually small compared with the effect of the interest rate itself or how long you leave the money invested.",
  },
  {
    question: "Why does starting early matter so much for compound interest?",
    answer:
      "Because compounding needs time to do its work. A pound saved in your twenties has decades longer to compound than a pound saved in your forties, even if the later saver puts in more money each month. This is why financial advisers consistently emphasise starting as early as possible, even with small amounts, over waiting until you can save a larger sum.",
  },
  {
    question: "Is compound interest the same in an ISA as in a normal savings account?",
    answer:
      "The underlying maths is identical. The difference is tax: growth inside an ISA is completely free of Income Tax and Capital Gains Tax, up to your annual ISA allowance, while a standard savings account can be taxed once your interest goes above your Personal Savings Allowance. Our ISA calculator shows how this plays out for your own numbers.",
  },
  {
    question: "Can compound interest work against me?",
    answer:
      "Yes, and this is the side most people don't think about. The same compounding maths applies to debt, particularly credit cards and other high-interest borrowing. If you only make minimum payments, unpaid interest gets added to your balance and starts earning its own interest, which is why credit card debt can grow alarmingly quickly if left unmanaged.",
  },
  {
    question: "How much should I save each month to reach a specific goal?",
    answer:
      "It depends on your interest rate, your timeframe, and your target amount. Our savings goal calculator works this out the other way round from the compound interest calculator: tell it your target and it estimates how long different monthly contributions would take to get you there.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Albert Einstein is often (probably wrongly) credited with calling
        compound interest the eighth wonder of the world. Whoever actually
        said it, the underlying point holds up: compound interest is one of
        the few genuinely powerful forces in personal finance that works
        quietly in the background, without requiring you to do anything
        clever, take on extra risk, or time the market.
      </p>
      <p>
        This guide explains exactly how compound interest works, the formula
        behind it, why time matters more than almost any other factor, and
        why the same maths that can build your savings can also grow your
        debt if you&apos;re not careful. It sits in our{" "}
        <Link href="/categories/finance">Finance category</Link>, alongside
        our other savings and investment calculators.
      </p>

      <CalloutBox
        title="See your own numbers grow"
        description="Enter your starting balance, monthly contribution and interest rate to see exactly how your savings could grow."
        href="/calculators/compound-interest-calculator-uk"
        cta="Open the calculator"
      />

      <h2 id="what-is-compound-interest">What is compound interest?</h2>
      <p>
        Compound interest is interest calculated on your original amount{" "}
        <strong>plus</strong> any interest already added to it. Contrast this
        with simple interest, which is always calculated only on your
        original amount, no matter how much interest has built up over time.
      </p>
      <p>
        The practical effect is that a compounding balance grows at an
        accelerating pace. In the early years, the difference between simple
        and compound interest looks small. Given enough time, though, the gap
        becomes enormous, because compound interest is effectively earning
        interest on interest on interest, layer after layer, year after
        year.
      </p>

      <h2 id="simple-vs-compound">Simple interest vs compound interest</h2>
      <p>
        Take <strong>£1,000</strong> saved at <strong>5% a year</strong> for{" "}
        <strong>10 years</strong>, to see the difference directly.
      </p>
      <RateTable
        caption="Simple interest vs compound interest on £1,000 at 5% over 10 years"
        columns={["Method", "Interest earned", "Final balance"]}
        rows={[
          ["Simple interest", "£500", "£1,500"],
          ["Compound interest (annual)", "£628.89", "£1,628.89"],
        ]}
        highlightLastRow
      />
      <p>
        With simple interest, you earn exactly £50 a year, every year, for 10
        years, giving £500 in total. With compound interest, each year&apos;s
        interest is calculated on a slightly bigger balance than the year
        before, since last year&apos;s interest is now part of the pot. The
        result is £628.89 in interest instead of £500, almost 26% more, from
        the exact same starting amount, rate and term.
      </p>

      <h2 id="the-formula">The compound interest formula</h2>
      <p>
        The standard compound interest formula, for a lump sum with no
        further contributions, is:
      </p>
      <p>
        <strong>A = P &times; (1 + r/n)</strong>
        <sup>n &times; t</sup>
      </p>
      <ul>
        <li><strong>A</strong> is the final amount</li>
        <li><strong>P</strong> is your starting principal (the amount you begin with)</li>
        <li><strong>r</strong> is the annual interest rate, as a decimal (5% becomes 0.05)</li>
        <li><strong>n</strong> is how many times per year interest compounds (12 for monthly, 365 for daily, 1 for annually)</li>
        <li><strong>t</strong> is the number of years</li>
      </ul>
      <p>
        If you also add regular monthly contributions, as most people
        realistically do, the formula becomes more complex, since each
        contribution compounds for a different length of time depending on
        when it was paid in. This is exactly why a calculator is genuinely
        useful here rather than a mental shortcut: our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          compound interest calculator
        </Link>{" "}
        runs the full month-by-month calculation for you, including regular
        contributions, in an instant.
      </p>

      <h2 id="time-advantage">Why time matters more than almost anything else</h2>
      <p>
        Time is the single most powerful ingredient in compound interest,
        more powerful in many real cases than the interest rate itself. To
        show this clearly, take three people who each save{" "}
        <strong>£200 a month</strong> at an assumed{" "}
        <strong>7% annual return</strong>, all the way to age 65, but who
        start at different ages.
      </p>
      <RateTable
        caption="Starting age vs final balance, saving £200 a month at 7% until age 65"
        columns={["Starting age", "Years saving", "Total contributed", "Final balance"]}
        rows={[
          ["20", "45 years", "£108,000", "£762,944"],
          ["30", "35 years", "£84,000", "£362,312"],
          ["40", "25 years", "£60,000", "£162,959"],
        ]}
        highlightLastRow
      />
      <p>
        The person who started at 20 contributed only £24,000 more in total
        than the person who started at 30, yet ends up with over{" "}
        <strong>£400,000 more</strong>. The person who started at 40
        contributed almost as much as the person who started at 30, but ends
        up with less than half the final balance. Every ten years you delay
        starting costs you far more than the extra contributions you might
        make up for later, simply because compounding needs time to build
        momentum.
      </p>
      <p>
        This is the single biggest lesson compound interest teaches: starting
        early with a modest, sustainable amount tends to beat waiting until
        you can afford to save a lot, then starting later.
      </p>

      <h2 id="compounding-frequency">Does compounding frequency actually matter?</h2>
      <p>
        Savings products often advertise different compounding frequencies:
        annual, monthly, or daily. It is a smaller factor than most people
        assume, though it is a real one. Take £5,000 saved with £200 added
        every month at 5% for 10 years.
      </p>
      <RateTable
        caption="Compounding frequency comparison: £5,000 plus £200 a month at 5% for 10 years"
        columns={["Frequency", "Final balance"]}
        rows={[
          ["Annually", "£39,143"],
          ["Monthly", "£39,421"],
          ["Daily", "£39,446"],
        ]}
      />
      <p>
        The gap between annual and daily compounding here is around £300,
        real money, but small next to the roughly £10,400 earned in interest
        overall across the 10 years. In practice, the interest rate you are
        offered, and how long you save for, both matter far more than
        whether a product compounds monthly or daily.
      </p>

      <h2 id="against-you">When compound interest works against you</h2>
      <p>
        The same compounding maths that grows your savings can grow your
        debt, and this is the side of compound interest that catches many
        people out. Credit cards are the clearest example: if you only make
        the minimum payment each month, a portion of your payment covers the
        interest that has built up, and only the remainder actually reduces
        your balance. Unpaid interest doesn&apos;t just sit there either, it
        gets added to your balance and starts earning its own interest the
        following month.
      </p>
      <p>
        Take a <strong>£3,000</strong> credit card balance at{" "}
        <strong>24% APR</strong>, paying only a typical{" "}
        <strong>2.5% of the balance</strong> as a minimum payment each month.
        At that pace, it takes around <strong>301 months</strong>, just over{" "}
        <strong>25 years</strong>, to clear the balance completely, and you
        would pay roughly <strong>£9,032</strong> in interest along the way,
        about three times the original balance, just to pay off £3,000.
      </p>
      <p>
        Our{" "}
        <Link href="/calculators/credit-card-payoff-calculator-uk">
          credit card payoff calculator
        </Link>{" "}
        shows exactly how much faster (and cheaper) it is to pay more than
        the minimum. Even a modest increase in your monthly payment can cut
        years off the payoff time and save a substantial amount of interest,
        precisely because you are working against the same compounding
        effect that otherwise keeps growing your balance.
      </p>

      <h2 id="worked-example">Worked example: building up savings</h2>
      <p>
        Say you start with <strong>£5,000</strong> and add{" "}
        <strong>£200 a month</strong>, at an annual interest rate of{" "}
        <strong>5%</strong>, compounding monthly, for <strong>10
        years</strong>.
      </p>
      <p>
        Over that time you would pay in <strong>£29,000</strong> in total
        (your £5,000 start plus £200 a month for 120 months). Your final
        balance would be closer to <strong>£39,400</strong>, meaning you
        earned around <strong>£10,400</strong> in interest, roughly a third
        on top of what you paid in yourself, entirely from compounding
        rather than your own contributions.
      </p>
      <p>
        Now extend the same example to 20 years in the calculator above,
        keeping every other input the same. The balance grows to around{" "}
        <strong>£96,000</strong>, more than double the 10-year figure, even
        though the monthly contribution never changed. That extra growth is
        entirely down to compounding having twice as long to work, which
        again shows why time, more than almost any other single input,
        drives the final outcome.
      </p>

      <h2 id="how-to-use-it">Putting compounding to work for you</h2>
      <p>
        The practical takeaways from all of this are fairly simple. Start as
        early as you realistically can, even with a small amount, since time
        is the hardest variable to make up for later. Choose tax-efficient
        homes for your savings and investments where possible, such as a{" "}
        <Link href="/calculators/isa-calculator-uk">
          Cash or Stocks and Shares ISA
        </Link>{" "}
        (see our{" "}
        <Link href="/blog/isa-guide-uk-2026-27">full ISA guide</Link> for how the
        different types compare), so compounding growth isn&apos;t eroded by tax
        along the way. And
        keep contributing regularly rather than saving in occasional lump
        sums, since consistent monthly contributions give compounding more
        opportunities to work throughout the year.
      </p>
      <p>
        On the flip side, clear high-interest debt as quickly as you
        reasonably can. Credit cards and similarly priced borrowing almost
        always carry a far higher interest rate than any savings account will
        pay you, so paying down debt first, before building up savings
        beyond an emergency fund, is usually the better order of priorities
        mathematically.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
