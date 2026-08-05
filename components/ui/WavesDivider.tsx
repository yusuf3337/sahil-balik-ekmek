// ── WavesDivider Component ────────────────────────────────────
// SVG wave divider between sections

interface WavesDividerProps {
  fillColor?: string;
  fromColor?: string;
  flip?: boolean;
  height?: number;
  className?: string;
}

export function WavesDivider({
  fillColor = "#ffffff",
  flip = false,
  height = 72,
  className = "",
}: WavesDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          transform: flip ? "scaleY(-1)" : undefined,
        }}
      >
        <path
          d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

// ── TopWave Variant (covers bottom of previous section) ───────
export function TopWave({
  fillColor = "#ffffff",
  className = "",
}: {
  fillColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{ height: 64 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
      >
        <path
          d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
