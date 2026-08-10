import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/site/json-ld";
import { ManageCookiesButton } from "@/components/site/manage-cookies-button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Calculio uses cookies, including essential, analytics, advertising and preference cookies, and how to manage or withdraw your consent.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Cookie Policy", item: `${siteConfig.url}/cookie-policy` },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbSchema} />
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Cookie Policy
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: 11 August 2026</p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
        <p>
          This Cookie Policy explains how {siteConfig.name} ({siteConfig.url}) uses cookies
          and similar technologies, what each type of cookie does, and how you can manage
          your preferences. It should be read alongside our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>What are cookies</h2>
        <p>
          Cookies are small text files that a website stores on your device, such as your
          computer, phone or tablet, when you visit it. They let a site remember things
          about your visit, such as your preferred settings or how you arrived at the page,
          so your next visit can be quicker and more useful. Cookies are not viruses and
          cannot access other files on your device. Some cookies last only for the length
          of your browsing session, while others stay on your device for longer so a site
          can recognise you on a return visit. Alongside cookies, similar technologies such
          as local storage and pixel tags can be used for the same purposes, and we treat
          them the same way in this policy.
        </p>

        <h2>How we use cookies</h2>
        <p>
          When you first visit {siteConfig.name}, a cookie banner asks you to choose which
          categories of cookies you&apos;re happy for us to use. We group cookies into
          four categories:
        </p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> These are needed for the site to function
            correctly, including session handling, security and remembering your cookie
            choice itself. Because the site cannot work properly without them, they cannot
            be switched off.
          </li>
          <li>
            <strong>Analytics cookies:</strong> These help us understand how visitors use
            {" "}{siteConfig.name}, such as which calculators are most popular and how people
            move around the site. We use this information in aggregate to improve the site.
            These are optional.
          </li>
          <li>
            <strong>Advertising cookies:</strong> These are used by advertising partners,
            including Google AdSense, to show adverts that are more relevant to you and to
            measure how well those adverts perform. These are optional.
          </li>
          <li>
            <strong>Preference cookies:</strong> These remember choices you make on the
            site, such as light or dark mode, so you don&apos;t need to set them again on
            your next visit. These are optional.
          </li>
        </ul>
        <p>
          No tracking or advertising script loads until you have made a choice in the
          cookie banner, and analytics or advertising cookies are only set if you accept
          them.
        </p>

        <h2>Why we ask for your consent</h2>
        <p>
          Under UK GDPR and the Privacy and Electronic Communications Regulations
          (PECR), we need your permission before setting any cookie that isn&apos;t
          strictly necessary for the site to run. That&apos;s why you&apos;ll see the
          cookie banner the first time you visit {siteConfig.name}, and why analytics
          and advertising cookies stay switched off until you actively choose to allow
          them. You&apos;re free to accept all cookies, reject everything except the
          essential ones, or pick and choose using the preferences panel. Whatever you
          choose is saved on your device so you shouldn&apos;t need to repeat the choice
          on every visit, though clearing your browser&apos;s storage will reset it.
        </p>

        <h2>Third-party cookies</h2>
        <p>
          Some cookies on {siteConfig.name} are set by third-party services we use rather
          than by us directly. These may include Google Analytics, which helps us
          understand site usage, and Google AdSense, which we intend to use to display
          adverts once our application has been approved. These third parties may set
          their own cookies in line with their own privacy and cookie policies, and we
          don&apos;t control how they use the data those cookies collect. You can find out
          more about Google&apos;s approach to cookies and advertising on Google&apos;s own
          policy pages.
        </p>

        <h2>Managing cookies</h2>
        <p>
          You can change your cookie choices on {siteConfig.name} at any time using the
          button below, which reopens the preferences panel shown in the cookie banner.
        </p>
        <div className="not-prose my-6">
          <ManageCookiesButton />
        </div>
        <p>
          You can also control or delete cookies through your browser&apos;s settings.
          Most browsers let you see what cookies are stored, delete some or all of them,
          and block cookies from particular sites or all sites. Since the exact steps
          differ by browser, check your browser&apos;s own help pages for instructions,
          for example the cookie settings within Chrome, Safari, Firefox or Edge. Bear
          in mind that blocking essential cookies through your browser may stop some
          parts of {siteConfig.name} working as intended, such as remembering your theme
          or your cookie choice itself.
        </p>
        <p>
          If you use multiple devices or browsers to visit {siteConfig.name}, such as a
          phone and a laptop, you&apos;ll need to set your cookie preferences separately
          on each one, since choices are stored locally on the device and browser you
          used to make them, not against an account.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time, for example if we introduce
          a new analytics or advertising provider. Any changes will be posted on this page
          with an updated revision date.
        </p>

        <h2>Contact us</h2>
        <p>
          If you have any questions about how {siteConfig.name} uses cookies, please get
          in touch via our <Link href="/contact">contact page</Link> or email us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </div>
  );
}
