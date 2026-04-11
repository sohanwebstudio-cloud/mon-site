"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xzdjwgoo";

const AMBIANCE = [
  "Minimaliste & epure",
  "Luxueux & premium",
  "Moderne & tech",
  "Chaleureux & humain",
  "Naturel & organique",
  "Audacieux & creatif",
  "Je ne sais pas encore",
];
const TYPO = [
  "Serif classique",
  "Sans-serif moderne",
  "Manuscrit / handwritten",
  "Display / expressif",
  "Je fais confiance a votre expertise",
];
const TYPE_SITE = [
  "Site vitrine",
  "Portfolio",
  "E-commerce",
  "Blog / contenu",
  "Landing page",
  "Je ne sais pas encore",
];
const LIVR = [
  "Refonte ou creation du logo",
  "Palette de couleurs complete",
  "Selection typographique",
  "Composants UI (boutons, cards...)",
  "Iconographie & illustrations",
  "Guide de style complet (PDF)",
  "Autre",
];

function Chip({
  label,
  on,
  toggle,
}: {
  label: string;
  on: boolean;
  toggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={toggle}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer select-none border ${
        on
          ? "border-white bg-white text-black"
          : "border-white/20 bg-white/5 text-zinc-200 hover:border-white/40"
      }`}
    >
      {label}
    </button>
  );
}

function Check({
  label,
  on,
  toggle,
}: {
  label: string;
  on: boolean;
  toggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-3 text-left text-white cursor-pointer select-none"
    >
      <div
        className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          on ? "bg-white border-white" : "bg-white/5 border-white/20"
        }`}
      >
        {on && <span className="text-black text-xs font-bold">&#10003;</span>}
      </div>
      <span className="text-sm">{label}</span>
    </button>
  );
}

function Card({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
        <div className="absolute top-6 right-7 text-xs font-bold tracking-widest text-zinc-500">
          {num}
        </div>
        <h2 className="font-notable text-lg md:text-xl text-white mb-6 pr-12 uppercase tracking-wide">
          {title}
        </h2>
        <div className="flex flex-col gap-5">{children}</div>
      </div>
    </div>
  );
}

