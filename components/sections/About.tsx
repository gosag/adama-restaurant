import { restaurantConfig } from "@/data/restaurant.config";
import Reveal from "@/components/Reveal";
import RestaurantImage from "@/components/RestaurantImage";

export default function About() {
  const { about } = restaurantConfig;

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="section-kicker">{about.eyebrow}</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {about.heading}
            </h2>
            {about.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 leading-relaxed opacity-75">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3">
            {about.gallery.map((photo, index) => (
              <div
                key={photo.alt}
                className={`overflow-hidden rounded-2xl ${
                  index === 1 || index === 3 ? "mt-8" : ""
                } ${index < 2 ? "h-60 sm:h-72" : "h-40 sm:h-48"}`}
              >
                <RestaurantImage
                  src={photo.image}
                  alt={photo.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
