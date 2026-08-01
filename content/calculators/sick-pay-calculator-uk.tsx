import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much is Statutory Sick Pay (SSP) in 2026/27?",
    answer:
      "From 6 April 2026, SSP is paid at the lower of £123.25 a week or 80% of your average weekly earnings, for up to 28 weeks. This followed reforms under the Employment Rights Act 2025, which also made SSP payable from day one of sickness and removed the old minimum earnings threshold, so far more employees are now covered.",
  },
  {
    question: "When does SSP start now the rules have changed?",
    answer:
      "From 6 April 2026, SSP is payable from the very first day of sickness, removing the old 3 waiting days that used to apply. Before this change, SSP only started from the fourth qualifying day of sickness, so if you are checking older guidance, be aware the rule has moved on.",
  },
  {
    question: "Do all employers offer more than Statutory Sick Pay?",
    answer:
      "No, offering more than SSP is entirely up to the employer, unless your contract or a collective agreement guarantees it. Many larger employers, especially in the public sector and finance, offer enhanced company sick pay schemes, often full pay for a set number of weeks followed by half pay, then SSP, while some smaller employers pay SSP only.",
  },
  {
    question: "Can self-employed people get sick pay?",
    answer:
      "No, Statutory Sick Pay only applies to employees and eligible agency workers, not the self-employed. If you are self-employed and unable to work due to illness, you may be able to claim Employment and Support Allowance, and some self-employed people choose to take out income protection insurance for exactly this situation.",
  },
  {
    question: "Is sick pay taxed the same as normal wages?",
    answer:
      "Yes, both SSP and any company sick pay on top of it count as normal earnings, so Income Tax and National Insurance are deducted through PAYE in the usual way. There is no special tax-free treatment for sick pay.",
  },
  {
    question: "What happens once my 28 weeks of SSP runs out?",
    answer:
      "Once you have used your maximum 28 weeks of SSP within a single period of incapacity for work, your employer is not required to pay any more, though some enhanced company schemes may continue paying beyond this. If you remain unable to work after SSP ends, Employment and Support Allowance is generally the next avenue to look at.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Sick pay rules changed significantly from April 2026, and with
        employer schemes varying so much on top of the statutory minimum, it
        is easy to lose track of what you are actually entitled to during a
        period of sickness. This calculator estimates your total sick pay,
        split between Statutory Sick Pay and any company scheme, based on
        your employment status, salary and how many days you have been off.
      </p>

      <h2>How to use the sick pay calculator</h2>
      <p>
        Choose your employment status, employee, agency worker or
        self-employed, since eligibility rules differ. Enter your weekly
        salary, used to work out your average weekly earnings for the SSP
        calculation, and the number of working days you have been or expect
        to be off sick. If you are an employee or agency worker, also
        select your employer&apos;s sick pay policy, statutory pay only,
        full pay for a set number of weeks before dropping to SSP, or half
        pay before dropping to SSP, along with how many weeks that company
        scheme runs for.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Your SSP weekly rate is the lower of the flat statutory rate or 80%
        of your average weekly earnings, which the calculator estimates
        from your weekly salary. From 6 April 2026, SSP is payable from the
        first day of sickness, for a maximum of 28 weeks in any single
        period of incapacity for work. If your employer offers an enhanced
        scheme, the calculator pays out full or half salary, whichever is
        higher than the SSP rate, for the number of weeks you specify, then
        switches to the SSP-only rate for any remaining sickness within your
        28-week entitlement. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can then show you what any of these figures look like after tax and
        National Insurance.
      </p>

      <h2>Worked example</h2>
      <p>
        Take an employee on <strong>£500 a week</strong>, off sick for{" "}
        <strong>30 working days</strong>, 6 weeks, whose employer pays full
        salary for the first <strong>4 weeks</strong> before dropping to
        SSP.
      </p>
      <p>
        For the first 4 weeks, they receive their full £500 weekly salary,
        totalling <strong>£2,000</strong>. For the remaining 2 weeks, they
        drop to the SSP rate, the lower of £123.25 a week or 80% of their
        earnings, which in this case is the flat £123.25 rate, giving
        another <strong>£246.50</strong>. Their total sick pay across the 6
        weeks comes to around <strong>£2,246.50</strong>, all of which is
        still subject to Income Tax and National Insurance in the normal
        way.
      </p>

      <h2>Common mistakes when working out sick pay</h2>
      <p>
        A common mistake is assuming SSP still has a 3-day waiting period
        before payments start, which was the rule before the April 2026
        reform but no longer applies, since SSP is now payable from day one.
        Another is assuming company sick pay is paid on top of SSP as an
        extra amount, when most occupational schemes actually state that SSP
        is included within the company figure, so you receive one combined
        payment rather than two separate ones during any full or half pay
        period. Always check your contract or staff handbook, since company
        scheme rules vary a lot between employers. Our{" "}
        <Link href="/blog/uk-sick-pay-guide-2026">
          UK sick pay guide
        </Link>{" "}
        covers these rules in more detail.
      </p>
      <p>
        It is also worth remembering that self-employed people cannot claim
        SSP at all, which catches some people out when moving from
        employment to self-employment. Our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        explains what support is available instead.
      </p>

      <h2>Related calculators</h2>
      <p>
        To see how any sick pay figure translates into your actual take-home
        pay after tax, use our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        . If you are self-employed and want to understand your tax position
        without SSP, our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        can help. Our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">
          salary to hourly calculator
        </Link>{" "}
        are also useful if you are trying to understand your overall pay
        picture during a period of reduced income.
      </p>
    </div>
  );
}
