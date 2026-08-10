"use client";

import { Button } from "@/components/ui/button";
import { openCookiePreferences } from "@/lib/cookie-consent";

export function ManageCookiesButton({ className }: { className?: string }) {
  return (
    <Button onClick={openCookiePreferences} className={className} variant="outline">
      Manage cookie preferences
    </Button>
  );
}
