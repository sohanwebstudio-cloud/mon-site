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
  { label: "Prix", value: "1 200€" },
  { label: "Livraison", value: "21 jours ouvrés" },
  { label: "Nombre de pages", value: "5 pages" },
  { label: "Révisions / mois", value: "5 modifications" },
  { label: "Suivi post-livraison", value: "3 mois inclus" },
  { label: "Idéal pour", value: "PME & porteurs de projet" },
];

const features = [
  "5 pages pensées pour guider le visiteur vers l'action",
  "Design d'interactions et animations (scroll, hover, transitions)",
  "Blog ou portfolio — contenu maintenu et mis à jour par nos soins",
  "Stratégie de contenu par page (hiérarchie, CTA, parcours)",
  "Intégration d'outils tiers (Calendly, Mailchimp…)",
  "SEO on-page avancé + Open Graph (réseaux sociaux)",
  "Mise en conformité RGPD complète",
  "Livraison en 21 jours ouvrés",
];

const sections: { title: React.ReactNode; text: string }[] = [
  {
    title: <>Cinq pages pensées pour guider, captiver, <span className="bg-white text-black px-1">convertir</span></>,
    text: "La Vitrine est construite autour d'un principe simple : chaque page a un rôle précis dans le parcours de votre visiteur. La page d'accueil accroche et qualifie. La page services convainc. La page portfolio ou témoignages rassure. La page À propos humanise. La page contact convertit.\n\nCette architecture éditoriale est définie avant même qu'une ligne de code soit écrite. Le résultat est un site où le visiteur est naturellement guidé vers l'action, sans friction, sans confusion — un parcours pensé comme une expérience, pas comme une suite de pages.",
  },
  {
    title: <>Des animations qui donnent <span className="bg-white text-black px-1">vie</span> à votre marque</>,
    text: "Sur La Vitrine, le design n'est pas statique : il respire. Les animations au scroll déclenchent des entrées fluides sur chaque section, les transitions hover ajoutent une couche d'interactivité subtile, et les passages de section sont orchestrés pour maintenir le rythme de lecture sans jamais distraire du contenu.\n\nChaque mouvement est une décision de design. Rien n'est ajouté par défaut : chaque animation sert la perception premium de votre marque, guide l'œil et renforce la crédibilité de votre présence en ligne. Un site qui bouge bien est un site dont on se souvient.",
  },
  {
    title: <>Un contenu <span className="bg-white text-black px-1">vivant</span>, géré pour vous</>,
    text: "Votre site doit vivre avec votre activité. La Vitrine intègre un espace blog ou portfolio dont le contenu est géré par nos soins dans le cadre de votre plan de maintenance. Nouvelle étude de cas, nouvel article, nouvelle référence client : vous nous transmettez l'information, nous nous occupons de la publication avec un rendu soigné, cohérent à la charte graphique.\n\nPas de formation, pas de back-office à apprivoiser. Vous vous concentrez sur votre métier, on s'occupe du reste.",
  },
  {
    title: <>Des outils qui <span className="bg-white text-black px-1">travaillent</span> pour vous</>,
    text: "La Vitrine intègre les outils que vous utilisez déjà ou prévoyez d'adopter : Calendly pour la prise de rendez-vous directement sur votre site, Mailchimp ou Brevo pour capturer des emails et nourrir votre audience, Google Analytics pour piloter vos performances, et la configuration Open Graph pour des aperçus impeccables sur les réseaux sociaux.\n\nChaque intégration est testée et validée avant la livraison. Vous récupérez un écosystème digital cohérent et opérationnel — pas une simple vitrine isolée de vos outils métier.",
  },
  {
    title: <>5 révisions mensuelles — un site qui <span className="bg-white text-black px-1">évolue</span> avec vous</>,
    text: "Après la livraison, vous disposez de 5 demandes de modifications par mois pendant 3 mois. Mise à jour de vos tarifs, ajout d'un nouveau service, retouche d'un visuel, modification d'un texte de vente : chaque demande est traitée sous 48h ouvrées, sans frais supplémentaires.\n\nCe suivi n'est pas un service après-vente générique. C'est une relation de travail continue qui vous permet de faire évoluer votre site au même rythme que votre activité — les premiers mois étant souvent les plus riches en apprentissages sur ce qui convertit vraiment.",
  },
];

export default function LaVitrine() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image src="/vitrine.png" alt="La Vitrine" fill className="object-cover z-0" />
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
            La Vitrine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-lg italic"
          >
            &ldquo;Une expérience immersive conçue pour captiver et convertir.&rdquo;
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
              <p className="py-4 text-xs uppercase tracking-widest text-white font-medium">{feature}</p>
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
                  <Image src="/vitrine.png" alt="La Vitrine" fill className="object-cover" />
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
        <p className="text-white/60 text-sm uppercase tracking-widest mb-4">Prêt à passer au niveau supérieur ?</p>
        <h2 className="font-notable text-4xl md:text-6xl text-white uppercase mb-10 leading-tight">
          Lançons votre projet<br />La Vitrine.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-[30px] py-5 bg-white text-black font-medium rounded uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300"
          >
            Démarrer mon projet
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
