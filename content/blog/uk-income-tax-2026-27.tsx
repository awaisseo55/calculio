import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-income-tax", label: "What is UK Income Tax?" },
  { id: "2026-27-bands", label: "2026/27 bands and rates" },
  { id: "personal-allowance-taper", label: "The Personal Allowance taper" },
  { id: "scotland-income-tax", label: "Scotland's different bands" },
  { id: "national-insurance", label: "National Insurance" },
  { id: "tax-codes", label: "Common tax codes explained" },
  { id: "reduce-income-tax", label: "How to reduce your tax legally" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your take-home pay" },
];

export const faq: FaqItem[] = [
  {
    question: "How much tax will I pay on £50,000 in the UK 2026?",
    answer:
      "On a £50,000 salary, your first £12,570 is tax-free (the Personal Allowance), and the remaining £37,430 falls entirely within the Basic Rate band, taxed at 20%. That works out at £7,486 in Income Tax. You'd also pay National Insurance separately on top of that.",
  },
  {
    question: "What is the 40% tax bracket in 2026/27?",
    answer:
      "The Higher Rate band covers gross income from £50,271 to £125,140 in England, Wales and Northern Ireland, taxed at 40%. Only the portion of your income within that band is taxed at 40%, not your entire salary.",
  },
  {
    question: "Do I pay tax on my first £12,570?",
    answer:
      "No, that's your Personal Allowance, and it's tax-free for most people. The exception is if you earn over £100,000 (the allowance shrinks) or if you're on an emergency or non-standard tax code that doesn't apply the allowance correctly, which is worth checking with HMRC or your payroll team.",
  },
  {
    question: "How does Scottish income tax differ from England?",
    answer:
      "Scotland uses six bands instead of three, starting with a 19% Starter Rate below the Basic Rate. Its Higher Rate (42%) and Top Rate (48%) both kick in at lower income levels than the equivalent rates in England, Wales and Northern Ireland, and are higher percentages too. In practice, this means most Scottish taxpayers earning above roughly £30,000 pay somewhat more Income Tax than someone on the same salary elsewhere in the UK.",
  },
  {
    question: "What is the 60% tax trap and how do I avoid it?",
    answer:
      "Between £100,000 and £125,140 of income, you lose £1 of Personal Allowance for every £2 you earn, on top of paying 40% tax on that income. The combined effect is an effective marginal tax rate of 60% on earnings in this band. Pension contributions or salary sacrifice can reduce your adjusted net income back below £100,000, restoring your full allowance.",
  },
  {
    question: "When do I have to file self-assessment?",
    answer:
      "You generally need to file a self-assessment return if you're self-employed, have income HMRC doesn't already collect tax on through PAYE (such as rental income or dividends above your allowances), or have other more complex tax affairs. You must register with HMRC by 5 October following the end of the relevant tax year, then file online and pay any tax owed by 31 January.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        How much of your salary actually reaches your bank account? Most people can
        name their gross salary instantly but have a much fuzzier idea of what they
        actually take home once Income Tax and National Insurance are deducted. If
        you&apos;re employed, this happens automatically through PAYE (Pay As You Earn)
        before you&apos;re ever paid. If you&apos;re self-employed or have other income, you
        report and pay it yourself through self-assessment.
      </p>
      <p>
        This guide breaks down exactly how UK Income Tax works for the 2026/27 tax
        year: the bands, the rates, Scotland&apos;s separate system, and the lesser-known
        60% trap that catches higher earners out. It sits in our{" "}
        <Link href="/categories/tax">Tax category</Link>, alongside our other HMRC-based
        calculators.
      </p>

      <CalloutBox
        title="See your exact net pay"
        description="Enter your salary, region and pension contribution for a full take-home pay breakdown."
        href="/calculators/take-home-pay-calculator-uk"
        cta="Open the calculator"
      />

      <h2 id="what-is-income-tax">What is UK Income Tax?</h2>
      <p>
        Income Tax is charged by HMRC on most types of income: salary, self-employment
        profits, pensions, and some other sources. The UK tax year runs from{" "}
        <strong>6 April to 5 April</strong> the following year, which is why you&apos;ll see
        it referred to as the 2026/27 tax year rather than a calendar year.
      </p>
      <p>
        Everyone gets a <strong>Personal Allowance</strong>, currently £12,570, which is
        the amount you can earn tax-free before any Income Tax applies. Above that,
        tax is charged in bands, at increasing rates. It&apos;s worth knowing the difference
        between your <strong>marginal rate</strong> (the rate charged on your next
        pound of income) and your <strong>effective rate</strong> (your total tax bill
        as a percentage of your whole income), since these are often very different
        numbers. Use our{" "}
        <Link href="/calculators/income-tax-calculator-uk">Income Tax calculator</Link>{" "}
        to see both for your own salary.
      </p>

      <h2 id="2026-27-bands">2026/27 Income Tax bands and rates</h2>
      <p>
        These are the standard bands for England, Wales and Northern Ireland. Scotland
        uses a different set, covered further down.
      </p>
      <RateTable
        caption="2026/27 Income Tax bands for England, Wales and Northern Ireland"
        columns={["Band", "Income range", "Rate"]}
        rows={[
          ["Personal Allowance", "Up to £12,570", "0%"],
          ["Basic Rate", "£12,571 to £50,270", "20%"],
          ["Higher Rate", "£50,271 to £125,140", "40%"],
          ["Additional Rate", "Over £125,140", "45%"],
        ]}
      />
      <h3>Worked example: £60,000 salary</h3>
      <p>
        Someone earning £60,000 pays nothing on the first £12,570. The next £37,700
        (up to £50,270) is taxed at 20%, and the remaining £9,730 falls into the
        Higher Rate band at 40%.
      </p>
      <RateTable
        caption="Worked example: Income Tax on a £60,000 salary"
        columns={["Band", "Taxable amount", "Rate", "Tax due"]}
        rows={[
          ["Basic Rate", "£37,700", "20%", "£7,540"],
          ["Higher Rate", "£9,730", "40%", "£3,892"],
          ["Total", "£47,430", "N/A", "£11,432"],
        ]}
        highlightLastRow
      />
      <p>
        That&apos;s an effective rate of about 19%, well below the 40% marginal rate,
        because most of the income is still taxed at lower bands.
      </p>

      <h2 id="personal-allowance-taper">The Personal Allowance taper for high earners</h2>
      <p>
        Once your income passes £100,000, your Personal Allowance starts shrinking: you
        lose £1 of allowance for every £2 you earn above that threshold. By £125,140,
        the allowance is gone completely.
      </p>
      <p>
        This creates a well-known quirk. Take someone whose salary rises from £100,000
        to £100,100, a £100 pay rise. They lose £50 of Personal Allowance, which
        becomes taxable at 40%, on top of paying 40% on the £100 itself. The result is
        £60 of extra tax on a £100 rise, an effective marginal rate of{" "}
        <strong>60%</strong>, higher than the official 45% Additional Rate that only
        applies far above this level.
      </p>

      <h2 id="scotland-income-tax">Scotland has different Income Tax bands</h2>
      <p>
        If you live in Scotland, your Income Tax is calculated using the Scottish
        Government&apos;s own bands, on top of the same £12,570 Personal Allowance used
        across the rest of the UK.
      </p>
      <RateTable
        caption="2026/27 Scottish Income Tax bands"
        columns={["Band", "Income range", "Rate"]}
        rows={[
          ["Starter Rate", "£12,571 to £15,397", "19%"],
          ["Basic Rate", "£15,398 to £27,491", "20%"],
          ["Intermediate Rate", "£27,492 to £43,662", "21%"],
          ["Higher Rate", "£43,663 to £75,000", "42%"],
          ["Advanced Rate", "£75,001 to £125,140", "45%"],
          ["Top Rate", "Over £125,140", "48%"],
        ]}
      />
      <p>
        On the same £60,000 salary used above, a Scottish taxpayer pays around{" "}
        <strong>£13,214</strong>, roughly £1,782 more than the £11,432 paid by someone
        on the standard rest-of-UK bands. The gap grows wider the more you earn, since
        Scotland&apos;s Higher and Top rates both start sooner and run hotter than the
        equivalent English, Welsh and Northern Irish bands.
      </p>

      <h2 id="national-insurance">National Insurance: the other tax you pay</h2>
      <p>
        Income Tax isn&apos;t the only deduction from your pay. Employees also pay Class 1
        National Insurance, at <strong>8%</strong> on earnings between £12,570 and
        £50,270, and <strong>2%</strong> on anything above that.
      </p>
      <p>
        On a £60,000 salary, NI comes to around <strong>£3,211</strong>, taking total
        Income Tax and NI to roughly £14,643, before any pension contributions or
        student loan repayments. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        combines both, plus pension and student loan, into one clear monthly figure.
      </p>

      <h2 id="tax-codes">Common tax codes explained</h2>
      <p>
        Your tax code tells your employer how much tax-free pay to give you. The most
        common code, <strong>1257L</strong>, reflects the standard £12,570 Personal
        Allowance. A few others worth knowing: <strong>BR</strong> taxes all your
        income at the Basic Rate, often used on a second job; <strong>D0</strong> and{" "}
        <strong>D1</strong> tax everything at the Higher or Additional Rate; and{" "}
        <strong>K codes</strong> mean you have negative allowance, often because you owe
        tax from a previous year or receive taxable benefits, so extra is added to your
        taxable income rather than subtracted.
      </p>
      <p>
        You might also see <strong>W1</strong> or <strong>M1</strong> after your code,
        marking it as an emergency, non-cumulative code, common when starting a new job
        without a P45. If your code looks wrong, check your HMRC personal tax account
        or contact HMRC directly; getting it corrected quickly avoids either
        overpaying or building up an unexpected bill.
      </p>

      <h2 id="reduce-income-tax">How to reduce your Income Tax legally</h2>
      <p>
        A handful of well-established options can lower your tax bill without any
        aggressive planning:
      </p>
      <ul>
        <li>
          <strong>Pension contributions</strong> reduce your taxable income directly,
          and are particularly valuable for reclaiming lost Personal Allowance in the
          £100,000 to £125,140 trap.
        </li>
        <li>
          <strong>Salary sacrifice</strong> works similarly, and also reduces the
          National Insurance both you and your employer pay.
        </li>
        <li>
          <strong>Gift Aid</strong> donations extend your Basic Rate band, meaning
          Higher and Additional Rate taxpayers can reclaim further relief through
          self-assessment.
        </li>
        <li>
          <strong>Marriage Allowance</strong> lets a non-taxpayer transfer 10% of their
          Personal Allowance to a Basic Rate-taxpayer spouse or civil partner, worth
          around £250 a year.
        </li>
        <li>
          <strong>ISAs</strong> don&apos;t reduce Income Tax on your salary directly, but
          shelter savings interest and investment growth from further tax, which adds
          up over time.
        </li>
      </ul>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
