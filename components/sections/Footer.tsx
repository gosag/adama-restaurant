import Logo from "@/components/Logo";
import { restaurantConfig, formatHours } from "@/data/restaurant.config";

export default function Footer() {
  const { contact, hours, social, footer, name, description } = restaurantConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--brand-dark)] px-5 py-14 text-[var(--brand-cream)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-65">
              {description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 underline-offset-4 hover:underline hover:opacity-100"
              >
                Instagram
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 underline-offset-4 hover:underline hover:opacity-100"
              >
                Facebook
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 underline-offset-4 hover:underline hover:opacity-100"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] opacity-50">
              Hours
            </h3>
            <dl className="mt-4 space-y-1.5 text-sm">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-3">
                  <dt className="opacity-60">{h.day.slice(0, 3)}</dt>
                  <dd className={h.closed ? "opacity-40" : ""}>
                    {formatHours(h)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] opacity-50">
              Find us
            </h3>
            <address className="mt-4 text-sm not-italic leading-relaxed opacity-70">
              {contact.address.street}
              <br />
              {contact.address.city}
              {contact.address.postalCode ? `, ${contact.address.postalCode}` : ""}
            </address>
            <a
              href={`tel:${contact.phoneHref}`}
              className="mt-3 block text-sm font-semibold hover:underline"
            >
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 block text-sm opacity-70 hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs opacity-55 sm:flex-row">
          <span>
            © {year} {name}. All rights reserved.
          </span>
          <span className="footer-credit">
            {footer.note} Made by{" "}
            <a
              href={footer.creatorUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footer.creatorName}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
