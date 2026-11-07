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
  footer: { note: string; creatorName: string; creatorUrl: string };
}

export const restaurantConfig: RestaurantConfig = {
  // Change identity, brand colours and metadata here for a new client.
  name: "Burger — Bun & Flame",
  tagline: "A modern burger kitchen",
  title: "Burger — Smash Burgers, Fries & Shakes in Adama",
  description: "A laid-back burger kitchen serving juicy smash burgers, loaded fries, cold drinks and thick shakes in the heart of Adama.",
  url: "https://burger.example.com",
  cuisine: "Burgers",
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
    whatsappNumber: "251952742250",
    whatsappUrl: "https://wa.me/251952742250",
    email: "hello@example.com",
    address: {
      street: "",
      city: "Adama",
      region: "Oromia",
      postalCode: "",
      country: "ET",
    },
    mapsUrl: "https://maps.google.com/?q=Adama+Oromia",
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
    eyebrow: "Adama's burger kitchen",
    headline: "Big flavour. Fresh buns. Zero fuss.",
    sub: "Stacked smash burgers, crisp fries and ice-cold drinks made for lunch breaks, late-night cravings and everything in between.",
    primaryCta: "Book a table",
    secondaryCta: "Explore the menu",
    // Swap this path (or URL) when demoing for a different restaurant.
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Double cheeseburger with melted cheese and fresh toppings",
    imagePosition: "center center",
    fallbackBackground: "radial-gradient(at 15% 18%, rgba(199,146,62,.55), transparent 48%), radial-gradient(at 86% 75%, rgba(157,49,37,.55), transparent 55%), linear-gradient(135deg, #261712, #492219 56%, #1d1510)",
  },
  highlights: [
    { label: "Find us", value: "Central Adama\nOromia" },
    { label: "Today", value: "hours" },
    { label: "Call", value: "+251 90 000 0000" },
  ],
  menu: {
    eyebrow: "The menu",
    heading: "Burgers worth getting messy for",
    intro: "Hand-pressed patties, toasted buns, punchy sauces and sides made fresh to order. Pick your stack, add a side and stay for a shake.",
    allergenNote: "Please tell us about allergies or dietary requirements when ordering.",
    categories: [
      {
        id: "burgers", label: "Burgers", note: "The reason you came.", items: [
          { name: "The Bun & Flame", description: "Double smashed beef patties, American cheese, caramelised onions, pickles and our smoky house sauce.", price: 580, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85", imageAlt: "Double cheeseburger with pickles and caramelised onions", tags: ["signature", "popular"] },
          { name: "Classic Cheeseburger", description: "A smashed beef patty, melted cheddar, shredded lettuce, tomato, onion and burger sauce in a toasted bun.", price: 450, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=85", imageAlt: "Classic cheeseburger with lettuce and tomato", tags: ["popular"] },
          { name: "Crispy Chicken", description: "Crunchy fried chicken, cool slaw, pickles and hot honey mayo on a soft toasted bun.", price: 520, image: "https://images.unsplash.com/photo-1615297928064-24977384d0e8?auto=format&fit=crop&w=900&q=85", imageAlt: "Crispy fried chicken burger with slaw", tags: ["new"] },
          { name: "Green Stack", description: "Crispy veggie patty, cheddar, lettuce, tomato, avocado and herb mayo.", price: 480, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85", imageAlt: "Vegetarian burger with fresh green toppings", tags: ["v"] },
        ]
      },
      {
        id: "sides", label: "Sides", note: "Make it a proper meal.", items: [
          { name: "House Fries", description: "Golden, seasoned fries with a crisp edge and fluffy centre.", price: 180, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85", imageAlt: "Golden seasoned fries in a basket", tags: ["v", "vg"] },
          { name: "Loaded Flame Fries", description: "Crisp fries covered with cheese sauce, chopped beef, jalapeños and smoky sauce.", price: 320, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=85", imageAlt: "Loaded fries with cheese and toppings", tags: ["popular"] },
          { name: "Chicken Bites", description: "Golden, tender chicken bites served with your choice of house dip.", price: 300, image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85", imageAlt: "Crispy chicken bites with dipping sauce", tags: [] },
        ]
      },
      {
        id: "drinks", label: "Drinks", note: "Cold, fizzy and made for burgers.", items: [
          { name: "Vanilla Shake", description: "Thick vanilla ice cream blended smooth and finished with whipped cream.", price: 260, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85", imageAlt: "Vanilla milkshake with whipped cream", tags: ["v", "popular"] },
          { name: "Chocolate Shake", description: "Rich chocolate, cold milk and a little extra sweetness for the ride home.", price: 280, image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85", imageAlt: "Chocolate milkshake in a tall glass", tags: ["v"] },
          { name: "Fresh Lemonade", description: "Bright, cold and made with fresh lemon, a touch of sugar and plenty of ice.", price: 160, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=85", imageAlt: "Fresh lemonade with lemon slices and ice", tags: ["vg", "gf"] },
          { name: "Pepsi", description: "Ice-cold pepsi served with plenty of fizz.", price: 90, image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=85", imageAlt: "Cold cola with ice", tags: ["vg", "gf"] },
          { name: "Sparkling Water", description: "Crisp, cold sparkling water to cut through every bite.", price: 70, image: "https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=900&q=85", imageAlt: "Bottle of sparkling water", tags: ["vg", "gf"] },
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
    heading: "A better burger break starts here.",
    body: [
      "Bun & Flame is a neighbourhood burger kitchen built around the things that matter: properly seasoned patties, toasted buns, crisp toppings and sauces with a little attitude.",
      "We cook to order, keep the room relaxed and make every burger generous enough to satisfy. Come hungry, bring your people and stay for something sweet.",
    ],
    gallery: [
      { image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85", alt: "Double cheeseburger with melted cheese" },
      { image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85", alt: "Fresh golden fries" },
      { image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85", alt: "Vanilla milkshake with whipped cream" },
      { image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=85", alt: "Classic cheeseburger with fresh toppings" },
    ],
  },
  visit: { eyebrow: "Visit", heading: "Find your new favourite burger spot", directionsLabel: "Get directions" },
  reservations: {
    eyebrow: "Reservations", heading: "Save a table for your crew", body: "Send us a reservation request and our team will confirm availability by phone or WhatsApp. For larger groups, please contact us directly.",
    action: "#", partySizes: ["1", "2", "3", "4", "5", "6+"], largePartyNote: "For parties of 6 or more, please call or message us.", submitLabel: "Send reservation request", confirmationHeading: "Your request is ready to confirm", confirmationBody: "This demo does not make a booking automatically. Please contact us by WhatsApp or phone and our team will confirm your table.",
  },
  takeout: { enabled: true, label: "Order by WhatsApp", href: "https://wa.me/251912345678", note: "Message us for today’s availability and collection details." },
  footer: {
    note: "Demo website — burgers, fries and good times in Adama.",
    creatorName: "Gosag Girma",
    creatorUrl: "https://gosagirma.me",
  },
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
