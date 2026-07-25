import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-semibold tracking-tight",
        className
      )}
      aria-label="Calculio home"
    >
      <span
        className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-sm"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2.5" width="16" height="19" rx="3" />
          <line x1="8" y1="7" x2="16" y2="7" />
          <circle cx="8.3" cy="12.2" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12.2" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="15.7" cy="12.2" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="8.3" cy="16" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="16" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="15.7" cy="16" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="text-lg text-foreground">
        Calcul<span className="text-primary">io</span>
      </span>
    </Link>
  );
}
