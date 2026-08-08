import Link from "next/link";
import { CalloutBox } from "@/components/blog/callout-box";
import type { FaqItem } from "@/lib/types";
import type { TocItem } from "@/components/blog/table-of-contents";

export const toc: TocItem[] = [
  { id: "what-is-child-benefit", label: "What is Child Benefit" },
  { id: "current-rates", label: "Current rates for 2026/27" },
  { id: "hicbc-explained", label: "The High Income Child Benefit Charge" },
  { id: "should-you-claim", label: "Should you still claim" },
  { id: "how-to-claim", label: "How to claim Child Benefit" },
  { id: "turning-16", label: "When your child turns 16" },
  { id: "common-mistakes", label: "Common mistakes to avoid" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "try-calculator", label: "Calculate your Child Benefit" },
];

export const faq: FaqItem[] = [
  {
    question: "How much is Child Benefit a week in 2026/27?",
    answer:
      "Child Benefit is £26.05 a week for your eldest or only child, and £17.25 a week for each additional child, with no limit on the number of children you can claim for. A family with 2 children receives £43.30 a week, around £2,251.60 a year, before any High Income Child Benefit Charge.",
  },
  {
    question: "What income triggers the High Income Child Benefit Charge?",
    answer:
      "The charge starts once the higher earner in your household has an adjusted net income above £60,000 a year. It increases gradually up to £80,000, where the charge equals 100% of your Child Benefit, cancelling the payment out completely.",
  },
  {
    question: "Is Child Benefit based on household income or individual income?",
    answer:
      "The High Income Child Benefit Charge is based on the individual income of whichever partner earns more, not your combined household income. Two partners each earning £58,000 pay no charge at all, while a single earner on £61,000 with a non-earning partner does pay a small charge.",
  },
  {
    question: "Can I opt out of receiving Child Benefit payments?",
    answer:
      "Yes, you can choose to keep your Child Benefit claim open without receiving the payments, which avoids needing to pay the charge back later while still protecting your National Insurance credits. Alternatively, you can stop the claim entirely, though this means missing out on the credits too.",
  },
  {
    question: "Do I need to fill in a Self Assessment return because of the charge?",
    answer:
      "Usually yes, if HMRC collects the High Income Child Benefit Charge through Self Assessment, you need to register and file a return each year. Since 2024/25, some employees can instead ask HMRC to collect the charge through their PAYE tax code, avoiding a Self Assessment return.",
  },
  {
    question: "What happens to Child Benefit if my child stays in education after 16?",
    answer:
      "Child Benefit continues automatically until 31 August after your child's 16th birthday. If they stay in approved full-time education or training, such as A-levels, T-levels or an approved apprenticeship, it can continue until they turn 20, provided you tell HMRC about the extension.",
  },
];

