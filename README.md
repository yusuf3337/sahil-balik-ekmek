# Sahil Balık Ekmek — Kurumsal Web Sitesi & Supabase Kurulum Rehberi

Dikili / İzmir'de bulunan **Sahil Balık Ekmek** restoranı için geliştirilmiş modern, boutique ve yüksek performanslı kurumsal web sitesi.

Proje **Next.js 15 (App Router)**, **TypeScript**, **TailwindCSS 4**, **Framer Motion** ve **Supabase (Auth + Database + RLS)** mimarisiyle inşa edilmiştir.

---

## Teknolojiler ve Mimari

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: TailwindCSS 4, Custom Design Tokens
- **Animasyonlar**: Framer Motion (Doğal deniz canlıları, yüzücü balık sürüleri, kabarcıklar, SVG wave dividers)
- **Backend / Veritabanı**: Supabase PostgreSQL & Auth
- **SEO**: Dynamic Metadata, OpenGraph, JSON-LD Schema (Restaurant & LocalBusiness), Sitemap, Robots.txt
- **Performans**: next/image AVIF/WebP, Lazy Loading, High-contrast WCAG okunaklı tipografi

---

## Adım Adım Supabase Kurulum Rehberi

Projeyi klonlayan herhangi bir geliştirici aşağıdaki adımları sırasıyla uygulayarak projeyi eksiksiz çalıştırabilir.

### 1. Supabase Projesi Oluşturma
1. [supabase.com](https://supabase.com) adresine gidin ve ücretsiz bir hesap/proje oluşturun.
2. Proje adını `sahil-balik-ekmek` koyun ve veritabanı parolanızı güvenli bir yere kaydedin.
3. Proje oluşturulduktan sonra sol menüden **Project Settings** -> **API** bölümüne gidin.
4. **Project URL** ve **anon public key** değerlerini kopyalayın.

---

### 2. SQL Tablolarını ve RLS Policy'lerini Oluşturma
1. Supabase Dashboard'da sol menüden **SQL Editor** sayfasına gidin.
2. Proje dizininde yer alan [`supabase/schema.sql`](./supabase/schema.sql) dosyasındaki tüm SQL kodunu kopyalayın ve SQL Editor'e yapıştırın.
3. **Run** butonuna basarak scripti çalıştırın.
4. Bu işlem:
   - `settings` veritabanı tablosunu oluşturur.
   - Varsayılan işletme bilgilerini ekler (Seed).
   - **Row Level Security (RLS)** kurallarını devreye alır (Herkese okuma, yalnızca giriş yapmış admin kullanıcıya güncelleme izni).

---

### 3. Environment Değişkenlerini Ekleme
1. Proje ana dizininde `.env.example` dosyasını kopyalayarak `.env.local` adı ile yeni bir dosya oluşturun:
   ```bash
   cp .env.example .env.local
   ```
2. `.env.local` dosyasının içerisine 1. adımda kopyaladığınız Supabase değerlerini ekleyin:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1Ni...
   ```

---

### 4. İlk Admin Kullanıcısını Oluşturma
1. Supabase Dashboard'da sol menüden **Authentication** -> **Users** bölümüne gidin.
2. **Add user** -> **Create user** butonuna tıklayın.
3. Kullanıcı bilgilerini girin:
   - **Email**: `admin@sahilbalikekmek.com` (veya istediğiniz e-posta)
   - **Password**: Güçlü bir parola belirleyin
   - **Auto Confirm User**: Seçeneği işaretleyin (E-posta doğrulama adımını atlar).
4. **Create user** butonuna basarak admin kullanıcısını tamamlayın.

---

### 5. Projeyi Local'de Çalıştırma
1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
2. Geliştirici sunucusunu başlatın:
   ```bash
   npm run dev
   ```
3. Tarayıcınızda açın:
   - **Ana Sayfa**: `http://localhost:3000`
   - **Hakkımızda**: `http://localhost:3000/hakkimizda`
   - **İletişim**: `http://localhost:3000/iletisim`
   - **Admin Girişi**: `http://localhost:3000/admin/login` (4. adımda oluşturduğunuz e-posta ve parola ile giriş yapın)

---

### 6. Vercel'e Deploy Etme
1. Projenizi GitHub / GitLab üzerine push edin.
2. [Vercel Dashboard](https://vercel.com) üzerinde **Add New** -> **Project** diyerek reponuzu içe aktarın.
3. **Environment Variables** bölümüne `.env.local` dosyanızdaki değişkenleri ekleyin:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Deploy** butonuna basın. Vercel projenizi otomatik olarak derleyecek ve yayına alacaktır.

---

## Dosya & Klasör Mimarisi

```
├── app/
│   ├── page.tsx               # Ana Sayfa (Dynamic Supabase Settings)
│   ├── hakkimizda/page.tsx    # Hakkımızda
│   ├── iletisim/page.tsx      # İletişim & Konum
│   ├── admin/
│   │   ├── page.tsx           # Supabase Admin Dashboard
│   │   └── login/page.tsx     # Supabase Auth Admin Login Formu
│   ├── layout.tsx             # Root Layout & SEO Meta
│   ├── globals.css            # TailwindCSS 4 & Design System
│   ├── sitemap.ts             # Dynamic Sitemap
│   └── robots.ts              # SEO Robots.txt
├── components/
│   ├── home/                  # Hero, About, WhyUs, Gallery, Hours, Location
│   ├── layout/                # Navbar, Footer
│   └── ui/                    # SeaCreatures, OceanBubbles, Waves, Button, Card
├── lib/
│   └── supabase/
│       ├── client.ts          # Browser Supabase Client
│       ├── server.ts          # Server Supabase Client (SSR)
│       └── middleware.ts      # Auth protection for /admin
├── services/
│   └── settings.service.ts    # Supabase Settings Service (CRUD)
├── types/
│   ├── database.types.ts      # Supabase DB TypeScript Interfaces
│   └── index.ts               # App TypeScript Interfaces
├── supabase/
│   └── schema.sql             # DB Creation, Seed & RLS Policies
├── data/
│   └── siteData.ts            # Default Fallback Site Data
├── .env.example               # Environment Variables Template
└── README.md                  # Kurulum ve Dağıtım Dokümantasyonu
```

---

## Lisans & Telif

© 2026 **Sahil Balık Ekmek**. Tüm hakları saklıdır. Dikili / İzmir.
