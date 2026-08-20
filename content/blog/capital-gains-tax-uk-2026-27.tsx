import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-counts-as-a-gain", label: "What counts as a capital gain" },
  { id: "annual-exempt-amount", label: "The annual exempt amount" },
  { id: "cgt-rates", label: "CGT rates: basic vs higher rate" },
  { id: "how-to-work-it-out", label: "How to work out your gain" },
  { id: "worked-example", label: "Worked example: selling a rental property" },
  { id: "reduce-your-bill", label: "Ways to reduce your CGT bill" },
  { id: "reporting-and-paying", label: "Reporting and paying CGT" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "Do I pay Capital Gains Tax when I sell my main home?",
    answer:
      "Usually not. Private Residence Relief means most people pay no Capital Gains Tax on the sale of the home they actually live in. It's second homes, buy-to-let property, shares outside an ISA, and other valuable assets that CGT usually applies to, not your only or main residence.",
  },
  {
    question: "What is the Capital Gains Tax allowance for 2026/27?",
    answer:
      "The annual exempt amount is £3,000 for the 2026/27 tax year. You only pay Capital Gains Tax on gains above this figure, and it resets every 6 April, so it can't be carried forward if you don't use it.",
  },
  {
    question: "Is Capital Gains Tax the same for property and shares?",
    answer:
      "Yes, since the rates were aligned in the October 2024 Budget, most chargeable assets, including residential property, shares, and personal possessions worth over £6,000, are taxed at the same two rates: 18% for basic rate taxpayers and 24% for higher and additional rate taxpayers.",
  },
  {
    question: "How do I know if I'm a basic rate or higher rate taxpayer for CGT?",
    answer:
      "HMRC adds your taxable gain on top of your other income for the year to work out which band it falls into. If your income plus gain stays under the higher rate threshold, you pay the lower CGT rate on that portion. Our income tax calculator can help you check which band your income already sits in before you add a gain on top.",
  },
  {
    question: "Can I avoid Capital Gains Tax by gifting an asset to my spouse?",
    answer:
      "Transfers between spouses and civil partners living together are usually free of Capital Gains Tax, so many couples split ownership of an asset before selling it to use both of their annual exempt amounts. This only works for spouses and civil partners, not for gifts to other family members, which are normally treated as a disposal at market value.",
  },
  {
    question: "When do I have to report and pay Capital Gains Tax?",
    answer:
      "For UK residential property, you must report and pay within 60 days of completion using HMRC's online property service. For other assets, such as shares, you usually report the gain through your Self Assessment tax return by the following 31 January, unless you choose to use HMRC's real time service sooner.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Selling a second home, some shares, or another valuable asset for more than you
        paid for it can trigger a tax bill you didn't budget for. Capital Gains Tax
        catches a lot of people out simply because they don't realise it applies until
        the sale has already gone through. Our{" "}
        <Link href="/calculators/capital-gains-tax-calculator-uk">
          Capital Gains Tax Calculator
        </Link>{" "}
        gives you an instant estimate, but it helps to understand how the rules
        actually work first, so here's what counts as a gain, what you'll pay, and how
        to keep your bill as low as legally possible.
      </p>

      <h2 id="what-counts-as-a-gain">What counts as a capital gain</h2>
      <p>
        A capital gain is the profit you make when you sell or dispose of an asset for
        more than you paid for it. The most common examples are a second home or
        buy-to-let property, shares and funds held outside an ISA or pension, and
        valuable personal possessions worth more than £6,000, such as art or jewellery.
        Your main home is normally exempt under Private Residence Relief, and so are
        gains inside an ISA or pension, most personal cars, and UK government bonds.
        Disposal doesn't just mean a straightforward sale either. Gifting an asset,
        swapping it for something else, or transferring it to a trust can all count as
        a disposal for Capital Gains Tax purposes, even though no cash changes hands.
      </p>

      <h2 id="annual-exempt-amount">The annual exempt amount</h2>
      <p>
        Everyone gets a tax-free allowance for capital gains each year, known as the
        annual exempt amount. For 2026/27, it's £3,000. You only pay Capital Gains Tax
        on the portion of your total gains for the year that sits above this figure. It
        applies per person, not per asset, so if you sell more than one thing in the
        same tax year, all the gains are added together before the allowance is
        deducted. Unlike some other allowances, it can't be carried forward if you
        don't use it, so a gain realised just after 6 April gets a fresh £3,000 to work
        with rather than sharing one with the previous year.
      </p>

      <h2 id="cgt-rates">CGT rates: basic rate vs higher rate</h2>
      <p>
        Since the October 2024 Budget, most chargeable assets share the same two-tier
        rate structure, whether you're selling a rental property, shares, or another
        taxable asset. Which rate you pay depends on your total taxable income for the
        year, including the gain itself.
      </p>
      <RateTable
        caption="UK Capital Gains Tax rates 2026/27"
        columns={["Taxpayer band", "CGT rate"]}
        rows={[
          ["Basic rate taxpayer", "18%"],
          ["Higher or additional rate taxpayer", "24%"],
        ]}
        highlightLastRow
      />
      <p>
        If your income and gain together straddle both bands, only the portion that
        falls above the basic rate threshold is taxed at 24%, the rest is taxed at
        18%. That's exactly the calculation our{" "}
        <Link href="/calculators/capital-gains-tax-calculator-uk">
          Capital Gains Tax Calculator
        </Link>{" "}
        does automatically once you enter your income and gain.
      </p>

      <h2 id="how-to-work-it-out">How to work out your gain</h2>
      <p>
        The basic formula is your sale price, minus what you originally paid, minus
        allowable costs, minus the annual exempt amount. Allowable costs include
        things like Stamp Duty Land Tax paid on purchase, estate agent and solicitor
        fees, and the cost of any capital improvements, such as an extension, though
        not routine maintenance or decorating. Whatever's left after subtracting the
        £3,000 exemption is your taxable gain, and that's the figure the 18% or 24%
        rate is applied to.
      </p>

      <h2 id="worked-example">Worked example: selling a rental property</h2>
      <p>
        Say you bought a buy-to-let flat for £220,000 several years ago and sell it
        today for £310,000. That's a gross gain of £90,000. You also paid £5,000 in
        total between Stamp Duty on purchase, legal fees, and estate agent fees on the
        sale, which are allowable costs, bringing your gain down to £85,000. Subtract
        the £3,000 annual exempt amount and your taxable gain is £82,000.
      </p>
      <RateTable
        caption="Worked example: £82,000 taxable gain, higher rate taxpayer"
        columns={["Step", "Amount"]}
        rows={[
          ["Sale price", "£310,000"],
          ["Purchase price", "£220,000"],
          ["Allowable costs", "£5,000"],
          ["Gain before exemption", "£85,000"],
          ["Annual exempt amount", "£3,000"],
          ["Taxable gain", "£82,000"],
          ["CGT owed at 24% (higher rate)", "£19,680"],
        ]}
        highlightLastRow
      />
      <p>
        If your total income for the year kept you in the basic rate band throughout,
        the same £82,000 taxable gain would instead be charged at 18%, coming to
        £14,760 rather than £19,680, a difference of nearly £5,000. This is exactly
        why knowing your tax band before you sell matters. Check yours first with our{" "}
        <Link href="/calculators/income-tax-calculator-uk">Income Tax Calculator</Link>.
      </p>

      <CalloutBox
        title="Work out your own Capital Gains Tax bill"
        description="Enter your purchase price, sale price, costs and income for an instant estimate of what you'll owe."
        href="/calculators/capital-gains-tax-calculator-uk"
        cta="Calculate my Capital Gains Tax"
      />

      <h2 id="reduce-your-bill">Ways to reduce your CGT bill</h2>
      <p>
        There are several legitimate ways to bring a Capital Gains Tax bill down,
        rather than trying to avoid it altogether.
      </p>
      <ul>
        <li>
          <strong>Use your ISA allowance.</strong> Gains on investments held inside a
          Stocks and Shares ISA are completely free of Capital Gains Tax. Moving new
          money into an ISA each year using our{" "}
          <Link href="/calculators/isa-calculator-uk">ISA Calculator</Link> to check
          your allowance is one of the simplest ways to shelter future gains.
        </li>
        <li>
          <strong>Time your sale across tax years.</strong> If a gain is close to
          pushing you well over your annual exempt amount, splitting a sale so part
          falls in one tax year and part in the next can let you use two years'
          allowances instead of one, though this depends on the type of asset and
          isn't always practical.
        </li>
        <li>
          <strong>Transfer assets to your spouse or civil partner first.</strong>{" "}
          Transfers between spouses living together are free of Capital Gains Tax, so
          jointly owning an asset before selling can effectively double the annual
          exempt amount available against the same gain.
        </li>
        <li>
          <strong>Offset losses.</strong> Capital losses from other investments in the
          same tax year, or brought forward from previous years, can be deducted from
          your gains before tax is worked out, provided you've reported the loss to
          HMRC.
        </li>
      </ul>

      <h2 id="reporting-and-paying">Reporting and paying CGT</h2>
      <p>
        How and when you report a gain depends on what you've sold. For UK residential
        property that isn't your main home, you must report the sale and pay any
        Capital Gains Tax due within 60 days of completion, using HMRC's dedicated
        online property service, separate from your regular tax return. For shares,
        funds and most other assets, you normally report the gain through Self
        Assessment by the following 31 January, alongside any other tax you owe for
        the year, which our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          Self-Employed Tax Calculator
        </Link>{" "}
        can help you plan for if you're already filing a return.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <ul>
        <li>
          <strong>Forgetting the 60-day property deadline.</strong> Missing it brings
          an automatic penalty even if you eventually pay the right amount through
          Self Assessment.
        </li>
        <li>
          <strong>Leaving out allowable costs.</strong> Stamp Duty, legal fees, and
          agent fees on both purchase and sale can all reduce your taxable gain, but
          only if you keep the paperwork to prove them.
        </li>
        <li>
          <strong>Assuming your main home is always exempt.</strong> If you've let
          out part of the property, used a room exclusively for business, or lived
          elsewhere for a stretch of ownership, Private Residence Relief may only
          cover part of the gain.
        </li>
        <li>
          <strong>Not checking your tax band before selling.</strong> A large gain can
          push your total income into the higher rate band for the year, even if your
          salary alone wouldn't, so it's worth checking with our{" "}
          <Link href="/calculators/income-tax-calculator-uk">Income Tax Calculator</Link>{" "}
          before assuming you'll pay the lower 18% rate.
        </li>
      </ul>
      <p>
        For more on how your overall income tax position is worked out, see our guide
        to{" "}
        <Link href="/blog/uk-income-tax-2026-27">UK Income Tax 2026/27</Link>, and for
        a look at how ISAs shelter growth from tax entirely, read{" "}
        <Link href="/blog/compound-interest-explained-uk">
          how compound interest actually works
        </Link>
        .
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
