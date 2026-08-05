import React from "react";
import { MapPin, Phone, Navigation, Compass } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { defaultSiteData } from "@/data/siteData";

interface LocationProps {
  contact?: typeof defaultSiteData.contact;
}

export function Location({ contact = defaultSiteData.contact }: LocationProps) {
  return (
    <section className="py-24 bg-white" id="location-section">
      <div className="container-custom">
        <AnimatedSection className="mb-14">
          <SectionHeader
            eyebrow="Konum & Ulaşım"
            title="Dikili Sahili Kordon Boyundayız"
            description="Deniz kıyısında kordon boyunca yürürken kolayca ulaşabileceğiniz lokasyondayız."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Column */}
          <AnimatedSection direction="left" className="lg:col-span-7 flex flex-col">
            <div className="relative w-full flex-1 min-h-[360px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <iframe
                title="Sahil Balık Ekmek Dikili Sahil Konumu"
                src={contact.googleMapsEmbed}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Location Info Cards */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-5 flex flex-col gap-4">
            {/* Location Card */}
            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl border border-slate-200 bg-[#F8F5EF] hover:border-[#0284C7] hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-1 block">
                  Açık Adres
                </span>
                <p className="text-[#073B5C] font-bold text-base">{contact.address}</p>
                <p className="text-[#475569] text-xs mt-0.5">{contact.addressLine2}</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:05326315856"
              className="p-6 rounded-3xl border border-slate-200 bg-[#F8F5EF] hover:border-[#0284C7] hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] mb-1 block">
                  Telefon İle Sipariş / Bilgi
                </span>
                <p className="text-[#073B5C] font-bold text-lg">0532 631 58 56</p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl border border-slate-200 bg-[#F8F5EF] hover:border-pink-500 hover:shadow-md transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#E1306C] flex items-center justify-center shrink-0">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E1306C] mb-1 block">
                  Instagram Sayfamız
                </span>
                <p className="text-[#073B5C] font-bold text-base">@sahilbalikekmek</p>
              </div>
            </a>

            {/* Directions Button */}
            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg transition-all hover:-translate-y-0.5 mt-2"
            >
              <Navigation className="w-4 h-4" />
              Google Maps&apos;te Yol Tarifi Al
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
