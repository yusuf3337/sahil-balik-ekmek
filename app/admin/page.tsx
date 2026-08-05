"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Building2,
  Clock,
  Phone,
  MapPin,
  LayoutDashboard,
  Settings as SettingsIcon,
  ChevronRight,
  Save,
  Check,
  Image as ImageIcon,
  LogOut,
  AlertCircle,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Globe,
  UtensilsCrossed,
} from "lucide-react";
import { defaultSiteData } from "@/data/siteData";
import { DAY_LABELS, DAY_ORDER } from "@/lib/constants";
import type { SiteData, AdminSection, DayKey } from "@/types";
import { createClient } from "@/lib/supabase/client";
import { settingsService } from "@/services/settings.service";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { id: "overview" as AdminSection, label: "Genel Bakış", icon: LayoutDashboard },
  { id: "hero" as AdminSection, label: "Hero & Karşılama", icon: Sparkles },
  { id: "business" as AdminSection, label: "İşletme Bilgileri", icon: Building2 },
  { id: "contact" as AdminSection, label: "İletişim & Konum", icon: Phone },
  { id: "hours" as AdminSection, label: "Çalışma Saatleri", icon: Clock },
  { id: "footer" as AdminSection, label: "Footer & Telif", icon: SettingsIcon },
];

