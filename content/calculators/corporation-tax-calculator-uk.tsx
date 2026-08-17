import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the current UK Corporation Tax rate?",
    answer:
      "The main rate is 25%, applying in full to annual profits of £250,000 or more. A small profits rate of 19% applies to profits of £50,000 or less. Profits between these two limits get marginal relief, which smooths the effective rate gradually between 19% and 25% rather than jumping straight from one rate to the other.",
  },
  {
    question: "What is marginal relief and how does it work?",
    answer:
      "Marginal relief reduces your Corporation Tax bill if your profit falls between £50,000 and £250,000, so you are not simply charged the full 25% main rate the moment you cross £50,000. HMRC calculates it using a standard formula based on how far your profit sits below the £250,000 upper limit, giving a smoothly increasing effective rate as profit rises through this band.",
  },
  {
    question: "Do the £50,000 and £250,000 limits change if I have more than one company?",
    answer:
      "Yes, these limits are shared and divided between any associated companies you control, which can bring a company into the marginal relief band or main rate sooner than it would be on its own. This calculator assumes a single company with no associates, so groups of associated companies should check their specific position, ideally with an accountant.",
  },
  {
    question: "Is Corporation Tax charged on turnover or profit?",
    answer:
      "Corporation Tax is charged on your company's taxable profit, which is your income minus allowable business expenses and any reliefs or allowances you can claim, not on your total turnover. Getting your allowable expenses and any available reliefs right can significantly affect your final taxable profit figure.",
  },
  {
    question: "When do I need to pay Corporation Tax?",
    answer:
      "Corporation Tax is normally due 9 months and 1 day after the end of your company's accounting period, though you must file your Company Tax Return within 12 months of the end of that period. Larger companies with profits above £1.5 million pay in quarterly instalments instead, under separate rules.",
  },
  {
    question: "Does this calculator account for allowances like the Annual Investment Allowance?",
    answer:
      "No, this calculator works from a single taxable profit figure you enter, after you have already applied any capital allowances, reliefs and allowable expenses. If you have not yet worked out your allowable expenses and capital allowances, your final taxable profit, and therefore your Corporation Tax bill, may differ from a simple turnover-based estimate.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        UK limited companies pay Corporation Tax on their taxable profits,
        at a rate that depends on how much profit the company makes. This
        calculator works out your Corporation Tax bill, your profit after
        tax, and your effective tax rate, correctly applying marginal relief
        if your profit falls between the small profits and main rate
        thresholds.
      </p>

      <h2>How to use the Corporation Tax calculator</h2>
      <p>
        Enter your company&apos;s annual taxable profit, after allowable business
        expenses, capital allowances and any other reliefs have already been
        applied. The calculator automatically works out which rate band your
        profit falls into, applies marginal relief if relevant, and shows
        your Corporation Tax bill, profit after tax, and effective tax rate
        as a percentage of profit.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Profits of £50,000 or less are taxed in full at the small profits
        rate of 19%. Profits of £250,000 or more are taxed in full at the
        main rate of 25%. For profits in between, marginal relief applies:
        tax is first calculated at the 25% main rate, then reduced by a
        relief amount worked out as the gap between your profit and the
        £250,000 upper limit, multiplied by HMRC&apos;s standard marginal relief
        fraction of 3/200. This produces an effective rate that rises
        smoothly from just above 19% to 25% as profit increases through the
        band.
      </p>

      <h2>Worked example</h2>
      <p>
        A company with <strong>£80,000</strong> of taxable profit falls into
        the marginal relief band. Tax at the main rate would be £80,000
        &times; 25% = £20,000. Marginal relief is (£250,000 &minus;
        £80,000) &times; 3/200 = <strong>£2,550</strong>. Corporation Tax
        due is £20,000 &minus; £2,550 = <strong>£17,450</strong>, leaving{" "}
        <strong>£62,550</strong> profit after tax, an effective rate of
        around <strong>21.81%</strong>, comfortably between the 19% and 25%
        headline rates.
      </p>
      <p>
        For comparison, a smaller company with <strong>£40,000</strong> of
        taxable profit stays entirely within the small profits rate, paying
        £40,000 &times; 19% = <strong>£7,600</strong>, an effective rate of
        exactly 19%. A larger company with <strong>£300,000</strong> of
        taxable profit is above the £250,000 upper limit, so the full main
        rate applies with no marginal relief: £300,000 &times; 25% ={" "}
        <strong>£75,000</strong>, an effective rate of exactly 25%. Together,
        these three examples show how the effective rate climbs steadily
        from 19% to 25% as profit moves through and beyond the marginal
        relief band, rather than jumping in a single step.
      </p>

      <h2>Reducing your taxable profit legitimately</h2>
      <p>
        Since Corporation Tax is charged on taxable profit rather than
        turnover, anything that legitimately reduces that profit figure
        reduces the tax bill too. Common examples include claiming all
        allowable business expenses, using capital allowances such as the
        Annual Investment Allowance on qualifying equipment purchases, and
        making employer pension contributions on behalf of directors or
        staff, which are generally deductible business expenses in their own
        right. Research and development relief may also be available for
        companies carrying out qualifying innovation work, though the rules
        are detailed and specific to the type of work involved.
      </p>
      <p>
        None of this changes the rates or thresholds this calculator uses,
        only the taxable profit figure you enter into it. Because getting
        allowable expenses, reliefs and capital allowances right can make a
        meaningful difference to the final bill, many companies, particularly
        once profit moves into the marginal relief band or above, find it
        worthwhile to have an accountant review their position each year
        rather than estimating taxable profit informally.
      </p>

      <h2>Corporation Tax versus other business taxes</h2>
      <p>
        Corporation Tax is only one of several taxes a limited company deals
        with. VAT is charged separately on qualifying sales once a business
        is VAT registered, regardless of whether the company is profitable,
        and is accounted for quite differently from Corporation Tax. When
        profit is eventually paid out to shareholders as dividends, a
        further layer of personal dividend tax applies on top, at the
        individual&apos;s own tax rates, which is why the total tax
        &ldquo;take&rdquo; on company profit extracted as dividends is
        usually higher than the Corporation Tax rate alone suggests. Salary
        paid to directors or employees is a deductible expense against
        Corporation Tax, but is instead subject to Income Tax and National
        Insurance at the personal level.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming Corporation Tax jumps straight from 19%
        to 25% once profit passes £50,000, missing the marginal relief band
        entirely and overestimating the bill for mid-sized profits. Another
        is forgetting that the £50,000 and £250,000 limits are shared across
        any associated companies under common control, which can push a
        smaller company into a higher effective rate sooner than expected.
      </p>
      <p>
        It is also easy to confuse taxable profit with turnover or with the
        profit shown in management accounts before allowable expenses,
        capital allowances and reliefs have been applied. Getting your
        allowable expenses right, ideally with the help of an accountant,
        has a direct effect on the taxable profit figure this calculator
        needs to be accurate. Finally, missing the filing and payment
        deadlines, generally 9 months and 1 day after your accounting period
        ends for payment, and 12 months for the return itself, can lead to
        interest and penalties on top of the tax actually owed.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are weighing up how to pay yourself from the company, our{" "}
        <Link href="/calculators/dividend-vs-salary-calculator-uk">
          dividend vs salary calculator
        </Link>{" "}
        compares the two routes after Corporation Tax and personal tax. Our{" "}
        <Link href="/calculators/break-even-calculator-uk">
          break-even calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/profit-margin-calculator-uk">
          profit margin calculator
        </Link>{" "}
        help with pricing decisions before profit reaches the taxable stage,
        and our{" "}
        <Link href="/calculators/vat-calculator-uk">VAT calculator</Link>{" "}
        handles VAT separately from Corporation Tax. If you are still
        deciding between operating as a sole trader or a limited company,
        our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        covers the sole trader side of that comparison. If a client is
        overdue on an invoice, our{" "}
        <Link href="/calculators/late-payment-interest-calculator-uk">
          late payment interest calculator
        </Link>{" "}
        works out the statutory interest and compensation you can claim.
      </p>
    </div>
  );
}
