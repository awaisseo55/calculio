import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much is Child Benefit for 2026/27?",
    answer:
      "Child Benefit is paid at £26.05 a week for your eldest or only child, and £17.25 a week for each additional child. For a family with 2 children, that works out at £43.30 a week, or around £2,251.60 a year, before any High Income Child Benefit Charge is taken into account.",
  },
  {
    question: "What is the High Income Child Benefit Charge?",
    answer:
      "The High Income Child Benefit Charge (HICBC) claws back some or all of your Child Benefit if the higher earner in your household has an adjusted net income over £60,000. It is charged at 1% of your Child Benefit for every complete £200 of income between £60,000 and £80,000, reaching a full 100% clawback at £80,000 or above.",
  },
  {
    question: "Whose income counts for the High Income Child Benefit Charge?",
    answer:
      "Only the higher earner's individual income counts, not your combined household income. If one partner earns £70,000 and the other earns £15,000, the charge is based on the £70,000 income alone, even though the £15,000 earner might be the one who actually claims the Child Benefit.",
  },
  {
    question: "Should I still claim Child Benefit if I have to pay it all back?",
    answer:
      "Yes, it is usually still worth claiming, even if the HICBC cancels out the payment entirely. Claiming Child Benefit gives the claiming parent, often the one at home with the children, National Insurance credits towards their State Pension, which can matter a lot if they have little or no other income of their own.",
  },
  {
    question: "How do I pay the High Income Child Benefit Charge?",
    answer:
      "HMRC usually collects the charge through Self Assessment, so the higher earner needs to register and file a return if they are not already doing so. Since 2024/25, some employees can instead opt to have the charge collected directly through their PAYE tax code, avoiding the need for a Self Assessment return.",
  },
  {
    question: "Does Child Benefit stop automatically when my child turns 16?",
    answer:
      "Not immediately. Child Benefit continues automatically until 31 August after your child's 16th birthday. After that, it only continues if your child stays in approved full-time education or training, such as A-levels or an approved apprenticeship, and you tell HMRC this is happening.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Child Benefit sounds simple on paper, a flat weekly payment per
        child, but the High Income Child Benefit Charge means many families
        are not sure how much they will actually keep. This calculator
        works out your gross Child Benefit, any HICBC clawback based on the
        higher earner&apos;s income, and the net amount you actually end up
        with.
      </p>

      <h2>How to use the Child Benefit calculator</h2>
      <p>
        Enter the number of children you are claiming for, then tell us
        whether you have a partner. Add your annual income, and your
        partner&apos;s income if you have one. The calculator always uses
        whichever income is higher in the household to work out the High
        Income Child Benefit Charge, since that is how HMRC applies the
        rule, regardless of which of you actually receives the payments.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Child Benefit pays £26.05 a week for your eldest or only child and
        £17.25 a week for each additional child, with no upper limit on the
        number of children covered. Multiply the weekly total by 52 to get
        your gross annual Child Benefit. If the higher earner&apos;s income is
        £60,000 or below, that is the end of the calculation, you keep the
        full amount tax-free.
      </p>
      <p>
        Above £60,000, the High Income Child Benefit Charge starts to bite.
        HMRC charges 1% of your Child Benefit back for every complete £200
        of income between £60,000 and £80,000, so the charge reaches 100%,
        a full clawback, once income hits £80,000. Our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        can help you check exactly which tax band that income falls into,
        since the two calculations often need looking at together.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a couple with <strong>2 children</strong>, where one partner
        earns <strong>£45,000</strong> and the other earns{" "}
        <strong>£65,000</strong>.
      </p>
      <p>
        Gross Child Benefit for 2 children is £43.30 a week, or{" "}
        <strong>£2,251.60</strong> a year. Since the higher earner&apos;s income
        of £65,000 is £5,000 above the £60,000 threshold, that is 25
        complete blocks of £200, so the HICBC rate is{" "}
        <strong>25%</strong>. The charge comes to{" "}
        <strong>£562.90</strong>, leaving the family with a net Child
        Benefit of around <strong>£1,688.70</strong> for the year, paid as
        usual but repaid gradually through the higher earner&apos;s Self
        Assessment or tax code.
      </p>

      <h2>Common mistakes when working out Child Benefit</h2>
      <p>
        A common mistake is adding both partners&apos; incomes together to check
        against the £60,000 threshold. The rule only looks at the higher
        individual income, not the combined household income, so two
        partners each earning £55,000 pay no HICBC at all, while one
        partner earning £61,000 alone triggers a small charge, even though
        their household income is lower. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        is useful for checking your own gross income figure accurately
        before you compare it against the threshold.
      </p>
      <p>
        Another mistake is opting out of claiming Child Benefit altogether
        once income is high enough to lose it all through HICBC. This gives
        up the National Insurance credits that come with the claim, which
        can leave a gap in your State Pension record if you are not working
        or paying National Insurance another way. Our{" "}
        <Link href="/blog/uk-state-pension-guide-2026">
          UK State Pension guide
        </Link>{" "}
        explains why a complete National Insurance record matters so much
        for your eventual pension.
      </p>
      <p>
        If your income varies year to year, for example because you are
        self-employed, it is also worth checking your position with our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        and our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>
        , since profit can be harder to predict in advance than a fixed
        salary, making it easy to be caught out by the HICBC at the end of
        the tax year.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you know your net Child Benefit, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can show your full household income picture after tax. Our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        breaks down exactly how much tax the higher earner pays by band,
        and our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        can help you see whether you are on track for a comfortable
        retirement once childcare costs start to ease. If you are
        self-employed, our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        is the best place to check your likely profit and tax position for
        the year.
      </p>
    </div>
  );
}
