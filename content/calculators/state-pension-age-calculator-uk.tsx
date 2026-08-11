import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "What is the current UK State Pension age?",
    answer:
      "State Pension age is currently 66 for everyone, having been fully equalised between men and women in November 2018. It is rising to 67 for people born between 6 April 1960 and 5 April 1977, with the increase phased in gradually between 2026 and 2028.",
  },
  {
    question: "When will the State Pension age rise to 68?",
    answer:
      "Under current law, State Pension age is due to rise to 68 for anyone born on or after 6 April 1977, phased in between 2044 and 2046. This later increase has been reviewed by government more than once and the exact timing could still change, so treat it as a long-range estimate rather than a fixed date if it applies to you.",
  },
  {
    question: "Why can't the calculator give me an exact date if I was born in 1960 or early 1961?",
    answer:
      "The rise from 66 to 67 is phased in gradually for people born between 6 April 1960 and 5 March 1961, with the exact date depending on your specific month of birth. This is a narrow, month-by-month schedule set out in law, so for anyone born in this window, the official GOV.UK State Pension age checker will give you the precise date rather than an estimate.",
  },
  {
    question: "Does the State Pension start automatically when I reach State Pension age?",
    answer:
      "No, you need to claim it. The Department for Work and Pensions normally writes to you around four months before you reach State Pension age with instructions on how to claim, but if you have not heard anything as your State Pension age approaches, you can start a claim yourself through GOV.UK.",
  },
  {
    question: "How much State Pension will I actually get?",
    answer:
      "The full new State Pension requires 35 qualifying years of National Insurance contributions or credits, and you generally need at least 10 years to get anything at all. If you have gaps in your record, your amount will be lower than the full rate shown by this calculator, so it is worth checking your personal forecast on GOV.UK.",
  },
  {
    question: "Is State Pension age the same as my workplace pension retirement age?",
    answer:
      "No, these are separate. State Pension age is set by the government and applies to everyone. Your workplace or personal pension can usually be accessed earlier, often from age 55 rising to 57 from 2028, though drawing it early reduces the amount available later, so it is worth planning both together.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        State Pension age is not the same for everyone, and it has been
        rising gradually for years. This calculator uses your date of birth
        and the official GOV.UK timetable to estimate your State Pension
        age, the date you will reach it, and an illustrative full new State
        Pension amount to help you plan ahead.
      </p>

      <h2>How to use the State Pension age calculator</h2>
      <p>
        Enter your date of birth. The calculator applies the legal State
        Pension age timetable to work out whether your State Pension age is
        66, 67 or 68, the approximate date you reach it, and how many years
        away that is. If your date of birth falls within the narrow band
        where the age is transitioning month by month, the calculator flags
        this and points you to the official GOV.UK checker for your exact
        date, rather than guessing.
      </p>

      <h2>How State Pension age works</h2>
      <p>
        State Pension age is currently 66, for both men and women, following
        a long process of equalisation completed in 2018. It is now rising
        to 67, with the increase phased in for anyone born between 6 April
        1960 and 5 April 1977. Under the current law, it is due to rise
        again to 68 for anyone born on or after 6 April 1977, phased in
        between 2044 and 2046, though this later change has been reviewed by
        government before and its exact timing is not fully settled.
      </p>
      <p>
        Reaching State Pension age is not automatic: the Department for Work
        and Pensions usually writes to you a few months beforehand with
        instructions on how to claim. Your State Pension amount also depends
        on your own National Insurance record, not just your date of birth,
        so the figure this calculator shows is illustrative, based on a full
        35-year record.
      </p>

      <h2>Worked example</h2>
      <p>
        Someone born on <strong>10 October 1970</strong> falls after the
        1960 to 1961 transition window, so their State Pension age is a
        clean <strong>67</strong>. Adding 67 years to their date of birth
        gives a State Pension date of <strong>10 October 2037</strong>. With
        a full 35-year National Insurance record, they could expect the
        illustrative full new State Pension rate shown in the calculator, a
        useful starting point when planning retirement income alongside any
        workplace or personal pension.
      </p>
      <p>
        By contrast, someone born in December 1960 sits right in the
        transition window between 66 and 67, so this calculator flags that
        their exact date needs checking on GOV.UK rather than showing a
        specific date, since the transition is staggered by month of birth
        during that short window.
      </p>

      <h2>Common mistakes to avoid</h2>
      <p>
        A common mistake is assuming State Pension age is still 65, or that
        it is different for men and women, both of which stopped being true
        some years ago. Another is confusing State Pension age with the age
        you can access a workplace or personal pension, which is usually
        much earlier and controlled by different rules entirely.
      </p>
      <p>
        It is also easy to assume you will automatically receive the full
        new State Pension rate. In reality, your amount depends on your
        National Insurance record, and gaps from time spent abroad,
        self-employment with low profits, or periods without qualifying
        credits can all reduce what you actually receive, so checking your
        personal forecast is worthwhile well before you reach State Pension
        age.
      </p>

      <h2>Related calculators</h2>
      <p>
        Use our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        to project your workplace or personal pension pot alongside your
        State Pension, and our{" "}
        <Link href="/calculators/winter-fuel-payment-calculator-uk">
          Winter Fuel Payment calculator
        </Link>{" "}
        to check your eligibility once you reach State Pension age. If you
        are still building up retirement savings, our{" "}
        <Link href="/calculators/isa-calculator-uk">ISA calculator</Link>{" "}
        and{" "}
        <Link href="/calculators/savings-goal-calculator-uk">
          savings goal calculator
        </Link>{" "}
        can help you plan alongside your State Pension. For more detail on
        how the State Pension works, read our{" "}
        <Link href="/blog/uk-state-pension-guide-2026">
          UK State Pension guide
        </Link>
        .
      </p>
    </div>
  );
}
