import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prestations | Création Site Web Vannes — Tarifs & Formules",
  description: "Découvrez nos formules de création de sites web à Vannes : Fondation dès 700€, La Vitrine à 1 200€, Sur-Mesure sur devis. Développement Next.js, design premium, livraison en 7 à 21 jours.",
  alternates: {
    canonical: "https://sohanwebstudio.com/prestations",
  },
  openGraph: {
    title: "Prestations — Création Site Web Vannes | Sohan Web Studio",
    description: "Formules de création de sites web à Vannes (Bretagne). Fondation 700€, La Vitrine 1200€, Sur-Mesure. Design premium, Next.js, SEO inclus.",
    url: "https://sohanwebstudio.com/prestations",
  },
};

const plans = [
  {
    title: "Fondation",
    slug: "fondation",
    tagline: "Les bases solides pour exister en ligne avec classe.",
    price: "700€",
    features: [
      { text: <>Jusqu'à <strong>3 pages</strong> personnalisées</>, highlight: false },
      { text: <>Configuration <strong>SEO optimisée</strong> pour Google</>, highlight: false },
      { text: <>Configuration <strong>SEO technique</strong> (balises, sitemap, vitesse)</>, highlight: false },
      { text: <>Intégration de vos <strong>contenus</strong> (textes & images)</>, highlight: false },
      { text: <>Mise en <strong>conformité RGPD</strong> + mentions légales</>, highlight: false },
      { text: <>Formulaire de contact <strong>fonctionnel</strong></>, highlight: false },
      { text: <>Responsive mobile <strong>optimisé</strong></>, highlight: false },
      { text: <>Livraison en <strong>10 jours ouvrés</strong></>, highlight: true },
    ],
  },
  {
    title: "La Vitrine",
    slug: "la-vitrine",
    tagline: "Une expérience immersive conçue pour captiver et convertir.",
    price: "1 200€",
    features: [
      { text: <><strong>5 pages</strong> pensées pour guider votre visiteur vers l'action</>, highlight: true },
      { text: <>Design <strong>d'interactions</strong> et animations <strong>Framer Motion</strong> (scroll, hover, transitions)</>, highlight: false },
      { text: <><strong>Blog ou portfolio</strong> — contenu maintenu et mis à jour par nos soins</>, highlight: true },
      { text: <><strong>Stratégie de contenu</strong> par page (hiérarchie, CTA, parcours visiteur)</>, highlight: false },
      { text: <>Intégration <strong>d'outils tiers</strong> (Calendly, Mailchimp...)</>, highlight: false },
      { text: <><strong>SEO on-page avancé</strong> + Open Graph (réseaux sociaux)</>, highlight: false },
      { text: <>Mise en <strong>conformité RGPD</strong></>, highlight: false },
      { text: <>Livraison en <strong>21 jours ouvrés</strong></>, highlight: true },
    ],
  },
  {
    title: "Sur Mesure",
    slug: "sur-mesure",
    tagline: "Un outil digital unique, construit autour de vos objectifs business.",
    price: "Sur devis",
    features: [
      { text: <><strong>Moodboard et direction artistique</strong> validés avant tout développement</>, highlight: true },
      { text: <><strong>Architecture web avancée</strong> (e-commerce, API, extranet...)</>, highlight: false },
      { text: <><strong>Parcours utilisateur (UX)</strong> entièrement personnalisé</>, highlight: false },
      { text: <><strong>Stratégie SEO</strong> technique et sémantique approfondie</>, highlight: false },
      { text: <><strong>Système de design complet</strong> Totalement personnalisable (design tokens, composants)</>, highlight: false },
      { text: <>Intégrations <strong>sur-mesure</strong> (CRM, paiement, outils métier)</>, highlight: false },
      { text: <>Mise en <strong>conformité</strong> (sécurité & RGPD)</>, highlight: false },
      { text: <><strong>Support prioritaire</strong> 30 jours post-livraison</>, highlight: true },
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
        <p className="text-white text-lg max-w-xl mx-auto">
          Des solutions complètes pour votre réussite digitale.
        </p>
      </div>

      {/* Mobile: horizontal snap scroll (95% width) — Desktop: 3-col grid */}
      {/* px-[2.5%] permet de centrer parfaitement la carte de 95% et gap-4 aère les cartes */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-[2.5%] pb-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="snap-center flex-none w-[95%]"
          >
            <PlanCard plan={plan} />
          </div>
        ))}
      </div>

      {/* Scroll hint mobile */}
      <div className="md:hidden flex justify-center gap-2 mt-4">
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
      // Marges intérieures réduites sur mobile (py-8 px-5) pour gagner en hauteur
      // Ajout d'une bordure subtile sur mobile pour voir les limites des 95%
      className={`flex flex-col h-full py-8 px-5 md:py-10 md:px-10 border border-white/10 md:border-t-0 md:border-b-0 md:border-l-0 rounded-2xl md:rounded-none bg-[#050505] md:bg-transparent ${
        bordered ? "md:border-r" : ""
      }`}
    >
      {/* Title */}
      <h2 className="font-notable text-3xl md:text-4xl text-white uppercase mb-3">
        {plan.title}
      </h2>

      {/* Tagline */}
      <p className="text-white italic text-sm mb-6 md:mb-8 leading-relaxed">
        &ldquo;{plan.tagline}&rdquo;
      </p>

      {/* Features */}
      <div className="flex flex-col flex-1">
        {plan.features.map((feat, j) => (
          <div key={j}>
            <p
              className={`py-2.5 md:py-3 text-[11px] md:text-xs uppercase tracking-widest leading-relaxed font-medium [&_strong]:border [&_strong]:border-white/60 [&_strong]:px-0.5 [&_strong]:rounded-[2px] [&_strong]:text-white [&_strong]:font-medium ${
                feat.highlight ? "text-white" : "text-white/60"
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
        <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
          Prix
        </span>
        <span className="font-notable text-2xl md:text-3xl text-white">
          {plan.price}
        </span>
      </div>

      {/* CTA */}
      <Link
        href={`/prestations/${plan.slug}`}
        className="w-full py-4 border border-white rounded text-white text-[11px] md:text-xs uppercase tracking-widest font-medium text-center hover:bg-white hover:text-black transition-all duration-300 block"
      >
        Découvrir cette formule &rarr;
      </Link>
    </div>
  );
}