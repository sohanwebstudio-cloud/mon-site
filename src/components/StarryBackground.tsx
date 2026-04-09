"use client";

import { useEffect, useRef } from "react";

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; dAlpha: number }[] = [];
    
    // NOUVEAU : Tableau pour stocker nos étoiles filantes (comètes)
    let comets: { x: number; y: number; vx: number; vy: number; length: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 2500);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          alpha: Math.random(),
          dAlpha: (Math.random() * 0.02) - 0.01
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- 1. GESTION DES ÉTOILES FIXES ---
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        star.alpha += star.dAlpha;
        if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.dAlpha = -star.dAlpha;
        } else if (star.alpha >= 1) {
          star.alpha = 1;
          star.dAlpha = -star.dAlpha;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      // --- 2. GESTION DES ÉTOILES FILANTES ---
      
      // Spawn aléatoire : 0.5% de chance par frame d'en créer une. 
      // J'ai mis "comets.length === 0" pour qu'il n'y en ait jamais plus d'une à la fois (effet rare et élégant).
      if (Math.random() < 0.005 && comets.length === 0) {
        comets.push({
          x: Math.random() * canvas.width,       // Départ X aléatoire
          y: Math.random() * (canvas.height / 3), // Départ Y toujours dans le tiers supérieur
          vx: -4 - Math.random() * 4,            // Vitesse horizontale (vers la gauche)
          vy: 4 + Math.random() * 4,             // Vitesse verticale (vers le bas)
          length: 100 + Math.random() * 100,     // Longueur de la traînée
          opacity: 1                             // Opacité initiale
        });
      }

      // Dessin et animation des comètes
      for (let i = comets.length - 1; i >= 0; i--) {
        const comet = comets[i];
        
        // Calcul du bout de la queue de l'étoile filante (à l'opposé de la direction)
        const tailX = comet.x - (comet.vx * comet.length) / 10;
        const tailY = comet.y - (comet.vy * comet.length) / 10;

        // Création de la traînée lumineuse (dégradé)
        const gradient = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`); // Tête lumineuse
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);                // Queue transparente

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Fait avancer la comète
        comet.x += comet.vx;
        comet.y += comet.vy;
        
        // La comète s'estompe au bout d'un moment (burnout)
        comet.opacity -= 0.012; 

        // Nettoyage : si elle est totalement invisible ou sortie de l'écran, on la supprime
        if (comet.opacity <= 0 || comet.y > canvas.height || comet.x < 0) {
          comets.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 h-[100dvh] w-screen pointer-events-none bg-black bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0a101f] via-black to-black">
      <canvas 
        ref={canvasRef} 
        className="block h-full w-full"
      />
    </div>
  );
}