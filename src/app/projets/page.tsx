import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Projets() {
  const projets = [
    {
      id: "chez-jimmy-cookies",
      title: "Chez Jimmy Cookies",
      desc: "Création d'un site e-commerce Shopify pour une biscuiterie artisanale lyonnaise.",
      image: "https://framerusercontent.com/images/98zBSxZmQHfD6YFiEPdyX65cDI.jpg"
    },
    {
      id: "nova",
      title: "nova",
      desc: "Application sociale émergente redéfinissant les interactions en ligne avec une interface minimaliste.",
      image: "https://framerusercontent.com/images/eAEZ7RsEbGflhzzPbV0NOYzlSc.png"
    },
    {
      id: "nobilis-bois",
      title: "Nobilis Bois",
      desc: "Vitrine digitale haut de gamme pour un atelier d'agencement sur-mesure d'exception.",
      image: "https://framerusercontent.com/images/TGvR18cK6pVnJcSpgRoINgjHYq8.png"
    },
    {
      id: "doma",
      title: "Doma",
      desc: "Identité digitale épurée pour une agence d'architecture basée à Kyoto, axée sur la précision.",
      image: "https://framerusercontent.com/images/HraO7yjCBKF8wKtOJwECpOh5E.png"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <h1 className="font-notable text-4xl md:text-6xl font-bold text-white mb-6">Projets</h1>
        <p className="text-zinc-400 text-lg max-w-2xl">Découvrez mes récentes réalisations et comment j&apos;ai aidé mes clients à transformer leur présence en ligne.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projets.map((projet) => (
            <Link
              href={`/projets/${projet.id}`}
              key={projet.id}
              className="group relative flex flex-col bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-transparent">
                <img
                  src={projet.image}
                  alt={projet.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-notable text-2xl text-white">{projet.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowRight size={18} />
                  </div>
                </div>
                <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  {projet.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
