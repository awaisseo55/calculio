import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much electricity does a home solar panel system generate?",
    answer:
      "A well-sited UK solar PV system typically generates somewhere in the region of 850 to 1,050 kWh per kWp of installed capacity each year, depending mainly on your location, roof orientation and how much shading the panels get. A south-facing roof with little shading in southern England will generally out-perform a north-facing or heavily shaded roof further north.",
  },
  {
    question: "What is self-consumption and why does it matter?",
    answer:
      "Self-consumption is the share of the electricity your panels generate that you actually use in your home, rather than exporting to the grid. Electricity you use yourself saves you the full retail unit rate, while exported electricity only earns the usually much lower export rate, so higher self-consumption generally means better savings for the same size system.",
  },
  {
    question: "What is the Smart Export Guarantee (SEG)?",
    answer:
      "The Smart Export Guarantee is the scheme that requires larger electricity suppliers to pay households for solar electricity they export to the grid. Rates vary significantly between suppliers and tariffs, roughly from a few pence up to 30p or more per kWh, so it is worth shopping around for a competitive export tariff once your system is installed.",
  },
  {
    question: "Does a battery improve solar panel savings?",
    answer:
      "Adding a home battery lets you store excess generation during the day and use it in the evening, instead of exporting it at the usually lower export rate, which typically increases your self-consumption significantly and can improve overall savings. A battery adds to the upfront cost though, so it is worth modelling with and without one to see which works out better for your circumstances.",
  },
  {
    question: "How long does it take for solar panels to pay for themselves?",
    answer:
      "Payback period varies a lot depending on system size, cost, your electricity usage pattern and local generation levels, but many UK households see estimated payback somewhere in the range of 8 to 15 years. After payback, the ongoing bill savings and any export income are effectively free for the remainder of the system's typical 25-year-plus lifespan.",
  },
  {
    question: "Is this calculator giving me an exact quote?",
    answer:
      "No, this is a planning estimate using editable typical assumptions for generation, self-consumption and export rates. Actual results depend on your specific roof, local weather, your household's usage pattern and the exact quote and equipment an installer offers, so use this to compare scenarios and get a feel for the numbers before requesting quotes from accredited installers.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        With electricity prices remaining a significant household cost,
        many homeowners are weighing up whether solar panels are worth the
        upfront investment. This calculator estimates your annual bill
        savings, export income and payback period for a home solar PV
        system, based on your system size, typical UK generation levels and
        your own electricity prices.
      </p>

      <h2>How to use the solar panel savings calculator</h2>
      <p>
        Enter your planned system size in kWp (kilowatt-peak) and the
        estimated upfront cost. Typical UK generation and self-consumption
        figures are pre-filled as editable defaults, but you can adjust the
        annual generation per kWp if you have a more specific estimate for
        your roof, and adjust self-consumption if you have a battery or
        particular usage pattern. Enter your electricity unit rate and your
        expected Smart Export Guarantee (SEG) export rate to see your
        estimated annual savings, export income and payback period.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Annual generation is estimated as your system size multiplied by the
        typical generation per kWp for a UK installation. This generation is
        then split between self-consumed electricity, which saves you the
        full electricity unit rate, and exported electricity, which earns
        the lower SEG export rate instead. Adding the bill savings and
        export income together gives your total annual benefit, and dividing
        your system cost by this figure gives an estimated payback period in
        years.
      </p>

      <h2>Worked example</h2>
      <p>
        A <strong>4kWp</strong> system costing <strong>£7,000</strong>,
        generating 950 kWh per kWp a year, would produce around{" "}
        <strong>3,800 kWh</strong> annually. With 40% self-consumption, that
        is 1,520 kWh used directly, saving around{" "}
        <strong>£390.64</strong> a year at a 25.7p unit rate, plus 2,280 kWh
        exported at 15p, earning around <strong>£342</strong> a year. That
        is a total annual benefit of around <strong>£732.64</strong>,
        giving an estimated payback period of roughly{" "}
        <strong>9.6 years</strong>. Over a typical 25-year panel lifespan,
        that could add up to around <strong>£18,316</strong> in combined
        savings and income, before accounting for any changes in electricity
        prices or panel output over time.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming all generated electricity is used in
        the home. Without a battery, a significant share is often exported,
        particularly for households out at work during the sunniest hours,
        so realistic self-consumption assumptions matter for an accurate
        estimate. It is also easy to overestimate generation for a
        north-facing, heavily shaded, or poorly angled roof, where actual
        output can fall well below the typical figures used as defaults
        here.
      </p>
      <p>
        Another mistake is accepting the first SEG export rate offered
        without comparing others, since rates can vary considerably between
        suppliers. It is also worth getting quotes from more than one
        accredited installer, since system cost has a direct effect on
        payback period for the same expected savings.
      </p>

      <h2>Related calculators</h2>
      <p>
        Check your current usage and costs with our{" "}
        <Link href="/calculators/energy-bill-calculator-uk">
          energy bill calculator
        </Link>{" "}
        before sizing a system, and see whether{" "}
        <Link href="/calculators/loft-insulation-calculator-uk">
          loft insulation
        </Link>{" "}
        could reduce your overall energy use first. If you drive an electric
        car, our{" "}
        <Link href="/calculators/electric-car-running-cost-calculator-uk">
          electric car running cost calculator
        </Link>{" "}
        shows how home solar and EV charging can work together. If you are
        saving up for the upfront cost, our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        can help you plan. Our guide to{" "}
        <Link href="/blog/reduce-uk-energy-bills-2026">
          reducing UK energy bills
        </Link>{" "}
        covers other ways to cut costs alongside solar.
      </p>
    </div>
  );
}
