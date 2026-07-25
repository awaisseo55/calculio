import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much extra flooring should I buy for wastage?",
    answer:
      "10% is a common default for a simple rectangular room laid in the standard direction. Increase this to 15% or even 20% for diagonal layouts, rooms with lots of alcoves, awkward cuts around fitted furniture, or if you are new to fitting flooring and expect a few mistakes along the way.",
  },
  {
    question: "How many packs of laminate flooring do I need?",
    answer:
      "Work out your room's total floor area, add your wastage percentage, then divide by the pack's coverage in square metres, rounding up to the next whole pack. This calculator does that instantly once you enter your room dimensions and chosen pack size.",
  },
  {
    question: "Does pack size vary a lot between flooring types?",
    answer:
      "Yes, quite a bit. Laminate and engineered wood packs commonly cover somewhere around 1.8 to 2.3 square metres, while tiles are often sold by the box covering closer to 1 square metre, and vinyl and carpet are sometimes sold by the linear metre from a wide roll instead of a fixed pack. Always check the specific pack size printed on your chosen product, since it varies by brand and range.",
  },
  {
    question: "Should I measure an L-shaped room as two separate rectangles?",
    answer:
      "Yes, this is the simplest and most accurate way to measure an irregular room without complex geometry. Split it into two (or more) simple rectangles, measure each one, and add the areas together, which is exactly what the L-shape mode on this calculator does for you.",
  },
  {
    question: "Does this calculator account for skirting boards or underlay?",
    answer:
      "No, this calculator covers the flooring material itself, based on floor area. Underlay is usually sold separately, often in rolls covering a set area, so you would need to check coverage for your chosen underlay separately. Skirting boards are sold by length rather than area, so they are not part of this calculation either.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Buying flooring without working out the area properly almost always
        ends one of two ways: an awkward extra trip back to the shop for one
        more pack partway through the job, or several unopened packs left
        over that cannot always be returned. This calculator works out
        exactly how much flooring you need, including a sensible wastage
        allowance, and how many packs to buy for laminate, vinyl, engineered
        wood, solid wood, carpet or tile.
      </p>

      <h2>How to use the flooring calculator</h2>
      <p>
        Choose your room shape: a simple rectangle, an L-shape made up of two
        rectangles, or a custom area if you already know your total square
        metres from a floor plan. Enter your dimensions in metres or feet,
        pick your flooring type, and the calculator fills in a typical pack
        size for that type, which you can edit if your specific product
        covers a different area. Add your wastage percentage and, if you
        know it, a price per square metre to see an estimated cost as well.
      </p>
      <p>
        For an L-shaped room, split it into two simple rectangles first,
        such as the main body of the room and a smaller alcove or extension,
        and enter each one separately. The calculator adds both areas
        together automatically.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator first works out your base floor area from your room
        dimensions, or uses the custom figure you enter directly. It then
        adds your chosen wastage percentage on top, since fitting flooring
        always uses a bit more material than the exact floor area alone,
        due to cuts, offcuts, pattern matching, and mistakes. That figure is
        then divided by your pack size and rounded up to a whole number of
        packs, since you cannot buy part of a pack. Multiplying the number
        of packs by the pack size gives your total area purchased, which is
        usually a little more than you strictly need, exactly as intended.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a rectangular room <strong>4 metres long</strong> and{" "}
        <strong>3.5 metres wide</strong>, a floor area of{" "}
        <strong>14 square metres</strong>. You choose laminate flooring with
        a typical pack size of <strong>2.22 square metres</strong>, and use
        the default <strong>10% wastage</strong> allowance.
      </p>
      <p>
        Adding 10% wastage to 14 square metres gives{" "}
        <strong>15.4 square metres</strong> needed. Dividing by the 2.22
        square metre pack size gives 6.94, which rounds up to{" "}
        <strong>7 packs</strong>. Those 7 packs cover{" "}
        <strong>15.54 square metres</strong> in total, slightly more than
        the 15.4 square metres calculated, since you can only buy whole
        packs.
      </p>
      <p>
        Try switching to a diagonal layout in your head and increasing the
        wastage percentage to 15% in the calculator above with the same room
        size. You will see the packs needed rise, since diagonal cuts create
        more offcuts than a straightforward parallel layout against the
        walls.
      </p>

      <h2>Choosing between flooring types</h2>
      <p>
        Laminate is generally the most budget-friendly option and reasonably
        straightforward for a confident DIYer to fit, using a click-lock
        system over underlay. Engineered wood offers a genuine wood veneer
        over a stable core, giving a more premium look while handling
        humidity changes better than solid wood. Solid wood is the most
        premium and longest-lasting option but the most sensitive to
        moisture and temperature changes, and often benefits from
        professional fitting.
      </p>
      <p>
        Vinyl, including luxury vinyl tile and plank products, is
        particularly practical in kitchens and bathrooms thanks to its
        water resistance, and modern ranges have closed much of the visual
        gap with wood and stone. Tile is the most water-resistant option of
        all and suits wet rooms and hallways well, though it is typically
        the least forgiving to fit yourself without prior experience, and
        cutting tiles around pipes and awkward corners takes practice.
        Carpet remains a popular choice for bedrooms and living rooms where
        comfort underfoot matters more than water resistance.
      </p>

      <h2>Common mistakes DIYers make</h2>
      <p>
        A frequent mistake is measuring only the visible floor space and
        forgetting areas hidden under existing fitted units, such as under a
        kitchen island or built-in wardrobe, if the flooring needs to run
        underneath. Measure the full room footprint first, then decide
        whether any areas can genuinely be excluded.
      </p>
      <p>
        Another common mistake is applying the same 10% wastage figure to
        every layout. A simple room with flooring laid parallel to the
        longest wall wastes relatively little material, while a diagonal
        layout, a herringbone pattern, or a room with many alcoves and
        doorways can waste considerably more, sometimes 15% to 20% or more.
        Underestimating wastage on a complex layout is one of the most
        common reasons DIYers run short partway through.
      </p>
      <p>
        It is also worth checking that all packs you buy are from the same
        batch or production run, since colour and finish can vary slightly
        between batches, particularly with natural materials like solid
        wood. Buying everything in one order, with a little extra rather
        than ordering a top-up pack later, avoids a visible mismatch across
        the finished floor.
      </p>
      <p>
        Finally, remember that fitting flooring over an uneven subfloor,
        removing old flooring, or working around underfloor heating can add
        significant time and cost beyond the flooring material itself. For
        anything beyond a straightforward DIY job, get quotes from qualified
        flooring fitters before committing to a product and quantity.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are decorating more than just the floor, our{" "}
        <Link href="/calculators/paint-coverage-calculator-uk">
          paint coverage calculator
        </Link>{" "}
        works out how much paint you need for the same room, and our{" "}
        <Link href="/calculators/concrete-calculator-uk">
          concrete calculator
        </Link>{" "}
        can help with a solid subfloor or extension base. If flooring is
        part of a bigger renovation project, our{" "}
        <Link href="/calculators/kitchen-renovation-cost-calculator-uk">
          kitchen renovation cost calculator
        </Link>{" "}
        gives a fuller budget picture, and our{" "}
        <Link href="/blog/first-home-cost-uk-2026">
          first home cost guide
        </Link>{" "}
        covers the wider costs of buying and improving a home.
      </p>
    </div>
  );
}
