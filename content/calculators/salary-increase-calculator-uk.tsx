import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Why does my take-home pay not rise by the same percentage as my salary?",
    answer:
      "Because Income Tax and National Insurance are charged in bands, a pay rise is often taxed at your highest marginal rate, which is usually higher than your overall effective tax rate on your full salary. This means the extra money is taxed more heavily than your average pound, so your take-home pay rises by a smaller percentage than your gross salary did.",
  },
  {
    question: "What happens if a pay rise pushes me into a higher tax band?",
    answer:
      "Only the portion of your salary above the band threshold is taxed at the higher rate, not your whole salary. So if a rise takes you from just below £50,270 to just above it, only the small amount above the threshold is taxed at 40% instead of 20%, not your entire income.",
  },
  {
    question: "Does increasing my pension contribution reduce the tax on a pay rise?",
    answer:
      "Yes, if your scheme deducts pension contributions before tax. Increasing your pension percentage alongside a pay rise reduces your taxable income, which can be a useful way to build your pension while limiting how much of the rise is lost to tax, particularly if the rise would otherwise push you into a higher band.",
  },
  {
    question: "Does this calculator account for student loan repayments?",
    answer:
      "Yes, select your student loan plan and the calculator includes the extra repayment due on the portion of your salary above your plan's threshold, alongside Income Tax, National Insurance and pension contributions.",
  },
  {
    question: "What is a real-terms pay rise?",
    answer:
      "A real-terms pay rise means your pay has grown faster than the cost of living, so your money actually buys more than before. This calculator shows your increase in take-home pay after tax, which is a useful step towards understanding a real-terms change, though a full real-terms calculation would also need to account for inflation, which this tool does not include.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        A pay rise sounds simple until you try to work out what actually
        lands in your bank account each month. Income Tax, National
        Insurance, pension contributions and student loan repayments all
        take a bite out of a gross increase before you see any of it, and
        the portion taken can be surprisingly large if the rise pushes part
        of your salary into a higher tax band. This calculator shows exactly
        what a pay rise is worth in take-home terms.
      </p>

      <h2>How to use the salary increase calculator</h2>
      <p>
        Enter your current annual salary, then choose whether your increase
        is a percentage or a fixed amount. Add your region, since Scotland
        uses different Income Tax bands to the rest of the UK, your student
        loan plan if you have one, and your pension contribution
        percentage. The calculator shows your new gross salary, new
        take-home pay, and exactly how much extra you will see each month
        and each year, after every deduction.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator works out your take-home pay twice: once on your
        current salary, and once on your new salary after the increase is
        applied, using the same Income Tax, National Insurance, pension and
        student loan calculations behind our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        . The difference between the two net figures is your real increase
        in take-home pay, which is almost always a smaller percentage than
        your gross pay rise, since UK Income Tax and National Insurance are
        both charged at increasing rates on higher portions of income.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone earning <strong>£35,000</strong> in England, receiving
        a <strong>5% pay rise</strong>, with no student loan and a{" "}
        <strong>5% pension contribution</strong>.
      </p>
      <p>
        Their new gross salary is <strong>£36,750</strong>, a £1,750
        increase. After tax, National Insurance and pension are recalculated
        on the higher salary, their take-home pay rises by a smaller
        percentage than the 5% gross increase, since part of the extra
        salary is taxed at their marginal rate rather than their lower
        average rate. The exact figure depends on where their salary sits
        relative to the tax bands, which is exactly what the calculator
        above works out precisely for your own numbers.
      </p>
      <p>
        Try increasing the pension contribution percentage in the calculator
        above while keeping the same pay rise. You will see the immediate
        take-home increase shrinks, since more of the rise goes into your
        pension pot instead of your pay packet, though the money is not
        lost, it is simply going towards your retirement rather than your
        monthly income.
      </p>

      <h2>Why marginal rate matters more than average rate here</h2>
      <p>
        Your marginal rate is the tax rate charged on your next pound of
        income, while your effective or average rate is your total tax bill
        as a percentage of your whole salary. These two figures can be very
        different, and it is your marginal rate, not your average rate,
        that determines how much of a pay rise you actually keep.
      </p>
      <p>
        For most people in England, Wales and Northern Ireland earning
        between £12,570 and £50,270, the marginal rate on a pay rise is 28%
        once Income Tax (20%) and employee National Insurance (8%) are
        combined. Above £50,270, the combined marginal rate rises to 42%
        (40% Income Tax plus 2% National Insurance), and between £100,000
        and £125,140, the Personal Allowance taper pushes the effective
        marginal rate as high as 60% for many taxpayers, before even adding
        student loan repayments on top. A pay rise that lands inside this
        band can be taxed far more heavily than most people expect.
      </p>
      <p>
        Scottish taxpayers face a different set of marginal rates, since
        Scotland uses six Income Tax bands rather than three, with slightly
        different thresholds and higher top rates. This calculator applies
        the correct bands automatically once you select Scotland as your
        region, so you do not need to work out which band your pay rise
        falls into by hand.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming a percentage pay rise translates
        directly into the same percentage increase in take-home pay. It
        rarely does, because of how UK Income Tax and National Insurance
        bands work. Someone getting a 10% pay rise should not expect their
        monthly take-home pay to rise by exactly 10%, and being aware of
        this in advance avoids disappointment when the new payslip arrives.
      </p>
      <p>
        It is also worth checking whether a pay rise pushes you across a
        significant threshold, such as the £50,270 Higher Rate band or the
        £100,000 Personal Allowance taper. Crossing these points can mean a
        noticeably larger share of any further increase is lost to tax,
        which is worth knowing if you are negotiating a rise or comparing
        job offers with different salary structures.
      </p>
      <p>
        Finally, remember that a gross pay rise which simply matches
        inflation is not really a pay rise in real terms at all, since your
        cost of living has risen by a similar amount. This calculator shows
        your after-tax cash increase clearly, which is a useful starting
        point, but comparing that figure against inflation over the same
        period gives a fuller picture of whether you are genuinely better
        off.
      </p>

      <h2>Related calculators</h2>
      <p>
        For the full picture of your current pay, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        gives a complete monthly and annual breakdown, while our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        break down each deduction on its own. Our{" "}
        <Link href="/blog/uk-income-tax-2026-27">income tax guide</Link>{" "}
        explains the UK tax bands and the 60% tax trap in more detail, which
        is particularly useful if a pay rise is bringing you close to
        £100,000. If you are still negotiating your pay rise rather than
        comparing an agreed figure, our{" "}
        <Link href="/calculators/salary-negotiation-calculator-uk">
          salary negotiation calculator
        </Link>{" "}
        also factors in bonus, pension and benefits changes, plus the
        5-year value of the increase.
      </p>
    </div>
  );
}
