import type { Metadata } from "next";
import { Notable, Barlow } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";

const notable = Notable({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-notable",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: {
    default: "Agence Web Vannes | Création Site Internet — Sohan Web Studio",
    template: "%s | Sohan Web Studio — Agence Web Vannes",
  },
  description: "Agence web à Vannes (Bretagne). Création de sites internet sur-mesure, design premium, développement Next.js. Devis gratuit sous 24h. Référencé en Morbihan.",
  keywords: [
    "agence web Vannes",
    "création site internet Vannes",
    "développeur web Vannes",
    "web design Vannes",
    "site internet Vannes",
    "création site web Morbihan",
    "agence web Bretagne",
    "développeur web Bretagne",
    "création site internet Bretagne",
    "site web professionnel Vannes",
    "freelance web Vannes",
  ],
  metadataBase: new URL("https://sohanwebstudio.com"),
  openGraph: {
    title: "Agence Web Vannes | Création Site Internet — Sohan Web Studio",
    description: "Agence web à Vannes (Bretagne). Création de sites internet sur-mesure, design premium, Next.js. Devis gratuit sous 24h.",
    url: "https://sohanwebstudio.com",
    siteName: "Sohan Web Studio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 320,
        height: 70,
        alt: "Sohan Web Studio — Agence Web Vannes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agence Web Vannes | Sohan Web Studio",
    description: "Création de sites internet sur-mesure à Vannes, Bretagne. Design premium, Next.js, livraison rapide.",
    site: "@Sohan_WebStudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sohan Web Studio",
  "description": "Agence web à Vannes spécialisée dans la création de sites internet sur-mesure, le web design premium et le développement Next.js.",
  "url": "https://sohanwebstudio.com",
  "logo": "https://sohanwebstudio.com/logo.png",
  "image": "https://sohanwebstudio.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vannes",
    "addressRegion": "Bretagne",
    "postalCode": "56000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6559,
    "longitude": -2.7603
  },
  "areaServed": [
    { "@type": "City", "name": "Vannes" },
    { "@type": "AdministrativeArea", "name": "Morbihan" },
    { "@type": "AdministrativeArea", "name": "Bretagne" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "700€ - 1200€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Virement bancaire",
  "sameAs": [
    "https://www.instagram.com/sohanwebstudio/",
    "https://x.com/Sohan_WebStudio"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de création web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fondation — Création site web",
          "description": "Site internet jusqu'à 3 pages, SEO optimisé, formulaire de contact, responsive mobile."
        },
        "price": "700",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "La Vitrine — Site web premium",
          "description": "Site internet 5 pages avec animations, blog/portfolio, stratégie de contenu, SEO avancé."
        },
        "price": "1200",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sur Mesure — Développement web personnalisé",
          "description": "Architecture web avancée, e-commerce, API, système de design complet sur Figma."
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${notable.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-white selection:text-black bg-[#050505] text-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script id="cal-com" strategy="afterInteractive">{`
          (function(C,A,L){let p=function(a,ar){a.q.push(ar)};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true}if(ar[0]===L){const api=function(){p(api,arguments)};const namespace=ar[1];api.q=api.q||[];if(typeof namespace==="string"){cal.ns[namespace]=cal.ns[namespace]||api;p(cal.ns[namespace],ar);p(cal,["-s",namespace])}else p(cal,ar);return}p(cal,ar)};})(window,"https://app.cal.com/embed/embed.js","init");
          Cal("init",{origin:"https://cal.com"});
        `}</Script>
        <StarryBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
