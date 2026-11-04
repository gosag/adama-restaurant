/**
 * RESTAURANT CUSTOMISATION — edit this file to turn the demo into another
 * restaurant. Names, prices, photos, colours, contact details and all
 * restaurant-specific copy intentionally live here, not in components.
 */

export type MenuTag = "v" | "vg" | "gf" | "popular" | "signature" | "new";

export interface MenuItem {
  name: string;
  description: string;
  /** Numeric Birr amount. `formatPrice` is responsible for the presentation. */
  price: number;
  image: string;
  imageAlt: string;
  tags?: MenuTag[];
}

export interface MenuCategory {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  title: string;
  description: string;
  url: string;
  cuisine: string;
  priceRange: string;
  currency: "ETB";
  brand: { primary: string; accent: string; dark: string; cream: string; olive: string };
  contact: {
    phone: string;
    phoneHref: string;
    whatsappNumber: string;
    whatsappUrl: string;
    email: string;
    address: { street: string; city: string; region: string; postalCode: string; country: string };
    mapsUrl: string;
  };
  social: { instagram: string; facebook: string };
  hours: { day: string; closed: boolean; open: string; close: string }[];
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
    imagePosition: string;
    /** The layered colour treatment shown while the photo loads or fails. */
    fallbackBackground: string;
  };
  highlights: { label: string; value: string }[];
  menu: { eyebrow: string; heading: string; intro: string; allergenNote: string; categories: MenuCategory[] };
  dietaryLegend: { tag: MenuTag; label: string }[];
  about: { eyebrow: string; heading: string; body: string[]; gallery: { image: string; alt: string }[] };
  visit: { eyebrow: string; heading: string; directionsLabel: string };
  reservations: {
    eyebrow: string;
    heading: string;
    body: string;
    action: string;
    partySizes: string[];
    largePartyNote: string;
    submitLabel: string;
    confirmationHeading: string;
    confirmationBody: string;
  };
  takeout: { enabled: boolean; label: string; href: string; note: string };
  footer: { note: string };
}

