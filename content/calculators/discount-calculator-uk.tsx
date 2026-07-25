import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How do I work out a percentage discount?",
    answer:
      "Multiply the original price by the discount percentage, then subtract that from the original price. For a £50 item at 20% off, that is £50 x 0.20 = £10 off, giving a final price of £40. This calculator does the working for you instantly.",
  },
  {
    question: "How do I work out the percentage saved when I know the amount off?",
    answer:
      "Divide the amount saved by the original price, then multiply by 100. If a £120 item is reduced to £90, you saved £30, and £30 divided by £120 is 0.25, or 25% off. Use the amount off mode in the calculator above to see this instantly for your own numbers.",
  },
  {
    question: "Do multiple discounts stack by simply adding the percentages?",
    answer:
      "No, and this is a common mistake. Two separate 20% discounts applied one after another do not equal 40% off. The second discount applies to the already reduced price, so the combined effect is smaller than adding the percentages together, working out at 36% off in that example, not 40%.",
  },
  {
    question: "Does this calculator include VAT?",
    answer:
      "No, this calculator works purely on the price and discount you enter, whether that price includes VAT or not. If you need to work out VAT separately, our VAT calculator can add or extract VAT from any price.",
  },
  {
    question: "Can I use this for working out a sale price in a shop?",
    answer:
      "Yes, this is exactly the kind of quick calculation this tool is built for, whether you are checking a sale sign's maths, comparing two different discount offers, or working out what a discount code will actually save you at checkout.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Sales signs and discount codes are not always as straightforward as
        they look, particularly when discounts are combined, or when you are
        trying to compare a percentage-off deal against a fixed amount-off
        voucher. This calculator works out the final price, the amount you
        save, and the effective discount rate, for either type of offer.
      </p>

      <h2>How to use the discount calculator</h2>
      <p>
        Enter the original price, then choose whether your discount is a
        percentage off or a fixed amount off. For a percentage discount,
        enter the percentage, such as 20 for 20% off. For a fixed amount,
        enter the pounds and pence taken off, such as £15 off. The
        calculator instantly shows the final price, how much you save, and
        the equivalent effective discount percentage either way, so you can
        compare offers on a like-for-like basis.
      </p>

      <h2>How the calculation works</h2>
      <p>
        For a percentage discount, the amount saved is simply the original
        price multiplied by the discount percentage. The final price is the
        original price minus that saving. For a fixed amount off, the
        calculation works the other way: the saving is whatever fixed amount
        you enter, and the effective discount percentage is that saving
        divided by the original price, expressed as a percentage.
      </p>
      <p>
        This effective percentage figure is particularly useful for
        comparing two different types of offer. A £15 off voucher and a 15%
        off voucher only save the same amount at one specific price point,
        £100, and diverge from each other at every other price, sometimes
        significantly.
      </p>

      <h2>Worked example</h2>
      <p>
        Say a jacket is priced at <strong>£80</strong>, reduced by{" "}
        <strong>20%</strong>. The saving is £80 &times; 0.20 ={" "}
        <strong>£16</strong>, giving a final price of{" "}
        <strong>£64</strong>.
      </p>
      <p>
        Now compare that to a different shop offering the same jacket at{" "}
        <strong>£80</strong> with a <strong>£20 off</strong> voucher
        instead. That voucher saves more in cash terms, £20 rather than £16,
        and works out at an effective discount of 25%, a better deal than
        the 20% offer despite looking similar at first glance. Try switching
        between percentage and amount modes in the calculator above with
        your own prices to compare real offers you have seen.
      </p>

      <h2>Comparing discount codes and voucher offers</h2>
      <p>
        Online shopping often presents several different types of offer at
        once: a site-wide percentage discount, a fixed-amount voucher code,
        and sometimes free delivery thrown in on top. Working out which
        combination actually saves the most money is not always obvious
        from the checkout page alone, particularly when a voucher only
        applies above a minimum spend or excludes certain items.
      </p>
      <p>
        A useful habit is to work out the effective percentage saved for
        each offer using this calculator, then compare that percentage
        directly rather than comparing a percentage offer against a pounds
        and pence offer at face value. This is especially useful when a
        retailer offers a choice between two vouchers, such as £10 off
        everything or 15% off orders over £50, since the better choice
        depends entirely on how much you are actually spending.
      </p>
      <p>
        It is also worth checking whether a discount is being calculated on
        the price before or after any other reductions, such as an existing
        sale price. Retailers sometimes apply a voucher to the already
        discounted sale price, and sometimes only to full-price items, so
        reading the terms attached to a code before assuming it will apply
        to everything in your basket can save disappointment at checkout.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The most common mistake is assuming stacked discounts simply add
        together. Two 20% discounts applied one after another do not equal
        40% off. The first discount takes £80 down to £64. The second 20%
        discount then applies to £64, not the original £80, taking a
        further £12.80 off, for a final price of £51.20, an effective
        discount of 36%, not 40%. Always apply stacked discounts one at a
        time, in sequence, rather than adding the percentages upfront.
      </p>
      <p>
        Another mistake is comparing a percentage-off deal and an
        amount-off deal purely on the headline number without checking the
        actual price. A &ldquo;25% off&rdquo; sign sounds more impressive
        than &ldquo;£10 off&rdquo;, but on a £30 item, 25% off only saves
        £7.50, less than the flat £10 voucher would. Running both through
        this calculator removes the guesswork.
      </p>
      <p>
        It is also worth checking whether a discount applies before or after
        VAT, and whether delivery or other charges are added afterwards,
        since these can quietly erase some or all of an advertised saving
        once the full transaction is complete.
      </p>

      <h2>Why the effective discount rate matters</h2>
      <p>
        The effective discount rate this calculator shows is more useful
        than it might first appear, because it puts every type of offer on
        the same scale. A fixed amount off, a percentage off, and even a
        buy-one-get-one-half-price deal (once averaged across both items)
        can all be converted into a single comparable percentage, making it
        much easier to judge which deal is genuinely the better one rather
        than relying on which offer is phrased more persuasively.
      </p>
      <p>
        This is particularly useful when budgeting for a larger purchase,
        where even a few percentage points of difference between two offers
        can add up to a meaningful amount of money. Working the numbers
        through properly, rather than trusting the headline claim on a
        sign or banner, is a small habit that consistently pays off over
        time.
      </p>

      <h2>Related calculators</h2>
      <p>
        For everyday maths beyond discounts, our{" "}
        <Link href="/calculators/percentage-calculator">
          percentage calculator
        </Link>{" "}
        covers percentage change, increase and decrease in general, and our{" "}
        <Link href="/calculators/tip-calculator-uk">tip calculator</Link>{" "}
        works out a tip and splits a bill between diners. If you need to add
        or remove VAT from a price, our{" "}
        <Link href="/calculators/vat-calculator-uk">VAT calculator</Link>{" "}
        handles that separately. Whatever you save on a good discount is
        also worth putting to work: our guide to{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest
        </Link>{" "}
        explains how even small regular savings can add up significantly
        over time.
      </p>
    </div>
  );
}
