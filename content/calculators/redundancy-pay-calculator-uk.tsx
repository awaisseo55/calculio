import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How is statutory redundancy pay calculated?",
    answer:
      "Statutory redundancy pay is based on your age, your complete years of service, capped at 20 years, and your weekly pay, capped at a set maximum figure reviewed every April. For each year of service, you get half a week's pay if you were under 22 that year, one week's pay if you were 22 to 40, and one and a half week's pay if you were 41 or over.",
  },
  {
    question: "What is the maximum statutory redundancy pay?",
    answer:
      "The maximum is reached by combining the two caps: 20 years of service and the weekly pay cap, at the most generous 1.5 multiplier throughout. In practice this gives a maximum statutory figure in the low tens of thousands of pounds, though the exact maximum changes each April when the weekly pay cap is reviewed, so check GOV.UK for the current figure.",
  },
  {
    question: "Do I qualify for statutory redundancy pay?",
    answer:
      "You generally need at least 2 complete years of continuous service with your employer to qualify for statutory redundancy pay, and the redundancy needs to be genuine, meaning your role is no longer needed, rather than a disguised dismissal for another reason. If you are unsure whether your situation counts as genuine redundancy, ACAS provides free, impartial guidance.",
  },
  {
    question: "Is redundancy pay taxed?",
    answer:
      "The first £30,000 of redundancy pay, combining statutory and any enhanced or ex-gratia payment, is tax-free. Anything above £30,000 is added to your income and taxed through PAYE in the pay period you receive it, though National Insurance is not usually charged on redundancy pay itself.",
  },
  {
    question: "What is the difference between statutory and enhanced redundancy pay?",
    answer:
      "Statutory redundancy pay is the legal minimum, calculated using the fixed formula based on age, service and capped weekly pay. An enhanced or contractual redundancy package is anything your employer offers on top of, or instead of, the statutory minimum, often calculated using your actual uncapped weekly pay and a more generous number of weeks per year of service, sometimes negotiated individually or set out in a company policy.",
  },
  {
    question: "Can I negotiate a better redundancy package?",
    answer:
      "Sometimes, particularly in larger organisations or where a settlement agreement is being offered in exchange for you waiving certain employment claims. Whether there is room to negotiate depends heavily on your individual circumstances, your employer's policies and the reason for the redundancy, so getting independent advice from ACAS or a solicitor before agreeing to anything is generally a sensible step.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Redundancy is stressful enough without also being unsure how much
        you are entitled to. UK statutory redundancy pay follows a fixed
        formula based on your age, length of service and weekly pay, but the
        caps involved and the way age bands apply per year of service trip
        a lot of people up. This calculator works through the statutory
        formula for you, and lets you compare it against an enhanced
        package if your employer offers one.
      </p>

      <h2>How to use the redundancy pay calculator</h2>
      <p>
        Enter your age at the point of redundancy and your complete years of
        continuous service, noting that only the most recent 20 years count
        towards the statutory calculation. Add your current weekly pay,
        which the calculator automatically caps at the current statutory
        maximum for the statutory figure. If your employer offers an
        enhanced package, switch to that option and enter how many
        weeks&apos; pay you get for each year of service under your specific
        scheme.
      </p>

      <h2>How the statutory formula works</h2>
      <p>
        For each complete year of service, counting backwards from your
        redundancy date, you are entitled to a portion of a week&apos;s pay
        based on how old you were during that particular year: half a
        week&apos;s pay for years worked under age 22, one week&apos;s pay
        for years worked between 22 and 40, and one and a half week&apos;s
        pay for years worked at 41 or older. Because the multiplier depends
        on your age during each specific year of service rather than just
        your age now, someone with a long career that spans multiple age
        bands has their pay calculated as a mix of these rates, not a single
        flat multiplier applied to every year.
      </p>
      <p>
        Your weekly pay is capped at a maximum figure for the statutory
        calculation, reviewed by the government every April, so higher
        earners do not get a proportionally larger statutory payout beyond
        that cap, even though their actual weekly pay may be higher. Service
        is also capped at 20 years, so anyone with a longer career only has
        their most recent 20 years counted for the statutory figure.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone made redundant at <strong>age 45</strong>, with{" "}
        <strong>10 complete years</strong> of service and a weekly pay of{" "}
        <strong>£600</strong>, below the statutory cap.
      </p>
      <p>
        Working backwards through their 10 years of service, the 5 most
        recent years were worked at ages 45 down to 41, all in the 1.5
        multiplier band, contributing 5 &times; 1.5 = 7.5 weeks&apos; pay.
        The next 5 years were worked at ages 40 down to 36, in the 1.0
        multiplier band, contributing another 5 &times; 1.0 = 5 weeks&apos;
        pay. That is a total of <strong>12.5 weeks&apos; pay</strong>, so 12.5
        &times; £600 = <strong>£7,500</strong> in statutory redundancy pay,
        entirely tax-free since it is well under the £30,000 threshold.
      </p>

      <h2>Notice periods and other entitlements</h2>
      <p>
        Redundancy pay is separate from your notice period, which you are
        also entitled to be paid for, either by working it or receiving pay
        in lieu of notice, depending on your contract and your
        employer&apos;s approach. Our{" "}
        <Link href="/blog/uk-redundancy-guide-2026">
          UK redundancy rights and pay guide
        </Link>{" "}
        covers notice periods, consultation rights and what to check before
        signing a settlement agreement in full.
      </p>

      <h2>Common mistakes when estimating redundancy pay</h2>
      <p>
        A common mistake is applying a single age-based multiplier to every
        year of service, rather than working out the correct multiplier for
        the age you were during each individual year, which matters a lot
        for anyone whose career spans the age 41 threshold. Another is
        forgetting that weekly pay is capped for the statutory calculation,
        so simply multiplying actual salary by the formula overstates the
        statutory entitlement for higher earners. If you are also working
        out your day-to-day take-home pay while your notice period runs, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can help.
      </p>

      <h2>Related calculators</h2>
      <p>
        To see how a lump sum redundancy payment could fit into an
        emergency fund or savings plan, try our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>
        . For your regular pay while working your notice, our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        give a full breakdown, and our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        helps if you are comparing employed and self-employed options after
        redundancy.
      </p>
    </div>
  );
}
