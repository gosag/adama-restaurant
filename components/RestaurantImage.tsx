"use client";

import { useState } from "react";
import { restaurantConfig } from "@/data/restaurant.config";

/**
 * Keeps photo spaces intentional when a restaurant replaces an image with an
 * unavailable URL. It deliberately avoids rendering a broken-image icon.
 */
export default function RestaurantImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`image-fallback ${className}`}
        role="img"
        aria-label={`${alt} — photo unavailable`}
      >
        <span>{restaurantConfig.name}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
    />
  );
}
