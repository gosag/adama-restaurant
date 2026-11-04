"use client";

import { useMemo, useState } from "react";
import {
  formatPrice,
  restaurantConfig,
  type MenuTag,
} from "@/data/restaurant.config";
import Reveal from "@/components/Reveal";
import RestaurantImage from "@/components/RestaurantImage";

const TAG_STYLES: Record<MenuTag, string> = {
  v: "bg-emerald-100 text-emerald-800",
  vg: "bg-lime-100 text-lime-800",
  gf: "bg-sky-100 text-sky-800",
  popular: "bg-amber-100 text-amber-900",
  signature: "bg-red-100 text-red-900",
  new: "bg-violet-100 text-violet-900",
};

export default function Menu() {
  const { menu, dietaryLegend, takeout } = restaurantConfig;
  const [activeCategory, setActiveCategory] = useState("all");

  const allItems = useMemo(
    () =>
      menu.categories.flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          category: category.label,
          categoryId: category.id,
        })),
      ),
    [menu.categories],
  );

  const items =
    activeCategory === "all"
      ? allItems
      : allItems.filter((item) => item.categoryId === activeCategory);

  const filters = [
    { id: "all", label: "All" },
    ...menu.categories.map(({ id, label }) => ({ id, label })),
  ];

  return (
    <section id="menu" className="paper relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-kicker">{menu.eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {menu.heading}
            </h2>
            <p className="mt-5 leading-relaxed opacity-70">{menu.intro}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mt-9 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Menu categories"
          >
            {filters.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category.id
                    ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white shadow-lg shadow-red-900/15"
                    : "border-current/15 bg-white/50 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] dark:bg-white/5"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs opacity-70">
            {dietaryLegend.map((legend) => (
              <span key={legend.tag} className="inline-flex items-center gap-1.5">
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${TAG_STYLES[legend.tag]}`}
                >
                  {legend.tag}
                </span>
                {legend.label}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal
              key={`${activeCategory}-${item.name}`}
              delay={Math.min(index * 55, 330)}
            >
              <article className="menu-card group h-full overflow-hidden rounded-2xl border border-black/7 bg-white shadow-sm dark:border-white/10 dark:bg-char-900">
                <div className="relative aspect-[4/3] overflow-hidden bg-char-900">
                  <RestaurantImage
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-char-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-white backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold leading-tight">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-display text-lg font-bold text-[var(--brand-primary)]">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed opacity-70">
                    {item.description}
                  </p>
                  {item.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${TAG_STYLES[tag]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm opacity-60">
          {menu.allergenNote}
        </p>

        {takeout.enabled && (
          <Reveal>
            <div className="mt-14 rounded-2xl border border-current/10 bg-white/55 p-8 text-center dark:bg-white/5">
              <h3 className="font-display text-2xl font-bold">
                Bringing the table home?
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm opacity-70">
                {takeout.note}
              </p>
              <a
                href={takeout.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-full bg-[var(--brand-primary)] px-7 py-3.5 font-semibold text-white transition hover:brightness-110"
              >
                {takeout.label}
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
