import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is unit pricing?",
    answer:
      "Unit pricing means working out the cost per standard unit, such as per gram, per millilitre or per item, rather than just looking at the total price on the shelf. It lets you compare products of different pack sizes fairly, since the bigger pack is not always the better deal.",
  },
  {
    question: "Why isn't the bigger pack always cheaper per unit?",
    answer:
      "Retailers price packs based on many factors, including promotions, packaging costs and demand, not just size. A large multipack can sometimes cost more per unit than a smaller pack if it is not on offer, which is why it is worth checking rather than assuming bigger always means better value.",
  },
  {
    question: "Do UK supermarkets already show unit prices?",
    answer:
      "Many UK supermarkets display a price per unit, such as price per 100g or per litre, on shelf labels, which can make comparisons easier in store. However, the units shown do not always match between different pack sizes or brands, so this calculator is useful when you need to compare figures on your own terms.",
  },
  {
    question: "Can I compare products with different units, like grams and millilitres?",
    answer:
      "This calculator compares two products using the same unit, such as both in grams or both in millilitres, so make sure you enter matching units for both products. If one product is measured in a different unit entirely, you will need to convert it first before comparing.",
  },
  {
    question: "Should I always buy the cheapest unit price?",
    answer:
      "Not necessarily. Unit price only tells you about cost, not about whether you will use the whole pack before it expires, whether the quality matches your needs, or whether you actually want that much of the product. It is one useful factor among several when deciding what to buy.",
  },
  {
    question: "Is this useful for anything other than food shopping?",
    answer:
      "Yes, unit pricing works for any product sold by weight, volume or count, from cleaning products and toiletries to items sold individually, such as batteries or nappies. Anywhere you are comparing two different pack sizes or brands, this calculator can help you see which is genuinely better value.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Working out which of two products is actually better value is not always as simple as comparing the price
        on the label, especially when pack sizes differ. This calculator works out the price per unit for two
        products so you can see exactly which one is cheaper, and by how much.
      </p>

      <h2>How to use the unit price calculator</h2>
      <p>
        Choose the unit you are measuring in, such as grams, millilitres or individual items, then enter the
        price and quantity for each product. The calculator instantly shows the price per unit for both products,
        tells you which is cheaper, and shows the percentage saving between them.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator divides each product&apos;s price by its quantity to get a price per unit, then compares
        the two figures directly. The percentage saving is calculated as the difference between the two unit
        prices, divided by the higher of the two, multiplied by 100, giving you a clear sense of how much cheaper
        one option is relative to the other.
      </p>

      <h2>Worked example</h2>
      <p>
        Say <strong>Product A</strong> costs <strong>£2.50 for 500g</strong>, working out at £0.005 per gram, or
        half a penny per gram. <strong>Product B</strong> costs <strong>£4.00 for 900g</strong>, working out at
        roughly £0.0044 per gram. Product B is the better value here, coming in around{" "}
        <strong>11.1% cheaper</strong> per gram than Product A, even though its total price is higher.
      </p>

      <h2>Where unit pricing matters most</h2>
      <p>
        Unit pricing is particularly useful for everyday groceries, toiletries and household products, where the
        same brand often sells several different pack sizes at once. It is also worth checking during
        promotions, since a &ldquo;buy one get one free&rdquo; deal or multipack discount can sometimes work out
        worse value per unit than a different size that looks less exciting on the shelf. Comparing loose or
        own-brand items against pre-packed branded versions is another common place where unit pricing reveals
        genuine savings.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is comparing total prices rather than unit prices, which can make a smaller, cheaper
        looking pack seem like better value when it is not. Another mistake is mixing up units, for example
        comparing a price per 100g against a price per kg without converting first, which throws the comparison
        off completely. It is also easy to forget that buying more than you need, even at a lower unit price,
        can end up wasting money if the product goes off or you simply do not use it all.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are comparing a straight percentage discount rather than pack sizes, try our{" "}
        <Link href="/calculators/discount-calculator-uk">discount calculator</Link>. Our{" "}
        <Link href="/calculators/percentage-calculator">percentage calculator</Link> is handy for other everyday
        maths, and if you are splitting a shared shop or bill, our{" "}
        <Link href="/calculators/split-bill-calculator-uk">split bill calculator</Link> can help divide the cost
        fairly.
      </p>
    </div>
  );
}
