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
      // Utilise screen.height pour couvrir le viewport même quand les toolbars iOS Safari se cachent
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, window.screen?.height ?? window.innerHeight);
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 2500);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2, // Between 0.2 and 1.4
          vx: (Math.random() - 0.5) * 0.1, // Very slow horizontal drift
          vy: (Math.random() - 0.5) * 0.1, // Very slow vertical drift
          alpha: Math.random(),
          dAlpha: (Math.random() * 0.02) - 0.01 // Twinkling effect
        });
      }
    };

    const draw = () => {
      // Clear the canvas with a deep space gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height, 0,
        canvas.width / 2, canvas.height / 2, canvas.height
      );
      gradient.addColorStop(0, '#0a101f'); // Deep dark blue at bottom
      gradient.addColorStop(1, '#000000'); // Pure black at top
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Twinkling logic
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

        // Movement logic
        star.x += star.vx;
        star.y += star.vy;

        // Wrapping edges
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
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