export function ArticleContent() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        Families with 2 children who claim the full amount receive over{" "}
        <strong>£2,250 a year</strong> in Child Benefit, tax-free, paid
        every 4 weeks straight into a bank account. Yet a huge number of
        parents either miss out on money they are entitled to, or get
        caught out by an unexpected tax bill because of the High Income
        Child Benefit Charge. Our{" "}
        <Link href="/calculators/child-benefit-calculator-uk">
          Child Benefit calculator
        </Link>{" "}
        works out your exact weekly, annual and net figures in seconds,
        and this guide explains the rules behind those numbers.
      </p>

      <h2 id="what-is-child-benefit">What is Child Benefit and who gets it</h2>
      <p>
        Child Benefit has existed in various forms since the 1970s, and
        today it is one of the simplest, most widely claimed forms of
        family support in the UK. It is paid to whoever is responsible for
        raising a child under 16, or under 20 if that child stays in
        approved full-time education or training. Unlike many benefits, it
        is not means-tested at the point of payment, anyone can claim it
        regardless of income, though higher earners may need to pay some or
        all of it back through the tax system, covered in detail below.
      </p>
      <p>
        Payments are made every 4 weeks, usually on a Monday or Tuesday,
        directly into the bank account of whoever made the claim. Child
        Benefit itself is completely tax-free in the hands of the claimant,
        it is only the separate High Income Child Benefit Charge that can
        claw some or all of it back, and only above a fairly high income
        threshold. Beyond the cash payment, claiming Child Benefit also
        triggers automatic National Insurance credits for the claimant if
        they are not working or earning enough to pay National Insurance
        themselves, which matters a great deal for their eventual State
        Pension, as our{" "}
        <Link href="/blog/uk-state-pension-guide-2026">
          UK State Pension guide
        </Link>{" "}
        explains in more detail.
      </p>
      <p>
        Only one person can claim Child Benefit for a particular child, so
        if parents separate or share care, they usually need to agree
        between themselves who makes the claim, since HMRC will not split
        a single child's payment between two households. Foster carers and
        kinship carers, such as grandparents raising a grandchild, can
        usually claim too, provided the child is not already being claimed
        for by someone else and the carer meets the normal residency
        rules. If you are unsure who should claim in a shared care
        arrangement, it is worth considering who is likely to benefit most
        from the National Insurance credits, since that can matter more
        in the long run than the cash payment itself for a parent who is
        not otherwise working.
      </p>

      <h2 id="current-rates">Current rates for 2026/27</h2>
      <p>
        Child Benefit is paid at a higher rate for your eldest or only
        child, and a lower rate for every additional child after that, with
        no cap on the total number of children covered. Use our{" "}
        <Link href="/calculators/child-benefit-calculator-uk">
          Child Benefit calculator
        </Link>{" "}
        to work out your exact figure instantly, or check the table below
        for common family sizes.
      </p>
      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40 text-left">
              <th className="px-4 py-3 font-semibold text-foreground">Number of children</th>
              <th className="px-4 py-3 font-semibold text-foreground">Weekly amount</th>
              <th className="px-4 py-3 font-semibold text-foreground">Annual amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3">1 child</td>
              <td className="px-4 py-3 font-mono">£26.05</td>
              <td className="px-4 py-3 font-mono">£1,354.60</td>
            </tr>
            <tr>
              <td className="px-4 py-3">2 children</td>
              <td className="px-4 py-3 font-mono">£43.30</td>
              <td className="px-4 py-3 font-mono">£2,251.60</td>
            </tr>
            <tr>
              <td className="px-4 py-3">3 children</td>
              <td className="px-4 py-3 font-mono">£60.55</td>
              <td className="px-4 py-3 font-mono">£3,148.60</td>
            </tr>
            <tr>
              <td className="px-4 py-3">4 children</td>
              <td className="px-4 py-3 font-mono">£77.80</td>
              <td className="px-4 py-3 font-mono">£4,045.60</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        These figures are reviewed and usually uprated every April, often
        in line with the Consumer Price Index measure of inflation from the
        previous September, though the government is not obliged to
        increase them every year and has occasionally frozen the rates in
        the past. Always check GOV.UK for the exact current rate if you are
        reading this later in the tax year, since even a small annual
        increase compounds meaningfully over the 16 to 20 years a family
        might claim for a single child. Our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        can help you see how Child Benefit fits into your wider household
        income picture alongside your salary.
      </p>
      <p>
        It is also worth remembering that these are UK-wide rates. Child
        Benefit is what is known as a reserved matter, meaning it is set
        by the UK government at Westminster and paid at the same rate
        whether you live in England, Scotland, Wales or Northern Ireland,
        unlike some other benefits and, in Scotland, unlike Income Tax
        bands, which the Scottish Parliament sets separately.
      </p>

      <h2 id="hicbc-explained">The High Income Child Benefit Charge explained</h2>
      <p>
        The High Income Child Benefit Charge, usually shortened to HICBC,
        was introduced to gradually remove the value of Child Benefit from
        higher earning households. It applies once the higher earner in a
        household, not the combined household income, has an adjusted net
        income above <strong>£60,000</strong> a year. Between £60,000 and{" "}
        <strong>£80,000</strong>, the charge increases by 1% of your Child
        Benefit for every complete £200 of income above the £60,000
        threshold. At £80,000 and above, the charge reaches 100%,
        cancelling the payment out entirely.
      </p>
      <p>
        The £60,000 to £80,000 band is a relatively recent change. Before 6
        April 2024, the charge applied between £50,000 and £60,000, a much
        narrower band that caught far more households as wages rose over
        time without the threshold moving. The current, wider band gives
        families more room before the charge starts to bite, but it still
        catches a large number of higher earning households, particularly
        where one partner works full-time on a good salary while the other
        stays at home or works part-time.
      </p>
      <p>
        The income figure used for the charge is not simply your salary,
        it is your <strong>adjusted net income</strong>, which is your
        total taxable income for the year, minus things like pension
        contributions made through relief-at-source or salary sacrifice,
        and Gift Aid donations grossed up for tax. This matters
        practically, because increasing your pension contributions can
        genuinely reduce or remove your HICBC exposure, as well as
        reducing your Income Tax bill directly. If you are close to the
        £60,000 threshold, it is worth checking whether a slightly higher
        pension contribution rate would bring your adjusted net income
        below the line, which our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        can help you model alongside your retirement savings goals.
      </p>
      <p>
        HMRC recovers the charge either through Self Assessment, meaning
        the higher earner needs to register and file a return, or, since
        2024/25, some employees can instead choose to have it collected
        directly through their PAYE tax code, spreading the cost across the
        year rather than paying a lump sum. To see how this compares with
        your income tax position more broadly, our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        breaks your salary down by band, and our{" "}
        <Link href="/blog/uk-income-tax-2026-27">
          UK Income Tax 2026/27 guide
        </Link>{" "}
        explains how those bands interact with charges like this one.
      </p>
      <p>
        Here is how the charge looks in practice for a family with 2
        children, entitled to £2,251.60 a year in gross Child Benefit.
        At <strong>£55,000</strong>, below the threshold, no charge applies
        at all. At <strong>£65,000</strong>, the charge is{" "}
        <strong>25%</strong>, around £562.90, leaving a net £1,688.70. At{" "}
        <strong>£70,000</strong>, the charge rises to <strong>50%</strong>,
        roughly £1,125.80. At <strong>£75,000</strong>, it reaches{" "}
        <strong>75%</strong>, about £1,688.70 clawed back. At{" "}
        <strong>£80,000</strong> or above, the full £2,251.60 is repaid,
        leaving nothing net, even though the family still received the
        payments during the year. Try our{" "}
        <Link href="/calculators/child-benefit-calculator-uk">
          Child Benefit calculator
        </Link>{" "}
        with your own numbers of children and income to see your exact
        position.
      </p>

      <CalloutBox
        title="Work out your Child Benefit and HICBC"
        description="Enter your income, your partner's income and number of children for an instant net Child Benefit figure."
        href="/calculators/child-benefit-calculator-uk"
        cta="Calculate my Child Benefit"
      />

      <h2 id="should-you-claim">Should you still claim if you have to pay HICBC</h2>
      <p>
        Yes, in almost every case it is still worth submitting a Child
        Benefit claim, even if you expect to pay some or all of it back
        through the charge. The clearest reason is National Insurance
        credits. Whoever claims Child Benefit for a child under 12
        automatically receives Class 3 National Insurance credits if they
        are not otherwise working or paying National Insurance, and these
        credits count towards a full State Pension record. If the
        stay-at-home parent in a household does not claim, purely because
        the other partner's income means the money would be repaid anyway,
        they can end up with real gaps in their National Insurance record
        that are far more costly to fix later than the HICBC ever was. Our{" "}
        <Link href="/blog/uk-state-pension-guide-2026">
          UK State Pension guide
        </Link>{" "}
        explains exactly why a complete National Insurance record matters
        so much for your eventual pension.
      </p>
      <p>
        There is also a related credit worth knowing about if grandparents
        or other family members help with childcare while a parent works.
        Specified Adult Childcare credits let a working parent transfer
        the National Insurance credit that comes with their Child Benefit
        claim to the family member providing the childcare, such as a
        grandparent under State Pension age, so that person builds up
        their own record instead. This has to be applied for separately
        and is often overlooked, even by families who would clearly
        benefit from it.
      </p>
      <p>
        You do not have to choose between claiming and paying nothing back,
        or not claiming at all. HMRC allows you to submit the claim to
        secure the National Insurance credits and child-related benefits,
        while opting out of actually receiving the payments, which avoids
        the administrative hassle of paying the charge back later if you
        know your income is well above £80,000. This is generally the best
        of both worlds for higher earners who are confident their income
        will stay high. Our{" "}
        <Link href="/calculators/pension-calculator-uk">
          pension calculator
        </Link>{" "}
        can help you see the bigger picture of your retirement income,
        state and private, once your children are older and childcare
        costs ease off.
      </p>
      <p>
        If your income varies year to year, for example because you are
        self-employed, deciding whether the charge will apply can be
        harder to predict in advance. Our{" "}
        <Link href="/calculators/self-employed-tax-calculator-uk">
          self-employed tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/blog/self-employed-tax-guide-uk-2026">
          self-employed tax guide
        </Link>{" "}
        can help you estimate your likely profit for the year, so you are
        not caught out by an unexpected HICBC bill when you file your Self
        Assessment return.
      </p>

      <h2 id="how-to-claim">How to claim Child Benefit</h2>
      <p>
        Claims are usually made online through your Personal Tax Account or
        the HMRC app, and the process is generally quick if you have your
        child's birth certificate details and your own National Insurance
        number to hand. You will also need your bank details for payment,
        and if this is your first child, your own passport or another form
        of identity document may be requested to confirm who you are. The
        claim can be started as soon as your baby's birth is registered or,
        in some cases, before this if you use the newer online registration
        and claim process HMRC has introduced, which links birth
        registration and the Child Benefit claim into a single step in many
        areas.
      </p>
      <p>
        First payments typically arrive within a few weeks of a completed
        claim, though this can vary depending on HMRC's current processing
        times, especially around busy periods. Importantly, Child Benefit
        can be backdated by up to 3 months from the date HMRC receives your
        claim, so it is worth claiming as soon as possible after your child
        is born rather than waiting, since you cannot claim further back
        than that 3-month window, no matter how strong your reason for the
        delay. Many new parents claim in the first few weeks after birth
        alongside registering for other things like a GP and a Junior ISA.
      </p>
      <p>
        Once your claim is set up, payments are usually made every 4 weeks,
        though single parents and some households already receiving
        certain other benefits can ask to be paid weekly instead if that
        suits their budgeting better. If your circumstances change, a new
        baby arrives, your child moves in or out of approved education, or
        your address or bank details change, you need to update HMRC
        directly rather than assuming the system will pick this up
        automatically, since delays in reporting changes can lead to
        overpayments that need to be repaid later.
      </p>

      <h2 id="turning-16">What happens when your child turns 16</h2>
      <p>
        Child Benefit does not stop the moment your child turns 16. It
        continues automatically until 31 August after their 16th birthday,
        covering the summer after their GCSEs regardless of what they do
        next. After that date, the payment only continues if your child
        stays in approved full-time education, such as A-levels, T-levels
        or a Scottish equivalent, or in an approved unpaid training
        programme.
      </p>
      <p>
        It is your responsibility to tell HMRC that your child is
        continuing in approved education or training, usually through a
        simple online or paper form each year, otherwise payments will
        stop automatically at the August cut-off. If your child moves to a
        paid apprenticeship, higher education, or full-time work, Child
        Benefit generally stops, since these do not usually count as
        approved education under the scheme. If you are budgeting for your
        child's move into further study or work, our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        can help them understand their own tax position once they start
        earning.
      </p>
      <p>
        Whatever stage you are at, whether working out your first claim,
        checking your HICBC exposure, or planning for your child turning
        16, our{" "}
        <Link href="/calculators/child-benefit-calculator-uk">
          Child Benefit calculator
        </Link>{" "}
        gives you a quick, clear estimate based on your own numbers.
      </p>

      <h2 id="common-mistakes">Common mistakes to avoid</h2>
      <p>
        One of the most frequent mistakes is not claiming at all, out of a
        mistaken belief that high earners are simply not eligible. Everyone
        can claim Child Benefit regardless of income, the HICBC only
        affects what you keep after tax, not your right to claim in the
        first place, and claiming still protects National Insurance
        credits even where the cash payment is fully repaid.
      </p>
      <p>
        Another common error is forgetting to notify HMRC of a change in
        income. If your salary rises above £60,000 partway through a tax
        year, perhaps after a pay rise or a new job, you become liable for
        the charge from that point, and it is your responsibility to
        declare this, usually through Self Assessment, rather than waiting
        for HMRC to notice. Underpaying the charge can lead to interest and
        penalties on top of the amount originally due, so it is worth
        checking your position with our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        whenever your income changes significantly during the year.
      </p>
      <p>
        Finally, some parents assume Child Benefit affects other means-tested
        support they receive, such as Universal Credit. It does not, Child
        Benefit is not counted as income when working out most other
        benefits, so claiming it should never reduce what you receive
        elsewhere. If you are also comparing your wider household budget,
        our{" "}
        <Link href="/calculators/income-tax-calculator-uk">
          income tax calculator
        </Link>{" "}
        and{" "}
        <Link href="/calculators/child-benefit-calculator-uk">
          Child Benefit calculator
        </Link>{" "}
        together give a clear picture of your total household income after
        tax and any HICBC clawback.
      </p>

      <h2 id="faq">Frequently asked questions</h2>
    </div>
  );
}
