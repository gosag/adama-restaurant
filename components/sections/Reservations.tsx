"use client";

import { useState } from "react";
import { restaurantConfig } from "@/data/restaurant.config";
import Reveal from "@/components/Reveal";

/**
 * Reservation request form.
 *
 * With `reservations.action === "#"`, submissions stay on-page and point guests
 * to phone/WhatsApp confirmation. Point `action` at a booking provider or form
 * endpoint when a real backend is available.
 */
export default function Reservations() {
  const { reservations, contact } = restaurantConfig;
  const [sent, setSent] = useState(false);

  const usesBackend = Boolean(reservations.action && reservations.action !== "#");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!usesBackend) {
      e.preventDefault();
      setSent(true);
    }
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reserve" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="section-kicker">{reservations.eyebrow}</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {reservations.heading}
            </h2>
            <p className="mt-5 leading-relaxed opacity-75">{reservations.body}</p>

            <div className="mt-8 rounded-2xl border border-current/10 bg-[var(--brand-cream)]/60 p-6 dark:bg-white/5">
              <p className="text-sm font-semibold">{reservations.largePartyNote}</p>
              <a
                href={`tel:${contact.phoneHref}`}
                className="mt-2 inline-block font-display text-2xl font-bold text-[var(--brand-primary)] hover:underline"
              >
                {contact.phone}
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-olive)] hover:underline"
              >
                Message on WhatsApp
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {sent ? (
            <div className="rounded-2xl border border-[var(--brand-accent)]/35 bg-[var(--brand-cream)] p-8 text-center dark:bg-white/5">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 13 4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">
                {reservations.confirmationHeading}
              </h3>
              <p className="mt-2 text-sm opacity-75">{reservations.confirmationBody}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Confirm on WhatsApp
                </a>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="inline-flex items-center justify-center rounded-full border border-current/15 px-6 py-3 text-sm font-semibold transition hover:bg-black/5 dark:hover:bg-white/10"
                >
                  Call {contact.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                Make another request
              </button>
            </div>
          ) : (
            <form
              action={usesBackend ? reservations.action : undefined}
              method={usesBackend ? "POST" : undefined}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-current/10 bg-white/70 p-7 shadow-sm dark:bg-white/5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="input"
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="input"
                  />
                </Field>
                <Field label="Date" htmlFor="date">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    min={today}
                    className="input"
                  />
                </Field>
                <Field label="Time" htmlFor="time">
                  <input
                    id="time"
                    name="time"
                    type="time"
                    required
                    className="input"
                  />
                </Field>
              </div>

              <fieldset className="mt-5">
                <legend className="mb-2 block text-sm font-medium">Party size</legend>
                <div className="flex flex-wrap gap-2">
                  {reservations.partySizes.map((size, i) => (
                    <label
                      key={size}
                      className="cursor-pointer rounded-full border border-current/15 px-4 py-2 text-sm font-medium transition-colors has-[:checked]:border-[var(--brand-primary)] has-[:checked]:bg-[var(--brand-primary)] has-[:checked]:text-white"
                    >
                      <input
                        type="radio"
                        name="party"
                        value={size}
                        defaultChecked={i === 1}
                        className="sr-only"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5">
                <Field label="Anything we should know?" htmlFor="notes" optional>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Allergies, high chair, celebrating something…"
                    className="input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-[var(--brand-primary)] px-6 py-4 font-semibold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:ring-offset-2"
              >
                {reservations.submitLabel}
              </button>
              <p className="mt-3 text-center text-xs opacity-55">
                We&rsquo;ll confirm by phone or WhatsApp — this form does not book a table
                automatically.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label}
        {optional && <span className="ml-1 opacity-50">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
