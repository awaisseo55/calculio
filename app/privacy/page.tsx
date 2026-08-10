import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your information, including cookies, analytics, advertising and your rights under UK GDPR.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${siteConfig.url}/privacy` },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Effective date: 11 August 2026. Last updated: 11 August 2026.
      </p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
        <p>
          {siteConfig.name} ({siteConfig.url}) is a free UK calculator hub. This policy
          explains what information we collect when you use the site, how we use it, who
          we share it with, and the rights you have over it. We&apos;ve written it in plain
          English rather than legal language wherever possible. If anything is unclear,
          please get in touch via our <Link href="/contact">contact page</Link>.
        </p>
        <p>
          We are the data controller for the personal information described in this
          policy. This policy is written to comply with the UK General Data Protection
          Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <h2>Information we collect</h2>
        <p>We collect a limited amount of information, in two broad categories:</p>
        <ul>
          <li>
            <strong>Calculator inputs.</strong> Figures you enter into any calculator,
            such as a salary, property price or date of birth, are processed entirely in
            your browser to produce a result. This data is not transmitted to, stored on,
            or logged by our servers.
          </li>
          <li>
            <strong>Usage and technical data.</strong> Like most websites, our hosting
            provider and any analytics tools we use may automatically collect information
            such as your IP address, browser type, device type, pages visited, and how
            long you spend on the site. Where this data is linked to cookies, it is only
            collected if you have consented to analytics cookies. See our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link> for full detail on individual
            cookies.
          </li>
          <li>
            <strong>Contact form submissions.</strong> If you use our contact form, we
            collect the name, email address, subject and message you provide, so that we
            can respond to your enquiry.
          </li>
        </ul>
        <p>
          We do not require you to create an account or log in to use any calculator on
          {" "}{siteConfig.name}, and we do not knowingly collect any special category data
          (such as health records) beyond the figures you choose to type into a calculator
          for your own use, which are never sent to us.
        </p>

        <h2>How we use your information</h2>
        <p>We use the limited information described above to:</p>
        <ul>
          <li>Operate, maintain and improve the calculators and content on the site.</li>
          <li>
            Understand, in aggregate, how visitors use {siteConfig.name}, such as which
            calculators are most popular, so we can prioritise updates and new content.
          </li>
          <li>Respond to enquiries sent through our contact form.</li>
          <li>
            Where you have given consent, show and measure the performance of adverts
            through providers such as Google AdSense.
          </li>
          <li>Keep the site secure and prevent misuse.</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use calculator inputs
          for any purpose beyond generating the result shown to you in your own browser.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies and similar technologies for essential site functions, and,
          where you consent, for analytics, advertising and remembering your preferences.
          A cookie banner is shown on your first visit so you can choose which categories
          to allow. Full detail on each category, and how to change your choice at any
          time, is in our <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>

        <h2>Third-party services</h2>
        <p>
          We use, or intend to use, the following third-party services. Each operates
          under its own privacy policy, and we encourage you to review those directly:
        </p>
        <ul>
          <li>
            <strong>Google Analytics.</strong> We may use Google Analytics to understand
            site traffic and usage patterns in aggregate. Google Analytics uses cookies
            and processes data in line with Google&apos;s own privacy policy.
          </li>
          <li>
            <strong>Google AdSense.</strong> We intend to display adverts on{" "}
            {siteConfig.name} through Google AdSense once our application has been
            approved. Once live, AdSense may use cookies and similar technologies to
            show adverts based on your visits to this and other websites, where you have
            given consent for advertising cookies.
          </li>
          <li>
            <strong>Hosting infrastructure.</strong> {siteConfig.name} is hosted on
            Vercel, which processes standard web server logs (such as IP address and
            request details) as part of delivering the site to you.
          </li>
        </ul>
        <p>
          We do not control how these third parties process data beyond the settings we
          configure, and we recommend reviewing their own privacy policies for full
          detail on their practices.
        </p>

        <h2>Personalised and non-personalised advertising</h2>
        <p>
          Once Google AdSense is live on {siteConfig.name}, the adverts you see may be
          personalised based on your browsing activity if you have consented to
          advertising cookies, or non-personalised if you have not. Non-personalised
          adverts are still served, but rely on limited contextual information, such as
          the content of the page you&apos;re viewing, rather than your browsing history.
          You can change your advertising cookie preference at any time, and Google also
          provides its own controls for managing personalised advertising across the
          sites you visit, available through your Google account settings.
        </p>

        <h2>Server and log data</h2>
        <p>
          Our hosting infrastructure automatically records standard technical
          information for every request made to {siteConfig.name}, such as the page
          requested, the time of the request, and the requesting IP address. This is
          common practice for essentially all websites, is needed to detect and prevent
          abuse, and is handled by our hosting provider in line with its own security
          practices. We do not use this log data to build individual profiles of
          visitors.
        </p>

        <h2>Do Not Track signals</h2>
        <p>
          Some browsers offer a &ldquo;Do Not Track&rdquo; setting. There is currently no
          single accepted standard for how websites should respond to this signal, so{" "}
          {siteConfig.name} does not currently respond to Do Not Track signals
          differently from the cookie choice you make in our cookie banner. Your cookie
          preferences, described above, remain the most reliable way to control
          analytics and advertising on this site.
        </p>

        <h2>Legal basis for processing</h2>
        <p>
          Where we rely on cookies for analytics or advertising, our legal basis is your
          consent, which you can withdraw at any time as described below. Where we
          respond to a contact form enquiry, our legal basis is our legitimate interest
          in answering questions about our own site, or, where relevant, taking steps at
          your request before entering into any arrangement. We do not rely on consent
          for essential cookies, since these are necessary for the site to function.
        </p>

        <h2>Data retention</h2>
        <p>
          Calculator inputs are never sent to our servers, so there is nothing for us to
          retain. Contact form messages are kept only for as long as needed to handle
          your enquiry and for a reasonable period afterwards in case of follow-up, after
          which they are deleted. Aggregated, anonymised analytics data may be retained
          for longer, since it does not identify you individually. Your cookie consent
          choice is stored in your browser&apos;s local storage on your own device, not
          on our servers, until you change it or clear your browser data.
        </p>

        <h2>Where your data is processed</h2>
        <p>
          Some of the third-party services we use, including Google&apos;s services, may
          process data outside the UK. Where this happens, those providers are
          responsible for ensuring an adequate level of protection is in place, such as
          through UK-approved data transfer mechanisms.
        </p>

        <h2>Your rights under UK GDPR</h2>
        <p>
          Under the UK GDPR and the Data Protection Act 2018, you have a number of
          rights over any personal information we hold about you, including the right
          to:
        </p>
        <ul>
          <li><strong>Access</strong> a copy of the personal information we hold about you.</li>
          <li><strong>Rectification</strong> of inaccurate or incomplete information.</li>
          <li><strong>Erasure</strong> of your personal information in certain circumstances.</li>
          <li><strong>Restriction</strong> of how we use your information in certain circumstances.</li>
          <li>
            <strong>Portability</strong>, meaning you can ask us to transfer information
            you&apos;ve provided to another organisation, in certain circumstances.
          </li>
          <li><strong>Object</strong> to certain types of processing, including for direct marketing.</li>
          <li>
            <strong>Withdraw consent</strong> at any time where we rely on consent, such
            as for analytics or advertising cookies, without affecting the lawfulness of
            processing before you withdrew it. You can withdraw or change your cookie
            consent at any time through the preferences panel described in our{" "}
            <Link href="/cookie-policy">Cookie Policy</Link>.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us using the details below. You also
          have the right to lodge a complaint with the UK&apos;s data protection
          regulator, the Information Commissioner&apos;s Office (ICO), at ico.org.uk,
          although we&apos;d appreciate the chance to resolve any concern directly first.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          {siteConfig.name} is not directed at children, and we do not knowingly collect
          personal information from anyone under the age of 13. If you believe a child
          has provided us with personal information, for example through the contact
          form, please contact us so we can remove it.
        </p>

        <h2>Data security</h2>
        <p>
          We take reasonable technical and organisational steps to protect the limited
          personal information we hold, including using a reputable hosting provider and
          encrypted connections. However, no method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>Third-party links</h2>
        <p>
          Some pages link to external sites, such as gov.uk or the NHS website, for
          further information. We are not responsible for the privacy practices of
          external sites you visit from a link on {siteConfig.name}, and we recommend
          reading the privacy policy of any external site you visit.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time, for example to reflect a new
          analytics or advertising provider, or a change in the law. Any changes will be
          posted on this page with an updated revision date at the top. We&apos;d
          encourage you to check back occasionally if you have concerns about how your
          information is handled.
        </p>

        <h2>Contact us</h2>
        <p>
          For any questions about this policy, to exercise any of your rights, or for
          any other data protection query, please contact us via our{" "}
          <Link href="/contact">contact page</Link> or by email at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </div>
  );
}
