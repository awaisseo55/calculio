import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much is Statutory Maternity Pay in 2026/27?",
    answer:
      "Statutory Maternity Pay is paid at 90% of your average weekly earnings for the first 6 weeks, with no cap. For the remaining 33 weeks, it drops to the lower of £187.18 a week or 90% of your average weekly earnings, giving a maximum of 39 paid weeks in total.",
  },
  {
    question: "Do I qualify for Statutory Maternity Pay?",
    answer:
      "You generally need to have worked for the same employer continuously for at least 26 weeks by the qualifying week, which is the 15th week before your baby is due, and earn on average at least £125 a week. If you do not meet these rules, you may still qualify for Maternity Allowance instead.",
  },
  {
    question: "What happens after my 39 weeks of maternity pay ends?",
    answer:
      "Statutory Maternity Pay only covers 39 of your maximum 52 weeks of maternity leave. The remaining weeks, up to 13, are unpaid unless your employer offers an enhanced scheme that covers them. You can still take the full 52 weeks of leave even though the last 13 weeks are typically unpaid.",
  },
  {
    question: "What is Maternity Allowance and who can claim it?",
    answer:
      "Maternity Allowance is paid by the Department for Work and Pensions, at the same weekly rate as Statutory Maternity Pay, for up to 39 weeks. It is designed for people who do not qualify for SMP, commonly the self-employed, or employees who have recently changed jobs and have not met the 26-week continuous employment rule.",
  },
  {
    question: "Is maternity pay taxed?",
    answer:
      "Yes, both SMP and any enhanced maternity pay from your employer count as normal earnings, so Income Tax and National Insurance are deducted through PAYE in the usual way. Your actual deductions depend on your tax code and any other income during the year, not just your maternity pay total.",
  },
  {
    question: "Do enhanced maternity schemes replace SMP or add to it?",
    answer:
      "Most enhanced schemes pay full salary for a set number of weeks instead of, rather than on top of, the statutory rate, then drop down to the standard SMP rate for the remaining statutory weeks. Always check your contract or staff handbook, since the structure varies a lot between employers.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Maternity pay in the UK is not one flat rate, it changes across your
        leave, starting higher, dropping to a standard rate, then stopping
        altogether if you take your full 52 weeks. This calculator works
        out exactly what you can expect to receive, week by week and month
        by month, based on your salary and your employer&apos;s maternity
        policy.
      </p>

      <h2>How to use the maternity pay calculator</h2>
      <p>
        Enter your current weekly salary and how many weeks of maternity
        leave you plan to take, up to the maximum of 52. Add the start date
        of your leave so we can give you a monthly breakdown, and select
        your employer&apos;s maternity policy: statutory pay only, an enhanced
        scheme with a set number of weeks of full pay before dropping to
        SMP, or an option for when you are not sure and want the statutory
        minimum as a baseline.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Statutory Maternity Pay covers the first 39 weeks of your leave. The
        first 6 weeks are paid at 90% of your average weekly earnings, with
        no cap, so higher earners genuinely get 90% of their normal pay
        during this period. The remaining 33 weeks are paid at the lower of
        the flat statutory rate, £187.18 a week, or 90% of your earnings,
        which means most people move onto the flat rate once their initial
        6 weeks are over. Any weeks beyond 39, up to the 52-week maximum,
        are unpaid unless your employer&apos;s scheme covers them. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        can help you see what any of these weekly figures look like after
        tax.
      </p>

      <h2>Worked example</h2>
      <p>
        Take an employee earning <strong>£500 a week</strong>, taking the
        full <strong>52 weeks</strong> of maternity leave, on a
        statutory-only maternity policy.
      </p>
      <p>
        The first 6 weeks are paid at 90% of £500, which is{" "}
        <strong>£450 a week</strong>, totalling{" "}
        <strong>£2,700</strong>. For the next 33 weeks, the standard SMP
        rate of £187.18 a week applies, since 90% of £500 is higher than
        the flat rate, giving another{" "}
        <strong>£6,176.94</strong>. That brings the total paid maternity
        pay across 39 weeks to <strong>£8,876.94</strong>. The remaining 13
        weeks, taking the total to the full 52-week entitlement, are
        unpaid, unless the employer chooses to pay more.
      </p>

      <h2>Common mistakes when estimating maternity pay</h2>
      <p>
        A common mistake is assuming SMP continues at 90% of earnings for
        the whole 39 weeks. In reality, the 90% rate only applies for the
        first 6 weeks, after which the flat rate usually takes over for
        higher earners, since it is nearly always lower than 90% of their
        salary once it exceeds around £208 a week. Another mistake is
        forgetting that maternity leave and maternity pay are different
        lengths, you can take up to 52 weeks of leave, but only 39 of those
        weeks are paid under the statutory scheme.
      </p>
      <p>
        Self-employed mothers sometimes assume they are simply not entitled
        to anything, when in fact Maternity Allowance, claimed through the
        Department for Work and Pensions rather than an employer, pays a
        similar weekly rate for up to 39 weeks. Our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        can help you plan your finances around a Maternity Allowance claim
        instead of SMP. If you are also managing a period of sickness
        alongside pregnancy, our{" "}
        <Link href="/calculators/sick-pay-calculator-uk">
          sick pay calculator
        </Link>{" "}
        and{" "}
        <Link href="/blog/uk-sick-pay-guide-2026">
          UK sick pay guide
        </Link>{" "}
        cover how Statutory Sick Pay works separately from maternity pay.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are still expecting, our{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/pregnancy-weeks-calculator-uk">
          pregnancy weeks calculator
        </Link>{" "}
        can help you plan exactly when your qualifying week and maternity
        leave should start. Once you know your maternity pay figure, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        can show the tax and National Insurance impact in more detail.
      </p>
    </div>
  );
}
