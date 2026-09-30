import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "rent-affordability-rules", label: "Rent affordability rules" },
  { id: "gross-vs-take-home", label: "Gross income vs take-home pay" },
  { id: "worked-example", label: "Worked example" },
  { id: "what-landlords-check", label: "What landlords and agents check" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Try the calculator" },
];

export const faq: FaqItem[] = [
  {
    question: "How much rent can I afford on my salary in the UK?",
    answer:
      "A common guide is to keep rent near 30% of gross income, but the right figure depends on take-home pay, bills, debts and savings. Use the rent affordability calculator to test both income rules and real monthly cash flow.",
  },
  {
    question: "Why do letting agents ask for 30 times the monthly rent?",
    answer:
      "Some agents use annual income of at least 30 times the monthly rent as a quick affordability screen. It is not a law, and each landlord or agent can use different criteria.",
  },
  {
    question: "Should rent be 30% of gross or net income?",
    answer:
      "The 30% rule usually refers to gross income, before tax. For your own budget, take-home pay matters more because bills, food and debt payments come out of money you actually receive.",
  },
  {
    question: "Can savings help with a rental affordability check?",
    answer:
      "Sometimes, especially if income is irregular or you are between jobs, but it depends on the landlord or agent. You may still need a guarantor or extra evidence of affordability.",
  },
  {
    question: "Do benefits count as income for renting?",
    answer:
      "Some landlords and agents consider benefits income, while others apply stricter rules. Check the letting criteria before paying any holding deposit.",
  },
  {
    question: "What should I do if my rent is becoming unaffordable?",
    answer:
      "Speak to your landlord early and get free advice from a council housing team or debt advice charity if you are struggling. Do not ignore arrears, as the options are usually better when you act quickly.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        &ldquo;How much rent can I afford?&rdquo; is one of the most practical money
        questions in the UK. Rent is often the biggest monthly payment after tax,
        and a flat that looks affordable on a listing can feel very different once
        council tax, energy, broadband, travel, food and debt payments are added.
        This guide explains the common rent affordability rules, how letting agents
        may assess income, and how to test a rent figure against your real monthly
        budget.
      </p>

      <h2 id="rent-affordability-rules">Rent affordability rules</h2>
      <p>
        The most common rule of thumb is the 30% rule. It says rent should be
        around 30% of gross income, meaning income before tax. If you earn £36,000
        a year, your gross monthly income is £3,000, and 30% of that is £900. This
        is a simple guide, not a guarantee that £900 rent will feel easy.
      </p>
      <p>
        Letting agents may use a different version: annual income should be at
        least 30 times the monthly rent. A £1,000 monthly rent would therefore
        require around £30,000 of annual income. Some agents use 2.5 times annual
        rent, which is mathematically similar. Others use stricter checks,
        especially where a tenant has irregular income, probationary employment,
        poor credit history or no UK renting record.
      </p>
      <p>
        MoneyHelper frames rent affordability as a budget question, not just an
        income test. That is the right way to think about it. A person earning
        £45,000 with high commuting costs and loan payments may have less spare
        monthly cash than someone earning less but living close to work with no
        debts.
      </p>

      <h2 id="gross-vs-take-home">Gross income vs take-home pay</h2>
      <p>
        Gross income is useful because it is easy to prove. Payslips, P60s and
        employment contracts all show income before tax. Letting agents like
        simple checks because they can apply them quickly across many applicants.
      </p>
      <p>
        Your own decision should also use take-home pay. The{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can estimate your monthly pay after Income Tax, National Insurance,
        pension and student loan deductions. Once you know that figure, subtract
        bills that are not optional: council tax, energy, water, phone, broadband,
        travel, childcare, food and debt payments. The remaining amount is what
        has to cover rent, savings, social spending and surprises.
      </p>
      <p>
        This is where our{" "}
        <Link href="/calculators/rent-affordability-calculator-uk">
          rent affordability calculator
        </Link>{" "}
        helps. It combines the 30% gross income rule, the 30 times rent rule, and
        a cash-flow check based on take-home pay.
      </p>

      <h2 id="worked-example">Worked example</h2>
      <p>
        Imagine Priya earns £42,000 a year and takes home about £2,800 a month.
        She has £650 of monthly bills excluding rent, plus £150 of debt payments.
        The 30% gross income rule gives a rent guide of £1,050 a month. The 30
        times rent check suggests up to £1,400 a month. Her cash-flow check leaves
        £2,000 after bills and debts. If she keeps rent to 60% of that remaining
        amount, the cash-flow rent guide is £1,200.
      </p>
      <p>
        The cautious answer is the lowest of the three, £1,050. She might still
        choose a higher rent if she has savings, a short commute or unusually low
        food and social costs, but she would be doing so knowingly. She could also
        use the{" "}
        <Link href="/calculators/split-bill-calculator-uk">split bill calculator</Link>{" "}
        if she is renting with a partner or housemate.
      </p>

      <CalloutBox
        title="Check your rent budget"
        description="Enter your income, take-home pay, bills and debt payments to estimate a sensible monthly rent range."
        href="/calculators/rent-affordability-calculator-uk"
        cta="Calculate rent affordability"
      />

      <h2 id="what-landlords-check">What landlords and agents check</h2>
      <p>
        A rent affordability check is not only a calculator result. Landlords and
        agents may ask for payslips, bank statements, employer references, proof
        of savings, a guarantor, right to rent checks and previous landlord
        references. Self-employed applicants may be asked for tax calculations,
        accounts or several months of bank statements.
      </p>
      <p>
        If your income is irregular, prepare evidence before viewing. A freelancer
        may want to use the{" "}
        <Link href="/calculators/freelance-day-rate-calculator-uk">
          freelance day rate calculator
        </Link>{" "}
        alongside bank statements to sense-check income. If debt payments are a
        concern, the{" "}
        <Link href="/calculators/debt-to-income-calculator-uk">
          debt-to-income calculator
        </Link>{" "}
        can show how much monthly pressure already exists.
      </p>

      <h2 id="common-mistakes">Common mistakes</h2>
      <p>
        The first mistake is treating agent approval as proof that the rent is
        comfortable. A landlord may approve an applicant who will still feel
        stretched. The second is forgetting upfront costs: holding deposit, tenancy
        deposit, first month&apos;s rent, moving van, furniture and utility changes.
        The third is assuming bills will stay stable. Read our{" "}
        <Link href="/blog/reduce-uk-energy-bills-2026">reduce UK energy bills guide</Link>{" "}
        if energy costs are a large part of your budget.
      </p>
      <p>
        If renting is part of a longer plan to buy, compare it with our{" "}
        <Link href="/blog/mortgage-deposit-uk-2026">mortgage deposit guide</Link>{" "}
        and use the{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        to work out how much to set aside each month.
      </p>
    </div>
  );
}
