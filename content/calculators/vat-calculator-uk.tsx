import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What are the current UK VAT rates?",
    answer:
      "There are three main rates: the standard rate of 20%, which applies to most goods and services; a reduced rate of 5%, which applies to items such as domestic energy and children's car seats; and a zero rate of 0%, which applies to most food, books, newspapers and children's clothing. Some goods and services are exempt from VAT entirely, which is treated differently from being zero-rated.",
  },
  {
    question: "How do I work out VAT already included in a price?",
    answer:
      "Select \"Gross (inc. VAT)\" mode, enter the total price, and choose the correct rate. The calculator divides the gross price by 1 plus the VAT rate to find the net amount, then the difference between the gross and net figures is the VAT. For a 20% rate, this means dividing by 1.2, not simply taking 20% off the gross figure, which is a common error.",
  },
  {
    question: "Do I charge VAT if I am not VAT registered?",
    answer:
      "No. You can only charge VAT on your invoices if you are registered for VAT with HMRC. Registration is compulsory once your VAT-taxable turnover goes above the current registration threshold in any rolling 12-month period, and optional below that. Charging VAT without being registered is not permitted.",
  },
  {
    question: "What is the difference between zero-rated and VAT exempt?",
    answer:
      "Zero-rated goods and services are technically within the scope of VAT, just charged at 0%, which means a VAT-registered business can still reclaim VAT paid on related costs. Exempt goods and services sit outside the VAT system entirely, so a business dealing only in exempt supplies generally cannot reclaim VAT on its own costs in the same way.",
  },
  {
    question: "Can this calculator handle other VAT rates, such as those used before a Budget change?",
    answer:
      "Yes. While the calculator defaults to the three current standard UK rates, you can adjust the figures manually if you need to check a historical rate or a rate that applies in a specific, unusual scenario. Always confirm the exact rate that applied for the relevant time period on gov.uk if it matters for your records.",
  },
  {
    question: "Is this calculator suitable for filing a VAT return?",
    answer:
      "This calculator is designed for quick estimates on individual transactions, such as checking an invoice or receipt. For an actual VAT return, you will usually need accounting software or a bookkeeper to handle input and output VAT correctly across a full accounting period, including any partial exemption or flat rate scheme rules that might apply to your business.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Whether you are checking an invoice, pricing a product, or trying to
        work out how much of a receipt is actually VAT, the maths is easy to
        get wrong if you do it in your head. This calculator adds VAT to a
        net price, or extracts VAT already included in a gross price,
        instantly, at the standard, reduced or zero rate.
      </p>

      <h2>How to use the VAT calculator</h2>
      <p>
        First choose whether your starting figure already includes VAT
        (gross) or does not (net). Then enter the amount and select the VAT
        rate that applies: 20% standard, 5% reduced, or 0% zero-rated. The
        calculator instantly shows the net amount, the VAT amount, and the
        gross total, so you can see the full breakdown at a glance.
      </p>
      <p>
        This is useful for freelancers and small business owners checking
        invoices, shoppers trying to work out how much of a price is tax, and
        anyone comparing a quoted price against a VAT-inclusive one from a
        different supplier.
      </p>

      <h2>How VAT is calculated</h2>
      <p>
        Adding VAT to a net price is straightforward: multiply the net amount
        by the VAT rate to get the VAT due, then add that to the net amount
        to get the gross total. At 20%, a £100 net price attracts £20 of VAT,
        giving a gross total of £120.
      </p>
      <p>
        Extracting VAT from a gross price works differently, and this is
        where mistakes usually happen. You cannot simply take 20% off a gross
        figure to find the net amount, because the 20% VAT was calculated on
        the smaller net figure, not the larger gross one. Instead, you divide
        the gross amount by 1 plus the VAT rate (1.2 for 20% VAT) to find the
        net amount, then the VAT is the difference between the two.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you have a gross price of <strong>£600</strong> that already
        includes 20% VAT, and you need to know the net amount for your
        accounts.
      </p>
      <p>
        Dividing £600 by 1.2 gives a net amount of <strong>£500</strong>. The
        VAT element is therefore <strong>£100</strong> (£600 minus £500), not
        £120, which is what you would get by mistakenly taking 20% of the
        gross figure directly. This distinction matters a great deal on
        larger invoices, where the error compounds into a meaningfully wrong
        figure.
      </p>
      <p>
        Now try the reverse in the calculator above: switch to net mode,
        enter £500, and select 20%. You will see the calculator adds £100 of
        VAT to arrive back at the same £600 gross figure, confirming the two
        directions are consistent with each other.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        The most common mistake is taking a flat percentage off a
        VAT-inclusive price instead of dividing by 1 plus the rate. This
        under-states the true net amount and over-states the VAT, which can
        cause real problems if the figure is used on a VAT return or in
        business accounts. Always check whether you are working with a gross
        or net starting figure before choosing which calculation to run.
      </p>
      <p>
        Another mistake is applying the wrong rate. Not everything is charged
        at the standard 20% rate: energy bills are commonly charged at the 5%
        reduced rate, and many everyday food items are zero-rated rather than
        standard-rated. If you are unsure which rate applies to a particular
        good or service, HMRC publishes detailed guidance by category, and it
        is worth checking rather than assuming the standard rate applies
        everywhere.
      </p>
      <p>
        Finally, remember that VAT registration status matters. If you run a
        small business below the VAT registration threshold, you should not
        be charging VAT on your invoices at all, since only VAT-registered
        businesses are permitted to do so. Charging VAT incorrectly can cause
        problems with HMRC and confusion for your customers.
      </p>

      <h2>Related calculators</h2>
      <p>
        If VAT is just one part of working out your overall tax position,
        our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        covers Income Tax and National Insurance for sole traders, and our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        breaks down tax by band for any income level. If you are employed
        rather than self-employed, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        shows your net salary after all the usual deductions. Our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        also covers when you might need to register for VAT as your business
        grows.
      </p>
    </div>
  );
}
