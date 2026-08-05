import React from "react";
import { cn } from "@/lib/utils";
import type { SectionHeaderProps } from "@/types";

// ── SectionHeader Component ───────────────────────────────────
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        alignClasses[align],
        className
      )}
    >
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--navy) leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-(--gray-600) text-base md:text-lg leading-relaxed mt-1",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
