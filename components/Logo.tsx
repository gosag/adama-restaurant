import { restaurantConfig } from "@/data/restaurant.config";

/**
 * Wordmark + mark. Pure CSS/SVG — no image asset to replace.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-500 text-white">
        {/* fork + knife mark */}
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 2v7a2 2 0 0 0 2 2v11" />
          <path d="M11 2v7" />
          <path d="M17 2c-1.5 2-2 4-2 6.5 0 1.5.7 2.5 2 2.5v11" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold tracking-tight">
          {restaurantConfig.name}
        </span>
        <span className="block text-[11px] uppercase tracking-[0.16em] opacity-60">
          {restaurantConfig.tagline}
        </span>
      </span>
    </span>
  );
}
