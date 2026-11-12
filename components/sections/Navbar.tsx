"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { restaurantConfig } from "@/data/restaurant.config";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our story" },
  { href: "#visit", label: "Visit" },
  { href: "#reserve", label: "Reservations" },
];

const LANGUAGES = ["Amh", "Eng", "Oro"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-black/5 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-char-950/85"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" aria-label={`${restaurantConfig.name} — home`}>
          <Logo />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium opacity-75 transition-opacity hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={`tel:${restaurantConfig.contact.phoneHref}`}
            className="hidden text-sm font-semibold lg:inline"
          >
            {restaurantConfig.contact.phone}
          </a>
          <div className="flex items-center gap-1" aria-label="Languages">
            {LANGUAGES.map((language) => (
              <button
                key={language}
                type="button"
                aria-pressed={language === "Eng"}
                className={`rounded-full px-2 py-1 text-xs font-semibold transition-colors ${
                  language === "Eng"
                    ? "bg-[var(--brand-primary)] text-white"
                    : "opacity-60 hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/10"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
          <ThemeToggle />
          <a
            href="#reserve"
            className="hidden rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:inline-block"
          >
            Reserve
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 md:hidden dark:border-white/15"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white px-5 pb-6 pt-2 md:hidden dark:border-white/10 dark:bg-char-950">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/5 py-3.5 text-base font-medium last:border-0 dark:border-white/10"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[var(--brand-primary)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Reserve a table
            </a>
            <a
              href={`tel:${restaurantConfig.contact.phoneHref}`}
              className="rounded-full border border-black/10 px-5 py-3 text-center text-sm font-semibold dark:border-white/15"
            >
              Call {restaurantConfig.contact.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
