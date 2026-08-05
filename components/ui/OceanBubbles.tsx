"use client";

import React from "react";
import { motion } from "framer-motion";

export function OceanBubbles() {
  const bubbles = [
    { id: 1, left: "12%", size: 10, duration: 14, delay: 0 },
    { id: 2, left: "28%", size: 16, duration: 18, delay: 3 },
    { id: 3, left: "45%", size: 8, duration: 12, delay: 1 },
    { id: 4, left: "62%", size: 14, duration: 16, delay: 4 },
    { id: 5, left: "78%", size: 12, duration: 15, delay: 2 },
    { id: 6, left: "91%", size: 9, duration: 13, delay: 5 },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: "105%", x: 0, opacity: 0 }}
          animate={{
            y: ["105%", "-10%"],
            x: [0, 15, -15, 0],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: b.left,
            width: b.size,
            height: b.size,
          }}
          className="rounded-full bg-white/20 border border-white/30 backdrop-blur-[1px]"
        />
      ))}
    </div>
  );
}
