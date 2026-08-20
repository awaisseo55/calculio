import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Do I pay Capital Gains Tax on my main home?",
    answer:
      "Usually not. Selling your only or main residence is normally covered by Private Residence Relief, which exempts the gain entirely in most cases. This calculator is aimed at second properties, buy-to-lets, shares and other assets where that relief does not apply.",
  },
  {
    question: "What is the annual exempt amount?",
    answer:
      "It is the amount of gains you can make each tax year before Capital Gains Tax applies, currently £3,000. It has been cut substantially in recent years, so if you remember a much higher figure from a few years ago, that older amount no longer applies.",
  },
  {
    question: "Do property and shares pay the same Capital Gains Tax rate?",
    answer:
      "Since the 30 October 2024 Budget, yes. Both now use the same two rates, 18% for basic rate taxpayers and 24% for higher and additional rate taxpayers, on the taxable portion of any gain, whether the asset is a property or something else like shares.",
  },
  {
    question: "How do I know if I'm a basic or higher rate taxpayer for this?",
    answer:
      "It depends on your total taxable income for the year, including the gain itself in some cases. If your income and gains together push you above the higher rate threshold, the higher CGT rate can apply to some or all of the gain, so it is worth checking carefully if you are close to the boundary.",
  },
  {
    question: "When do I need to report and pay Capital Gains Tax on property?",
    answer:
      "For UK residential property that is not your main home, you generally need to report the gain and pay any tax due within 60 days of completion. For other assets, it is usually reported through your self-assessment tax return instead.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Selling a second home, a buy-to-let property, or a chunk of shares can
        trigger a tax bill many people do not see coming, since the profit you make
        is treated very differently from your regular income. Capital Gains Tax is
        charged on the gain itself, not on the full sale price, but working out the
        exact figure takes a few steps.
      </p>
      <p>
        This calculator works through those steps for you, from your raw gain down
        to the tax actually owed, after your annual exempt amount and the correct
        rate for your circumstances. It is worth running the numbers well before
        you sell, since with enough notice there are sometimes legitimate ways to
        reduce a Capital Gains Tax bill, such as timing a sale across two tax years
        or making use of allowances available to a spouse or civil partner.
      </p>

      <h2>How to use the Capital Gains Tax calculator</h2>
      <p>
        Enter the price you sold the asset for, the price you originally paid, and
        any allowable costs, such as agent fees or legal costs, on either side of
        the transaction. Choose whether the asset is property or something else,
        and whether you are a higher or additional rate taxpayer. The calculator
        works out your gain, applies your annual exempt amount, and shows the tax
        owed.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Your gain is simply your sale price, minus your original purchase price,
        minus any allowable costs along the way. The first{" "}
        <strong>£3,000</strong> of gains each tax year is completely tax free,
        thanks to the annual exempt amount. Anything above that is taxed at{" "}
        <strong>18%</strong> if you are a basic rate taxpayer, or{" "}
        <strong>24%</strong> if you are a higher or additional rate taxpayer.
      </p>
      <p>
        Since the October 2024 Budget, these two rates apply equally to residential
        property that is not your main home and to other chargeable assets like
        shares, which simplified a system that previously used different rates for
        each. This calculator uses the current unified rates for both asset types.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you sell a rental property for <strong>£350,000</strong>, having bought
        it for <strong>£250,000</strong>, with <strong>£5,000</strong> of
        allowable costs such as agent and legal fees on the sale. Your gain is{" "}
        <strong>£95,000</strong>.
      </p>
      <p>
        After the £3,000 annual exempt amount, £92,000 is taxable. As a higher rate
        taxpayer, that is taxed at 24%, giving a Capital Gains Tax bill of around{" "}
        <strong>£22,080</strong>. As a basic rate taxpayer instead, the same
        £92,000 taxed at 18% would come to around <strong>£16,560</strong>, a
        difference of over £5,500 depending purely on which tax band applies to
        you.
      </p>

      <h2>Married couples and civil partners</h2>
      <p>
        Transfers of assets between spouses and civil partners are generally
        exempt from Capital Gains Tax, which opens up a genuinely useful piece of
        planning for couples who jointly own an asset that is about to be sold. By
        holding an asset jointly, or transferring a share to a spouse before
        selling, a couple can potentially use two annual exempt amounts instead of
        one, and may be able to spread the gain across two sets of tax bands
        depending on each partner&apos;s other income. This only applies to legally
        married couples and registered civil partners, not to unmarried couples
        living together.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming your main home is covered by the same rules as
        a second property. In almost all cases, Private Residence Relief means no
        Capital Gains Tax is due at all when you sell the home you actually live
        in, so this calculator is not the right tool for that situation. Another
        mistake is forgetting the 60 day reporting deadline for UK residential
        property that is not your main home. Missing it can lead to penalties even
        if you eventually pay the correct tax owed.
      </p>
      <p>
        It is also easy to underestimate allowable costs. Genuine costs of buying
        and selling, including legal fees, agent fees, and in some cases the cost
        of improvements made to the property, can all reduce your taxable gain, so
        it is worth gathering the relevant paperwork before finalising your
        figures.
      </p>
      <p>
        Finally, do not forget losses. If you have made a loss on another asset in
        the same or a previous tax year, you may be able to offset it against a
        gain, reducing your taxable amount further. Losses generally need to be
        reported to HMRC to be used later, even in a year where you have no gains
        to offset them against, so keeping a record as you go is worthwhile.
      </p>

      <h2>Related calculators</h2>
      <p>
        If the sale relates to a property purchase you are also planning, our{" "}
        <Link href="/blog/how-much-stamp-duty-uk-2026">stamp duty guide</Link> and{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          stamp duty calculator
        </Link>{" "}
        cover the tax due on the buying side. For the rest of your tax position,
        our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/dividend-tax-calculator-uk">
          dividend tax calculator
        </Link>{" "}
        cover salary and dividend income, and our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        can help if you are buying another property with the proceeds. For a fuller
        walkthrough of the rates, allowance and reliefs covered here, see our{" "}
        <Link href="/blog/capital-gains-tax-uk-2026-27">
          Capital Gains Tax guide
        </Link>
        .
      </p>
    </div>
  );
}
