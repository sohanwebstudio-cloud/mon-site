import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Agence Web Vannes | Création Site Internet Sur-Mesure — Sohan Web Studio",
  description: "Agence web à Vannes (Morbihan, Bretagne). Création de sites internet sur-mesure, design premium, développement Next.js. Sites rapides, épurés, conçus pour convertir. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://sohanwebstudio.com",
  },
  openGraph: {
    title: "Agence Web Vannes | Création Site Internet — Sohan Web Studio",
    description: "Agence web à Vannes. Création de sites internet sur-mesure, design premium, développement Next.js. Devis gratuit sous 24h.",
    url: "https://sohanwebstudio.com",
  },
};

export default function Home() {
  return <HomeClient />;
}