export const restaurantConfig: RestaurantConfig = {
  // Change identity, brand colours and metadata here for a new client.
  name: "Restaurant Demo",
  tagline: "Ethiopian Restaurant",
  title: "Adama Restaurant — Ethiopian Kitchen & Coffee in Addis Ababa",
  description: "A warm, contemporary Ethiopian dining experience centred on shared platters, slow-cooked wots and ceremonial buna.",
  url: "https://mesobhouse.example.com",
  cuisine: "Ethiopian",
  priceRange: "$$",
  currency: "ETB",
  brand: {
    primary: "#9D3125",
    accent: "#C7923E",
    dark: "#261712",
    cream: "#FBF5E9",
    olive: "#687143",
  },
  contact: {
    phone: "+251 90 000 0000",
    phoneHref: "+25190000000",
    whatsappNumber: "251912345678",
    whatsappUrl: "https://wa.me/251952742250",
    email: "hello@example.com",
    address: {
      street: "",
      city: "Adama",
      region: "Oromia",
      postalCode: "",
      country: "ET",
    },
    mapsUrl: "https://maps.google.com/?q=Bole+Road+Addis+Ababa",
  },
  social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/" },
  hours: [
    { day: "Monday", closed: false, open: "11:00", close: "22:00" },
    { day: "Tuesday", closed: false, open: "11:00", close: "22:00" },
    { day: "Wednesday", closed: false, open: "11:00", close: "22:00" },
    { day: "Thursday", closed: false, open: "11:00", close: "22:00" },
    { day: "Friday", closed: false, open: "11:00", close: "23:00" },
    { day: "Saturday", closed: false, open: "09:00", close: "23:00" },
    { day: "Sunday", closed: false, open: "09:00", close: "22:00" },
  ],
  hero: {
    eyebrow: "Contemporary Ethiopian dining",
    headline: "Gather around a table made for sharing.",
    sub: "Rich, slow-simmered wots, warm injera and the generous spirit of Ethiopian hospitality — served from our mesob to yours.",
    primaryCta: "Reserve a table",
    secondaryCta: "Explore the menu",
    // Swap this path (or URL) when demoing for a different restaurant.
    image: "/images/hero-platter.jpg",
    imageAlt: "Ethiopian food platter with injera and colourful stews",
    imagePosition: "center center",
    fallbackBackground: "radial-gradient(at 15% 18%, rgba(199,146,62,.55), transparent 48%), radial-gradient(at 86% 75%, rgba(157,49,37,.55), transparent 55%), linear-gradient(135deg, #261712, #492219 56%, #1d1510)",
  },
  highlights: [
    { label: "Find us", value: "Bole Road\nAddis Ababa" },
    { label: "Today", value: "hours" },
    { label: "Call", value: "+251 91 234 5678" },
  ],
  menu: {
    eyebrow: "Our table",
    heading: "The flavours of Ethiopia",
    intro: "From fragrant wots to bright fasting dishes, every plate is made to be passed, shared and remembered.",
    allergenNote: "Please tell us about allergies or dietary requirements when ordering.",
    categories: [
      {
        id: "meat", label: "Meat dishes", note: "Deeply spiced, slowly prepared.", items: [
          { name: "Doro Wot", description: "Our signature berbere chicken stew with a seasoned egg, served with fresh injera.", price: 650, image: "/images/doro-wot.jpg", imageAlt: "Doro wot chicken stew with injera", tags: ["signature", "popular"] },
          { name: "Awaze Tibs", description: "Tender sautéed beef in awaze, rosemary and green chilli, finished over a high flame.", price: 720, image: "/images/tibs.jpg", imageAlt: "Awaze tibs beef with injera", tags: ["popular"] },
          { name: "Kitfo", description: "Hand-minced seasoned beef with mitmita and niter kibbeh; ask for it leb leb or fully cooked.", price: 760, image: "/images/kitfo.jpg", imageAlt: "Ethiopian kitfo with ayibe and gomen", tags: ["signature"] },
          { name: "Siga Wot", description: "Slow-braised beef in a glossy, aromatic berbere sauce with a generous side of injera.", price: 680, image: "/images/menelik-plate.jpg", imageAlt: "Siga wot beef stew on injera", tags: ["gf"] },
        ]
      },
      {
        id: "vegetarian", label: "Vegetarian & fasting", note: "Vibrant plant-led classics.", items: [
          { name: "Beyaynetu", description: "A colourful shared platter of our vegetarian favourites on soft, tangy injera.", price: 520, image: "/images/beyaynetu.jpg", imageAlt: "Vegetarian beyaynetu platter with injera", tags: ["vg", "popular"] },
          { name: "Shiro Wot", description: "Silky ground chickpea stew with garlic, onion and a slow bloom of Ethiopian spices.", price: 390, image: "/images/shiro.jpg", imageAlt: "Shiro wot with injera", tags: ["vg"] },
          { name: "Misir Wot", description: "Red lentils simmered in berbere until rich, warming and beautifully fragrant.", price: 360, image: "/images/lentil-stew.jpg", imageAlt: "Misir wot red lentil stew", tags: ["vg", "gf"] },
          { name: "Kik Alicha", description: "Gentle split peas with turmeric, ginger and niter kibbeh.", price: 360, image: "/images/yellow-stew.jpg", imageAlt: "Kik alicha yellow split pea stew", tags: ["v", "gf"] },
        ]
      },
      {
        id: "traditional", label: "Traditional dishes", note: "A little extra for the table.", items: [
          { name: "Chechebsa", description: "Torn flatbread folded with spiced butter and berbere, a beloved Ethiopian breakfast.", price: 330, image: "/images/flatbread.jpg", imageAlt: "Chechebsa spiced flatbread breakfast", tags: ["v", "new"] },
          { name: "Sambusa", description: "Three crisp pastry parcels filled with warmly spiced lentils and herbs.", price: 240, image: "/images/sambusa.jpg", imageAlt: "Crispy Ethiopian lentil sambusa", tags: ["vg"] },
          { name: "Firfir", description: "Injera ribbons stirred through a richly seasoned tomato and berbere sauce.", price: 350, image: "/images/restaurant-plate.jpg", imageAlt: "Firfir shredded injera in berbere sauce", tags: ["v"] },
        ]
      },
      {
        id: "drinks", label: "Drinks", note: "From the jebena and beyond.", items: [
          { name: "Ethiopian Buna", description: "Freshly roasted and brewed Ethiopian coffee, served black from the jebena.", price: 120, image: "/images/buna.jpg", imageAlt: "Ethiopian buna coffee ceremony", tags: ["vg", "signature"] },
          { name: "Macchiato", description: "A short Ethiopian espresso softened with a cloud of milk foam.", price: 110, image: "/images/macchiato.jpg", imageAlt: "Macchiato with milk foam", tags: ["v"] },
          { name: "Avocado Spris", description: "Layered avocado, mango and papaya juice — cool, silky and sunny.", price: 180, image: "/images/spris.jpg", imageAlt: "Layered avocado and fruit spris juice", tags: ["vg", "gf"] },
          { name: "Spiced Shai", description: "A fragrant cup of Ethiopian tea with warming whole spices.", price: 90, image: "/images/tea.jpg", imageAlt: "Cup of spiced Ethiopian tea", tags: ["vg"] },
          { name: "Pepsi", description: "Ice-cold Pepsi, the classic soft drink with your meal.", price: 60, image: "/images/pepsi.jpg", imageAlt: "Pepsi soft drink", tags: ["vg", "gf"] },
          { name: "Ambo", description: "Sparkling Ambo mineral water — crisp, local and refreshing.", price: 50, image: "/images/ambo.jpg", imageAlt: "Ambo sparkling mineral water", tags: ["vg", "gf"] },
        ]
      }
    ]
  },
  dietaryLegend: [
    { tag: "v", label: "Vegetarian" },
    { tag: "vg", label: "Vegan" },
    { tag: "gf", label: "Gluten-free" },
    { tag: "popular", label: "Popular" },
    { tag: "signature", label: "Signature" },
    { tag: "new", label: "New" },
  ],
  about: {
    eyebrow: "Our story",
    heading: "A generous table, rooted in tradition.",
    body: [
      "At Mesob House, a meal begins with injera and an invitation to share. Our kitchen honours the depth of Ethiopia’s regional cooking while giving every gathering a relaxed, contemporary setting.",
      "We toast spices slowly, simmer our wots patiently and brew coffee with the same care we give every guest. Come for a platter; stay for the conversation.",
    ],
    gallery: [
      { image: "/images/hero-platter.jpg", alt: "Ethiopian sharing platter" },
      { image: "/images/coffee.jpg", alt: "Freshly brewed Ethiopian coffee" },
      { image: "/images/beyaynetu.jpg", alt: "Colourful Ethiopian stews" },
      { image: "/images/doro-wot.jpg", alt: "Doro wot served with injera" },
    ],
  },
  visit: { eyebrow: "Visit", heading: "Come gather with us", directionsLabel: "Get directions" },
  reservations: {
    eyebrow: "Reservations", heading: "Save your place at the mesob", body: "Send us a reservation request and our team will confirm availability by phone or WhatsApp. For larger gatherings, please contact us directly.",
    action: "#", partySizes: ["1", "2", "3", "4", "5", "6+"], largePartyNote: "For parties of 6 or more, please call or message us.", submitLabel: "Send reservation request", confirmationHeading: "Your request is ready to confirm", confirmationBody: "This demo does not make a booking automatically. Please contact us by WhatsApp or phone and our team will confirm your table.",
  },
  takeout: { enabled: true, label: "Order by WhatsApp", href: "https://wa.me/251912345678", note: "Message us for today’s availability and collection details." },
  footer: { note: "A reusable Ethiopian restaurant demo. Replace the sample details in restaurant.config.ts for your next client." },
};

