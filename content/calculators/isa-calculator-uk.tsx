import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much can I pay into an ISA each year?",
    answer:
      "For the 2026/27 tax year, the overall ISA allowance is £20,000, and you can split it across Cash, Stocks and Shares, Innovative Finance and Lifetime ISAs in any combination you like. The Lifetime ISA has its own lower limit of £4,000 a year, which counts towards your overall £20,000 allowance rather than sitting on top of it.",
  },
  {
    question: "Is a Stocks and Shares ISA better than a Cash ISA?",
    answer:
      "It depends on your timeframe and comfort with risk. Cash ISAs are steady and protected from market swings, which suits shorter term goals or money you cannot afford to see fall in value. Stocks and Shares ISAs can grow faster over many years but can also lose value, particularly over shorter periods, so they generally suit goals that are five years or more away.",
  },
  {
    question: "What is the Lifetime ISA bonus?",
    answer:
      "If you are between 18 and 39 when you open a Lifetime ISA, the government adds a 25% bonus on top of whatever you pay in, up to the £4,000 annual limit, so a full £4,000 contribution attracts a £1,000 bonus. The money must be used towards a first home worth up to £450,000 or withdrawn from age 60, otherwise a withdrawal charge usually applies.",
  },
  {
    question: "Do I pay tax on money inside an ISA?",
    answer:
      "No. Interest, dividends and capital gains earned inside any type of ISA are completely free of UK Income Tax and Capital Gains Tax, for as long as the money stays wrapped inside the ISA. This is the main advantage an ISA has over a standard savings or investment account.",
  },
  {
    question: "Can I have more than one ISA?",
    answer:
      "Yes, you can hold multiple ISAs across different providers and different types at the same time, and you can pay into more than one type of ISA in the same tax year. The one limit that applies across all of them is the combined £20,000 annual allowance, so your total contributions across every ISA you hold cannot exceed that figure.",
  },
  {
    question: "What happens if I withdraw money from my ISA?",
    answer:
      "For most Cash and Stocks and Shares ISAs, withdrawing money does not reduce your annual allowance permanently, and many providers offer flexible ISAs that let you replace what you withdraw within the same tax year without it counting as a new contribution. Check with your provider, since not every ISA is flexible in this way, and Lifetime ISA withdrawals before age 60 for anything other than a first home usually come with a 25% government charge.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        An ISA (Individual Savings Account) is one of the simplest ways to grow
        your money in the UK without handing a share of the gains to HMRC.
        Every interest payment, dividend and capital gain earned inside an ISA
        is completely tax-free, which makes a real difference over many years
        of saving or investing. This calculator projects how a Cash, Stocks
        and Shares, Lifetime or Junior ISA could grow over time, and shows
        roughly how much more you would keep compared to a taxed savings
        account.
      </p>

      <h2>How to use the ISA calculator</h2>
      <p>
        Choose the type of ISA you are using or considering, then enter your
        initial deposit, how much you plan to add each month, the annual
        return you expect, and how many years you plan to keep saving. The
        calculator projects your final balance, splits it between your own
        contributions and the tax-free gains on top, and compares the result
        to a similar taxed savings account.
      </p>
      <p>
        If you are opening a Lifetime ISA, the calculator also shows the 25%
        government bonus on your contributions, up to the £4,000 annual
        Lifetime ISA limit. This bonus is one of the most valuable features
        available to first-time buyers and long-term retirement savers under
        40, and it is worth factoring into any comparison with a standard
        Stocks and Shares ISA.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator compounds your balance monthly: your monthly
        contribution is added, then growth is applied to the new, larger
        total. This repeats every month for the number of years you enter, so
        later months benefit from growth on a bigger balance than earlier
        ones. The maths is the same principle behind our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          compound interest calculator
        </Link>
        , with the key difference being that everything inside an ISA grows
        completely free of tax.
      </p>
      <p>
        For the taxed savings comparison, the calculator assumes the same
        growth rate outside an ISA, with any interest earned above your
        Personal Savings Allowance taxed at a simplified 20% each year. This
        is a rough illustration rather than a precise tax calculation, since
        your real tax position depends on your total income and whether the
        growth comes from interest, dividends, or capital gains, each of
        which is taxed differently outside an ISA.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you open a Stocks and Shares ISA with <strong>£1,000</strong>,
        add <strong>£200 a month</strong>, and expect an average annual
        return of <strong>5%</strong> over <strong>10 years</strong>.
      </p>
      <p>
        Over that time you would contribute <strong>£25,000</strong> of your
        own money (the £1,000 start plus £200 a month for 120 months). The
        calculator projects a final balance of around{" "}
        <strong>£32,833</strong>, meaning roughly{" "}
        <strong>£7,833</strong> of tax-free growth on top of what you paid
        in. Because the whole amount sits inside an ISA wrapper, none of that
        growth is subject to Income Tax or Capital Gains Tax, no matter how
        large your other income or investments become.
      </p>
      <p>
        Try switching the ISA type to Lifetime ISA in the calculator above,
        using the same £200 a month. You will see a 25% government bonus
        added on top of your contributions, which is a guaranteed uplift that
        no investment return can match, though remember the annual Lifetime
        ISA limit is lower, at £4,000 a year rather than the full £20,000
        ISA allowance.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is treating the ISA allowance as if it resets or
        rolls over. It does not: any unused allowance is lost at the end of
        each tax year on 5 April, so contributing little and often across the
        year is usually more reliable than waiting until the last few weeks
        and finding you cannot fit in a large lump sum. It is also easy to
        forget that the Lifetime ISA&apos;s £4,000 limit counts towards, not on
        top of, your overall £20,000 allowance, so a large Lifetime ISA
        contribution leaves less room for other ISAs in the same tax year.
      </p>
      <p>
        Another mistake is choosing an ISA type based purely on the interest
        rate or projected return without thinking about your timeframe. A
        Stocks and Shares ISA earning a higher long-term average return can
        still lose value in any given year, which matters a great deal if you
        need the money within the next year or two. For short-term goals,
        such as a house deposit you plan to use soon, a Cash ISA or Lifetime
        ISA cash option usually makes more sense than chasing a higher
        headline return.
      </p>
      <p>
        Finally, do not assume every provider&apos;s ISA is flexible. A flexible
        ISA lets you withdraw money and pay it back in later in the same tax
        year without it counting against your allowance twice, but not every
        provider offers this feature. Check before you rely on being able to
        move money in and out freely.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you want to see how your savings would grow outside an ISA
        wrapper, our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          compound interest calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        use the same underlying growth maths. If you are saving specifically
        for retirement, try our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        to project your pot and possible retirement income, and check your{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay
        </Link>{" "}
        to see how much you can realistically afford to put aside each month.
        Our guide to{" "}
        <Link href="/blog/compound-interest-explained-uk">
          compound interest
        </Link>{" "}
        explains the underlying formula in more depth, and our{" "}
        <Link href="/blog/uk-income-tax-2026-27">income tax guide</Link>{" "}
        covers how tax works on income outside an ISA.
      </p>
    </div>
  );
}