export default function Formulaire() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [err, setErr] = useState("");
  const [f, setF] = useState({
    nom: "",
    site: "",
    email: "",
    logo: "",
    aime: "",
    changer: "",
    ambiance: [] as string[],
    mots: "",
    refs: "",
    admiration: "",
    couleurOui: "",
    couleurNon: "",
    typo: "",
    secteur: "",
    typeSite: [] as string[],
    cible: "",
    concurrents: "",
    diff: "",
    livrables: [] as string[],
    deadline: "",
    plus: "",
  });

  const s = (k: string, v: string) =>
    setF((p) => ({ ...p, [k]: v }));
  const tog = (k: "ambiance" | "typeSite" | "livrables", v: string) =>
    setF((p) => ({
      ...p,
      [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v],
    }));

  const submit = async () => {
    if (!f.nom || !f.email) {
      setErr("Merci de renseigner votre nom et email.");
      return;
    }
    setErr("");
    setStatus("sending");
    try {
      const payload = {
        "Nom & Entreprise": f.nom,
        "Site web": f.site,
        email: f.email,
        "Secteur d'activite": f.secteur,
        "Type de site": f.typeSite.join(", "),
        "Ce que j'aime": f.aime,
        "Ce que je veux changer": f.changer,
        Ambiance: f.ambiance.join(", "),
        "Marque en 3 mots": f.mots,
        "References admirees": f.admiration,
        "Couleurs a conserver": f.couleurOui,
        "Couleurs a eviter": f.couleurNon,
        Typographie: f.typo,
        "Client ideal": f.cible,
        Concurrents: f.concurrents,
        Differenciateur: f.diff,
        Livrables: f.livrables.join(", "),
        Deadline: f.deadline,
        "Infos complementaires": f.plus,
        ...(f.logo && { "Lien fichiers (logo, charte, captures)": f.logo }),
        ...(f.refs && { "Lien references visuelles": f.refs }),
      };
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.errors)
        throw new Error(data.errors.map((e: { message: string }) => e.message).join(", "));
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      console.error(e);
      setStatus("idle");
      setErr(
        "Une erreur est survenue. Veuillez reessayer ou me contacter directement."
      );
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors";
  const labelClass =
    "block text-xs font-bold uppercase tracking-widest text-zinc-200 mb-2";

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {status === "success" ? (
          <div className="pt-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-16 text-center">
              <span className="text-4xl block mb-5">&#127912;</span>
              <h2 className="font-notable text-xl md:text-2xl uppercase tracking-widest text-white mb-4">
                Merci pour vos reponses !
              </h2>
              <p className="text-zinc-200 leading-relaxed">
                J&apos;analyse votre Passeport Graphique avec attention.
                <br />
                Je vous recontacte sous 48h pour notre premiere session.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="font-notable text-4xl md:text-6xl text-white mb-4">
                Identite Graphique
              </h1>
              <p className="text-zinc-200 text-base max-w-lg mx-auto leading-relaxed">
                Ce formulaire me permet de comprendre votre univers visuel avant
                de commencer votre projet. Comptez 10 a 15 minutes.
              </p>
            </div>

            <Card num="01" title="Vos informations">
              <div>
                <label className={labelClass}>Nom complet & entreprise</label>
                <input
                  className={inputClass}
                  placeholder="Marie Dupont — Studio Lumiere"
                  value={f.nom}
                  onChange={(e) => s("nom", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Site web actuel</label>
                <input
                  className={inputClass}
                  placeholder="https://monsite.fr"
                  value={f.site}
                  onChange={(e) => s("site", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Email de contact</label>
                <input
                  className={inputClass}
                  type="email"
                  placeholder="marie@studio.fr"
                  value={f.email}
                  onChange={(e) => s("email", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Secteur d&apos;activite</label>
                <input
                  className={inputClass}
                  placeholder="Restaurant, cabinet d'avocats, artisan, e-commerce..."
                  value={f.secteur}
                  onChange={(e) => s("secteur", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Type de site souhaite</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {TYPE_SITE.map((o) => (
                    <Chip
                      key={o}
                      label={o}
                      on={f.typeSite.includes(o)}
                      toggle={() => tog("typeSite", o)}
                    />
                  ))}
                </div>
              </div>
            </Card>

            <Card num="02" title="Votre identite actuelle">
              <div>
                <label className={labelClass}>
                  Vos fichiers — Logo, charte & captures
                </label>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-zinc-100 mb-3">
                    Mettez votre logo, charte graphique et captures de votre
                    site dans un dossier{" "}
                    <strong className="text-white">Google Drive</strong> ou{" "}
                    <strong className="text-white">WeTransfer</strong> et
                    collez le lien ici.
                  </p>
                  <input
                    className={inputClass}
                    placeholder="https://drive.google.com/drive/folders/..."
                    value={f.logo}
                    onChange={(e) => s("logo", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>
                  Ce que vous aimez dans votre identite actuelle
                </label>
                <textarea
                  className={`${inputClass} resize-y min-h-[90px] leading-relaxed`}
                  placeholder="J'aime ma couleur principale mais le logo me semble date..."
                  value={f.aime}
                  onChange={(e) => s("aime", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Ce que vous souhaitez changer
                </label>
                <textarea
                  className={`${inputClass} resize-y min-h-[90px] leading-relaxed`}
                  placeholder="Je veux quelque chose de plus premium..."
                  value={f.changer}
                  onChange={(e) => s("changer", e.target.value)}
                />
              </div>
            </Card>

            <Card num="03" title="Direction artistique">
              <div>
                <label className={labelClass}>
                  Ambiance visuelle souhaitee
                </label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {AMBIANCE.map((o) => (
                    <Chip
                      key={o}
                      label={o}
                      on={f.ambiance.includes(o)}
                      toggle={() => tog("ambiance", o)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Votre marque en 3 mots</label>
                <input
                  className={inputClass}
                  placeholder="Elegant, Accessible, Moderne"
                  value={f.mots}
                  onChange={(e) => s("mots", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Lien vers vos references visuelles
                </label>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-zinc-100 mb-3">
                    Logos, sites, captures Pinterest — partagez via Google Drive
                    ou WeTransfer
                  </p>
                  <input
                    className={inputClass}
                    placeholder="https://drive.google.com/drive/folders/..."
                    value={f.refs}
                    onChange={(e) => s("refs", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>
                  1-2 sites que vous admirez (hors concurrents)
                </label>
                <textarea
                  className={`${inputClass} resize-y min-h-[90px] leading-relaxed`}
                  placeholder={
                    "https://exemple1.com — j'aime leur sobriete\nhttps://exemple2.com — l'usage des couleurs est parfait"
                  }
                  value={f.admiration}
                  onChange={(e) => s("admiration", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Couleurs a conserver</label>
                <input
                  className={inputClass}
                  placeholder="Le bleu marine est important..."
                  value={f.couleurOui}
                  onChange={(e) => s("couleurOui", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Couleurs a eviter</label>
                <input
                  className={inputClass}
                  placeholder="Pas de rouge, pas de jaune vif..."
                  value={f.couleurNon}
                  onChange={(e) => s("couleurNon", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Style typographique</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {TYPO.map((o) => (
                    <Chip
                      key={o}
                      label={o}
                      on={f.typo === o}
                      toggle={() => s("typo", o)}
                    />
                  ))}
                </div>
              </div>
            </Card>

            <Card num="04" title="Cible & concurrents">
              <div>
                <label className={labelClass}>Votre client ideal</label>
                <textarea
                  className={`${inputClass} resize-y min-h-[90px] leading-relaxed`}
                  placeholder="Des femmes de 30-45 ans, urbaines, sensibles au design..."
                  value={f.cible}
                  onChange={(e) => s("cible", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>2-3 concurrents directs</label>
                <textarea
                  className={`${inputClass} resize-y min-h-[90px] leading-relaxed`}
                  placeholder={
                    "https://concurrent1.fr\nhttps://concurrent2.com"
                  }
                  value={f.concurrents}
                  onChange={(e) => s("concurrents", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Ce qui vous differencie</label>
                <textarea
                  className={`${inputClass} resize-y min-h-[90px] leading-relaxed`}
                  placeholder="Je suis le seul a proposer..."
                  value={f.diff}
                  onChange={(e) => s("diff", e.target.value)}
                />
              </div>
            </Card>

            <Card num="05" title="Livrables souhaites">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {LIVR.map((o) => (
                  <Check
                    key={o}
                    label={o}
                    on={f.livrables.includes(o)}
                    toggle={() => tog("livrables", o)}
                  />
                ))}
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <label className={labelClass}>
                  Date de lancement ou deadline
                </label>
                <input
                  className={inputClass}
                  type="date"
                  value={f.deadline}
                  onChange={(e) => s("deadline", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Informations complementaires
                </label>
                <textarea
                  className={`${inputClass} resize-y min-h-[90px] leading-relaxed`}
                  placeholder="Contexte, contraintes techniques, budget..."
                  value={f.plus}
                  onChange={(e) => s("plus", e.target.value)}
                />
              </div>
              {err && (
                <div className="text-sm text-red-400 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  {err}
                </div>
              )}
              <button
                type="button"
                className="w-full border border-white rounded text-white font-medium uppercase tracking-widest px-[30px] py-5 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={submit}
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Envoi en cours..."
                  : "Envoyer mon Passeport Graphique"}
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-zinc-600 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                Envoye de facon securisee par email
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
