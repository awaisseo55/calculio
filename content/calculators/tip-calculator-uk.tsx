import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Is tipping compulsory in the UK?",
    answer:
      "No, tipping in the UK is discretionary rather than compulsory, unlike in some other countries. Many restaurants add an optional service charge to the bill, usually shown clearly, which you can ask to have removed if you prefer to tip separately or not at all.",
  },
  {
    question: "What is a normal tip percentage in the UK?",
    answer:
      "Around 10 to 12.5% is a common range in UK restaurants for good service, with some people tipping 15% or more for excellent service. It is very much a personal choice rather than a fixed rule, and no tip at all is generally acceptable if service was poor.",
  },
  {
    question: "Does the tip go to the staff who served me?",
    answer:
      "It depends on the venue. Since October 2024, UK law requires employers to pass on tips to staff in full, without deductions, though how tips are then shared among the team is usually decided by the employer's own policy.",
  },
  {
    question: "Should I tip on top of a service charge already added?",
    answer:
      "That is entirely up to you. Some people tip only the service charge already on the bill, while others add a little extra for particularly good service. There is no obligation to tip twice, and checking your bill for an existing service charge is worth doing first.",
  },
  {
    question: "How do I split a bill fairly with an uneven number of items?",
    answer:
      "This calculator gives a simple equal split across everyone at the table, which works well for shared meals. For bills where people ordered very different amounts, you may prefer to work out individual totals first, then apply the tip percentage to each person's share separately.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Working out a tip, and then splitting the whole bill fairly between a
        group, is one of those small everyday sums that is easy to get wrong
        after a nice meal out, especially after a drink or two. This calculator
        handles both in one go, so nobody has to do mental maths at the table.
      </p>
      <p>
        Whether you are figuring out a quick tip on your own or dividing a big
        group bill several ways, this tool gives you a clear answer in seconds.
      </p>

      <h2>How to use the tip calculator</h2>
      <p>
        Enter your bill amount, then choose a tip percentage using one of the
        preset buttons or type your own. Enter how many people you are splitting
        the bill between, and the calculator shows the tip amount, the total
        bill, and what each person owes.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The tip amount is simply your bill multiplied by the tip percentage. That
        tip is then added to the original bill to give the total amount due. If
        you are splitting between more than one person, both the total bill and
        the tip itself are divided evenly across everyone, giving a clear per
        person figure that covers their fair share of both the meal and the tip.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a bill of <strong>£84.50</strong>, with a <strong>12.5%</strong>{" "}
        tip, split between <strong>4 people</strong>.
      </p>
      <p>
        The tip comes to <strong>£10.56</strong>, making a total bill of{" "}
        <strong>£95.06</strong>. Split evenly across 4 people, that works out at{" "}
        <strong>£23.77 each</strong>, covering their share of both the food and
        the tip.
      </p>
      <p>
        Try changing the tip to 15% in the calculator above using the preset
        buttons. The total bill rises to around £97.18, only about £2 more across
        the whole table, or roughly 50p more each when split four ways, which is
        often a smaller difference than people expect between a good tip and a
        generous one.
      </p>

      <h2>A note on tipping in the UK</h2>
      <p>
        Tipping in the UK is discretionary, not compulsory, which is different
        from some other countries where a tip is more strictly expected. Many
        restaurants already add an optional service charge, commonly around 10 to
        12.5%, directly to the bill. It is worth checking for this before adding
        a further tip on top, since it is easy to end up tipping twice without
        realising. Since October 2024, UK law requires that tips are passed on to
        staff in full, without the employer taking a cut, which was a genuine
        change from how things worked before.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is calculating the tip on the total bill after a
        discount has already been applied inconsistently, or tipping on the
        pre-discount price by accident. It is also easy to forget to check
        whether a service charge is already included before adding an extra tip
        on top. When splitting a bill, remember that an equal split works best
        when everyone ordered roughly the same amount. If one person had a
        starter, main, and dessert while another just had a coffee, an equal
        split may not feel fair to everyone at the table.
      </p>
      <p>
        It is also worth agreeing on the tip percentage as a group before the
        calculator is used, rather than after, since disagreements over whether
        service was 10% or 15% good are much easier to settle before anyone has
        seen a specific pound figure attached to the difference.
      </p>

      <h2>Related calculators</h2>
      <p>
        For percentage calculations beyond tipping, our{" "}
        <Link href="/calculators/percentage-calculator">
          percentage calculator
        </Link>{" "}
        covers percentage increases, decreases and more. It is also worth
        checking your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay
        </Link>{" "}
        so your dining out budget fits comfortably alongside everything else, and
        our <Link href="/calculators/age-calculator">age calculator</Link> for
        other quick everyday sums. If you are splitting a bigger group bill
        where people ordered different amounts, our{" "}
        <Link href="/calculators/split-bill-calculator-uk">
          split bill calculator
        </Link>{" "}
        handles that directly.
      </p>
    </div>
  );
}
