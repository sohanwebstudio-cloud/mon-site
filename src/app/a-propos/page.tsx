import type { Metadata } from "next";
import AProposClient from "./AProposClient";

export const metadata: Metadata = {
  title: "À Propos | Designer & Développeur Web à Vannes",
  description: "Sohan Jacquin — designer et développeur web basé à Vannes (Bretagne). Je crée des expériences web immersives, épurées et performantes pour les entreprises du Morbihan et au-delà.",
  alternates: {
    canonical: "https://sohanwebstudio.com/a-propos",
  },
  openGraph: {
    title: "À Propos — Sohan Jacquin, Développeur Web Vannes",
    description: "Designer et développeur web basé à Vannes (Bretagne). Création de sites internet sur-mesure pour TPE et PME en Morbihan.",
    url: "https://sohanwebstudio.com/a-propos",
  },
};

export default function APropos() {
  return <AProposClient />;
}
