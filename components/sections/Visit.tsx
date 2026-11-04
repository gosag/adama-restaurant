import { restaurantConfig, formatHours } from "@/data/restaurant.config";
import Reveal from "@/components/Reveal";

/**
 * Hours, address, phone — the three things visitors most often came for.
 * Kept high on the page and never hidden behind a "Contact" click.
 */
export default function Visit() {
  const { contact, hours, visit } = restaurantConfig;

  return (
    <section id="visit" className="border-y border-current/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <span className="section-kicker">{visit.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {visit.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-current/10 p-7">
              <h3 className="font-display text-lg font-bold">Opening hours</h3>
              <dl className="mt-5 space-y-2.5">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <dt className="opacity-70">{h.day}</dt>
                    <span className="leader" aria-hidden="true" />
                    <dd
                      className={`tabular-nums ${
                        h.closed ? "opacity-40" : "font-medium"
                      }`}
                    >
                      {formatHours(h)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-current/10 p-7">
              <h3 className="font-display text-lg font-bold">Address</h3>
              <address className="mt-5 text-sm not-italic leading-relaxed opacity-75">
                {contact.address.street}
                <br />
                {contact.address.city}, {contact.address.region}{" "}
                {contact.address.postalCode}
              </address>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                {visit.directionsLabel}
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
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-2xl border border-current/10 p-7">
              <h3 className="font-display text-lg font-bold">Get in touch</h3>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="block font-semibold hover:underline"
                >
                  {contact.phone}
                </a>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-semibold text-[var(--brand-olive)] hover:underline"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="block opacity-75 hover:underline"
                >
                  {contact.email}
                </a>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={restaurantConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/15 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </a>
                <a
                  href={restaurantConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/15 transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
