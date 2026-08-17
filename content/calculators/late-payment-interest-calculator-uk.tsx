import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is statutory interest on late commercial payments?",
    answer:
      "It is interest you can legally charge on overdue business-to-business invoices under the Late Payment of Commercial Debts (Interest) Act 1998, set at the Bank of England base rate plus 8% a year. It applies automatically to qualifying commercial debts, even if your contract does not mention it.",
  },
  {
    question: "Does this apply to consumer debts too?",
    answer:
      "No. Statutory interest under this Act applies to business-to-business transactions only. Late payments from individual consumers are covered by different rules, and this calculator is not intended for consumer debt.",
  },
  {
    question: "What is the fixed compensation fee for?",
    answer:
      "Alongside interest, the Act lets you charge a fixed sum to cover debt recovery costs: £40 for debts under £1,000, £70 for debts from £1,000 up to £9,999.99, and £100 for debts of £10,000 or more. You can charge this in addition to statutory interest.",
  },
  {
    question: "Where do I find the current Bank of England base rate?",
    answer:
      "The Bank of England publishes the current base rate on its website, and it can change several times a year following Monetary Policy Committee decisions. Use the rate that applied when the payment became overdue, not necessarily today's rate, if the debt has been outstanding for a while and the rate has since changed.",
  },
  {
    question: "Can I charge statutory interest even if it is not in my contract?",
    answer:
      "Yes. The right to statutory interest and compensation exists by law for qualifying commercial debts, regardless of whether your contract or terms and conditions mention it, unless your contract already provides for a substantial alternative remedy for late payment.",
  },
  {
    question: "Will charging interest damage a client relationship?",
    answer:
      "That is a judgement call for each business relationship. Many businesses only apply statutory interest after reasonable reminders have failed, or use the right to charge it as leverage in a payment conversation rather than actually invoicing for it every time. Consider your ongoing relationship with the client alongside your legal right to charge it.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Chasing late-paying clients is one of the most common frustrations for UK small business owners. Under the
        Late Payment of Commercial Debts (Interest) Act 1998, you have a legal right to charge statutory interest
        and a fixed compensation fee on overdue business-to-business invoices. This calculator works out exactly
        how much you could claim.
      </p>

      <h2>How to use the late payment interest calculator</h2>
      <p>
        Enter the overdue invoice amount, the current Bank of England base rate, and the number of days the payment
        has been overdue. The calculator adds 8% to the base rate to get your statutory annual interest rate, works
        out the interest owed for the number of days overdue, and adds the fixed compensation fee that applies to
        your debt size.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Statutory interest is calculated as the debt amount multiplied by the annual rate (base rate plus 8%),
        divided by 365 to get a daily rate, then multiplied by the number of days overdue. On top of that, the Act
        sets a fixed compensation fee based on the size of the debt: £40 for debts under £1,000, £70 for debts from
        £1,000 up to £9,999.99, and £100 for debts of £10,000 or more. Both the interest and the compensation fee
        can be claimed together.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you are owed <strong>£2,500</strong> on an invoice, the Bank of England base rate is{" "}
        <strong>4%</strong>, and the payment is <strong>30 days</strong> overdue. Your statutory annual rate is
        4% + 8% = <strong>12%</strong>. Daily interest is £2,500 &times; 12% &divide; 365 = <strong>£0.82</strong>,
        so 30 days of interest comes to around <strong>£24.66</strong>. Since the debt falls between £1,000 and
        £9,999.99, you can also add a fixed compensation fee of <strong>£70</strong>, bringing the total you could
        claim to around <strong>£2,594.66</strong>.
      </p>

      <h2>Who this applies to</h2>
      <p>
        Statutory interest under the Act applies to debts between UK businesses, including sole traders, limited
        companies and partnerships, where goods or services were supplied under a commercial contract. It does not
        apply to consumer debts, and it does not override a contract that already sets out a substantial
        alternative remedy for late payment, so it is worth checking your own terms and conditions first.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is forgetting that the rate changes over time, since the Bank of England base rate moves
        with Monetary Policy Committee decisions; using today&apos;s rate for a debt that became overdue many
        months ago can give an inaccurate figure. Another mistake is forgetting to add the fixed compensation fee
        on top of interest, which is a separate entitlement under the Act rather than an alternative to interest.
        It is also worth remembering this calculator gives an estimate: for a formal legal claim, keep clear records
        of the invoice date, agreed payment terms and the exact date payment became overdue.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you run a limited company, our{" "}
        <Link href="/calculators/corporation-tax-calculator-uk">corporation tax calculator</Link> works out what
        you owe HMRC on your profits, and our{" "}
        <Link href="/calculators/dividend-vs-salary-calculator-uk">dividend vs salary calculator</Link> compares
        take-home pay between the two. To understand your pricing and margins, our{" "}
        <Link href="/calculators/break-even-calculator-uk">break-even calculator</Link> and{" "}
        <Link href="/calculators/profit-margin-calculator-uk">profit margin calculator</Link> are useful next steps.
        For a wider look at managing tax as a small business owner, see our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">self-employed tax guide</Link>.
      </p>
    </div>
  );
}
