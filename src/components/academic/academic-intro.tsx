import Link from "next/link";
import { ArrowRight, CircleHelp, Leaf, Network, ShieldCheck } from "lucide-react";
import { AcademicIdentityCard } from "@/components/academic/academic-identity-card";

export function AcademicIntro() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-[84px_1fr]">
        <div className="hidden bg-[#d9002b] lg:block" aria-hidden="true"/>
        <div className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d9002b] via-[#d9002b] to-emerald-600"/>
          <div className="container-app flex min-h-screen flex-col justify-center py-10 lg:py-14">
            <div className="mx-auto w-full max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
                <section>
                  <div className="text-4xl font-black tracking-tight text-[#d9002b]">UVM</div>
                  <div className="mt-2 text-sm font-black tracking-[.08em] text-slate-800">UNIVERSIDAD DEL VALLE DE MÉXICO</div>
                  <div className="mt-8 text-xs font-black uppercase tracking-[.18em] text-[#d9002b]">Diseñar para Compartir · Actividad 4</div>
                  <h1 className="mt-3 text-5xl font-black tracking-[-.04em] text-slate-950 sm:text-6xl">VeciRed</h1>
                  <div className="mt-2 text-xl font-black text-emerald-700">Economía colaborativa local</div>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Una plataforma para aprovechar recursos y servicios que ya existen dentro de una comunidad.</p>
                  <div className="mt-7"><AcademicIdentityCard/></div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/" className="btn btn-primary">Entrar a VeciRed <ArrowRight size={18}/></Link>
                    <Link href="/help" className="btn btn-soft"><CircleHelp size={18}/> ¿Cómo funciona?</Link>
                    <Link href="/presentacion/recorrido" className="btn btn-secondary">Recorrido para evaluación</Link>
                  </div>
                </section>

                <section className="grid gap-4">
                  <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl">
                    <div className="flex items-center gap-2 text-sm font-black text-emerald-300"><Leaf size={18}/> PRINCIPIO DE ECONOMÍA COLABORATIVA</div>
                    <div className="mt-3 text-3xl font-black">Utilizar en lugar de poseer.</div>
                    <p className="mt-3 text-white/70">VeciRed conecta necesidades con recursos, productos y capacidades que ya existen cerca.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="card p-5">
                      <div className="flex items-center gap-2 font-black text-emerald-800"><Network size={19}/> Problema que resolvemos</div>
                      <p className="mt-2 text-sm leading-6 muted">Préstamos, intercambios y servicios locales suelen organizarse mediante mensajes dispersos. VeciRed los convierte en procesos claros con historial, reputación y seguimiento.</p>
                    </div>
                    <div className="card p-5">
                      <div className="flex items-center gap-2 font-black text-blue-800"><ShieldCheck size={19}/> Confianza visible</div>
                      <p className="mt-2 text-sm leading-6 muted">La app muestra reputación, operaciones e incidencias demo para ayudar a tomar decisiones con mayor información.</p>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
                    <div className="text-xs font-black uppercase tracking-[.16em] text-emerald-700">Mensaje de producto</div>
                    <div className="mt-1 text-2xl font-black">Comparte, intercambia y encuentra cerca de ti.</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
