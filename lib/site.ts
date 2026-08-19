export const siteConfig = {
  name: "Calculio",
  url: "https://calculio.co.uk",
  description:
    "Free, fast UK calculators for mortgages, tax, motoring, health and everyday maths — built for the UK, no sign-up required.",
  tagline: "UK calculators, done properly.",
  ogImage: "/og",
  email: "hello@calculio.co.uk",
} as const;

export type SiteConfig = typeof siteConfig;
