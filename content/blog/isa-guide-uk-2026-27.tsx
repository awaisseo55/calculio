import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-an-isa", label: "What is an ISA and why the wrapper matters" },
  { id: "types-of-isa", label: "The four main types of ISA" },
  { id: "annual-allowance", label: "The 2026/27 ISA allowance" },
  { id: "lifetime-isa-bonus", label: "How the Lifetime ISA bonus works" },
  { id: "isa-vs-taxable-savings", label: "ISA vs a taxable savings account" },
  { id: "which-isa-is-right", label: "Which ISA is right for you" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "What is the ISA allowance for 2026/27?",
    answer:
      "The overall ISA allowance is £20,000 for 2026/27. You can split it across different types of adult ISA in any combination you like, except the Lifetime ISA, which has its own £4,000 sub-limit within that total.",
  },
  {
    question: "Can I have more than one ISA at the same time?",
    answer:
      "Yes. You can hold several different ISAs, a Cash ISA and a Stocks and Shares ISA at the same time, for example, and pay into more than one of the same type across different providers in the same tax year. The £20,000 annual allowance applies across all of them combined, not per account.",
  },
  {
    question: "What happens if I withdraw from a Lifetime ISA before age 60?",
    answer:
      "Unless you're using the money for a first home purchase up to £450,000 or you're terminally ill, withdrawing from a Lifetime ISA before age 60 triggers a 25% government withdrawal charge. That charge can leave you with less than you actually paid in, so it's worth being confident about the purpose of the money before opening one.",
  },
  {
    question: "Does money in an ISA still count if I've used my Personal Savings Allowance elsewhere?",
    answer:
      "No, and that's the main point of an ISA. Interest, dividends and growth inside an ISA don't use up your Personal Savings Allowance or dividend allowance at all, because ISA income is entirely outside the Income Tax and Capital Gains Tax system.",
  },
  {
    question: "What is a Junior ISA and who can open one?",
    answer:
      "A Junior ISA is a tax-free savings or investment account for under-18s, with its own £9,000 annual allowance for 2026/27, separate from the adult ISA allowance. A parent or guardian must open it, but anyone can contribute, and the child can only access the money once they turn 18.",
  },
  {
    question: "Do unused ISA allowances carry over to the next tax year?",
    answer:
      "No. The ISA allowance resets every 6 April and any amount you don't use is lost, it can't be carried forward or backdated. This is why many savers try to use as much of their allowance as they reasonably can before each tax year ends on 5 April.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        An ISA isn't an investment or a savings account in itself, it's a tax-free
        wrapper you put around one. That distinction matters more than most people
        realise, because the type of ISA you choose, and how much of your allowance
        you use, can make a genuine difference to how much of your own money you
        actually keep. Our{" "}
        <Link href="/calculators/isa-calculator-uk">ISA Calculator</Link> projects how
        your ISA could grow, but first, here's how the different types work and which
        one tends to suit different goals.
      </p>

      <h2 id="what-is-an-isa">What is an ISA and why the wrapper matters</h2>
      <p>
        Individual Savings Account, ISA for short, is simply a tax-free container.
        Interest, dividends and capital growth earned inside one aren't subject to
        Income Tax, dividend tax or Capital Gains Tax, no matter how much they grow
        over time. Outside an ISA, once your savings interest goes above your
        Personal Savings Allowance, or your gains go above your Capital Gains Tax
        annual exempt amount, you start paying tax on the difference. Inside an ISA,
        none of that applies, which is exactly why it's usually one of the first
        places people put money aside for the medium to long term.
      </p>

      <h2 id="types-of-isa">The four main types of ISA</h2>
      <p>
        There are four main types of ISA available to UK residents, and you can hold
        more than one at once.
      </p>
      <h3>Cash ISA</h3>
      <p>
        Works like a normal savings account, but the interest is entirely tax-free.
        Best suited to money you might need at relatively short notice, or simply
        don't want exposed to investment risk.
      </p>
      <h3>Stocks and Shares ISA</h3>
      <p>
        Holds investments, funds, shares or bonds, rather than cash, with growth and
        dividends sheltered from tax. Generally suited to money you can leave invested
        for 5 years or more, since the value can fall as well as rise.
      </p>
      <h3>Lifetime ISA (LISA)</h3>
      <p>
        Designed specifically to help with a first home or retirement saving, with
        the government adding a 25% bonus on top of what you pay in, up to a £4,000
        annual contribution limit. Available to those aged 18 to 39 when they open
        one, with contributions allowed up to age 50.
      </p>
      <h3>Junior ISA</h3>
      <p>
        A tax-free account for under-18s, with its own separate £9,000 annual
        allowance, opened by a parent or guardian but accessible to the child once
        they turn 18.
      </p>

      <h2 id="annual-allowance">The 2026/27 ISA allowance</h2>
      <p>
        The overall adult ISA allowance is £20,000 for 2026/27, and you can split it
        across Cash, Stocks and Shares and Lifetime ISAs however suits you, provided
        no more than £4,000 of it goes into a Lifetime ISA. The Junior ISA allowance
        sits entirely separately, at £9,000 per child.
      </p>
      <RateTable
        caption="UK ISA allowances, 2026/27"
        columns={["ISA type", "Annual allowance"]}
        rows={[
          ["Overall adult ISA allowance", "£20,000"],
          ["Lifetime ISA (within the £20,000 total)", "£4,000"],
          ["Junior ISA (separate allowance)", "£9,000"],
        ]}
        highlightLastRow
      />

      <h2 id="lifetime-isa-bonus">How the Lifetime ISA bonus works</h2>
      <p>
        The government adds a 25% bonus on top of whatever you pay into a Lifetime
        ISA, up to the £4,000 annual limit. Pay in the full £4,000 in a tax year and
        the government adds £1,000, taking your total for that year to £5,000 before
        any growth is added on top. That 25% bonus is effectively free money, provided
        the funds are eventually used for a first home worth up to £450,000, or kept
        until age 60 for retirement, since withdrawing early for any other reason
        triggers a 25% charge that can leave you worse off than if you'd never opened
        one. If a first home is the goal, it's worth reading alongside our{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">
          guide to mortgage deposits
        </Link>{" "}
        to see how a Lifetime ISA bonus stacks up against your target deposit.
      </p>

      <h2 id="isa-vs-taxable-savings">ISA vs a taxable savings account</h2>
      <p>
        To see the ISA wrapper's benefit in practice, compare £30,000 of savings
        earning 4% interest a year, £1,200, held inside an ISA versus outside one. As
        a higher-rate taxpayer, your Personal Savings Allowance outside an ISA is
        £500, so £700 of that interest would be taxable at 40%.
      </p>
      <RateTable
        caption="Worked example: £30,000 savings at 4% interest, higher-rate taxpayer"
        columns={["Account type", "Interest earned", "Tax due", "You keep"]}
        rows={[
          ["Taxable savings account", "£1,200", "£280", "£920"],
          ["ISA", "£1,200", "£0", "£1,200"],
        ]}
        highlightLastRow
      />
      <p>
        That's £280 a year lost to tax outside an ISA, every year, for as long as the
        balance and interest rate stay similar. Over a decade, using our{" "}
        <Link href="/calculators/compound-interest-calculator-uk">
          Compound Interest Calculator
        </Link>{" "}
        to project it forward, that gap compounds into a genuinely significant
        difference, on top of the tax saved each year along the way.
      </p>

      <CalloutBox
        title="Project your own ISA growth"
        description="Enter your ISA type, starting balance and monthly contribution for an instant tax-free growth projection."
        href="/calculators/isa-calculator-uk"
        cta="Calculate my ISA growth"
      />

      <h2 id="which-isa-is-right">Which ISA is right for you</h2>
      <p>
        If you want easy access and no investment risk, a Cash ISA is the
        straightforward choice. If you're saving for something 5 years or more away
        and can accept some ups and downs along the way, a Stocks and Shares ISA
        gives your money more room to grow. If a first home or retirement is the
        specific goal and you're eligible by age, the Lifetime ISA's 25% bonus is
        hard to beat, provided you're confident you won't need the money for anything
        else. Many people end up using a mix, a Cash ISA for an emergency fund
        alongside our{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          Savings Goal Calculator
        </Link>
        , and a Stocks and Shares ISA for longer-term growth. For retirement
        specifically, it's also worth comparing how an ISA fits alongside a workplace
        or private pension using our{" "}
        <Link href="/calculators/pension-calculator-uk">Pension Calculator</Link>,
        since pensions come with their own tax relief on the way in, which an ISA
        doesn't.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <ul>
        <li>
          <strong>Letting the allowance go to waste.</strong> Because it resets every
          6 April with no carry-forward, not using your ISA allowance in a given year
          means that space is gone for good.
        </li>
        <li>
          <strong>Opening a Lifetime ISA without checking eligibility carefully.</strong>{" "}
          You must open one before your 40th birthday, and the 25% early withdrawal
          charge catches many people who assumed they could dip into it freely.
        </li>
        <li>
          <strong>Overlooking that ISA money still counts for Inheritance Tax.</strong>{" "}
          Unlike a pension, savings held in an ISA are still part of your estate when
          you die, even though they grew tax-free during your lifetime.
        </li>
        <li>
          <strong>Choosing Cash over Stocks and Shares purely out of habit.</strong>{" "}
          For genuinely long-term goals, holding everything in cash can mean growth
          struggles to keep pace with inflation, whereas a Stocks and Shares ISA at
          least has the potential to do better over many years, alongside more risk.
        </li>
      </ul>
      <p>
        For more on how tax-free growth compounds over time, see our explainer on{" "}
        <Link href="/blog/compound-interest-explained-uk">
          how compound interest actually works
        </Link>
        .
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
