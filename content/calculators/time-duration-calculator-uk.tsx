import Link from "next/link";
import type { FaqItem } from "@/lib/types";

export const faq: FaqItem[] = [
  {
    question: "How do I calculate hours worked between two times?",
    answer:
      "Enter your start time and end time and this calculator works out the total duration, then subtracts any unpaid break you took. It handles overnight shifts too, so if your end time is earlier than your start time, it assumes the shift crosses midnight.",
  },
  {
    question: "What are decimal hours and why do they matter for payroll?",
    answer:
      "Decimal hours express time worked as a single number, such as 7.5 hours rather than 7 hours 30 minutes, which is the format most payroll and timesheet systems use for calculating pay. This calculator gives you both formats so you can use whichever your employer or invoicing system needs.",
  },
  {
    question: "Should I include my lunch break in the hours I log?",
    answer:
      "That depends on whether your break is paid or unpaid under your contract. Most standard lunch breaks are unpaid, so entering the break length here deducts it from your total paid hours. Check your contract or ask your employer if you are unsure how your breaks are treated.",
  },
  {
    question: "How does this handle a night shift that crosses midnight?",
    answer:
      "If you enter an end time that is earlier than your start time, such as starting at 22:00 and finishing at 06:00, the calculator assumes the shift runs overnight and adds 24 hours to the end time before working out the duration.",
  },
  {
    question: "Can I use this to work out freelance or contractor pay?",
    answer:
      "Yes. Enter your start and end time for a piece of work, along with any unpaid breaks, then add your hourly rate to see the total pay for that session. This is useful for freelancers billing by the hour or anyone tracking billable time.",
  },
  {
    question: "Does this calculator account for overtime rates?",
    answer:
      "No, it calculates total time and pay at a single flat hourly rate. If part of your shift is paid at an overtime rate, use our dedicated overtime pay calculator alongside this one to work out the higher rate portion separately.",
  },
];

export function SeoContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Whether you are filling in a timesheet, checking a payslip, or working out billable hours for a client,
        manually adding up hours and minutes is fiddly and easy to get wrong. This calculator works out the exact
        duration between two times, converts it into decimal hours for payroll, and can calculate pay if you add an
        hourly rate.
      </p>

      <h2>How to use the time duration calculator</h2>
      <p>
        Enter your start time and end time using the time pickers, then add any unpaid break you took, such as a
        lunch break. If you want to see your pay for the shift, add your hourly rate too. The calculator
        automatically handles overnight shifts, so you do not need to work out the maths yourself if your shift
        crosses midnight.
      </p>

      <h2>How the calculation works</h2>
      <p>
        The calculator converts your start and end times into minutes since midnight, then subtracts the start from
        the end to get the total shift length. If the end time is earlier than the start time, it treats the shift
        as running overnight and adds a full 24 hours before subtracting. Any unpaid break is then deducted from the
        total, and the result is shown as hours and minutes, and as decimal hours for payroll purposes. If you enter
        an hourly rate, decimal hours are multiplied by that rate to give total pay.
      </p>

      <h2>Worked example</h2>
      <p>
        Say you start work at <strong>09:00</strong> and finish at <strong>17:30</strong>, with a{" "}
        <strong>30 minute</strong> unpaid lunch break. That is 8 hours 30 minutes between start and finish, minus
        the 30 minute break, giving a total of <strong>8 hours 0 minutes</strong>, or{" "}
        <strong>8.00 decimal hours</strong>. At an hourly rate of <strong>£12.50</strong>, that works out as{" "}
        8 &times; £12.50 = <strong>£100.00</strong> for the shift.
      </p>

      <h2>Common mistakes people make</h2>
      <p>
        A common mistake is forgetting to deduct unpaid breaks, which can overstate paid hours by 30 minutes or more
        per shift, adding up significantly across a working week or month. Another mistake is manually converting
        minutes into decimal hours incorrectly, such as treating 30 minutes as 0.3 hours instead of the correct
        0.5, which throws off any pay calculation based on it. For overnight shifts, people sometimes calculate a
        negative duration by subtracting the times directly without accounting for the shift crossing midnight,
        which this calculator handles automatically.
      </p>

      <h2>Related calculators</h2>
      <p>
        Once you have your total hours, our{" "}
        <Link href="/calculators/overtime-pay-calculator-uk">overtime pay calculator</Link> can work out pay for any
        hours above your standard contracted hours. If you are paid an annual salary but want to know your effective
        hourly rate, try our{" "}
        <Link href="/calculators/salary-to-hourly-calculator-uk">salary to hourly calculator</Link>, and our{" "}
        <Link href="/calculators/minimum-wage-calculator-uk">minimum wage calculator</Link> checks your hourly pay
        against the current legal minimum. Freelancers setting their rates may also find our guide to{" "}
        <Link href="/blog/freelancer-hourly-rate-uk-2026">working out a freelancer hourly rate</Link> useful.
      </p>
    </div>
  );
}
