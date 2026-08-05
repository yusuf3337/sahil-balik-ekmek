"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, GOOGLE_MAPS_DIRECTIONS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMenu = useCallback(() => setMobileOpen((v) => !v), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#073B5C]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-[#073B5C] py-4"
        )}
      >
        <nav
          className="container-custom flex items-center justify-between"
          aria-label="Ana navigasyon"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Sahil Balık Ekmek Ana Sayfa"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/30 group-hover:ring-[#F97316] transition-all duration-300">
              <Image
                src="/sahilbalikekmek.png"
                alt="Sahil Balık Ekmek Logo"
                fill
                className="object-cover"
                priority
                sizes="44px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-white text-lg tracking-tight leading-none">
                Sahil Balık Ekmek
              </span>
              <span className="text-xs text-[#E0F2FE] font-medium mt-0.5">
                Dikili Sahili · İzmir
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "text-white bg-white/15"
                        : "text-[#E0F2FE] hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:05326315856"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#F97316]" />
              Ara: 0532 631 58 56
            </a>
            <a
              href={GOOGLE_MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              Yol Tarifi Al
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-white hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            <motion.div animate={mobileOpen ? "open" : "closed"} className="relative w-5 h-5">
              <motion.span
                className="absolute top-0 left-0 w-full h-0.5 bg-white rounded-full origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
              />
              <motion.span
                className="absolute top-2 left-0 w-full h-0.5 bg-white rounded-full"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.span
                className="absolute top-4 left-0 w-full h-0.5 bg-white rounded-full origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
              />
            </motion.div>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-[#073B5C] text-white z-50 md:hidden flex flex-col p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/30">
                    <Image
                      src="/sahilbalikekmek.png"
                      alt="Sahil Balık Ekmek"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-serif font-bold text-white text-base">
                    Sahil Balık Ekmek
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 py-6">
                <ul className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-all",
                            isActive
                              ? "bg-white/20 text-white"
                              : "text-[#E0F2FE] hover:bg-white/10 hover:text-white"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:05326315856"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 text-white text-sm font-bold border border-white/20"
                >
                  <Phone className="w-4 h-4 text-[#F97316]" />
                  Ara: 0532 631 58 56
                </a>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#F97316] text-white text-sm font-bold"
                >
                  <MapPin className="w-4 h-4" />
                  Yol Tarifi Al
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
