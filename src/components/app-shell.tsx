"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, CircleHelp, History, Home, Leaf, Menu, Presentation, Repeat2, Search, Wrench, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { getDemoUserById } from "@/mocks/data";
import { useUIStore } from "@/stores/ui-store";
import { UserPersonaBadge } from "@/components/users/user-persona-badge";
import { PresentationStepper, PresentationStep } from "@/components/academic/presentation-stepper";

const nav = [
  { href: "/dashboard", label: "Inicio", icon: Home },
  { href: "/loans", label: "Préstamos", icon: Wrench },
  { href: "/exchanges", label: "Intercambios", icon: Repeat2 },
  { href: "/services", label: "Servicios", icon: Search },
  { href: "/impact", label: "Impacto", icon: Leaf },
  { href: "/history", label: "Historial", icon: History },
  { href: "/help", label: "Ayuda", icon: CircleHelp },
];

const presentationSteps: PresentationStep[] = [
  { label: "Inicio", href: "/dashboard" },
  { label: "Préstamos", href: "/loans" },
  { label: "Intercambios", href: "/exchanges" },
  { label: "Servicios", href: "/services" },
  { label: "Impacto", href: "/impact" },
  { label: "Ayuda", href: "/help" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { mobileOpen, setMobileOpen, currentDemoUserId, presentationMode, setPresentationMode } = useUIStore();
  const currentDemoUser = getDemoUserById(currentDemoUserId);
  const stepIndex = Math.max(0, presentationSteps.findIndex(step => pathname.startsWith(step.href)));

  const sidebar = (
    <aside className="flex h-full flex-col">
      <div className="p-5"><Logo /></div>
      <nav className="flex-1 space-y-1 px-3">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link key={href} href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition ${active ? "bg-emerald-50 text-emerald-800" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"}`}
              onClick={() => setMobileOpen(false)}>
              <Icon size={18}/>{label}
            </Link>
          );
        })}
        <div className="my-2 border-t border-slate-100"/>
        <Link href="/presentacion" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-500 transition hover:bg-slate-50 hover:text-slate-950" onClick={() => setMobileOpen(false)}>
          <Presentation size={18}/> Presentación
        </Link>
      </nav>
      <div className="m-3 rounded-2xl bg-slate-950 p-4 text-white">
        <div className="text-xs font-bold text-emerald-300">IMPACTO</div>
        <div className="mt-1 text-lg font-black">Más uso, menos desperdicio.</div>
        <Link href="/impact" className="mt-3 inline-flex text-sm font-bold text-white/80 hover:text-white">Ver impacto →</Link>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen">
      <div className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-[var(--border)] bg-white/95 lg:block">{sidebar}</div>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Cerrar menú" className="absolute inset-0 bg-slate-950/35" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[82%] max-w-72 bg-white shadow-2xl">
            <button aria-label="Cerrar" className="absolute right-3 top-3 rounded-lg p-2 hover:bg-slate-100" onClick={() => setMobileOpen(false)}><X size={20}/></button>
            {sidebar}
          </div>
        </div>
      )}
      <div className="lg:pl-64">
        {presentationMode && <PresentationStepper steps={presentationSteps} currentIndex={stepIndex} onExit={() => setPresentationMode(false)}/>} 
        <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-white/88 backdrop-blur-xl">
          <div className="container-app flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="rounded-xl p-2 hover:bg-slate-100 lg:hidden" aria-label="Abrir menú" onClick={() => setMobileOpen(true)}><Menu/></button>
              <div className="hidden items-center rounded-xl border border-[var(--border)] bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
                <Search size={16} className="mr-2"/> Buscar en VeciRed
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/notifications" aria-label="Notificaciones" className="relative rounded-xl p-2 hover:bg-slate-100">
                <Bell size={20}/><span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"/>
              </Link>
              <Link href="/profile" className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-100">
                <img src={currentDemoUser.avatar} alt="" className="h-9 w-9 rounded-xl border border-slate-200 bg-emerald-50"/>
                <div className="hidden text-left sm:block">
                  <div className="flex items-center gap-2"><span className="text-sm font-black">{currentDemoUser.name}</span><UserPersonaBadge personaType={currentDemoUser.personaType}/></div>
                  <div className="text-xs muted">{currentDemoUser.zone}</div>
                </div>
              </Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
