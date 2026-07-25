import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: 25 July 2026</p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
        <h2>Overview</h2>
        <p>
          {siteConfig.name} ({siteConfig.url}) is designed to be used without creating an
          account or submitting personal information. This policy explains what limited
          data is collected when you use the site and how it&apos;s handled.
        </p>

        <h2>Calculator inputs</h2>
        <p>
          Figures you enter into any calculator — such as a salary, property price or
          date of birth — are processed entirely in your browser to produce a result.
          This data is not transmitted to, stored on, or logged by our servers.
        </p>

        <h2>Analytics and cookies</h2>
        <p>
          We may use privacy-conscious analytics to understand how the site is used in
          aggregate (such as which pages are visited and how often), to help us improve
          the site. Any such analytics do not identify you personally. If we introduce
          cookies for analytics or functionality in future, we will update this policy
          and, where required, ask for your consent.
        </p>

        <h2>Contact form</h2>
        <p>
          If you use the contact form, the name, email address and message you provide
          are used only to respond to your enquiry. We do not sell, rent or share this
          information with third parties for marketing purposes.
        </p>

        <h2>Third-party links</h2>
        <p>
          Some pages link to external sites, such as gov.uk or the NHS website, for
          further information. We are not responsible for the privacy practices of
          external sites you visit from a link on {siteConfig.name}.
        </p>

        <h2>Your rights</h2>
        <p>
          If you have any questions about this policy or how your information is
          handled, please get in touch via our{" "}
          <a href="/contact">contact page</a>.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. Any changes will be posted on
          this page with an updated revision date.
        </p>
      </div>
    </div>
  );
}
