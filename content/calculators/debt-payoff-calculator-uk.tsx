import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the debt snowball method?",
    answer:
      "The debt snowball method means paying the minimum on every debt, then putting any extra money towards whichever debt has the smallest balance, regardless of its interest rate. Once that debt is cleared, its minimum payment rolls into the next smallest, building momentum, which many people find motivating even though it is not always the cheapest method.",
  },
  {
    question: "What is the debt avalanche method?",
    answer:
      "The debt avalanche method means paying the minimum on every debt, then putting any extra money towards whichever debt has the highest interest rate, regardless of its balance. This clears the most expensive debt first, which usually means paying less total interest over the whole payoff period compared with the snowball method.",
  },
  {
    question: "Which method should I use, snowball or avalanche?",
    answer:
      "Avalanche usually saves you more money in total interest, since it tackles your most expensive debt first. Snowball can be more motivating for some people, since clearing a small balance quickly provides an early win that helps you stick with the plan. This calculator shows both side by side so you can weigh up the money saved against the motivational difference for your own situation.",
  },
  {
    question: "Why do the results show the same number of months sometimes?",
    answer:
      "Both methods put exactly the same total amount towards your debts each month, the combined minimums plus your extra payment, so they often clear all your debts in a similar or identical overall timeframe. The main difference is usually in total interest paid and the order individual debts are cleared, not necessarily the final payoff date.",
  },
  {
    question: "What if my extra payment is not enough to make progress?",
    answer:
      "If your combined minimum payments and extra amount do not cover the interest building up across your debts, the balance will grow rather than shrink, and the calculator will flag this rather than showing a payoff date. In this situation, increasing your monthly payment, or looking at a lower-interest balance transfer or consolidation option, is worth considering.",
  },
  {
    question: "Should I include my mortgage in this calculator?",
    answer:
      "This calculator is designed for unsecured debts such as credit cards, store cards, personal loans and car finance, which typically carry higher interest rates and shorter terms. A mortgage is usually best planned separately, since it is secured against your home and normally has a much longer term and lower rate.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        When you are juggling more than one debt, the order you pay them off
        in makes a real difference to how much interest you pay and how
        quickly you become debt-free. This calculator compares the two most
        popular strategies, the debt snowball and the debt avalanche, side
        by side using your own balances, interest rates and minimum
        payments.
      </p>

      <h2>How to use the debt payoff calculator</h2>
      <p>
        Add each debt you want to include, with its current balance, annual
        interest rate (APR) and minimum monthly payment. Then enter any
        extra amount you can put towards your debts each month, on top of
        all your minimum payments combined. The calculator simulates both
        the snowball and avalanche methods and shows how many months each
        would take, and how much total interest each would cost.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Every month, the calculator adds interest to each remaining debt
        based on its APR, then applies the minimum payment to every debt.
        Any money left over, your extra payment plus the minimum payments
        freed up from debts you have already cleared, is then put entirely
        towards one target debt. The snowball method always targets whichever
        remaining debt has the smallest balance. The avalanche method always
        targets whichever remaining debt has the highest interest rate. Once
        a debt reaches zero, its minimum payment is added to the pool used to
        attack the next target debt, which is why both methods tend to speed
        up as debts are cleared.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a £500 store card at 5% APR with a £20 minimum payment, and a{" "}
        £3,000 credit card at 24% APR with a £90 minimum payment, with{" "}
        <strong>£150</strong> extra to put towards debt each month. Using the
        snowball method, the calculator clears the smaller store card first,
        in month 3, then the credit card by month 16, paying around{" "}
        <strong>£598</strong> in total interest. Using the avalanche method,
        the calculator targets the higher-rate credit card first, clearing it
        by month 15 and the store card the month after, also finishing by
        month 16, but paying only around <strong>£511</strong> in total
        interest, a saving of roughly <strong>£87</strong> simply from
        changing the order the debts are attacked in.
      </p>
      <p>
        In this example both methods take the same overall time, since the
        total monthly payment is identical either way, but the avalanche
        method still comes out cheaper because it prioritises the most
        expensive debt. Try entering your own debts and extra payment amount
        in the calculator above to see the difference for your situation.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is only ever paying minimum payments, which can
        mean a high-interest debt like a credit card takes many years to
        clear and costs far more in interest than the original balance.
        Even a modest extra payment each month, directed strategically,
        makes a significant difference over time.
      </p>
      <p>
        Another mistake is ignoring interest rates entirely and always
        paying off whichever debt feels most urgent or annoying, rather than
        following a consistent method. It is also worth checking whether a
        balance transfer credit card or debt consolidation loan could reduce
        your average interest rate before committing to a long payoff plan,
        since a lower rate on the same balance reduces the total interest
        under either method.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are focused on a single credit card, our{" "}
        <Link href="/calculators/credit-card-payoff-calculator-uk">
          credit card payoff calculator
        </Link>{" "}
        goes into more detail on that specific balance, and our{" "}
        <Link href="/calculators/loan-repayment-calculator-uk">
          loan repayment calculator
        </Link>{" "}
        covers a standard personal loan. Once your debts are cleared, our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        can help you redirect that same monthly payment towards building an
        emergency fund or savings goal instead. To understand why interest
        rate matters so much to the avalanche method, see our guide to{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest explained
        </Link>
        .
      </p>
    </div>
  );
}
