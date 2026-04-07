"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Image src="/logo.png" alt="Sohan Web Studio Logo" width={280} height={60} className="object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/projets" className="hover:text-white transition-colors duration-200">
            Projets
          </Link>
          <Link href="/a-propos" className="hover:text-white transition-colors duration-200">
            À propos
          </Link>
          <Link href="/prestations" className="hover:text-white transition-colors duration-200">
            Les prestations
          </Link>
          
          <Link href="/contact" className="relative group overflow-hidden rounded-full bg-white text-black px-6 py-2.5 ml-4 font-semibold">
            <span className="relative z-10">LANCER MON PROJET</span>
            <div className="absolute inset-0 bg-neutral-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 lg:hidden"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
      >
        <Link href="/projets" className="text-2xl font-medium text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
          Projets
        </Link>
        <Link href="/a-propos" className="text-2xl font-medium text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
          À propos
        </Link>
        <Link href="/prestations" className="text-2xl font-medium text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
          Les prestations
        </Link>
        <Link href="/contact" className="mt-4 rounded-full bg-white text-black px-8 py-3 text-lg font-semibold" onClick={() => setMobileMenuOpen(false)}>
          LANCER MON PROJET
        </Link>
      </motion.div>
    </motion.header>
  );
}
