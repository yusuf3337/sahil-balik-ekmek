import type { SiteData } from "@/types";

// ============================================================
// Sahil Balık Ekmek — Default Site Data
// Gerçek işletme bilgileri (Dikili / İzmir)
// ============================================================

export const defaultSiteData: SiteData = {
  businessName: "Sahil Balık Ekmek",
  slogan: "Dikili'nin Eşsiz Deniz Manzarası ve Taze Balık Lezzeti",
  contact: {
    phone: "0532 631 58 56",
    address: "Cumhuriyet Mahallesi, Sahil Kordon Boyu",
    addressLine2: "Dikili / İzmir",
    instagramUrl: "https://www.instagram.com/sahilbalikekmek/",
    googleMapsUrl:
      "https://www.google.com/maps/place/Sahil+bal%C4%B1k+ekmek/@39.0716358,26.8881396,17z",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.8!2d26.8881396!3d39.0716358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba1519b9ae5593%3A0xeacaebe3a35b4ad!2sSahil%20bal%C4%B1k%20ekmek!5e0!3m2!1str!2str!4v1700000000000",
  },
  hero: {
    title: "Sahil Balık Ekmek",
    subtitle:
      "Dikili sahilinde, denizin hemen kenarında günlük taze balık ve samimi Ege atmosferi.",
    ctaPrimary: "Yol Tarifi Al",
    ctaSecondary: "İletişime Geç",
  },
  workingHours: {
    monday: { open: "11:00", close: "23:00", closed: false },
    tuesday: { open: "11:00", close: "23:00", closed: false },
    wednesday: { open: "11:00", close: "23:00", closed: false },
    thursday: { open: "11:00", close: "23:00", closed: false },
    friday: { open: "11:00", close: "23:00", closed: false },
    saturday: { open: "11:00", close: "23:00", closed: false },
    sunday: { open: "11:00", close: "23:00", closed: false },
  },
  footer: {
    description:
      "Dikili kordon boyunda, Ege esintisi ve deniz manzarası eşliğinde günlük taze balık ekmek lezzeti.",
    copyright: `© ${new Date().getFullYear()} Sahil Balık Ekmek. Tüm hakları saklıdır.`,
  },
};