export type SiteConfig = RestaurantConfig;

export function formatPrice(price: number): string {
  return `Br ${new Intl.NumberFormat("en-US").format(price)}`;
}

export function formatTime(t: string): string {
  if (!t) return "";
  const [hStr, m] = t.split(":");
  const h = Number(hStr);
  const suffix = h >= 12 ? "pm" : "am";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return m === "00" ? `${hour12}${suffix}` : `${hour12}:${m}${suffix}`;
}

export function formatHours(entry: { closed: boolean; open: string; close: string }): string {
  return entry.closed ? "Closed" : `${formatTime(entry.open)} – ${formatTime(entry.close)}`;
}

const DAY_SCHEMA: Record<string, string> = { Monday: "Monday", Tuesday: "Tuesday", Wednesday: "Wednesday", Thursday: "Thursday", Friday: "Friday", Saturday: "Saturday", Sunday: "Sunday" };

export function restaurantSchema() {
  const c = restaurantConfig;
  const a = c.contact.address;
  return {
    "@context": "https://schema.org", "@type": "Restaurant", name: c.name, description: c.description, url: c.url,
    telephone: c.contact.phone, servesCuisine: c.cuisine, priceRange: c.priceRange,
    address: { "@type": "PostalAddress", streetAddress: a.street, addressLocality: a.city, addressRegion: a.region, postalCode: a.postalCode, addressCountry: a.country },
    openingHoursSpecification: c.hours.filter((h) => !h.closed).map((h) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${DAY_SCHEMA[h.day]}`, opens: h.open, closes: h.close })),
    hasMenu: { "@type": "Menu", hasMenuSection: c.menu.categories.map((category) => ({ "@type": "MenuSection", name: category.label, hasMenuItem: category.items.map((item) => ({ "@type": "MenuItem", name: item.name, description: item.description, offers: { "@type": "Offer", price: item.price, priceCurrency: c.currency } })) })) },
  };
}
