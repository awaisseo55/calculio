import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import { RateTable } from "@/components/blog/rate-table";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-self-assessment", label: "What is self-assessment?" },
  { id: "registering-hmrc", label: "Registering with HMRC" },
  { id: "income-tax-self-employed", label: "Income Tax on your profits" },
  { id: "national-insurance", label: "Class 2 and Class 4 National Insurance" },
  { id: "allowable-expenses", label: "Allowable business expenses" },
  { id: "worked-example", label: "Worked example: £45,000 profit" },
  { id: "payments-on-account", label: "Payments on account explained" },
  { id: "sole-trader-vs-limited-company", label: "Sole trader or limited company?" },
  { id: "common-mistakes", label: "Common mistakes to avoid" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your own tax bill" },
];

export const faq: FaqItem[] = [
  {
    question: "How much tax will I pay on £45,000 self-employed profit?",
    answer:
      "On a £45,000 profit with no other income, your first £12,570 is tax-free under the Personal Allowance, and the remaining £32,430 falls entirely within the Basic Rate band, taxed at 20%. That gives an Income Tax bill of £6,486. Class 4 National Insurance adds a further £1,945.80 (6% on profits between £12,570 and £50,270), taking your combined Income Tax and Class 4 NI bill to £8,431.80.",
  },
  {
    question: "Do I still need to pay Class 2 National Insurance?",
    answer:
      "Since 6 April 2024, Class 2 National Insurance is no longer compulsory. If your profits are above the small profits threshold (£6,845), you're treated as having paid Class 2 for State Pension purposes without actually being charged. If your profits are below that threshold, you can still choose to pay it voluntarily, at £3.45 a week, to protect your State Pension and benefit entitlement record.",
  },
  {
    question: "What expenses can I claim as a sole trader?",
    answer:
      "You can claim expenses that are wholly and exclusively for business purposes, including office costs, travel, a proportion of home working costs, professional fees, marketing, and stock or materials. You can't claim personal expenses, client entertainment, or the cost of the products or services you're selling to yourself. HMRC's simplified expenses scheme offers flat rates for things like working from home and business mileage, which can save time on record keeping.",
  },
  {
    question: "When do I need to file my self-assessment return?",
    answer:
      "The tax year runs from 6 April to 5 April the following year. You need to register with HMRC by 5 October if you're newly self-employed. The online filing deadline is 31 January following the end of the tax year, and this is also the deadline to pay any tax you owe, alongside your first payment on account for the following year if one is due.",
  },
  {
    question: "What are payments on account and why do I owe more than my tax bill?",
    answer:
      "Payments on account are advance payments towards next year's tax bill, based on the assumption that your income will be similar to this year. HMRC splits an estimated bill into two instalments, due 31 January and 31 July, on top of whatever you owe for the year just finished. This is why your first self-assessment bill can feel much larger than expected, since it often includes a year's tax plus 50% of next year's estimated tax in one go.",
  },
  {
    question: "Should I set up a limited company instead of staying a sole trader?",
    answer:
      "It depends on your profit level and circumstances. Sole trader status is simpler to set up and run, with less admin, but a limited company can be more tax-efficient at higher profit levels, since company profits are taxed at Corporation Tax rates and you can choose to draw income as a mix of salary and dividends. There's no single right answer, and it's worth speaking to an accountant once your profits grow, since the calculation changes as your income rises.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Going self-employed means you become responsible for working out and
        paying your own tax, something an employer normally handles for you
        automatically through PAYE. For many first-time sole traders, the
        biggest shock isn&apos;t the tax rate itself, it&apos;s realising there are
        two separate taxes to budget for, plus an advance payment system that
        can make your first bill considerably bigger than expected.
      </p>
      <p>
        This guide walks through exactly how UK self-employed tax works for
        the 2026/27 tax year: registering with HMRC, Income Tax, Class 2 and
        Class 4 National Insurance, what you can and can&apos;t claim as an
        expense, and a full worked example on a realistic profit figure. It
        sits in our <Link href="/categories/tax">Tax category</Link>,
        alongside our other HMRC-based calculators.
      </p>
      <p>
        Whether you are a full-time freelancer, run a small trades business,
        sell goods online, or simply have a side hustle alongside a regular
        job, the same self-assessment rules apply once your self-employed
        income passes certain thresholds. Understanding the system before
        your first tax bill arrives makes a genuine difference: sole traders
        who plan ahead rarely find January stressful, while those who leave
        it until the last minute often do.
      </p>

      <CalloutBox
        title="Work out your total tax bill in seconds"
        description="Enter your profit and expenses to see your Income Tax and Class 4 National Insurance instantly."
        href="/calculators/self-employed-tax-calculator-uk"
        cta="Open the calculator"
      />

      <h2 id="what-is-self-assessment">What is self-assessment?</h2>
      <p>
        Self-assessment is the system HMRC uses to collect Income Tax from
        people whose earnings aren&apos;t automatically taxed through PAYE. If
        you&apos;re self-employed, whether as a sole trader or in a business
        partnership, you&apos;re required to complete a self-assessment tax
        return each year, declaring your income and working out your own tax
        bill, rather than having it deducted automatically from your pay
        packet.
      </p>
      <p>
        Being self-employed doesn&apos;t just mean freelancing full time. If you
        run any kind of side business alongside employed work, from selling
        goods online to driving for a delivery app, you may need to register
        for self-assessment too, once your self-employed income goes above
        £1,000 in a tax year (the trading allowance threshold).
      </p>
      <p>
        It&apos;s worth being clear on the distinction between being
        self-employed and simply occasionally selling unwanted personal
        items, which generally isn&apos;t treated as trading at all. HMRC looks
        at factors such as whether you&apos;re selling regularly, buying items
        specifically to resell at a profit, or offering a genuine service to
        customers. If in doubt, HMRC&apos;s own guidance and helpline can clarify
        whether a particular activity counts as a trade for tax purposes.
      </p>
      <p>
        You can also be both employed and self-employed at the same time,
        which is increasingly common. In that case, your employer continues
        to deduct Income Tax and National Insurance through PAYE on your
        salary as normal, while you separately declare and pay tax on your
        self-employed profits through self-assessment. Your Personal
        Allowance is used against your employment income first, meaning your
        self-employed profit is often taxed at your marginal rate from the
        first pound, since the tax-free allowance has typically already been
        used up by your salary.
      </p>

      <h2 id="registering-hmrc">Registering with HMRC</h2>
      <p>
        You need to register with HMRC as self-employed by <strong>5
        October</strong> following the end of the tax year in which you
        started trading. For example, if you started self-employed work in
        June 2026, you would need to register by 5 October 2027. Registering
        late doesn&apos;t excuse you from paying tax on time, and can lead to
        penalties, so it&apos;s worth registering as soon as your business gets
        going rather than waiting.
      </p>
      <p>
        Once registered, HMRC sets you up for self-assessment and issues a
        Unique Taxpayer Reference (UTR), which you&apos;ll need every time you
        file a return. You&apos;ll then need to file a return and pay any tax
        owed by 31 January each year, covering the tax year that ended the
        previous 5 April.
      </p>
      <p>
        You will also need a Government Gateway account to file online, which
        HMRC sets up as part of the registration process. Keep your UTR and
        login details somewhere safe, since you&apos;ll need them every year,
        not just once. If you&apos;re trading through a business partnership
        rather than as a sole trader, both the partnership itself and each
        individual partner usually need to register separately, and the
        nominated partner is responsible for filing the partnership return on
        top of their own personal return.
      </p>

      <h2 id="income-tax-self-employed">Income Tax on your self-employed profits</h2>
      <p>
        Income Tax for the self-employed works on your <strong>profit</strong>,
        not your total income from sales. Profit is your total business
        income minus your allowable business expenses. The same Personal
        Allowance and tax bands apply as for employed income.
      </p>
      <RateTable
        caption="2026/27 Income Tax bands for England, Wales and Northern Ireland"
        columns={["Band", "Income range", "Rate"]}
        rows={[
          ["Personal Allowance", "Up to £12,570", "0%"],
          ["Basic Rate", "£12,571 to £50,270", "20%"],
          ["Higher Rate", "£50,271 to £125,140", "40%"],
          ["Additional Rate", "Over £125,140", "45%"],
        ]}
      />
      <p>
        If you live in Scotland, a different set of bands applies, with six
        rates instead of three. Our{" "}
        <Link href="/blog/uk-income-tax-2026-27">Income Tax guide</Link>{" "}
        covers the Scottish bands and the wider UK system in full detail.
      </p>
      <p>
        It helps to keep the difference between your <strong>marginal
        rate</strong> and your <strong>effective rate</strong> in mind. Your
        marginal rate is the rate charged on your next pound of profit, which
        jumps from 20% to 40% the moment you cross £50,270. Your effective
        rate is your total tax bill as a percentage of your whole profit,
        which is almost always lower than your marginal rate, since earlier
        portions of your profit are taxed at 0% and 20% before any higher
        rate applies. Many self-employed people overestimate their true tax
        burden because they focus on the marginal rate rather than the
        blended, effective figure.
      </p>

      <h2 id="national-insurance">Class 2 and Class 4 National Insurance</h2>
      <p>
        Self-employed people pay National Insurance separately from Income
        Tax, and there are two classes to know about.
      </p>
      <p>
        <strong>Class 2 National Insurance</strong> became voluntary from 6
        April 2024. If your profits are above the small profits threshold of{" "}
        <strong>£6,845</strong>, you&apos;re treated as having paid Class 2 for
        State Pension and benefit purposes automatically, without being
        charged. Below that threshold, you can choose to pay it voluntarily
        at <strong>£3.45 a week</strong> to protect your National Insurance
        record, which matters for your future State Pension entitlement.
      </p>
      <p>
        <strong>Class 4 National Insurance</strong> is charged on your
        profits above the same lower profits limit used for Income Tax.
      </p>
      <RateTable
        caption="2026/27 Class 4 National Insurance rates"
        columns={["Band", "Profit range", "Rate"]}
        rows={[
          ["Below lower limit", "Up to £12,570", "0%"],
          ["Main rate", "£12,571 to £50,270", "6%"],
          ["Upper rate", "Over £50,270", "2%"],
        ]}
      />
      <p>
        Our{" "}
        <Link href="/calculators/national-insurance-calculator-uk">
          National Insurance calculator
        </Link>{" "}
        can work this out for you alongside your employed NI if you have
        income from both sources.
      </p>

      <h2 id="allowable-expenses">Allowable business expenses</h2>
      <p>
        Expenses reduce your taxable profit, so claiming everything you&apos;re
        entitled to genuinely lowers your tax bill. The general rule is that
        an expense must be <strong>wholly and exclusively</strong> for
        business purposes. Common allowable expenses include:
      </p>
      <ul>
        <li>Office costs: stationery, software subscriptions, and phone or internet bills used for business.</li>
        <li>Travel costs: fuel, parking, train fares and business mileage, though not your regular commute to a single fixed workplace.</li>
        <li>A proportion of home running costs, if you work from home, using either a reasonable calculation or HMRC&apos;s simplified flat rates.</li>
        <li>Marketing and website costs, including advertising and a business website.</li>
        <li>Professional fees, such as accountancy, legal advice, and some types of insurance.</li>
        <li>Stock, raw materials, and direct costs of producing goods or delivering services.</li>
      </ul>
      <p>
        You generally can&apos;t claim personal expenses, clothing beyond
        specific uniforms or protective gear, client entertainment, or fines
        and penalties. Keeping clear, separate records of business spending
        throughout the year, rather than trying to reconstruct them in
        January, makes filing far less stressful.
      </p>
      <p>
        If you buy equipment that lasts beyond a single year, such as a
        laptop, tools, or a vehicle used for business, this usually falls
        under <strong>capital allowances</strong> rather than a simple
        expense. The Annual Investment Allowance lets most sole traders
        deduct the full cost of qualifying equipment from their profit in the
        year of purchase, up to a generous annual limit, rather than spreading
        the cost over several years. This is a separate mechanism from
        day-to-day running expenses, but it can meaningfully reduce your
        taxable profit in a year you invest in new equipment.
      </p>
      <p>
        HMRC&apos;s simplified expenses scheme is worth knowing about if your
        record keeping time is limited. Instead of calculating an exact
        proportion of home costs like heating and electricity, you can claim
        a flat monthly rate based on the hours you work from home each month.
        Similarly, for business mileage in your own vehicle, you can claim a
        flat rate per mile (45p for the first 10,000 business miles in a tax
        year, 25p after that, for cars) instead of tracking actual fuel and
        running costs. These flat rates trade a small amount of precision for
        a large amount of simplicity, which suits many smaller sole traders
        well.
      </p>

      <h2 id="worked-example">Worked example: £45,000 profit</h2>
      <p>
        Take a sole trader with a profit of <strong>£45,000</strong> for the
        year, after expenses have already been deducted, with no other
        income and no student loan.
      </p>
      <RateTable
        caption="Worked example: tax on £45,000 self-employed profit"
        columns={["Item", "Amount", "Notes"]}
        rows={[
          ["Personal Allowance", "£12,570", "Tax-free"],
          ["Taxable profit", "£32,430", "Taxed at 20% (Basic Rate)"],
          ["Income Tax due", "£6,486", "20% of £32,430"],
          ["Class 4 NI due", "£1,945.80", "6% of £32,430 (profit above £12,570)"],
          ["Total tax and NI", "£8,431.80", "N/A"],
        ]}
        highlightLastRow
      />
      <p>
        That leaves a take-home profit of around <strong>£36,568</strong> from
        a £45,000 profit, once Income Tax and Class 4 National Insurance are
        both accounted for, an effective combined rate of roughly 18.7%.
        Class 2 NI doesn&apos;t add anything here, since profit is above the
        small profits threshold and treated as automatically paid.
      </p>
      <h3>A higher profit example: £70,000</h3>
      <p>
        Now take a sole trader with a higher profit of{" "}
        <strong>£70,000</strong>. After the £12,570 Personal Allowance, the
        first £37,700 of taxable profit is taxed at 20% (£7,540), and the
        remaining £19,730 falls into the Higher Rate band at 40% (£7,892),
        giving total Income Tax of <strong>£15,432</strong>. Class 4 NI is
        charged at 6% on profit between £12,570 and £50,270 (£2,262), plus 2%
        on the remaining £19,730 above that (£394.60), giving Class 4 NI of{" "}
        <strong>£2,656.60</strong>.
      </p>
      <p>
        Combined, that&apos;s <strong>£18,088.60</strong> in Income Tax and
        Class 4 NI, leaving a take-home profit of around{" "}
        <strong>£51,911</strong>, an effective combined rate of roughly
        25.8%. Notice how the effective rate rises from 18.7% to 25.8%
        between the two examples, even though a large portion of both
        profits is still taxed at the same lower rates. This is the effect
        of more of the higher profit falling into the 40% Higher Rate band.
      </p>

      <h2 id="payments-on-account">Payments on account explained</h2>
      <p>
        If your self-assessment bill for the year is over £1,000, and less
        than 80% of your tax is already collected at source, HMRC usually
        requires <strong>payments on account</strong>: two advance payments
        towards next year&apos;s tax bill, each worth 50% of your previous
        year&apos;s total tax and Class 4 NI bill. These are due{" "}
        <strong>31 January</strong> and <strong>31 July</strong>.
      </p>
      <p>
        This is why a first self-assessment bill often feels much larger than
        the tax on the year itself. In our worked example above, someone
        filing their first return might owe the £8,431.80 for the year just
        ended, plus a first payment on account of £4,215.90 (50% of that
        figure), due on the same 31 January deadline, a combined bill of
        £12,647.70 in one go. A second payment on account of £4,215.90
        follows on 31 July. If actual profits come in lower the following
        year, any overpayment is refunded or offset once that year&apos;s return
        is filed.
      </p>

      <h2 id="sole-trader-vs-limited-company">Sole trader or limited company?</h2>
      <p>
        Most people start out as a sole trader, and for good reason: it&apos;s
        simple to set up, has minimal ongoing paperwork, and suits lower
        profit levels well. As profits grow, though, it&apos;s worth
        understanding why some self-employed people eventually switch to
        trading through a limited company instead.
      </p>
      <p>
        As a sole trader, all your profit is taxed as your personal income,
        through Income Tax and Class 4 NI, in the same tax year it&apos;s
        earned. As a limited company director, the company itself pays
        Corporation Tax on its profits, and you then choose how much to draw
        out as salary (taxed through PAYE like any employee) and how much to
        take as dividends (taxed at the separate, generally lower, dividend
        tax rates). This flexibility can reduce the overall tax bill at
        higher profit levels, since dividends don&apos;t attract National
        Insurance at all.
      </p>
      <p>
        Against that, a limited company comes with more administration:
        separate company accounts, Companies House filings, and generally the
        cost of an accountant to manage it properly. There&apos;s no single
        profit figure at which switching becomes worthwhile for everyone,
        since it depends on how much of your profit you need to draw out
        immediately versus leave in the company, your other income, and your
        plans for the business. It&apos;s a decision worth revisiting with an
        accountant once your profits climb well above the Higher Rate
        threshold, rather than a choice to make once and never reconsider.
      </p>

      <h2 id="common-mistakes">Common mistakes to avoid</h2>
      <p>
        A frequent mistake is not setting money aside as income comes in.
        Since no tax is deducted automatically, it&apos;s easy to spend what
        looks like your full income and then face a large, unexpected bill in
        January. Many self-employed people put aside a fixed percentage,
        commonly around 25 to 30%, of every payment they receive into a
        separate savings account earmarked for tax.
      </p>
      <p>
        Another common mistake is missing the payments on account deadlines,
        which can trigger interest charges even if you eventually pay your
        annual bill on time. Mark both the 31 January and 31 July dates in
        your calendar from your very first year of trading, not just the
        January deadline most people focus on.
      </p>
      <p>
        Finally, some self-employed people under-claim expenses out of
        caution, leaving money on the table that HMRC rules genuinely allow.
        Keep organised records throughout the year, including receipts and a
        simple spreadsheet or accounting software, so you can claim
        everything you&apos;re entitled to with confidence when it comes to
        filing.
      </p>
      <p>
        It&apos;s also worth keeping business and personal finances separate
        from the start, even as a sole trader with no legal requirement to do
        so. A dedicated business bank account makes it far easier to see what
        counts as business income and expenditure at a glance, rather than
        combing through a single account full of both personal and business
        transactions when your return is due.
      </p>
      <p>
        And if your business is growing quickly, keep an eye on the VAT
        registration threshold. Once your VAT-taxable turnover passes the
        current threshold in any rolling 12-month period, registration
        becomes compulsory, and missing this can lead to backdated VAT
        liabilities and penalties. Our{" "}
        <Link href="/calculators/vat-calculator-uk">VAT calculator</Link> can
        help you understand how VAT would affect your pricing once you cross
        that point. It is also worth planning for the lack of Statutory Sick
        Pay as a sole trader; our{" "}
        <Link href="/calculators/sick-pay-calculator-uk">
          sick pay calculator
        </Link>{" "}
        shows what an employee in a similar role would be entitled to,
        useful context for deciding how much of a buffer to build for
        yourself.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
