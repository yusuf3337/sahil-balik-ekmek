import { createClient } from "@/lib/supabase/client";
import { defaultSiteData } from "@/data/siteData";
import type { SiteData } from "@/types";
import type { SettingsRow } from "@/types/database.types";

/**
 * Maps Supabase SettingsRow to SiteData application model
 */
export function mapRowToSiteData(row: SettingsRow, fallback: SiteData): SiteData {
  return {
    businessName: row.business_name || fallback.businessName,
    slogan: fallback.slogan,
    contact: {
      phone: row.phone || fallback.contact.phone,
      address: row.address || fallback.contact.address,
      addressLine2: fallback.contact.addressLine2,
      instagramUrl: row.instagram || fallback.contact.instagramUrl,
      googleMapsUrl: row.maps_url || fallback.contact.googleMapsUrl,
      googleMapsEmbed: fallback.contact.googleMapsEmbed,
    },
    hero: {
      title: row.hero_title || fallback.hero.title,
      subtitle: row.hero_description || fallback.hero.subtitle,
      ctaPrimary: fallback.hero.ctaPrimary,
      ctaSecondary: fallback.hero.ctaSecondary,
    },
    workingHours: {
      monday: { open: row.opening_time || "11:00", close: row.closing_time || "23:00", closed: false },
      tuesday: { open: row.opening_time || "11:00", close: row.closing_time || "23:00", closed: false },
      wednesday: { open: row.opening_time || "11:00", close: row.closing_time || "23:00", closed: false },
      thursday: { open: row.opening_time || "11:00", close: row.closing_time || "23:00", closed: false },
      friday: { open: row.opening_time || "11:00", close: row.closing_time || "23:00", closed: false },
      saturday: { open: row.opening_time || "11:00", close: row.closing_time || "23:00", closed: false },
      sunday: { open: row.opening_time || "11:00", close: row.closing_time || "23:00", closed: false },
    },
    footer: {
      description: row.footer_description || fallback.footer.description,
      copyright: fallback.footer.copyright,
    },
  };
}

/**
 * Settings Service for Supabase Operations
 */
export const settingsService = {
  /**
   * Fetches settings from Supabase settings table.
   * Returns defaultSiteData as fallback if env or DB is empty.
   */
  async getSettings(): Promise<SiteData> {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      if (!supabaseUrl) return defaultSiteData;

      const supabase = createClient();
      const { data, error } = await supabase
        .from("settings")
        .select("*")
        .limit(1)
        .maybeSingle();

      if (error || !data) {
        console.info("[SettingsService] Using fallback site data");
        return defaultSiteData;
      }

      return mapRowToSiteData(data as SettingsRow, defaultSiteData);
    } catch (err) {
      console.warn("[SettingsService] Exception reading settings:", err);
      return defaultSiteData;
    }
  },

  /**
   * Updates or inserts settings into Supabase
   */
  async updateSettings(siteData: SiteData): Promise<{ success: boolean; error?: string }> {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      if (!supabaseUrl) {
        return {
          success: false,
          error: "NEXT_PUBLIC_SUPABASE_URL bulunamadı. Lütfen .env.local dosyanızı kontrol edin.",
        };
      }

      const supabase = createClient();

      // Check if a row exists
      const { data: existingRows } = await supabase
        .from("settings")
        .select("id")
        .limit(1);

      const payload = {
        business_name: siteData.businessName,
        hero_title: siteData.hero.title,
        hero_description: siteData.hero.subtitle,
        phone: siteData.contact.phone,
        address: siteData.contact.address,
        instagram: siteData.contact.instagramUrl,
        maps_url: siteData.contact.googleMapsUrl,
        opening_time: siteData.workingHours.monday.open,
        closing_time: siteData.workingHours.monday.close,
        footer_description: siteData.footer.description,
        seo_title: siteData.hero.title,
        seo_description: siteData.hero.subtitle,
        updated_at: new Date().toISOString(),
      };

      const rows = existingRows as unknown as { id: string }[] | null;

      if (rows && rows.length > 0) {
        const id = rows[0].id;
        const { error } = await (supabase.from("settings") as any)
          .update(payload)
          .eq("id", id);

        if (error) return { success: false, error: error.message };
      } else {
        const { error } = await (supabase.from("settings") as any)
          .insert(payload);

        if (error) return { success: false, error: error.message };
      }

      return { success: true };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Bilinmeyen hata";
      return { success: false, error: message };
    }
  },
};
