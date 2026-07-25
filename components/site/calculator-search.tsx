"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { calculators } from "@/lib/calculators";
import { getCategory } from "@/lib/categories";

interface CalculatorSearchProps {
  variant?: "icon" | "bar";
  className?: string;
}

export function CalculatorSearch({ variant = "icon", className }: CalculatorSearchProps) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (document.activeElement?.tagName === "INPUT") return;
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return calculators.slice(0, 8);
    return calculators.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [query]);

  function go(slug: string) {
    setOpen(false);
    setQuery("");
    router.push(`/calculators/${slug}`);
  }

  return (
    <>
      {variant === "icon" ? (
        <Button
          variant="ghost"
          size="icon"
          aria-label="Search calculators"
          onClick={() => setOpen(true)}
          className={className}
        >
          <Search className="size-[1.15rem]" aria-hidden="true" />
        </Button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={
            className ??
            "flex w-full items-center gap-3 rounded-2xl border border-border bg-card/80 px-5 py-4 text-left text-muted-foreground shadow-sm backdrop-blur transition hover:border-primary/40 hover:text-foreground sm:py-4"
          }
        >
          <Search className="size-5 shrink-0" aria-hidden="true" />
          <span className="flex-1 text-sm sm:text-base">
            Search 39+ UK calculators: mortgage, tax, BMI, road tax&hellip;
          </span>
          <kbd className="hidden shrink-0 rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground sm:inline-block">
            /
          </kbd>
        </button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-lg">
          <DialogTitle className="sr-only">Search calculators</DialogTitle>
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <Input
              autoFocus
              placeholder="Search calculators&hellip;"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0 px-0 h-auto py-1"
            />
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {results.length === 0 ? (
              <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                No calculators match &ldquo;{query}&rdquo;.
              </p>
            ) : (
              <ul className="flex flex-col gap-1">
                {results.map((c) => {
                  const category = getCategory(c.category);
                  return (
                    <li key={c.slug}>
                      <button
                        type="button"
                        onClick={() => go(c.slug)}
                        className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-accent"
                      >
                        <span>
                          <span className="block text-sm font-medium text-foreground">
                            {c.name}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {category?.name}
                          </span>
                        </span>
                        <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="border-t border-border px-4 py-2.5 text-right">
            <Link
              href="/calculators"
              onClick={() => setOpen(false)}
              className="text-xs font-medium text-primary hover:underline"
            >
              View all calculators
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
