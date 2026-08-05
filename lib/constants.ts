import type { NavItem, DayKey, WhyUsItem } from "@/types";

// ============================================================
// Sahil Balık Ekmek — Site Constants
// ============================================================

export const SITE_URL = "https://sahilbalikekmek.com";

export const SITE_NAME = "Sahil Balık Ekmek";

export const SITE_DESCRIPTION =
  "Dikili İzmir'in kalbinde, her gün taze çekilen balıklardan hazırlanan efsane balık ekmek deneyimi. Deniz kenarında nefis bir lezzet durağı.";

export const NAV_ITEMS: NavItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const DAY_LABELS: Record<DayKey, string> = {
  monday: "Pazartesi",
  tuesday: "Salı",
  wednesday: "Çarşamba",
  thursday: "Perşembe",
  friday: "Cuma",
  saturday: "Cumartesi",
  sunday: "Pazar",
};

export const DAY_ORDER: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

// Maps 0 (Sun) → 6 (Sat) to DayKey
export const JS_DAY_MAP: Record<number, DayKey> = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: "fresh",
    icon: "Fish",
    title: "Her Gün Taze Ürün",
    description:
      "Sabahın ilk saatlerinde çekilen taze Ege balıkları ile hazırlanır. Dondurulmuş ürün kullanılmaz.",
  },
  {
    id: "view",
    icon: "Waves",
    title: "Eşsiz Deniz Manzarası",
    description:
      "Dikili Körfezi'nin masmavi sularına karşı, deniz esintisinde enfes bir lezzet keyfi yaşayın.",
  },
  {
    id: "price",
    icon: "BadgeCheck",
    title: "Uygun & Dürüst Fiyat",
    description:
      "Kaliteden ödün vermeden, herkese uygun fiyatlarla sunduğumuz gerçek Ege lezzetleri.",
  },
  {
    id: "speed",
    icon: "Zap",
    title: "Hızlı Servis",
    description:
      "Dakikalar içinde hazırlanan siparişlerle zamanınıza saygı duyuyoruz. Hız ve lezzet bir arada.",
  },
  {
    id: "atmosphere",
    icon: "Heart",
    title: "Samimi Ortam",
    description:
      "Aile sıcaklığında, güler yüzlü ekibimizle her ziyaretinizi özel bir anıya dönüştürüyoruz.",
  },
];

export const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir//Sahil+bal%C4%B1k+ekmek/@39.0716358,26.8881396,17z";
