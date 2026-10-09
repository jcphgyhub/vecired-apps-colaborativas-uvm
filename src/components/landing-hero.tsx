"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Handshake, Leaf, Presentation, Repeat2, ShieldCheck, Wrench } from "lucide-react";
import { Logo } from "@/components/logo";

export function LandingHero() {
  return (
    <div className="min-h-screen">
      <header className="container-app flex items-center justify-between py-5">
        <Logo />
        <div className="flex gap-2">
          <Link href="/login" className="btn btn-soft">Iniciar sesión</Link>
          <Link href="/register" className="btn btn-primary">Crear cuenta</Link>
          <Link href="/presentacion" className="btn btn-soft hidden sm:inline-flex"><Presentation size={17}/> Presentación UVM</Link>
        </div>
      </header>

      <main>
        <section className="container-app grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="badge badge-green mb-5">
              <Leaf size={14}/> Economía colaborativa local
            </motion.div>
            <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.05}} className="page-title">
              Comparte, intercambia y encuentra <span className="text-emerald-700">cerca de ti.</span>
            </motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.12}} className="mt-6 max-w-2xl text-lg leading-8 muted">
              Utiliza recursos existentes antes de comprar nuevos. VeciRed organiza préstamos, intercambios y servicios locales con historial, reputación y seguimiento.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard" className="btn btn-primary">Entrar al demo <ArrowRight size={18}/></Link>
              <Link href="/help" className="btn btn-soft">Cómo funciona</Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              <div className="card p-4"><div className="text-2xl font-black">27</div><div className="text-xs font-bold muted">objetos reutilizados</div></div>
              <div className="card p-4"><div className="text-2xl font-black">14</div><div className="text-xs font-bold muted">compras evitadas</div></div>
              <div className="card p-4"><div className="text-2xl font-black">33</div><div className="text-xs font-bold muted">recursos compartidos</div></div>
            </div>
          </div>

          <motion.div initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} transition={{delay:.1}} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-200/40 via-blue-100/20 to-lime-200/40 blur-2xl"/>
            <div className="card overflow-hidden p-4 sm:p-6">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="text-sm font-bold text-emerald-300">UTILIZAR EN LUGAR DE POSEER</div>
                <div className="mt-2 text-2xl font-black">¿Por qué comprar algo que usarás una sola vez?</div>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  [Wrench, "Préstamos", "Usa lo que necesitas sin tener que comprarlo.", "bg-emerald-50 text-emerald-800"],
                  [Repeat2, "Intercambios", "Dale nueva utilidad a lo que ya tienes.", "bg-blue-50 text-blue-800"],
                  [Handshake, "Servicios locales", "Encuentra ayuda confiable cerca de ti.", "bg-amber-50 text-amber-800"],
                ].map(([Icon, title, text, cls]: any) => (
                  <div key={title} className={`rounded-2xl p-4 ${cls}`}>
                    <div className="flex items-start gap-3">
                      <span className="rounded-xl bg-white/70 p-2"><Icon size={20}/></span>
                      <div><div className="font-black">{title}</div><div className="mt-1 text-sm opacity-80">{text}</div></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-[var(--border)] p-4 text-sm">
                <ShieldCheck className="text-emerald-700"/><b>Confianza visible:</b> historial, reputación, devoluciones e incidencias.
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
