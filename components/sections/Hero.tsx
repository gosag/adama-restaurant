"use client";

import { useEffect, useState } from "react";
import { restaurantConfig } from "@/data/restaurant.config";
import Reveal from "@/components/Reveal";
import OpenStatus, { TodayHours } from "@/components/OpenStatus";

/** Full-bleed food photography with the configured premium fallback behind it. */
export default function Hero() {
  const { hero, contact, highlights } = restaurantConfig;
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    if (!hero.image) return;
    let cancelled = false;
    const image = new window.Image();
    image.onload = () => {
      if (!cancelled) setImageReady(true);
    };
    image.onerror = () => {
      if (!cancelled) setImageReady(false);
    };
    image.src = hero.image;
    return () => {
      cancelled = true;
    };
  }, [hero.image]);

  const backgroundStyle = imageReady
    ? {
        backgroundImage: `linear-gradient(90deg, rgba(25,14,11,.86) 0%, rgba(25,14,11,.55) 46%, rgba(25,14,11,.18) 100%), linear-gradient(0deg, rgba(15,9,7,.55), transparent 45%), url("${hero.image}")`,
        backgroundPosition: `center, center, ${hero.imagePosition}`,
      }
    : { backgroundImage: hero.fallbackBackground };

  return (
    <section
      id="top"
      className="hero-photo relative min-h-[670px] overflow-hidden text-white"
      style={backgroundStyle}
      aria-label={hero.imageAlt}
    >
      <div className="relative mx-auto flex min-h-[670px] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:pb-24 sm:pt-32">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ember-100 ring-1 ring-white/20 backdrop-blur-sm">
              {hero.eyebrow}
            </span>
            <OpenStatus />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[.98] tracking-tight sm:text-7xl">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
            <a
              href="#reserve"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <dl className="mt-14 grid max-w-4xl gap-px overflow-hidden rounded-2xl bg-white/15 ring-1 ring-white/15 backdrop-blur sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="bg-char-950/55 p-5 sm:p-6">
                <dt className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/55">
                  {highlight.label}
                </dt>
                <dd className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white">
                  {highlight.value === "hours" ? (
                    <TodayHours />
                  ) : highlight.label === "Call" ? (
                    <a href={`tel:${contact.phoneHref}`} className="hover:underline">
                      {highlight.value}
                    </a>
                  ) : (
                    highlight.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
