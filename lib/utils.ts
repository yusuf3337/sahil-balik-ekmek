import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ── cn utility ───────────────────────────────────────────────
// clsx + tailwind-merge için — conditional class names

// Note: clsx and tailwind-merge are included by default in
// Next.js + TailwindCSS projects. If missing, install with:
// npm install clsx tailwind-merge

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ── Format phone ─────────────────────────────────────────────
export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, "\u00a0"); // non-breaking spaces
}

// ── Time helpers ─────────────────────────────────────────────

/**
 * Parses "HH:MM" into total minutes since midnight
 */
export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

/**
 * Formats "HH:MM" into Turkish locale format "HH.MM"
 */
export function formatTime(time: string): string {
  return time.replace(":", ".");
}
