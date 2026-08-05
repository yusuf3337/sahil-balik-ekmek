import React from "react";
import Image from "next/image";
import { CheckCircle2, Sun } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pillars = [
  "Her gün taze temin edilen Ege deniz balıkları",
  "Çıtır ekmek arası lezzet ve özel baharat harmanı",
  "Dikili kordon boyunun masmavi manzarası ve esintisi",
  "Mavi sandalyeli, samimi ve sıcak Ege atmosferi",
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-[#F8F5EF]" id="about-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Visual Presentation */}
          <AnimatedSection direction="left" className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-[#073B5C]">
              <Image
                src="/gallery/sunum.jpg"
                alt="Sahil Balık Ekmek Masası Sunumu"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073B5C] via-[#073B5C]/50 to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F97316] text-white text-xs font-bold uppercase tracking-wider mb-2">
                    <Sun className="w-3.5 h-3.5 text-white" /> Dikili Kordon Boyu
                  </span>
                  <h3 className="font-serif font-bold text-white text-2xl drop-shadow-sm">
                    Mavi Sandalyeli Ege Köşemiz
                  </h3>
                  <p className="text-white font-medium text-sm mt-1 drop-shadow-sm">
                    Deniz kıyısında, samimi ve taze lezzetler.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Copy */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-6 flex flex-col gap-6">
            <SectionHeader
              eyebrow="Ege Kıyısında Lezzet"
              title="Denizin Kıyısında, Samimi Bir Balık Durağı"
              align="left"
            />

            <p className="text-[#0F172A] text-base leading-relaxed font-normal">
              Dikili sahilinde, Ege denizi esintisi eşliğinde günlük taze balıklarımızı özenle pişirip sıcak ekmek arasında sunuyoruz. Mavi sandalyelerimiz ve beyaz masalarımızla Ege deniz kültürünün en doğal halini yaşatıyoruz.
            </p>

            <p className="text-[#334155] text-base leading-relaxed">
              Abartılı gösterişten uzak, lezzeti ve tazeliği her şeyin üstünde tutan anlayışımızla; aileniz ve sevdiklerinizle deniz kenarında huzurlu bir akşam geçirebileceğiniz lezzet noktasıyız.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((pillar) => (
                <div key={pillar} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <span className="text-[#0F172A] text-sm font-semibold leading-snug">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-[#0284C7] hover:text-[#073B5C] font-bold text-sm hover:underline"
              >
                Hakkımızda Detaylı Bilgi & Hikayemiz →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
