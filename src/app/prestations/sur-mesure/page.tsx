"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import React from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};


const metadata = [
  { label: "Prix", value: "Sur devis" },
  { label: "Livraison", value: "Définie ensemble" },
  { label: "Architecture", value: "100% personnalisée" },
  { label: "Révisions / mois", value: "Illimitées" },
  { label: "Support post-livraison", value: "30 jours prioritaires" },
  { label: "Idéal pour", value: "Entreprises & projets complexes" },
];

const features = [
  "Moodboard et direction artistique validés en amont",
  "Architecture web avancée (e-commerce, API, extranet…)",
  "Parcours utilisateur (UX) entièrement personnalisé",
  "Stratégie SEO technique et sémantique approfondie",
  "Système de design complet livré sur Figma",
  "Intégrations sur-mesure (CRM, paiement, outils métier)",
  "Mise en conformité sécurité & RGPD",
  "Support prioritaire 30 jours post-livraison",
];

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-white font-semibold">{children}</strong>
);

const sections: { title: React.ReactNode; text: React.ReactNode }[] = [
  {
    title: <>Une architecture construite autour de vos <span className="bg-white text-black px-1">objectifs</span></>,
    text: <>La formule Sur Mesure commence là où les templates s'arrêtent. E-commerce avec gestion d'inventaire avancée, extranet client avec authentification, connexion à votre CRM ou ERP existant, plateforme de réservation automatisée, SaaS avec gestion d'abonnements : chaque projet démarre d'une <B>analyse approfondie</B> de vos besoins business, pas d'un thème prêt à l'emploi qu'on tente d'adapter.{"\n\n"}L'architecture technique est définie en amont, documentée et <B>validée ensemble</B> avant que le moindre composant ne soit développé. Vous savez exactement ce qui est construit, pourquoi, et comment cela s'inscrit dans votre stratégie globale.</>,
  },
  {
    title: <>Une direction artistique <span className="bg-white text-black px-1">pilotée</span> ensemble</>,
    text: <>Avant d'écrire une ligne de code, nous validons ensemble un moodboard complet : palettes chromatiques, typographies, références visuelles, directions de mise en page. Vous recevez ensuite un système de design complet sur Figma — design tokens, bibliothèque de composants, états responsive — qui sert de référence unique pour l'ensemble du projet.{"\n\n"}Ce processus garantit qu'il n'y a <B>pas de surprise à la livraison</B>. Chaque décision visuelle a été validée en amont, en collaboration. Le résultat est un site qui ne ressemble à aucun autre parce qu'il a été <B>conçu pour vous</B>, et uniquement pour vous.</>,
  },
  {
    title: <>Des intégrations <span className="bg-white text-black px-1">sans limite</span></>,
    text: <>Paiement Stripe avec gestion des abonnements, CRM HubSpot ou Pipedrive, base de données Airtable ou Notion, automatisations Zapier ou Make, recherche Algolia, email transactionnel SendGrid, authentification sécurisée : dans la formule Sur Mesure, chaque besoin d'intégration trouve sa solution.{"\n\n"}Nous ne rognons pas les angles pour rentrer dans un cadre prédéfini. Nous construisons l'infrastructure dont votre business a besoin aujourd'hui, avec une vision claire sur la <B>scalabilité de demain</B>. Chaque choix technique est documenté et transmis à la livraison.</>,
  },
  {
    title: <>Un partenariat qui <span className="bg-white text-black px-1">dure</span> au-delà de la livraison</>,
    text: <>30 jours de support prioritaire post-livraison, c'est un véritable partenaire opérationnel pendant la période critique du lancement. Un bug corrigé sous <B>2 heures</B>, un ajustement de dernière minute, une question de performance : vous avez une <B>ligne directe</B>. Les demandes ne passent pas par un système de tickets — elles arrivent directement et sont traitées en priorité absolue.{"\n\n"}Au-delà de cette période, nous définissons ensemble un accord de maintenance et d'évolution adapté à l'activité de votre projet. Parce qu'un grand site n'est pas une prestation ponctuelle — c'est un investissement continu qui mérite un accompagnement à la hauteur.</>,
  },
];

export default function SurMesure() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image src="/sur-mesure.jpg" alt="Sur Mesure" fill className="object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505] z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-4 z-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-white text-sm uppercase tracking-widest font-medium"
          >
            Formule
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="font-notable text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-wider leading-none text-center"
          >
            Sur Mesure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-lg italic"
          >
            &ldquo;Un outil digital unique, construit autour de vos objectifs business.&rdquo;
          </motion.p>
        </div>
      </div>

      {/* Metadata bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-12 border-b border-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-3 text-sm">
          {metadata.map((item) => (
            <motion.div key={item.label} variants={fadeInUp} className="flex gap-2">
              <span className="text-white/60">{item.label} :</span>
              <span className="text-white font-medium">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features included */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-20 border-b border-white/10"
      >
        <motion.h2 variants={fadeInUp} className="font-notable text-3xl md:text-4xl text-white uppercase mb-12 leading-tight">
          Ce qui est inclus
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
          {features.map((feature, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <p className="py-4 text-sm uppercase tracking-widest text-white font-medium">{feature}</p>
              <div className="h-px bg-white/10" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Detail sections */}
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        return (
          <section key={index} className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <h2 className="font-notable text-3xl md:text-4xl text-white uppercase mb-6 leading-tight text-center lg:text-left">
                  {section.title}
                </h2>
                <p className="text-white/80 text-base leading-relaxed whitespace-pre-line text-center lg:text-left">
                  {section.text}
                </p>
              </motion.div>
              <motion.div
                className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? fadeInRight : fadeInLeft}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src="/sur-mesure.jpg" alt="Sur Mesure" fill className="object-cover" />
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-24 text-center border-t border-white/10"
      >
        <p className="text-white/60 text-sm uppercase tracking-widest mb-4">Un projet ambitieux ?</p>
        <h2 className="font-notable text-4xl md:text-6xl text-white uppercase mb-10 leading-tight">
          Parlons de votre<br />projet sur mesure.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-[30px] py-5 bg-white text-black font-medium rounded uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300"
          >
            Demander un devis
          </Link>
          <Link
            href="/prestations"
            className="px-[30px] py-5 border border-white text-white font-medium rounded uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Voir toutes les formules
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
