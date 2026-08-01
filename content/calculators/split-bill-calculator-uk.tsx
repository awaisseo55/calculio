import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the difference between splitting evenly and splitting by what each person ordered?",
    answer:
      "Splitting evenly divides the total bill and tip into equal shares regardless of what each person actually had, which is simplest when everyone spent roughly the same amount. Splitting by what each person ordered charges each person their own subtotal plus a proportional share of the tip based on how much they spent, which is fairer when spending varies a lot across the table.",
  },
  {
    question: "How is the tip split when people order different amounts?",
    answer:
      "The tip is divided in proportion to each person's share of the total bill, so someone who ordered a bigger, more expensive meal contributes a proportionally bigger share of the tip too, rather than everyone paying the same flat tip amount regardless of what they spent.",
  },
  {
    question: "What tip percentage is normal in the UK?",
    answer:
      "There is no fixed rule, but a tip of around 10% to 12.5% is common in UK restaurants for good service, and some venues add a discretionary service charge automatically to the bill, which is worth checking before adding an extra tip on top. Tipping is entirely optional in the UK and can be removed or adjusted if you are unhappy with the service, unlike in some other countries.",
  },
  {
    question: "Should I tip on top of an already-added service charge?",
    answer:
      "It is worth checking your bill carefully, since many restaurants already include a discretionary service charge, commonly around 12.5%, and adding a further cash or card tip on top is entirely optional rather than expected. If a service charge is already included, you can simply pay the total shown rather than adding an extra tip.",
  },
  {
    question: "Can I use this calculator for more than a restaurant bill?",
    answer:
      "Yes, the same logic works for splitting any shared cost between a group, whether that is a takeaway order, a shared taxi fare, a group gift, or household costs like a shared grocery shop, with or without an added percentage on top.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Splitting a bill between friends should be quick, not another
        maths problem at the end of a meal. This calculator handles both
        the simple case, splitting everything evenly across the table, and
        the trickier case where everyone ordered something different and
        wants to pay their fair share, tip included.
      </p>

      <h2>How to use the split bill calculator</h2>
      <p>
        Choose whether you want to split the bill evenly or by what each
        person ordered. For an even split, enter the total bill amount and
        the number of people, then pick or enter a tip percentage. For a
        split by what each person ordered, enter each person&apos;s
        individual subtotal using the add and remove buttons to match your
        group size, and the calculator works out each person&apos;s fair
        share of the tip automatically, based on how much they spent.
      </p>

      <h2>How the calculation works</h2>
      <p>
        For an even split, the calculator adds your chosen tip percentage to
        the total bill, then divides the combined total by the number of
        people, so everyone pays exactly the same amount regardless of what
        they individually ordered. For a split by what each person ordered,
        the tip is calculated on the full bill total, then divided
        proportionally, so each person&apos;s share of the tip matches their
        share of the overall bill, rather than being split into equal
        slices.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a table of <strong>4 people</strong> with a{" "}
        <strong>£96 bill</strong> and a <strong>12.5% tip</strong>. Split
        evenly, the tip comes to <strong>£12</strong>, making a total of{" "}
        <strong>£108</strong>, or <strong>£27 each</strong>.
      </p>
      <p>
        Now say the same £96 was actually made up of individual orders of
        £28, £22, £19 and £27. Splitting by what each person ordered, the
        person who spent £28 pays a proportionally larger share of the £12
        tip, £3.50, bringing their total to <strong>£31.50</strong>, while
        the person who spent £19 pays a smaller tip share of £2.38,
        bringing their total to <strong>£21.38</strong>. The other two
        diners land at £24.75 and £30.38. All four figures still add up to
        the same £108 total, just distributed according to what each person
        actually had rather than split into four identical shares.
      </p>

      <h2>Common mistakes when splitting a bill</h2>
      <p>
        A common mistake is adding a tip on top of a bill that already
        includes a discretionary service charge, effectively double-tipping
        without realising it, so always check the bottom of the receipt
        first. Another is splitting evenly out of habit even when spending
        varied a lot across the table, which can feel unfair to whoever
        ordered less. If you are working out a tip on a takeaway or a
        smaller bill for just yourself, our{" "}
        <Link href="/calculators/tip-calculator-uk">tip calculator</Link>{" "}
        is a quicker option for a single-person split.
      </p>

      <h2>Related calculators</h2>
      <p>
        For a simpler single-total tip and split, try our{" "}
        <Link href="/calculators/tip-calculator-uk">tip calculator</Link>. If
        you want to work out a percentage of any amount, our{" "}
        <Link href="/calculators/percentage-calculator">
          percentage calculator
        </Link>{" "}
        is useful beyond just restaurant bills. If you are checking VAT on a
        receipt rather than a tip, our{" "}
        <Link href="/calculators/vat-calculator-uk">VAT calculator</Link>{" "}
        breaks that down separately, and our{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">
          salary to hourly calculator
        </Link>{" "}
        is handy if you are working out what a night out actually costs
        against an hour of your pay.
      </p>
    </div>
  );
}
