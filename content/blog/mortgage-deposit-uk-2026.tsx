import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-a-deposit", label: "What is a mortgage deposit?" },
  { id: "minimum-deposits-2026", label: "Minimum deposits in 2026" },
  { id: "average-deposit-by-region", label: "Average deposit by region" },
  { id: "deposit-size-and-rate", label: "How deposit size affects your rate" },
  { id: "government-schemes", label: "Government schemes that help" },
  { id: "stamp-duty-ftb", label: "Stamp duty for first-time buyers" },
  { id: "save-faster", label: "How to save your deposit faster" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your repayments" },
];

export const faq: FaqItem[] = [
  {
    question: "Can I buy a house with a 5% deposit in the UK?",
    answer:
      "Yes, 95% loan-to-value mortgages exist, including some backed by the government's Mortgage Guarantee Scheme. Fewer lenders offer them compared with lower LTV tiers, and the interest rates are typically higher, so it's worth comparing the total cost against saving a bit more first.",
  },
  {
    question: "How much deposit do I need for a £300,000 house?",
    answer:
      "At 5% you'd need £15,000, at 10% you'd need £30,000, and at 25% you'd need £75,000. The exact amount you can borrow also depends on your income and affordability, not just the deposit, so it's worth checking both with a mortgage calculator.",
  },
  {
    question: "Can my parents give me a mortgage deposit?",
    answer:
      "Yes, this is known as a gifted deposit and is common for first-time buyers. Your lender will usually need a signed letter from whoever is gifting the money confirming it's a genuine gift, not a loan, and that they won't have any stake or right to the property in return.",
  },
  {
    question: "What is a 95% mortgage?",
    answer:
      "A 95% mortgage covers 95% of the property's value, meaning you only need a 5% deposit. It's the highest loan-to-value most mainstream UK lenders offer, and rates are generally higher than lower LTV tiers because the lender is taking on more risk.",
  },
  {
    question: "Do first-time buyers need less deposit?",
    answer:
      "Not automatically. Deposit requirements are generally set by loan-to-value, regardless of whether you've owned a home before. What helps first-time buyers specifically are schemes like the Lifetime ISA bonus, the Mortgage Guarantee Scheme, and First Homes, which make it easier to build or stretch a deposit.",
  },
  {
    question: "Is a bigger deposit always better?",
    answer:
      "Usually a bigger deposit means a lower interest rate and smaller monthly repayments, which is a real financial benefit. But it's not automatically right for everyone. Keeping a reasonable emergency fund and weighing up what else that money could do for you both matter too.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        For most UK first-time buyers, the deposit is the single biggest barrier
        standing between them and a home of their own, bigger than the monthly
        mortgage repayment itself. Saving tens of thousands of pounds while paying
        rent at the same time is genuinely difficult, and it&apos;s the question almost
        every prospective buyer asks first: how much do I actually need?
      </p>
      <p>
        This guide covers minimum deposit requirements for 2026, how deposit size
        changes your mortgage rate, and the government schemes designed to help. It
        sits in our <Link href="/categories/finance">Finance category</Link>, alongside
        our other property and money calculators.
      </p>

      <CalloutBox
        title="See what you could borrow"
        description="Enter your property price, deposit and rate for an instant monthly repayment figure."
        href="/calculators/mortgage-calculator-uk"
        cta="Open the mortgage calculator"
      />

      <h2 id="what-is-a-deposit">What is a mortgage deposit?</h2>
      <p>
        Your deposit is the portion of the property price you pay upfront in cash,
        with a mortgage covering the rest. The relationship between your loan and the
        property&apos;s value is called the <strong>loan-to-value ratio (LTV)</strong>: a
        10% deposit means a 90% LTV mortgage, since the loan covers the remaining 90%
        of the price.
      </p>
      <p>
        LTV matters because it&apos;s one of the main things lenders use to price your
        interest rate. But it isn&apos;t the only thing they check: your income,
        affordability (whether your outgoings leave enough room for repayments), and
        credit history all factor into how much you can actually borrow and at what
        rate.
      </p>
      <p>
        A lower LTV means less risk for the lender, since there&apos;s a bigger equity
        buffer if property prices fall. That&apos;s the underlying reason a bigger deposit
        almost always unlocks a cheaper rate: you&apos;re a safer bet on paper, regardless
        of how strong your income or credit history happens to be.
      </p>

      <h2 id="minimum-deposits-2026">Minimum deposit requirements in 2026</h2>
      <RateTable
        caption="Minimum deposit tiers and typical mortgage market access in 2026"
        columns={["Deposit", "Loan-to-value", "What to expect"]}
        rows={[
          ["5%", "95% LTV", "A limited number of lenders, generally the highest rates"],
          ["10%", "90% LTV", "A wider range of lenders and deals"],
          ["15%", "85% LTV", "Noticeably better rates than 90-95% LTV"],
          ["25%", "75% LTV", "Among the best rates most lenders offer"],
        ]}
      />
      <h3>Worked example: a £250,000 property</h3>
      <p>
        Here&apos;s how deposit size changes both your loan and your monthly repayment on a
        £250,000 property, using illustrative rates that widen slightly at higher LTV
        tiers, over a 25-year term.
      </p>
      <RateTable
        caption="Illustrative monthly repayments by deposit size on a £250,000 property, 25-year term"
        columns={["Deposit", "Loan amount", "Illustrative rate", "Monthly repayment"]}
        rows={[
          ["5% (£12,500)", "£237,500", "5.5%", "£1,458"],
          ["10% (£25,000)", "£225,000", "5.0%", "£1,315"],
          ["15% (£37,500)", "£212,500", "4.7%", "£1,205"],
          ["25% (£62,500)", "£187,500", "4.3%", "£1,021"],
        ]}
      />
      <p>
        Moving from a 5% to a 25% deposit on the same property cuts the monthly
        repayment by roughly £437 in this example, combining both the smaller loan and
        the better rate. Try your own numbers in the{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>.
      </p>

      <h2 id="average-deposit-by-region">Average UK deposit by region</h2>
      <p>
        Deposit sizes vary hugely by region, largely tracking local property prices.
        Exact figures shift year to year and by lender, but the pattern below,
        broadly reflecting research published by lenders such as Halifax and industry
        body UK Finance, gives a reasonable sense of the regional gap.
      </p>
      <RateTable
        caption="Illustrative average first-time buyer deposit by UK region"
        columns={["Region", "Typical deposit (illustrative)"]}
        rows={[
          ["London", "Highest in the UK, often £100,000+"],
          ["South East", "Well above the national average"],
          ["Scotland", "Below the national average"],
          ["North West England", "Among the lowest in the UK"],
          ["Wales", "Below the national average"],
          ["Northern Ireland", "Among the lowest in the UK"],
        ]}
      />

      <h2 id="deposit-size-and-rate">How deposit size affects your mortgage rate</h2>
      <p>
        Lenders typically price each 5% LTV tier slightly differently, with rates
        often improving by roughly 0.2 to 0.5 percentage points as you move from a
        95% deal down to 90%, then 85%, and so on. It sounds small, but it compounds
        significantly over a full mortgage term.
      </p>
      <h3>Worked example: rate effect alone on a £200,000 loan</h3>
      <p>
        Holding the loan amount fixed at £200,000 over 25 years and changing only the
        illustrative rate for each deposit tier shows the effect clearly:
      </p>
      <RateTable
        caption="Total interest on a £200,000 loan over 25 years by deposit tier, rate effect only"
        columns={["Deposit tier", "Illustrative rate", "Monthly repayment", "Total interest paid"]}
        rows={[
          ["5% deposit tier", "5.5%", "£1,228", "£168,452"],
          ["10% deposit tier", "5.0%", "£1,169", "£150,754"],
          ["15% deposit tier", "4.7%", "£1,134", "£140,347"],
        ]}
      />
      <p>
        On an identical £200,000 loan, moving from a 5% to a 15% deposit tier saves
        around £28,000 in total interest over the life of the mortgage, purely from
        the better rate, before even accounting for the smaller loan a bigger deposit
        usually brings too.
      </p>

      <h2 id="government-schemes">Government schemes that help with deposits</h2>
      <h3>Lifetime ISA (LISA)</h3>
      <p>
        You can save up to £4,000 a year into a LISA and receive a 25% government
        bonus, up to £1,000 a year, provided you&apos;re 18 to 39 when you open it and use
        the funds towards a first home worth £450,000 or less. Withdrawing for
        anything other than a first home or retirement before age 60 triggers a 25%
        government withdrawal charge, so it&apos;s worth being sure before you commit funds.
      </p>
      <h3>Shared Ownership</h3>
      <p>
        You buy a share of a property, often starting around 25% to 75%, and pay rent
        to a housing association on the remainder. Over time you can staircase,
        buying further shares until you own the property outright.
      </p>
      <h3>First Homes scheme</h3>
      <p>
        Offers new-build homes at a discount, typically 30% to 50% below market value,
        to eligible local first-time buyers and key workers. The discount is designed
        to stay with the property for future sales too.
      </p>
      <h3>Mortgage Guarantee Scheme</h3>
      <p>
        Encourages lenders to offer 95% LTV mortgages by having the government
        guarantee part of the loan, reducing the lender&apos;s risk on low-deposit lending.
      </p>

      <h2 id="stamp-duty-ftb">Stamp duty for first-time buyers</h2>
      <p>
        Your deposit isn&apos;t the only upfront cost. First-time buyers also benefit from
        Stamp Duty Land Tax relief: no SDLT at all up to £300,000, then 5% on the
        portion between £300,001 and £500,000, with standard rates applying above
        that. We cover this in full, with worked examples, in{" "}
        <Link href="/blog/how-much-stamp-duty-uk-2026">
          our stamp duty guide
        </Link>
        , or use the{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          stamp duty calculator
        </Link>{" "}
        directly for your own numbers.
      </p>

      <h2 id="save-faster">How to save your deposit faster</h2>
      <p>
        A few practical levers tend to make the biggest difference: maxing out a LISA
        early to capture the full annual government bonus, moving spare savings into a
        high-interest savings or regular saver account rather than letting it sit idle,
        reducing rent where possible (moving back home temporarily or house-sharing),
        and building side income specifically earmarked for the deposit pot.
      </p>
      <p>
        Family gifts are common too. If parents or other relatives are contributing,
        lenders will usually ask for a signed <strong>gifted deposit letter</strong>{" "}
        confirming the money is a genuine gift, with no expectation of repayment or
        any stake in the property. It&apos;s also worth checking your{" "}
        <Link href="/blog/uk-income-tax-2026-27">take-home pay after tax</Link> so your
        savings plan is based on real numbers, not gross salary.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
