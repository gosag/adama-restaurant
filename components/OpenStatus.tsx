"use client";

import { useEffect, useState } from "react";
import { restaurantConfig, formatHours } from "@/data/restaurant.config";

/**
 * IMPORTANT: this template is a static export, so anything computed on the
 * server is frozen at BUILD time. "Are you open right now?" has to run in the
 * browser or it would be permanently stale. Both exports below are client-side.
 *
 * Note the hours array in restaurant.config.ts is Monday-first, while JavaScript's
 * getDay() is Sunday-first — todayIndex() bridges that.
 */
function todayIndex(d: Date): number {
  const js = d.getDay(); // 0 = Sunday
  return js === 0 ? 6 : js - 1; // config array starts on Monday
}

function isOpenNow(d: Date): boolean {
  const entry = restaurantConfig.hours[todayIndex(d)];
  if (!entry || entry.closed) return false;

  const [oh, om] = entry.open.split(":").map(Number);
  const [ch, cm] = entry.close.split(":").map(Number);
  const mins = d.getHours() * 60 + d.getMinutes();
  const openMins = oh * 60 + om;
  let closeMins = ch * 60 + cm;

  // Handle a closing time past midnight (e.g. open 17:00, close 01:00).
  if (closeMins <= openMins) closeMins += 24 * 60;

  return mins >= openMins && mins < closeMins;
}

/** Green "Open now" / muted "Closed" pill. */
export default function OpenStatus() {
  const [state, setState] = useState<null | boolean>(null);

  useEffect(() => {
    const tick = () => setState(isOpenNow(new Date()));
    tick();
    // Re-check every minute so the badge flips without a reload.
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Render nothing until mounted — avoids a hydration mismatch and avoids
  // ever showing a wrong, build-time-frozen status.
  if (state === null) return null;

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15">
      <span
        className={`h-2 w-2 rounded-full ${
          state ? "bg-emerald-400" : "bg-white/40"
        }`}
        aria-hidden="true"
      />
      {state ? "Open now" : "Closed now"}
    </span>
  );
}

/** Today's opening hours as plain text. */
export function TodayHours() {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const d = new Date();
    setText(formatHours(restaurantConfig.hours[todayIndex(d)]));
  }, []);

  return <span suppressHydrationWarning>{text || "See hours below"}</span>;
}
