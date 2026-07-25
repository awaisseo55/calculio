import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much paint does one litre cover?",
    answer:
      "It varies by paint and surface, but a common rule of thumb for emulsion on a previously painted wall is around 12 square metres per litre. Check the tin of your chosen paint for its specific coverage rate, since this can vary quite a bit between brands and finishes.",
  },
  {
    question: "Should I round up when buying tins?",
    answer:
      "Yes, always round up rather than down, and it is often worth buying slightly more than the calculator suggests in case of spillage, mistakes, or future touch ups. Paint left over is far less frustrating than a shade mismatch from buying more later.",
  },
  {
    question: "Do new plaster or dark colours need more paint?",
    answer:
      "Yes, both can reduce coverage per litre. New plaster is more absorbent and often needs a mist coat first, and covering a dark colour with a lighter one, or vice versa, sometimes needs an extra coat beyond what this calculator assumes.",
  },
  {
    question: "How many coats should I use?",
    answer:
      "Two coats is standard for most walls and most paints, giving even coverage and a durable finish. A single coat can work for minor touch ups or when the new colour closely matches the old one, but check your paint manufacturer's own guidance.",
  },
  {
    question: "Does this work for ceilings too?",
    answer:
      "The same formula works for a ceiling if you treat its length and width as the room dimensions and set the height input to 1, since a ceiling is a flat area rather than a wall height calculation. Just remember to calculate it separately from the walls.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Buying too little paint means a frustrating extra trip to the shop
        partway through a job, possibly with a slightly different batch colour.
        Buying too much wastes money on tins you did not need. This calculator
        works out roughly how much you actually need, based on your room size.
      </p>
      <p>
        Enter your room dimensions once and get a clear answer on litres needed
        and how many tins to buy, rather than guessing. It works whether you are
        planning a single feature wall or repainting an entire house room by
        room, since you can simply re-run it for each space.
      </p>

      <h2>How to use the paint coverage calculator</h2>
      <p>
        Enter your room&apos;s length, width and height, in metres or feet. Add how
        many coats you plan to apply, and how many doors and windows are in the
        room, since these reduce the area you actually need to paint. Choose your
        paint&apos;s coverage rate, or use the common default of 12 square metres per
        litre, and pick your preferred tin size to see how many you need to buy.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator first works out the total wall area using the room&apos;s
        length, width and height, then subtracts a standard allowance for each
        door and window you specify, since these areas do not need paint. That net
        wall area is then multiplied by your number of coats, since each extra
        coat needs the same area covered again. Finally, dividing by your paint&apos;s
        coverage rate gives the litres needed, which is rounded up to a whole
        number of tins based on your chosen tin size.
      </p>
      <p>
        Rounding up to a whole tin, rather than the exact litres calculated, is
        deliberate. Paint is sold in fixed sizes, and buying a fraction of a tin
        is not usually possible, so the tins figure always rounds up to make sure
        you have enough to finish the job in one go.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a room <strong>4 metres long</strong>, <strong>3.5 metres wide</strong>{" "}
        and <strong>2.4 metres tall</strong>, with <strong>2 coats</strong>,{" "}
        <strong>1 door</strong> and <strong>1 window</strong>.
      </p>
      <p>
        The gross wall area comes to <strong>36.0 square metres</strong>. After
        subtracting a standard door and window allowance, the net paintable area
        is around <strong>32.9 square metres</strong>. With 2 coats, that is{" "}
        <strong>65.8 square metres</strong> of total paint coverage needed. At the
        default 12 square metres per litre, that works out to around{" "}
        <strong>5.5 litres</strong>, meaning you would need{" "}
        <strong>3 tins</strong> if buying 2.5 litre tins, since 2 tins would only
        cover 5 litres.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is forgetting to account for a second coat, which
        roughly doubles the paint needed compared with a single coat calculation.
        Another is using a generic coverage rate rather than checking the actual
        tin of the specific paint being used, since premium and budget paints can
        have noticeably different coverage per litre. It is also worth adding a
        small buffer for wastage, spillage, and future touch ups, rather than
        buying the exact calculated amount with nothing spare.
      </p>
      <p>
        It is also easy to underestimate how much door and window area actually
        reduces the paintable surface, particularly in a room with several
        windows or a set of double doors. Measuring your own doors and windows
        directly, rather than relying on the standard allowance this calculator
        assumes, will give a more accurate result if your room has unusually
        large or unusually small openings.
      </p>
      <p>
        Textured walls, very absorbent new plaster, and strong colour changes can
        all reduce real world coverage below the figure on the tin, so treat this
        calculator&apos;s result as a solid starting estimate rather than an exact
        figure, particularly for a tricky wall or a dramatic colour change.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are decorating as part of a house move, our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        and <Link href="/blog/mortgage-deposit-uk-2026">mortgage deposit guide</Link>{" "}
        cover the bigger picture of buying a home, and our{" "}
        <Link href="/calculators/stamp-duty-calculator-uk">
          stamp duty calculator
        </Link>{" "}
        covers the upfront tax on the purchase itself. If you are budgeting for
        renovation costs alongside everything else, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can help you see what is realistically left over each month for
        decorating and other home improvements.
      </p>
    </div>
  );
}
