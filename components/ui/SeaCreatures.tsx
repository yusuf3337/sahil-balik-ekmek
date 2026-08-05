"use client";

import React from "react";
import { motion } from "framer-motion";

export function SeaCreatures() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Swimming Fish School 1 (Left to Right) */}
      <motion.div
        initial={{ x: "-15%", y: "25%", opacity: 0 }}
        animate={{
          x: ["-15%", "115%"],
          y: ["25%", "22%", "28%", "25%"],
          opacity: [0, 0.4, 0.4, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0"
      >
        <FishGroup scale={0.7} />
      </motion.div>

      {/* Swimming Fish School 2 (Right to Left) */}
      <motion.div
        initial={{ x: "115%", y: "55%", opacity: 0 }}
        animate={{
          x: ["115%", "-15%"],
          y: ["55%", "50%", "58%", "55%"],
          opacity: [0, 0.35, 0.35, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
          delay: 6,
        }}
        className="absolute top-0 left-0 scale-x-[-1]"
      >
        <FishGroup scale={0.5} />
      </motion.div>

      {/* Floating Squid / Kalamar Silhouette */}
      <motion.div
        initial={{ y: "70%", x: "80%", opacity: 0.15 }}
        animate={{
          y: ["70%", "45%", "70%"],
          x: ["80%", "78%", "80%"],
          rotate: [0, 4, -3, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 text-white/20"
      >
        <SquidSvg width={54} height={110} />
      </motion.div>

      {/* Floating Sea Turtle / Gentle Ray silhouette */}
      <motion.div
        initial={{ x: "-10%", y: "65%", opacity: 0.12 }}
        animate={{
          x: ["-10%", "110%"],
          y: ["65%", "60%", "65%"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
          delay: 12,
        }}
        className="absolute top-0 left-0"
      >
        <MantaRaySvg width={90} height={60} />
      </motion.div>
    </div>
  );
}

function FishGroup({ scale = 1 }: { scale?: number }) {
  return (
    <div
      style={{ transform: `scale(${scale})` }}
      className="flex items-center gap-6 opacity-80"
    >
      <FishSvg width={36} height={20} />
      <div className="flex flex-col gap-3 -ml-2">
        <FishSvg width={28} height={16} />
        <FishSvg width={32} height={18} />
      </div>
      <div className="flex flex-col gap-4 -ml-3">
        <FishSvg width={22} height={14} />
        <FishSvg width={26} height={15} />
      </div>
    </div>
  );
}

function FishSvg({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 24"
      fill="currentColor"
      className="text-white/30"
    >
      <path d="M26,12 C35,4 40,12 40,12 C40,12 35,20 26,12 C18,22 6,18 0,12 C6,6 18,2 26,12 Z" />
      <circle cx="32" cy="10" r="1.5" fill="rgba(10,22,40,0.6)" />
    </svg>
  );
}

function SquidSvg({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 100"
      fill="currentColor"
    >
      {/* Mantle/Head */}
      <path d="M25,0 C38,0 48,25 45,55 C42,65 35,70 25,70 C15,70 8,65 5,55 C2,25 12,0 25,0 Z" />
      {/* Tentacles */}
      <path d="M12,70 Q8,85 10,100 M18,70 Q16,88 19,100 M25,70 Q25,90 25,100 M32,70 Q34,88 31,100 M38,70 Q42,85 40,100" stroke="currentColor" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

function MantaRaySvg({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 60"
      fill="currentColor"
      className="text-white/20"
    >
      <path d="M50,10 C70,10 95,28 100,32 C90,36 65,42 50,42 C35,42 10,36 0,32 C5,28 30,10 50,10 Z" />
      <path d="M50,42 Q50,55 52,60" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
