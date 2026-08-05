import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Navigation, Sun } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { WavesDivider } from "@/components/ui/WavesDivider";
import { WorkingHours } from "@/components/home/WorkingHours";
import { defaultSiteData } from "@/data/siteData";
import { SITE_URL } from "@/lib/constants";

const { contact } = defaultSiteData;

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Sahil Balık Ekmek iletişim bilgileri, adres, telefon (0532 631 58 56), çalışma saatleri ve Google Haritalar konumu. Dikili İzmir.",
  alternates: {
    canonical: `${SITE_URL}/iletisim`,
  },
  openGraph: {
    title: "İletişim | Sahil Balık Ekmek",
    description: "Dikili İzmir Sahil Balık Ekmek iletişim bilgileri ve konumu.",
    url: `${SITE_URL}/iletisim`,
  },
};

export default function IletisimPage() {
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
                <Sun className="w-3.5 h-3.5" /> Bize Ulaşın
              </span>
              <h1 className="font-serif font-extrabold text-white text-5xl sm:text-7xl mb-4 tracking-tight drop-shadow-lg">
                İletişim & Konum
              </h1>
              <p className="text-white text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-semibold drop-shadow-md">
                Dikili sahil kordonunda taze balık ekmek keyfi için sizleri bekliyoruz.
              </p>
            </AnimatedSection>
          </div>
          <WavesDivider fillColor="#F8F5EF" height={60} className="absolute bottom-0 left-0 right-0" />
        </section>

        {/* Contact Info Grid */}
        <section className="py-20 bg-[#F8F5EF]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Address */}
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-[#0284C7] hover:shadow-lg transition-all text-center flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">Adres</p>
                <p className="font-bold text-[#073B5C] text-base">{contact.address}</p>
                <p className="text-slate-500 text-xs">{contact.addressLine2}</p>
              </a>

              {/* Phone */}
              <a
                href="tel:05326315856"
                className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-[#F97316] hover:shadow-lg transition-all text-center flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#F97316]">Telefon</p>
                <p className="font-bold text-[#073B5C] text-lg">0532 631 58 56</p>
                <p className="text-slate-500 text-xs font-medium">Aramak için tıklayın</p>
              </a>

              {/* Instagram */}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-pink-500 hover:shadow-lg transition-all text-center flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#E1306C] flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#E1306C]">Instagram</p>
                <p className="font-bold text-[#073B5C] text-base">@sahilbalikekmek</p>
                <p className="text-slate-500 text-xs font-medium">Bizi takip edin</p>
              </a>
            </div>

            {/* Map */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 mb-8">
              <iframe
                title="Sahil Balık Ekmek Haritası"
                src={contact.googleMapsEmbed}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* High Contrast Map Button */}
            <div className="text-center">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base transition-all shadow-xl hover:shadow-[#F97316]/30 hover:-translate-y-0.5"
              >
                <Navigation className="w-5 h-5 text-white" />
                <span className="text-white font-bold">Google Maps&apos;te Yol Tarifi Al</span>
              </a>
            </div>
          </div>
        </section>

        {/* Working Hours */}
        <WorkingHours />
      </main>

      <Footer />
    </>
  );
}
