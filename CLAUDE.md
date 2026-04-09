# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server on 0.0.0.0 (accessible on LAN)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite configured.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React

## Architecture

**Pages** (`src/app/`): `/`, `/projets`, `/projets/[slug]`, `/a-propos`, `/contact`, `/prestations`, `/formulaire`

**Shared components** (`src/components/`): `Header`, `Footer`, `StarryBackground` (canvas-based animated star field, fixed z-0 behind everything).

**Layout** (`src/app/layout.tsx`): wraps all pages with `StarryBackground` + `Header` + `Footer`. Main content capped at `max-w-[1600px] mx-auto`. Background is `#050505` (near-black). Two Google Fonts loaded via `next/font`: `Notable` (headings, `--font-notable`) and `Barlow` (body, `--font-barlow`).

**Project data** is hardcoded as a `Record<string, ProjetData>` object directly in `src/app/projets/[slug]/page.tsx` — no database or CMS. Adding a project means adding an entry to that object and linking it via `nextProject`.

**Animation conventions**: All animated pages use `"use client"`. Framer Motion `Variants` are defined at module scope (`fadeInUp`, `fadeInLeft`, `fadeInRight`, `staggerContainer`) and reused across sections. The `FloatingImage` component in `[slug]/page.tsx` uses `requestAnimationFrame` for a subtle sinusoidal float effect — not Framer Motion.

**Asymmetric section layout** on project detail pages: 12-column grid, text on `col-span-5`, image on `col-span-7`, alternating sides per section (even index = text left, odd = text right).

## Dark theme — conventions de style validées

Cards : `bg-white/5 border border-white/10 rounded-2xl`
Inputs : `bg-white/5 border border-white/20 rounded-lg text-white placeholder-zinc-400 focus:border-white`
Labels : `text-xs font-bold uppercase tracking-widest text-zinc-200`
Textes descriptifs : `text-sm text-zinc-300`
Mots importants en gras : `text-white`
Bouton principal : `bg-white text-black hover:bg-zinc-200`
Séparateur : `h-px bg-white/10`
Erreur : `text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg`

## Git

Repo GitHub : `sohanwebstudio-cloud/mon-site` (public)
Git local configuré sur : `sohanwebstudio-cloud` / `sohanwebstudio@gmail.com`
Déploiement : Vercel auto sur push `main` — l'auteur du commit doit être `sohanwebstudio-cloud`

## Formulaire client (`/formulaire`)

Passeport Graphique — soumission via Formspree (`https://formspree.io/f/xzdjwgoo`).
Aucun CSS inline — tout Tailwind. Logique d'état en React pur (`useState`), pas de lib de formulaire.
