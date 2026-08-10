import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { FaqAccordion } from "@/components/calculators/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Calculio team to report a calculator error, suggest a new tool, ask about privacy, or send a media enquiry. We aim to reply within 2 working days.",
  alternates: { canonical: "/contact" },
};

const contactReasons = [
  {
    title: "Report an error in a calculator",
    description:
      "Spotted a figure that looks wrong, or a formula that doesn't match current HMRC, DVLA or NHS rules? Let us know which calculator and what you found, and we'll check it.",
  },
  {
    title: "Suggest a new calculator",
    description:
      "Have a UK calculation you can't find anywhere, or think we're missing? Tell us what it should work out and we'll consider it for a future update.",
  },
  {
    title: "Content corrections",
    description:
      "Found something unclear, outdated, or incorrect in one of our guides or FAQs? We'd rather fix it than leave it, so please point us to the exact page.",
  },
  {
    title: "Media and press enquiries",
    description:
      "Working on a story that references UK tax, motoring or personal finance figures? Get in touch and we'll do our best to help.",
  },
  {
    title: "Privacy or data protection queries",
    description:
      "Questions about our Privacy Policy, Cookie Policy, or a request relating to your rights under UK GDPR, can be sent to us directly.",
  },
  {
    title: "General questions",
    description:
      "Anything else about Calculio, how we work, or how a specific calculator was built is welcome too.",
  },
];

const faq = [
  {
    question: "How quickly will I get a reply?",
    answer:
      "We aim to respond within 2 working days. It may take a little longer during busy periods, but we read and reply to every message.",
  },
  {
    question: "I think a calculator has the wrong figure. What should I include?",
    answer:
      "Please tell us which calculator, the inputs you used, and the result you got, along with what you expected instead if you know it. That's usually enough for us to check it quickly.",
  },
  {
    question: "Can you give me personal financial, tax, medical or legal advice?",
    answer:
      "No. Calculio provides general, educational information only, not personalised advice. For anything with real financial, health or legal consequences, please speak to a suitably qualified professional, such as an FCA-regulated adviser, an accountant, a solicitor or your GP.",
  },
  {
    question: "Do you accept guest posts or paid links?",
    answer:
      "We occasionally consider partnerships, but every calculator and guide on Calculio is written and fact-checked by our own team. Get in touch via this page if you'd like to discuss something specific.",
  },
  {
    question: "How do I ask about my data or exercise my privacy rights?",
    answer:
      "Use the form on this page, mark it as a privacy or data protection query, or email us directly. See our Privacy Policy for full detail on your rights under UK GDPR.",
  },
  {
    question: "Is there a phone number I can call?",
    answer:
      "We currently handle all enquiries by email and the contact form, which lets us track and respond to messages properly. This page is the quickest way to reach us.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Spotted an error, got feedback, or want to suggest a new calculator? We&apos;d
          love to hear from you. {siteConfig.name} is run by a small team, and every
          message is read by a real person.
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
          <span className="flex items-center gap-2">
            <Mail className="size-4" aria-hidden="true" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
              {siteConfig.email}
            </a>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="size-4" aria-hidden="true" />
            We aim to respond within 2 working days
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mt-10">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 border-t border-border/60 pt-12">
          <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-foreground">
            <MessageSquare className="size-5 text-primary" aria-hidden="true" />
            What to contact us about
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {contactReasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-16 border-t border-border/60 pt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </Reveal>

      <p className="mt-12 text-center text-sm text-muted-foreground">
        Want to know more about how we work first? Read our{" "}
        <Link href="/about" className="underline underline-offset-2 hover:text-foreground">
          About page
        </Link>
        .
      </p>
    </div>
  );
}
