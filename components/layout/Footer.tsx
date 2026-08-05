import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { defaultSiteData } from "@/data/siteData";

interface FooterProps {
  data?: typeof defaultSiteData;
}

export function Footer({ data = defaultSiteData }: FooterProps) {
  const { businessName, contact, footer } = data;

  return (
    <footer className="bg-[#073B5C] text-white pt-16 pb-8 border-t border-white/10" role="contentinfo">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/20">

          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shrink-0">
                <Image
                  src="/sahilbalikekmek.png"
                  alt="Sahil Balık Ekmek Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif font-bold text-white text-2xl tracking-tight">
                  {businessName}
                </p>
                <p className="text-white font-semibold text-xs mt-0.5 tracking-wider uppercase">
                  Dikili Sahili · İzmir
                </p>
              </div>
            </Link>
            <p className="text-white font-normal text-sm leading-relaxed max-w-sm">
              {footer.description}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#F97316] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#F97316] flex items-center justify-center text-white transition-colors"
                aria-label="Google Maps"
              >
                <Navigation className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-serif font-bold text-white text-lg mb-1">
              İletişim & Konum
            </h4>
            <a
              href="tel:05326315856"
              className="flex items-center gap-3 text-white hover:text-[#F97316] text-base transition-colors"
            >
              <Phone className="w-5 h-5 text-[#F97316] shrink-0" />
              <span className="font-bold">0532 631 58 56</span>
            </a>
            <a
              href={contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white hover:text-[#F97316] text-sm transition-colors"
            >
              <MapPin className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
              <span className="font-medium">{contact.address}, {contact.addressLine2}</span>
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-[#F97316] text-sm transition-colors"
            >
              <InstagramIcon className="w-5 h-5 text-[#F97316] shrink-0" />
              <span className="font-medium">@sahilbalikekmek</span>
            </a>
          </div>

          {/* Working Hours */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-white text-lg mb-1 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#F97316]" />
              Çalışma Saatleri
            </h4>
            <p className="text-white text-base font-bold">Her Gün</p>
            <p className="text-[#10B981] font-extrabold text-xl tracking-tight">11:00 – 23:00</p>
            <p className="text-white font-medium text-xs mt-1 leading-relaxed">
              Dikili sahil kordonunda taze balık ekmek ve Ege esintisi.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white font-medium">
          <p>{footer.copyright}</p>
          <div className="flex gap-6 font-semibold">
            <Link href="/" className="text-white hover:text-[#F97316]">Anasayfa</Link>
            <Link href="/hakkimizda" className="text-white hover:text-[#F97316]">Hakkımızda</Link>
            <Link href="/iletisim" className="text-white hover:text-[#F97316]">İletişim</Link>
            <Link href="/admin" className="text-white hover:text-[#F97316]">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
