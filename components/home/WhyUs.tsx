import React from "react";
import { Fish, Waves, ShieldCheck, Zap, Heart } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const points = [
  {
    icon: Fish,
    title: "Günlük Taze Ege Balıkları",
    description:
      "Balıklarımız günlük temin edilir, dondurulmuş ürün kullanılmadan ızgara veya tavada anında hazırlanır.",
  },
  {
    icon: Waves,
    title: "Masmavi Deniz Manzarası",
    description:
      "Dikili kordon boyunun eşsiz sahil atmosferinde, deniz esintisi eşliğinde yemeğinizi yiyin.",
  },
  {
    icon: ShieldCheck,
    title: "Dürüst & Şeffaf Hizmet",
    description:
      "Lezzetlerimizi dürüst fiyatlar, hijyenik mutfak standartları ve samimi misafirperverlikle sunuyoruz.",
  },
  {
    icon: Zap,
    title: "Sıcak & Çıtır Sunum",
    description:
      "Siparişiniz verdiğiniz anda taze pişirilip sıcak ekmek arası veya porsiyon tabağında servis edilir.",
  },
  {
    icon: Heart,
    title: "Samimi Aile Ortamı",
    description:
      "Mavi sandalyeli sahil masalarımızda, kendinizi rahat hissedeceğiniz samimi ve huzurlu bir Ege durağı.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <AnimatedSection className="mb-16">
          <SectionHeader
            eyebrow="Neden Sahil Balık Ekmek"
            title="Sade, Taze ve Doğal Lezzet"
            description="Deniz kıyısında, tazeliğin ve Ege misafirperverliğinin buluştuğu nokta."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <AnimatedSection
                key={point.title}
                delay={index * 0.08}
                className="p-8 rounded-3xl bg-[#F8F5EF] border border-slate-200/80 hover:border-[#0284C7] hover:shadow-lg transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/10 text-[#0284C7] group-hover:bg-[#073B5C] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-bold text-[#073B5C]/30 text-lg">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-[#073B5C] text-xl">
                  {point.title}
                </h3>

                <p className="text-[#475569] text-sm leading-relaxed">
                  {point.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
