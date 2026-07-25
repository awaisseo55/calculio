import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

interface CalloutBoxProps {
  title: string;
  description: string;
  href: string;
  cta: string;
}

export function CalloutBox({ title, description, href, cta }: CalloutBoxProps) {
  return (
    <div className="not-prose my-8 flex flex-col gap-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-success/5 p-6 card-glow sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Calculator className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/80"
      >
        {cta}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
