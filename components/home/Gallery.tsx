"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, X, Utensils, Camera, Award } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: "afis" | "sunum";
  badge: string;
  aspect: string;
  description: string;
}

const galleryData: GalleryImage[] = [
  {
    id: "afis-1",
    src: "/gallery/afis-1.jpg",
    title: "Sardalya Porsiyon Afişi",
    subtitle: "Taptaze Sardalya, İnce Soğan, Marul & Limon",
    category: "afis",
    badge: "Özel Menü Afişi",
    aspect: "aspect-[3/4]",
    description:
      "Taptaze Ege sardalyası, ince kıyılmış soğan, kıvırcık marul ve taze limon dilimleri ile hazırlanan porsiyon sunum afişimiz.",
  },
  {
    id: "afis-2",
    src: "/gallery/afis-2.jpg",
    title: "Sardalya Ekmek Afişi",
    subtitle: "İzmir'in En Doğal Lezzeti — Efsane Balık Ekmek",
    category: "afis",
    badge: "Özel Menü Afişi",
    aspect: "aspect-[3/4]",
    description:
      "Çıtır taze ekmek arasında çıtır çıtır pişen taze sardalyalar, lezzeti ve tazeliğiyle Dikili sahilinin simgesi.",
  },
  {
    id: "sunum-1",
    src: "/gallery/sunum.jpg",
    title: "Masamızdan Lezzet Sunumu",
    subtitle: "Sardalya Porsiyon, Balık Ekmek & Taze Salata",
    category: "sunum",
    badge: "Masamızdan Canlı",
    aspect: "aspect-[9/16] sm:aspect-[4/5]",
    description:
      "Deniz kenarındaki masamızda hazırlanan sardalya porsiyon tabağı, sıcak balık ekmek ve yanında taze mevsim salatası.",
  },
  {
    id: "sunum-2",
    src: "/gallery/sunum-2.jpg",
    title: "Taze Ekmek Arası Keyfi",
    subtitle: "Buz Gibi Şalgam & Limon İle Eşsiz Uyum",
    category: "sunum",
    badge: "Masamızdan Canlı",
    aspect: "aspect-[9/16] sm:aspect-[4/5]",
    description:
      "Sıcak taze ekmek arası balık lezzeti, yanında taze sıkılmış limon ve buz gibi ferahlatıcı içecek sunumu.",
  },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState<"all" | "afis" | "sunum">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredItems =
    activeTab === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="gallery-section">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--ocean)]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <SectionHeader
            eyebrow="Sahil Balık Ekmek Lezzetleri"
            title="Afişler & Canlı Sunumlar"
            description="Özenle hazırladığımız menü afişlerimiz ve deniz kenarındaki masamızdan taze kareler."
            align="center"
            className="[&_h2]:text-white [&_p]:text-slate-300"
          />
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
            {[
              { id: "all", label: "Tümü", icon: Sparkles },
              { id: "afis", label: "Menü Afişleri", icon: Utensils },
              { id: "sunum", label: "Masamızdan Sunumlar", icon: Camera },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--ocean)] text-white shadow-lg shadow-[var(--ocean)]/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Posters & Presentations Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {filteredItems.map((item) => {
            const isPoster = item.category === "afis";

            return (
              <AnimatedSection key={item.id} direction="up" className="flex">
                <div
                  onClick={() => setSelectedImage(item)}
                  className={`group relative w-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between ${
                    isPoster
                      ? "bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-[var(--ocean)]/40 hover:border-[var(--ocean)] shadow-2xl hover:shadow-[var(--ocean)]/20"
                      : "bg-slate-800/60 border border-slate-700/60 hover:border-slate-500 shadow-xl"
                  }`}
                >
                  {/* Poster Decorative Frame Header */}
                  <div className="p-4 sm:p-5 flex items-center justify-between z-10 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      {isPoster ? (
                        <Award className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Camera className="w-4 h-4 text-sky-400" />
                      )}
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-300 group-hover:bg-[var(--ocean)] group-hover:text-white transition-colors">
                      Büyütmek İçin Tıklayın
                    </span>
                  </div>

                  {/* Image Container with Framing */}
                  <div className="relative w-full p-4 sm:p-6 flex items-center justify-center bg-slate-950/40">
                    <div className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden border border-slate-700/50 shadow-inner group-hover:scale-[1.02] transition-transform duration-500`}>
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain sm:object-cover"
                        priority={isPoster}
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-lg">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Caption Footer */}
                  <div className="p-5 sm:p-6 bg-slate-900/90 border-t border-slate-800 flex flex-col gap-1.5">
                    <h3 className="font-serif font-bold text-white text-lg sm:text-xl group-hover:text-[var(--ocean-300)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Social Instagram Link */}
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <a
            href="https://www.instagram.com/sahilbalikekmek/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--ocean)] to-sky-600 hover:from-[var(--ocean-600)] hover:to-sky-700 text-white font-semibold text-sm transition-all shadow-xl hover:shadow-[var(--ocean)]/30 hover:-translate-y-0.5"
          >
            <InstagramIcon className="w-5 h-5" />
            Instagram@sahilbalikekmek Sayfamızı Takip Edin
          </a>
        </AnimatedSection>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col cursor-default"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-slate-950 flex items-center justify-between border-b border-slate-800">
                <div>
                  <h4 className="font-serif font-bold text-white text-base sm:text-lg">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs text-slate-400">{selectedImage.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative flex-1 min-h-[50vh] max-h-[70vh] p-4 bg-slate-950 flex items-center justify-center">
                <div className="relative w-full h-full min-h-[400px] aspect-auto">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                {selectedImage.description}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
