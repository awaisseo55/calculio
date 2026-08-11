import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Is my employer legally required to pay extra for overtime?",
    answer:
      "Not automatically. UK law does not require employers to pay a premium rate for overtime unless it is written into your contract, though your total pay including any overtime must still average out to at least the National Minimum Wage or National Living Wage across the hours you actually worked. Many employers do pay a premium as a matter of policy or to attract staff, but it is not a universal legal right.",
  },
  {
    question: "What does time and a half mean?",
    answer:
      "Time and a half means you are paid 1.5 times your normal hourly rate for overtime hours. If your standard rate is £14 an hour, time and a half works out at £21 an hour for each overtime hour worked. Double time, at twice your normal rate, is also common, particularly for weekend or bank holiday overtime.",
  },
  {
    question: "How do I check my contract for overtime terms?",
    answer:
      "Your written statement of employment particulars, which your employer must provide, should set out whether overtime is paid, at what rate, and whether it is compulsory or voluntary. If you cannot find this information, ask your employer or HR department directly, since overtime terms vary significantly between employers and even between roles at the same company.",
  },
  {
    question: "Does overtime affect my tax and National Insurance?",
    answer:
      "Yes, overtime pay is treated as normal earnings for tax and National Insurance purposes and is added to your other pay for that period. A large amount of overtime in one pay period could temporarily push some of your income into a higher tax band for that period, though this usually evens out over the tax year. Our take-home pay calculator can show the effect on your net pay.",
  },
  {
    question: "Is unpaid overtime common in the UK?",
    answer:
      "Yes, particularly in salaried roles without a fixed overtime policy, where working beyond contracted hours without extra pay is common, sometimes described as part of the job. If you are salaried and regularly work significant unpaid overtime, it is worth checking your effective hourly rate against the minimum wage, since persistently long unpaid hours can in some cases bring pay below the legal minimum.",
  },
  {
    question: "Can my employer force me to work overtime?",
    answer:
      "This depends entirely on your contract. Some contracts include a clause requiring reasonable overtime when needed, while others state overtime is voluntary. If your contract does not mention overtime, your employer generally cannot force you to work it, though it is worth checking your specific terms or asking HR if you are unsure.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Overtime pay is not always straightforward to work out, particularly
        once you factor in different rates for extra hours. This calculator
        works out your standard pay, overtime pay at time and a half, double
        time or a custom rate, and your total pay for the week, plus what
        that adds up to across a full year.
      </p>

      <h2>How to use the overtime pay calculator</h2>
      <p>
        Enter your base hourly rate, your standard contracted hours for the
        week, and how many overtime hours you have worked or expect to work.
        Choose a preset overtime rate, such as time and a quarter, time and a
        half or double time, or enter a custom multiplier if your employer
        uses a different rate. The calculator instantly shows your standard
        pay, overtime pay, total weekly pay and your effective hourly rate
        blending both.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Standard pay is simply your base hourly rate multiplied by your
        standard hours. Your overtime hourly rate is your base rate
        multiplied by the overtime multiplier you choose, and overtime pay
        is that rate multiplied by your overtime hours. Adding standard pay
        and overtime pay together gives your total pay for the week. The
        effective hourly rate divides this total by your total hours worked,
        showing what you are earning on average across every hour, standard
        and overtime combined.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone on a base rate of <strong>£14.50</strong> an hour,
        working <strong>37.5</strong> standard hours plus{" "}
        <strong>6</strong> hours of overtime at time and a half. Standard pay
        is £14.50 &times; 37.5 = <strong>£543.75</strong>. The overtime rate
        is £14.50 &times; 1.5 = £21.75 an hour, so overtime pay is £21.75
        &times; 6 = <strong>£130.50</strong>. Total pay for the week is{" "}
        <strong>£674.25</strong> across 43.5 hours, an effective hourly rate
        of <strong>£15.50</strong>. If this pattern continued every week of
        the year, that would work out at around{" "}
        <strong>£35,061</strong> a year in total pay, made up of £28,275 in
        standard pay and £6,786 in overtime.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming overtime is automatically paid at a
        premium rate. Unless it is written into your contract or agreed with
        your employer, there is no automatic legal right to an enhanced
        overtime rate, only to your total pay averaging out to at least the
        legal minimum wage across the hours worked.
      </p>
      <p>
        Another mistake is forgetting that overtime pay is taxed the same as
        any other earnings, so a particularly heavy overtime week can look
        larger on your payslip before tax than the amount that actually
        lands in your bank account. It is also easy to lose track of
        overtime hours worked informally, such as staying late without
        clocking it, which can make it harder to check your pay is correct
        later.
      </p>

      <h2>Related calculators</h2>
      <p>
        Check your effective hourly rate against the legal minimum using our{" "}
        <Link href="/calculators/minimum-wage-calculator-uk">
          minimum wage calculator
        </Link>
        , or convert between an annual salary and an hourly rate with our{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">
          salary to hourly rate calculator
        </Link>
        . To see what your overtime pay looks like after tax and National
        Insurance, use our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        , and if you are due a pay review, our{" "}
        <Link href="/calculators/salary-negotiation-calculator-uk">
          salary negotiation calculator
        </Link>{" "}
        can help you see the real value of an offer. Our guide to{" "}
        <Link href="/blog/freelancer-hourly-rate-uk-2026">
          working out your true hourly rate
        </Link>{" "}
        is also useful if you are comparing employed and self-employed pay.
      </p>
    </div>
  );
}
