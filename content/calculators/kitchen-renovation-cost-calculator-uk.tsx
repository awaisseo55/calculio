import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much does a new kitchen cost in the UK in 2026?",
    answer:
      "It varies enormously by size and quality. A small, budget kitchen with flat-pack units and entry-level appliances might start from around £3,000 to £5,000. A mid-range kitchen with rigid units and better appliances commonly runs from around £8,000 to £15,000, and a premium kitchen with bespoke units and high-end appliances often starts from around £20,000 upwards. These are broad, illustrative ranges, not a quote for any specific kitchen.",
  },
  {
    question: "What is included in a typical kitchen renovation quote?",
    answer:
      "A full renovation typically includes new units and cabinetry, worktops, appliances, flooring, tiling or a splashback, electrical work, plumbing, plastering, painting and decorating, and removal of the old kitchen. Not every renovation needs all of these, for example if you are keeping your existing flooring or appliances, which is why this calculator lets you select only the items relevant to your project.",
  },
  {
    question: "Where should I spend more and where can I save on a kitchen?",
    answer:
      "Worktops and appliances tend to be worth investing in, since they are used daily and are expensive to replace again soon. Units themselves can often be a reasonable place to save, particularly with rigid carcasses from a budget or mid-range retailer paired with a better worktop and handles, since the visual difference between tiers is often smaller than the price difference.",
  },
  {
    question: "Does this calculator include the cost of a kitchen designer or fitter?",
    answer:
      "Labour costs are folded into the broad ranges for each category, such as electrical work and plumbing, rather than shown as a completely separate line. A dedicated kitchen designer service, if you use one beyond a retailer's free in-store design, is generally an additional cost on top of these ranges.",
  },
  {
    question: "Why is there such a big range between the low and high estimate?",
    answer:
      "Kitchen costs vary hugely based on exact product choices, your specific home's layout, whether structural work like knocking through a wall is involved, and regional labour rates. The range given is a broad planning guide, not a fixed quote, which is exactly why getting actual quotes from local suppliers and tradespeople is an essential next step before committing to a budget.",
  },
  {
    question: "Should I get multiple quotes before starting a kitchen renovation?",
    answer:
      "Yes, always. Getting quotes from several qualified suppliers and tradespeople, ideally at least three, gives you a much more accurate, current picture for your specific kitchen than any general calculator can provide, and helps you spot if one quote looks unusually high or low compared with the others.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        A new kitchen is one of the biggest single home improvement projects
        most people take on, and the cost range between a basic refresh and
        a full premium renovation is huge. This calculator gives a broad
        estimated cost range based on your kitchen&apos;s size and the quality
        level you are aiming for, broken down across the main categories of
        work, so you can start budgeting with a realistic figure in mind.
      </p>

      <h2>How to use the kitchen renovation cost calculator</h2>
      <p>
        Choose your kitchen size, small, medium or large, and your target
        quality level, from budget to premium. Tick the boxes for the work
        you actually need: new units, worktops, appliances, flooring,
        tiling or a splashback, electrical work, plumbing, plastering,
        painting, and removal of your old kitchen. The calculator shows an
        estimated cost range for each item you select, and a total range
        for the whole project.
      </p>
      <p>
        If you are only replacing some elements, such as worktops and
        appliances while keeping your existing units and flooring, untick
        the items you do not need. The total adjusts to reflect only the
        work you have actually selected, rather than assuming a full
        gut-and-replace renovation every time.
      </p>

      <h2>How the estimate is built</h2>
      <p>
        The calculator starts from broad, illustrative total cost ranges for
        a medium-sized kitchen at each quality tier: roughly £3,000 to
        £5,000 for budget, £8,000 to £15,000 for mid-range, and £20,000 to
        £35,000 for premium, covering every category of work. These figures
        are adjusted for kitchen size, since a small kitchen typically costs
        less overall and a large kitchen more, and then split across the
        individual work categories you select, based on how much of a
        typical kitchen budget each category usually represents.
      </p>
      <p>
        This means the total shown always scales sensibly with what you
        actually tick. Select every item and you will see close to the full
        quality-tier range for your kitchen size. Select only a few items,
        such as new appliances and a splashback, and the total shown
        reflects a smaller, more realistic figure for that smaller scope of
        work.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a <strong>medium kitchen</strong>, 8 to 15 square metres, at a{" "}
        <strong>mid-range quality</strong> level, with every work category
        included: new units, worktops, appliances, flooring, tiling,
        electrical, plumbing, plastering, painting and removal.
      </p>
      <p>
        The calculator estimates a total cost of around{" "}
        <strong>£8,000 to £15,000</strong> for the full project. New units
        typically make up the largest single share, commonly around a
        third of the total, followed by appliances at around a fifth, with
        worktops, tiling, electrical and plumbing work making up smaller
        shares each.
      </p>
      <p>
        Now try unticking flooring and tiling in the calculator above,
        perhaps because you are keeping your existing floor and splashback.
        You will see the total drop by roughly the combined share those two
        categories represented, giving a more accurate figure for your
        actual, smaller scope of work.
      </p>

      <h2>Budget, mid-range and premium: what the difference looks like</h2>
      <p>
        A budget kitchen typically means flat-pack units you or a fitter
        assemble on site, laminate worktops, and entry-level integrated or
        freestanding appliances, often from a large DIY or budget kitchen
        retailer. A mid-range kitchen usually means rigid, pre-assembled
        units, a step up in worktop material such as quartz or a better
        laminate, and mid-tier branded appliances. A premium kitchen
        typically means bespoke or semi-bespoke cabinetry, natural stone or
        high-end composite worktops, and premium integrated appliances,
        often installed by a specialist kitchen company rather than a
        general builder.
      </p>

      <h2>How long does a kitchen renovation typically take</h2>
      <p>
        A straightforward like-for-like kitchen swap, replacing units and
        appliances in roughly the same layout, might take one to two weeks
        once work actually starts. A fuller renovation involving moving
        plumbing or electrics, structural changes, or waiting for bespoke
        units to be manufactured can stretch to several weeks or even a
        couple of months from order to completion. It is worth planning
        for reduced kitchen access during this time, and many households
        set up a temporary kitchen area elsewhere in the home for the
        duration of the work.
      </p>
      <p>
        Ordering lead times are often underestimated too. Budget and
        mid-range units from larger retailers are sometimes available
        within a couple of weeks, while bespoke or semi-bespoke premium
        kitchens can take eight to twelve weeks or longer to manufacture
        and deliver. Building this lead time into your overall project
        timeline avoids a frustrating gap between finishing demolition and
        actually having new units to fit.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is budgeting only for the units and appliances
        themselves and forgetting the surrounding work: electrical
        rewiring, plumbing changes, plastering after removing old tiles,
        and repainting the room once work is finished. These add up and are
        easy to underestimate if you have not renovated a kitchen before.
      </p>
      <p>
        It is also easy to underestimate how much unexpected work can
        emerge once old units are removed, such as damaged flooring,
        outdated wiring that no longer meets current standards, or damp
        issues hidden behind old cabinetry. Keeping a contingency, commonly
        around 10% to 15% of your budget, for these kinds of surprises is a
        sensible habit rather than a pessimistic one.
      </p>
      <p>
        Finally, remember that this calculator gives broad planning ranges,
        not a quote. Get quotes from qualified kitchen suppliers and
        tradespeople before committing to a budget or a specific product
        range, since exact prices vary by region, supplier, and the
        specific products you choose.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are financing a kitchen renovation, our{" "}
        <Link href="/calculators/loan-repayment-calculator-uk">
          loan repayment calculator
        </Link>{" "}
        works out monthly repayments on a personal loan, and our{" "}
        <Link href="/calculators/mortgage-overpayment-calculator-uk">
          mortgage overpayment calculator
        </Link>{" "}
        can show the impact of borrowing more against your mortgage instead.
        If the renovation is part of buying a new home, our{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          first home cost guide
        </Link>{" "}
        and{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">
          mortgage deposit guide
        </Link>{" "}
        cover the wider costs of the purchase itself.
      </p>
    </div>
  );
}
