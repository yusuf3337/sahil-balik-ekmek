import React from "react";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types";

// ── Padding Map ───────────────────────────────────────────────
const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

// ── Card Component ────────────────────────────────────────────
export function Card({
  className,
  children,
  hover = false,
  glass = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg",
        paddingClasses[padding],
        glass
          ? "glass-card"
          : "bg-white border border-(--gray-200) shadow-(--shadow-sm)",
        hover && "hover-lift cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
