import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the Ofgem energy price cap?",
    answer:
      "The Ofgem price cap limits how much energy suppliers can charge per unit of gas and electricity, and how much they can charge as a standing charge, for customers on a standard variable tariff. It is reviewed every three months and does not cap your total bill directly, since your actual bill still depends on how much energy you use.",
  },
  {
    question: "How much energy does a typical UK household use?",
    answer:
      "Ofgem publishes Typical Domestic Consumption Values as an industry reference point. A medium-use household is typically estimated at around 2,700 kWh of electricity and 11,500 kWh of gas a year, though this varies a lot by home size, insulation, number of occupants and how the heating is used.",
  },
  {
    question: "Why does my heating system matter so much for my bill?",
    answer:
      "Gas boilers, oil boilers, direct electric heating and heat pumps all convert fuel into heat at different efficiencies, and gas and electricity are priced very differently per unit. A heat pump typically produces roughly three units of heat for every unit of electricity used, which is why switching from direct electric heating to a heat pump can cut heating costs substantially, even though electricity itself is not getting any cheaper.",
  },
  {
    question: "Will switching energy supplier save me money?",
    answer:
      "It depends on the market at the time. When fixed deals are priced below the price cap, switching or fixing can save money, but when the cap is low relative to fixed deals, staying on a capped variable tariff can work out cheaper. Comparing using a comparison site periodically, rather than assuming switching always helps, is the safest approach.",
  },
  {
    question: "What is the Warm Home Discount?",
    answer:
      "The Warm Home Discount is a one-off annual reduction applied directly to the electricity bills of eligible low income households, most commonly those receiving certain means-tested benefits. Eligibility and the exact amount are set by the government each winter, so check GOV.UK or your energy supplier to see if you qualify.",
  },
  {
    question: "Does insulation actually make a noticeable difference?",
    answer:
      "Yes, particularly loft and cavity wall insulation in an older, poorly insulated home, since heat loss through an uninsulated roof and walls is one of the biggest drivers of a high heating bill. Our loft insulation calculator gives a rough sense of what topping up your insulation could save on top of the estimate here.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Gas and electricity bills are one of the biggest variable costs in a
        UK household budget, and they depend on far more than just how many
        units you use. Your property type, heating system, household size and
        current unit rates all interact to produce your final bill. This
        calculator estimates your annual and monthly energy cost for 2026,
        broken down by fuel, so you can see roughly where you stand.
      </p>

      <h2>How to use the energy bill calculator</h2>
      <p>
        Enter your household size, property type and primary heating system
        first, since the calculator uses these to suggest typical annual
        electricity and gas figures for a home like yours. You can accept
        these typical figures, or click &ldquo;Use typical&rdquo; at any time
        to reset them, or overwrite them with your own numbers from a recent
        bill for a more accurate result. Adjust the unit rates if your own
        tariff differs from the illustrative defaults shown, which are based
        on the general level of the Ofgem price cap at time of writing.
      </p>

      <h2>How the calculation works</h2>
      <p>
        For electricity, the calculator multiplies your annual kWh use by
        your unit rate, then adds your standing charge multiplied by 365
        days, since the standing charge applies every day regardless of how
        much energy you use. Gas and oil heating work the same way, with gas
        priced per kWh and oil converted from litres using the standard
        conversion of around 10.35 kWh per litre of kerosene.
      </p>
      <p>
        Behind the typical usage figures, the calculator separates your
        baseline, non-heating electricity use (appliances, lighting, cooking)
        from your heating demand, then applies a rough efficiency factor
        depending on your heating system: around 85% for a gas boiler, 80%
        for an oil boiler, 100% for direct electric heating, since almost all
        the electricity becomes heat, and a typical coefficient of
        performance of around 3 for a heat pump, meaning it produces roughly
        three times as much heat as the electricity it consumes. This is why
        switching heating systems can change your bill dramatically even at
        identical unit rates.
      </p>

      <h2>Worked example</h2>
      <p>
        Take a <strong>3-person household</strong> in a{" "}
        <strong>semi-detached house</strong> with a{" "}
        <strong>gas boiler</strong>, using this calculator&apos;s typical
        defaults of around <strong>2,700 kWh</strong> of electricity and{" "}
        <strong>13,500 kWh</strong> of gas a year, at illustrative default
        rates of <strong>25.7p</strong> per kWh for electricity and{" "}
        <strong>6.3p</strong> per kWh for gas, plus standing charges.
      </p>
      <p>
        The electricity portion comes to roughly{" "}
        <strong>£880</strong> a year (2,700 kWh at 25.7p, plus the standing
        charge), and the gas portion comes to around{" "}
        <strong>£960</strong> a year (13,500 kWh at 6.3p, plus its own
        standing charge). Combined, that&apos;s an estimated{" "}
        <strong>£1,840</strong> a year, or around{" "}
        <strong>£153 a month</strong>. Now try switching the heating type to
        a heat pump in the calculator above with the same household details,
        and you will see the estimated bill change noticeably, since the
        heating demand is now met by more expensive electricity, but at a
        much higher efficiency than direct electric heating.
      </p>

      <h2>What actually drives your energy bill</h2>
      <p>
        Property size and insulation quality matter enormously: a detached
        house typically has considerably more heating demand than a flat of
        similar occupancy, simply because there is more external wall and
        roof area losing heat. Household size affects both heating (more
        occupants, more hot water and often warmer overall temperatures) and
        appliance use (more laundry, cooking and device charging). Your
        heating system&apos;s efficiency then determines how much fuel is
        needed to meet that underlying demand, which is why our{" "}
        <Link href="/calculators/loft-insulation-calculator-uk">
          loft insulation calculator
        </Link>{" "}
        is worth checking alongside this one if your home is under-insulated.
      </p>

      <h2>Common mistakes people make estimating their energy bill</h2>
      <p>
        A frequent mistake is comparing a headline unit rate without checking
        the standing charge, which can vary noticeably between suppliers and
        applies every single day regardless of usage. Another is assuming
        national average figures apply directly to an unusually large or
        small household, when actual usage can differ substantially from the
        Ofgem reference values used as defaults here. It is also easy to
        forget that switching to an electric vehicle, adding a home office, or
        working from home more often can shift electricity use up
        considerably compared with previous years, making old bills a poor
        guide to current usage.
      </p>
      <p>
        Finally, some people assume a heat pump will always be cheaper than
        gas, when in reality the outcome depends heavily on the relative
        price of electricity versus gas per kWh at the time, and on the heat
        pump being sized and installed correctly for the property. Running
        your own numbers through this calculator, rather than relying on a
        generic rule of thumb, gives a clearer picture for your specific
        situation.
      </p>

      <h2>Related calculators</h2>
      <p>
        If your home is under-insulated, our{" "}
        <Link href="/calculators/loft-insulation-calculator-uk">
          loft insulation calculator
        </Link>{" "}
        estimates the rolls needed and potential saving from topping up to
        the recommended depth. If you are budgeting for a house move
        alongside ongoing running costs like energy, see our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link>{" "}
        and <Link href="/calculators/water-bill-calculator-uk">water bill calculator</Link>.
        To plan towards a specific savings goal, whether for home
        improvements or a rainy day fund, try our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">savings goal calculator</Link>,
        and read our guide on{" "}
        <Link href="/blog/reduce-uk-energy-bills-2026">
          how to reduce your energy bills in 2026
        </Link>{" "}
        for more detailed, room-by-room tips.
      </p>
    </div>
  );
}
