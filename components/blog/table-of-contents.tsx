"use client";

import * as React from "react";
import { List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  label: string;
}

function TocLinks({
  items,
  activeId,
  onNavigate,
}: {
  items: TocItem[];
  activeId: string | null;
  onNavigate?: () => void;
}) {
  return (
    <ol className="flex flex-col gap-1">
      {items.map((item, i) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={onNavigate}
            className={cn(
              "flex items-start gap-2 rounded-lg px-2.5 py-1.5 text-sm leading-snug transition",
              activeId === item.id
                ? "bg-primary/10 font-medium text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            <span className="mt-0.5 shrink-0 text-xs tabular-nums opacity-60">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* Mobile: collapsible, shown above the article content */}
      <details
        className="mb-8 rounded-2xl border border-border bg-card p-4 lg:hidden"
        open={mobileOpen}
        onToggle={(e) => setMobileOpen((e.target as HTMLDetailsElement).open)}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-foreground">
          <span className="flex items-center gap-2">
            <List className="size-4" aria-hidden="true" />
            Table of contents
          </span>
          <ChevronDown
            className={cn("size-4 transition-transform", mobileOpen && "rotate-180")}
            aria-hidden="true"
          />
        </summary>
        <nav aria-label="Table of contents" className="mt-3">
          <TocLinks items={items} activeId={activeId} onNavigate={() => setMobileOpen(false)} />
        </nav>
      </details>

      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto"
      >
        <p className="mb-2 flex items-center gap-2 px-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <List className="size-3.5" aria-hidden="true" />
          On this page
        </p>
        <TocLinks items={items} activeId={activeId} />
      </nav>
    </>
  );
}
