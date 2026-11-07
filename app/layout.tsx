import type { Metadata } from "next";
import { restaurantConfig, restaurantSchema } from "@/data/restaurant.config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(restaurantConfig.url),
  title: {
    default: restaurantConfig.title,
    template: `%s — ${restaurantConfig.name}`,
  },
  description: restaurantConfig.description,
  keywords: [
    "restaurant website template",
    "restaurant template",
    "cafe website template",
    "Next.js template",
    "Tailwind CSS template",
    "free restaurant website",
  ],
  authors: [{ name: "Gosag Girma", url: "https://gosagirma.me" }],
  openGraph: {
    type: "website",
    url: restaurantConfig.url,
    title: restaurantConfig.title,
    description: restaurantConfig.description,
    siteName: restaurantConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: restaurantConfig.title,
    description: restaurantConfig.description,
  },
};

/**
 * Runs before paint to apply the saved (or OS-preferred) theme,
 * preventing a flash of the wrong color scheme.
 */
const themeInitScript = `
try {
  var t = localStorage.getItem("theme");
  if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Restaurant + Menu structured data — drives rich results. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema()),
          }}
        />
      </head>
      <body
        className="bg-white font-sans text-char-900 antialiased dark:bg-char-950 dark:text-ember-50"
        style={{
          "--brand-primary": restaurantConfig.brand.primary,
          "--brand-accent": restaurantConfig.brand.accent,
          "--brand-dark": restaurantConfig.brand.dark,
          "--brand-cream": restaurantConfig.brand.cream,
          "--brand-olive": restaurantConfig.brand.olive,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
