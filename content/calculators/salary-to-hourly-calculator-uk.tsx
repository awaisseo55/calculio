import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How do I convert my annual salary into an hourly rate?",
    answer:
      "Divide your annual salary by the total number of hours you are contracted to work in a year, which is your weekly hours multiplied by 52 weeks, since a standard salary already accounts for paid holiday. This gives your gross hourly rate, before Income Tax and National Insurance are taken off.",
  },
  {
    question: "What is the difference between gross and net hourly rate?",
    answer:
      "Your gross hourly rate is your salary divided by your annual hours before any deductions. Your net hourly rate takes your actual take-home pay, after Income Tax and National Insurance, and divides that by the same annual hours, giving a more realistic sense of what you actually keep for each hour worked.",
  },
  {
    question: "Why does the calculator show a separate rate for working days only?",
    answer:
      "Your salary and take-home pay already include paid holiday and typical sick leave, so dividing by your total contracted hours slightly understates what you effectively earn for each hour you are actually at work. Dividing by only the hours you actually work, after subtracting holiday and sick days, gives a higher figure that reflects this.",
  },
  {
    question: "What is the current National Living Wage?",
    answer:
      "The National Living Wage is the legal minimum hourly rate for workers aged 21 and over in the UK, reviewed by the government each April following recommendations from the Low Pay Commission. Lower minimum rates apply to workers aged 18 to 20 and to apprentices. Always check the current rate on GOV.UK, since it changes annually.",
  },
  {
    question: "Does this calculator include pension contributions or student loan repayments?",
    answer:
      "No, to keep the comparison simple, this calculator estimates Income Tax and standard employee National Insurance only, with no pension contribution or student loan deduction. If you want a more detailed net pay figure that includes these, our take-home pay calculator lets you add both.",
  },
  {
    question: "Is this calculation different for self-employed people?",
    answer:
      "Yes. Self-employed people pay Income Tax and Class 4 National Insurance on profit rather than salary, and do not receive paid holiday or sick pay by default, both of which change the true hourly rate significantly. Our self-employed tax calculator and our freelance hourly rate guide cover this calculation in more detail.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Job adverts, pay rise conversations and comparisons between roles
        often come down to a simple question: what does this salary actually
        work out to per hour? This calculator converts a UK annual salary
        into a gross and net hourly rate, taking into account your actual
        working hours, holiday entitlement and estimated sick days, so you
        can compare pay more meaningfully across different jobs or contract
        types.
      </p>

      <h2>How to use the salary to hourly calculator</h2>
      <p>
        Enter your annual salary, the hours you work each week, and the
        number of weeks you work a year, which defaults to 52 since most
        full-time salaries are paid across the whole year including paid
        holiday. Then enter your holiday entitlement in days, defaulting to
        28, the standard statutory minimum for a full-time UK worker
        including bank holidays, and an estimate of sick days you expect to
        take. The calculator returns your gross hourly rate, your net hourly
        rate after tax, and a separate rate based only on the days you
        actually work.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Your gross hourly rate is simply your annual salary divided by your
        total contracted hours in a year, hours per week multiplied by weeks
        per year. For your net hourly rate, the calculator first works out
        your take-home pay using standard England, Wales and Northern Ireland
        Income Tax bands and employee National Insurance, the same underlying
        logic as our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        , then divides that net figure by the same total annual hours.
      </p>
      <p>
        For the working-days-only figure, the calculator subtracts your
        holiday days and estimated sick days from your total working days in
        the year, then converts the remaining working days into hours using
        your stated daily hours. Dividing your net annual pay by this smaller
        number of actual working hours gives a higher rate, since it reflects
        that you are still paid for holiday and sick days without physically
        working them.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a worker on a <strong>£32,000</strong> annual salary, working{" "}
        <strong>37.5 hours a week</strong> for all <strong>52 weeks</strong>{" "}
        of the year, with <strong>28 days</strong> holiday and an estimated{" "}
        <strong>4 sick days</strong>.
      </p>
      <p>
        Total annual hours come to 37.5 &times; 52 = <strong>1,950
        hours</strong>, giving a gross hourly rate of £32,000 &divide; 1,950 ={" "}
        <strong>£16.41 an hour</strong>. After estimated Income Tax of around
        £3,886 and National Insurance of around £1,554, take-home pay comes
        to around <strong>£26,560</strong> a year, giving a net hourly rate
        of about <strong>£13.62</strong>.
      </p>
      <p>
        Now subtracting the 28 holiday days and 4 sick days from the 260
        working days in a 52-week year (5 days a week) leaves{" "}
        <strong>228 actual working days</strong>, or{" "}
        <strong>1,710 actual working hours</strong> at 7.5 hours a day.
        Dividing the same £26,560 net pay by this smaller number of hours
        gives a working-days-only net rate of around{" "}
        <strong>£15.53</strong>, noticeably higher than the £13.62 figure
        that spreads pay across every contracted hour including paid leave.
      </p>

      <h2>Comparing your rate to the National Living Wage</h2>
      <p>
        The National Living Wage sets the legal minimum hourly rate for
        workers aged 21 and over. Comparing your gross hourly rate against it
        gives a quick sanity check, particularly useful for part-time roles,
        zero-hours contracts, or when comparing a salaried offer against an
        hourly-paid alternative. Our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        can help you dig further into exactly where your deductions come
        from at any salary level.
      </p>

      <h2>Common mistakes when converting salary to an hourly rate</h2>
      <p>
        A common mistake is dividing salary by 52 weeks and 40 hours as a
        rough default, without checking actual contracted hours, which can
        overstate or understate the real rate considerably for anyone
        working part-time or unusual hours. Another is comparing a salaried
        role&apos;s gross hourly rate directly against a freelance or
        contractor day rate, without accounting for the fact that
        freelancers must cover their own holiday pay, sick pay, pension and
        business costs out of what looks like a higher headline rate. Our{" "}
        <Link href="/blog/freelancer-hourly-rate-uk-2026">
          guide to calculating your true freelance hourly rate
        </Link>{" "}
        explains this gap in detail.
      </p>
      <p>
        It is also easy to forget that a pay rise expressed as a percentage
        increase to salary does not translate into the same percentage
        increase in net hourly rate, since tax bands and National Insurance
        thresholds mean a larger share of a bigger salary is often taxed at a
        higher rate. Our{" "}
        <Link href="/blog/uk-income-tax-2026-27">
          UK Income Tax 2026/27 guide
        </Link>{" "}
        walks through how the bands work if you want to understand this
        effect more fully.
      </p>

      <h2>Related calculators</h2>
      <p>
        For a fuller picture of your take-home pay including pension
        contributions and student loan repayments, use our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        . To understand your Income Tax and National Insurance separately,
        try our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>
        . If you are considering a pay rise, our{" "}
        <Link href="/calculators/salary-increase-calculator-uk">
          salary increase calculator
        </Link>{" "}
        shows exactly how much extra you would take home each month.
      </p>
    </div>
  );
}
