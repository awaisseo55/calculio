import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-ved", label: "What is VED and how does it work?" },
  { id: "first-year-rates", label: "First-year rates for new cars" },
  { id: "standard-annual-rate", label: "Standard annual VED" },
  { id: "pre-2017-cars", label: "Cars registered before April 2017" },
  { id: "electric-vehicles", label: "Electric vehicles and the 2025 rule change" },
  { id: "motorcycles-vans", label: "Motorcycles, vans and larger vehicles" },
  { id: "check-and-pay", label: "How to check and pay your VED" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your exact car tax" },
];

export const faq: FaqItem[] = [
  {
    question: "How much is car tax in 2026?",
    answer:
      "It depends on your car's fuel type, emissions and age. Most cars over 12 months old pay the flat standard rate of £195 a year. New cars pay a first-year rate instead, based on CO2 emissions, ranging from £10 for zero-emission vehicles up to £5,490 for the highest-emitting cars.",
  },
  {
    question: "Do electric cars pay road tax in 2026?",
    answer:
      "Yes. Since 1 April 2025, electric vehicles are no longer exempt from VED. New EVs pay the lowest first-year rate, then the standard £195 rate from year two, and are subject to the expensive car supplement too if their list price was over £40,000.",
  },
  {
    question: "Why is my car tax £600?",
    answer:
      "The most likely explanation is the £195 standard rate plus the £425 expensive car supplement for cars with a list price over £40,000 when new, which together come to £620. It could also be a first-year rate that lands in a similar band. Check your V5C or the DVLA's online checker for your exact figure.",
  },
  {
    question: "How do I check if my car is taxed?",
    answer:
      "The DVLA offers a free vehicle tax checker on GOV.UK. You just need the registration number, no login or account required, and it shows the current tax and MOT status instantly.",
  },
  {
    question: "Do I pay VED if my car is SORN?",
    answer:
      "No. A Statutory Off Road Notification (SORN) means the vehicle is declared off the road and isn't taxed or insured for use on public roads. You must not drive or park it on a public road while it's SORN.",
  },
  {
    question: "Is car tax cheaper if I pay monthly?",
    answer:
      "No, it's slightly more expensive. Paying by monthly Direct Debit adds a small surcharge compared with paying the full year in one go, and six-monthly payments also cost a little more overall than a single annual payment.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Car tax in 2026 has changed more than in any recent year, and electric vehicle
        owners are paying it for the first time in most cases. If your last tax
        reminder looked different to what you remembered, or you&apos;re buying a new car
        and trying to work out the real annual cost, this guide walks through exactly
        how Vehicle Excise Duty (VED) works for every fuel type.
      </p>
      <p>
        This sits in our <Link href="/categories/motoring">Motoring category</Link>,
        alongside our other DVLA-based calculators.
      </p>

      <CalloutBox
        title="Get your exact VED figure"
        description="Enter your fuel type, registration date and CO2 emissions for an instant breakdown."
        href="/calculators/road-tax-calculator-uk"
        cta="Open the road tax calculator"
      />

      <h2 id="what-is-ved">What is VED and how does it work?</h2>
      <p>
        Vehicle Excise Duty, usually called car tax or road tax, is administered by
        the DVLA and is a legal requirement for any vehicle kept or used on a public
        road. It&apos;s charged annually, though most owners pay it in monthly or
        six-monthly instalments by Direct Debit. How much you pay depends mainly on
        your vehicle&apos;s CO2 emissions and how long ago it was first registered, since
        the rules have changed several times since 2001.
      </p>
      <p>
        VED is separate from your MOT and insurance, but the DVLA cross-checks all
        three: a car with no valid MOT or insurance policy is automatically flagged as
        untaxed too, even if you&apos;ve paid, so keeping all three current at the same
        time matters if you want to avoid an unwanted letter.
      </p>

      <h2 id="first-year-rates">First-year VED rates for new cars (2026)</h2>
      <p>
        Cars registered on or after 1 April 2017 pay a CO2-banded first-year rate,
        sometimes called the showroom tax, followed by a flat standard rate from year
        two onwards. The first-year rate rises steeply with emissions.
      </p>
      <RateTable
        caption="2026 first-year VED rates by CO2 emissions band, cars registered from 1 April 2017"
        columns={["CO2 emissions (g/km)", "First-year rate"]}
        rows={[
          ["0", "£10"],
          ["1 to 50", "£130"],
          ["51 to 75", "£270"],
          ["76 to 90", "£350"],
          ["91 to 100", "£390"],
          ["101 to 110", "£440"],
          ["111 to 130", "£540"],
          ["131 to 150", "£1,360"],
          ["151 to 170", "£2,190"],
          ["171 to 190", "£3,300"],
          ["191 to 225", "£4,680"],
          ["226 and above", "£5,490"],
        ]}
      />
      <p>
        A new petrol car emitting 130g/km, a common figure for a mid-size family car,
        falls into the 111 to 130 band and pays a <strong>£540</strong> first-year
        rate. Note that from year two, this same car drops straight to the flat
        standard rate below, regardless of its emissions. Enter your own car&apos;s
        emissions into the{" "}
        <Link href="/calculators/road-tax-calculator-uk">road tax calculator</Link> for
        an exact figure rather than reading off the band.
      </p>

      <h2 id="standard-annual-rate">Standard annual VED (2026)</h2>
      <p>
        From the second year of registration, almost all post-2017 cars pay the same
        flat rate, currently <strong>£195 a year</strong>, whether petrol, diesel,
        hybrid or electric. Emissions no longer affect the annual rate at this point.
      </p>
      <p>
        There&apos;s one important exception: the{" "}
        <strong>expensive car supplement</strong>. Cars with a list price over £40,000
        when new pay an extra <strong>£425 a year</strong>, on top of the standard
        rate, for five years starting from the second time the car is taxed. That&apos;s
        £620 a year in total for years two through six, dropping back to the £195
        standard rate from year seven onwards. Use the{" "}
        <Link href="/calculators/road-tax-calculator-uk">road tax calculator</Link> to
        check whether your specific car is affected.
      </p>

      <h2 id="pre-2017-cars">VED for cars registered before April 2017</h2>
      <p>
        Cars first registered between 1 March 2001 and 31 March 2017 use an older
        emissions-based system, with a single annual rate that doesn&apos;t change as the
        car ages.
      </p>
      <RateTable
        caption="VED for cars registered 1 March 2001 to 31 March 2017"
        columns={["CO2 emissions (g/km)", "Annual rate"]}
        rows={[
          ["Up to 100", "£0"],
          ["101 to 110", "£20"],
          ["111 to 120", "£35"],
          ["121 to 130", "£165"],
          ["131 to 140", "£195"],
          ["141 to 150", "£215"],
          ["151 to 165", "£265"],
          ["166 to 175", "£315"],
          ["176 to 185", "£345"],
          ["186 to 200", "£395"],
          ["201 to 225", "£430"],
          ["226 to 255", "£735"],
          ["Over 255", "£760"],
        ]}
      />
      <p>
        Cars registered before March 2001 are taxed by engine size rather than
        emissions, a legacy system from before CO2 figures were routinely recorded.
      </p>

      <h2 id="electric-vehicles">Electric vehicles and the 2025 rule change</h2>
      <p>
        Electric vehicles were completely exempt from VED until March 2025. From{" "}
        <strong>1 April 2025</strong>, that exemption ended: new EVs now pay the
        lowest first-year rate (£10) and the standard £195 rate from year two, on
        exactly the same basis as petrol and diesel cars.
      </p>
      <p>
        This matters more than it might first appear, because the expensive car
        supplement applies too. Many higher-end EVs, including several Tesla and
        Polestar models, have a list price above £40,000, so their owners now face the
        same £425 annual supplement as an equivalent petrol car in that price bracket.
        The days of running a premium EV completely tax-free are over. It&apos;s still
        worth comparing running costs properly though: our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">fuel cost calculator</Link>{" "}
        can help you weigh VED alongside what you&apos;d actually spend on fuel or
        charging for your typical mileage.
      </p>

      <h2 id="motorcycles-vans">Motorcycles, vans and larger vehicles</h2>
      <p>
        Motorcycles are taxed by engine size rather than emissions, in bands based on
        cubic capacity (cc), and generally cost significantly less than car VED.
        Light goods vehicles (vans) mostly pay their own flat annual rate, distinct
        from the car system above. Heavier commercial vehicles, such as HGVs, fall
        under a separate and more complex system based on weight and axle
        configuration. If you&apos;re taxing anything other than a standard car, the
        DVLA&apos;s own vehicle tax checker will confirm the exact rate for your specific
        vehicle.
      </p>

      <h2 id="check-and-pay">How to check and pay your VED</h2>
      <p>
        The DVLA sends a V11 reminder letter shortly before your current tax runs
        out, but it&apos;s worth checking your status directly rather than relying on post
        arriving on time, particularly if you&apos;ve recently moved house.
      </p>
      <p>
        You can check your vehicle&apos;s tax status for free on GOV.UK using just the
        registration number, no account needed. To pay, you&apos;ll need your V11 reminder
        letter, your V5C logbook reference, or the green new keeper slip if you&apos;ve
        just bought the car. Payment can be made annually, in six-monthly
        instalments, or monthly by Direct Debit.
      </p>
      <p>
        Driving or keeping an untaxed vehicle on a public road (without a SORN)
        carries a fixed penalty starting at around £80, and can escalate to court
        prosecution with fines of up to £1,000 or more if it isn&apos;t resolved. Once
        VED is sorted, our{" "}
        <Link href="/calculators/fuel-cost-calculator-uk">fuel cost calculator</Link>{" "}
        is the next place to check for a full picture of your annual motoring budget.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
