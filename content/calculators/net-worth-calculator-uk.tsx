import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is net worth?",
    answer:
      "Net worth is the value of everything you own minus everything you owe. It can include cash, investments, pension pots, property equity and other assets, less mortgage balances, loans and credit card debt.",
  },
  {
    question: "Should I include my pension in net worth?",
    answer:
      "Many people include pension pots because they are part of long-term wealth. It can also help to look at liquid net worth separately, since pension money is usually not available until later life.",
  },
  {
    question: "Should I include my home?",
    answer:
      "You can include your home value, but subtract the mortgage balance to show equity. Some people track net worth both with and without their main home because it is not as easy to spend as cash or investments.",
  },
  {
    question: "What if my net worth is negative?",
    answer:
      "A negative net worth simply means your debts are higher than your listed assets at the moment. It is common early in adult life, after study, buying a first home or taking on car finance, and it can improve over time as debts fall and savings grow.",
  },
  {
    question: "How often should I calculate net worth?",
    answer:
      "Quarterly or yearly is usually enough for most households. Checking too often can make normal market movements feel more important than they are.",
  },
  {
    question: "Is net worth the same as income?",
    answer:
      "No. Income is what you earn over a period, while net worth is a snapshot of assets minus debts on a given date.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Your net worth is a simple snapshot of your financial position. It adds up what you own, subtracts what
        you owe, and shows the difference. This UK net worth calculator covers cash, investments, pensions,
        property, mortgages and other debts, so you can see the bigger picture without building a spreadsheet.
      </p>

      <h2>How to use this net worth calculator</h2>
      <p>
        Enter your main asset values and debt balances. Use current estimates rather than perfect figures. For
        property, enter a realistic market value and your outstanding mortgage balance. For pensions and
        investments, use the latest statement or app value. If you want to grow one part of the total, our{" "}
        <Link href="/calculators/pension-calculator-uk">pension calculator</Link>
        ,{" "}
        <Link href="/calculators/isa-calculator-uk">ISA calculator</Link>{" "}
        and{" "}
        <Link href="/calculators/compound-interest-calculator-uk">compound interest calculator</Link>{" "}
        can help you model future growth.
      </p>

      <h2>The formula explained in plain English</h2>
      <p>
        Net worth equals total assets minus total debts. Assets are things with value, such as savings, pensions,
        investments, property and valuable possessions. Debts are amounts you owe, such as a mortgage, personal
        loan, credit card balance or car finance. The calculator also shows home equity, which is property value
        minus mortgage balance, and liquid net worth, which focuses on cash and investments after non-mortgage
        debts.
      </p>

      <h2>Worked example</h2>
      <p>
        Imagine you have £8,000 in savings, £12,000 invested, a pension worth £45,000, a home worth £260,000 and
        £5,000 of other assets. Your total assets are £330,000. If your mortgage balance is £190,000 and your other
        debts are £4,000, total debts are £194,000. Your estimated net worth is £136,000. Your home equity is
        £70,000, and your liquid net worth is £16,000 (£8,000 plus £12,000 minus £4,000).
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        The first mistake is using optimistic property values and old debt balances. A net worth tracker is more
        useful when the figures are cautious. The second is comparing yourself with other people. Age, region,
        family support, housing history and pension access all matter. The third is forgetting that a pension is
        long-term money. Our{" "}
        <Link href="/blog/uk-state-pension-guide-2026">UK State Pension guide</Link>{" "}
        and{" "}
        <Link href="/blog/isa-guide-uk-2026-27">ISA guide UK 2026/27</Link>{" "}
        explain how different savings pots can play different roles.
      </p>

      <h2>Related calculators</h2>
      <p>
        Use the{" "}
        <Link href="/calculators/debt-payoff-calculator-uk">debt payoff calculator</Link>{" "}
        if debts are pulling your net worth down. The{" "}
        <Link href="/calculators/emergency-fund-calculator-uk">emergency fund calculator</Link>{" "}
        helps build a cash buffer, while the{" "}
        <Link href="/calculators/pension-calculator-uk">pension calculator</Link>{" "}
        and{" "}
        <Link href="/calculators/isa-calculator-uk">ISA calculator</Link>{" "}
        help model longer-term assets.
      </p>
    </div>
  );
}
