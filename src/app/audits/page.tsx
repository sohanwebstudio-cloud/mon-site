import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Audits Locaux | Exemples Concrets — Sohan Web Studio Vannes",
  description: "Exemples réels d'audits de sites d'artisans et PME du Morbihan. Scores avant/après, performances mobile, conversions perdues. Votre diagnostic offert.",
  alternates: {
    canonical: "https://sohanwebstudio.com/audits",
  },
  openGraph: {
    title: "Audits locaux — Sohan Web Studio",
    description: "Scores réels mesurés sur des sites d'artisans du Morbihan. Ce que ça leur coûte.",
    url: "https://sohanwebstudio.com/audits",
  },
};

const audits = [
  {
    entreprise: "Maçonnerie Sen",
    domaine: "maconnerie-sen.fr",
    ville: "Auray (56)",
    secteur: "Maçonnerie",
    score_avant: 28,
    score_apres: 92,
    lcp_avant: "8,2 s",
    lcp_apres: "< 1,5 s",
    verdict:
      "Un visiteur sur téléphone attend 8 secondes avant de voir quoi que ce soit. À Auray comme partout, les gens ferment l'onglet au bout de 3. Chaque demande de devis non reçue est une perte réelle.",
    gain: "Des demandes de devis au lieu d'onglets fermés",
  },
  {
    entreprise: "Breizh Serrurerie",
    domaine: "breizh-serrurerie-vannes.fr",
    ville: "Vannes (56)",
    secteur: "Serrurerie",
    score_avant: 32,
    score_apres: 94,
    lcp_avant: "21,3 s",
    lcp_apres: "< 1,2 s",
    verdict:
      "21 secondes d'attente sur mobile pour un serrurier d'urgence à Vannes. Le client bloqué dehors a déjà rappelé le concurrent suivant avant que la page soit visible.",
    gain: "Des appels d'urgence qui aboutissent au lieu de rebondir",
  },
  {
    entreprise: "Entre Terre et Jardin",
    domaine: "entre-terre-et-jardin.fr",
    ville: "Auray (56)",
    secteur: "Paysagisme",
    score_avant: 36,
    score_apres: 91,
    lcp_avant: "11,7 s",
    lcp_apres: "< 1,8 s",
    verdict:
      "Un paysagiste à Auray avec un site qui met 12 secondes à s'afficher sur téléphone. Le particulier qui cherche quelqu'un pour son jardin au printemps ne reste pas — il choisit le site suivant.",
    gain: "Des contacts de particuliers en début de saison",
  },
];

function ScoreBar({ score, label }: { score: number; label: string }) {
  const color =
    score >= 90
      ? "bg-emerald-400"
      : score >= 50
      ? "bg-amber-400"
      : "bg-red-500";
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
          {label}
        </span>
        <span className="text-sm font-bold text-white">{score}/100</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export default function Audits() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
            Audits locaux — mesures réelles
          </span>
        </div>
        <h1 className="font-notable text-4xl md:text-6xl text-white mb-6">
          Ce que perdent
          <br />
          vos voisins chaque jour
        </h1>
        <p className="text-zinc-300 text-lg max-w-2xl mb-16">
          Ces scores sont mesurés cette semaine sur de vrais sites d&apos;artisans du
          Morbihan. Pas des chiffres inventés. Des pertes concrètes, silencieuses,
          quotidiennes.
        </p>

        {/* Audit cards */}
        <div className="flex flex-col gap-8 mb-20">
          {audits.map((a, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h2 className="font-notable text-2xl text-white mb-1">
                    {a.entreprise}
                  </h2>
                  <div className="flex gap-4 text-xs uppercase tracking-widest text-zinc-500 font-medium">
                    <span>{a.secteur}</span>
                    <span>·</span>
                    <span>{a.ville}</span>
                    <span>·</span>
                    <span className="text-zinc-600">{a.domaine}</span>
                  </div>
                </div>
              </div>

              {/* Scores */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Avant */}
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                  <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-5">
                    Situation actuelle
                  </p>
                  <ScoreBar score={a.score_avant} label="Performance mobile" />
                  <div className="mt-5 pt-5 border-t border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-zinc-500">
                        Affichage mobile
                      </span>
                      <span className="text-sm font-bold text-red-400">
                        {a.lcp_avant}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Après */}
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
                  <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-5">
                    Après refonte
                  </p>
                  <ScoreBar score={a.score_apres} label="Performance mobile" />
                  <div className="mt-5 pt-5 border-t border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-zinc-500">
                        Affichage mobile
                      </span>
                      <span className="text-sm font-bold text-emerald-400">
                        {a.lcp_apres}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verdict */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                  {a.verdict}
                </p>
                <p className="text-white text-sm font-medium">
                  → {a.gain}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="font-notable text-3xl md:text-4xl text-white mb-4">
            Et votre site ?
          </h2>
          <p className="text-zinc-300 text-base max-w-lg mx-auto mb-8">
            Je mesure votre score en quelques minutes et vous envoie un rapport
            clair. Zéro jargon, zéro engagement.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black text-sm uppercase tracking-widest font-medium rounded hover:bg-zinc-200 transition-colors duration-300"
          >
            Demander mon diagnostic gratuit →
          </Link>
          <p className="text-zinc-600 text-xs mt-4 uppercase tracking-widest">
            Satisfait ou remboursé — 30 jours sans conditions
          </p>
        </div>
      </div>
    </div>
  );
}
