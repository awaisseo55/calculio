import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "Why does my age in years sometimes differ from a simple subtraction?",
    answer:
      "Simply subtracting birth year from the current year can be off by one if your birthday hasn't happened yet this year. This calculator works out your exact age by comparing full calendar dates — year, month and day — so it correctly accounts for whether your birthday has already passed in the current year.",
  },
  {
    question: "How is the total number of days calculated?",
    answer:
      "It's a direct count of every calendar day between your date of birth and the 'as of' date, including leap years. This is different from simply multiplying years by 365, which would be slightly inaccurate over a long enough timespan because of the extra day added in leap years roughly every four years.",
  },
  {
    question: "Can I calculate my age on a future or past date, not just today?",
    answer:
      "Yes — change the 'calculate age as of' field to any date you like. This is useful for working out how old you'll be on a specific future date (like a wedding or retirement date), or how old you were on a specific date in the past.",
  },
  {
    question: "Why would I want to know my age in weeks or hours?",
    answer:
      "It's mostly for fun or curiosity — seeing your age in total days, weeks or hours can put a milestone birthday into perspective in a way that 'years' alone doesn't. Some people also use these figures for personal projects, journalling, or marking a specific numerical milestone, like your 10,000th day alive.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h2>How to use the age calculator</h2>
      <p>
        Enter your date of birth, and optionally change the &ldquo;as of&rdquo; date if
        you want to calculate your age on a date other than today. The calculator
        instantly shows your exact age in years, months and days, your total days,
        weeks and hours lived, the day of the week you were born on, and a countdown to
        your next birthday.
      </p>
      <p>
        It&apos;s a small, simple tool, but a surprisingly common one to need — whether
        you&apos;re filling in a form that wants your exact age, settling a debate about
        who&apos;s older, or just curious how many days you&apos;ve actually been alive.
      </p>

      <h2>How the calculation works</h2>
      <p>
        Working out an exact age isn&apos;t quite as simple as subtracting your birth
        year from the current year — that approach can be off by one, because it
        doesn&apos;t account for whether your birthday has happened yet this year. This
        calculator compares full calendar dates properly: it works out the difference in
        years, then adjusts the month and day count depending on whether your birth date
        has occurred yet in the current month and year, borrowing days and months
        correctly the same way you would with long subtraction.
      </p>
      <p>
        For the total days, weeks and hours figures, the calculator counts every actual
        calendar day between your date of birth and the &ldquo;as of&rdquo; date,
        correctly including the extra day added in every leap year — rather than
        assuming every year has exactly 365 days, which would drift increasingly
        inaccurate the further back your birth date is.
      </p>

      <h2>Worked example</h2>
      <p>
        Someone born on <strong>15 June 1990</strong>, checking their age on{" "}
        <strong>25 July 2026</strong>, would be shown as{" "}
        <strong>36 years, 1 month and 10 days</strong> old. That&apos;s a total of
        roughly <strong>13,189 days</strong>, or about <strong>1,884 weeks</strong>,
        since their birth — equivalent to just over{" "}
        <strong>316,500 hours</strong> lived. Their next birthday, 15 June 2027, would
        be shown as a live countdown of days remaining.
      </p>
      <p>
        Because 15 June 1990 falls before 25 July in the calendar year, the calculator
        correctly counts a full extra month into the age (June has already passed by
        July), which is exactly the kind of edge case that trips up a naive
        year-subtraction approach.
      </p>

      <h2>Why day of the week matters</h2>
      <p>
        The day of the week you were born on is determined purely by the calendar — it
        cycles in a fixed pattern based on the date, including how leap years shift the
        pattern slightly each year. It&apos;s a popular bit of trivia (there&apos;s an
        old rhyme, &ldquo;Monday&apos;s child is fair of face...&rdquo;, built entirely
        around it), and this calculator works it out instantly from your date of birth.
      </p>

      <h2>Practical uses for exact age</h2>
      <p>
        Beyond curiosity, knowing your precise age can matter for legal and
        administrative purposes — some forms, applications and eligibility checks ask
        for age in exact years and months, not just a birth date. It&apos;s also useful
        for working out someone&apos;s age on a specific past or future date, such as
        checking how old you&apos;ll be at retirement, or how old a family member was on
        a significant historical date.
      </p>

      <h2>Related calculators</h2>
      <p>
        If you&apos;re working out important dates for a pregnancy rather than a
        birthday, try our{" "}
        <Link href="/calculators/pregnancy-due-date-calculator-uk">
          pregnancy due date calculator
        </Link>
        . For quick maths on percentages and proportions, see our{" "}
        <Link href="/calculators/percentage-calculator">percentage calculator</Link>.
      </p>
    </div>
  );
}
