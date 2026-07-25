import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Calculio team — questions, feedback, or a calculator suggestion. We read every message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Spotted an error, got feedback, or want to suggest a new calculator? We&apos;d
          love to hear from you.
        </p>
        <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="size-4" aria-hidden="true" />
          {siteConfig.email}
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-10">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </Reveal>
    </div>
  );
}
