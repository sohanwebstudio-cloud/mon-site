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

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="bg-white text-black font-semibold px-0.5">{children}</strong>
);

const sections: { title: React.ReactNode; text: React.ReactNode; image: string; imageAlt: string }[] = [
  {
    title: <>Cinq pages pensées pour guider, captiver, <span className="bg-white text-black px-1">convertir</span></>,
    text: <>La Vitrine est construite autour d'un principe simple : <B>chaque page a un rôle précis</B> dans le parcours de votre visiteur. <B>La page d'accueil accroche et qualifie.</B> La page services convainc. La page portfolio ou témoignages rassure. La page À propos humanise. <B>La page contact convertit.</B>{"\n\n"}Cette <B>architecture éditoriale</B> est définie avant même qu'une ligne de code soit écrite. Le résultat est un site où le visiteur est naturellement guidé vers l'action, <B>sans friction, sans confusion</B> — un parcours pensé comme une expérience, <B>pas comme une suite de pages</B>.</>,
    image: "/Gemini_Generated_Image_refzqarefzqarefz.png",
    imageAlt: "Architecture des pages",
  },
  {
    title: <>Des animations qui donnent <span className="bg-white text-black px-1">vie</span> à votre marque</>,
    text: <>Sur La Vitrine, <B>le design n'est pas statique : il respire.</B> Les <B>animations au scroll</B> déclenchent des entrées fluides sur chaque section, les transitions hover ajoutent une couche d'interactivité subtile, et les passages de section sont orchestrés pour maintenir le <B>rythme de lecture</B> sans jamais distraire du contenu.{"\n\n"}Chaque mouvement est une <B>décision de design</B>. Rien n'est ajouté par défaut : chaque animation sert la perception premium de votre marque, guide l'œil et renforce la crédibilité de votre présence en ligne. Un site qui bouge bien est un site <B>dont on se souvient</B>.</>,
    image: "/Gemini_Generated_Image_t73smtt73smtt73s.png",
    imageAlt: "Outils d'effets web",
  },
  {
    title: <>Un contenu <span className="bg-white text-black px-1">vivant</span>, géré pour vous</>,
    text: <>Votre site doit <B>vivre avec votre activité</B>. La Vitrine intègre un espace blog ou portfolio dont le contenu est <B>géré par nos soins</B> dans le cadre de votre plan de maintenance. Nouvelle étude de cas, nouvel article, nouvelle référence client : vous nous transmettez l'information, nous nous occupons de la publication avec un rendu soigné, <B>cohérent à la charte graphique</B>.{"\n\n"}<B>Pas de formation, pas de back-office à apprivoiser.</B> Vous vous concentrez sur <B>votre métier</B>, on s'occupe du reste.</>,
    image: "/Gemini_Generated_Image_v4oufcv4oufcv4ou.png",
    imageAlt: "Contenu vivant",
  },
  {
    title: <>Des outils qui <span className="bg-white text-black px-1">travaillent</span> pour vous</>,
    text: <>La Vitrine intègre les outils que vous utilisez déjà ou prévoyez d'adopter : <B>Calendly</B> pour la prise de rendez-vous directement sur votre site, <B>Mailchimp ou Brevo</B> pour capturer des emails et nourrir votre audience, <B>Google Analytics</B> pour piloter vos performances, et la configuration <B>Open Graph</B> pour des aperçus impeccables sur les réseaux sociaux.{"\n\n"}Chaque intégration est <B>testée et validée</B> avant la livraison. Vous récupérez un <B>écosystème digital cohérent</B> et opérationnel — pas une simple vitrine isolée de vos outils métier.</>,
    image: "/Gemini_Generated_Image_4mp2uz4mp2uz4mp2.png",
    imageAlt: "Intégrations et automatisations",
  },
  {
    title: <>5 révisions mensuelles — un site qui <span className="bg-white text-black px-1">évolue</span> avec vous</>,
    text: <>Après la livraison, vous disposez de <B>5 demandes de modifications par mois pendant 3 mois</B>. Mise à jour de vos tarifs, ajout d'un nouveau service, retouche d'un visuel, modification d'un texte de vente : chaque demande est traitée sous <B>48h ouvrées</B>, sans frais supplémentaires.{"\n\n"}Ce suivi n'est pas un service après-vente générique. C'est une <B>relation de travail continue</B> qui vous permet de faire évoluer votre site au même rythme que votre activité — les premiers mois étant souvent les plus riches en apprentissages sur <B>ce qui convertit vraiment</B>.</>,
    image: "/Gemini_Generated_Image_fx9s8ofx9s8ofx9s.png",
    imageAlt: "Évolution du site",
  },
];

export default function LaVitrine() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero */}
      <div className="relative w-full h-[65vh] overflow-hidden">
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
            className="font-notable text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-wider leading-none text-center [text-shadow:1px_1px_0_black,-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black]"
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
        className="max-w-[1600px] mx-auto px-8 md:px-20 lg:px-40 py-12 border-b border-white/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-6">
          {metadata.map((item) => (
            <motion.div key={item.label} variants={fadeInUp} className="flex flex-col gap-1">
              <span className="text-white/60 text-xs uppercase tracking-widest font-medium">{item.label}</span>
              <span className="text-white font-semibold text-sm">{item.value}</span>
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
        className="max-w-[1600px] mx-auto px-8 md:px-20 lg:px-40 py-20 border-b border-white/10"
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
          <section key={index} className="max-w-[1600px] mx-auto px-8 md:px-20 lg:px-40 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div
                className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <h2 className="font-notable text-3xl md:text-4xl text-white uppercase mb-6 leading-tight text-center lg:text-left">
                  {section.title}
                </h2>
                <p className="text-white text-lg leading-relaxed whitespace-pre-line text-center lg:text-left">
                  {section.text}
                </p>
              </motion.div>
              <motion.div
                className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? fadeInRight : fadeInLeft}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src={section.image} alt={section.imageAlt} fill className="object-contain p-2 invert" />
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
        className="max-w-[1600px] mx-auto px-8 md:px-20 lg:px-40 py-24 text-center border-t border-white/10"
      >
        <p className="text-white/80 text-sm uppercase tracking-widest mb-4">Prêt à passer au niveau supérieur ?</p>
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
