import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How big should my emergency fund be?",
    answer:
      "MoneyHelper suggests three to six months of essential outgoings as a general starting point, kept in an easy access savings account. The right figure for you depends on how stable your income is, whether you have dependants, and how quickly you could find new income if you needed to.",
  },
  {
    question: "What counts as an essential expense?",
    answer:
      "Essential expenses are the costs you would still need to cover even with no income, such as rent or mortgage payments, utility bills, food, insurance and minimum debt repayments. It generally does not include discretionary spending like holidays, subscriptions or eating out, which you could cut back on in an emergency.",
  },
  {
    question: "Where should I keep my emergency fund?",
    answer:
      "An easy access savings account is generally suggested for an emergency fund, since you may need the money at short notice. Locking it away in a fixed-term account or investing it can mean you cannot access it quickly, or that its value drops, right when you need it most.",
  },
  {
    question: "Should I build an emergency fund before paying off debt?",
    answer:
      "Many people find it helpful to build a small starter fund, even a few hundred pounds, before focusing heavily on paying off debt, so an unexpected cost does not force them to borrow more. After that, it often makes sense to balance further saving with paying down higher interest debt.",
  },
  {
    question: "What if I can only save a small amount each month?",
    answer:
      "Starting small is still worthwhile. Even a modest regular amount builds up over time, and having any buffer at all is generally better than none. This calculator shows roughly how long it will take to reach your target at whatever amount you can realistically commit to each month.",
  },
  {
    question: "Is an emergency fund the same as general savings?",
    answer:
      "Not quite. An emergency fund is specifically set aside for unexpected costs or a loss of income, and is best kept separate from savings you are building towards a specific goal, like a holiday or a house deposit, so you are not tempted to dip into it for everyday spending.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        An emergency fund is money set aside to cover unexpected costs or a gap in income, without having to
        rely on credit cards or loans. This calculator helps you work out a sensible target based on your
        essential monthly spending, and how long it might take to get there.
      </p>

      <h2>How to use the emergency fund calculator</h2>
      <p>
        Enter your monthly essential expenses, choose how many months of cover you want to aim for, and enter
        any savings you already have set aside. Add how much you can realistically save each month, and the
        calculator shows your target fund size, how much more you need, and roughly how long it will take to get
        there.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Your target fund size is simply your monthly essential expenses multiplied by the number of months of
        cover you choose. The calculator subtracts any savings you already have to find your remaining shortfall,
        then divides that shortfall by your monthly saving amount to estimate how many months it will take to
        reach your target.
      </p>

      <h2>Worked example</h2>
      <p>
        Say your essential monthly expenses come to <strong>£1,500</strong>, and you are aiming for{" "}
        <strong>3 months</strong> of cover, giving a target of <strong>£4,500</strong>. If you already have{" "}
        <strong>£1,000</strong> saved, your shortfall is <strong>£3,500</strong>. Saving <strong>£150 a
        month</strong>, it would take roughly <strong>24 months</strong>, about two years, to reach your full
        target.
      </p>

      <h2>Choosing how many months to aim for</h2>
      <p>
        Three months tends to suit people with stable employment and no dependants, while six months or more may
        feel more appropriate if your income is irregular, you are self-employed, or you have a family relying
        on you financially. There is no single right answer, and building up gradually towards a bigger target is
        perfectly reasonable if six months feels out of reach right now.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is including non-essential spending in the target calculation, which inflates the goal
        beyond what you would actually need to cover in a genuine emergency. Another mistake is keeping the fund
        somewhere hard to access quickly, such as a fixed-term bond, which defeats the purpose of having it
        available at short notice. It also helps to top the fund back up after using it, rather than treating it
        as a one-off target you never revisit.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once your emergency fund is on track, our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">savings goal calculator</Link> can help with other
        targets, and our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">compound interest calculator</Link> shows how
        your savings could grow over time. If you are also managing debt, our{" "}
        <Link href="/calculators/debt-payoff-calculator-uk">debt payoff calculator</Link> can help you plan
        alongside your emergency fund, and our{" "}
        <Link href="/calculators/isa-calculator-uk">ISA calculator</Link> is useful once you are ready to save
        tax-efficiently beyond your emergency fund.
      </p>
    </div>
  );
}
