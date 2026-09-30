import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How much rent can I afford in the UK?",
    answer:
      "A common guide is to keep rent around 30% of gross income, but your real limit depends on take-home pay, bills, debts and savings. Some letting agents also use an income multiple, such as annual income being at least 30 times the monthly rent.",
  },
  {
    question: "Do letting agents use gross or net income?",
    answer:
      "Many affordability checks start with gross annual income because it is easy to verify from payslips or accounts. Your own budget should also use take-home pay, since that is what you actually have available each month.",
  },
  {
    question: "Does Universal Credit count towards rent affordability?",
    answer:
      "Some landlords and agents may consider benefits income, but policies vary. If you receive Universal Credit or housing support, check the exact letting criteria before paying holding deposits or application costs.",
  },
  {
    question: "Should bills be included in rent affordability?",
    answer:
      "Yes, for your personal budget. Rent may pass an agent's income test but still feel unaffordable once council tax, energy, water, broadband, travel and food are included.",
  },
  {
    question: "What if rent is more than 30% of my income?",
    answer:
      "That does not automatically mean it is impossible, especially in expensive areas. It does mean you should check the full monthly budget carefully and avoid relying on best-case assumptions.",
  },
  {
    question: "Is this rental advice?",
    answer:
      "No. This is a budgeting estimate, not legal, housing or financial advice. Speak to a qualified adviser, council housing team or debt charity if rent is becoming unaffordable.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Renting can be stressful when prices move faster than wages. This UK rent affordability calculator gives
        you a practical rent range from your income, take-home pay, bills and existing debts. It combines three
        views: a 30% gross income guide, a common letting-agent income multiple, and a simple monthly cash-flow
        check.
      </p>

      <h2>How to use this rent affordability calculator</h2>
      <p>
        Enter your gross annual income, monthly take-home pay, bills excluding rent, monthly debt payments, and the
        rent you want to check. The calculator shows a suggested maximum rent and how your target rent compares
        with your income. If you need a take-home estimate first, use our{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay calculator</Link>
        . If you split rent with another person, the{" "}
        <Link href="/calculators/split-bill-calculator-uk">split bill calculator</Link>{" "}
        can help divide rent, bills and deposits fairly. If renting delays your deposit plan, try the{" "}
        <Link href="/calculators/savings-goal-calculator-uk">savings goal calculator</Link>
        .
      </p>

      <h2>The method explained in plain English</h2>
      <p>
        The 30% rule says rent should ideally be no more than 30% of gross monthly income. Some UK letting checks
        use a similar income multiple, often annual income divided by 30 to estimate the maximum monthly rent. This
        is not a law, and landlords can set their own criteria. The calculator also checks your budget after bills
        and debt payments, because passing a headline income test does not mean the rent will feel comfortable.
      </p>
      <p>
        MoneyHelper explains rent affordability as a budgeting question, not only an income question. Council tax,
        energy, travel, broadband, food and debt payments can change what is realistic. This calculator therefore
        uses the lowest of the three guides as the suggested maximum, so the result is deliberately cautious.
      </p>

      <h2>Worked example</h2>
      <p>
        Suppose you earn £42,000 a year before tax and take home about £2,800 a month. You spend £650 a month on
        bills excluding rent and £150 on debt payments. The 30% gross income guide gives £1,050 a month. The 30
        times income rule gives £1,400 a month. The budget check leaves £2,000 after bills and debts, then treats
        60% of that as a cautious rent limit, or £1,200. The suggested maximum is therefore £1,050 because it is the
        lowest of the three.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is looking only at salary and ignoring take-home pay. Student loan repayments, pension
        contributions and tax can make a big difference. Another mistake is forgetting moving costs, deposits,
        furniture and the first month&apos;s rent. Our{" "}
        <Link href="/blog/first-home-cost-uk-2026">first home cost guide</Link>{" "}
        is buyer-focused, but the same habit of listing upfront costs helps renters too. It is also worth reading
        our{" "}
        <Link href="/blog/how-much-mortgage-can-i-afford-uk-2026">
          mortgage affordability guide
        </Link>{" "}
        if you are comparing renting with buying.
      </p>

      <h2>Related calculators</h2>
      <p>
        Start with the{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">take-home pay calculator</Link>{" "}
        if you need your net monthly income. Use the{" "}
        <Link href="/calculators/split-bill-calculator-uk">split bill calculator</Link>{" "}
        for house shares, the{" "}
        <Link href="/calculators/savings-goal-calculator-uk">savings goal calculator</Link>{" "}
        for deposits and moving costs, and the{" "}
        <Link href="/calculators/debt-to-income-calculator-uk">debt-to-income calculator</Link>{" "}
        to see how debt payments affect your wider affordability.
      </p>
    </div>
  );
}
