"use client";

import * as React from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  defaultPreferences,
  OPEN_COOKIE_PREFERENCES_EVENT,
  readCookieConsent,
  writeCookieConsent,
  type CookiePreferences,
} from "@/lib/cookie-consent";

const CATEGORY_COPY: {
  key: keyof CookiePreferences;
  title: string;
  description: string;
  locked?: boolean;
}[] = [
  {
    key: "essential",
    title: "Essential",
    description:
      "Needed for the site to work, including session handling and security. These cannot be switched off.",
    locked: true,
  },
  {
    key: "analytics",
    title: "Analytics",
    description:
      "Helps us understand how visitors use Calculio, such as which calculators are most popular, using tools like Google Analytics.",
  },
  {
    key: "advertising",
    title: "Advertising",
    description:
      "Used by Google AdSense and other advertising partners to show and measure relevant adverts.",
  },
  {
    key: "preferences",
    title: "Preferences",
    description:
      "Remembers your choices, such as light or dark mode, so you don't have to set them again.",
  },
];

export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);
  const [manageOpen, setManageOpen] = React.useState(false);
  const [preferences, setPreferences] = React.useState<CookiePreferences>(defaultPreferences);

  React.useEffect(() => {
    const existing = readCookieConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setPreferences(existing.preferences);
    }

    function handleOpenPreferences() {
      const current = readCookieConsent();
      if (current) setPreferences(current.preferences);
      setManageOpen(true);
    }

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  function saveConsent(consent: "all" | "essential" | "custom", prefs: CookiePreferences) {
    writeCookieConsent({
      consent,
      timestamp: new Date().toISOString(),
      preferences: prefs,
    });
    setPreferences(prefs);
    setVisible(false);
    setManageOpen(false);
  }

  function handleAcceptAll() {
    saveConsent("all", { essential: true, analytics: true, advertising: true, preferences: true });
  }

  function handleRejectNonEssential() {
    saveConsent("essential", { ...defaultPreferences });
  }

  function handleSavePreferences() {
    saveConsent("custom", preferences);
  }

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="region"
            aria-label="Cookie consent"
            className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/95 p-4 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur supports-backdrop-filter:bg-background/90 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-2xl sm:border sm:p-5"
          >
            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cookie className="size-4.5" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-foreground">We use cookies</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  We use cookies to improve your experience, analyse traffic, and personalise
                  ads. By clicking Accept All, you consent to our use of cookies. See our{" "}
                  <Link href="/cookie-policy" className="underline underline-offset-2 hover:text-foreground">
                    Cookie Policy
                  </Link>{" "}
                  for details.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Button onClick={handleAcceptAll} className="rounded-full sm:flex-1">
                Accept All Cookies
              </Button>
              <Button
                onClick={handleRejectNonEssential}
                variant="outline"
                className="rounded-full sm:flex-1"
              >
                Reject Non-Essential
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setManageOpen(true)}
              className="mt-3 text-xs font-medium text-muted-foreground underline underline-offset-2 hover:text-foreground"
            >
              Manage Preferences
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={manageOpen} onOpenChange={setManageOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cookie preferences</DialogTitle>
            <DialogDescription>
              Choose which categories of cookies you&apos;re happy for {""}
              Calculio to use. You can change these at any time. Read more in our{" "}
              <Link href="/cookie-policy">Cookie Policy</Link>.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            {CATEGORY_COPY.map((category) => (
              <div key={category.key} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {category.title}
                    {category.locked && (
                      <span className="ml-2 text-xs font-normal text-muted-foreground">
                        (always on)
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <Switch
                  checked={preferences[category.key]}
                  disabled={category.locked}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, [category.key]: checked }))
                  }
                  aria-label={`${category.title} cookies`}
                  className="mt-0.5 shrink-0"
                />
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button onClick={handleSavePreferences} className="rounded-full">
              Save preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
