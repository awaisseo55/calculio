import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What does break-even point mean?",
    answer:
      "Your break-even point is the number of units you need to sell, or the amount of revenue you need to generate, for your total income to exactly equal your total costs, with no profit and no loss. Selling beyond this point starts generating profit, while selling less than this means you are operating at a loss.",
  },
  {
    question: "What is contribution margin?",
    answer:
      "Contribution margin is the amount left from each unit sold after covering the variable cost of making or delivering that unit, calculated as price per unit minus variable cost per unit. This leftover amount contributes towards covering your fixed costs first, and then towards profit once fixed costs are covered.",
  },
  {
    question: "What counts as a fixed cost versus a variable cost?",
    answer:
      "Fixed costs stay roughly the same regardless of how much you sell, such as rent, insurance, salaries and software subscriptions. Variable costs change directly with how much you produce or sell, such as raw materials, packaging, and any per-unit delivery or transaction fees. Getting this split right is essential for an accurate break-even calculation.",
  },
  {
    question: "What if my variable cost is higher than my selling price?",
    answer:
      "If your variable cost per unit is higher than your price per unit, your contribution margin is negative, meaning you lose money on every single unit sold, and no sales volume can ever reach break-even. In this situation, you need to raise your price, reduce your variable cost, or both, before break-even becomes achievable at all.",
  },
  {
    question: "Does this calculator work for a service business, not just physical products?",
    answer:
      "Yes, the same maths applies to services. Treat each billable hour, project or client as a 'unit', your day rate or project fee as the price per unit, and any direct costs tied to delivering that service, such as subcontractor costs or materials, as the variable cost per unit.",
  },
  {
    question: "How often should I recalculate my break-even point?",
    answer:
      "It is worth recalculating whenever your costs or pricing change materially, such as a rent increase, a supplier price rise, or a decision to change your pricing. Many businesses also review it at least once a year alongside budgeting and pricing reviews, since fixed costs in particular tend to drift upward over time.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Knowing exactly how much you need to sell before a business starts
        making money is one of the most useful numbers in running it. This
        calculator works out your break-even point in both units and
        revenue, from your fixed costs, price per unit and variable cost per
        unit, plus how much more you would need to sell to hit a target
        profit.
      </p>

      <h2>How to use the break-even calculator</h2>
      <p>
        Enter your fixed costs for the period you are planning around, such
        as a month or a year, along with your price per unit and your
        variable cost per unit. Optionally enter a target profit figure if
        you want to see what it takes to hit a specific profit goal, not just
        break even. The calculator instantly shows your break-even point in
        units and revenue, your contribution margin, and the units and
        revenue needed for your target profit.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Contribution margin is your price per unit minus your variable cost
        per unit, the amount each sale contributes towards covering fixed
        costs and, beyond that, profit. Dividing your fixed costs by this
        contribution margin gives your break-even point in units, since that
        is how many units are needed for their combined contribution to
        exactly cover fixed costs. Multiplying break-even units by price per
        unit gives break-even revenue. For a target profit, the calculator
        simply adds your target profit to fixed costs before dividing by
        contribution margin, since a profit goal is really just an extra
        cost to cover through sales.
      </p>

      <h2>Worked example</h2>
      <p>
        A small business with <strong>£3,000</strong> in monthly fixed
        costs, selling a product at <strong>£25</strong> with a variable
        cost of <strong>£10</strong> per unit, has a contribution margin of{" "}
        <strong>£15</strong>, or 60% of the selling price. Break-even is{" "}
        £3,000 &divide; £15 = <strong>200 units</strong> a month, worth{" "}
        <strong>£5,000</strong> in revenue. To hit a target profit of{" "}
        <strong>£1,000</strong> on top, the business would need (£3,000 +
        £1,000) &divide; £15 = roughly <strong>267 units</strong>, worth
        around <strong>£6,667</strong> in revenue that month.
      </p>

      <h2>Margin of safety: how much cushion do you have?</h2>
      <p>
        Once you know your break-even point, it is useful to compare it
        against your actual or expected sales, a comparison known as your
        margin of safety. It is calculated as the difference between your
        expected sales and your break-even sales, divided by your expected
        sales, expressed as a percentage. In the example above, a business
        expecting to sell 300 units a month against a break-even point of
        200 units has a margin of safety of (300 &minus; 200) &divide; 300 ={" "}
        <strong>33.3%</strong>, meaning sales could fall by roughly a third
        before the business tipped into a loss. A low or negative margin of
        safety is a warning sign that a business is more exposed to a dip in
        sales than it might feel day to day.
      </p>

      <h2>Using break-even to test pricing decisions</h2>
      <p>
        Break-even analysis is also a useful way to sense-check a pricing
        change before making it. Raising your price per unit increases your
        contribution margin, which lowers your break-even point in units,
        meaning you would need to sell fewer units to cover the same fixed
        costs, though it may also reduce demand depending on how
        price-sensitive your customers are. Conversely, cutting your
        variable cost per unit, for example by negotiating a better supplier
        rate, has the same effect on contribution margin without touching
        your price at all. Running a few different price and cost scenarios
        through this calculator before committing to a change is a quick way
        to see the effect on your break-even point before it happens in
        practice.
      </p>

      <h2>Break-even with more than one product</h2>
      <p>
        This calculator works from a single price and variable cost, which
        suits a business with one main product or service, or one that
        wants a quick estimate based on its typical or average sale. A
        business selling several products at different prices and margins
        can still use the same underlying approach, but would normally work
        out a weighted average contribution margin across its full product
        mix first, based on the proportion of sales each product typically
        represents, before dividing fixed costs by that blended figure. This
        gets more complex quickly with a wide product range, and is often
        better handled in a spreadsheet or with an accountant once a
        business sells many different lines at very different margins.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is misclassifying costs, particularly treating a
        cost that actually scales with sales, like packaging or transaction
        fees, as a fixed cost, which understates the true variable cost per
        unit and overstates contribution margin. This makes break-even look
        easier to reach than it really is.
      </p>
      <p>
        Another mistake is forgetting to update the calculation after a
        price change, a new supplier cost, or a change to fixed overheads
        like rent, all of which shift the break-even point. It is also worth
        remembering that break-even alone does not tell you whether a
        business is actually a good idea, only the sales volume needed to
        avoid a loss; profitability at realistic sales volumes, and a
        healthy margin of safety above break-even, matter just as much as
        reaching break-even itself.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you know your break-even point, our{" "}
        <Link href="/calculators/profit-margin-calculator-uk">
          profit margin calculator
        </Link>{" "}
        helps you check your pricing is generating a healthy margin above
        that point, and our{" "}
        <Link href="/calculators/vat-calculator-uk">VAT calculator</Link>{" "}
        can add VAT to your pricing if you are VAT registered. Once profit
        is flowing through the business, our{" "}
        <Link href="/calculators/corporation-tax-calculator-uk">
          Corporation Tax calculator
        </Link>{" "}
        estimates the tax due on it. If you are self-employed rather than
        running a limited company, our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        and our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        cover that side of the numbers.
      </p>
    </div>
  );
}
