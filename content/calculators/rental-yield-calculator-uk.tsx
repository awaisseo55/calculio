import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is a good rental yield in the UK?",
    answer:
      "There is no single 'good' figure, since it depends heavily on location, property type and your goals, but gross yields of 5% to 8% are commonly seen as solid in much of the UK, while prime London property often yields lower gross returns, sometimes 2% to 4%, with more of the return expected from capital growth instead.",
  },
  {
    question: "What is the difference between gross yield and net yield?",
    answer:
      "Gross yield is simply the annual rent divided by the property price, ignoring costs. Net yield goes further, deducting running costs such as management fees, maintenance and void periods, giving a more realistic picture of what the property actually returns after expenses, though it still excludes your mortgage costs.",
  },
  {
    question: "What is cash-on-cash return and why does it matter?",
    answer:
      "Cash-on-cash return measures the cash profit you make each year against the actual cash you put in, namely your deposit and buying costs, rather than against the full property value. It is particularly useful for mortgaged buy-to-let purchases, since a highly leveraged property can show a strong cash-on-cash return even when its net yield looks modest.",
  },
  {
    question: "Does this calculator include tax on rental income?",
    answer:
      "No, this calculator focuses on yield and cash flow before tax. Rental profit is taxable income and is added to your other income for Income Tax purposes, and mortgage interest relief for individual landlords is given as a basic-rate tax credit rather than a full deduction, so it is worth checking your position with an accountant or using our income tax calculator to see how rental profit would affect your overall tax bill.",
  },
  {
    question: "Why does this calculator assume an interest-only mortgage?",
    answer:
      "Most buy-to-let mortgages in the UK are arranged on an interest-only basis, since landlords typically plan to repay the capital when the property is eventually sold or remortgaged. This calculator reflects that common structure. If your mortgage is on a capital repayment basis, your actual monthly cash flow will be lower than shown here, since you would also be paying down the loan itself.",
  },
  {
    question: "What costs should I budget for beyond the ones in this calculator?",
    answer:
      "Beyond management fees, maintenance and voids, budget for stamp duty (which carries a surcharge for additional properties), landlord safety certificates, letting agent tenant-find fees, and an emergency fund for larger repairs such as a boiler replacement. Our stamp duty calculator can help you estimate that upfront cost before you buy.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Rental yield is the starting point for judging whether a buy-to-let
        property stacks up financially, but a single headline percentage can
        hide a lot. This calculator works out your gross yield, your net
        yield after running costs, and your cash-on-cash return once a
        mortgage is factored in, so you can compare properties on a
        realistic, like-for-like basis.
      </p>

      <h2>How to use the rental yield calculator</h2>
      <p>
        Enter the property price and the monthly rent you expect to achieve,
        then your deposit and mortgage interest rate if you are buying with
        finance. The calculator assumes a common interest-only buy-to-let
        mortgage structure. Adjust the management fee, maintenance allowance,
        expected void weeks per year and any other annual costs, such as
        landlord insurance or a service charge, to match your own situation.
        Sensible starting defaults are provided, but every property and
        letting agent is different, so it is worth using your own figures
        where you have them.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Gross yield is the simplest measure: annual rent divided by property
        price. It ignores costs entirely and is mostly useful for a quick,
        broad comparison between properties. Net yield is more realistic,
        starting from rent adjusted for expected void periods, then
        deducting management fees and a maintenance allowance calculated as
        a percentage of rent, plus any other annual costs you enter, all
        divided by the property price.
      </p>
      <p>
        Cash-on-cash return goes a step further again, deducting the annual
        interest on your mortgage from net income, then dividing by your
        actual cash deposit rather than the full property price. This is
        often the most useful figure for a mortgaged purchase, since it
        reflects the actual return on the money you have put in, rather than
        the value of the property as a whole.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a <strong>£220,000</strong> flat let for <strong>£1,100</strong> a
        month, bought with a <strong>£55,000</strong> deposit (25%) and an
        interest-only mortgage at <strong>5.5%</strong>. Using typical
        defaults of a 12% management fee, a 10% maintenance allowance and 2
        void weeks a year, plus £600 in other annual costs:
      </p>
      <p>
        Gross yield is £13,200 &divide; £220,000 = <strong>6%</strong>.
        After voids, effective annual rent is around{" "}
        <strong>£12,692</strong>. Deducting the £1,523 management fee, £1,269
        maintenance allowance and £600 other costs leaves a net annual
        income of roughly <strong>£9,300</strong>, giving a net yield of
        around <strong>4.23%</strong>. The £165,000 mortgage at 5.5%
        interest-only costs £9,075 a year, leaving a net annual cash flow of
        just <strong>£225</strong>, or about £19 a month, a cash-on-cash
        return of roughly <strong>0.41%</strong> on the £55,000 deposit put
        in. This shows how thin the actual cash return can be on a
        mortgaged purchase, even when the headline gross yield looks
        reasonable.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The most common mistake is quoting or comparing only gross yield,
        which flatters properties with high running costs or long void
        periods and says nothing about actual cash flow once a mortgage is
        in place. Always check the net yield and cash-on-cash return before
        judging whether a property is a good investment.
      </p>
      <p>
        Another common mistake is underestimating void periods and
        maintenance, particularly on older properties or in areas with
        higher tenant turnover. It is also easy to forget that rental profit
        is taxable, and that landlords no longer get full tax relief on
        mortgage interest, only a basic-rate credit, which can significantly
        reduce the true after-tax return compared with the pre-tax figures
        shown by a yield calculator.
      </p>
      <p>
        Finally, remember that buying an additional property in England or
        Northern Ireland usually attracts a stamp duty surcharge on top of
        the standard bands, which needs to be budgeted for as an upfront
        cost rather than an ongoing one.
      </p>

      <h2>Related calculators</h2>
      <p>
        Use our{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          stamp duty calculator
        </Link>{" "}
        to estimate the upfront tax on a buy-to-let purchase, including the
        additional property surcharge, and our{" "}
        <Link href="/calculators/mortgage-calculator-uk">
          mortgage calculator
        </Link>{" "}
        if you want to model a repayment rather than interest-only mortgage.
        Since rental profit is added to your other income for tax purposes,
        our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        can help you see the effect on your overall tax bill, and our{" "}
        <Link href="/calculators/capital-gains-tax-calculator-uk">
          Capital Gains Tax calculator
        </Link>{" "}
        is useful when you come to plan an eventual sale. For more on the
        upfront costs of buying, see our guide to{" "}
        <Link href="/blog/how-much-stamp-duty-uk-2026">
          how much stamp duty you will pay
        </Link>
        .
      </p>
    </div>
  );
}
