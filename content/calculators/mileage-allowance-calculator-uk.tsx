import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is Mileage Allowance Relief?",
    answer:
      "It is tax relief you can claim if your employer pays you less than HMRC's approved mileage rate for using your own vehicle on business trips, or if you are self-employed and use simplified mileage rates. You claim relief on the shortfall between what you were paid and the approved amount, usually via Self Assessment or a P87 form.",
  },
  {
    question: "What are the current HMRC mileage rates?",
    answer:
      "For cars and vans, the approved rate is 55p per mile for the first 10,000 business miles in a tax year, then 25p per mile after that. Motorcycles are paid at 24p per mile and bicycles at 20p per mile, both flat rates with no mileage threshold.",
  },
  {
    question: "Do these rates apply to employees and the self-employed?",
    answer:
      "Yes, the same approved mileage rates apply whether you are an employee claiming relief on unreimbursed mileage or self-employed and using HMRC's simplified expenses method to work out your vehicle costs, instead of tracking actual running costs and claiming capital allowances.",
  },
  {
    question: "Can I claim for commuting to my normal workplace?",
    answer:
      "No, ordinary commuting between home and your regular workplace does not count as business mileage. Approved mileage rates apply to genuine business journeys, such as travelling to a client site, a temporary workplace, or between different work locations during the day.",
  },
  {
    question: "What if my employer pays more than the approved rate?",
    answer:
      "If your employer pays more than the HMRC approved amount, the excess is treated as taxable income and should be reported through payroll. This calculator focuses on the more common situation where you are paid less than the approved rate and may be able to claim relief.",
  },
  {
    question: "Can I claim a passenger payment too?",
    answer:
      "If you carry a colleague on a business journey that is also a work journey for them, you can be paid up to 5p per mile per passenger tax-free on top of your own mileage rate. This calculator does not include passenger payments, so add these separately if they apply to you.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        If you use your own car, van, motorcycle or bicycle for business journeys, HMRC sets an approved amount
        you can be paid tax-free per mile. This calculator works out that approved amount for your mileage, and
        shows any shortfall you may be able to claim tax relief on if you are paid less.
      </p>

      <h2>How to use the mileage allowance calculator</h2>
      <p>
        Choose your vehicle type, enter your business miles for the tax year, and enter the rate per mile your
        employer actually pays you, if any. The calculator shows the HMRC approved amount for your mileage,
        compares it with what you have been paid, and estimates the tax relief you could claim on any shortfall.
      </p>

      <h2>How the calculation works</h2>
      <p>
        For cars and vans, the calculator applies 55p per mile to your first 10,000 business miles in the tax
        year, then 25p per mile to anything above that. Motorcycles and bicycles use flat rates of 24p and 20p
        per mile with no threshold. The calculator compares this approved amount with what you have actually been
        paid, and estimates tax relief on any shortfall at the basic rate of 20%.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you drive <strong>12,000 business miles</strong> in a car over the tax year, and your employer pays
        you <strong>45p per mile</strong>. The approved amount is 10,000 miles at 55p, plus 2,000 miles at 25p,
        which comes to £5,500 plus £500, or <strong>£6,000</strong> in total. Your employer has paid you 12,000
        &times; £0.45 = <strong>£5,400</strong>, leaving a shortfall of <strong>£600</strong> you could claim
        Mileage Allowance Relief on, worth roughly £120 back at the basic rate of tax.
      </p>

      <h2>How to actually claim the relief</h2>
      <p>
        If you are employed, you can usually claim Mileage Allowance Relief through Self Assessment if you
        already complete a tax return, or by using a P87 form if you do not. You will need records of your
        business mileage, ideally a simple log with dates, destinations and miles travelled, along with what your
        employer paid you. If you are self-employed, mileage is usually claimed differently, through simplified
        expenses on your Self Assessment return rather than a separate relief claim.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is including ordinary commuting miles to a permanent workplace, which do not qualify as
        business mileage. Another mistake is forgetting to keep a mileage log, which makes it harder to support a
        claim if HMRC asks for evidence. It is also easy to apply the wrong rate after crossing the 10,000 mile
        threshold for cars and vans, since the rate drops partway through the year for many regular business
        drivers.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are self-employed, our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">self-employed tax calculator</Link> can help
        you estimate your overall tax bill. Comparing running costs is easier with our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">fuel cost calculator</Link> and{" "}
        <Link href="/calculators/mpg-calculator-uk">MPG calculator</Link>. For a wider look at self-employed
        expenses and tax, see our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">self-employed tax guide</Link>.
      </p>
    </div>
  );
}
