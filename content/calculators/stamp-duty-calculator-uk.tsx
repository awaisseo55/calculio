import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Do I pay stamp duty in Scotland and Wales?",
    answer:
      "Not exactly stamp duty — Scotland has its own Land and Buildings Transaction Tax (LBTT), collected by Revenue Scotland, and Wales has Land Transaction Tax (LTT), collected by the Welsh Revenue Authority. Both work on a similar banded system to SDLT but with different thresholds and rates, which this calculator accounts for when you select the property's location.",
  },
  {
    question: "What counts as a first-time buyer?",
    answer:
      "In England and Northern Ireland, you're a first-time buyer if you (and anyone you're buying with) have never owned a residential property anywhere in the world, and you intend to live in the property as your main home. Scotland offers similar first-time buyer relief through a higher nil-rate LBTT band. Wales abolished its first-time buyer relief, so first-time buyers in Wales pay the same LTT as any other home mover.",
  },
  {
    question: "Why is there a surcharge for second homes and buy-to-let?",
    answer:
      "Since 2016, buyers purchasing an additional residential property — a second home, holiday home, or buy-to-let — pay a surcharge on top of the standard rates in England, Northern Ireland, Scotland and Wales. This is intended to make it relatively more affordable for first-time buyers and home movers to compete with investors in the property market.",
  },
  {
    question: "Is stamp duty paid on the whole property price, or just part of it?",
    answer:
      "It's calculated in bands, similar to Income Tax. You don't pay the top rate on the whole price — only the portion of the price that falls within each band is taxed at that band's rate. That's why the effective (average) rate you pay is usually lower than the highest rate band your purchase reaches.",
  },
  {
    question: "When do I have to pay stamp duty?",
    answer:
      "In England and Northern Ireland, you (or usually your solicitor, on your behalf) must file an SDLT return and pay any tax due within 14 days of completing your purchase. Scotland and Wales have a 30-day filing window for LBTT and LTT respectively. Your conveyancing solicitor will typically handle this as part of the purchase process.",
  },
  {
    question: "Do non-UK residents really pay more stamp duty?",
    answer:
      "Yes — in England and Northern Ireland, buyers who don't meet HMRC's UK residence test face an additional 2% SDLT surcharge on top of whichever standard, first-time buyer, or additional-property rate applies. This surcharge doesn't currently have an equivalent in Scotland or Wales.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the stamp duty calculator</h2>
      <p>
        Enter the price you&apos;re paying (or expecting to pay) for the property, choose
        where in the UK it&apos;s located, and select the buyer type that applies to you.
        The calculator instantly works out how much Stamp Duty Land Tax (SDLT), Land and
        Buildings Transaction Tax (LBTT), or Land Transaction Tax (LTT) you&apos;ll owe,
        along with a full band-by-band breakdown so you can see exactly how the total was
        calculated.
      </p>
      <p>
        Property transaction tax is one of the biggest one-off costs of buying a home in
        the UK, and it catches a lot of buyers out because it&apos;s due on completion —
        on top of your deposit, mortgage arrangement fees and legal costs. Working it out
        in advance means there are no surprises when your solicitor sends the final
        completion statement.
      </p>

      <h2>How the bands work</h2>
      <p>
        Property transaction taxes across the UK all use a banded (marginal) system, much
        like Income Tax. Rather than paying one flat rate on the entire purchase price,
        you pay 0% on the portion of the price within the first band, then progressively
        higher rates on each slice of the price that falls into higher bands. For example,
        under standard SDLT rates in England and Northern Ireland: 0% up to £125,000, 2%
        on the next slice up to £250,000, 5% up to £925,000, 10% up to £1.5 million, and
        12% above that.
      </p>
      <p>
        First-time buyers get extra relief: in England and Northern Ireland, no SDLT is
        due on the first £300,000, with 5% charged on the portion between £300,000 and
        £500,000. If the property costs more than £500,000, the relief doesn&apos;t apply
        at all and standard rates are used on the full price instead. Buyers of additional
        properties — second homes, holiday lets, and buy-to-lets — pay a surcharge on top
        of the standard bands, and non-UK residents face a further surcharge in England
        and Northern Ireland.
      </p>

      <h2>Worked example</h2>
      <p>
        A first-time buyer purchasing a flat in Manchester for{" "}
        <strong>£350,000</strong> would pay <strong>0% on the first £300,000</strong>{" "}
        (£0) and <strong>5% on the remaining £50,000</strong> (£2,500) — a total SDLT
        bill of <strong>£2,500</strong>, an effective rate of just 0.7% of the purchase
        price.
      </p>
      <p>
        Compare that with a landlord buying the same £350,000 flat as a second
        buy-to-let property: they&apos;d pay standard rates plus the additional-property
        surcharge on every band — 5% on the first £125,000 (£6,250), 7% on the next
        £125,000 up to £250,000 (£8,750), and 10% on the remaining £100,000 up to
        £350,000 (£10,000) — a total of <strong>£25,000</strong>, ten times more than
        the first-time buyer pays for an identical property.
      </p>

      <h2>Scotland (LBTT) and Wales (LTT)</h2>
      <p>
        Scotland&apos;s LBTT has its own nil-rate band up to £145,000 (extended to
        £175,000 for first-time buyers), then rises through 2%, 5%, 10% and 12% bands.
        The Additional Dwelling Supplement (ADS) is charged on top for second homes and
        buy-to-lets. Wales replaced SDLT with Land Transaction Tax in 2018, with a nil
        band up to £225,000 and its own higher rates for additional properties — but,
        unlike England and Scotland, Wales no longer offers any first-time buyer relief,
        so everyone pays the same main rates regardless of buying history.
      </p>

      <h2>Common questions when budgeting for stamp duty</h2>
      <p>
        A frequent mistake is forgetting that stamp duty is due in full on completion,
        separately from your deposit — lenders won&apos;t add it to your mortgage, so
        you&apos;ll need the cash available alongside your deposit and legal fees. It&apos;s
        also worth double-checking your buyer-type status carefully: if you already own
        any share of a residential property anywhere in the world (including inherited
        property or one owned jointly), you may not qualify as a first-time buyer even if
        you&apos;ve never bought a home yourself.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you know your stamp duty bill, use our{" "}
        <Link href="/calculators/mortgage-calculator-uk">mortgage calculator</Link> to see how
        your deposit and loan size affect your monthly repayments, and check your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay</Link> to make sure
        the whole purchase — deposit, stamp duty and monthly mortgage — fits comfortably
        within your budget.
      </p>
    </div>
  );
}
