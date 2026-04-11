"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

interface ProjetData {
  title: string;
  showHeroTitle?: boolean;
  metadata: { label: string; value: string }[];
  challenge: string;
  siteUrl: string;
  heroImage: string;
  cookieImage?: string;
  sections: { title: string; text: string; image: string }[];
  nextProject: { slug: string; title: string; image: string };
}

const projets: Record<string, ProjetData> = {
  "chez-jimmy-cookies": {
    title: "Chez Jimmy Cookies",
    metadata: [
      { label: "Temps de lecture", value: "3 min" },
      { label: "Client", value: "Chez Jimmy Cookies" },
      { label: "Secteur", value: "Artisanat & Commerce" },
      { label: "Début", value: "9 janvier 2025" },
      { label: "Fin", value: "10 décembre 2025" },
      { label: "Durée", value: "6 semaines" },
    ],
    challenge:
      "Implantée en plein centre de Lyon, la biscuiterie Chez Jimmy possédait déjà une clientèle fidèle grâce à l'excellence de ses produits. Cependant, leur image de marque en ligne ne reflétait pas le raffinement de leur savoir-faire artisanal. L'enjeu était de taille : ne pas seulement afficher une carte, mais provoquer une envie irrésistible (le \"craving\") instantanément.",
    siteUrl: "https://chezjimmy.com/",
    heroImage:
      "https://framerusercontent.com/images/98zBSxZmQHfD6YFiEPdyX65cDI.jpg",
    cookieImage:
      "https://framerusercontent.com/images/TXyQfZIlTpB0o9ZqncdQwYUnQ.jpg",
    sections: [
      {
        title: "Point de départ",
        text: "Bien que Chez Jimmy soit une institution pour les gourmands lyonnais, leur présence digitale ne reflétait pas cette excellence. Le site précédent était purement fonctionnel, construit sur un template générique qui ne racontait aucune histoire. La navigation était confuse, rendant l'accès au menu difficile sur mobile, et les visuels manquaient de \"piqué\" pour déclencher l'achat impulsif. Il y avait une déconnexion totale entre la chaleur de la boutique et la froideur de l'écran.",
        image:
          "https://framerusercontent.com/images/Qm4uihl3Ku9QiOjrlTcfPc00D8.png",
      },
      {
        title: "La solution",
        text: "Mon objectif était de traduire l'odeur du cookie chaud en pixels. J'ai commencé par un audit UX complet pour simplifier l'arborescence : on doit pouvoir commander en moins de 3 clics.\n\nJ'ai ensuite développé une interface \"Mobile First\" sur Framer, sachant que la majorité des clients cherchent une collation en marchant en ville. Visuellement, j'ai utilisé des typographies rondes et des micro-animations douces pour évoquer le moelleux des produits, tout en garantissant une performance technique irréprochable pour le SEO local.",
        image:
          "https://framerusercontent.com/images/EwJ1sQKMST5layw5JHgoO2IaxI.png",
      },
      {
        title: "Mise en œuvre",
        text: "J'ai reconstruit l'intégralité du site sur Framer en adoptant une architecture de composants modulaires (CMS). Cela permet à l'équipe de Chez Jimmy d'ajouter facilement des \"parfums du mois\" sans toucher au design. J'ai privilégié des typographies à fort empattement pour le côté \"biscuité\" et intégré des transitions fluides qui miment l'onctuosité des produits, rendant la navigation aussi agréable qu'une dégustation.",
        image:
          "https://framerusercontent.com/images/fyWC7BmgBShDlUTv2AZosD4YIJM.png",
      },
      {
        title: "Résultats",
        text: "Depuis la mise en ligne, les résultats sont sans appel : le taux de rebond a chuté de 40% et le temps passé sur la page \"Nos Cookies\" a doublé. Plus important encore, les demandes de \"Click & Collect\" ont augmenté significativement. Le nouveau site a offert à Chez Jimmy une vitrine digitale aussi premium que ses produits, consolidant sa position de leader sur la scène gourmande lyonnaise.",
        image:
          "https://framerusercontent.com/images/u2s3aQmS3WwxDDRzbFDp6MTSW4.png",
      },
    ],
    nextProject: {
      slug: "nova",
      title: "Nova",
      image:
        "https://framerusercontent.com/images/eAEZ7RsEbGflhzzPbV0NOYzlSc.png",
    },
  },
  "nova": {
    title: "Nova",
    showHeroTitle: false,
    metadata: [
      { label: "Temps de lecture", value: "5 min" },
      { label: "Client", value: "Nova" },
      { label: "Secteur", value: "Saas" },
      { label: "Début", value: "2 janvier 2024" },
      { label: "Fin", value: "2 avril 2024" },
      { label: "Durée", value: "3 semaines" },
    ],
    challenge:
      "Nova Social est une application sociale émergente qui redéfinit la façon dont les utilisateurs interagissent en ligne, en privilégiant l'authenticité et les passions communes. Avec une communauté grandissante de plus de 2 millions d'utilisateurs, la startup avait besoin d'une vitrine digitale à la hauteur de son ambition. L'objectif de ce projet était de concevoir et développer une landing page percutante pour stimuler les inscriptions à leur liste d'attente, tout en mettant en valeur leurs statistiques impressionnantes et leurs fonctionnalités avancées.",
    siteUrl: "https://novastudio56.framer.website/",
    heroImage:
      "https://framerusercontent.com/images/eAEZ7RsEbGflhzzPbV0NOYzlSc.png",
    cookieImage:
      "https://framerusercontent.com/images/cO3pMhDEHQXi8hmXmh5G0Wik4.png",
    sections: [
      {
        title: "Point de départ",
        text: "Le marché des réseaux sociaux est saturé par des plateformes favorisant les interactions superficielles. Le défi de Nova Social était de se démarquer visuellement et stratégiquement. Leur présence web initiale ne reflétait pas le dynamisme de leur application.\n\nLe point de départ a donc été de repenser totalement l'expérience utilisateur (UX) de la page d'atterrissage. Il fallait créer une interface moderne et immersive qui explique clairement la proposition de valeur (\"Connectez-vous, partagez et développez-vous\") tout en instaurant immédiatement un climat de confiance grâce aux preuves sociales.",
        image:
          "https://framerusercontent.com/images/Du02wsVbvATO1NaibQwS6khwo.png",
      },
      {
        title: "La solution",
        text: "Direction Artistique \"Dark Mode\" : Adoption d'une interface sombre élégante avec des touches de couleurs néon, rappelant l'univers nocturne et dynamique des créateurs de contenu, tout en faisant ressortir les captures d'écran de l'application.\n\nArchitecture de l'information (UX) : Utilisation d'un design en \"Bento Box\" (blocs de cartes) pour la section des capacités avancées. Cela permet de présenter une grande densité d'informations (messagerie, profils, groupes) de manière digeste et visuellement très structurée.\n\nStratégie de Conversion (CRO) : Placement stratégique et répété du Call-to-Action \"Rejoindre la liste d'attente\", systématiquement appuyé par des éléments de réassurance (logos des 1000+ entreprises partenaires, badge \"Trusted by 2+ million users\").",
        image:
          "https://framerusercontent.com/images/y9dPPBDct5Z3D52E8FQS0BIS6w.png",
      },
      {
        title: "Mise en œuvre",
        text: "Développement Next.js : Le site a été entièrement développé sur Next.js, permettant une fidélité absolue par rapport aux maquettes UI et l'intégration d'animations fluides au défilement pour dynamiser la présentation de l'application.\n\nApproche Mobile-First : La cible de Nova Social étant exclusivement sur smartphone, la version mobile de la landing page a été traitée en priorité absolue. Les grilles complexes se transforment en carrousels tactiles fluides pour garantir une expérience sans friction.\n\nOptimisation des performances : Pour éviter un taux de rebond élevé, les mockups 3D des téléphones et les assets visuels de l'interface Nova ont été fortement compressés (WebP), assurant un chargement quasi-instantané essentiel pour les campagnes d'acquisition.",
        image:
          "https://framerusercontent.com/images/o4kc5BTAWYjsqRRchoWisdCzJg.png",
      },
      {
        title: "Résultats",
        text: "Explosion de la Liste d'Attente : Grâce au design centré sur la conversion et à la clarté du message, le taux d'inscription à la liste d'attente a augmenté de 140% le premier mois.\n\nEngagement Utilisateur Accru : La nouvelle architecture de l'information a drastiquement réduit le taux de rebond, doublant le temps moyen passé à explorer les fonctionnalités de l'application sur la page.\n\nCrédibilité B2B Renforcée : La mise en avant stratégique de la section \"Preuve Sociale\" a facilité la signature de nouveaux partenariats stratégiques avec des marques clés.",
        image:
          "https://framerusercontent.com/images/LwgPYXrZEL5BWzrDcpmcYrEhyWs.png",
      },
    ],
    nextProject: {
      slug: "nobilis-bois",
      title: "Nobilis Bois",
      image:
        "https://framerusercontent.com/images/TGvR18cK6pVnJcSpgRoINgjHYq8.png",
    },
  },
  "nobilis-bois": {
    title: "Nobilis Bois",
    metadata: [
      { label: "Temps de lecture", value: "4 min" },
      { label: "Client", value: "Nobilis Bois" },
      { label: "Secteur", value: "Artisanat & Agencement" },
      { label: "Début", value: "1 décembre 2024" },
      { label: "Fin", value: "4 octobre 2024" },
      { label: "Durée", value: "8 semaines" },
    ],
    challenge:
      "Nobilis Bois incarne l'excellence de l'agencement sur-mesure. J'ai conçu pour eux une vitrine digitale minimaliste qui laisse la parole à la matière, transformant chaque visiteur en prospect qualifié.",
    siteUrl: "https://nobilisbois.framer.website/",
    heroImage:
      "https://framerusercontent.com/images/TGvR18cK6pVnJcSpgRoINgjHYq8.png",
    cookieImage:
      "https://framerusercontent.com/images/kMMrmCYBNAEr9FKRjyeZNCjIs.png",
    sections: [
      {
        title: "Point de départ",
        text: "L'atelier Nobilis Bois possédait un savoir-faire d'exception, mais son absence numérique limitait sa clientèle au bouche-à-oreille local. L'image de marque ne reflétait pas la \"noblesse\" et la technicité de leurs créations, freinant l'acquisition de chantiers haut de gamme.",
        image:
          "https://framerusercontent.com/images/dhJ6OGlaeURowstEURBjF42Uj9E.png",
      },
      {
        title: "La solution",
        text: "J'ai développé une expérience web axée sur la sensorialité. En utilisant une typographie élégante et une mise en page aérée (white space), le site imite la précision du geste de l'artisan. Chaque page est structurée pour rassurer l'architecte ou le particulier : galeries immersives, détails techniques et prise de contact simplifiée.",
        image:
          "https://framerusercontent.com/images/30DVxSQe889Slq0dIC8SZt5lY.png",
      },
      {
        title: "Mise en œuvre",
        text: "Design System Organique : J'ai défini une palette de couleurs inspirée des essences de bois (Chêne, Noyer) associée à une typographie Serif élégante pour évoquer la tradition.\n\nMise en page \"Galerie\" : J'ai conçu des grilles asymétriques pour rompre la monotonie. Chaque réalisation est présentée comme une œuvre d'art, avec beaucoup d'espace blanc (white space) pour laisser respirer les visuels.\n\nMicro-Interactions : Ajout d'animations subtiles au survol (hover) qui rappellent le toucher velouté du bois poncé, renforçant l'aspect premium sans alourdir la navigation.",
        image:
          "https://framerusercontent.com/images/LtWtBDeEmAZxCQJf9S6K5F3Bipw.png",
      },
      {
        title: "Résultats",
        text: "Une identité digitale qui positionne immédiatement Nobilis Bois comme un acteur premium. Le site ne sert plus seulement à informer, mais devient un véritable outil de vente qui filtre les demandes pour attirer des projets à forte valeur ajoutée.",
        image:
          "https://framerusercontent.com/images/gr8cIyrGiFIvF4kypFVP1sBig.png",
      },
    ],
    nextProject: {
      slug: "doma",
      title: "Doma",
      image:
        "https://framerusercontent.com/images/HraO7yjCBKF8wKtOJwECpOh5E.png",
    },
  },
  "doma": {
    title: "Doma",
    metadata: [
      { label: "Temps de lecture", value: "4 min" },
      { label: "Client", value: "Doma Studio" },
      { label: "Secteur", value: "Architecture" },
      { label: "Début", value: "6 janvier 2025" },
      { label: "Fin", value: "25 avril 2025" },
      { label: "Durée", value: "3 semaines" },
    ],
    challenge:
      "Doma Studio, agence d'architecture basée à Kyoto, nous a approchés avec un objectif clair : aligner sa présence en ligne sur sa philosophie architecturale. Connue pour son approche minimaliste et sa maîtrise des espaces traditionnels japonais, l'agence avait besoin d'une identité digitale qui se reflète dans une expérience web aussi soignée, épurée et intentionnelle que ses propres réalisations physiques.",
    siteUrl: "https://domastudio.framer.website/",
    heroImage:
      "https://framerusercontent.com/images/HraO7yjCBKF8wKtOJwECpOh5E.png",
    cookieImage:
      "https://framerusercontent.com/images/8kJnc82meShta9VEz61f8XMulfY.png",
    sections: [
      {
        title: "Point de départ",
        text: "Le précédent site internet de l'agence hébergeait des photographies de grande qualité, mais manquait cruellement de fluidité et de structure. L'interface était vieillissante et les visiteurs se perdaient souvent dans une arborescence complexe. L'essence même de Doma Studio \u2013 la sérénité, l'équilibre et la clarté \u2013 était étouffée par une navigation confuse qui ne rendait pas justice à l'élégance de leurs projets kyotoïtes.",
        image:
          "https://framerusercontent.com/images/81ybLP5tZ1gGhJeA1koqgyPqJA.png",
      },
      {
        title: "La solution",
        text: "Notre mission a été de clarifier l'expérience utilisateur sans perdre le minimalisme signature du studio. Nous avons restructuré l'architecture de l'information pour guider les visiteurs de manière aussi fluide et naturelle qu'une promenade dans un jardin zen ou une maison machiya. L'interface a été repensée pour inspirer la confiance et la contemplation à travers l'utilisation de vastes espaces blancs (le concept du \"Ma\"), d'un design épuré et d'une typographie discrète.",
        image:
          "https://framerusercontent.com/images/gYlqXi2kj7hPt9GBefDz5vHK5nU.png",
      },
      {
        title: "Mise en œuvre",
        text: "Nous avons développé un système web modulaire sur mesure qui offre à l'équipe de Doma Studio une grande flexibilité pour publier de nouveaux projets, tout en garantissant une esthétique toujours impeccable. Le design s'appuie sur des transitions d'une grande douceur, des grilles ultra-précises et une palette de couleurs neutres, faisant directement écho aux matériaux naturels (bois, papier, pierre) et à la précision de leur architecture.",
        image:
          "https://framerusercontent.com/images/BuqVJXylFcybGcdDtHaDDNfL314.png",
      },
      {
        title: "Résultats",
        text: "Le site web final transcende sa fonction première : il améliore à la fois l'esthétique et les performances. L'engagement a considérablement augmenté ; les visiteurs s'attardent plus longtemps sur les portfolios et parcourent les pages de manière intuitive. Plus important encore, cet espace digital s'impose désormais comme une véritable extension de Doma Studio, une vitrine internationale digne de leur savoir-faire unique depuis Kyoto.",
        image:
          "https://framerusercontent.com/images/xoKTY00qr25MrpQwM6y327i6K08.png",
      },
    ],
    nextProject: {
      slug: "chez-jimmy-cookies",
      title: "Chez Jimmy Cookies",
      image:
        "https://framerusercontent.com/images/98zBSxZmQHfD6YFiEPdyX65cDI.jpg",
    },
  },
};

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
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

