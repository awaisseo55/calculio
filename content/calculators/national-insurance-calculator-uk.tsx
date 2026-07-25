import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is National Insurance actually for?",
    answer:
      "National Insurance contributions count towards your entitlement to certain state benefits, including the State Pension, and help fund the NHS and other government spending. Paying enough qualifying years builds your record towards a full State Pension.",
  },
  {
    question: "Why do employees and self-employed people pay different rates?",
    answer:
      "Employees pay Class 1 National Insurance, deducted automatically from their pay. Self-employed people pay Class 4 on their profits, at a lower main rate than employees, alongside historically Class 2, which changed significantly from April 2024.",
  },
  {
    question: "Do I need to pay Class 2 National Insurance?",
    answer:
      "Since 6 April 2024, Class 2 is no longer mandatory if your profits are above the small profits threshold, and you are treated as having paid it for State Pension purposes anyway. Below the threshold, you can choose to pay it voluntarily to protect your record.",
  },
  {
    question: "Is National Insurance the same as Income Tax?",
    answer:
      "No, they are separate. Income Tax and National Insurance are calculated using different thresholds and rates, and both are usually deducted from an employee's pay through PAYE, or worked out together by a self-employed person through self-assessment.",
  },
  {
    question: "Does National Insurance stop once I reach State Pension age?",
    answer:
      "Yes. Once you reach State Pension age, you no longer pay Class 1 or Class 4 National Insurance, even if you keep working, though you will still pay Income Tax on any earnings above your Personal Allowance.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        National Insurance is one of those deductions everyone sees on their
        payslip but few people fully understand. It is calculated separately from
        Income Tax, using its own thresholds and rates, and works differently
        depending on whether you are employed or self-employed.
      </p>
      <p>
        This calculator works out exactly how much National Insurance you pay,
        whether you are on a salary or running your own business, using current UK
        rates.
      </p>

      <h2>How to use the National Insurance calculator</h2>
      <p>
        Choose whether you are employed or self-employed, then enter your annual
        salary or profit. The calculator shows your National Insurance bill for the
        year, broken down monthly, using the correct class and rates for your
        situation.
      </p>

      <h2>How National Insurance is calculated</h2>
      <p>
        Employees pay Class 1 National Insurance at <strong>8%</strong> on earnings
        between £12,570 and £50,270 a year, and <strong>2%</strong> on anything
        above that. Unlike Income Tax, there is no separate tax-free band above
        £12,570. You start paying National Insurance as soon as your earnings cross
        that threshold.
      </p>
      <p>
        These thresholds are set for each tax year and reviewed at every Budget,
        so they can shift over time even if the headline rates stay the same. The
        £12,570 threshold is known as the primary threshold for employees, and the
        £50,270 figure is called the upper earnings limit. Both are shared with the
        Income Tax system, which is why the two calculations often line up at the
        same points even though they are worked out separately.
      </p>
      <p>
        Self-employed people pay Class 4 National Insurance instead, on their
        profits rather than their salary, at a lower main rate of{" "}
        <strong>6%</strong> between £12,570 and £50,270, and 2% above that. Class 2
        National Insurance changed significantly from April 2024. It is no longer
        charged to most self-employed people above the small profits threshold, who
        are simply treated as having paid it for State Pension purposes. Below the
        threshold, it remains available as a voluntary payment for anyone who wants
        to protect their record.
      </p>

      <h2>Worked example</h2>
      <p>
        An employee earning <strong>£35,000</strong> a year pays National Insurance
        on the £22,430 above the £12,570 threshold, all within the 8% band. That
        works out at around <strong>£1,794</strong> a year, or roughly{" "}
        <strong>£150 a month</strong>.
      </p>
      <p>
        A self-employed person with the same <strong>£40,000</strong> profit pays
        Class 4 National Insurance instead. The first £12,570 is free of Class 4,
        the next £27,430 up to £50,270 is charged at 6%, giving a bill of around{" "}
        <strong>£1,646</strong> for the year. Since their profit is above the small
        profits threshold, they owe no Class 2 National Insurance, though they are
        still credited towards their State Pension.
      </p>

      <h2>Why your National Insurance record matters</h2>
      <p>
        Beyond the money deducted from your pay each month, National Insurance
        builds up what is known as your qualifying years. You generally need
        around 35 qualifying years to receive the full new State Pension, and at
        least 10 to get any State Pension at all. Gaps in your record, from
        periods of low income, unemployment, or time spent caring for family, can
        sometimes be filled with National Insurance credits or voluntary
        contributions, which is worth checking on GOV.UK if you have had breaks in
        your working history.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming National Insurance works like Income Tax, with
        a tax-free personal allowance. It does not. Every pound above the primary
        threshold is charged, with no separate nil-rate band. Another mistake,
        common among newly self-employed people, is not realising that Class 2
        rules changed in April 2024. Many older guides online still describe the
        previous system, where Class 2 was a small flat weekly charge for almost
        everyone, which can lead to over budgeting for a bill that no longer
        applies in most cases.
      </p>
      <p>
        It is also worth remembering that National Insurance is calculated
        separately from Income Tax, so a change in one does not automatically
        change the other. If you want your full tax and National Insurance picture
        together, our take-home pay calculator combines both in one result.
      </p>
      <p>
        For anyone with more than one job, it is worth knowing that National
        Insurance is normally calculated separately for each employer, using the
        same thresholds for each job rather than combining your total income
        first. This is different from Income Tax, where HMRC does look at your
        combined income across jobs through your tax code. It means the amount of
        National Insurance you pay overall can sometimes be higher across two part
        time jobs than it would be on the same total income from a single job, so
        it is worth checking your specific situation carefully if this applies to
        you.
      </p>

      <h2>Related calculators</h2>
      <p>
        For the complete picture including Income Tax, pension contributions and
        student loan repayments, use our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        . If you are self-employed, our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        combines Income Tax and Class 4 National Insurance in one place. You can
        also check our <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        and <Link href="/blog/uk-income-tax-2026-27">income tax guide</Link> for
        more on how the two systems fit together.
      </p>
    </div>
  );
}
