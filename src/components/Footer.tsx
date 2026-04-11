import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent pt-16 pb-8">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="Sohan Web Studio Logo" width={320} height={70} className="object-contain" />
            </Link>
            <p className="text-zinc-200 max-w-sm mb-8 leading-relaxed">
              Stratégie & Développement haut de gamme. L'esthétique de pointe alliée à la performance Next.js.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Pages</h4>
            <ul className="space-y-4 text-zinc-200">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/projets" className="hover:text-white transition-colors">Projets</Link></li>
              <li><Link href="/a-propos" className="hover:text-white transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-6">Social</h4>
            <ul className="space-y-4 text-zinc-200">
              <li>
                <a href="https://www.instagram.com/sohanwebstudio/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between hover:text-white transition-colors">
                  Instagram <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://x.com/Sohan_WebStudio" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between hover:text-white transition-colors">
                  X (Twitter) <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Sohan Web Studio</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-zinc-100 transition-colors">Mentions Légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
