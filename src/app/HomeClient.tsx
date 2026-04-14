"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useTransform, Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Command,
  Folder,
  LayoutGrid,
  MousePointer2,
  Palette,
  ScanSearch,
  Sparkles,
  Workflow,
  type LucideIcon
} from "lucide-react";


const iconStrip: LucideIcon[] = [
  ScanSearch,
  Command,
  CheckCircle2,
  Palette,
  ArrowLeft,
  ArrowRight,
  Folder,
  LayoutGrid,
  Workflow,
  MousePointer2,
  Code2,
  Braces,
  Sparkles
];

export default function HomeClient() {
  const { scrollY } = useScroll();
  const iconBandX = useTransform(scrollY, [0, 1600], [0, -420]);
  const iconBandSmoothX = useSpring(iconBandX, {
    stiffness: 120,
    damping: 24,
    mass: 0.25
  });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden px-6">
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-notable text-4xl sm:text-5xl md:text-7xl font-bold tracking-normal text-white mb-6 max-w-4xl leading-tight"
          >
            Transformez vos simples visiteurs en <span className="text-zinc-500 italic">clients fidèles.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-200 mb-12 max-w-2xl leading-relaxed"
          >
            Ne laissez plus votre image freiner votre croissance. Des sites web épurés, rapides et conçus pour générer des ventes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="px-[30px] py-5 bg-white text-black font-medium rounded uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Lancer mon projet <ArrowRight size={18} />
            </Link>
            <Link
              href="/projets"
              className="px-[30px] py-5 border border-white text-white font-medium rounded uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
            >
              Explorer les sites web
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-6 text-xs uppercase tracking-[0.25em] text-zinc-100"
          >
            Agence web basée à Vannes, Bretagne — Morbihan (56)
          </motion.p>
        </div>
      </section>

<section className="w-full overflow-hidden -mt-8">
        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />

          <motion.div
            style={{ x: iconBandSmoothX }}
            className="flex w-max gap-5 py-10"
          >
            {[...iconStrip, ...iconStrip].map((Icon, index) => (
              <motion.div
                key={`${Icon.displayName ?? Icon.name}-${index}`}
                animate={{ y: [0, -12, 0], filter: "invert(0)" }}
                whileHover={{ filter: "invert(1)", transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }}
                transition={{
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.18
                  }
                }}
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm md:h-24 md:w-24"
              >
                <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.7} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Philosophy / Features */}
      <section className="py-24 bg-transparent px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              { title: "Rapide", desc: "Je m'engage à fournir des résultats rapides, sans jamais sacrifier la qualité." },
              { title: "Sur-mesure", desc: "Je crée des designs uniques pour garantir que votre marque se démarque de la concurrence." },
              { title: "Efficace", desc: "Je veille à ce que votre site soit esthétique, mais surtout qu'il apporte des résultats concrets à votre entreprise." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col">
                <h3 className="font-notable text-2xl font-medium text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-200 leading-relaxed">{feature.desc}</p>
                <div className="mt-8 h-px bg-gradient-to-r from-white/20 to-transparent w-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="font-notable text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Mon processus</h2>
            <p className="text-xl text-zinc-200 max-w-2xl">Une méthode claire et transparente pour amener votre projet de l&apos;idée à la réalité, sans compromis.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-20 relative">
            {/* Horizontal timeline line for desktop */}
            <div className="hidden md:block absolute top-[45%] left-0 w-full h-px bg-white/10 z-0"></div>

            {[
              { num: "01", title: "Stratégie", desc: "On analyse vos besoins, votre cible et on définit une direction artistique sur-mesure.", deliverable: "Moodboard et stratégie validés." },
              { num: "02", title: "Conception", desc: "Conception de l'interface visuelle. Nous validons ensemble l'ergonomie et l'esthétique avant toute phase technique.", deliverable: "Maquette interactive haute fidélité." },
              { num: "03", title: "Développement", desc: "Développement complet en Next.js, React et Framer Motion. Intégration au pixel près, animations fluides et optimisation des performances.", deliverable: "Site web fonctionnel et testé." },
              { num: "04", title: "Livraison", desc: "Mise en production et suivi inclus — je reste votre interlocuteur direct pour toutes les évolutions et mises à jour post-lancement.", deliverable: "Site en ligne + rapport de mise en production." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="relative z-10 bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5"
              >
                <div className="text-6xl font-black text-white/5 absolute -top-6 -left-2 pointer-events-none">{step.num}</div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-black font-bold text-sm">{step.num}</span>
                  <h3 className="font-notable text-2xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-zinc-200 mb-6 leading-relaxed">{step.desc}</p>
                <div className="bg-white/5 rounded-lg p-4 flex items-start gap-3 border border-white/10">
                  <CheckCircle2 className="text-zinc-500 mt-0.5 shrink-0" size={18} />
                  <p className="text-sm text-zinc-100"><span className="font-semibold text-white">Livrable :</span> {step.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 border-y border-white/10 bg-transparent px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center justify-around gap-12 text-center"
          >
            {[
              { value: "J-7", label: "Temps de délivrance" },
              { value: "5", label: "Révisions le premier mois" },
              { value: "24H", label: "Réponse garantie" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-bold text-white mb-2">{stat.value}</span>
                <span className="text-zinc-200 font-medium tracking-wide uppercase text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-transparent text-center flex flex-col items-center justify-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="max-w-3xl"
        >
          <h2 className="font-notable text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
            Votre entreprise <span className="italic text-zinc-200">mérite</span> un site à la hauteur.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-[30px] py-5 border border-white text-white font-medium rounded uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Lancer mon projet <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
