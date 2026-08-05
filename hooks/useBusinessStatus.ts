"use client";

import { useEffect, useState } from "react";
import type { BusinessStatus, WorkingHours } from "@/types";
import { JS_DAY_MAP } from "@/lib/constants";
import { timeToMinutes } from "@/lib/utils";

/**
 * Calculates whether the business is currently open based on
 * the provided working hours and current local time.
 * Updates every minute to stay accurate.
 */
export function useBusinessStatus(hours: WorkingHours): BusinessStatus {
  const [status, setStatus] = useState<BusinessStatus>(() =>
    calculateStatus(hours)
  );

  useEffect(() => {
    // Recalculate on mount and every minute
    setStatus(calculateStatus(hours));

    const interval = setInterval(() => {
      setStatus(calculateStatus(hours));
    }, 60_000);

    return () => clearInterval(interval);
  }, [hours]);

  return status;
}

function calculateStatus(hours: WorkingHours): BusinessStatus {
  const now = new Date();
  const dayKey = JS_DAY_MAP[now.getDay()];
  const todayHours = hours[dayKey];

  if (todayHours.closed) {
    // Find next opening day
    const nextOpen = findNextOpenDay(hours, now.getDay());
    return { isOpen: false, nextEvent: nextOpen };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = timeToMinutes(todayHours.open);
  const closeMinutes = timeToMinutes(todayHours.close);

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      nextEvent: `${todayHours.close}'de kapanır`,
    };
  }

  if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      nextEvent: `Bugün ${todayHours.open}'de açılır`,
    };
  }

  // After close — find next open day
  const nextOpen = findNextOpenDay(hours, (now.getDay() + 1) % 7);
  return { isOpen: false, nextEvent: nextOpen };
}

// Maps JS day index (0=Sun) to DayKey
const JS_DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
] as const;

const TR_DAYS: Record<string, string> = {
  sunday: "Pazar",
  monday: "Pazartesi",
  tuesday: "Salı",
  wednesday: "Çarşamba",
  thursday: "Perşembe",
  friday: "Cuma",
  saturday: "Cumartesi",
};

function findNextOpenDay(hours: WorkingHours, startDayIndex: number): string {
  for (let i = 0; i < 7; i++) {
    const dayIndex = (startDayIndex + i) % 7;
    const dayKey = JS_DAYS[dayIndex];
    const dayHours = hours[dayKey];
    if (!dayHours.closed) {
      if (i === 0) {
        return `Bugün ${dayHours.open}'de açılır`;
      }
      if (i === 1) {
        return `Yarın ${dayHours.open}'de açılır`;
      }
      return `${TR_DAYS[dayKey]} ${dayHours.open}'de açılır`;
    }
  }
  return "Geçici olarak kapalı";
}
