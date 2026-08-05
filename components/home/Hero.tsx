"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Utensils, Phone, Sun, Waves } from "lucide-react";
import { SeaCreatures } from "@/components/ui/SeaCreatures";
import { OceanBubbles } from "@/components/ui/OceanBubbles";
import { WavesDivider } from "@/components/ui/WavesDivider";
import { defaultSiteData } from "@/data/siteData";
import { GOOGLE_MAPS_DIRECTIONS } from "@/lib/constants";

interface HeroProps {
  data?: typeof defaultSiteData.hero;
}

export function Hero({ data = defaultSiteData.hero }: HeroProps) {
  return (
    <section
      className="relative min-h-[92dvh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#073B5C] via-[#052c46] to-[#04263D]"
      aria-label="Sahil Balık Ekmek Ana Karşılama"
    >
      {/* Subtle Sea Creatures & Bubbles */}
      <SeaCreatures />
      <OceanBubbles />

      {/* Main Content Container */}
      <div className="relative z-10 container-custom pt-32 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Aegean Coast Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#E0F2FE] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
            <Sun className="w-4 h-4 text-[#F97316] animate-spin-slow" />
            <span>Dikili Sahili · İzmir</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span className="text-white font-bold">Her Gün 11:00&apos;den İtibaren Açık</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-bold text-white text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.15] mb-6">
            Dikili&apos;nin Taze <span className="text-[#F97316] italic font-normal">Balık Ekmek</span> Lezzeti
          </h1>

          {/* Subtitle */}
          <p className="text-[#E0F2FE] text-base sm:text-xl font-medium leading-relaxed max-w-2xl mb-8">
            Denizden sofraya uzanan tazelik, Ege&apos;nin eşsiz atmosferi ve deniz esintisi eşliğinde.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
            <a
              href="#gallery-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-[#F97316]/30 hover:-translate-y-0.5"
            >
              <Utensils className="w-5 h-5" />
              Menüyü & Afişleri Gör
            </a>
            <a
              href={GOOGLE_MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base transition-all duration-200 border border-white/20 backdrop-blur-md hover:-translate-y-0.5"
            >
              <MapPin className="w-5 h-5 text-[#E0F2FE]" />
              Yol Tarifi Al (Dikili Sahili)
            </a>
          </div>

          {/* Quick Info Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-2xl text-white">
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E0F2FE]">Konum</span>
              <span className="font-serif font-bold text-sm sm:text-base text-white mt-1">Dikili Kordon Boyu</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E0F2FE]">İletişim</span>
              <a href="tel:05326315856" className="font-bold text-sm sm:text-base text-[#F97316] hover:underline mt-1">
                0532 631 58 56
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E0F2FE]">Atmosfer</span>
              <span className="font-serif font-bold text-sm sm:text-base text-white mt-1">Ege Deniz Esintisi</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave Transition to Sand White Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <WavesDivider fillColor="#F8F5EF" height={64} />
      </div>
    </section>
  );
}
