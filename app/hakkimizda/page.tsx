import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Leaf, Sun } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WavesDivider } from "@/components/ui/WavesDivider";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Sahil Balık Ekmek'in hikayesi; Dikili kordonunda taze Ege lezzetleri ve samimi deniz atmosferi.",
  alternates: {
    canonical: `${SITE_URL}/hakkimizda`,
  },
  openGraph: {
    title: "Hakkımızda | Sahil Balık Ekmek",
    description:
      "Dikili sahilinde hizmet veren Sahil Balık Ekmek'in hikayesini keşfedin.",
    url: `${SITE_URL}/hakkimizda`,
  },
};

const values = [
  {
    icon: Award,
    title: "Tazelik",
    description:
      "Her gün taze deniz ürünleri temin ediyor, dondurulmuş ürün kullanmadan özenle servis ediyoruz.",
  },
  {
    icon: Leaf,
    title: "Doğallık & Sadelik",
    description:
      "Katkısız, doğal malzemeler ve özel lezzet harmanımızla Ege deniz tadını doğrudan sunuyoruz.",
  },
  {
    icon: Users,
    title: "Samimi Ev Sıcaklığı",
    description:
      "Deniz kenarındaki köşemizde her misafirimize aile sıcaklığında samimi bir karşılama sunuyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* Bright High-Contrast Page Hero */}
        <section
          className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-b from-[#073B5C] via-[#094d78] to-[#0284C7]"
          aria-label="Sayfa başlığı"
        >
          {/* Ambient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="container-custom relative z-10 text-center">
            <AnimatedSection direction="down">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-md">
                <Sun className="w-3.5 h-3.5" /> Hikayemiz & Tutkumuz
              </span>
              <h1 className="font-serif font-extrabold text-white text-5xl sm:text-7xl mb-4 tracking-tight drop-shadow-lg">
                Hakkımızda
              </h1>
              <p className="text-white text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-semibold drop-shadow-md">
                Dikili sahilinde denizin tam kıyısında taze Ege lezzetleri.
              </p>
            </AnimatedSection>
          </div>
          <WavesDivider fillColor="#F8F5EF" height={60} className="absolute bottom-0 left-0 right-0" />
        </section>

        {/* Story */}
        <section className="py-20 bg-[#F8F5EF]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left" className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-[#073B5C] border border-slate-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#073B5C] to-[#0284C7]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="relative w-28 h-28 mb-3 ring-4 ring-white/30 rounded-full overflow-hidden">
                      <Image
                        src="/sahilbalikekmek.png"
                        alt="Sahil Balık Ekmek"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-serif font-bold text-white text-2xl drop-shadow-sm">Sahil Balık Ekmek</h3>
                    <p className="text-white text-sm font-medium mt-1">Dikili Kordon Boyu · İzmir</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.15} className="lg:col-span-6 flex flex-col gap-6">
                <SectionHeader
                  eyebrow="Samimi Lezzet Durağı"
                  title="Dikili Sahilinde Taze Balık Ekmek Keyfi"
                  align="left"
                />

                <p className="text-[#0F172A] text-base leading-relaxed">
                  Sahil Balık Ekmek, Dikili sahilinin masmavi manzarasında, Ege denizi esintisi eşliğinde günlük taze balık lezzetini misafirleriyle buluşturuyor.
                </p>
                <p className="text-[#334155] text-base leading-relaxed">
                  Abartılı gösterişten uzak, lezzeti ve tazeliği ön planda tutan anlayışımızla; deniz kıyısında yürüyüş yapanların, Dikili sakinlerinin ve ziyaretçilerin uğrak yeri olmaktan mutluluk duyuyoruz.
                </p>

                <div className="pt-2">
                  <a
                    href="/iletisim"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold transition-all shadow-lg hover:shadow-[#F97316]/30"
                  >
                    Bize Ulaşın & Konum Al
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="mb-14">
              <SectionHeader
                eyebrow="İlkelerimiz"
                title="Sade & Doğal Anlayış"
                description="Bizi tercih eden misafirlerimize verdiğimiz değerler."
                align="center"
              />
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <StaggerItem key={val.title}>
                    <div className="bg-[#F8F5EF] rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif font-bold text-[#073B5C] text-xl">{val.title}</h3>
                      <p className="text-[#334155] text-sm leading-relaxed">{val.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
