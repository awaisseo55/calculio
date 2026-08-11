import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Is it always more tax-efficient to take dividends instead of salary?",
    answer:
      "Not always, but dividends are often more tax-efficient for company directors, mainly because dividends do not attract employee or employer National Insurance, while salary does. However, salary is a deductible business expense that reduces Corporation Tax, and paying at least a small salary can protect your State Pension record, so the full picture depends on your specific numbers.",
  },
  {
    question: "Why does the calculator ask for a Corporation Tax rate?",
    answer:
      "Dividends can only be paid from company profit after Corporation Tax has already been deducted, so the rate you enter reduces the pot available to distribute as a dividend. Use 19% if your company's profit is £50,000 or less, 25% if it is £250,000 or more, or check our Corporation Tax calculator for your effective rate if your profit falls in between.",
  },
  {
    question: "What is a common tax-efficient approach for company directors?",
    answer:
      "Many directors take a small salary, often around the National Insurance thresholds, to secure a qualifying year for the State Pension while triggering little or no personal tax or National Insurance, then take the rest of their income as dividends. This calculator compares two clean extremes, pure salary and pure dividend, so you can see the scale of the difference; a mixed approach with an accountant is common in practice.",
  },
  {
    question: "Does this calculator include Employment Allowance?",
    answer:
      "No. Employment Allowance can reduce or eliminate employer National Insurance for many companies, but it is not available where the company's only employee is also a director owning more than 50% of the company, which describes many single-director contracting businesses. If your company has other employees and qualifies, your actual salary route costs would be lower than shown here.",
  },
  {
    question: "Does salary reduce my Corporation Tax bill?",
    answer:
      "Yes, salary and employer National Insurance are both allowable business expenses, which reduce your company's taxable profit and therefore its Corporation Tax bill. This calculator accounts for that by treating the whole company profit figure as the pot funding either route, rather than adding salary as a separate deduction on top.",
  },
  {
    question: "Should I get professional advice before deciding?",
    answer:
      "Yes. This calculator is a planning tool to illustrate the difference between two approaches, not personalised tax advice. An accountant can factor in your full circumstances, including other income, pension contributions, Employment Allowance eligibility, dividend timing and your company's specific position, and help you set up a structure that works for you.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        One of the most common questions for UK limited company directors is
        whether to take money out of the company as salary, as dividends, or
        a mix of both. This calculator compares the two routes directly,
        showing your net personal income after Corporation Tax, Income Tax,
        National Insurance and dividend tax for the same amount of company
        profit.
      </p>

      <h2>How to use the dividend vs salary calculator</h2>
      <p>
        Enter the company profit available to pay you this year, any other
        annual income you already have from elsewhere, and the Corporation
        Tax rate that applies to this profit. The calculator works out what
        you would take home if the entire amount were paid as salary,
        compared with what you would take home if the entire amount were
        paid as a dividend after Corporation Tax, and shows which route nets
        you more.
      </p>

      <h2>How the calculation works</h2>
      <p>
        For the salary route, the calculator works out the gross salary
        that, once employer National Insurance is added on top, uses up the
        full company profit figure. Income Tax and employee National
        Insurance are then calculated on that salary, alongside any other
        income you already have, to find your net take-home amount.
      </p>
      <p>
        For the dividend route, the calculator applies your chosen
        Corporation Tax rate to the full company profit first, since
        dividends can only be paid from profit after tax. The remaining
        amount is treated as your dividend, and dividend tax is calculated
        on top, using your dividend allowance and the correct dividend tax
        bands alongside any other income you have.
      </p>

      <h2>Worked example</h2>
      <p>
        With <strong>£60,000</strong> of company profit available, no other
        income, and a 19% Corporation Tax rate: taking it all as salary
        means a gross salary of around <strong>£52,826</strong>, after
        employer National Insurance of around <strong>£7,174</strong> is
        deducted from the £60,000 pot. Income Tax and employee National
        Insurance on that salary come to around <strong>£11,630</strong>,
        leaving a net take-home of around <strong>£41,197</strong>.
      </p>
      <p>
        Taking the same £60,000 as a dividend instead means paying{" "}
        <strong>£11,400</strong> in Corporation Tax first, leaving a{" "}
        <strong>£48,600</strong> dividend. Dividend tax on that comes to
        around <strong>£3,109</strong>, leaving a net take-home of around{" "}
        <strong>£45,491</strong>, about <strong>£4,295 more</strong> than the
        salary route, in this example.
      </p>

      <p>
        At a higher profit level, the gap narrows in percentage terms but
        can still be significant in cash terms. With{" "}
        <strong>£120,000</strong> of company profit and a 25% Corporation
        Tax rate, the salary route produces a gross salary of around{" "}
        <strong>£105,000</strong>, with employer National Insurance of
        around <strong>£15,000</strong>, and Income Tax plus employee
        National Insurance of around <strong>£34,543</strong>, leaving a net
        take-home of around <strong>£70,457</strong>. The dividend route
        pays <strong>£30,000</strong> in Corporation Tax first, leaving a{" "}
        <strong>£90,000</strong> dividend, with dividend tax of around{" "}
        <strong>£16,664</strong>, leaving a net take-home of around{" "}
        <strong>£73,336</strong>, still around <strong>£2,879 more</strong>{" "}
        than the salary route at this profit level.
      </p>

      <h2>Why the salary route costs more than it first appears</h2>
      <p>
        Employer National Insurance is easy to overlook, since it never
        appears on a payslip the way Income Tax and employee National
        Insurance do, but it is a real cost the company pays on top of the
        salary itself. At 15% above the secondary threshold, it meaningfully
        reduces how much of a fixed company profit figure can actually reach
        the director as gross salary in the first place, before personal tax
        is even considered. This is one of the main structural reasons
        dividends often come out ahead for company directors specifically,
        even though dividends are paid from profit that has already been
        taxed once through Corporation Tax.
      </p>

      <h2>The blended small-salary-plus-dividends approach</h2>
      <p>
        In practice, many directors do not choose one extreme or the other.
        A common approach is to pay a small salary, often set around the
        Income Tax personal allowance or the National Insurance thresholds,
        which triggers little or no personal tax while still counting as a
        qualifying year towards the State Pension, and to take the
        remainder of their income as dividends. Because a small salary below
        the relevant thresholds costs the company very little in employer
        National Insurance and is still a deductible expense against
        Corporation Tax, this blended approach often captures much of the
        benefit of both routes at once. This calculator deliberately compares
        two clean extremes, pure salary and pure dividend, to illustrate the
        scale of the difference; modelling a specific blended strategy is
        best done with an accountant who can factor in your exact
        circumstances.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is comparing salary and dividends without factoring
        in employer National Insurance, which is a real cost the company
        bears on top of the salary itself and significantly affects the
        comparison. Another is ignoring Corporation Tax on the dividend
        route entirely, since dividends only ever come from profit that has
        already been taxed once at company level.
      </p>
      <p>
        It is also easy to overlook that a salary of zero means no
        qualifying year towards your State Pension record, which is why
        many directors still take a small salary even when dividends are
        more tax-efficient overall. Another mistake is forgetting that
        dividends can only legally be paid from available profit, called
        distributable reserves, so a company cannot pay a dividend it has
        not actually earned, unlike salary, which can be paid regardless of
        current profitability as long as the company can afford it.
      </p>

      <h2>Related calculators</h2>
      <p>
        Check your exact Corporation Tax rate, including marginal relief,
        with our{" "}
        <Link href="/calculators/corporation-tax-calculator-uk">
          Corporation Tax calculator
        </Link>
        . Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/dividend-tax-calculator-uk">
          dividend tax calculator
        </Link>{" "}
        break down each route in more detail on its own, and our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        shows how employee NI is worked out. If you are still deciding
        between sole trader and limited company status, our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        covers the sole trader alternative.
      </p>
    </div>
  );
}
