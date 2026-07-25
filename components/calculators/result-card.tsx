"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

interface ResultCardProps {
  children: ReactNode;
  resultKey: string | number;
}

export function ResultCard({ children, resultKey }: ResultCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resultKey}
        initial={{ opacity: 0, y: 12, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-success/5 p-6 card-glow sm:p-8"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function ResultStat({
  label,
  value,
  emphasis = false,
  positive = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
  positive?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <span
        className={
          emphasis
            ? `font-mono text-3xl font-bold tracking-tight tabular-nums sm:text-4xl ${positive ? "text-success" : "text-foreground"}`
            : `font-mono text-lg font-semibold tabular-nums ${positive ? "text-success" : "text-foreground"}`
        }
      >
        {value}
      </span>
    </div>
  );
}
