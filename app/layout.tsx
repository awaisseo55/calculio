import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/site/theme-provider";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Free UK Calculators`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "uk calculators",
    "mortgage calculator",
    "stamp duty calculator",
    "take home pay calculator",
    "income tax calculator uk",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Free UK Calculators`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Free UK Calculators`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "d-BFMrCr63gnON-p7lEWMIm2A0ml3uf27wycvXk5lYQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/og`,
    description: siteConfig.description,
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/calculators?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <JsonLd data={organizationSchema} />
          <JsonLd data={websiteSchema} />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
