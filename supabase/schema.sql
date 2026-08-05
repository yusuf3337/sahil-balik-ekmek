-- ============================================================
-- Sahil Balık Ekmek — Supabase Database Schema & RLS Setup
-- Bu SQL kodlarını Supabase Dashboard -> SQL Editor kısmında çalıştırabilirsiniz.
-- ============================================================

-- 1. Create Settings Table
CREATE TABLE IF NOT EXISTS public.settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_name TEXT NOT NULL DEFAULT 'Sahil Balık Ekmek',
    hero_title TEXT NOT NULL DEFAULT 'Sahil Balık Ekmek',
    hero_description TEXT NOT NULL DEFAULT 'Dikili sahilinde, denizin hemen kenarında günlük taze balık ve samimi Ege atmosferi.',
    phone TEXT NOT NULL DEFAULT '0532 631 58 56',
    whatsapp TEXT DEFAULT '0532 631 58 56',
    email TEXT DEFAULT 'info@sahilbalikekmek.com',
    address TEXT NOT NULL DEFAULT 'Cumhuriyet Mahallesi, Sahil Kordon Boyu, Dikili / İzmir',
    instagram TEXT NOT NULL DEFAULT 'https://www.instagram.com/sahilbalikekmek/',
    facebook TEXT DEFAULT '',
    maps_url TEXT NOT NULL DEFAULT 'https://www.google.com/maps/place/Sahil+bal%C4%B1k+ekmek/@39.0716358,26.8881396,17z',
    opening_time TEXT NOT NULL DEFAULT '11:00',
    closing_time TEXT NOT NULL DEFAULT '23:00',
    footer_description TEXT NOT NULL DEFAULT 'Dikili kordon boyunda, Ege esintisi ve deniz manzarası eşliğinde günlük taze balık ekmek lezzeti.',
    seo_title TEXT DEFAULT 'Sahil Balık Ekmek | Dikili İzmir Balık Ekmek Restaurant',
    seo_description TEXT DEFAULT 'Dikili İzmir sahilinde taze balık ekmek ve Ege deniz lezzetleri.',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Seed Default Record if empty
INSERT INTO public.settings (
    business_name,
    hero_title,
    hero_description,
    phone,
    whatsapp,
    address,
    instagram,
    opening_time,
    closing_time,
    footer_description
)
SELECT
    'Sahil Balık Ekmek',
    'Sahil Balık Ekmek',
    'Dikili sahilinde, denizin hemen kenarında günlük taze balık ve samimi Ege atmosferi.',
    '0532 631 58 56',
    '0532 631 58 56',
    'Cumhuriyet Mahallesi, Sahil Kordon Boyu, Dikili / İzmir',
    'https://www.instagram.com/sahilbalikekmek/',
    '11:00',
    '23:00',
    'Dikili kordon boyunda, Ege esintisi ve deniz manzarası eşliğinde günlük taze balık ekmek lezzeti.'
WHERE NOT EXISTS (SELECT 1 FROM public.settings);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policy: Anyone can read settings (Public Read)
CREATE POLICY "Public Read Settings"
ON public.settings
FOR SELECT
USING (true);

-- 5. RLS Policy: Only Authenticated Users (Admin) can insert or update settings
CREATE POLICY "Authenticated Admin Update Settings"
ON public.settings
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated Admin Insert Settings"
ON public.settings
FOR INSERT
TO authenticated
WITH CHECK (true);
