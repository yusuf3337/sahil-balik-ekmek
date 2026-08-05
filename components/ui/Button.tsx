import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";

// ── Variant & Size Maps ──────────────────────────────────────
const variantClasses = {
  primary:
    "bg-(--navy) text-white hover:bg-(--navy-800) shadow-md hover:shadow-(--shadow-ocean) border border-transparent",
  secondary:
    "bg-(--ocean) text-white hover:bg-(--ocean-600) shadow-md border border-transparent",
  outline:
    "bg-transparent text-(--navy) border-2 border-(--navy) hover:bg-(--navy) hover:text-white",
  ghost:
    "bg-transparent text-(--ocean) hover:bg-(--ocean-100) border border-transparent",
} as const;

const sizeClasses = {
  sm: "px-4 py-2 text-sm rounded-md gap-1.5",
  md: "px-6 py-3 text-sm rounded-lg gap-2",
  lg: "px-8 py-4 text-base rounded-xl gap-2.5",
} as const;

// ── Button Component ─────────────────────────────────────────
export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className,
  onClick,
  children,
  disabled = false,
  type = "button",
  id,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-semibold",
    "transition-all duration-(--transition-base)",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ocean)",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "select-none whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <Link
        href={href}
        id={id}
        aria-label={ariaLabel}
        className={baseClasses}
        {...externalProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      id={id}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
