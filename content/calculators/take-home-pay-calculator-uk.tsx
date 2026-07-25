import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Why is my take-home pay lower than gross salary minus tax?",
    answer:
      "Your net pay accounts for three separate deductions: Income Tax, National Insurance, and — if applicable — pension contributions and student loan repayments. Each is calculated separately using its own thresholds and rates, so the combined effect is usually bigger than most people expect, especially once you cross into the higher-rate tax band.",
  },
  {
    question: "How does National Insurance work?",
    answer:
      "Class 1 employee National Insurance is charged at 8% on earnings between the primary threshold (£12,570 a year) and the upper earnings limit (£50,270), then 2% on anything above that. Unlike Income Tax, there's no separate 'allowance' band that's completely NI-free above the threshold — you start paying NI as soon as your pay crosses £12,570.",
  },
  {
    question: "What student loan plan am I on?",
    answer:
      "It depends on when and where you started your course. Plan 1 covers most English and Welsh students who started before September 2012. Plan 2 covers English and Welsh students from 2012 onwards. Plan 4 is for Scottish students. Plan 5 covers new English students from August 2023. Postgraduate Loans have their own separate repayment threshold and rate, and can run alongside an undergraduate plan.",
  },
  {
    question: "Does increasing my pension contribution reduce my tax?",
    answer:
      "Yes, if you're on a salary sacrifice or net-pay pension scheme, your pension contribution is deducted from your gross salary before Income Tax and National Insurance are calculated — so a higher contribution reduces your taxable income and can lower your tax bill, not just build your pension pot. This calculator applies contributions before tax, which reflects how most workplace pension schemes operate.",
  },
  {
    question: "Is this calculator accurate for every situation?",
    answer:
      "It covers the most common case — a standard tax code, one employment, and straightforward salary — using published 2025/26 and 2026/27 rates. It won't capture every situation, such as benefits in kind, multiple jobs, marriage allowance transfers, or a non-standard tax code. For anything beyond a quick estimate, check your payslip or HMRC's own tools.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the take-home pay calculator</h2>
      <p>
        Enter your gross annual salary — the amount before any deductions — along with
        your region (Scotland has different Income Tax bands to the rest of the UK),
        your student loan plan (or none), and the percentage of your salary you pay into
        a workplace pension. The calculator then works out your Income Tax, National
        Insurance, pension contribution and student loan repayment, and shows you exactly
        what lands in your bank account each month, week and year.
      </p>
      <p>
        This is one of the most useful calculators for anyone negotiating a new job offer,
        considering a pay rise, or simply trying to understand where their salary
        actually goes. A £45,000 salary sounds straightforward until you see how much of
        it disappears before it reaches your account.
      </p>

      <h2>What comes out of your salary</h2>
      <p>
        Four things can reduce your gross salary before you see it: pension
        contributions, Income Tax, National Insurance, and student loan repayments (if
        applicable). Pension contributions are usually deducted first, directly reducing
        your taxable salary. Income Tax is then calculated on what&apos;s left, using
        your personal allowance (£12,570, tax-free) and the relevant tax bands — basic
        rate at 20%, higher rate at 40%, and additional rate at 45% in England, Wales and
        Northern Ireland, with a more detailed set of bands in Scotland. National
        Insurance is calculated separately, at 8% on earnings between £12,570 and
        £50,270, and 2% above that. Student loan repayments, if you have a plan, are then
        deducted at 9% (or 6% for Postgraduate Loans) of everything you earn above your
        plan&apos;s threshold.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone earning <strong>£38,000</strong> a year in England, contributing{" "}
        <strong>5% to their pension</strong>, with no student loan. Their pension
        contribution is £1,900, leaving a taxable salary of £36,100. After the £12,570
        personal allowance, £23,530 is taxed at 20%, giving an Income Tax bill of around{" "}
        <strong>£4,706</strong>. National Insurance is charged at 8% on the £23,530 above
        the £12,570 threshold, adding roughly <strong>£1,882</strong>. That leaves a net
        annual income of about <strong>£29,512</strong> — or <strong>£2,459 a month</strong>{" "}
        — from a £38,000 gross salary, once pension, tax and NI are all accounted for.
      </p>
      <p>
        Add a Plan 2 student loan into the mix and, because £36,100 is above the £28,470
        threshold, a further 9% of the £7,630 excess (about £686) would also be deducted,
        bringing monthly take-home pay down to roughly £2,402.
      </p>

      <h2>England, Wales and Northern Ireland vs Scotland</h2>
      <p>
        If you work in Scotland, your Income Tax is calculated using the Scottish
        Government&apos;s own bands, which apply on top of the same UK-wide £12,570
        personal allowance but use six rate bands rather than three — starting at 19% and
        rising to 48% for the very highest earners. This means take-home pay for the same
        gross salary can differ noticeably north and south of the border, particularly
        for middle and higher earners. National Insurance, by contrast, is set UK-wide and
        doesn&apos;t change based on where you live.
      </p>

      <h2>A note on accuracy</h2>
      <p>
        This calculator assumes a standard 1257L tax code, one job, and no other income,
        benefits in kind, or allowances such as Marriage Allowance. It applies pension
        contributions before tax in the way most workplace net-pay or salary sacrifice
        schemes work — if your scheme deducts contributions after tax (relief-at-source),
        your actual take-home figure may differ slightly. For a definitive figure, always
        check your payslip or HMRC&apos;s own online tools.
      </p>

      <h2>Related calculators</h2>
      <p>
        Want to see the tax breakdown on its own, without pension and student loan
        deductions? Try our{" "}
        <Link href="/calculators/income-tax-calculator-uk">Income Tax calculator</Link> or our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        for that deduction on its own. And if
        you&apos;re weighing up a house purchase against your new take-home pay, check
        our <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link> to see
        what you could comfortably afford.
      </p>
    </div>
  );
}
