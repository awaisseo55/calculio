import Link from "next/link";
import { ExternalLink, BookOpen, CalendarCheck, ListChecks, MessageSquareWarning } from "lucide-react";
import { formatDate } from "@/lib/format";
import type { OfficialSource } from "@/lib/official-sources";

interface SourcesPanelProps {
  sources: OfficialSource[];
  methodology: string;
  effectivePeriod?: string;
  lastVerifiedDate: string;
  assumptions?: string[];
}

export function SourcesPanel({
  sources,
  methodology,
  effectivePeriod,
  lastVerifiedDate,
  assumptions,
}: SourcesPanelProps) {
  return (
    <section
      id="sources"
      aria-labelledby="sources-heading"
      className="not-prose mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <h2 id="sources-heading" className="text-lg font-semibold tracking-tight text-foreground">
        Sources &amp; methodology
      </h2>

      {sources.length > 0 && (
        <div className="mt-5">
          <p className="flex items-center gap-2 text-sm font-medium text-foreground">
            <BookOpen className="size-4 shrink-0 text-primary" aria-hidden="true" />
            Official sources
          </p>
          <ul className="mt-2 space-y-1.5 text-sm">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  {source.label}
                  <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5">
        <p className="text-sm font-medium text-foreground">Methodology</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{methodology}</p>
        {effectivePeriod && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Figures are effective for the <strong className="text-foreground">{effectivePeriod}</strong>{" "}
            period.
          </p>
        )}
      </div>

      {assumptions && assumptions.length > 0 && (
        <div className="mt-5">
          <p className="flex items-center gap-2 text-sm font-medium text-foreground">
            <ListChecks className="size-4 shrink-0 text-primary" aria-hidden="true" />
            Assumptions and exclusions
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
            {assumptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/60 pt-5 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <CalendarCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
          Last verified against source: {formatDate(new Date(lastVerifiedDate))}
        </span>
        <span className="flex items-center gap-1.5">
          <MessageSquareWarning className="size-4 shrink-0 text-primary" aria-hidden="true" />
          Spotted an error?{" "}
          <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-primary/80">
            Report a correction
          </Link>
        </span>
      </div>
    </section>
  );
}
