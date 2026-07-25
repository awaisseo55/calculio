import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer for Calculio's UK Calculators",
  description:
    "Calculio provides free UK calculators for general information only. Read our full disclaimer on financial, tax, medical and legal guidance limits.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Disclaimer", item: `${siteConfig.url}/disclaimer` },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Disclaimer
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: 25 July 2026</p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
        <p>
          {siteConfig.name} provides free calculators and guides for general
          information only. Nothing on this site is a substitute for professional
          advice. Before making a financial, tax, medical or legal decision, please
          speak to a suitably qualified professional.
        </p>

        <h2>General disclaimer</h2>
        <p>
          Every result on {siteConfig.name} is an estimate. Our calculators are built
          using publicly available UK rates, thresholds and formulas from sources such
          as HMRC, the DVLA and the NHS. We do our best to keep these figures accurate
          and current, but we cannot guarantee that every rate is up to date at the
          moment you use the site. Rules change, sometimes with little notice, so
          always check the exact figures that apply to your situation before relying
          on them.
        </p>

        <h2>No financial advice</h2>
        <p>
          {siteConfig.name} is not a regulated financial adviser and is not
          authorised by the Financial Conduct Authority (FCA). Our calculators are
          designed to help you understand roughly what a mortgage, savings plan or
          loan might cost or earn. They should not be used as the sole basis for any
          financial decision. For advice tailored to your own circumstances, please
          speak to an FCA-authorised financial adviser.
        </p>

        <h2>No tax advice</h2>
        <p>
          Our tax calculators use published HMRC rates, bands and thresholds, but
          these change at every Budget and sometimes between Budgets too. We update
          our figures when we can, but we cannot promise they will always reflect the
          very latest rules. Always verify current tax rates with HMRC directly, or
          with a qualified tax adviser, before making a decision based on any result
          from this site.
        </p>

        <h2>No medical advice</h2>
        <p>
          Calculators such as BMI, pregnancy due date and other health tools on{" "}
          {siteConfig.name} provide general information based on NHS guidance. They
          are not a diagnosis and are not a substitute for medical advice. If you have
          any concerns about your health, please speak to your GP or another
          qualified healthcare professional. Do not delay seeking medical advice
          because of anything you have seen on this site.
        </p>

        <h2>No legal advice</h2>
        <p>
          Calculators covering stamp duty, property and similar topics are for
          general guidance only and do not constitute legal advice. Property
          transactions involve rules and circumstances that a calculator cannot fully
          capture. For any legal matter, including buying or selling property, please
          consult a qualified solicitor or licensed conveyancer.
        </p>

        <h2>Third-party links</h2>
        <p>
          We sometimes link to external websites, including HMRC, the NHS and the
          DVLA, to help you find further information. We do not control these sites
          and are not responsible for their content, accuracy or availability. Links
          to external sites do not imply our endorsement of them.
        </p>

        <h2>Advertising disclaimer</h2>
        <p>
          This site may display advertisements, including through Google AdSense.
          Adverts are served by third parties and may be based on your browsing
          activity. We do not control which adverts appear and do not endorse any
          product or service advertised on {siteConfig.name}.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.name} and its team
          accept no liability for any loss or damage, direct or indirect, arising
          from your use of, or reliance on, any information, calculator or content on
          this site.
        </p>

        <h2>Contact us</h2>
        <p>
          If you spot an error, think a figure is out of date, or simply have a
          question, please get in touch through our{" "}
          <Link href="/contact">contact page</Link>. We read every message and
          appreciate you helping us keep {siteConfig.name} accurate.
        </p>
      </div>
    </div>
  );
}
