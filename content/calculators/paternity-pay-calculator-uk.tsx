import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much is Statutory Paternity Pay?",
    answer:
      "Statutory Paternity Pay is paid at the lower of a flat weekly rate, currently £187.18, or 90% of your average weekly earnings, whichever is less. Most people earning a typical full-time salary receive the flat weekly rate, since 90% of their earnings works out higher than the cap. Lower earners may receive 90% of earnings instead, if that figure is smaller.",
  },
  {
    question: "How many weeks of paternity leave can I take?",
    answer:
      "Statutory Paternity Leave is either 1 or 2 consecutive weeks, taken within a set window after the birth or adoption placement. You choose whether to take 1 week or 2 when you tell your employer, and Statutory Paternity Pay is paid for whichever number of weeks you take, up to the 2-week maximum.",
  },
  {
    question: "Am I eligible for Statutory Paternity Pay?",
    answer:
      "You generally need to have worked continuously for your employer for at least 26 weeks by the 15th week before the expected week of childbirth, and earn at least the Lower Earnings Limit on average. You also usually need to be the baby's father, the mother's husband or partner, or the intended parent in a surrogacy arrangement, and be taking the leave to care for the child or support the mother.",
  },
  {
    question: "Does my employer have to pay more than the statutory amount?",
    answer:
      "No, employers are only legally required to pay the statutory rate, but some choose to offer enhanced paternity pay as part of their benefits package, sometimes matching full salary for the leave period. Check your employment contract or staff handbook to see whether an enhanced policy applies to you.",
  },
  {
    question: "Is Statutory Paternity Pay taxed?",
    answer:
      "Yes, Statutory Paternity Pay is treated as normal earnings and has Income Tax and National Insurance deducted through your employer's payroll in the usual way, alongside any other pay you receive in that period. The figures in this calculator are gross, before those deductions.",
  },
  {
    question: "Can both parents get paid leave around the birth of a child?",
    answer:
      "Yes, in different ways. The mother may be entitled to Statutory Maternity Pay or Maternity Allowance, while their partner may be entitled to Statutory Paternity Pay, and eligible couples can also look at Shared Parental Leave, which allows the mother to end her maternity leave early and share the remaining leave and pay with her partner.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        New fathers, partners and adopters in the UK are entitled to up to 2
        weeks of paid paternity leave. This calculator works out your
        Statutory Paternity Pay based on your average weekly earnings and
        how many weeks you plan to take, plus what you would receive if your
        employer offers an enhanced policy instead of just the statutory
        minimum.
      </p>

      <h2>How to use the paternity pay calculator</h2>
      <p>
        Enter your average gross weekly earnings, generally averaged over
        the 8 weeks before the qualifying week, then choose 1 or 2 weeks of
        leave. If your employer pays more than the statutory rate, switch to
        the enhanced pay option and enter the weekly amount they offer
        instead. The calculator shows your statutory weekly rate, your total
        pay for the leave, and flags if your earnings look too low to
        qualify for Statutory Paternity Pay at all.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Statutory Paternity Pay is paid at the lower of two figures: a flat
        weekly rate set by the government, currently £187.18, or 90% of your
        average weekly earnings. For most people on a typical full-time
        salary, 90% of earnings comfortably exceeds the flat rate, so they
        receive the flat rate. For lower earners, where 90% of earnings
        works out below the flat rate, the lower 90% figure applies instead.
        This total is then multiplied by however many weeks of leave you
        take, either 1 or 2.
      </p>

      <h2>Worked example</h2>
      <p>
        Someone with average weekly earnings of <strong>£650</strong> taking{" "}
        <strong>2 weeks</strong> of paternity leave: 90% of their earnings is
        £585, well above the flat rate cap, so they receive the flat rate of{" "}
        <strong>£187.18</strong> a week, giving a total of{" "}
        <strong>£374.36</strong> for the 2 weeks. By contrast, someone
        earning £180 a week would have 90% of earnings work out at £162,
        below the flat rate cap, so they would receive £162 a week instead,
        the lower of the two figures.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming paternity pay automatically matches
        your normal salary. Unless your employer has an enhanced policy,
        Statutory Paternity Pay is usually well below full pay for most
        earners, so it is worth checking your contract or asking HR whether
        an enhanced scheme applies before you plan your finances around your
        usual take-home pay.
      </p>
      <p>
        Another mistake is missing the notice deadlines. You generally need
        to tell your employer you intend to take paternity leave by the 15th
        week before the expected week of childbirth, and confirm the actual
        dates nearer the time, so leaving this too late can delay or
        complicate your leave and pay.
      </p>

      <h2>Related calculators</h2>
      <p>
        If your partner is also taking leave, our{" "}
        <Link href="/calculators/maternity-pay-calculator-uk">
          maternity pay calculator
        </Link>{" "}
        works out Statutory Maternity Pay across a full maternity leave. To
        see your net pay after tax and National Insurance, use our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        , and once your child arrives, check your{" "}
        <Link href="/calculators/child-benefit-calculator-uk">
          Child Benefit
        </Link>{" "}
        and{" "}
        <Link href="/calculators/universal-credit-calculator-uk">
          Universal Credit
        </Link>{" "}
        entitlement. Our{" "}
        <Link href="/blog/uk-maternity-pay-guide-2026">
          maternity pay guide
        </Link>{" "}
        also covers how maternity and paternity leave can work together.
      </p>
    </div>
  );
}
