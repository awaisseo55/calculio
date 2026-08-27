import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is Marriage Allowance?",
    answer:
      "Marriage Allowance lets the lower earning partner in a marriage or civil partnership transfer £1,260 of their unused Personal Allowance to the higher earning partner. It reduces the higher earner's Income Tax bill by up to £252 a year, as long as both partners meet the eligibility rules.",
  },
  {
    question: "Who is eligible for Marriage Allowance?",
    answer:
      "You need to be married or in a civil partnership, with one partner earning less than the Personal Allowance and the other paying tax at the basic rate only, broadly between £12,571 and £50,270. If either partner is a higher or additional rate taxpayer, you do not qualify.",
  },
  {
    question: "Does transferring my allowance mean I pay more tax myself?",
    answer:
      "It can, in some cases. If your income is close to the Personal Allowance, transferring £1,260 away reduces your own tax-free amount, which could create a small tax bill for you. This calculator accounts for that, showing the net saving for your household after any extra tax the lower earner might owe.",
  },
  {
    question: "How do I actually apply for Marriage Allowance?",
    answer:
      "You apply directly with HMRC, usually online through the GOV.UK website, using the lower earner's Government Gateway login. Once approved, the transfer applies automatically each year until either partner cancels it or a change in circumstances means you no longer qualify.",
  },
  {
    question: "Can I backdate a Marriage Allowance claim?",
    answer:
      "HMRC allows backdated claims for up to four previous tax years if you were eligible during those years but did not claim, which can mean a larger one-off refund alongside your ongoing yearly saving. Check the current backdating rules on GOV.UK when you apply.",
  },
  {
    question: "Can we claim both Marriage Allowance and Married Couple's Allowance?",
    answer:
      "No, you cannot claim both at the same time. Married Couple's Allowance is a separate, generally more valuable allowance available where at least one partner was born before 6 April 1935, so most working-age couples will only be eligible for Marriage Allowance.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        If you are married or in a civil partnership and one of you earns less than the Personal Allowance,
        Marriage Allowance could reduce your household&apos;s Income Tax bill. This calculator checks your
        eligibility and works out the net saving after accounting for any extra tax the lower earner might owe.
      </p>

      <h2>How to use the Marriage Allowance calculator</h2>
      <p>
        Enter both partners&apos; annual income before tax. The calculator checks whether you meet the
        eligibility rules, then shows the tax saving for the higher earner, any extra tax the lower earner might
        owe as a result of giving up part of their allowance, and the net saving for your household overall.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Marriage Allowance transfers a fixed £1,260 of Personal Allowance from the lower earner to the higher
        earner, worth up to £252 a year at the basic rate of 20%. If the lower earner&apos;s income is close to
        the Personal Allowance, giving up £1,260 can leave a small amount of their income newly taxable, so the
        calculator works out that extra tax and subtracts it from the higher earner&apos;s saving to give a true
        net figure.
      </p>

      <h2>Worked example</h2>
      <p>
        If the lower earner has an income of <strong>£9,000</strong> and the higher earner has an income of{" "}
        <strong>£30,000</strong>, the lower earner&apos;s income stays comfortably below their reduced allowance
        of £11,310, so they owe no extra tax. The higher earner saves the full <strong>£252</strong>, and the net
        household saving is <strong>£252</strong>. If the lower earner instead had an income of{" "}
        <strong>£11,500</strong>, just £190 above the reduced allowance, they would owe about £38 in extra tax,
        bringing the net household saving down to roughly <strong>£214</strong>.
      </p>

      <h2>When Marriage Allowance is worth claiming</h2>
      <p>
        Marriage Allowance tends to be most worthwhile when the lower earner has income well below the Personal
        Allowance, for example if they work part-time, are not working, or are on a low income. The closer the
        lower earner&apos;s income gets to the full Personal Allowance, the smaller the net benefit becomes,
        since more of their transferred allowance ends up being needed to cover their own income.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is assuming Marriage Allowance always saves exactly £252, without checking whether the
        lower earner&apos;s own income might create a small offsetting tax bill. Another mistake is applying
        when one partner is actually a higher or additional rate taxpayer, since the higher earner must stay
        within the basic rate band for the claim to be valid. It is also easy to forget to update or cancel the
        claim if your circumstances change, such as a pay rise moving the higher earner into the higher rate
        band.
      </p>

      <h2>Related calculators</h2>
      <p>
        To see your full tax breakdown, try our{" "}
        <Link href="/calculators/income-tax-calculator-uk">income tax calculator</Link>. Our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay calculator</Link> and{" "}
        <Link href="/calculators/national-insurance-calculator-uk">National Insurance calculator</Link> can help
        you see the fuller picture of your household finances. For more on how Income Tax works, see our{" "}
        <Link href="/blog/uk-income-tax-2026-27">UK Income Tax guide</Link>.
      </p>
    </div>
  );
}