export default function AdminPage() {
  const [data, setData] = useState<SiteData>(defaultSiteData);
  const [activeSection, setActiveSection] = useState<AdminSection>("overview");
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ success?: boolean; msg?: string } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // Load latest settings from Supabase on mount
  useEffect(() => {
    async function loadData() {
      const fetched = await settingsService.getSettings();
      setData(fetched);
    }
    loadData();
  }, []);

  const handleSaveAll = async () => {
    setSaving(true);
    setSaveStatus(null);

    const res = await settingsService.updateSettings(data);
    setSaving(false);

    if (res.success) {
      setSaveStatus({ success: true, msg: "Tüm değişiklikler Supabase veritabanına başarıyla kaydedildi!" });
      setTimeout(() => setSaveStatus(null), 4000);
    } else {
      setSaveStatus({ success: false, msg: res.error || "Kaydederken bir hata oluştu." });
    }
  };

  const handleSignOut = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
    } catch {
      // Ignored
    } finally {
      router.push("/admin/login");
      router.refresh();
    }
  };

  const updateHero = (field: keyof SiteData["hero"], value: string) => {
    setData((prev) => ({ ...prev, hero: { ...prev.hero, [field]: value } }));
  };

  const updateContact = (field: keyof SiteData["contact"], value: string) => {
    setData((prev) => ({ ...prev, contact: { ...prev.contact, [field]: value } }));
  };

  const updateFooter = (field: keyof SiteData["footer"], value: string) => {
    setData((prev) => ({ ...prev, footer: { ...prev.footer, [field]: value } }));
  };

  const updateHours = (day: DayKey, field: "open" | "close" | "closed", value: string | boolean) => {
    setData((prev) => ({
      ...prev,
      workingHours: {
        ...prev.workingHours,
        [day]: { ...prev.workingHours[day], [field]: value },
      },
    }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans antialiased">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-300 lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3.5">
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[var(--ocean)] shrink-0">
            <Image
              src="/sahilbalikekmek.png"
              alt="Sahil Balık Ekmek"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="font-serif font-bold text-white text-base leading-tight">
              Yönetim Paneli
            </h1>
            <span className="text-xs text-sky-400 font-medium">Sahil Balık Ekmek</span>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm font-semibold transition-all text-left",
                  isActive
                    ? "bg-gradient-to-r from-[var(--ocean)] to-sky-600 text-white shadow-lg shadow-[var(--ocean)]/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                )}
              >
                <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-white" : "text-slate-400")} />
                <span className="flex-1">{item.label}</span>
                {isActive && <ChevronRight className="w-4 h-4 text-white" />}
              </button>
            );
          })}
        </nav>

        {/* User Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-rose-600/90 text-slate-300 hover:text-white text-xs font-bold transition-colors border border-slate-700/60"
          >
            <LogOut className="w-4 h-4" />
            Oturumu Kapat
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-950">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800"
              onClick={() => setSidebarOpen(true)}
            >
              <SettingsIcon className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-white font-serif font-bold text-lg leading-snug">
                {sidebarItems.find((i) => i.id === activeSection)?.label}
              </h2>
              <p className="text-xs text-slate-400 hidden sm:block">
                Tüm değişiklikler Supabase veritabanı ile eşzamanlanır.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              Siteyi Aç
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={handleSaveAll}
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[var(--ocean)] to-sky-600 hover:from-[var(--ocean-600)] hover:to-sky-700 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[var(--ocean)]/20 disabled:opacity-50"
            >
              {saving ? (
                "Kaydediliyor..."
              ) : saveStatus?.success ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" /> Kaydedildi!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" /> Değişiklikleri Kaydet
                </>
              )}
            </button>
          </div>
        </header>

        {/* Save Status Alert */}
        {saveStatus && (
          <div
            className={cn(
              "px-6 py-3.5 text-xs sm:text-sm font-medium flex items-center gap-3 border-b",
              saveStatus.success
                ? "bg-emerald-950/80 text-emerald-200 border-emerald-800"
                : "bg-rose-950/80 text-rose-200 border-rose-800"
            )}
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{saveStatus.msg}</span>
          </div>
        )}

        {/* Body Container */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto max-w-5xl">
          {/* OVERVIEW SECTION */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              {/* Status Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Supabase Canlı Veri Bağlantısı Aktif
                    </div>
                    <h3 className="font-serif font-bold text-white text-2xl">
                      {data.businessName}
                    </h3>
                    <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                      Bu panel üzerinden güncellediğiniz telefon, açılış saatleri, hero metinleri ve iletişim bilgileri anında veri tabanına yazılır ve web sitesinde canlı olarak görüntülenir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 text-sky-400 text-xs font-bold uppercase tracking-wider">
                    <Phone className="w-4 h-4" /> Telefon
                  </div>
                  <p className="text-white font-bold text-lg">{data.contact.phone}</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <Clock className="w-4 h-4" /> Açılış Saati
                  </div>
                  <p className="text-white font-bold text-lg">{data.workingHours.monday.open} – {data.workingHours.monday.close}</p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4" /> Adres
                  </div>
                  <p className="text-white font-semibold text-sm truncate">{data.contact.address}</p>
                </div>
              </div>

              {/* Gallery Overview Notice */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--ocean)]/20 text-sky-400 flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">
                      Menü Afişleri & Sunum Fotoğrafları
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      `public/gallery` klasöründeki afişler ve sunum fotoğrafları web sitesinde sergilenmektedir.
                    </p>
                  </div>
                </div>
                <a
                  href="/#gallery-section"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold shrink-0"
                >
                  Galeriyi İncele →
                </a>
              </div>
            </div>
          )}

          {/* HERO SECTION */}
          {activeSection === "hero" && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-serif font-bold text-white text-xl">Hero & Karşılama Metinleri</h3>
                <p className="text-xs text-slate-400 mt-1">Ana sayfanın en üstünde görünen ana başlık ve alt metin.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Hero Ana Başlık
                  </label>
                  <input
                    type="text"
                    value={data.hero.title}
                    onChange={(e) => updateHero("title", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Hero Alt Açıklama Metni
                  </label>
                  <textarea
                    rows={4}
                    value={data.hero.subtitle}
                    onChange={(e) => updateHero("subtitle", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)] resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* BUSINESS SECTION */}
          {activeSection === "business" && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-serif font-bold text-white text-xl">İşletme Adı & Slogan</h3>
                <p className="text-xs text-slate-400 mt-1">Marka ismi ve genel slogan bilgileri.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    İşletme Adı
                  </label>
                  <input
                    type="text"
                    value={data.businessName}
                    onChange={(e) => setData((prev) => ({ ...prev, businessName: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Slogan
                  </label>
                  <input
                    type="text"
                    value={data.slogan}
                    onChange={(e) => setData((prev) => ({ ...prev, slogan: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* CONTACT SECTION */}
          {activeSection === "contact" && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-serif font-bold text-white text-xl">İletişim & Konum Bilgileri</h3>
                <p className="text-xs text-slate-400 mt-1">Müşterilerin size ulaşacağı telefon, adres ve harita linkleri.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Telefon Numarası
                  </label>
                  <input
                    type="text"
                    value={data.contact.phone}
                    onChange={(e) => updateContact("phone", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Instagram Bağlantısı
                  </label>
                  <input
                    type="text"
                    value={data.contact.instagramUrl}
                    onChange={(e) => updateContact("instagramUrl", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Adres Metni
                  </label>
                  <input
                    type="text"
                    value={data.contact.address}
                    onChange={(e) => updateContact("address", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Google Maps Linki
                  </label>
                  <input
                    type="text"
                    value={data.contact.googleMapsUrl}
                    onChange={(e) => updateContact("googleMapsUrl", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* HOURS SECTION */}
          {activeSection === "hours" && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-serif font-bold text-white text-xl">Haftalık Çalışma Saatleri</h3>
                <p className="text-xs text-slate-400 mt-1">Açılış ve kapanış saatlerini gün bazında ayarlayabilirsiniz.</p>
              </div>

              <div className="divide-y divide-slate-800">
                {DAY_ORDER.map((day) => {
                  const h = data.workingHours[day];
                  return (
                    <div key={day} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                      <span className="font-bold text-white w-32">{DAY_LABELS[day]}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400">Açılış:</span>
                        <input
                          type="time"
                          value={h.open}
                          onChange={(e) => updateHours(day, "open", e.target.value)}
                          className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                        />
                        <span className="text-xs text-slate-400">Kapanış:</span>
                        <input
                          type="time"
                          value={h.close}
                          onChange={(e) => updateHours(day, "close", e.target.value)}
                          className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* FOOTER SECTION */}
          {activeSection === "footer" && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-serif font-bold text-white text-xl">Footer & Telif Metinleri</h3>
                <p className="text-xs text-slate-400 mt-1">Site en altında yer alan açıklama ve telif bilgisi.</p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Footer Açıklama Metni
                </label>
                <textarea
                  rows={4}
                  value={data.footer.description}
                  onChange={(e) => updateFooter("description", e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-[var(--ocean)] resize-none"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
