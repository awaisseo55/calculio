import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Who is eligible for the Winter Fuel Payment?",
    answer:
      "You generally need to have reached State Pension age, currently 66, by the qualifying date in September, and been living in the UK for at least part of the qualifying week. Since 2025/26, all pensioner households are eligible in principle, though anyone with income above the threshold has the payment recovered through the tax system unless they opt out.",
  },
  {
    question: "How much is the Winter Fuel Payment worth?",
    answer:
      "It is typically £200 per household, rising to £300 if you or your partner are 80 or over. It is paid once per household rather than once per person, so a couple who both qualify still receive a single combined payment rather than double.",
  },
  {
    question: "Do I need to claim the Winter Fuel Payment or is it automatic?",
    answer:
      "Most people receive it automatically if they already get the State Pension or another qualifying benefit, since DWP already holds the information needed to pay it. A smaller number of people, for example those who have deferred their State Pension and are not claiming any other benefit, may need to make a claim, so check GOV.UK if you have not received a payment by January despite expecting one.",
  },
  {
    question: "Do I have to pay the Winter Fuel Payment back if I earn too much?",
    answer:
      "If your taxable income is above the income threshold, HMRC recovers the full payment through your Self Assessment tax return or by adjusting your tax code, similar in principle to how the High Income Child Benefit Charge works. You can also choose to opt out of receiving the payment in the first place if you know your income will be above the threshold.",
  },
  {
    question: "What happens to Winter Fuel Payment eligibility if I live in a care home?",
    answer:
      "If you live in a care home for the whole of the qualifying period and also receive Pension Credit or a similar means-tested benefit, you are generally not eligible for a Winter Fuel Payment, since different support arrangements apply instead. Care home residents who do not receive a qualifying benefit may still be eligible, so it depends on your individual circumstances.",
  },
  {
    question: "Is the Winter Fuel Payment the same as the Cold Weather Payment?",
    answer:
      "No, they are separate schemes. The Winter Fuel Payment is a single annual payment based on age, paid automatically each winter. The Cold Weather Payment is a smaller, separate payment triggered automatically only when average local temperatures fall below a set threshold for a sustained period, and only for people already receiving certain means-tested benefits.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        The Winter Fuel Payment rules changed significantly in 2025/26, and
        many pensioners are still unsure whether they qualify or how much
        they can expect. This calculator gives you a quick, general estimate
        of your likely eligibility and payment amount, based on your age,
        household situation and income, though you should always confirm
        your exact position with DWP or on GOV.UK.
      </p>

      <h2>How to use the Winter Fuel Payment calculator</h2>
      <p>
        Enter your age, since eligibility is based on having reached State
        Pension age by the qualifying date each September. Add your
        household situation, whether anyone in your household is 80 or
        over, since this affects the payment amount, whether you receive
        Pension Credit or a similar means-tested benefit, whether you live
        in a care home, and your approximate annual income. The calculator
        then estimates whether you are likely to be eligible and roughly
        how much you could receive.
      </p>

      <h2>How eligibility and payment amounts are worked out</h2>
      <p>
        The starting point is your age against the current State Pension
        age of 66. If you have not reached this by the qualifying date, you
        are not eligible for that winter&apos;s payment. Assuming you have,
        the standard payment is £200 per household, rising to £300 if you
        or your partner are 80 or over. Importantly, this is paid once per
        household rather than once per eligible person, so the amount does
        not double for a couple who both qualify.
      </p>
      <p>
        Since 2025/26, the income-related clawback means that anyone with
        taxable income above the threshold has the full payment recovered
        through their tax return or tax code, rather than losing only part
        of it. If you know in advance that your income will be above the
        threshold, you can choose to opt out of receiving the payment at
        all, which avoids the payment showing up and then being reclaimed
        later. Care home residents who also receive Pension Credit or a
        similar benefit are generally excluded, since different support
        applies in that situation.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a single pensioner aged <strong>70</strong>, not living in a
        care home, not receiving Pension Credit, with an annual income of{" "}
        <strong>£20,000</strong>, below the income threshold. They are
        eligible, and since nobody in the household is 80 or over, they
        would receive the standard <strong>£200</strong> payment, paid
        automatically without needing to claim, since they already receive
        the State Pension.
      </p>
      <p>
        Compare this to a couple where one partner is <strong>82</strong>{" "}
        and the household income is <strong>£40,000</strong>, above the
        income threshold. They would be eligible for the higher{" "}
        <strong>£300</strong> payment, paid once to the household, but
        because their income exceeds the threshold, HMRC would recover the
        full £300 through their tax return unless they chose to opt out in
        advance.
      </p>

      <h2>Other winter support worth checking</h2>
      <p>
        The Winter Fuel Payment is separate from the Cold Weather Payment, a
        smaller payment triggered automatically during sustained cold spells
        for people already receiving certain means-tested benefits, and
        separate again from the Warm Home Discount, a one-off reduction
        applied to eligible households&apos; electricity bills. If you are
        trying to plan your overall household budget for winter, our{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>{" "}
        can help you estimate your gas and electricity costs for the season
        alongside any support you receive.
      </p>

      <h2>Common mistakes with Winter Fuel Payment eligibility</h2>
      <p>
        A common mistake is assuming eligibility is still limited to people
        receiving Pension Credit, which was the rule for winter 2024/25 but
        changed for 2025/26 onwards, when eligibility widened to all
        pensioner households, with a separate income-based clawback for
        higher earners instead. Another is assuming a couple who both
        qualify receive double the payment, when in fact only one combined
        payment is made per household. If you are planning further ahead for
        retirement income more broadly, our{" "}
        <Link href="/blog/uk-state-pension-guide-2026">
          UK State Pension guide
        </Link>{" "}
        and{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        are useful next steps.
      </p>

      <h2>Related calculators</h2>
      <p>
        To see how your total retirement income could look including your
        State Pension and any private pension, try our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>
        . For your household bills more broadly, our{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/council-tax-calculator-uk">
          council tax calculator
        </Link>{" "}
        help you plan for the other big winter costs alongside heating.
      </p>
    </div>
  );
}
