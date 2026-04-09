"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, CalendarDays, Mail } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Gestion du clic à l'extérieur pour le dropdown desktop
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // UX CRITIQUE : Bloquer le scroll du site quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  function openCal() {
    setDropdownOpen(false);
    // @ts-expect-error Cal is injected by script
    if (typeof window !== "undefined" && window.Cal) window.Cal("ui", { styles: { branding: { brandColor: "#ffffff" } }, hideEventTypeDetails: false });
    const calBtn = document.getElementById("cal-trigger");
    calBtn?.click();
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-[100vw] overflow-hidden border-b ${
          isScrolled 
            ? "py-4 bg-black/50 backdrop-blur-md border-white/10" 
            : "py-6 bg-transparent border-transparent"
        }`}
      >
        <button
          id="cal-trigger"
          data-cal-link="sohanwebstudio-cloud/30min"
          data-cal-origin="https://cal.com"
          className="sr-only"
          aria-hidden
        />

        <div className="w-full px-4 md:px-12 flex items-center justify-between">
          {/* Logo : Taille augmentée (w-[170px]) et alignement forcé (flex items-center) */}
          <Link href="/" className="relative z-50 shrink-0 w-[170px] sm:w-[220px] lg:w-auto flex items-center">
            <Image 
              src="/logo.png" 
              alt="Sohan Web Studio Logo" 
              width={340} 
              height={72} 
              className="object-contain w-full h-auto lg:h-5" 
              priority 
            />
          </Link>

          <div className="flex items-center justify-end ml-auto gap-4 md:gap-8">
            <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-white/70">
              <Link href="/projets" className="hover:text-white transition-colors duration-200">Projets</Link>
              <Link href="/a-propos" className="hover:text-white transition-colors duration-200">À propos</Link>
              <Link href="/prestations" className="hover:text-white transition-colors duration-200">Les prestations</Link>
            </nav>

            <div ref={dropdownRef} className="relative hidden lg:block min-w-[200px]">
              {/* Le dropdown desktop est ici... */}
            </div>

            <button
              className="lg:hidden relative z-[60] flex flex-col gap-[5px] items-center justify-center p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 bg-[#050505] z-40 flex flex-col pt-28 lg:hidden overflow-hidden"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <nav className="flex flex-col px-6">
          <Link href="/projets" className="text-lg font-medium text-zinc-300 hover:text-white py-4 border-b border-white/10 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
            Projets
          </Link>
          <Link href="/a-propos" className="text-lg font-medium text-zinc-300 hover:text-white py-4 border-b border-white/10 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
            À propos
          </Link>
          <Link href="/prestations" className="text-lg font-medium text-zinc-300 hover:text-white py-4 border-b border-white/10 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
            Les prestations
          </Link>
          <Link href="/contact" className="text-lg font-medium text-zinc-300 hover:text-white py-4 border-b border-white/10 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="mx-6 mt-8 border border-white/15 rounded overflow-hidden">
          <button onClick={() => { setMobileMenuOpen(false); openCal(); }} className="w-full flex items-center gap-3 px-5 py-4 text-left text-sm text-white uppercase tracking-widest font-medium hover:bg-white/10 transition-colors duration-200 cursor-pointer">
            <CalendarDays size={15} className="text-zinc-400 shrink-0" />
            Réserver un appel
          </button>
          <div className="h-px bg-white/10" />
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-5 py-4 text-sm text-white uppercase tracking-widest font-medium hover:bg-white/10 transition-colors duration-200">
            <Mail size={15} className="text-zinc-400 shrink-0" />
            Envoyer un message
          </Link>
        </div>

        {/* L'image ajoutée en bas de l'overlay */}
        <div className="mt-auto flex justify-center pb-12 px-6">
          <Image 
            src="/logo.png" 
            alt="Sohan Web Studio" 
            width={120} 
            height={40} 
            className="opacity-20 object-contain"
          />
        </div>
      </motion.div>
    </>
  );
}