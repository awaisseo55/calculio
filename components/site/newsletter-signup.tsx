"use client";

import * as React from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function NewsletterSignup() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "Newsletter signup"
    )}&body=${encodeURIComponent(`Please add me to the mailing list: ${email}`)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
        <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
        Thanks, your email app should have opened so you can confirm.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <h3 className="text-sm font-semibold text-foreground">Stay updated</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        New calculators and rate updates, no spam.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <div className="relative flex-1">
          <Mail
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-label="Email address"
            className="h-9 pl-9 text-sm"
          />
        </div>
        <Button type="submit" size="sm" className="rounded-full">
          Subscribe
        </Button>
      </div>
    </form>
  );
}
