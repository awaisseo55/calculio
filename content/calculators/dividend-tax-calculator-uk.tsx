import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the dividend allowance?",
    answer:
      "The dividend allowance is the amount of dividend income you can receive tax free each year, currently £500. Any dividends above this amount are taxed at rates depending on your overall income, but the allowance itself always applies first regardless of your tax band.",
  },
  {
    question: "Do I pay dividend tax on money inside an ISA?",
    answer:
      "No. Dividends earned on shares held inside a Stocks and Shares ISA are completely tax free, with no limit and no need to declare them, regardless of how much you receive. This calculator is for dividends held outside an ISA.",
  },
  {
    question: "Why are dividends taxed differently to salary?",
    answer:
      "Dividends come from company profits that have already been taxed once through Corporation Tax, so dividend tax rates are set lower than Income Tax rates to avoid taxing the same money twice as heavily. This is particularly relevant for company directors who take a mix of salary and dividends.",
  },
  {
    question: "Do I need to file a tax return for dividend income?",
    answer:
      "If your dividend income is above the £500 allowance, you will usually need to report it to HMRC, either through self-assessment or, in some cases, by contacting HMRC directly if you do not already file a return. Check current HMRC guidance for your specific situation.",
  },
  {
    question: "How does my salary affect my dividend tax rate?",
    answer:
      "Your salary uses up your Personal Allowance and part of your basic or higher rate band first. Your dividends then stack on top, which is why a higher salary can push your dividends into a higher dividend tax band even if the dividend amount itself stays the same.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        If you own shares or run a limited company and take dividends alongside a
        salary, working out your tax bill is more involved than a simple
        percentage, since dividends are taxed using their own allowance and rates,
        stacked on top of whatever your salary already uses up.
      </p>
      <p>
        This calculator works out exactly how much dividend tax you owe, taking
        into account your salary, your dividend allowance, and which tax bands
        your dividends fall into.
      </p>

      <h2>How to use the dividend tax calculator</h2>
      <p>
        Enter your annual salary and your dividend income for the year. The
        calculator applies your Personal Allowance to your salary first, then works
        out how much of your dividend income is covered by the tax-free dividend
        allowance, and how much falls into the basic, higher or additional dividend
        tax bands.
      </p>

      <h2>How dividend tax is calculated</h2>
      <p>
        The first <strong>£500</strong> of dividend income each year is tax free,
        regardless of your income level. Above that, dividends are taxed at{" "}
        <strong>8.75%</strong> within the basic rate band, <strong>33.75%</strong>{" "}
        within the higher rate band, and <strong>39.35%</strong> within the
        additional rate band. These rates are lower than the equivalent Income Tax
        rates, since dividends come from company profits that have already had
        Corporation Tax deducted.
      </p>
      <p>
        Your salary is taxed first and uses up your Personal Allowance and part of
        your basic rate band. Your dividends are then treated as sitting on top of
        your salary, which determines which dividend tax band they fall into. This
        means the same dividend income can be taxed differently depending on how
        much salary you also receive in the same year.
      </p>

      <h2>Worked example</h2>
      <p>
        Take someone with a <strong>£30,000</strong> salary and{" "}
        <strong>£20,000</strong> of dividend income in the same tax year. Their
        salary uses up the full £12,570 Personal Allowance, leaving £17,430 of
        salary taxed at the basic rate. Their dividends then sit on top of that.
      </p>
      <p>
        The first £500 of dividends is tax free under the dividend allowance. The
        remaining £19,500 falls entirely within the basic rate band in this
        example, taxed at 8.75%, giving a dividend tax bill of around{" "}
        <strong>£1,706</strong>. If the same person had a higher salary, say
        £45,000, more of their dividends would be pushed into the 33.75% higher
        rate band instead, increasing the tax owed on the same £20,000 of
        dividends considerably.
      </p>
      <p>
        This is a useful example of why company directors often plan their salary
        and dividend split carefully each tax year. A modest salary, enough to use
        the Personal Allowance and build a National Insurance record, combined with
        dividends for the rest, is a common approach precisely because it can keep
        more income within the lower dividend tax bands rather than pushing it into
        Income Tax territory at the higher rates that apply to salary.
      </p>

      <h2>The dividend allowance has shrunk in recent years</h2>
      <p>
        It is worth knowing that the tax-free dividend allowance has fallen
        substantially over the past few years, from £2,000 down through £1,000 and
        now to £500. If you are used to an older figure from a previous tax year,
        or from an article that has not been updated, double check you are working
        from the current £500 allowance, since using an outdated figure can lead
        to a noticeably wrong estimate of your dividend tax bill.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming the dividend allowance is the same as the
        Personal Allowance, or that unused Personal Allowance can somehow be
        combined with it. They are two separate allowances, and the £500 dividend
        allowance applies on top of whatever your Personal Allowance already
        covers. Another mistake is forgetting that dividends are added on top of
        salary when working out which band they fall into, not assessed on their
        own in isolation, so a change in salary can shift your dividend tax bill
        even if your dividend income itself does not change.
      </p>
      <p>
        It is also worth remembering that dividends from shares inside an ISA are
        entirely tax free and do not need to be included in this calculator at
        all. Only dividends held outside a tax wrapper, such as shares held
        directly or through a general investment account, are subject to the rates
        shown here.
      </p>
      <p>
        Finally, if you have not reported dividend income to HMRC before, it is
        easy to assume that small amounts do not need declaring. HMRC does still
        expect dividend income above your allowance to be reported, even if the
        resulting tax bill is fairly small, so it is worth checking current
        self-assessment thresholds rather than assuming a modest amount can simply
        be left off your return.
      </p>

      <h2>Related calculators</h2>
      <p>
        For the salary side of your income, check our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          Income Tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>
        . If you are weighing up salary against dividends as a company director,
        our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        covers the sole trader alternative, and our{" "}
        <Link href="/calculators/capital-gains-tax-calculator-uk">
          Capital Gains Tax calculator
        </Link>{" "}
        covers what happens if you sell shares rather than simply holding them for
        dividend income. Our{" "}
        <Link href="/blog/uk-income-tax-2026-27">income tax guide</Link> has more
        on how the wider UK tax system fits together.
      </p>
    </div>
  );
}
