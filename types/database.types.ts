export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      settings: {
        Row: {
          id: string;
          business_name: string;
          hero_title: string;
          hero_description: string;
          phone: string;
          whatsapp: string;
          email: string;
          address: string;
          instagram: string;
          facebook: string;
          maps_url: string;
          opening_time: string;
          closing_time: string;
          footer_description: string;
          seo_title: string;
          seo_description: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          business_name?: string;
          hero_title?: string;
          hero_description?: string;
          phone?: string;
          whatsapp?: string;
          email?: string;
          address?: string;
          instagram?: string;
          facebook?: string;
          maps_url?: string;
          opening_time?: string;
          closing_time?: string;
          footer_description?: string;
          seo_title?: string;
          seo_description?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          business_name?: string;
          hero_title?: string;
          hero_description?: string;
          phone?: string;
          whatsapp?: string;
          email?: string;
          address?: string;
          instagram?: string;
          facebook?: string;
          maps_url?: string;
          opening_time?: string;
          closing_time?: string;
          footer_description?: string;
          seo_title?: string;
          seo_description?: string;
          updated_at?: string;
        };
      };
      gallery: {
        Row: {
          id: string;
          image_url: string;
          title: string;
          category: string;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          image_url: string;
          title?: string;
          category?: string;
          order_index?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          image_url?: string;
          title?: string;
          category?: string;
          order_index?: number;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type SettingsRow = Database["public"]["Tables"]["settings"]["Row"];
export type SettingsInsert = Database["public"]["Tables"]["settings"]["Insert"];
export type SettingsUpdate = Database["public"]["Tables"]["settings"]["Update"];

export type GalleryRow = Database["public"]["Tables"]["gallery"]["Row"];
export type GalleryInsert = Database["public"]["Tables"]["gallery"]["Insert"];
export type GalleryUpdate = Database["public"]["Tables"]["gallery"]["Update"];
