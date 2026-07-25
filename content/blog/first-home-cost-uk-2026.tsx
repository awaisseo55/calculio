import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "the-deposit", label: "The deposit" },
  { id: "stamp-duty", label: "Stamp duty and first-time buyer relief" },
  { id: "solicitor-survey-fees", label: "Solicitor and survey fees" },
  { id: "mortgage-fees", label: "Mortgage broker and arrangement fees" },
  { id: "insurance-moving", label: "Insurance and moving costs" },
  { id: "first-year-costs", label: "First-year running costs" },
  { id: "worked-example", label: "Worked example: a £275,000 first home" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Work out your own numbers" },
];

export const faq: FaqItem[] = [
  {
    question: "Do first-time buyers pay stamp duty in the UK?",
    answer:
      "It depends on the price. First-time buyer relief means no stamp duty is due on properties up to £300,000, and a reduced rate applies between £300,001 and £500,000. Above £500,000, the relief is lost entirely and standard rates apply from the first pound.",
  },
  {
    question: "How much deposit do I need for my first home?",
    answer:
      "Most mortgage lenders ask for a minimum deposit of 5% to 10% of the property price, though a bigger deposit, such as 15% or 20%, usually unlocks a lower interest rate. On a £275,000 home, a 10% deposit would be £27,500.",
  },
  {
    question: "What other costs are there besides the deposit?",
    answer:
      "Beyond the deposit, expect to pay stamp duty (if applicable), solicitor or conveyancing fees, a survey, possibly a mortgage broker fee and a mortgage arrangement fee, buildings insurance from the day you exchange contracts, and moving costs. Together these commonly add a few thousand pounds on top of your deposit.",
  },
  {
    question: "Can mortgage fees be added to the loan instead of paid upfront?",
    answer:
      "Many lenders allow you to add the mortgage arrangement fee to your loan rather than paying it upfront. This reduces your immediate cash needs but means you pay interest on the fee over the life of the mortgage, so it usually costs slightly more overall than paying it upfront if you can afford to.",
  },
  {
    question: "How much should I budget for the first year after moving in?",
    answer:
      "Beyond your mortgage payment, budget for council tax, utilities, buildings insurance, and a contingency for unexpected repairs or furnishing costs, since older or previously rented properties often need work in the first year. It's sensible to keep a cash buffer rather than spending down to zero on moving day.",
  },
  {
    question: "Are there any schemes that help with first home costs?",
    answer:
      "The Lifetime ISA offers a 25% government bonus on savings put towards a first home worth up to £450,000, up to an annual contribution limit. Some lenders also offer mortgage guarantee schemes aimed at buyers with smaller deposits. Check the current schemes on GOV.UK, since availability and terms change over time.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Most first-time buyers focus on saving for a deposit and forget
        about everything else that needs paying before they get the keys.
        Stamp duty, solicitor fees, surveys, mortgage fees, insurance, and
        moving costs can add several thousand pounds on top of your deposit,
        and being caught short close to completion is stressful. This guide
        breaks down every cost involved in buying a first home in the UK,
        with a full worked example on a £275,000 property. It sits in our{" "}
        <Link href="/categories/finance">Finance category</Link>, alongside
        our mortgage and property calculators.
      </p>

      <CalloutBox
        title="Work out your monthly mortgage repayment"
        description="Enter your property price, deposit and rate for an instant repayment and total interest figure."
        href="/calculators/mortgage-calculator-uk"
        cta="Open the mortgage calculator"
      />

      <h2 id="the-deposit">The deposit</h2>
      <p>
        Your deposit is usually the biggest single cost. Most lenders ask
        for a minimum of 5% to 10% of the property price, though a bigger
        deposit, such as 15% or 20%, typically unlocks a meaningfully lower
        interest rate, since you&apos;re borrowing a smaller share of the
        property&apos;s value. Our{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">
          mortgage deposit guide
        </Link>{" "}
        covers minimum deposit sizes and schemes that can help you get there
        faster in more detail.
      </p>
      <p>
        A Lifetime ISA is one of the most useful tools for building a first
        deposit, since the government adds a 25% bonus on top of whatever
        you save into it, up to the annual Lifetime ISA limit, provided the
        money is used towards a first home worth up to £450,000. Our{" "}
        <Link href="/calculators/isa-calculator-uk">ISA calculator</Link>{" "}
        shows how that bonus adds up over time alongside your own
        contributions and investment growth.
      </p>

      <h2 id="stamp-duty">Stamp duty and first-time buyer relief</h2>
      <p>
        First-time buyers in England and Northern Ireland benefit from Stamp
        Duty Land Tax (SDLT) relief: no stamp duty at all is due on the
        first £300,000 of a property&apos;s price, and a reduced 5% rate applies
        on the portion between £300,001 and £500,000. If the property costs
        more than £500,000, the relief is lost completely and standard
        rates apply to the whole price instead.
      </p>
      <RateTable
        caption="First-time buyer Stamp Duty Land Tax relief (England & Northern Ireland)"
        columns={["Price band", "Rate for first-time buyers"]}
        rows={[
          ["Up to £300,000", "0%"],
          ["£300,001 to £500,000", "5% on the portion above £300,000"],
          ["Over £500,000", "Relief lost, standard rates apply"],
        ]}
      />
      <p>
        Scotland and Wales run their own separate systems, LBTT and LTT,
        with different thresholds and reliefs. Our{" "}
        <Link href="/blog/how-much-stamp-duty-uk-2026">
          stamp duty guide
        </Link>{" "}
        covers all three in full, and our{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          stamp duty calculator
        </Link>{" "}
        gives you an exact figure for your own price and buyer type.
      </p>
      <p>
        It is worth double checking your first-time buyer status before you
        rely on this relief. HMRC generally defines a first-time buyer as
        someone who has never owned a residential property anywhere in the
        world, including inherited shares of a property, so a small
        inherited stake from years ago can sometimes disqualify a buyer who
        otherwise feels like a genuine first-timer.
      </p>

      <h2 id="solicitor-survey-fees">Solicitor and survey fees</h2>
      <p>
        You&apos;ll need a solicitor or licensed conveyancer to handle the legal
        side of the purchase, typically costing somewhere in the range of
        £850 to £1,500 including standard searches, though this varies by
        firm and property. A survey is optional but strongly recommended: a
        basic mortgage valuation (which protects the lender, not you) is
        often included free or cheaply, while a more thorough RICS Level 2
        or Level 3 survey, which protects your own interests, typically
        costs anywhere from around £400 to £1,000 or more depending on the
        depth of the survey and the property&apos;s size and age.
      </p>

      <h2 id="mortgage-fees">Mortgage broker and arrangement fees</h2>
      <p>
        Many first-time buyers use a mortgage broker to compare deals across
        the market. Some brokers are free to you and paid by commission
        from the lender, while others charge a flat fee, often somewhere
        around £300 to £500. Separately, most mortgage products also carry
        a lender arrangement or product fee, commonly in the range of £999
        to £2,000, though fee-free products with a slightly higher interest
        rate are also available. It is worth comparing a handful of deals
        side by side, since a slightly higher headline rate with no fee can
        sometimes work out cheaper overall than a lower rate with a large
        fee attached, particularly on a smaller mortgage. Many lenders let
        you add this fee to your
        loan rather than paying it upfront, which eases short-term cash flow
        but means paying interest on the fee over the mortgage term.
      </p>

      <h2 id="insurance-moving">Buildings insurance and moving costs</h2>
      <p>
        Buildings insurance is normally required by your lender from the
        moment you exchange contracts, since you become responsible for the
        property at that point even before you legally own it. Typical
        annual premiums are often in the region of £150 to £300, depending
        on the property&apos;s size, location and rebuild cost. On top of this,
        budget for moving costs: a removals firm, van hire, or simply time
        off work to manage the move, commonly totalling somewhere between
        £300 and £1,000 depending on distance and how much help you need.
      </p>

      <h2 id="first-year-costs">First-year running costs</h2>
      <p>
        Once you&apos;ve moved in, ongoing costs begin immediately: council tax,
        utilities, and any ground rent or service charge if the property is
        leasehold. It&apos;s also sensible to keep a cash buffer for unexpected
        repairs, particularly with an older property or one that&apos;s been
        rented out previously, since these often need attention sooner than
        a newer or recently renovated home. Many new buyers underestimate
        this first-year buffer and find themselves stretched thin on
        furniture, white goods, and small repairs on top of a new mortgage
        payment.
      </p>
      <p>
        It is worth checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay
        </Link>{" "}
        before you commit to an offer, so you can see clearly what is left
        each month once your mortgage, council tax and typical bills are
        accounted for. A property that looks affordable on the mortgage
        payment alone can feel very different once every other monthly cost
        is added on top, particularly in the first year when one-off setup
        costs are still being paid off.
      </p>

      <h2 id="worked-example">Worked example: a £275,000 first home</h2>
      <p>
        Take a first-time buyer purchasing a home for{" "}
        <strong>£275,000</strong>, with a <strong>10% deposit</strong>.
      </p>
      <RateTable
        caption="Illustrative cost breakdown for a £275,000 first home purchase"
        columns={["Cost", "Amount"]}
        rows={[
          ["Deposit (10%)", "£27,500"],
          ["Stamp duty (first-time buyer relief)", "£0"],
          ["Solicitor and conveyancing fees", "£850 to £1,500"],
          ["Survey (RICS Level 2)", "£400 to £700"],
          ["Mortgage broker fee", "£0 to £500"],
          ["Mortgage arrangement fee", "£0 to £999 (or added to loan)"],
          ["Buildings insurance (first year)", "£150 to £300"],
          ["Moving costs", "£300 to £800"],
        ]}
      />
      <p>
        Because the £275,000 price sits entirely under the £300,000
        first-time buyer relief threshold, <strong>no stamp duty is due
        at all</strong>, a genuinely significant saving that many buyers
        don&apos;t realise applies to them. Adding up the other costs, a
        first-time buyer on this purchase might reasonably budget somewhere
        in the region of <strong>£1,700 to £4,800</strong> on top of the
        £27,500 deposit, depending on the solicitor, survey level and
        broker they choose, before any first-year running cost buffer.
      </p>
      <p>
        Try our{" "}
        <Link href="/calculators/mortgage-calculator-uk">
          mortgage calculator
        </Link>{" "}
        to see the monthly repayment on the remaining £247,500 loan, and our{" "}
        <Link href="/calculators/mortgage-overpayment-calculator-uk">
          mortgage overpayment calculator
        </Link>{" "}
        to see how much time and interest you could save by overpaying once
        your finances settle after moving in.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
