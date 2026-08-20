import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "who-pays-it", label: "Who pays Corporation Tax" },
  { id: "small-profits-rate", label: "The small profits rate" },
  { id: "main-rate-and-marginal-relief", label: "The main rate and marginal relief" },
  { id: "how-marginal-relief-works", label: "How marginal relief is calculated" },
  { id: "what-reduces-taxable-profit", label: "What reduces your taxable profit" },
  { id: "worked-example", label: "Worked example: £100,000 profit" },
  { id: "paying-and-filing", label: "Paying and filing Corporation Tax" },
  { id: "corporation-tax-and-your-pay", label: "Corporation Tax and how you pay yourself" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "What is the Corporation Tax rate for small UK companies in 2026/27?",
    answer:
      "Companies with profits up to £50,000 pay the small profits rate of 19%. Companies with profits above £250,000 pay the main rate of 25%. Profits in between are taxed at 25% minus marginal relief, which tapers the effective rate smoothly between the two.",
  },
  {
    question: "What is marginal relief and how does it work?",
    answer:
      "Marginal relief reduces your Corporation Tax bill if your profit falls between £50,000 and £250,000, so you don't jump straight from 19% to 25% at £50,001. It's calculated using a standard HMRC formula, and our Corporation Tax Calculator works it out automatically once you enter your profit.",
  },
  {
    question: "Do the £50,000 and £250,000 limits change if I have more than one company?",
    answer:
      "Yes. If you own more than one active company, known as associated companies, the £50,000 and £250,000 thresholds are divided between them. Two associated companies, for example, would each have a £25,000 lower limit and a £125,000 upper limit rather than the full figures.",
  },
  {
    question: "When do I need to pay Corporation Tax?",
    answer:
      "Corporation Tax is due 9 months and 1 day after the end of your company's accounting period. So if your accounting period ends on 31 March, your payment deadline is 1 January the following year, ahead of when your Company Tax Return itself is due.",
  },
  {
    question: "Is Corporation Tax charged on turnover or profit?",
    answer:
      "Profit, not turnover. Corporation Tax is charged on your company's taxable profit after deducting allowable business expenses, capital allowances and any losses brought forward, not on the total money coming into the business.",
  },
  {
    question: "How does Corporation Tax affect how much I can pay myself?",
    answer:
      "Dividends can only be paid from profit that's already had Corporation Tax deducted, so it's paid before you decide how to extract money as salary or dividends. Working out your Corporation Tax bill first tells you how much distributable profit is actually left for you to draw from.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        If you run a UK limited company, Corporation Tax is one of the few bills you
        can't avoid, but working out exactly how much you'll owe isn't always
        straightforward once your profit sits in that awkward middle ground between
        £50,000 and £250,000. Our{" "}
        <Link href="/calculators/corporation-tax-calculator-uk">
          Corporation Tax Calculator
        </Link>{" "}
        does the sum for you, including marginal relief, but here's how the rates and
        thresholds actually fit together.
      </p>

      <h2 id="who-pays-it">Who pays Corporation Tax</h2>
      <p>
        Corporation Tax is charged on the taxable profits of UK limited companies,
        as well as some clubs, co-operatives and other unincorporated associations.
        Sole traders and ordinary partnerships don't pay it, they pay Income Tax and
        National Insurance on their profits instead, which works quite differently.
        If you're weighing up a limited company against staying a sole trader, our
        guide to{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          UK self-employed tax
        </Link>{" "}
        covers how that side of things works.
      </p>

      <h2 id="small-profits-rate">The small profits rate</h2>
      <p>
        For 2026/27, companies with taxable profits of £50,000 or less pay the small
        profits rate of 19%. This covers a large share of small limited companies,
        particularly newer businesses or those run alongside another job. There's no
        separate claim needed, if your profit falls under the threshold, the lower
        rate applies automatically when you file your Company Tax Return.
      </p>

      <h2 id="main-rate-and-marginal-relief">The main rate and marginal relief</h2>
      <p>
        Once taxable profit goes above £250,000, the full main rate of 25% applies to
        all of it. Between £50,000 and £250,000, rather than a sudden jump from 19% to
        25%, marginal relief tapers the effective rate gradually upwards, so a company
        with profit just over £50,000 pays only slightly more than 19%, not
        immediately 25%.
      </p>
      <RateTable
        caption="UK Corporation Tax rates and thresholds, 2026/27"
        columns={["Taxable profit", "Rate"]}
        rows={[
          ["Up to £50,000", "19% (small profits rate)"],
          ["£50,001 to £250,000", "25% minus marginal relief"],
          ["Above £250,000", "25% (main rate)"],
        ]}
        highlightLastRow
      />

      <h2 id="how-marginal-relief-works">How marginal relief is calculated</h2>
      <p>
        HMRC's marginal relief formula is: (Upper Limit minus your taxable profit),
        multiplied by the standard marginal relief fraction of 3/200, which is then
        deducted from the Corporation Tax you'd otherwise owe at the 25% main rate.
        It looks fiddly written out, but the effect is simple: the closer your profit
        is to £50,000, the more relief you get; the closer it is to £250,000, the
        less relief applies, until it disappears entirely and you're paying the full
        25%.
      </p>

      <h2 id="what-reduces-taxable-profit">What reduces your taxable profit</h2>
      <p>
        Corporation Tax is charged on taxable profit, not on turnover, so what counts
        as an allowable deduction makes a real difference to the final bill. Ordinary
        running costs, such as staff wages, rent, utilities, professional fees and
        stock, are deducted before profit is worked out in the first place. On top of
        that, capital allowances let you deduct the cost of qualifying equipment,
        such as computers, tools, or vehicles, from your taxable profit rather than
        spreading the cost over several years, up to the Annual Investment Allowance
        limit. Losses can help too. If your company makes a loss in one accounting
        period, that loss can usually be carried back against the previous year's
        profit or carried forward against future profits, reducing the tax due in
        those years. Exactly what qualifies, and how much you can claim, depends on
        your specific circumstances, so it's worth checking with an accountant rather
        than assuming a cost is deductible.
      </p>

      <h2 id="worked-example">Worked example: £100,000 profit</h2>
      <p>
        Take a company with £100,000 of taxable profit for the year, comfortably in
        the marginal relief band.
      </p>
      <RateTable
        caption="Worked example: £100,000 taxable profit"
        columns={["Step", "Amount"]}
        rows={[
          ["Tax at the main rate (25%)", "£25,000"],
          ["Upper limit minus profit (£250,000 - £100,000)", "£150,000"],
          ["Marginal relief (£150,000 × 3/200)", "£2,250"],
          ["Corporation Tax owed", "£22,750"],
          ["Effective rate", "22.75%"],
        ]}
        highlightLastRow
      />
      <p>
        Without marginal relief, this company would have paid £25,000. With it, the
        bill drops to £22,750, a saving of £2,250. Compare that to a company with
        £40,000 profit, comfortably under the £50,000 threshold, which pays a flat
        19%, or £7,600, with no marginal relief calculation needed at all. Enter your
        own figures into our{" "}
        <Link href="/calculators/corporation-tax-calculator-uk">
          Corporation Tax Calculator
        </Link>{" "}
        to see exactly where your company lands.
      </p>

      <CalloutBox
        title="Work out your Corporation Tax bill"
        description="Enter your company's taxable profit for an instant calculation, including marginal relief if your profit falls between £50,000 and £250,000."
        href="/calculators/corporation-tax-calculator-uk"
        cta="Calculate my Corporation Tax"
      />

      <h2 id="paying-and-filing">Paying and filing Corporation Tax</h2>
      <p>
        Corporation Tax is due 9 months and 1 day after the end of your company's
        accounting period, ahead of the Company Tax Return itself, which is due 12
        months after the period ends. That means the payment deadline usually arrives
        before the return confirming the exact figure, so most companies estimate and
        pay based on their management accounts, then file the return to confirm it.
        Missing either deadline brings penalties and interest, so it's worth
        calendaring both dates as soon as your accounting period is set.
      </p>

      <h2 id="corporation-tax-and-your-pay">
        Corporation Tax and how you pay yourself
      </h2>
      <p>
        Corporation Tax is deducted from company profit before anything is left to
        distribute as dividends, so it directly affects how much you can pay
        yourself. Once you know your Corporation Tax bill, the next question most
        directors face is how to split the remaining profit between salary and
        dividends. Our guide to{" "}
        <Link href="/blog/salary-vs-dividends-uk-2026">Salary vs Dividends</Link>{" "}
        walks through how that works, and our{" "}
        <Link href="/calculators/dividend-vs-salary-calculator-uk">
          Dividend vs Salary Calculator
        </Link>{" "}
        compares take-home pay after Corporation Tax, Income Tax and National
        Insurance for both routes.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <ul>
        <li>
          <strong>Forgetting associated companies.</strong> If you control more than
          one active company, the £50,000 and £250,000 thresholds are shared between
          them, which can push a business into a higher effective rate sooner than
          expected.
        </li>
        <li>
          <strong>Paying dividends before working out Corporation Tax.</strong>{" "}
          Dividends can only come from profit after Corporation Tax, not before it, so
          working out your tax bill first with a{" "}
          <Link href="/calculators/break-even-calculator-uk">
            break-even calculator
          </Link>{" "}
          and a Corporation Tax estimate helps avoid declaring more than the company
          can actually afford.
        </li>
        <li>
          <strong>Missing the payment deadline because it comes before the return.</strong>{" "}
          Many first-time directors assume the payment and filing deadlines match, but
          payment is due a full 3 months earlier than the return itself.
        </li>
        <li>
          <strong>Not tracking profit margin through the year.</strong> Keeping an eye
          on your{" "}
          <Link href="/calculators/profit-margin-calculator-uk">
            profit margin
          </Link>{" "}
          as the year progresses makes it far easier to estimate your Corporation Tax
          bill in advance, rather than being surprised at year end.
        </li>
        <li>
          <strong>Not setting cash aside as profit builds up.</strong> Because
          Corporation Tax is paid in one lump sum months after your accounting period
          ends, it's easy to spend or distribute profit through the year and then
          find the tax bill lands before there's enough cash left to cover it. Many
          companies set aside roughly a fifth of profit as it's earned, so the eventual
          payment isn't a shock.
        </li>
      </ul>
      <p>
        For the sole trader alternative, where Income Tax and National Insurance
        replace Corporation Tax entirely, see our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>
        , and use our{" "}
        <Link href="/calculators/vat-calculator-uk">VAT Calculator</Link> if your
        company is VAT registered and you need to check figures separately from
        Corporation Tax.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
