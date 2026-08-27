import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How do I work out my freelance day rate?",
    answer:
      "Start with the annual income you want to earn, add your business expenses, then divide by the number of days you can realistically bill clients for in a year, after accounting for holidays, admin time and gaps between contracts. This calculator does that maths for you and adds a buffer for quieter periods.",
  },
  {
    question: "Why is my day rate higher than my desired salary divided by working days?",
    answer:
      "Because not every working day is billable. Time spent on admin, invoicing, marketing and finding new clients does not generate income directly, so those costs need to be spread across the days you can actually bill for. Business expenses and a buffer for gaps between contracts also push the rate up.",
  },
  {
    question: "What counts as non-billable time?",
    answer:
      "This includes admin tasks like invoicing and bookkeeping, marketing and networking to find new clients, proposal writing, and any unpaid time between contracts. Many freelancers find that 15 to 25% of their working time falls into this category, though it varies by industry and how established your client base is.",
  },
  {
    question: "Should I include tax in my day rate calculation?",
    answer:
      "This calculator works out a day rate to reach a target income before Income Tax, National Insurance and any VAT you may need to charge or account for. You will still need to budget separately for your tax bill, ideally by setting aside a portion of each payment as it comes in.",
  },
  {
    question: "How many working weeks a year should I assume?",
    answer:
      "Many freelancers use around 44 to 46 weeks, allowing for annual leave, bank holidays, sick days and a realistic gap between contracts. If you have a lot of client work already lined up, you might use a higher figure, but it is safer to be conservative when you are starting out.",
  },
  {
    question: "Why does my day rate look higher than what other freelancers charge?",
    answer:
      "Day rates vary widely by industry, experience and location, so it is worth researching typical rates in your field alongside this calculation. This tool shows what you need to charge to hit your own income goal, which may be higher or lower than the market average depending on your expenses and how much non-billable time you allow for.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Setting a freelance day rate is one of the trickiest parts of going self-employed. Charge too little and
        you risk working long hours for less than a salaried equivalent. This calculator works backwards from the
        income you want to earn, factoring in expenses, non-billable time and a buffer for quieter periods, to
        suggest a day rate that actually adds up.
      </p>

      <h2>How to use the freelance day rate calculator</h2>
      <p>
        Enter the annual income you want to earn before tax, your yearly business expenses, and how many weeks
        and days a week you plan to work. Add an estimate for non-billable time, such as admin and marketing, and
        a buffer percentage to cover gaps between contracts. The calculator returns a suggested day rate, an
        hourly rate, and the total revenue you would need to bill across the year.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator first adds your desired income and annual expenses together to get a total revenue
        target. It then works out your billable days by taking your total working days and removing the
        percentage you have marked as non-billable. Dividing the revenue target by billable days gives a base day
        rate, which is then increased by your buffer percentage to build in a cushion for holidays, illness and
        quiet periods between contracts.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you want to earn <strong>£45,000</strong> a year, with <strong>£5,000</strong> in annual business
        expenses, working <strong>46 weeks</strong> at <strong>5 days</strong> a week, with{" "}
        <strong>20% non-billable time</strong> and a <strong>10% buffer</strong>. Total working days come to 230,
        and billable days after removing non-billable time come to 184. Your revenue target of £50,000 divided by
        184 billable days gives a base rate of around £271.74, which becomes roughly{" "}
        <strong>£298.91 a day</strong> after the 10% buffer, or about <strong>£39.86 an hour</strong> over a
        7.5 hour day.
      </p>

      <h2>Reviewing your rate over time</h2>
      <p>
        A day rate is not something to set once and forget. As your expenses change, your experience grows, or
        market demand for your skills shifts, it is worth revisiting your calculation every year or when you
        take on a new type of work. Many freelancers also charge different rates for different types of projects,
        using this calculation as a baseline rather than a fixed figure for every client.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is basing a day rate purely on a target salary divided by working days in the year,
        without allowing for non-billable time, expenses or gaps between contracts, which quickly leaves you
        short. Another mistake is forgetting that a day rate needs to cover Income Tax, National Insurance and
        pension contributions that an employer would otherwise handle. It also helps to review your rate
        regularly rather than leaving it unchanged for years while your costs rise.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you know your day rate, our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">self-employed tax calculator</Link> can help
        you estimate what you might owe HMRC. Comparing salary and hourly figures is easier with our{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">salary to hourly calculator</Link>, and our{" "}
        <Link href="/calculators/break-even-calculator-uk">break-even calculator</Link> is useful if you are
        weighing up business costs more broadly. For more context on setting rates, see our guide to{" "}
        <Link href="/blog/freelancer-hourly-rate-uk-2026">working out your freelancer hourly rate</Link>.
      </p>
    </div>
  );
}
