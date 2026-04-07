import type { Metadata } from "next";
import { Notable, Barlow } from "next/font/google";
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
  title: "Sohan Web Studio — Design Web & Stratégie Digitale",
  description: "Création de sites web haut de gamme sur Framer. Nous concevons des identités digitales minimalistes et immersives pour les marques et entreprises ambitieuses.",
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
        <StarryBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 w-full max-w-[1600px] mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
