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
    let comets: { x: number; y: number; vx: number; vy: number; length: number; opacity: number }[] = [];
    
    // On sauvegarde la largeur initiale pour contrer le bug Safari
    let lastWidth = window.innerWidth;

    const resize = () => {
      // LE FIX DE STABILITÉ : On ignore les changements de hauteur (causés par le scroll Safari). 
      // On ne redessine tout que si l'utilisateur tourne son téléphone (changement de largeur).
      if (window.innerWidth === lastWidth && stars.length > 0) return;
      lastWidth = window.innerWidth;

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
      
      // RARETÉ : Divisée par 3 (0.0015 au lieu de 0.005). Apparaît en moyenne toutes les 10-15 sec.
      if (Math.random() < 0.0015 && comets.length === 0) {
        // ALÉATOIRE : Une chance sur deux d'aller vers la droite (1) ou vers la gauche (-1)
        const directionX = Math.random() > 0.5 ? 1 : -1;
        
        comets.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 3),
          // ALÉATOIRE : La vitesse X et Y varie grandement pour changer l'angle de chute
          vx: directionX * (2 + Math.random() * 6), 
          vy: 2 + Math.random() * 5, 
          length: 80 + Math.random() * 100, 
          opacity: 1
        });
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const comet = comets[i];
        
        const tailX = comet.x - (comet.vx * comet.length) / 10;
        const tailY = comet.y - (comet.vy * comet.length) / 10;

        const gradient = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        comet.x += comet.vx;
        comet.y += comet.vy;
        
        // Fading plus lent pour qu'on ait le temps de voir la comète traverser l'écran
        comet.opacity -= 0.008; 

        if (comet.opacity <= 0 || comet.y > canvas.height || comet.x < 0 || comet.x > canvas.width) {
          comets.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    
    // Initialisation forcée au premier montage
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
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