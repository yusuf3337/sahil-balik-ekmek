// ── InstagramIcon — Custom SVG ────────────────────────────────
// lucide-react'ta Instagram ikonu bazı versiyonlarda bulunmayabilir.
// Bu bileşen tutarlı bir fallback sağlar.

interface InstagramIconProps {
  className?: string;
  "aria-hidden"?: boolean;
}

export function InstagramIcon({ className = "w-4 h-4", "aria-hidden": ariaHidden }: InstagramIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
