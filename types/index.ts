// ============================================================
// Sahil Balık Ekmek — TypeScript Type Definitions
// ============================================================

// ── Navigation ──────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

// ── Working Hours ────────────────────────────────────────────

export interface DayHours {
  open: string;   // "09:00"
  close: string;  // "22:00"
  closed: boolean;
}

export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type WorkingHours = Record<DayKey, DayHours>;

export interface BusinessStatus {
  isOpen: boolean;
  nextEvent: string; // "22:00'de kapanır" | "09:00'de açılır"
}

// ── Why Us Card ──────────────────────────────────────────────

export interface WhyUsItem {
  id: string;
  icon: string; // lucide icon name
  title: string;
  description: string;
}

// ── Site Data (Admin Editable) ───────────────────────────────

export interface ContactInfo {
  phone: string;
  address: string;
  addressLine2: string;
  instagramUrl: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface FooterData {
  description: string;
  copyright: string;
}

export interface SiteData {
  businessName: string;
  slogan: string;
  contact: ContactInfo;
  hero: HeroData;
  workingHours: WorkingHours;
  footer: FooterData;
}

// ── Admin Panel ──────────────────────────────────────────────

export type AdminSection =
  | "overview"
  | "business"
  | "hero"
  | "hours"
  | "contact"
  | "footer";

export interface AdminSidebarItem {
  id: AdminSection;
  label: string;
  icon: string;
}

// ── Button ───────────────────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  "aria-label"?: string;
}

// ── Section Header ───────────────────────────────────────────

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

// ── Card ─────────────────────────────────────────────────────

export interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  glass?: boolean;
  padding?: "sm" | "md" | "lg";
}
