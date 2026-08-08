import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is Universal Credit worked out?",
    answer:
      "Universal Credit starts with a standard allowance based on your age and whether you have a partner, then adds elements for children, housing costs and limited capability for work if they apply. This gives your maximum award, which is then reduced by 55p for every £1 you earn above your work allowance, and further reduced if you have savings between £6,000 and £16,000.",
  },
  {
    question: "What is the Universal Credit work allowance?",
    answer:
      "The work allowance is the amount you can earn before your Universal Credit starts being reduced. It only applies if you or your partner have children or a limited capability for work. It is £198 a month if your award includes help with housing costs, or £411 a month if it does not. Without children or a health-related element, there is no work allowance and the 55% taper applies from your first £1 of earnings.",
  },
  {
    question: "Can I get Universal Credit if I have savings?",
    answer:
      "Savings and capital under £6,000 do not affect your Universal Credit at all. Between £6,000 and £16,000, you lose £4.35 a month for every £250, or part of £250, above the £6,000 mark. Savings and capital of £16,000 or more usually rule out Universal Credit entirely, whatever your income.",
  },
  {
    question: "Does Universal Credit cover my council tax?",
    answer:
      "No, Council Tax Reduction is a separate scheme, run by your local council rather than the Department for Work and Pensions, so it is not included in your Universal Credit payment. If you receive Universal Credit, it is worth checking with your council directly, since many reduction schemes give priority to Universal Credit claimants.",
  },
  {
    question: "How many hours can I work on Universal Credit?",
    answer:
      "There is no fixed hours limit for Universal Credit, unlike some older benefits it replaced. Instead, your payment reduces gradually as your earnings rise, through the 55% taper, so working more hours should generally still leave you better off overall, just by a smaller amount per hour once the taper applies.",
  },
  {
    question: "How accurate is this Universal Credit calculator?",
    answer:
      "This calculator gives a simplified estimate covering the most common elements of a Universal Credit award. It does not model transitional protection, the benefit cap, deductions for advances or debts, or every less common element, so your actual award may differ. Always check the official GOV.UK benefits calculators or speak to a benefits adviser for an exact figure.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Universal Credit is one of the most complicated parts of the UK
        benefits system to estimate by hand, with a standard allowance,
        several possible elements, a work allowance, and a taper that all
        interact. This calculator walks through the main parts of the
        calculation so you can get a realistic estimate of your monthly
        payment before applying.
      </p>

      <h2>How to use the Universal Credit calculator</h2>
      <p>
        Choose whether you are a single claimant or part of a couple, enter
        your age and how many children you have, then add your monthly
        earnings after tax and your monthly rent. Include any savings you
        have, since these can reduce or remove your award entirely above
        certain limits, and tell us if you have a health condition that
        limits your capability for work. Working hours are included for
        context, since Universal Credit does not use a fixed hours rule the
        way some older benefits did.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Your Universal Credit starts with a standard allowance, which
        depends on whether you are single or in a couple and whether you
        are under 25. On top of this, a child element is added for each
        child, up to a maximum of 2 in most cases, and a housing element
        covers your rent. A limited capability for work element is added
        if this applies to you. Together these make up your maximum award
        before any deductions.
      </p>
      <p>
        If you have children or a limited capability for work, a work
        allowance lets you earn a certain amount before your Universal
        Credit is reduced, £198 a month if you get help with housing costs,
        or £411 a month if you do not. Above that amount, your award is
        reduced by 55p for every £1 you earn, known as the taper. Savings
        between £6,000 and £16,000 also reduce your award, and savings of
        £16,000 or more usually rule out a claim altogether. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        is a good starting point for working out your net monthly earnings
        figure to enter here.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a single parent, aged 30, with <strong>1 child</strong>,
        paying <strong>£700</strong> a month in rent, earning{" "}
        <strong>£400</strong> a month, with modest savings.
      </p>
      <p>
        The standard allowance for a single claimant aged 25 or over is{" "}
        <strong>£400.14</strong>. The child element adds{" "}
        <strong>£292.81</strong>, and the housing element covers the full{" "}
        <strong>£700</strong> rent, giving a maximum award of{" "}
        <strong>£1,392.95</strong> a month. Because there are housing costs
        in the award, the lower work allowance of £198 applies, so £202 of
        the £400 earnings is above the allowance. That £202 is reduced by
        55%, a taper deduction of <strong>£111.10</strong>, leaving a final
        Universal Credit payment of around{" "}
        <strong>£1,281.85</strong> a month, or roughly £15,382 over a full
        year.
      </p>

      <h2>Common mistakes when estimating Universal Credit</h2>
      <p>
        A common mistake is entering gross earnings instead of net,
        take-home earnings. Universal Credit earnings are based on what you
        actually receive after tax, National Insurance and pension
        contributions, not your gross salary, so always check your payslip
        or our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        first. Another mistake is assuming Council Tax is included in
        Universal Credit. It is not, Council Tax Reduction is a separate
        scheme run by your local council, so use our{" "}
        <Link href="/calculators/council-tax-calculator-uk">
          council tax calculator
        </Link>{" "}
        to work out your council tax bill separately, then check with your
        council about a reduction.
      </p>
      <p>
        It is also easy to overlook the work allowance rules. If you have
        no children and no limited capability for work, there is no work
        allowance at all, so the 55% taper starts reducing your award from
        your very first pound of earnings, not after a set threshold. If
        you are off sick and your earnings drop, our{" "}
        <Link href="/calculators/sick-pay-calculator-uk">
          sick pay calculator
        </Link>{" "}
        and our{" "}
        <Link href="/blog/uk-sick-pay-guide-2026">
          UK sick pay guide
        </Link>{" "}
        can help you understand how Statutory Sick Pay interacts with your
        overall income while you claim.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are a pensioner rather than claiming Universal Credit, check
        our{" "}
        <Link href="/calculators/winter-fuel-payment-calculator-uk">
          Winter Fuel Payment calculator
        </Link>{" "}
        for a separate form of support. Our{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>{" "}
        can help you budget for gas and electricity alongside your
        Universal Credit award, and our{" "}
        <Link href="/calculators/council-tax-calculator-uk">
          council tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        round out a full picture of your household budget.
      </p>
    </div>
  );
}
