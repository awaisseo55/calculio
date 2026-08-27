import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How many turf rolls do I need for my garden?",
    answer:
      "It depends on your lawn's area and the coverage of each roll. This calculator multiplies your lawn's length and width to get the area, adds a wastage allowance for cutting and offcuts, then divides by your roll's coverage to give you a rounded-up number of rolls to order.",
  },
  {
    question: "What size are standard UK turf rolls?",
    answer:
      "Many UK turf suppliers sell rolls measuring 1m by 2m, covering 2m² each, though this varies by supplier and turf type. Always check the exact coverage stated by whoever you are buying from, since smaller or larger roll sizes are also common.",
  },
  {
    question: "How much wastage allowance should I add?",
    answer:
      "A 10% allowance is a common starting point for a fairly simple, rectangular lawn. If your garden has curves, borders, trees or other obstacles to cut around, you may want to increase this to 15% or 20% to avoid running short partway through laying the turf.",
  },
  {
    question: "When is the best time to lay turf in the UK?",
    answer:
      "Turf can generally be laid at most times of year in the UK, though spring and autumn tend to give the best establishment conditions, with mild temperatures and reliable rainfall. Laying in the height of summer or during hard frost is possible but usually needs extra watering or care.",
  },
  {
    question: "Should I prepare the ground before ordering turf?",
    answer:
      "Yes, it is best to clear the area of weeds and debris, level the soil and lightly firm it before your turf arrives, since fresh turf is perishable and should be laid within a day or two of delivery. Planning your ground preparation before you order helps avoid turf sitting around and drying out.",
  },
  {
    question: "Is turf cheaper than grass seed?",
    answer:
      "Turf usually costs more upfront than grass seed for the same area, but it gives an instant, established lawn rather than the weeks of growing and care that seed needs. Which is better value depends on your budget, timeline and how much ongoing care you are able to give a newly seeded lawn.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Ordering the right amount of turf saves you from running short mid-project or paying for far more than
        you need. This calculator works out your lawn&apos;s area, adds a sensible wastage allowance, and tells
        you how many rolls to order along with an estimated cost.
      </p>

      <h2>How to use the turf calculator</h2>
      <p>
        Enter the length and width of your lawn in metres, add a wastage allowance for cutting and offcuts, and
        enter the coverage and price of the turf rolls you plan to buy. The calculator shows your total lawn
        area, the area including wastage, and how many rolls you need to order, along with an estimated total
        cost.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator multiplies your lawn&apos;s length and width to get the total area in square metres, then
        increases that figure by your chosen wastage percentage to account for cutting around edges, curves and
        obstacles. Dividing that area by your roll&apos;s coverage, and rounding up to the nearest whole roll,
        gives you the number of rolls to order, which is then multiplied by the price per roll for an estimated
        total cost.
      </p>

      <h2>Worked example</h2>
      <p>
        For a lawn measuring <strong>8m by 5m</strong>, the area comes to <strong>40m²</strong>. Adding a{" "}
        <strong>10% wastage allowance</strong> brings that up to <strong>44m²</strong>. If your turf rolls cover{" "}
        <strong>2m² each</strong> at <strong>£6.50 a roll</strong>, you would need 22 rolls, since 44 &divide; 2 =
        22 exactly, giving an estimated total cost of <strong>£143.00</strong>.
      </p>

      <h2>Measuring an irregular lawn</h2>
      <p>
        If your garden is not a simple rectangle, it often helps to split it into smaller rectangular or
        triangular sections, measure each one separately, and add the areas together before entering the total
        into this calculator. For triangular sections, the area is half the base multiplied by the height.
        Rounding up slightly for irregular shapes is generally safer than rounding down.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is ordering turf based on the exact lawn area without any wastage allowance, which often
        leaves you short once you start cutting around borders and features. Another mistake is not checking the
        actual coverage of the rolls from your specific supplier, since roll sizes vary and assuming a standard
        size when it differs can throw the whole calculation off. It also helps to order all your turf from one
        batch where possible, since colour and texture can vary slightly between deliveries.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you are tackling other parts of a garden or renovation project, our{" "}
        <Link href="/calculators/concrete-calculator-uk">concrete calculator</Link> can help with paths or
        patios, and our{" "}
        <Link href="/calculators/paint-coverage-calculator-uk">paint coverage calculator</Link> is useful for
        fences and sheds. For indoor projects, try our{" "}
        <Link href="/calculators/flooring-calculator-uk">flooring calculator</Link>.
      </p>
    </div>
  );
}
