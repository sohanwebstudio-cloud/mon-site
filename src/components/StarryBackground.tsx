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

    const resize = () => {
      // Fini le hack screen.height. On s'aligne sur la taille réelle.
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
      // IMPORTANT : On efface l'ancienne image, on ne peint plus de fond plein.
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // On dessine uniquement les étoiles
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