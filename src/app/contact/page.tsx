import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Devis Gratuit — Agence Web Vannes",
  description: "Contactez Sohan Web Studio, votre agence web à Vannes (Bretagne). Devis gratuit pour votre site internet. Réponse garantie sous 24h. Développement web Morbihan.",
  alternates: {
    canonical: "https://sohanwebstudio.com/contact",
  },
  openGraph: {
    title: "Contact — Devis Gratuit | Sohan Web Studio Vannes",
    description: "Demandez un devis gratuit pour votre site internet à notre agence web de Vannes (Bretagne). Réponse sous 24h.",
    url: "https://sohanwebstudio.com/contact",
  },
};

export default function Contact() {
  return <ContactClient />;
}
