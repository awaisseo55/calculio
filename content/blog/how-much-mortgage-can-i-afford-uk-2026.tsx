import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "how-lenders-decide", label: "How lenders decide" },
  { id: "income-multiples", label: "Income multiples" },
  { id: "worked-example", label: "A worked example" },
  { id: "deposit-ltv", label: "Deposit and LTV" },
  { id: "monthly-budget", label: "Your monthly budget" },
  { id: "improve-affordability", label: "Improve affordability" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate affordability" },
];

export const faq: FaqItem[] = [
  {
    question: "How much mortgage can I get on my salary in the UK?",
    answer:
      "A common starting estimate is up to 4.5 times your annual household income, but this is not a promise. The lender will also check your regular spending, debts, deposit, credit history, employment and whether repayments would remain manageable if interest rates rose.",
  },
  {
    question: "Do lenders use gross or net income for a mortgage?",
    answer:
      "Lenders normally ask for gross annual income when applying an income multiple. Their full affordability check then looks at income after tax and National Insurance alongside committed spending, essential household costs and other regular outgoings.",
  },
  {
    question: "Does a larger deposit increase how much I can afford?",
    answer:
      "A larger deposit increases your overall property budget pound for pound and reduces your loan-to-value ratio. A lower LTV can give you access to a wider choice of mortgage deals, but it does not automatically make a lender ignore its income and affordability limits.",
  },
  {
    question: "Does student loan repayment affect mortgage affordability?",
    answer:
      "It can. A student loan does not work like ordinary consumer debt, but the deduction reduces your monthly take-home pay. A lender may include it when checking how much money you have left for mortgage repayments and other household costs.",
  },
  {
    question: "Can I borrow more than 4.5 times my income?",
    answer:
      "Some lenders may offer more to certain applicants, but higher income multiples are limited and depend on the lender's criteria. A strong income does not remove the need for a full affordability check, and a larger loan creates higher payments and more exposure to rate changes.",
  },
  {
    question: "Is an online mortgage affordability result guaranteed?",
    answer:
      "No. A calculator gives an estimate based on the details and assumptions entered. Each lender uses its own criteria and checks supporting evidence before making an offer. A decision in principle is also not the same as a final mortgage offer.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        The price on a property listing is only one part of deciding what you
        can afford. Your realistic budget combines the deposit you have saved,
        the mortgage a lender may offer and the monthly payment your household
        can manage. These three figures are connected, but they are not the
        same. Our{" "}
        <Link href="/calculators/mortgage-affordability-calculator-uk">
          mortgage affordability calculator
        </Link>{" "}
        gives you a quick estimate. This guide explains what sits behind it and
        how UK lenders usually assess an application.
      </p>

      <h2 id="how-lenders-decide">How lenders decide what you can borrow</h2>
      <p>
        A lender starts with your income, then checks whether the proposed
        repayments look affordable after your other commitments. That means
        your salary matters, but it is not the whole answer. Regular loan and
        credit card payments, childcare, maintenance, travel, bills and other
        household costs can all reduce the amount available for a mortgage.
      </p>
      <p>
        FCA responsible lending rules require lenders to consider verified
        income and expenditure. They must account for committed spending,
        basic household costs and the likely effect of future interest rate
        rises. A lender cannot approve a loan only because the property is
        valuable or might rise in price. Different lenders interpret risk in
        different ways, so two banks can reach different answers using the
        same household figures.
      </p>
      <p>
        Your employment also matters. A permanent employee may show payslips,
        while a self-employed applicant will normally need evidence such as tax
        calculations, accounts or bank statements. Bonus, overtime, commission
        and freelance income may be accepted fully, partly or not at all,
        depending on how reliable it appears and the lender&apos;s policy.
      </p>

      <h2 id="income-multiples">Mortgage income multiples explained</h2>
      <p>
        A useful first estimate is to multiply gross household income by 4 to
        4.5. MoneyHelper says the maximum is usually capped at around 4.5 times
        annual income, although this is not guaranteed. Some applicants may be
        offered more, while others will be offered less after the lender checks
        spending and circumstances.
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-left">
              <th className="px-4 py-3 font-semibold text-foreground">Household income</th>
              <th className="px-4 py-3 font-semibold text-foreground">At 4 times income</th>
              <th className="px-4 py-3 font-semibold text-foreground">At 4.5 times income</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono">£35,000</td><td className="px-4 py-3 font-mono">£140,000</td><td className="px-4 py-3 font-mono">£157,500</td></tr>
            <tr><td className="px-4 py-3 font-mono">£50,000</td><td className="px-4 py-3 font-mono">£200,000</td><td className="px-4 py-3 font-mono">£225,000</td></tr>
            <tr><td className="px-4 py-3 font-mono">£70,000</td><td className="px-4 py-3 font-mono">£280,000</td><td className="px-4 py-3 font-mono">£315,000</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        For a joint application, lenders usually assess the combined income and
        the commitments of both people. Use our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        to see what reaches your bank account after Income Tax, National
        Insurance, pension and student loan deductions. That net figure is more
        useful when testing your own monthly budget.
      </p>

      <h2 id="worked-example">Worked example: a couple earning £48,000</h2>
      <p>
        Imagine two buyers earn £28,000 and £20,000, giving them gross household
        income of <strong>£48,000</strong>. At 4.5 times income, their rough
        maximum mortgage is <strong>£216,000</strong>. If they have a
        <strong> £24,000 deposit</strong>, their possible property budget is
        <strong> £240,000</strong>, before allowing for buying costs.
      </p>
      <p>
        A £216,000 repayment mortgage at an illustrative 5% interest rate over
        25 years would cost about <strong>£1,262.71 a month</strong>. Across the
        full term, the interest would total about <strong>£162,814.35</strong>
        if the rate never changed and there were no fees or overpayments. At 7%,
        the same loan and term would cost about <strong>£1,526.64 a month</strong>.
        That £263.93 difference shows why affordability must account for rates
        changing, not just the first deal advertised.
      </p>
      <p>
        The actual offer could be lower if the couple have car finance,
        childcare costs or large credit balances. It could also differ because
        of the lender&apos;s treatment of variable income. Use the{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        to compare rates and terms using your own loan amount.
      </p>

      <CalloutBox
        title="Estimate your mortgage affordability"
        description="Enter your income, deposit and monthly commitments to estimate your borrowing range, property budget and repayments."
        href="/calculators/mortgage-affordability-calculator-uk"
        cta="Calculate what I could afford"
      />

      <h2 id="deposit-ltv">How your deposit and LTV affect the result</h2>
      <p>
        Your loan-to-value ratio, or LTV, is the mortgage divided by the
        property price. A £216,000 mortgage on a £240,000 home is 90% LTV, so
        the deposit covers the remaining 10%. A larger deposit reduces the LTV
        and the amount you need to borrow. It may also open access to a wider
        range of deals or lower rates.
      </p>
      <p>
        Do not put every available pound into the deposit without accounting
        for the rest of the purchase. You may need money for a survey,
        conveyancing, mortgage fees, removals, insurance and tax. Our guide to
        the{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          real cost of buying a first home
        </Link>{" "}
        covers these items. You can also use the{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          stamp duty calculator
        </Link>{" "}
        to estimate SDLT in England and Northern Ireland, including first-time
        buyer rules where applicable.
      </p>

      <h2 id="monthly-budget">Build a monthly budget you can live with</h2>
      <p>
        The largest loan available is not automatically the right loan. Start
        with expected net income, then subtract mortgage payments, Council Tax,
        energy, water, insurance, food, transport, childcare, debt payments and
        regular saving. Flats and some estates may also have service charges.
        Leave room for repairs and costs that do not arrive every month.
      </p>
      <p>
        Test the budget at a higher interest rate and after a possible change in
        income. A longer mortgage term reduces the monthly payment, but it
        normally increases the total interest paid. Compare the monthly result
        and total cost rather than choosing a term from the payment alone. If
        you already have a mortgage, the{" "}
        <Link href="/calculators/mortgage-overpayment-calculator-uk">
          mortgage overpayment calculator
        </Link>{" "}
        shows how extra payments could change the term and interest, subject to
        your lender&apos;s rules and any early repayment charge.
      </p>

      <h2 id="improve-affordability">Ways to improve mortgage affordability</h2>
      <p>
        Reducing expensive debt can free monthly income and improve the picture
        shown to a lender. Check your credit reports for mistakes, avoid taking
        on fresh borrowing before an application and keep evidence of income
        organised. Saving a larger deposit may reduce the required mortgage and
        LTV. The{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">
          mortgage deposit guide
        </Link>{" "}
        explains common deposit bands and why the size matters.
      </p>
      <p>
        None of these steps guarantees approval. A regulated mortgage adviser
        can explain products and lender criteria for your circumstances. Check
        that any adviser or lender is authorised by the FCA before acting.
      </p>

      <h2 id="common-mistakes">Common affordability mistakes</h2>
      <ul>
        <li><strong>Treating 4.5 times income as a guaranteed offer.</strong> It is only a broad starting point.</li>
        <li><strong>Forgetting purchase costs.</strong> A deposit is not the only cash needed before completion.</li>
        <li><strong>Budgeting from gross pay.</strong> Your mortgage leaves your bank account from net pay.</li>
        <li><strong>Ignoring debts and childcare.</strong> Regular commitments can materially reduce borrowing.</li>
        <li><strong>Testing only the introductory rate.</strong> Payments may rise when a fixed deal ends or rates change.</li>
        <li><strong>Using the maximum as a target.</strong> Your comfortable household budget may be lower than a lender&apos;s ceiling.</li>
      </ul>
      <p>
        Use calculator results as a planning estimate, then compare them with a
        detailed household budget and professional mortgage advice where
        needed. A lender makes the final decision after reviewing the full
        application and supporting documents.
      </p>
    </div>
  );
}
