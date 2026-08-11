import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the difference between the National Living Wage and the National Minimum Wage?",
    answer:
      "The National Living Wage is the legal minimum hourly rate for workers aged 21 and over. The National Minimum Wage is the term for the lower legal minimum rates that apply to younger workers and apprentices. Both are reviewed and usually increased every April, following recommendations from the independent Low Pay Commission.",
  },
  {
    question: "Am I entitled to the National Living Wage if I am self-employed?",
    answer:
      "No, minimum wage law only applies to workers and employees, not to genuinely self-employed people running their own business. If you are unsure whether you count as a worker or as self-employed, GOV.UK has guidance on employment status, since this affects far more than just minimum wage entitlement.",
  },
  {
    question: "Does the minimum wage apply to salaried staff, not just hourly-paid staff?",
    answer:
      "Yes, minimum wage rules apply to salaried workers too. To check compliance, an employer needs to divide your total pay for a pay reference period by the total hours you worked in that period, which is exactly what this calculator does when you enter your effective hourly rate.",
  },
  {
    question: "What should I do if I think I am being paid below minimum wage?",
    answer:
      "First, double check your hours and pay carefully, since unpaid trial shifts, travel time between appointments, or unpaid training can sometimes be missed from a straightforward hourly calculation. If you still believe you are underpaid, ACAS offers free, confidential advice, and HMRC investigates and can enforce back pay and penalties against employers who fail to pay the legal minimum.",
  },
  {
    question: "Does the apprentice rate apply to all apprentices?",
    answer:
      "The apprentice rate applies to apprentices aged under 19, and to apprentices aged 19 or over who are in the first year of their apprenticeship. Once an apprentice aged 19 or over completes their first year, they become entitled to the full minimum wage rate for their age instead.",
  },
  {
    question: "Are tips counted towards the minimum wage?",
    answer:
      "No, tips, gratuities and service charges cannot be counted towards National Minimum Wage or National Living Wage pay. Your base pay before tips must meet the legal minimum on its own, regardless of how much you additionally receive in tips.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        UK employers are legally required to pay at least the National
        Living Wage or National Minimum Wage for your age group, whether you
        are paid hourly or on a salary. This calculator checks your actual
        hourly rate against the current legal minimum, and shows what your
        minimum weekly and annual pay should be for the hours you work.
      </p>

      <h2>How to use the minimum wage calculator</h2>
      <p>
        Select your age group, or apprentice status if that applies, enter
        the number of hours you work in a typical week, and enter your
        actual hourly rate. If you are paid a salary rather than an hourly
        rate, divide your gross pay for a period by the total hours you
        worked in that same period to get an effective hourly rate. The
        calculator compares this against the current legal minimum for your
        age group and flags whether you appear to be paid correctly.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Each age band has its own legal minimum hourly rate, reviewed and
        usually increased every April. The calculator looks up the correct
        rate for the age group you select, then multiplies it by your weekly
        hours to give a minimum weekly pay figure, and by 52 for an
        indicative annual figure. It compares this against your actual
        hourly rate, weekly pay and annual pay, and calculates any shortfall
        if your actual rate falls below the legal minimum.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone aged 24, working <strong>37.5 hours</strong> a week, paid an effective hourly
        rate of <strong>£11.50</strong>. Since they are 21 or over, the legal
        minimum National Living Wage applies, currently £12.71 an hour, so
        they are being paid <strong>£1.21 an hour short</strong> of the
        legal minimum. Over a 37.5-hour week, their pay should be at least
        £476.63, but at £11.50 an hour they are only receiving £431.25, a
        shortfall of around <strong>£45.38 a week</strong>, or roughly{" "}
        <strong>£2,360 a year</strong> if this continued unchanged.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake when checking your own pay is forgetting to include
        all working time in the hours figure, such as time spent on
        mandatory unpaid training, travel between work locations during a
        shift, or being asked to arrive early for an unpaid briefing. All of
        this generally counts as working time for minimum wage purposes,
        even if it is not separately paid.
      </p>
      <p>
        Another mistake is assuming tips top up your pay to the legal
        minimum. Tips and service charges cannot be counted towards minimum
        wage pay under UK law, so your base pay before any tips must meet
        the legal minimum on its own. It is also worth checking which age
        band and rate genuinely applies to you, since the rate changes on
        your birthday and at the end of an apprentice&apos;s first year.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you want to convert an annual salary into an hourly rate, or the
        other way round, our{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">
          salary to hourly rate calculator
        </Link>{" "}
        handles that conversion directly. Once you know your correct hourly
        rate, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        shows what you would keep after tax and National Insurance, and our{" "}
        <Link href="/calculators/overtime-pay-calculator-uk">
          overtime pay calculator
        </Link>{" "}
        works out extra pay for hours worked above your normal week. If you
        move between employed and self-employed work, our guide to{" "}
        <Link href="/blog/freelancer-hourly-rate-uk-2026">
          working out your true hourly rate as a freelancer
        </Link>{" "}
        explains why minimum wage rules do not apply to self-employed work,
        and how to price your own time instead.
      </p>
    </div>
  );
}
