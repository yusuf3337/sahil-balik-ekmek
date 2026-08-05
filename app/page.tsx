import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyUs } from "@/components/home/WhyUs";
import { Gallery } from "@/components/home/Gallery";
import { WorkingHours } from "@/components/home/WorkingHours";
import { Location } from "@/components/home/Location";
import { settingsService } from "@/services/settings.service";

export const revalidate = 60; // Revalidate dynamic settings every 60 seconds

export default async function HomePage() {
  const siteData = await settingsService.getSettings();

  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero */}
        <Hero data={siteData.hero} />

        {/* 2. Hakkımızda Önizleme */}
        <AboutPreview />

        {/* 3. Neden Biz */}
        <WhyUs />

        {/* 4. Galeri */}
        <Gallery />

        {/* 5. Çalışma Saatleri */}
        <WorkingHours hours={siteData.workingHours} />

        {/* 6. Konum */}
        <Location contact={siteData.contact} />
      </main>

      <Footer data={siteData} />
    </>
  );
}
