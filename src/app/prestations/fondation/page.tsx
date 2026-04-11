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
  { label: "Prix", value: "700€" },
  { label: "Livraison", value: "10 jours ouvrés" },
  { label: "Nombre de pages", value: "Jusqu'à 3 pages" },
  { label: "Révisions / mois", value: "3 modifications" },
  { label: "Suivi post-livraison", value: "3 mois inclus" },
  { label: "Idéal pour", value: "Indépendants & lancements" },
];

const features = [
  "Jusqu'à 3 pages personnalisées",
  "Configuration SEO optimisée pour Google",
  "SEO technique — balises, sitemap, vitesse",
  "Intégration de vos contenus (textes & images)",
  "Mise en conformité RGPD + mentions légales",
  "Formulaire de contact fonctionnel et testé",
  "Responsive mobile optimisé",
  "Livraison en 10 jours ouvrés",
];

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-white font-semibold">{children}</strong>
);

const sections: { title: React.ReactNode; text: React.ReactNode }[] = [
  {
    title: <>Votre vitrine en ligne, conçue pour <span className="bg-white text-black px-1">convaincre</span></>,
    text: <>La formule Fondation a été pensée pour ceux qui veulent entrer dans l'ère digitale sans compromis sur la qualité. Trois pages sur mesure, c'est suffisant pour présenter votre activité avec <B>autorité</B> : une page d'accueil qui <B>capte l'attention</B> en moins de trois secondes, une page services qui détaille votre valeur ajoutée, et une page contact qui retire tout obstacle à la prise de contact.{"\n\n"}Chaque page est conçue à la main, à partir de zéro. Aucun template générique, aucun raccourci visuel. Le design reflète votre univers, vos couleurs, votre ton — et uniquement les vôtres.</>,
  },
  {
    title: <>Un SEO technique <span className="bg-white text-black px-1">soigné</span> dès le premier jour</>,
    text: <>Être en ligne ne suffit pas : encore faut-il être trouvé. La formule Fondation intègre une configuration SEO technique complète — balises title et méta descriptions optimisées pour chaque page, sitemap XML soumis à Google Search Console, fichier robots.txt configuré, et performance technique vérifiée pour atteindre un <B>score Lighthouse supérieur à 90</B>.{"\n\n"}La mise en conformité RGPD est également incluse : mentions légales rédigées et politique de confidentialité intégrée. Votre site est <B>irréprochable</B> sur le plan légal et technique dès le premier jour.</>,
  },
  {
    title: <>Vos contenus intégrés avec <span className="bg-white text-black px-1">soin</span></>,
    text: <>Vous fournissez vos textes, photos et logo : je m'occupe d'intégrer chaque élément avec le niveau de soin qui caractérise un site fait à la main. Chaque image est <B>compressée et optimisée</B> pour le web sans perdre en qualité visuelle, chaque texte est mis en forme selon une hiérarchie typographique rigoureuse.{"\n\n"}Le formulaire de contact est relié à votre adresse email et testé avant livraison. Vous commencez à recevoir des demandes <B>dès la mise en ligne</B>, sans aucune configuration de votre part.</>,
  },
  {
    title: <>3 révisions par mois — votre site reste <span className="bg-white text-black px-1">vivant</span></>,
    text: <>Un bon site n'est pas figé. Après la livraison, vous bénéficiez de 3 modifications par mois pendant 3 mois : mise à jour d'un texte, remplacement d'une photo, ajout d'une information, correction d'un détail. Chaque demande est traitée sous <B>48h ouvrées</B>, sans frais supplémentaires.{"\n\n"}Ce suivi post-livraison vous évite de vous retrouver seul face à votre site après la mise en ligne. Je reste votre interlocuteur direct pendant la période la plus critique — <B>les premiers mois</B>, quand les retours clients arrivent et que votre offre s'affine.</>,
  },
];

export default function Fondation() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image src="/la-fondation.png" alt="Fondation" fill className="object-cover z-0" />
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
            Fondation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-lg italic"
          >
            &ldquo;Les bases solides pour exister en ligne avec classe.&rdquo;
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
                  <Image src="/la-fondation.png" alt="Fondation" fill className="object-cover" />
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
        <p className="text-white/60 text-sm uppercase tracking-widest mb-4">Prêt à démarrer ?</p>
        <h2 className="font-notable text-4xl md:text-6xl text-white uppercase mb-10 leading-tight">
          Lançons votre projet<br />Fondation.
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
