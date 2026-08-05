"use client";

import React from "react";
import { Clock, Sun, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useBusinessStatus } from "@/hooks/useBusinessStatus";
import { defaultSiteData } from "@/data/siteData";
import { DAY_LABELS, DAY_ORDER, JS_DAY_MAP } from "@/lib/constants";
import type { WorkingHours as WorkingHoursType } from "@/types";

interface WorkingHoursProps {
  hours?: WorkingHoursType;
}

export function WorkingHours({ hours = defaultSiteData.workingHours }: WorkingHoursProps) {
  const status = useBusinessStatus(hours);
  const todayKey = JS_DAY_MAP[new Date().getDay()];

  return (
    <section className="py-24 bg-[#F8F5EF]" id="hours-section">
      <div className="container-custom">
        <div className="max-w-xl mx-auto">
          <AnimatedSection className="mb-10">
            <SectionHeader
              eyebrow="Ziyaret Saatleri"
              title="Her Gün Hizmetinizdeyiz"
              description="Dikili sahilinde her gün saat 11:00'den itibaren taze balık ekmeğimizle sizleri bekliyoruz."
              align="center"
            />
          </AnimatedSection>

          {/* Real-time Status Card */}
          <AnimatedSection delay={0.1} className="mb-6">
            <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <span
                  className={`w-3.5 h-3.5 rounded-full ${
                    status.isOpen ? "bg-[#10B981] animate-pulse" : "bg-rose-500"
                  }`}
                />
                <div>
                  <p className="font-serif font-bold text-[#073B5C] text-lg">
                    {status.isOpen ? "Şu An Açığız" : "Şu An Kapalıyız"}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">{status.nextEvent}</p>
                </div>
              </div>
              <span
                className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                  status.isOpen
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-rose-50 text-rose-700 border border-rose-200"
                }`}
              >
                {status.isOpen ? "Açık" : "Kapalı"}
              </span>
            </div>
          </AnimatedSection>

          {/* Weekly Hours */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#0284C7]" />
                  <h3 className="font-serif font-bold text-[#073B5C] text-lg">
                    Haftalık Çalışma Programı
                  </h3>
                </div>
                <span className="text-xs font-bold text-[#F97316] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                  Her Gün Açarız
                </span>
              </div>

              <div className="divide-y divide-slate-100">
                {DAY_ORDER.map((day) => {
                  const dayData = hours[day];
                  const isToday = day === todayKey;

                  return (
                    <div
                      key={day}
                      className={`flex items-center justify-between py-3.5 px-3 rounded-xl transition-colors ${
                        isToday ? "bg-[#E0F2FE]/60 font-bold" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`text-sm ${isToday ? "text-[#073B5C] font-bold" : "text-[#0F172A]"}`}>
                          {DAY_LABELS[day]}
                        </span>
                        {isToday && (
                          <span className="text-[10px] font-bold text-white bg-[#0284C7] px-2.5 py-0.5 rounded-full">
                            Bugün
                          </span>
                        )}
                      </div>
                      <span className={`text-sm tabular-nums font-semibold ${isToday ? "text-[#073B5C]" : "text-slate-600"}`}>
                        {dayData.open} – {dayData.close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
