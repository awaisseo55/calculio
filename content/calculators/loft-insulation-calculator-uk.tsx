import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the recommended loft insulation depth in the UK?",
    answer:
      "The current UK recommendation for mineral wool style loft insulation is 270mm. This applies to most typical homes, though the exact figure can vary slightly depending on the insulation material used, since some products insulate more effectively per millimetre than others.",
  },
  {
    question: "How much loft insulation do I already have?",
    answer:
      "Check by looking directly in your loft, ideally near the hatch, and measuring the depth of the existing material with a tape measure or ruler pushed down to the joist. Common existing depths in older UK homes are 50mm, 100mm or 150mm, though some homes have little or no insulation at all, particularly if they have not been upgraded in many years.",
  },
  {
    question: "Do I need two layers of insulation to reach 270mm?",
    answer:
      "Usually, yes, if you are starting from a lower existing depth and using a standard product. The first layer typically goes between the joists, and a second layer is laid across the top, running perpendicular to the joists, which also helps reduce heat loss through the joists themselves (known as thermal bridging).",
  },
  {
    question: "How much money will loft insulation actually save me?",
    answer:
      "It depends heavily on your starting point, home size, heating type and fuel prices. Topping up from little or no insulation to the recommended 270mm tends to save considerably more than topping up from an already reasonable depth like 150mm, since the first layer of insulation makes the biggest difference and each additional layer adds progressively less benefit. Treat any saving figure as a rough guide rather than a guarantee.",
  },
  {
    question: "Can I fit loft insulation myself?",
    answer:
      "Rolling out standard mineral wool insulation across an accessible, unobstructed loft is a common DIY job for many homeowners, provided you use suitable protective equipment and follow safety guidance around loft boarding, electrical cables and ventilation gaps. If your loft has damp issues, unusual structural features, or you plan to board it for storage, it is worth getting advice from a professional installer first.",
  },
  {
    question: "Does loft insulation need to be replaced eventually?",
    answer:
      "Good quality mineral wool insulation generally lasts many decades without needing replacement, provided it stays dry and is not compressed or disturbed. Check occasionally for signs of damp, pest damage, or the insulation being squashed underfoot or under stored items, since any of these can reduce its effectiveness over time.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Heat rises, and an under-insulated loft is one of the most
        significant places a typical UK home loses warmth in winter. This
        calculator works out how much extra loft insulation you need to
        reach the current recommended depth, how many rolls to buy for your
        chosen product, and gives a rough, honest estimate of what it might
        save on your energy bills.
      </p>

      <h2>How to use the loft insulation calculator</h2>
      <p>
        Enter your loft&apos;s floor area, in square metres or square feet, your
        current insulation depth in millimetres (enter 0 if you have none),
        and your target depth, defaulting to the recommended 270mm. Enter
        your chosen product&apos;s roll width, length and thickness, using the
        common defaults if you are not sure, and a price per roll if you
        know it. The calculator shows how many additional millimetres you
        need, how many layers that means with your chosen product, and the
        total number of rolls to buy.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator first works out your additional depth needed, your
        target depth minus your current depth. It then divides that by your
        chosen roll&apos;s thickness to work out how many layers you need to
        lay, rounding up, since a partial layer does not achieve the full
        benefit. Each roll covers a fixed area, based on its width and
        length, so the calculator works out how many rolls cover your loft
        floor area in one layer, then multiplies that by the number of
        layers needed to get your total rolls required.
      </p>
      <p>
        For the potential saving, the calculator uses broad, illustrative
        ranges based on your starting depth, since topping up from little
        or no insulation saves considerably more than topping up an already
        reasonably insulated loft. These figures are a rough guide only,
        since actual savings depend heavily on your home&apos;s size, heating
        system, fuel prices, and how well insulated the rest of your home
        is.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a loft with a floor area of <strong>40 square metres</strong>,
        currently with <strong>100mm</strong> of insulation, aiming for the
        recommended <strong>270mm</strong>, using a standard{" "}
        <strong>1,140mm by 6.75 metre roll</strong> at{" "}
        <strong>100mm thickness</strong>.
      </p>
      <p>
        The additional depth needed is 270mm minus 100mm ={" "}
        <strong>170mm</strong>. Dividing by the 100mm roll thickness gives{" "}
        <strong>2 layers</strong> needed, rounding up. Each roll covers
        around <strong>7.7 square metres</strong> (1.14 metres times 6.75
        metres), so covering the 40 square metre floor in one layer needs{" "}
        <strong>6 rolls</strong>. Across 2 layers, that comes to{" "}
        <strong>12 rolls</strong> in total.
      </p>
      <p>
        Now try changing the current depth to 0mm in the calculator above,
        representing a loft with no insulation at all. You will see the
        additional depth needed rise to the full 270mm, needing 3 layers
        instead of 2, and the estimated saving range shown also increases
        noticeably, since starting from bare joists gives the largest
        potential improvement of all.
      </p>

      <h2>Types of loft insulation</h2>
      <p>
        Mineral wool, sometimes sold as glass wool or rock wool, is the most
        common loft insulation type in the UK, typically sold in rolls and
        reasonably straightforward for a DIYer to fit. It is what the
        270mm recommendation is generally based on. Rigid foam boards
        achieve the same insulating effect at a shallower depth, which can
        suit lofts with limited headroom, but usually cost more per square
        metre of coverage than mineral wool rolls.
      </p>
      <p>
        Loose-fill insulation, blown in by a professional installer, is
        another common option, particularly for lofts with awkward shapes
        or lots of obstructions where rolling out standard rolls is
        difficult. It is rarely a straightforward DIY job, since specialist
        equipment is used to blow the material evenly to the correct depth.
      </p>
      <p>
        Whichever material you choose, check the manufacturer&apos;s stated
        depth for reaching the equivalent performance of 270mm mineral
        wool, since materials with better insulating properties per
        millimetre may need a shallower depth to achieve a similar result,
        which changes the layers and rolls calculation accordingly.
      </p>

      <h2>Common mistakes DIYers make</h2>
      <p>
        A common mistake is compressing existing insulation by simply
        laying a new roll straight on top without checking it has not
        become flattened or damp over the years. Compressed insulation
        performs considerably worse than its nominal thickness suggests, so
        it is worth checking the condition of existing material before
        assuming it is still doing its job properly.
      </p>
      <p>
        It is also easy to forget ventilation gaps at the eaves, the point
        where the roof meets the outer walls. Blocking these gaps
        completely with insulation can trap moisture in the roof space and
        lead to damp or timber problems over time, so leaving the
        recommended clear gap at the eaves matters just as much as reaching
        the target depth across the main floor area.
      </p>
      <p>
        Finally, take care around loft hatches, light fittings, and
        electrical cables. Recessed light fittings in particular often need
        a specific fire-rated cover or a safe clearance from insulation to
        avoid overheating, and standard cables are not designed to be
        buried under thick insulation without checking their rating first.
        For anything beyond a straightforward, unobstructed loft, get
        advice from a qualified installer before starting work.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are budgeting for wider home improvements, our{" "}
        <Link href="/calculators/paint-coverage-calculator-uk">
          paint coverage calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/kitchen-renovation-cost-calculator-uk">
          kitchen renovation cost calculator
        </Link>{" "}
        can help with other rooms. Since loft insulation is really a
        long-term saving project, our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        can help you plan towards the upfront cost, and our guide to{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest
        </Link>{" "}
        explains how regular saving, much like a well-insulated loft, pays
        off more the earlier you start.
      </p>
    </div>
  );
}
