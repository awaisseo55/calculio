import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "ssp-basics", label: "Statutory Sick Pay basics" },
  { id: "when-ssp-starts-ends", label: "When SSP starts and ends" },
  { id: "company-schemes", label: "Company sick pay schemes" },
  { id: "self-employed", label: "Self-employed and sick pay" },
  { id: "long-term", label: "Long-term sickness options" },
  { id: "your-rights", label: "Your rights when sick" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your sick pay" },
];

export const faq: FaqItem[] = [
  {
    question: "What is the current rate of Statutory Sick Pay?",
    answer:
      "From 6 April 2026, SSP is paid at the lower of £123.25 a week or 80% of your average weekly earnings, for up to 28 weeks. The rate is reviewed and usually increases every April, so always check GOV.UK for the current figure if you are reading this later in the tax year.",
  },
  {
    question: "Do I get sick pay from day one now?",
    answer:
      "Yes. Following reforms under the Employment Rights Act 2025, SSP became payable from the first day of sickness from 6 April 2026, removing the old rule where the first 3 qualifying days were unpaid. If you are looking at older information that mentions a 3-day wait, it is now out of date.",
  },
  {
    question: "Can I get sick pay if I earn very little?",
    answer:
      "The old Lower Earnings Limit, which used to exclude the lowest earners from SSP entirely, was removed as part of the same April 2026 reforms, so far more low-paid and part-time workers are now covered. Your actual weekly amount is still based on 80% of your average weekly earnings where that is lower than the flat rate, so very low earners receive a smaller weekly amount, but they are no longer excluded altogether.",
  },
  {
    question: "What can self-employed people claim instead of SSP?",
    answer:
      "Self-employed people are not entitled to SSP under any circumstances, regardless of how long they have been trading. New Style Employment and Support Allowance is generally the main state support available if illness prevents you from working, based on your Class 2 National Insurance record, and many self-employed people also choose to take out income protection insurance as a private safety net.",
  },
  {
    question: "Does my employer have to offer more than SSP?",
    answer:
      "No, unless your contract, a collective agreement, or a company policy specifically promises more. Many employers, particularly larger ones, do offer enhanced schemes on top of SSP as part of their benefits package, but there is no general legal requirement to do so beyond the statutory minimum.",
  },
  {
    question: "What happens if I'm sick during my paid holiday?",
    answer:
      "If you become unwell during a period of booked annual leave, you are generally entitled to reclaim those days as sick leave instead, provided you follow your employer's usual process for reporting sickness, such as providing a fit note if required. This means the affected holiday days can usually be added back to your annual leave balance to take at another time.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Sick pay rules changed meaningfully from April 2026, and between the
        statutory minimum, company schemes that vary enormously between
        employers, and different rules again for the self-employed, it is
        easy to be unsure what you are actually entitled to. Our{" "}
        <Link href="/calculators/sick-pay-calculator-uk">
          sick pay calculator
        </Link>{" "}
        works out an estimate for your specific situation, and this guide
        explains the rules behind it.
      </p>

      <h2 id="ssp-basics">Statutory Sick Pay basics</h2>
      <p>
        Statutory Sick Pay is the legal minimum amount most employees and
        eligible agency workers must be paid by their employer during
        sickness absence. From 6 April 2026, the rate is the lower of
        £123.25 a week or 80% of your average weekly earnings, paid for up
        to 28 weeks within a single period of incapacity for work. This
        followed reforms under the Employment Rights Act 2025, which also
        removed the old Lower Earnings Limit that used to exclude the
        lowest-paid workers from SSP entirely.
      </p>
      <p>
        To qualify, you generally need to be classed as an employee or
        eligible agency worker, be genuinely unable to work due to illness,
        and follow your employer&apos;s usual process for reporting
        sickness. Both SSP and any additional company sick pay count as
        normal earnings, so Income Tax and National Insurance are still
        deducted through PAYE in the usual way, exactly as our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        assumes for any other salary. If sickness reduces your hours rather
        than stopping work entirely, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can also model a reduced salary figure directly.
      </p>

      <h2 id="when-ssp-starts-ends">When SSP starts and ends</h2>
      <p>
        Before April 2026, SSP only started from the fourth qualifying day
        of sickness, meaning the first 3 days were typically unpaid unless
        your employer chose to pay them anyway. From 6 April 2026, that
        waiting period was removed entirely, so SSP is now payable from the
        very first day of a qualifying sickness absence.
      </p>
      <p>
        SSP runs for a maximum of 28 weeks within what is called a period of
        incapacity for work. Separate periods of sickness that are 8 weeks
        or less apart are usually linked together and treated as one
        continuous period for the purposes of this 28-week limit, rather
        than each restarting a fresh entitlement. Once the 28 weeks are
        used up, your employer is not required to pay any more SSP, though
        an enhanced company scheme may continue separately if you have one.
      </p>

      <h2 id="company-schemes">Company sick pay schemes</h2>
      <p>
        Many employers, particularly larger organisations in the public
        sector, finance and similar industries, offer occupational or
        company sick pay schemes on top of the statutory minimum, often
        structured as full pay for a set number of weeks, followed by half
        pay for a further period, before dropping to SSP only. Smaller
        employers are more likely to offer SSP only, since there is no
        general legal requirement to pay more.
      </p>
      <p>
        It is worth reading your contract or staff handbook carefully,
        since company schemes vary enormously in generosity and structure,
        and some explicitly state that SSP is included within the company
        figure rather than paid on top of it as an extra amount. Some
        schemes also reset annually, while others track sickness over a
        rolling period, which affects how much cover you have left if you
        have already had time off sick earlier in the year. Our{" "}
        <Link href="/calculators/sick-pay-calculator-uk">
          sick pay calculator
        </Link>{" "}
        lets you model full pay, half pay or statutory-only schemes to see
        how the total compares.
      </p>

      <CalloutBox
        title="Work out your sick pay"
        description="Enter your employment status, salary and sick days for an instant SSP and company sick pay breakdown."
        href="/calculators/sick-pay-calculator-uk"
        cta="Calculate my sick pay"
      />

      <h2 id="self-employed">Self-employed and sick pay</h2>
      <p>
        Self-employed people are not entitled to SSP under any
        circumstances, regardless of how long they have been trading or how
        much National Insurance they have paid. This is one of the more
        significant trade-offs of self-employment compared with being an
        employee, alongside the lack of paid holiday, and it is worth
        planning for specifically rather than discovering it during an
        unexpected illness. Our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        covers the wider trade-offs of self-employment in more detail.
      </p>
      <p>
        New Style Employment and Support Allowance is generally the main
        state support available to self-employed people who become unable
        to work due to illness, based on your Class 2 National Insurance
        contributions record rather than your employment status. Some
        self-employed people also take out income protection insurance,
        which pays a regular income during illness in exchange for a
        premium, as a private alternative to the sick pay an employee would
        get automatically. Our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        can help you understand your overall tax position if you are
        weighing up self-employment against staying employed partly because
        of this gap, and our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        covers Income Tax and National Insurance for the self-employed in
        full.
      </p>
      <p>
        Building a cash buffer specifically for periods without SSP is one
        of the most practical steps a self-employed person can take, and our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        can help you work out how much of your profit to set aside for tax,
        leaving a clearer picture of what is genuinely available to save
        towards a sickness buffer on top.
      </p>

      <h2 id="long-term">Long-term sickness options</h2>
      <p>
        If you remain unable to work after your SSP or company sick pay
        entitlement ends, New Style Employment and Support Allowance is
        usually the next state support to look at, assessing your ability
        to work through a Work Capability Assessment. Personal Independence
        Payment is a separate benefit for the ongoing extra costs of a
        long-term health condition or disability, and is not dependent on
        your employment status or National Insurance record, so it can
        apply alongside other support.
      </p>
      <p>
        For some pension schemes, ill health early retirement may be an
        option if you are permanently unable to work due to your health,
        allowing earlier access to a pension than the normal minimum
        pension age would usually allow, though the rules and evidence
        required vary significantly by scheme. Our{" "}
        <Link href="/blog/uk-income-tax-2026-27">
          UK Income Tax 2026/27 guide
        </Link>{" "}
        is a useful reference if a change in income from any of these
        routes affects your tax position.
      </p>

      <h2 id="your-rights">Your rights when sick</h2>
      <p>
        For sickness lasting more than 7 days, including non-working days,
        your employer can ask for a fit note from your GP or another
        healthcare professional, confirming you are unfit for work or, in
        some cases, fit for work with certain adjustments. For shorter
        absences, employers usually accept self-certification without
        needing a formal note, though exact policies vary by employer.
      </p>
      <p>
        Under the Equality Act 2010, employers have a duty to make
        reasonable adjustments for employees with a disability, which can
        include changes to sickness absence policies, working patterns or
        the workplace itself, depending on the individual situation. If you
        become unwell during a period of booked annual leave, you are
        generally entitled to reclaim those days as sick leave instead of
        holiday, provided you follow your employer&apos;s usual reporting
        process. Your{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance
        </Link>{" "}
        record, built up through employment or Class 2 contributions if
        self-employed, also underpins several of the long-term benefits
        mentioned above, so it is worth checking your record periodically
        on GOV.UK.
      </p>

      <p>
        Whatever your situation, running your own numbers through our{" "}
        <Link href="/calculators/sick-pay-calculator-uk">
          sick pay calculator
        </Link>{" "}
        is the quickest way to see roughly what you would be paid for a
        given period of sickness, before checking the exact detail against
        your own contract or, if you are self-employed, against our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>
        . If your time off is related to pregnancy or maternity leave
        rather than general sickness, our{" "}
        <Link href="/calculators/maternity-pay-calculator-uk">
          maternity pay calculator
        </Link>{" "}
        covers Statutory Maternity Pay and Maternity Allowance separately.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
