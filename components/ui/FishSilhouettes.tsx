"use client";

// ── FishSilhouettes Component ─────────────────────────────────
// Subtle animated fish silhouettes for the hero background

interface FishSilhouettesProps {
  className?: string;
}

export function FishSilhouettes({ className = "" }: FishSilhouettesProps) {
  const fishes = [
    {
      id: 1,
      x: "8%",
      y: "20%",
      size: 64,
      animationClass: "animate-float",
      opacity: 0.07,
      delay: "0s",
      scaleX: 1,
    },
    {
      id: 2,
      x: "75%",
      y: "35%",
      size: 48,
      animationClass: "animate-float-delayed",
      opacity: 0.05,
      delay: "2s",
      scaleX: -1,
    },
    {
      id: 3,
      x: "55%",
      y: "15%",
      size: 36,
      animationClass: "animate-float-slow",
      opacity: 0.06,
      delay: "1s",
      scaleX: 1,
    },
    {
      id: 4,
      x: "88%",
      y: "65%",
      size: 56,
      animationClass: "animate-float",
      opacity: 0.05,
      delay: "3s",
      scaleX: -1,
    },
    {
      id: 5,
      x: "20%",
      y: "72%",
      size: 40,
      animationClass: "animate-float-delayed",
      opacity: 0.06,
      delay: "1.5s",
      scaleX: 1,
    },
  ];

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {fishes.map((fish) => (
        <div
          key={fish.id}
          className={fish.animationClass}
          style={{
            position: "absolute",
            left: fish.x,
            top: fish.y,
            opacity: fish.opacity,
            animationDelay: fish.delay,
            transform: `scaleX(${fish.scaleX})`,
          }}
        >
          <FishSvg size={fish.size} />
        </div>
      ))}
    </div>
  );
}

// ── Fish SVG ──────────────────────────────────────────────────
function FishSvg({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="50" cy="30" rx="35" ry="18" />
      {/* Tail */}
      <path d="M15,30 L0,10 L5,30 L0,50 Z" />
      {/* Dorsal fin */}
      <path d="M45,12 Q55,0 65,12" />
      {/* Pectoral fin */}
      <path d="M55,30 Q60,20 72,25 Q65,35 55,30 Z" />
      {/* Eye */}
      <circle cx="75" cy="26" r="4" fill="rgba(10,22,40,0.6)" />
      <circle cx="76" cy="25" r="1.5" fill="white" />
    </svg>
  );
}
