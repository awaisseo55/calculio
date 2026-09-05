import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-marriage-allowance", label: "What is Marriage Allowance and how it works" },
  { id: "who-is-eligible", label: "Eligibility criteria for 2026/27" },
  { id: "how-backdating-works", label: "Backdating your claim: how to get up to £1,260" },
  { id: "when-transfer-causes-extra-tax", label: "The lower earner tax trap explained" },
  { id: "marriage-allowance-vs-married-couples-allowance", label: "Marriage Allowance vs Married Couple's Allowance" },
  { id: "how-to-claim-step-by-step", label: "How to claim directly via HMRC without fees" },
  { id: "common-mistakes", label: "Common Marriage Allowance mistakes to avoid" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "How much is Marriage Allowance worth for the 2026/27 tax year?",
    answer:
      "Marriage Allowance is worth up to £252 for the 2026/27 tax year. It allows the partner earning below the Personal Allowance to transfer £1,260 of their tax-free allowance to their spouse or civil partner, reducing the recipient's basic rate tax bill by 20% of that amount.",
  },
  {
    question: "Can unmarried cohabiting couples claim Marriage Allowance?",
    answer:
      "No. You must be legally married or in a registered civil partnership to claim. Living together, having children together, or holding a joint mortgage does not qualify under HMRC rules, regardless of how long you have lived together.",
  },
  {
    question: "How far back can you backdate a Marriage Allowance claim?",
    answer:
      "You can backdate your claim for up to four previous tax years, provided you met the eligibility criteria in each of those years. For a claim made during the 2026/27 tax year, you can claim for 2022/23, 2023/24, 2024/25, and 2025/26, giving a combined backdated total of up to £1,008 on top of the £252 for the current year.",
  },
  {
    question: "Can I claim Marriage Allowance if my spouse is a higher rate taxpayer?",
    answer:
      "No. To qualify, the higher earning partner must pay Income Tax at the basic rate only, meaning their annual taxable income must be £50,270 or less in England, Wales, or Northern Ireland. If the higher earner pays higher rate (40%) or additional rate (45%) tax, neither partner can claim.",
  },
  {
    question: "Do self-employed people qualify for Marriage Allowance?",
    answer:
      "Yes. Self-employed individuals qualify as long as both partners meet the usual income conditions. If the higher earner is self-employed, HMRC applies the allowance through their annual Self Assessment tax return, which reduces their final balancing tax bill.",
  },
  {
    question: "Do you have to reapply for Marriage Allowance every year?",
    answer:
      "No. Once HMRC approves your claim, Marriage Allowance renews automatically each tax year. You only need to contact HMRC if your circumstances change, such as a divorce, civil partnership dissolution, or if either partner's income crosses the qualifying thresholds.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Every year, an estimated two million eligible couples in the UK miss out on
        free tax relief because they have never heard of Marriage Allowance or
        assume they do not qualify. If you are legally married or in a civil
        partnership, and one partner earns less than the Personal Allowance while
        the other pays tax at the basic rate, HMRC lets you transfer part of that
        unused allowance to lower your household tax bill. You can check your exact
        household saving in seconds using our{" "}
        <Link href="/calculators/marriage-allowance-calculator-uk">
          Marriage Allowance calculator
        </Link>
        . Below is our guide to how the transfer works, who qualifies, how to
        backdate your claim for up to £1,260, and how to avoid fee-charging claim
        firms.
      </p>

      <h2 id="what-is-marriage-allowance">
        What is Marriage Allowance and how it works
      </h2>
      <p>
        Marriage Allowance was introduced under section 55A of the Income Tax Act
        2007. It provides targeted tax relief to single-earner and
        single-main-earner couples where one partner earns less than the Personal
        Allowance.
      </p>
      <p>
        Under the UK tax system, each adult gets a tax-free Personal Allowance of
        £12,570 for 2026/27. If you earn less than this, any unused allowance is
        normally lost. Marriage Allowance lets the non-taxpayer transfer 10% of
        their statutory Personal Allowance (£1,260, rounded to the nearest £10) to
        their spouse or civil partner.
      </p>
      <p>
        When the transfer takes place, the lower earner&apos;s allowance falls from
        £12,570 to £11,310, and the higher earner&apos;s allowance increases from
        £12,570 to £13,830. Because the recipient pays the 20% basic rate on
        earnings above the allowance, shielding £1,260 from tax saves them exactly
        £252 each year (£1,260 multiplied by 20%). For PAYE employees, HMRC updates
        their tax code with an &ldquo;M&rdquo; suffix, cutting monthly deductions by
        about £21. To see the impact on your monthly pay packet, try our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        . If the recipient is self-employed, HMRC deducts £252 from their annual
        Self Assessment balancing payment.
      </p>

      <h2 id="who-is-eligible">Eligibility criteria for 2026/27</h2>
      <p>
        To claim Marriage Allowance, both partners must satisfy four statutory
        conditions during the tax year:
      </p>
      <ul>
        <li>
          <strong>Legal marriage or civil partnership:</strong> You must be legally
          married or in a civil partnership. Cohabiting couples do not qualify under
          any circumstances, regardless of how long you have lived together.
        </li>
        <li>
          <strong>Lower earner income:</strong> The transferring partner must
          normally have an annual income of £12,570 or less. This includes wages,
          pensions, and taxable state benefits. Non-taxable income like Child
          Benefit or ISA interest does not count.
        </li>
        <li>
          <strong>Higher earner income:</strong> The receiving partner must have an
          annual taxable income between £12,571 and £50,270 (in England, Wales, and
          Northern Ireland), paying tax at the 20% basic rate. Higher rate (40%) and
          additional rate (45%) taxpayers cannot receive the transfer. Check your
          band with our{" "}
          <Link href="/calculators/income-tax-calculator-uk">
            Income Tax calculator
          </Link>
          .
        </li>
        <li>
          <strong>Scottish taxpayers:</strong> In Scotland, where rates are
          devolved, the receiving partner qualifies if their taxable income is
          between £12,571 and £43,662 (Starter, Basic, or Intermediate rate), but not
          the Scottish Higher rate (42%). The annual relief is still £252.
        </li>
      </ul>

      <RateTable
        caption="Marriage Allowance eligibility criteria, 2026/27"
        columns={["Requirement", "England, Wales & NI", "Scotland"]}
        rows={[
          ["Relationship status", "Married or civil partners", "Married or civil partners"],
          ["Lower earner income", "£0 to £12,570 (usually)", "£0 to £12,570 (usually)"],
          ["Higher earner income", "£12,571 to £50,270", "£12,571 to £43,662"],
          ["Higher earner tax band", "Basic rate (20%)", "Starter, Basic, or Intermediate"],
          ["Higher rate taxpayers eligible?", "No", "No"],
          ["Annual household tax saving", "Up to £252", "Up to £252"],
        ]}
      />

      <h2 id="how-backdating-works">
        Backdating your claim: how to get up to £1,260
      </h2>
      <p>
        HMRC allows you to backdate a Marriage Allowance claim for up to four
        previous tax years, alongside the current tax year. If you met the qualifying
        conditions in earlier years, you can claim the full backlog in one go.
      </p>
      <p>
        For claims made in the 2026/27 tax year, you can claim for the current year
        and the four prior tax years:
      </p>

      <RateTable
        caption="Backdated Marriage Allowance claim values up to 2026/27"
        columns={["Tax year", "Personal Allowance", "Transfer amount", "Maximum saving"]}
        rows={[
          ["2022/23", "£12,570", "£1,260", "£252"],
          ["2023/24", "£12,570", "£1,260", "£252"],
          ["2024/25", "£12,570", "£1,260", "£252"],
          ["2025/26", "£12,570", "£1,260", "£252"],
          ["2026/27 (ongoing)", "£12,570", "£1,260", "£252"],
          ["Total potential lump sum + year 1", "-", "-", "£1,260"],
        ]}
        highlightLastRow
      />

      <p>
        When you submit a backdated claim through GOV.UK, HMRC pays the prior years&apos;
        relief directly to the recipient partner as a lump sum refund by bank transfer
        or cheque. The current year&apos;s relief is applied to their tax code. If you
        qualified across all five eligible years, you could receive a combined £1,260.
      </p>

      <CalloutBox
        title="Check your Marriage Allowance saving"
        description="Enter both partners' earnings to confirm your eligibility and calculate your exact household tax savings and backdated refund."
        href="/calculators/marriage-allowance-calculator-uk"
        cta="Calculate my saving"
      />

      <h2 id="when-transfer-causes-extra-tax">
        The lower earner tax trap explained
      </h2>
      <p>
        While Marriage Allowance benefits most single-earner households, there is a
        scenario known as the lower earner tax trap. This happens when the lower
        earner has some income, but less than £12,570.
      </p>
      <p>
        Because the transfer reduces the lower earner&apos;s allowance to £11,310,
        earnings between £11,310 and £12,570 become taxable at 20%. This creates a
        small tax bill that partially offsets the partner&apos;s £252 saving.
      </p>
      <p>
        Here is a worked example with real numbers. Suppose Partner A earns £11,500
        and Partner B earns £32,000:
      </p>
      <ul>
        <li>
          Partner A transfers £1,260, lowering their allowance to £11,310.
        </li>
        <li>
          Partner A now has taxable income of £190 (£11,500 minus £11,310). At 20%,
          Partner A owes £38 in Income Tax.
        </li>
        <li>
          Partner B gains £1,260 in tax-free allowance, saving £252 in tax on their
          salary.
        </li>
        <li>
          Net household saving: £252 saved minus £38 paid equals £214 net gain.
        </li>
      </ul>
      <p>
        In this case, claiming still makes financial sense. However, if Partner A
        earns exactly £12,570, their extra £252 tax bill cancels out Partner B&apos;s
        saving entirely. Our{" "}
        <Link href="/calculators/marriage-allowance-calculator-uk">
          Marriage Allowance calculator
        </Link>{" "}
        checks this automatically to confirm your true net saving.
      </p>

      <h2 id="marriage-allowance-vs-married-couples-allowance">
        Marriage Allowance vs Married Couple&apos;s Allowance
      </h2>
      <p>
        Marriage Allowance is often confused with Married Couple&apos;s Allowance.
        They are separate schemes with distinct rules.
      </p>
      <p>
        Married Couple&apos;s Allowance is a legacy relief that applies only where at
        least one partner was born before 6 April 1935 (aged 91 or older in 2026).
        It reduces tax bills by between £457 and £1,150+ per year. You cannot claim
        both reliefs. For couples married today where both partners were born after 6
        April 1935, Marriage Allowance is the only applicable scheme.
      </p>

      <RateTable
        caption="Comparing Marriage Allowance and Married Couple's Allowance"
        columns={["Feature", "Marriage Allowance", "Married Couple's Allowance"]}
        rows={[
          ["Eligible age group", "Couples born after 6 April 1935", "At least one partner born before 6 April 1935"],
          ["Annual value (2026/27)", "Up to £252", "Up to £1,150+"],
          ["How it works", "Transfers £1,260 Personal Allowance", "Direct tax reduction based on allowance"],
          ["Backdating allowed?", "Yes (up to 4 years)", "Yes (up to 4 years)"],
          ["Can you claim both?", "No", "No"],
        ]}
      />

      <h2 id="how-to-claim-step-by-step">
        How to claim directly via HMRC without fees
      </h2>
      <p>
        Claiming Marriage Allowance is free and takes under ten minutes on GOV.UK.
        Never use commercial claim firms that take up to 40% or 50% of your rebate
        for submitting the same basic form.
      </p>
      <ul>
        <li>
          <strong>Have details ready:</strong> Both National Insurance numbers, your
          marriage or civil partnership date, and ID for the lower earner.
        </li>
        <li>
          <strong>The lower earner must apply:</strong> HMRC requires the partner
          giving up the allowance to make the application via their Government Gateway
          account at gov.uk/marriage-allowance.
        </li>
        <li>
          <strong>Select backdated years:</strong> Tick each earlier tax year in
          which you were eligible. HMRC calculates the rebate and transfers the funds
          to your bank account.
        </li>
        <li>
          <strong>Check tax codes:</strong> The lower earner gets tax code 1131N,
          while the higher earner receives 1383M.
        </li>
      </ul>
      <p>
        For more on tax deductions, see our guide to{" "}
        <Link href="/blog/uk-income-tax-2026-27">UK Income Tax bands and rates</Link>{" "}
        and try our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>
        . If your household receives family support, our{" "}
        <Link href="/blog/uk-child-benefit-guide-2026">
          UK Child Benefit guide
        </Link>{" "}
        and{" "}
        <Link href="/calculators/child-benefit-calculator-uk">
          Child Benefit calculator
        </Link>{" "}
        show how statutory allowances interact with the High Income Child Benefit
        Charge.
      </p>

      <h2 id="common-mistakes">Common Marriage Allowance mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Using fee-charging claim firms:</strong> Third-party sites charge
          high commissions for a service that is completely free on GOV.UK. Always
          claim directly with HMRC.
        </li>
        <li>
          <strong>Assuming cohabitation qualifies:</strong> Cohabiting couples are
          not eligible under UK tax law. You must be legally married or in a civil
          partnership.
        </li>
        <li>
          <strong>Failing to notify HMRC when income changes:</strong> If the higher
          earner moves into the 40% higher rate band, you must tell HMRC to avoid a
          repayment demand later.
        </li>
        <li>
          <strong>Overlooking the lower earner tax trap:</strong> If the lower
          earner earns close to £12,570, transferring allowance can trigger an
          offsetting tax bill. Check your figures before applying.
        </li>
        <li>
          <strong>Missing the four-year backdating deadline:</strong> HMRC enforces a
          strict four-year limit. Each 5 April, the oldest eligible tax year expires
          permanently.
        </li>
      </ul>
      <p>
        If either partner is self-employed, our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        explains how allowances and expenses interact on Self Assessment returns.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
