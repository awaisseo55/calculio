import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { XIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/site/social-icons";
import { categories } from "@/lib/categories";
import { calculators, getCalculator } from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

const TOP_CALCULATOR_SLUGS = [
  "take-home-pay-calculator-uk",
  "mortgage-calculator-uk",
  "stamp-duty-calculator-uk",
  "income-tax-calculator-uk",
  "council-tax-calculator-uk",
  "pension-calculator-uk",
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

const socialLinks = [
  { href: siteConfig.links.twitter, label: "X (Twitter)", icon: XIcon },
  { href: siteConfig.links.facebook, label: "Facebook", icon: FacebookIcon },
  { href: siteConfig.links.instagram, label: "Instagram", icon: InstagramIcon },
  { href: siteConfig.links.linkedin, label: "LinkedIn", icon: LinkedinIcon },
];

export function Footer() {
  const topCalculators = TOP_CALCULATOR_SLUGS.map((slug) => getCalculator(slug)).filter(
    (calc): calc is NonNullable<typeof calc> => Boolean(calc)
  );

  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <span
                  key={social.label}
                  role="img"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground"
                >
                  <social.icon className="size-4" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Categories</h3>
            <ul className="mt-4 space-y-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Top Calculators</h3>
            <ul className="mt-4 space-y-3">
              {topCalculators.map((calc) => (
                <li key={calc.slug}>
                  <Link
                    href={`/calculators/${calc.slug}`}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {calc.shortName}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/calculators"
              className="mt-3 inline-block text-sm font-medium text-primary transition hover:text-primary/80"
            >
              View all {calculators.length} calculators &rarr;
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            {siteConfig.name} is not a financial or legal adviser. Calculations are estimates
            only.
          </p>
        </div>
      </div>
    </footer>
  );
}
