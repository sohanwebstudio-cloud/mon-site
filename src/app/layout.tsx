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
