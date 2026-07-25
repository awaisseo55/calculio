import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "gross-rate-misleading", label: "Why your gross rate is misleading" },
  { id: "subtract-tax-ni", label: "Subtracting tax and National Insurance" },
  { id: "subtract-expenses", label: "Subtracting business expenses" },
  { id: "subtract-unbilled-hours", label: "Subtracting unbilled hours" },
  { id: "the-formula", label: "A simple formula for your true rate" },
  { id: "worked-example", label: "Worked example: needing £45,000 net" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Work out your own rate" },
];

export const faq: FaqItem[] = [
  {
    question: "Why is my true hourly rate lower than the rate I quote clients?",
    answer:
      "The rate you quote is usually your gross billable rate. Your true hourly rate, once you divide your actual take-home pay by every hour you spend working, including unpaid admin and sales time, is almost always lower, because not every working hour is billable and tax and expenses come out of what you earn.",
  },
  {
    question: "How many hours a year does a freelancer typically bill?",
    answer:
      "It varies widely, but a common estimate for a full-time freelancer is somewhere between 900 and 1,200 billable hours a year, after accounting for holidays, sickness, admin, marketing and finding new clients. This is often well under half of the roughly 2,000 hours a full-time employee works in a year.",
  },
  {
    question: "Should I charge the same rate as an equivalent employed salary suggests?",
    answer:
      "No. An employed salary already has employer National Insurance, pension contributions, holiday pay, sick pay, training and equipment covered by the employer. A freelancer needs to cover all of this themselves through their rate, on top of the tax and unbilled time every freelancer faces, so a fair freelance rate is usually meaningfully higher than an equivalent gross salary divided by hours.",
  },
  {
    question: "How do I account for holidays and sick pay as a freelancer?",
    answer:
      "As a freelancer, you do not get paid holiday or sick pay unless you build the cost of it into your rate. This means budgeting for the weeks you will not be working, whether through choice or illness, when working out how many hours you actually need to bill across the year to hit your income target.",
  },
  {
    question: "Does VAT affect my freelance rate?",
    answer:
      "If you are VAT registered, you charge VAT on top of your rate and pass it to HMRC, so it should not reduce your own income if handled correctly. It does affect how your rate compares to a non-VAT-registered competitor's headline price, since a VAT-registered freelancer's quote often looks higher before the client accounts for reclaiming the VAT themselves, if they are VAT registered too.",
  },
  {
    question: "What if clients push back on my calculated rate?",
    answer:
      "It happens, and it is worth knowing your true minimum rate before any negotiation starts, so you know how far you can realistically go without working at a loss. If a client's budget is genuinely below what you need to charge, it is often better to decline or adjust the scope than to accept a rate that does not cover your real costs.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Plenty of freelancers price their work by picking a number that
        sounds reasonable, or by matching what a competitor charges,
        without ever working out what they actually need to earn. This
        guide walks through a simple formula for finding your true hourly
        rate: the number that actually covers your tax, expenses, and all
        the unpaid hours that come with running your own business. It sits
        in our <Link href="/categories/tax">Tax category</Link>, alongside
        our other self-employed calculators.
      </p>

      <CalloutBox
        title="Work out your self-employed tax bill"
        description="Enter your profit and expenses for an instant Income Tax and Class 4 National Insurance breakdown."
        href="/calculators/self-employed-tax-calculator-uk"
        cta="Open the calculator"
      />

      <h2 id="gross-rate-misleading">Why your gross rate is misleading</h2>
      <p>
        A freelancer quoting £50 an hour might assume that working full time
        brings in roughly £100,000 a year, based on a standard 2,000-hour
        working year. In reality, almost nobody freelancing full time bills
        anywhere near that many hours, and a large chunk of whatever is
        billed disappears to tax, National Insurance and business costs
        before it becomes take-home pay. Your quoted rate and your true
        rate, what you actually keep per hour worked, including unbilled
        time, are usually very different numbers.
      </p>
      <p>
        This gap catches out a lot of people moving from employment into
        freelancing for the first time. An employed salary already has
        employer National Insurance, a pension contribution, paid holiday,
        sick pay, training, and often equipment all covered on top of the
        headline number. A freelancer has to build the cost of all of that
        into their own rate, since none of it is provided for free anymore.
        Working out a true rate properly, rather than guessing, is the only
        reliable way to know whether a given piece of work is actually worth
        taking on.
      </p>

      <h2 id="subtract-tax-ni">Subtracting tax and National Insurance</h2>
      <p>
        As a self-employed sole trader, you pay Income Tax and Class 4
        National Insurance on your profit, the amount left after business
        expenses. Our{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        covers this in full, but the short version is that a meaningful
        share of your billed income, often somewhere between 15% and 30%
        depending on how much you earn, goes to HMRC rather than into your
        pocket. Any true rate calculation has to start from what you need
        to take home, then work backwards to what you need to earn before
        tax.
      </p>

      <h2 id="subtract-expenses">Subtracting business expenses</h2>
      <p>
        Software subscriptions, insurance, equipment, a portion of home
        working costs, and professional fees all come out of your revenue
        before you get to keep any of it as profit. These vary a lot by
        profession, from a few hundred pounds a year for a low-overhead
        freelance writer to several thousand for someone who needs
        specialist equipment or software licences. Whatever your figure is,
        it needs adding to your income target before you calculate a rate,
        since it is money you need to bill for but never get to keep.
      </p>

      <h2 id="subtract-unbilled-hours">Subtracting unbilled hours</h2>
      <p>
        This is the step most freelancers skip, and it is usually the
        biggest gap between the quoted rate and the true rate. A full year
        of work is roughly 46 to 48 working weeks once holiday and public
        holidays are accounted for, at perhaps 5 days a week. But not every
        one of those days is spent on billable client work: time also goes
        on admin, invoicing, finding new clients, proposals, and simply
        running the business. A common rule of thumb is that somewhere
        around 60% to 75% of working time ends up billable for an
        established freelancer, and often less for someone still building
        their client base.
      </p>
      <p>
        It also pays to remember that holidays and sick days are unpaid by
        default for a freelancer. If you want two weeks off in the summer
        and expect to lose a few days a year to illness, that time needs to
        be planned into your working weeks upfront rather than discovered
        as a shortfall in December. Building this buffer into your billable
        hours calculation from the start avoids the common trap of pricing
        as though every single week of the year will be a full, healthy,
        uninterrupted working week.
      </p>

      <h2 id="the-formula">A simple formula for your true rate</h2>
      <p>
        Putting it together, a workable formula is:
      </p>
      <p>
        <strong>
          Required hourly rate = (Target net income + Income Tax + Class 4
          NI + Annual business expenses) &divide; Billable hours per year
        </strong>
      </p>
      <p>
        The tricky part is that Income Tax and Class 4 NI depend on your
        profit, which depends on your rate, so working it out by hand means
        a bit of trial and error. Our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/take-home-pay-calculator-uk">
          take-home pay calculator
        </Link>{" "}
        can help you check the tax side of this quickly for any profit
        figure you are testing.
      </p>

      <h2 id="worked-example">Worked example: needing £45,000 net</h2>
      <p>
        Take a freelancer who wants <strong>£45,000</strong> in actual
        take-home pay for the year, after tax, and estimates{" "}
        <strong>£3,000</strong> in annual business expenses.
      </p>
      <p>
        To net £45,000 after Income Tax and Class 4 National Insurance, this
        freelancer needs a profit of around <strong>£58,100</strong>, made
        up of roughly £10,700 in Income Tax and £2,400 in Class 4 NI on top
        of the £45,000 they keep. Adding the £3,000 of expenses on top,
        their required annual revenue, the total they need to bill clients,
        comes to around <strong>£61,100</strong>.
      </p>
      <RateTable
        caption="Worked example: freelancer needing £45,000 net take-home pay"
        columns={["Item", "Amount"]}
        rows={[
          ["Target net take-home pay", "£45,000"],
          ["Income Tax", "£10,666"],
          ["Class 4 National Insurance", "£2,418"],
          ["Annual business expenses", "£3,000"],
          ["Required annual revenue", "£61,084"],
        ]}
        highlightLastRow
      />
      <p>
        Now for the working pattern. Assume roughly 46 working weeks a year
        at 5 days a week, giving 230 working days, of which around 70% end
        up billable at 6 hours a day, working out at about{" "}
        <strong>966 billable hours</strong> across the year.
      </p>
      <p>
        Dividing £61,084 by 966 billable hours gives a required rate of
        around <strong>£63 an hour</strong>. Interestingly, this is higher
        than the roughly £59,400 gross salary an equivalent employee would
        need to net the same £45,000, even though self-employed Class 4 NI
        rates are lower than employee National Insurance. The gap comes
        entirely from business expenses and the reality that a large share
        of a freelancer&apos;s working time is never billable at all, both costs
        an employer would otherwise absorb.
      </p>
      <p>
        Try running your own numbers through our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>
        , and check how VAT would affect your pricing once you approach the
        registration threshold with our{" "}
        <Link href="/calculators/vat-calculator-uk">VAT calculator</Link>.
      </p>
      <p>
        It is worth revisiting this calculation at least once a year, since
        your expenses, tax position, and the amount of admin time your
        business needs all tend to shift as you grow. A rate that worked
        perfectly in your first year of freelancing can quietly fall behind
        once your workload, costs, or tax band changes, so treat your true
        rate as something to check regularly rather than a figure you set
        once and forget.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
