import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the difference between profit margin and markup?",
    answer:
      "Profit margin is your profit expressed as a percentage of your selling price, while markup is your profit expressed as a percentage of your cost price. They use the same profit figure but different bases, so margin is always a smaller percentage than markup on the same sale, and confusing the two is a common and costly pricing mistake.",
  },
  {
    question: "What is a good profit margin?",
    answer:
      "This varies enormously by industry. Retail and food businesses often work with margins in the region of 20% to 50% depending on the category, while some service businesses and software companies can sustain much higher margins. There is no single universal target, so comparing your margin against similar businesses in your own sector is more useful than a generic benchmark.",
  },
  {
    question: "How do I work out the selling price for a target margin?",
    answer:
      "Divide your cost price by 1 minus your target margin as a decimal. For a target margin of 30%, divide your cost price by 0.7. This gives the selling price needed so that your target margin percentage, calculated on that selling price, is achieved exactly. Use the 'price for a target margin' mode on this calculator to do this instantly.",
  },
  {
    question: "Why can't margin be 100% or more?",
    answer:
      "Margin can never reach 100%, since that would require an infinite selling price relative to a fixed cost, and it can never realistically exceed 100% either, since margin is profit divided by selling price, and profit can never be larger than the selling price itself. Markup, by contrast, has no such ceiling and can exceed 100% easily.",
  },
  {
    question: "Does this calculator account for VAT?",
    answer:
      "No, enter your cost price and selling price on a consistent basis, either both including VAT or both excluding it. If you need to add or remove VAT from a price first, our VAT calculator handles that separately before you work out your margin.",
  },
  {
    question: "Should I price based on margin or based on what competitors charge?",
    answer:
      "Both matter. Working out your margin tells you whether a price is profitable for your business, while competitor pricing tells you whether customers are likely to accept that price. A price that hits your target margin but is far above the market rate may struggle to sell, so it is worth checking both angles before finalising a price.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Profit margin and markup are two of the most commonly confused
        numbers in pricing, and mixing them up can lead to underpricing a
        product or service without realising it. This calculator works out
        your margin and markup from a cost price and selling price, or the
        selling price you need to hit a specific target margin.
      </p>

      <h2>How to use the profit margin calculator</h2>
      <p>
        Choose whether you want to work out your margin from two prices you
        already have, or work out the selling price needed to hit a target
        margin. Enter your cost price, then either your selling price, or
        your target margin percentage. The calculator instantly shows your
        profit per unit, your margin, and your markup, so you can see both
        figures side by side.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Profit is simply selling price minus cost price. Margin divides that
        profit by the selling price, showing what proportion of each sale is
        profit. Markup divides the same profit by the cost price instead,
        showing how much you have added on top of what the item cost you.
        Because margin and markup use different bases, a 50% markup does not
        equal a 50% margin, a common source of pricing errors.
      </p>
      <p>
        To find a selling price for a target margin, the calculator
        rearranges the margin formula: selling price equals cost price
        divided by 1 minus the target margin, expressed as a decimal. This
        guarantees that, once you sell at the resulting price, your margin
        works out to exactly the percentage you were aiming for.
      </p>

      <h2>Worked example</h2>
      <p>
        A product costing <strong>£40</strong> to make or buy, sold for{" "}
        <strong>£65</strong>, generates a profit of <strong>£25</strong>.
        That is a margin of £25 &divide; £65 = <strong>38.46%</strong>, but a
        markup of £25 &divide; £40 = <strong>62.5%</strong>, the same £25
        profit expressed two different ways. If instead you wanted to price
        that same £40 product to hit a target margin of{" "}
        <strong>30%</strong>, the required selling price is £40 &divide; 0.7
        = <strong>£57.14</strong>, giving a profit of £17.14 and a markup of
        42.86%.
      </p>

      <h2>Quick markup to margin conversions</h2>
      <p>
        Because markup and margin are calculated on different bases, the
        same underlying profit produces two different-looking percentages,
        and the gap between them grows as the numbers get bigger. A 25%
        markup works out as a 20% margin, a 50% markup works out as a 33.3%
        margin, a 100% markup, doubling your cost price, works out as
        exactly a 50% margin, and a 150% markup works out as a 60% margin.
        Notice that markup can climb well past 100%, while margin can never
        reach 100% at all, since it is always measured against the larger
        selling price figure rather than the smaller cost price.
      </p>

      <h2>When to think in markup versus margin</h2>
      <p>
        Retailers and tradespeople often think naturally in markup, since it
        answers the practical question of how much to add on top of a known
        cost price when setting a shelf or quote price. Margin, on the other
        hand, is generally the more useful figure for understanding overall
        business profitability, since it directly shows what proportion of
        total revenue ends up as profit, which links more naturally to
        financial statements, forecasting and comparing performance year on
        year. Neither figure is wrong, but using the right one for the
        decision in front of you, and being clear with colleagues,
        accountants or lenders about which one you mean, avoids
        misunderstandings that can lead to underpriced products.
      </p>

      <h2>Ways to improve a thin margin</h2>
      <p>
        If this calculator shows a margin lower than you would like, there
        are generally two levers to pull: increasing the selling price, or
        reducing the cost price. Raising price is the most direct option,
        though it needs to be balanced against what customers are willing
        to pay and what competitors charge. On the cost side, negotiating
        better supplier terms, buying in larger volumes, reducing waste or
        returns, and reviewing packaging and delivery costs can all lower
        your cost price without touching the price customers see at all.
        Even a small reduction in cost price can meaningfully improve margin,
        since it drops straight through to profit rather than being partly
        offset by tax or other costs the way extra revenue sometimes is.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The most common mistake is applying a markup percentage while
        assuming it will produce the same margin percentage, which
        systematically underprices products, since markup on cost is always
        a smaller number of pounds than the equivalent margin on selling
        price. Always be clear about which figure you are working with,
        especially when comparing pricing strategies with someone else, or
        with a spreadsheet template that may use a different convention.
      </p>
      <p>
        Another mistake is calculating margin from prices that are not on a
        consistent VAT basis, mixing a VAT-inclusive cost with a
        VAT-exclusive selling price or vice versa, which distorts the result.
        It is also easy to overlook other per-unit costs beyond the direct
        cost price, such as payment processing fees or delivery costs, which
        can meaningfully erode a margin that looks healthy on paper.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you know your margin, our{" "}
        <Link href="/calculators/break-even-calculator-uk">
          break-even calculator
        </Link>{" "}
        shows how many units you need to sell to cover your fixed costs at
        that price. Our{" "}
        <Link href="/calculators/vat-calculator-uk">VAT calculator</Link>{" "}
        can add or remove VAT before you compare prices, our{" "}
        <Link href="/calculators/discount-calculator-uk">
          discount calculator
        </Link>{" "}
        checks the effect of a sale price on your margin, and our{" "}
        <Link href="/calculators/corporation-tax-calculator-uk">
          Corporation Tax calculator
        </Link>{" "}
        estimates the tax due once profit reaches the company level. Our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        also covers pricing and profit considerations for sole traders.
      </p>
    </div>
  );
}
