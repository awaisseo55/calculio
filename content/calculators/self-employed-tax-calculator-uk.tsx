import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What counts as an allowable business expense?",
    answer:
      "Allowable expenses are costs genuinely incurred wholly and exclusively for your business, such as equipment, business travel, a proportion of home office costs, and professional fees. HMRC publishes detailed guidance on what qualifies, so check the specific rules for your type of work.",
  },
  {
    question: "When do I need to register as self-employed?",
    answer:
      "You should register with HMRC for self-assessment as soon as you start self-employment, and by 5 October following the end of the tax year in which you started at the latest. Registering late can lead to a penalty even if you do not owe any tax.",
  },
  {
    question: "How do I actually pay my self-employed tax bill?",
    answer:
      "You file a self-assessment tax return online, usually by 31 January following the end of the tax year, and pay any tax owed by the same date. Many self-employed people also make payments on account twice a year towards their next bill.",
  },
  {
    question: "Do I pay tax on my whole turnover or just my profit?",
    answer:
      "Just your profit. Tax and National Insurance are calculated on your income after deducting allowable business expenses, not on your total turnover, which is why keeping accurate expense records matters so much.",
  },
  {
    question: "What if my profit is different every year?",
    answer:
      "That is normal for self-employment. Simply re-run the calculator with your updated profit and expenses each year. Your payments on account for the following year are usually based on your previous year's bill, so a big change in profit can mean an adjustment is due.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Being self-employed means working out your own tax bill instead of having
        it deducted automatically through PAYE, and it involves more moving parts
        than a standard employee&apos;s payslip: Income Tax, Class 4 National Insurance,
        and until recently, Class 2 as well.
      </p>
      <p>
        This calculator brings all of that together, so you can see your full tax
        bill as a sole trader in one place, based on your profit after expenses.
      </p>

      <h2>How to use the self-employed tax calculator</h2>
      <p>
        Enter your annual profit before expenses, then your allowable business
        expenses. The calculator works out your net profit, then applies Income Tax
        and Class 4 National Insurance to give you a total tax bill, an effective
        tax rate, and what you are left with after everything is paid.
      </p>

      <h2>How the tax is worked out</h2>
      <p>
        Your allowable expenses are subtracted from your gross profit first, giving
        your taxable net profit. Income Tax is then charged using the same bands as
        employees: nothing on the first £12,570, 20% up to £50,270, and higher rates
        above that. Class 4 National Insurance is calculated separately, at 6% on
        profits between £12,570 and £50,270, and 2% above that.
      </p>
      <p>
        Class 2 National Insurance no longer applies to most self-employed people
        with profits above the small profits threshold, currently £6,845, since a
        change that took effect in April 2024. Below that threshold, you can
        choose to pay it voluntarily to protect your State Pension record, but it
        is not compulsory.
      </p>

      <h2>Sole trader versus limited company</h2>
      <p>
        This calculator assumes you are trading as a sole trader, the simplest and
        most common structure for self-employment, where your business profit is
        simply your own income. Some self-employed people instead set up a limited
        company, taking a small salary plus dividends, which is taxed differently
        again and covered by our separate dividend tax calculator. Which structure
        suits you depends on your profit level, admin appetite, and future plans
        for the business, and is often worth discussing with an accountant once
        your profits reach a meaningful level.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a sole trader with <strong>£40,000</strong> in profit before expenses,
        and <strong>£5,000</strong> of allowable business expenses, leaving a net
        profit of <strong>£35,000</strong>.
      </p>
      <p>
        Income Tax on £35,000, after the £12,570 Personal Allowance, comes to
        around <strong>£4,486</strong>. Class 4 National Insurance on the same
        profit adds around <strong>£1,346</strong>. That gives a total tax bill of
        roughly <strong>£5,832</strong>, an effective tax rate of about{" "}
        <strong>14.6%</strong> of the original £40,000 profit, leaving around{" "}
        <strong>£34,168</strong> to take home.
      </p>
      <p>
        Try increasing the expenses figure in the calculator above. Every pound of
        genuine allowable expense reduces your taxable profit directly, which
        lowers both your Income Tax and your Class 4 National Insurance at the same
        time, since both are calculated on the same net profit figure.
      </p>
      <p>
        This is worth bearing in mind when deciding whether an expense is worth
        claiming. A genuine £1,000 business expense does not just cost you
        £1,000. It reduces your taxable profit by £1,000, saving you tax and Class
        4 National Insurance on that amount too, so the real cost to you after tax
        relief is lower than the amount you actually spent.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is underestimating expenses, either by not keeping proper
        records throughout the year or by being unsure what genuinely qualifies.
        Good records, kept as you go rather than reconstructed at the last minute,
        make a real difference to an accurate tax bill. Another mistake is
        forgetting about payments on account, advance payments HMRC often requires
        twice a year towards your next tax bill, based on your current year&apos;s
        liability. These catch many newly self-employed people out in their second
        year, when two payments can land close together.
      </p>
      <p>
        It is also worth setting money aside as you earn, rather than waiting
        until your bill is due. A simple habit of moving a percentage of every
        payment you receive into a separate account can prevent a nasty surprise
        at self-assessment time. Many self-employed people aim to set aside
        somewhere between a quarter and a third of their profit, though the exact
        figure depends on your total income and how much of it falls into higher
        tax bands.
      </p>
      <p>
        Finally, do not overlook pension contributions. Unlike employees, the
        self-employed do not have an employer automatically enrolling them into a
        workplace pension, so it is entirely down to you to set one up if you want
        to build retirement savings. Pension contributions also reduce your
        taxable profit, which can lower your Income Tax bill in the same way a
        genuine business expense does.
      </p>

      <h2>Related calculators</h2>
      <p>
        Compare your position with an equivalent employee salary using our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        and <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        . If you also take dividends from a limited company rather than trading as
        a sole trader, our{" "}
        <Link href="/calculators/dividend-tax-calculator-uk">
          dividend tax calculator
        </Link>{" "}
        covers that structure instead. Our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        and <Link href="/blog/uk-income-tax-2026-27">income tax guide</Link> have
        more detail on how each part of the system works. If you are
        planning a period of maternity leave, our{" "}
        <Link href="/calculators/maternity-pay-calculator-uk">
          maternity pay calculator
        </Link>{" "}
        covers Maternity Allowance for the self-employed, and our{" "}
        <Link href="/calculators/child-benefit-calculator-uk">
          Child Benefit calculator
        </Link>{" "}
        can help if your profit puts you close to the High Income Child
        Benefit Charge threshold.
      </p>
    </div>
  );
}
