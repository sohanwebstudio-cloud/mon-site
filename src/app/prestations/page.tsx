"use client";

import Link from "next/link";

const plans = [
  {
    title: "Fondation",
    slug: "fondation",
    tagline: "Les bases solides pour exister en ligne avec classe.",
    price: "700€",
    features: [
      { text: "Jusqu'à 3 pages personnalisées", highlight: false },
      { text: "Configuration SEO optimisée pour Google", highlight: false },
      { text: "Configuration SEO technique (balises, sitemap, vitesse)", highlight: false },
      { text: "Intégration de vos contenus (textes & images)", highlight: false },
      { text: "Mise en conformité RGPD + mentions légales", highlight: false },
      { text: "Formulaire de contact fonctionnel", highlight: false },
      { text: "Responsive mobile optimisé", highlight: false },
      { text: "Livraison en 10 jours ouvrés", highlight: true },
    ],
  },
  {
    title: "La Vitrine",
    slug: "la-vitrine",
    tagline: "Une expérience immersive conçue pour captiver et convertir.",
    price: "1 200€",
    features: [
      { text: "5 pages pensées pour guider votre visiteur vers l'action", highlight: true },
      { text: "Design d'interactions et animations Framer Motion (scroll, hover, transitions)", highlight: false },
      { text: "Blog ou portfolio — contenu maintenu et mis à jour par nos soins", highlight: true },
      { text: "Stratégie de contenu par page (hiérarchie, CTA, parcours visiteur)", highlight: false },
      { text: "Intégration d'outils tiers (Calendly, Mailchimp...)", highlight: false },
      { text: "SEO on-page avancé + Open Graph (réseaux sociaux)", highlight: false },
      { text: "Mise en conformité RGPD", highlight: false },
      { text: "Livraison en 21 jours ouvrés", highlight: true },
    ],
  },
  {
    title: "Sur Mesure",
    slug: "sur-mesure",
    tagline: "Un outil digital unique, construit autour de vos objectifs business.",
    price: "Sur devis",
    features: [
      { text: "Moodboard et direction artistique validés avant tout développement", highlight: true },
      { text: "Architecture web avancée (e-commerce, API, extranet...)", highlight: false },
      { text: "Parcours utilisateur (UX) entièrement personnalisé", highlight: false },
      { text: "Stratégie SEO technique et sémantique approfondie", highlight: false },
      { text: "Système de design complet livré sur Figma (design tokens, composants)", highlight: false },
      { text: "Intégrations sur-mesure (CRM, paiement, outils métier)", highlight: false },
      { text: "Mise en conformité (sécurité & RGPD)", highlight: false },
      { text: "Support prioritaire 30 jours post-livraison", highlight: true },
    ],
  },
];

export default function Prestations() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      {/* Header */}
      <div className="px-6 mb-16 text-center">
        <h1 className="font-notable text-4xl md:text-6xl text-white mb-4">
          Les Prestations
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Des solutions complètes pour votre réussite digitale.
        </p>
      </div>

      {/* Mobile: horizontal snap scroll — Desktop: 3-col grid */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-0">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="snap-start flex-none w-full px-6"
          >
            <PlanCard plan={plan} />
          </div>
        ))}
      </div>

      {/* Scroll hint mobile */}
      <div className="md:hidden flex justify-center gap-2 mt-6">
        {plans.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-0 px-6 max-w-[1600px] mx-auto">
        {plans.map((plan, i) => (
          <PlanCard key={i} plan={plan} bordered={i < plans.length - 1} />
        ))}
      </div>
    </div>
  );
}

function PlanCard({
  plan,
  bordered,
}: {
  plan: (typeof plans)[0];
  bordered?: boolean;
  slug?: string;
}) {
  return (
    <div
      className={`flex flex-col h-full py-10 px-8 md:px-10 ${
        bordered ? "md:border-r border-white/10" : ""
      }`}
    >
      {/* Title */}
      <h2 className="font-notable text-3xl md:text-4xl text-white uppercase mb-3">
        {plan.title}
      </h2>

      {/* Tagline */}
      <p className="text-zinc-400 italic text-sm mb-8 leading-relaxed">
        &ldquo;{plan.tagline}&rdquo;
      </p>

      {/* Features */}
      <div className="flex flex-col flex-1">
        {plan.features.map((feat, j) => (
          <div key={j}>
            <p
              className={`py-3 text-xs uppercase tracking-widest leading-relaxed font-medium ${
                feat.highlight ? "text-teal-400" : "text-zinc-300"
              }`}
            >
              {feat.text}
            </p>
            <div className="h-px bg-white/10" />
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="flex items-baseline justify-between mt-8 mb-6">
        <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
          Prix
        </span>
        <span className="font-notable text-2xl md:text-3xl text-white">
          {plan.price}
        </span>
      </div>

      {/* CTA */}
      <Link
        href={`/prestations/${plan.slug}`}
        className="w-full py-5 border border-white rounded text-white text-xs uppercase tracking-widest font-medium text-center hover:bg-white hover:text-black transition-all duration-300 block"
      >
        Découvrir cette formule &rarr;
      </Link>
    </div>
  );
}