function FloatingImage({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const amplitude = 8 + Math.random() * 8;
    const speedX = 0.3 + Math.random() * 0.4;
    const speedY = 0.4 + Math.random() * 0.3;
    const phaseX = Math.random() * Math.PI * 2;
    const phaseY = Math.random() * Math.PI * 2;

    let frame: number;
    const start = performance.now() + delay * 1000;

    const animate = (time: number) => {
      const t = (time - start) / 1000;
      const x = Math.sin(t * speedX + phaseX) * amplitude * 0.5;
      const y = Math.sin(t * speedY + phaseY) * amplitude;
      el.style.transform = `translate(${x}px, ${y}px)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [delay]);

  return (
    <div ref={imgRef} className={className}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/50"
      />
    </div>
  );
}

export default function ProjetDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [slug, setSlug] = React.useState<string | null>(null);
  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  if (!slug) return null;

  const projet = projets[slug];

  if (!projet) {
    notFound();
  }

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero */}
      <div className="relative w-full h-screen overflow-hidden">
        <motion.img
          src={projet.heroImage}
          alt={projet.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        {projet.showHeroTitle !== false && (
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="font-notable text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-wider leading-none text-center"
            >
              {projet.title}
            </motion.h1>
          </div>
        )}
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
          {projet.metadata.map((item) => (
            <motion.div key={item.label} variants={fadeInUp} className="flex gap-2">
              <span className="text-zinc-200">{item.label}:</span>
              <span className="text-white">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Challenge + Cookie image — side by side */}
      <section className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <h2 className="font-notable text-3xl md:text-4xl font-bold text-white uppercase mb-6 leading-tight text-center lg:text-left">
              Le Challenge
            </h2>
            <p className="text-zinc-100 text-lg leading-relaxed text-center lg:text-left">
              {projet.challenge}
            </p>
            <motion.a
              href={projet.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 px-[30px] py-5 border border-white rounded text-white font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 block w-fit mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Voir le site web
            </motion.a>
          </motion.div>
          {projet.cookieImage && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <FloatingImage
                src={projet.cookieImage}
                alt={projet.title}
                className="w-full max-w-md lg:ml-auto"
                delay={0}
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Sections — alternating layout */}
      {projet.sections.map((section, index) => {
        const isEven = index % 2 === 0;
        return (
          <section key={index} className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-20">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isEven ? "" : "direction-rtl"
              }`}
            >
              {/* Text */}
              <motion.div
                className={`lg:col-span-5 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <h2 className="font-notable text-3xl md:text-4xl font-bold text-white uppercase mb-6 leading-tight text-center lg:text-left">
                  {section.title}
                </h2>
                <p className="text-zinc-200 text-base leading-relaxed whitespace-pre-line text-center lg:text-left">
                  {section.text}
                </p>
              </motion.div>

              {/* Image — floating */}
              <motion.div
                className={`lg:col-span-7 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? fadeInRight : fadeInLeft}
              >
                <FloatingImage
                  src={section.image}
                  alt={section.title}
                  className="w-full"
                  delay={index * 0.8}
                />
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Next Project */}
      <motion.section
        className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="font-notable text-3xl md:text-4xl font-bold text-white uppercase mb-8 leading-tight">
          Projet suivant
        </h2>
        <Link
          href={`/projets/${projet.nextProject.slug}`}
          className="group block max-w-xl mx-auto"
        >
          <FloatingImage
            src={projet.nextProject.image}
            alt={projet.nextProject.title}
            className="w-full aspect-[4/3] overflow-hidden rounded-2xl"
            delay={0.5}
          />
          <h3 className="font-notable text-3xl text-white uppercase mt-8 group-hover:text-zinc-300 transition-colors">
            {projet.nextProject.title}
          </h3>
        </Link>
      </motion.section>
    </div>
  );
}
