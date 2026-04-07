"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mojppwob", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-2xl">
        <h1 className="font-notable text-4xl md:text-6xl font-bold text-white mb-6 text-center">Parlons de votre projet.</h1>
        <p className="text-zinc-400 text-lg text-center mb-16">Vous avez une vision ? Donnons-lui vie. Contactez le studio pour discuter de vos objectifs et obtenir un devis pour votre site internet haut de gamme. Réponse sous 24h.</p>

        {status === "success" ? (
          <div className="bg-white/5 p-12 rounded-2xl border border-white/10 text-center">
            <p className="text-2xl font-semibold text-white mb-4">Message envoyé !</p>
            <p className="text-zinc-400">Merci pour votre message. Je vous réponds sous 24h.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 px-8 py-3 border border-white/20 rounded-full text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Prénom</label>
                <input name="prenom" type="text" required className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Nom</label>
                <input name="nom" type="text" required className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
              <input name="email" type="email" required className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
              <textarea name="message" rows={5} required className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-white text-black font-semibold rounded-lg px-4 py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Une erreur est survenue. Veuillez réessayer.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
