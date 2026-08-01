import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is pay worked out for reduced or part-time hours?",
    answer:
      "Your new salary is usually your current full-time salary multiplied by the ratio of your new hours to your old hours. For example, dropping from 37.5 to 30 hours a week is a move to 80% of your hours, so your new salary is 80% of your current salary, before tax and other deductions are recalculated on the smaller figure.",
  },
  {
    question: "Does the government still offer a furlough scheme?",
    answer:
      "The Coronavirus Job Retention Scheme, commonly called furlough, closed in September 2021 and has not been reopened. Some employers still use the term informally to describe short-time working or reduced hours arrangements, which is why this calculator covers any reduction in contracted hours, whether agreed with your employer directly or through a formal short-time working policy.",
  },
  {
    question: "Why does my take-home pay not fall by the same percentage as my hours?",
    answer:
      "Because your Personal Allowance and National Insurance threshold stay the same fixed amount regardless of how much you earn, a smaller income has proportionally more of it sitting in these tax-free bands. This means your net pay typically falls by a slightly smaller percentage than your hours, though the exact effect depends on your starting salary and which tax band you are in.",
  },
  {
    question: "What happens to my pension contributions if I reduce my hours?",
    answer:
      "If your pension contribution is set as a percentage of salary, it falls in line with your reduced salary, meaning both you and your employer pay in less each month. It is worth checking whether your employer applies any minimum contribution rules or matching thresholds that could be affected by a lower salary, particularly if you are close to the auto-enrolment earnings trigger.",
  },
  {
    question: "Will reducing my hours affect my student loan repayments?",
    answer:
      "Student loan repayments are only due on income above your plan's annual threshold, so a lower salary can reduce or even stop your repayments if it falls below that threshold. This calculator applies the correct threshold and rate for your selected plan automatically.",
  },
  {
    question: "Does my tax code change if I move to part-time hours?",
    answer:
      "Usually not. Your tax code reflects your tax-free Personal Allowance and any adjustments HMRC has made for other income or benefits, and generally stays the same when your hours or salary change with the same employer. If you take on a second job or your circumstances change significantly, HMRC may issue a new code, so it is worth checking your payslip after a change.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Moving to reduced or part-time hours, whether through a formal
        short-time working agreement, a request to your employer, or simply
        cutting back your contracted week, changes more than just your gross
        pay. Tax, National Insurance, pension contributions and student loan
        repayments all shift too, often by a smaller percentage than your
        hours fall by. This calculator works out your new gross salary, your
        new monthly take-home pay, and exactly how it compares to your
        current pay.
      </p>

      <h2>How to use the reduced hours pay calculator</h2>
      <p>
        Enter your current full-time annual salary and your current
        contracted hours per week, then enter the new, reduced number of
        hours you are moving to. Add your tax code, which defaults to
        1257L, the standard code for most employees, your pension
        contribution as a percentage of salary, and your student loan plan
        if you have one. The calculator scales your salary in proportion to
        your new hours, then works out your new take-home pay using standard
        2026/27 Income Tax and National Insurance rules.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Your new gross salary is calculated as your current salary
        multiplied by the ratio of your new hours to your old hours. A move
        from 37.5 to 30 hours a week, for example, is a reduction to 80% of
        your previous hours, so your new gross salary is 80% of your current
        one. From there, the calculator applies the same approach as our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        , deducting pension contributions first, then working out Income Tax
        and National Insurance on the resulting taxable salary, and finally
        any student loan repayment due above your plan&apos;s threshold.
      </p>
      <p>
        A tax code starting with S uses the separate Scottish Income Tax
        bands, while every other standard code uses the England, Wales and
        Northern Ireland bands. Our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        breaks down exactly how much tax falls into each band if you want to
        see the full picture.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone earning <strong>£32,000</strong> a year on{" "}
        <strong>37.5 hours</strong> a week, with a <strong>5% pension
        contribution</strong> and no student loan, who agrees to move to{" "}
        <strong>30 hours</strong> a week, an 80% ratio, so a 20% reduction in
        hours.
      </p>
      <p>
        Their new gross salary comes to 32,000 &times; 0.8 ={" "}
        <strong>£25,600</strong> a year. On their previous full-time salary,
        after a £1,600 pension contribution, roughly £3,566 of Income Tax and
        £1,426 of National Insurance, their take-home pay was around{" "}
        <strong>£2,117 a month</strong>. On the new £25,600 salary, after a
        smaller £1,280 pension contribution, around £2,350 of Income Tax and
        £940 of National Insurance, their new take-home pay comes to around{" "}
        <strong>£1,753 a month</strong>, a fall of about{" "}
        <strong>£365 a month</strong>, or roughly 17%, noticeably smaller
        than the 20% cut to their hours. Their hourly rate itself stays the
        same at both salary levels, since pay was scaled directly with hours.
      </p>

      <h2>Common mistakes when working out reduced hours pay</h2>
      <p>
        A common mistake is assuming take-home pay falls by exactly the same
        percentage as hours worked, without accounting for the fact that
        Income Tax Personal Allowance and the National Insurance threshold
        stay fixed regardless of salary. This means a lower salary keeps
        proportionally more of its value tax-free, so net pay usually falls
        by less than the hours reduction, particularly for people whose
        salary stays within the basic rate band throughout. Our{" "}
        <Link href="/blog/uk-income-tax-2026-27">
          UK Income Tax 2026/27 guide
        </Link>{" "}
        explains how the bands and Personal Allowance work in more detail.
      </p>
      <p>
        It is also easy to forget that pension contributions set as a fixed
        percentage automatically fall alongside a reduced salary, which can
        affect long-term retirement savings even though it is not always
        obvious from a single payslip. Checking your new hourly rate, rather
        than only your monthly pay, is a useful sense check that your new
        contract reflects the reduction you agreed to.
      </p>

      <h2>Related calculators</h2>
      <p>
        To see your full take-home pay breakdown at any salary, including
        Income Tax, National Insurance and student loan repayments, try our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        . If you want to convert either your current or new salary into an
        hourly figure to compare against other roles, our{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">
          salary to hourly calculator
        </Link>{" "}
        does this with holiday and sick days factored in. For a closer look
        at just the Income Tax portion of your pay, use our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>
        . If you are freelance or considering leaving employment altogether,
        our{" "}
        <Link href="/blog/freelancer-hourly-rate-uk-2026">
          guide to calculating your true freelance hourly rate
        </Link>{" "}
        is a useful next read.
      </p>
    </div>
  );
}
