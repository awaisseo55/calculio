export const COOKIE_CONSENT_STORAGE_KEY = "calculio-cookie-consent";
export const COOKIE_CONSENT_UPDATED_EVENT = "calculio-cookie-consent-updated";
export const OPEN_COOKIE_PREFERENCES_EVENT = "calculio-open-cookie-preferences";

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}

export type ConsentChoice = "all" | "essential" | "custom";

export interface CookiePreferences {
  essential: true;
  analytics: boolean;
  advertising: boolean;
  preferences: boolean;
}

export interface CookieConsentState {
  consent: ConsentChoice;
  timestamp: string;
  preferences: CookiePreferences;
}

export const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  advertising: false,
  preferences: false,
};

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsentState;
    if (!parsed?.preferences) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieConsent(state: CookieConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: state }));
}

/**
 * Gate any tracking script (Google Analytics, AdSense, etc.) behind this so
 * nothing loads before the visitor has made a consent choice.
 */
export function hasConsentFor(category: keyof CookiePreferences): boolean {
  const state = readCookieConsent();
  if (!state) return false;
  return Boolean(state.preferences[category]);
}
