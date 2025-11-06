import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_STORAGE_KEY = "merchanthaus-cookie-consent";
const CONSENT_COOKIE_NAME = "mh_cookie_consent";

type ConsentStatus = "accepted" | "declined";

const storeConsent = (status: ConsentStatus) => {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch (error) {
    // localStorage might be unavailable (e.g. private mode); ignore errors
  }

  try {
    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `${CONSENT_COOKIE_NAME}=${status}; path=/; max-age=${maxAge}`;
  } catch (error) {
    // document.cookie writes can fail if cookies are disabled; ignore silently
  }
};

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY) as ConsentStatus | null;
      if (!stored) {
        setIsOpen(true);
      }
    } catch (error) {
      // If localStorage is unavailable we still want to show the banner
      setIsOpen(true);
    }
  }, []);

  const handleChoice = (status: ConsentStatus) => {
    storeConsent(status);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie usage notice"
      className="fixed inset-x-4 bottom-4 z-50 sm:right-6 sm:left-auto sm:max-w-md"
    >
      <div className="rounded-2xl border border-border bg-background/95 p-6 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <h2 className="text-lg font-semibold text-foreground">We value your privacy</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. You can
          learn more in our {" "}
          <Link href="/privacy" className="text-crimson font-medium underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <Button
            type="button"
            variant="outline"
            className="sm:flex-1"
            onClick={() => handleChoice("declined")}
          >
            Decline non-essential
          </Button>
          <Button
            type="button"
            className="sm:flex-1 bg-crimson hover:bg-crimson/90"
            onClick={() => handleChoice("accepted")}
          >
            Accept all cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
