import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much student loan do I have to repay each month?",
    answer:
      "You repay 9% of your income above your plan's repayment threshold each pay period, or 6% for a Postgraduate Loan, deducted automatically through PAYE if you are employed. You repay nothing in a month where your income falls below the threshold for that pay period, even if your annual salary is above the yearly threshold overall.",
  },
  {
    question: "Which student loan plan am I on?",
    answer:
      "This mainly depends on where and when you started your course. English and Welsh undergraduates who started before September 2012 are usually on Plan 1, those between 2012 and 2023 are usually on Plan 2, and those from September 2023 onwards are usually on Plan 5. Scottish students are usually on Plan 4, and anyone with a postgraduate master's or doctoral loan repays that separately, alongside Plan 2, 4 or 5 if they also have an undergraduate loan.",
  },
  {
    question: "What happens to my student loan if I never earn above the threshold?",
    answer:
      "You simply do not repay anything in any tax year your income stays below the threshold, and interest continues to accrue on the outstanding balance. Student loans are also written off entirely after a set number of years from when you started repaying, generally 30 to 40 years depending on your plan, regardless of how much remains outstanding.",
  },
  {
    question: "Can I repay more than the automatic deduction?",
    answer:
      "Yes, you can make voluntary extra repayments directly to the Student Loans Company at any time. Whether this makes financial sense depends on your plan, your interest rate, and whether you are likely to clear the loan naturally before it is written off, so it is worth thinking through carefully rather than assuming overpaying is always the best choice.",
  },
  {
    question: "Does this calculator show my remaining loan balance?",
    answer:
      "No, this calculator focuses on your ongoing repayment amount based on your salary and plan, not a full balance projection, since that also depends on your specific loan balance, interest rate and how your income changes over time. Check your online student loan account for your current outstanding balance and accrued interest.",
  },
  {
    question: "Is student loan repayment the same as a normal loan repayment?",
    answer:
      "Not really. Unlike most loans, your monthly student loan repayment is based purely on your income, not on a fixed schedule designed to clear the balance by a certain date, and the loan is written off after a set period regardless of the remaining balance. For many graduates it behaves more like an extra rate of income tax than a conventional loan.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        UK student loan repayments are based on how much you earn, not how
        much you originally borrowed, which can make them confusing to plan
        around, especially when comparing offers or negotiating a pay rise.
        This calculator works out your monthly and annual student loan
        repayment from your salary and repayment plan, and compares what you
        would owe under each of the different plans at the same salary.
      </p>

      <h2>How to use the student loan repayment calculator</h2>
      <p>
        Enter your annual salary before tax, and select your repayment plan.
        If you are not sure which plan applies to you, this mainly depends
        on where and when you started your course; check your student loan
        account on GOV.UK if you are unsure. The calculator shows your
        monthly and annual repayment, your plan&apos;s threshold and rate, and how
        your repayment compares across all the different plans at the same
        salary.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Each student loan plan has its own annual income threshold and
        repayment rate. You repay a set percentage, 9% for Plan 1, 2, 4 and
        5, or 6% for a Postgraduate Loan, of whatever your income is above
        that threshold, not on your income as a whole. If your income is at
        or below the threshold, you repay nothing at all for that period. In
        practice, this is worked out and deducted automatically each pay
        period by your employer through PAYE, alongside your Income Tax and
        National Insurance, based on that period&apos;s earnings rather than
        your full annual salary.
      </p>

      <h2>Worked example</h2>
      <p>
        On a <strong>£32,000</strong> salary on <strong>Plan 2</strong>,
        with a threshold of £28,470, your income above the threshold is{" "}
        £32,000 &minus; £28,470 = <strong>£3,530</strong>. At 9%, that gives
        an annual repayment of <strong>£317.70</strong>, or around{" "}
        <strong>£26.48 a month</strong>. On the same £32,000 salary but on
        Plan 1, with its lower threshold, the repayment would be higher,
        illustrating how much the choice of plan affects what graduates
        actually repay at the same salary.
      </p>

      <p>
        Comparing all the plans at the same <strong>£32,000</strong> salary
        shows the range clearly: Plan 1 repays around{" "}
        <strong>£44.51 a month</strong>, Plan 2 around{" "}
        <strong>£26.47 a month</strong>, Plan 4 (Scotland) repays{" "}
        <strong>nothing</strong> at this salary since it falls below the
        Plan 4 threshold, Plan 5 repays around{" "}
        <strong>£52.50 a month</strong>, and a Postgraduate Loan repays
        around <strong>£55.00 a month</strong>. Someone with both an
        undergraduate and a postgraduate loan repays both amounts
        simultaneously, since they are calculated and deducted separately.
      </p>

      <h2>Does interest make a difference?</h2>
      <p>
        Yes, interest accrues on your outstanding student loan balance the
        whole time you owe money, at a rate that depends on your plan and,
        for some plans, your income. This does not affect your monthly
        repayment amount, which is set purely by your salary and plan as
        described above, but it does affect how quickly, or whether, your
        balance actually reduces over time. For many middle-income
        graduates on Plan 2 or Plan 5 in particular, interest can accrue
        faster than the fixed percentage of income being repaid each month,
        meaning the balance can grow rather than shrink for a period, even
        while repayments are being made consistently. Since the loan is
        written off after a set number of years regardless of the remaining
        balance, this matters less for lifetime cost than it might for a
        conventional loan, but it is worth understanding rather than being
        surprised by.
      </p>

      <h2>Does a student loan affect a mortgage application?</h2>
      <p>
        Many graduates worry about this when planning to buy a home. A UK
        student loan does not appear on your credit file as a debt in the
        way a personal loan or credit card would, so it does not directly
        affect your credit score. However, mortgage lenders do generally
        take your monthly student loan repayment into account as part of
        their affordability assessment, since it reduces the disposable
        income available for a mortgage payment, in a similar way to other
        regular deductions from your salary. This means it can influence how
        much a lender is willing to offer, even though it is not treated as
        a conventional debt.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming a higher salary always means a higher
        student loan repayment, without checking which plan applies, since
        Plan 1&apos;s lower threshold means someone on Plan 1 can repay more than
        someone on Plan 5 at the same salary. Another is confusing your
        student loan repayment with your income tax, since although both are
        deducted through PAYE, they are calculated completely separately and
        appear as separate lines on a payslip.
      </p>
      <p>
        It is also worth remembering that a growing salary can push more of
        your income above the threshold, but the loan is written off after a
        set number of years regardless of the outstanding balance, so
        constantly overpaying is not automatically the best financial choice
        for every graduate.
      </p>

      <h2>Related calculators</h2>
      <p>
        Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        includes student loan repayments alongside Income Tax and National
        Insurance to show your full net pay, and our{" "}
        <Link href="/calculators/mortgage-affordability-calculator-uk">
          mortgage affordability calculator
        </Link>{" "}
        factors in existing monthly commitments when estimating how much you
        could borrow. If you are planning university costs before you start,
        our{" "}
        <Link href="/calculators/student-budget-calculator-uk">
          student budget calculator
        </Link>{" "}
        helps you plan your income and outgoings while studying, and our{" "}
        <Link href="/calculators/salary-negotiation-calculator-uk">
          salary negotiation calculator
        </Link>{" "}
        can help you weigh up a job offer once you graduate. Our{" "}
        <Link href="/blog/uk-income-tax-2026-27">UK Income Tax guide</Link>{" "}
        covers how tax and student loan deductions sit alongside each other
        on a payslip.
      </p>
    </div>
  );
}
