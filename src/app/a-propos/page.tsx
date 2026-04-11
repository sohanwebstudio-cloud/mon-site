"use client";

import { useEffect, useRef } from "react";

function FloatingImage({
  src,
  alt,
  className,
  delay = 0,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  objectPosition?: string;
}) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const amplitude = 8 + Math.random() * 8;
    const speedX = 0.3 + Math.random() * 0.4;
    const speedY = 0.4 + Math.random() * 0.3;
    const phaseX = Math.random() * Math.PI * 2;
    const phaseY = Math.random() * Math.PI * 2;

    let frame: number;
    const start = performance.now() + delay * 1000;

    const animate = (time: number) => {
      const t = (time - start) / 1000;
      const x = Math.sin(t * speedX + phaseX) * amplitude * 0.5;
      const y = Math.sin(t * speedY + phaseY) * amplitude;
      el.style.transform = `translate(${x}px, ${y}px)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [delay]);

  return (
    <div ref={imgRef} className={className}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-black/50"
        style={{ objectPosition }}
      />
    </div>
  );
}

export default function APropos() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20">

        {/* Hero — 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center mb-16 md:mb-24">
          {/* Texte */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Designer & Développeur Web · Bretagne
            </p>
            <h1 className="font-notable text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-none">
              Du plan<br />au pixel.
            </h1>
            <p className="text-zinc-100 text-base md:text-lg leading-relaxed max-w-xl">
              Mon background en architecture dicte mon approche : éliminer le superflu pour ne garder que l&apos;essentiel. Je construis des expériences web immersives et performantes depuis mon studio en Bretagne.
            </p>
          </div>

          {/* Image flottante */}
          <div className="lg:col-span-5">
            <FloatingImage
              src="/DSCF1234.jpeg"
              alt="Sohan Jacquin"
              className="w-full aspect-[4/3] sm:aspect-[3/4] max-h-[60vw] sm:max-h-none"
              delay={0.2}
              objectPosition="center 30%"
            />
          </div>
        </div>

        <div className="h-px bg-white/10 mb-16 md:mb-24" />

        {/* Convictions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 md:mb-24 items-start">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-200 lg:sticky lg:top-32">
              Mes convictions
            </p>
          </div>
          <div className="lg:col-span-9">
            <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed">
              Le design n&apos;est pas de l&apos;art, c&apos;est de l&apos;intelligence rendue visible. Il ne sert pas à décorer, mais à{" "}
              <strong>clarifier le chaos.</strong> Là où l&apos;art pose des questions,{" "}
              <strong>le vrai design apporte des réponses.</strong>
            </p>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-16 md:mb-24" />

        {/* Label galerie */}
        <p className="text-lg md:text-xl font-notable uppercase tracking-widest text-white text-left mb-8 md:mb-10">Un aperçu de ma galerie</p>

        {/* Galerie flottante — 2 colonnes */}
        <div className="grid grid-cols-2 gap-3 md:gap-8">
          <div className="flex flex-col gap-3 md:gap-3">
            <FloatingImage
              src="/DSCF6654.jpg"
              alt="New York"
              className="aspect-[4/3] w-full"
              delay={0}
            />
            <span className="font-notable text-lg md:text-2xl lg:text-3xl font-bold text-white uppercase">New York</span>
            <FloatingImage
              src="https://framerusercontent.com/images/Z1GUrf9btmNCEkZdsMOi58oOVg.jpg"
              alt="New York 2"
              className="aspect-[4/3] w-full"
              delay={0.8}
            />
          </div>
          <div className="flex flex-col gap-3">
            <FloatingImage
              src="/DSCF6600.jpg"
              alt="New Jersey"
              className="aspect-[4/3] w-full"
              delay={0.4}
            />
            <FloatingImage
              src="/DSCF6626.jpg"
              alt="New Jersey 2"
              className="aspect-[4/3] w-full"
              delay={1.2}
            />
            <FloatingImage
              src="/DSCF6523.jpg"
              alt="New bar 3"
              className="aspect-[4/3] w-full"
              delay={1.6}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
