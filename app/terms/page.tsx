import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms and conditions for using ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: 25 July 2026</p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
        <h2>Using this site</h2>
        <p>
          {siteConfig.name} provides free calculators and related content for
          informational purposes. By using this site, you agree to these terms.
        </p>

        <h2>Not financial, tax, legal or medical advice</h2>
        <p>
          Nothing on {siteConfig.name} constitutes financial, tax, legal or medical
          advice. Calculators are provided as general guidance tools based on publicly
          available rates and formulas, and results are estimates only. You should not
          rely on any calculator result as a substitute for professional advice from a
          qualified adviser, accountant, solicitor or medical professional before making
          a decision.
        </p>

        <h2>Accuracy of information</h2>
        <p>
          We aim to keep tax rates, thresholds and other figures up to date, but rules
          published by HMRC, the DVLA, Revenue Scotland, the Welsh Revenue Authority and
          the NHS change periodically, sometimes with little notice. We make no
          guarantee that figures shown are current or complete, and recommend confirming
          anything of financial or legal significance directly with the relevant
          official body via gov.uk.
        </p>

        <h2>No liability</h2>
        <p>
          To the fullest extent permitted by law, {siteConfig.name} and its operators
          accept no liability for any loss or damage arising from reliance on
          information or calculator results provided on this site.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The design, text, and code of {siteConfig.name} are protected by copyright.
          You may use the calculators for personal, non-commercial purposes, but may not
          copy, reproduce or republish substantial parts of the site without permission.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after
          changes are posted constitutes acceptance of the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent via our{" "}
          <a href="/contact">contact page</a>.
        </p>
      </div>
    </div>
  );
}
