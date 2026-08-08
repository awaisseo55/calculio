import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much should I ask for in a salary negotiation?",
    answer:
      "There is no single right answer, since it depends on your role, sector and how much you can evidence your value, but framing your ask around take-home pay rather than gross salary often makes the real impact clearer. This calculator shows you the actual extra money reaching your bank account each month, not just the headline percentage increase.",
  },
  {
    question: "Why is my extra take-home pay less than my gross pay rise?",
    answer:
      "Because Income Tax, National Insurance and pension contributions all take a share of any pay rise, the extra amount reaching your bank account is always lower than the gross increase, and often noticeably so if the rise pushes you into a higher tax band. Our income tax calculator shows exactly which band applies to your new salary.",
  },
  {
    question: "Does a bigger bonus help more than a bigger salary?",
    answer:
      "A bonus is generally taxed in exactly the same way as salary through PAYE, so pound for pound there is no tax advantage either way. The main practical difference is that a bonus is usually one-off or variable, while a salary increase is permanent and compounds over your career, including into future pay rises and pension contributions.",
  },
  {
    question: "How is the 5-year value of a pay rise calculated?",
    answer:
      "This calculator multiplies your annual extra take-home pay by 5 for a simple cash total, then separately projects the extra pension contributions from the increase forward at an assumed 5% annual growth rate, to show the combined value of both the cash and the pension boost over 5 years.",
  },
  {
    question: "Should I negotiate salary or ask for more pension contributions?",
    answer:
      "It depends on your priorities. A higher salary increases your take-home pay immediately and raises your baseline for future rises, while a higher employer pension contribution grows tax-efficiently over the long term without an equivalent hit to your current take-home pay. Our pension calculator can help you see how extra contributions affect your retirement pot.",
  },
  {
    question: "Is it worth negotiating if I'm considering switching jobs instead?",
    answer:
      "Sometimes a new employer offers a bigger increase than your current one, but relocation, notice periods and settling-in time all carry a cost. This calculator's break-even feature shows how many months of extra take-home pay it takes to cover any relocation or job-switch costs you enter, so you can compare a counter-offer against a new job on a like-for-like basis.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        A headline pay rise percentage rarely tells you what actually lands
        in your bank account each month, once Income Tax, National
        Insurance and pension contributions are taken into account. This
        calculator turns a salary negotiation offer, current or target,
        into a clear monthly and annual take-home figure, plus its value
        over the next 5 years.
      </p>

      <h2>How to use the salary negotiation calculator</h2>
      <p>
        Enter your current annual salary, then set your target either as a
        percentage increase or a specific new salary figure. Add any
        current and target annual bonus, your current and target pension
        contribution rate, and the value of any other benefits, such as a
        car allowance or private health insurance, that might change as
        part of the deal. Select where you pay tax, and add any relocation
        or job-switch costs if you are comparing this offer against moving
        employer entirely.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator works out your current and target gross total
        compensation, salary plus bonus plus other benefits, then runs both
        figures through a full UK take-home pay calculation, including
        Income Tax, National Insurance and pension contributions, using the
        same logic as our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>
        . The difference between the two net figures gives your extra
        take-home pay per month and per year. For the 5-year projection, we
        multiply your extra annual take-home pay by 5 for the cash element,
        then separately project any increase in your pension contributions
        forward using a 5% assumed annual growth rate, a common
        illustrative long-term average rather than a guarantee.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone on <strong>£40,000</strong>, negotiating a move to{" "}
        <strong>£45,000</strong> plus a new <strong>£1,000</strong> annual
        bonus, keeping pension contributions at{" "}
        <strong>5%</strong> throughout.
      </p>
      <p>
        Current take-home pay on £40,000 works out at around{" "}
        <strong>£30,879.60</strong> a year. On the new package, £46,000 of
        gross pay (salary plus bonus) produces a take-home figure of
        roughly <strong>£34,983.60</strong> a year, a difference of about{" "}
        <strong>£4,104 a year</strong>, or <strong>£342 a month</strong>.
        Over 5 years, that is worth around{" "}
        <strong>£20,520</strong> in extra take-home pay, plus a further{" "}
        <strong>£1,658</strong> or so in additional pension pot value from
        the higher pensionable pay, for a combined 5-year value of roughly{" "}
        <strong>£22,178</strong>.
      </p>

      <h2>Common mistakes in salary negotiations</h2>
      <p>
        A common mistake is comparing gross salary figures only, without
        checking the take-home impact. A £5,000 increase can look identical
        on paper whether it pushes you into a higher tax band or not, but
        the actual extra money in your pocket can differ significantly. Our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        shows exactly which band your new salary falls into, and our{" "}
        <Link href="/blog/uk-income-tax-2026-27">
          UK Income Tax 2026/27 guide
        </Link>{" "}
        explains how the bands and thresholds work in more detail.
      </p>
      <p>
        Another mistake is ignoring pension contributions entirely during a
        negotiation. A slightly lower salary increase combined with a
        higher employer pension contribution can sometimes be worth more
        long term than a bigger cash figure alone. Our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        can help you see whether your current contributions leave you on
        track for the retirement income you want, which is useful context
        before trading cash for pension in a negotiation. If you are paid
        hourly or considering a switch between salaried and hourly work as
        part of a new role, our{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">
          salary to hourly calculator
        </Link>{" "}
        makes the comparison straightforward.
      </p>

      <h2>Related calculators</h2>
      <p>
        Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        give a detailed breakdown of any single salary figure, while our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">
          salary to hourly calculator
        </Link>{" "}
        help with the wider decisions that often come up alongside a
        negotiation. If you have already agreed a pay rise and just want a
        quick before-and-after comparison, our{" "}
        <Link href="/calculators/salary-increase-calculator-uk">
          salary increase calculator
        </Link>{" "}
        gives a simpler, faster version of that specific calculation.
      </p>
    </div>
  );
}
