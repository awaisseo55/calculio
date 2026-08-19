import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-the-split", label: "What is the salary/dividend split?" },
  { id: "why-directors-do-this", label: "Why directors use this strategy" },
  { id: "how-salary-is-taxed", label: "How salary is taxed" },
  { id: "how-dividends-are-taxed", label: "How dividends are taxed" },
  { id: "worked-example", label: "Worked example: £10,000 either way" },
  { id: "small-salary-approach", label: "The small salary approach" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "Is it still worth taking dividends instead of salary in 2026/27?",
    answer:
      "For most limited company directors, yes, a mix of a small salary and dividends still usually beats an all-salary approach, mainly because dividends aren't subject to National Insurance. The gap has narrowed over recent years as dividend tax rates have risen and the dividend allowance has shrunk to £500, so it's worth checking the numbers for your own situation rather than assuming, but the underlying maths still tends to favour a split for most director-shareholders.",
  },
  {
    question: "What salary should I pay myself as a limited company director?",
    answer:
      "A common approach is to pay a salary around the National Insurance Secondary Threshold, which keeps employer National Insurance at zero while still counting as a qualifying year for your State Pension. Above that, most directors switch to dividends. The exact optimal figure depends on your Personal Allowance, other income and your company's profits, so it's worth checking with an accountant rather than copying a generic figure.",
  },
  {
    question: "Do I still get a dividend allowance?",
    answer:
      "Yes, everyone gets a £500 tax-free dividend allowance for 2026/27, regardless of what income tax band you're in. Once your dividend income for the year goes above that, the excess is taxed at your dividend rate, 10.75%, 35.75% or 39.35% depending on your total income.",
  },
  {
    question: "Does taking dividends affect my State Pension?",
    answer:
      "Dividends alone don't count towards your National Insurance record, only earnings that reach the Lower Earnings Limit do. This is exactly why many directors pay a small salary at or above that level even while taking most of their income as dividends, it keeps their State Pension qualifying years intact without paying much or any employer or employee National Insurance.",
  },
  {
    question: "Can HMRC challenge a salary/dividend split?",
    answer:
      "HMRC can challenge dividends that don't reflect genuine company profits, or arrangements that look designed purely to disguise what's really employment income (sometimes examined under IR35 or the settlements legislation). A straightforward director-shareholder taking a modest salary and dividends from real profits, with proper board minutes and dividend vouchers, is standard practice and not usually a concern, but the paperwork needs to be in order.",
  },
  {
    question: "Should I take advice before deciding?",
    answer:
      "For a one-off comparison, a calculator gives you a useful starting estimate. But your personal tax position, other income, pension contributions and company profit level all affect the right answer, so it's worth getting a few minutes of a qualified accountant's time before setting your actual salary and dividend policy for the year, particularly if the numbers involved are significant.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        If you run your own limited company, one of the first questions that comes up is
        simple to ask and surprisingly fiddly to answer properly: should you pay
        yourself a salary, take dividends, or some mix of both? The answer matters, a
        few thousand pounds a year in the wrong structure adds up fast, but the maths
        behind it involves three separate tax systems working together: Income Tax,
        National Insurance, and Corporation Tax. Here's how each one behaves, and how to
        work out roughly where you land.
      </p>

      <h2 id="what-is-the-split">What is the salary/dividend split?</h2>
      <p>
        As a director of your own limited company, you're both an employee and a
        shareholder. That means you can pay yourself in two different ways: a salary
        through PAYE, taxed like any other employment income, or dividends, which are a
        share of the company's after-tax profit paid out to shareholders. Most directors
        of small companies use a combination of both, a modest salary plus dividends
        topping up the rest, rather than putting all their income through one route.
      </p>

      <h2 id="why-directors-do-this">Why directors use this strategy</h2>
      <p>
        The short version: dividends aren't subject to National Insurance, salary is.
        Employees pay Class 1 National Insurance on salary above the Primary Threshold,
        and employers pay a separate Class 1 charge on top. Dividends sidestep both of
        those, though they're paid from profit that's already had Corporation Tax
        deducted, so the saving isn't as large as it first looks. Even so, for most
        director-shareholders, a salary and dividend mix usually works out more tax
        efficient than an all-salary approach, provided your company is genuinely
        profitable enough to support it.
      </p>

      <h2 id="how-salary-is-taxed">How salary is taxed</h2>
      <p>
        Salary you pay yourself through PAYE is taxed exactly like any other employee's
        pay. For 2026/27, the Personal Allowance is £12,570, meaning you pay no Income
        Tax on earnings up to that point (assuming you haven't lost any of it to the
        high-income tapering that applies above £100,000). Above the Personal Allowance,
        the basic rate of 20% applies up to £50,270, then 40% up to £125,140, then 45%
        above that. On top of Income Tax, employees pay 8% Class 1 National Insurance on
        earnings between £242 and £967 a week, and 2% above that. Your company also pays
        employer National Insurance at 15% on salary above the Secondary Threshold of
        £96 a week, a real cost to the business, not something deducted from your pay,
        but one that affects how much the company can afford to pay you overall.
      </p>

      <h2 id="how-dividends-are-taxed">How dividends are taxed</h2>
      <p>
        Dividends are paid from your company's profit after Corporation Tax has already
        been deducted, so in a sense they've already been taxed once before they reach
        you. On top of that, you pay dividend tax on anything above your £500 tax-free
        dividend allowance, at a rate that depends on your total income for the year.
      </p>
      <RateTable
        caption="UK dividend tax rates 2026/27"
        columns={["Band", "Dividend tax rate"]}
        rows={[
          ["Dividend allowance (first £500)", "0%"],
          ["Basic rate", "10.75%"],
          ["Higher rate", "35.75%"],
          ["Additional rate", "39.35%"],
        ]}
      />
      <p>
        Crucially, there's no National Insurance on dividends at all, for you or the
        company. That's the main reason the salary/dividend split exists as a strategy
        in the first place.
      </p>

      <h2 id="worked-example">Worked example: £10,000 either way</h2>
      <p>
        To see the difference in practice, compare what happens if your company pays you
        an extra £10,000 as salary versus as a dividend. This example looks only at the
        personal tax you'd pay on money reaching you directly, assuming you're already a
        basic rate taxpayer and have used your dividend allowance elsewhere; it doesn't
        fold in employer National Insurance or the Corporation Tax already paid on
        profit before it can be distributed, both of which are real costs but sit on the
        company's side of the equation, not yours.
      </p>
      <RateTable
        caption="Take-home on an extra £10,000, salary vs dividend, basic rate example"
        columns={["Route", "Tax taken", "You keep"]}
        rows={[
          ["£10,000 salary", "£2,000 Income Tax + £800 employee NI", "£7,200"],
          ["£10,000 dividend", "£1,075 dividend tax", "£8,925"],
        ]}
        highlightLastRow
      />
      <p>
        In this basic rate example, the dividend route leaves roughly £1,725 more in
        your pocket per £10,000. Your company would also pay an extra £1,500 in employer
        National Insurance to deliver £10,000 as salary, a further cost that doesn't
        apply to dividends, though salary and employer National Insurance both reduce
        the company's taxable profit, while dividends are paid after Corporation Tax has
        already been charged. The full picture depends on your company's profit level
        and your own tax band, which is exactly what our{" "}
        <Link href="/calculators/dividend-vs-salary-calculator-uk">
          Dividend vs Salary Calculator
        </Link>{" "}
        works out for your own numbers.
      </p>

      <CalloutBox
        title="Compare your own salary and dividend split"
        description="Enter your company's profit and see exactly how a salary, dividend, or mixed approach compares after Income Tax, National Insurance and Corporation Tax."
        href="/calculators/dividend-vs-salary-calculator-uk"
        cta="Compare salary vs dividends"
      />

      <h2 id="small-salary-approach">The small salary approach</h2>
      <p>
        Rather than choosing one extreme, most directors of small companies pay
        themselves a salary around the National Insurance Secondary Threshold, high
        enough to count as a qualifying year for the State Pension, but low enough that
        employer National Insurance stays at zero. Above that, they top up their income
        with dividends. This isn't a loophole, it's a standard, widely used structure
        that HMRC's own guidance acknowledges, provided the dividends genuinely reflect
        distributable company profit and the correct paperwork (board minutes and
        dividend vouchers) is kept for each payment.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <ul>
        <li>
          <strong>Declaring dividends the company can't actually afford.</strong>{" "}
          Dividends can only be paid from distributable profit. Paying one when the
          company doesn't have enough retained profit can create an illegal dividend,
          which HMRC and company law both treat seriously.
        </li>
        <li>
          <strong>Forgetting Corporation Tax comes first.</strong> Dividends come from
          profit after Corporation Tax, currently 19% for profits up to £50,000 and 25%
          above £250,000, with marginal relief in between. Our{" "}
          <Link href="/calculators/corporation-tax-calculator-uk">
            Corporation Tax Calculator
          </Link>{" "}
          can help you check how much your company owes before working out what's left
          to distribute.
        </li>
        <li>
          <strong>Not keeping paperwork.</strong> Every dividend needs a board minute and
          a dividend voucher showing the date, amount and shareholder, even in a
          one-person company. Skipping this is one of the most common issues HMRC flags
          on enquiry.
        </li>
        <li>
          <strong>Ignoring the wider picture.</strong> A salary counts towards pension
          contributions, mortgage affordability assessments and statutory pay
          entitlements in a way dividends don't always. The most tax-efficient split on
          paper isn't automatically the right one for your personal circumstances.
        </li>
      </ul>
      <p>
        For the tax side of the sole trader alternative to a limited company, see our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          UK self-employed tax guide
        </Link>
        , and check your own take-home either way with the{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          Take-Home Pay Calculator
        </Link>{" "}
        or the{" "}
        <Link href="/calculators/income-tax-calculator-uk">Income Tax Calculator</Link>.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
