export default function Prestations() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">Les Prestations</h1>
        <p className="text-zinc-400 text-lg text-center mb-16">Des solutions complètes pour votre réussite digitale.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Design Web & UI/UX", price: "Sur devis", desc: "Création d'interfaces esthétiques, intuitives et pensées pour convertir." },
            { title: "Développement Next.js", price: "Sur devis", desc: "Sites vitrines premium ou applications web performantes avec les dernières technologies." },
            { title: "Suivi & SEO", price: "Mensuel", desc: "Maintenance continue et stratégie de référencement pour rester en haut des recherches." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-zinc-300 w-max mb-6">{item.price}</span>
              <p className="text-zinc-400 flex-1">{item.desc}</p>
              <button className="mt-8 w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors text-sm font-medium">En savoir plus</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
