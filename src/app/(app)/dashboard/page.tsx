"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Handshake, Leaf, MapPin, Repeat2, Search, Wrench } from "lucide-react";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { LoanCard } from "@/components/item-card";
import { ExchangeCard } from "@/components/exchange-card";
import { ServiceCard } from "@/components/service-card";
import { Metric, SectionHeading } from "@/components/ui";
import { ContextHelp } from "@/components/help/context-help";
import { DemoDataBadge } from "@/components/users/demo-data-badge";
import { useUIStore } from "@/stores/ui-store";

export default function DashboardPage(){
  const loans=useQuery({queryKey:["loans"],queryFn:demoRepository.getLoans});
  const exchanges=useQuery({queryKey:["exchanges"],queryFn:demoRepository.getExchanges});
  const services=useQuery({queryKey:["services"],queryFn:demoRepository.getServices});
  const impact=useQuery({queryKey:["impact"],queryFn:demoRepository.getImpact});
  const presentationMode=useUIStore(state=>state.presentationMode);

  return <div className="container-app py-8 sm:py-10">
    {presentationMode && <div className="mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-black uppercase tracking-[.14em] text-red-700">Actividad 4 · Apps colaborativas</div>}
    <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
      <div>
        <div className="badge badge-green mb-3"><MapPin size={14}/> San Miguel Tecamachalco</div>
        <h1 className="text-4xl font-black tracking-tight">¿Qué necesitas hoy?</h1>
        <p className="mt-2 max-w-2xl muted">Busca un objeto, intercambia algo que ya no usas o encuentra ayuda local.</p>
      </div>
      <div className="flex w-full max-w-xl items-center rounded-2xl border border-[var(--border)] bg-white p-2 shadow-sm">
        <Search className="ml-2 text-slate-400" size={20}/>
        <input aria-label="Buscar" className="w-full bg-transparent px-3 py-2 outline-none" placeholder="Busca taladro, plomero, cafetera..."/>
        <Link href="/loans?q=taladro" className="btn btn-primary">Buscar</Link>
      </div>
    </div>

    <ContextHelp title="¿Qué puedo hacer aquí?" text="Puedes buscar un objeto, iniciar un intercambio o localizar un servicio dentro de la comunidad."/>

    <div className="grid gap-4 md:grid-cols-3">
      <Link href="/loans" className="card group p-5 transition hover:-translate-y-1">
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-800"><Wrench/></div>
        <h2 className="text-xl font-black">Encuentra algo que puedas usar sin comprar</h2>
        <p className="mt-2 text-sm muted">Objetos y herramientas disponibles cerca de ti.</p>
      </Link>
      <Link href="/exchanges" className="card group p-5 transition hover:-translate-y-1">
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-blue-100 text-blue-800"><Repeat2/></div>
        <h2 className="text-xl font-black">Dale nueva utilidad a lo que ya no usas</h2>
        <p className="mt-2 text-sm muted">Propón intercambios y conserva el valor de los productos.</p>
      </Link>
      <Link href="/services" className="card group p-5 transition hover:-translate-y-1">
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-amber-100 text-amber-800"><Handshake/></div>
        <h2 className="text-xl font-black">Encuentra ayuda confiable cerca de ti</h2>
        <p className="mt-2 text-sm muted">Prestadores locales con historial y evaluaciones.</p>
      </Link>
    </div>

    <section className="mt-10">
      <SectionHeading eyebrow="Préstamos" title="Objetos disponibles cerca de ti" text="Si lo necesitas poco tiempo, primero busca si alguien cerca ya lo tiene."/>
      <div className="grid-auto">{loans.data?.slice(0,3).map(x=><LoanCard key={x.id} item={x}/>)}</div>
      <div className="mt-4"><Link href="/loans" className="font-black text-emerald-700">Ver todos los objetos →</Link></div>
    </section>

    <section className="mt-12">
      <SectionHeading eyebrow="Intercambios" title="Dale una segunda oportunidad a lo que ya tienes"/>
      <div className="grid-auto">{exchanges.data?.slice(0,3).map(x=><ExchangeCard key={x.id} item={x}/>)}</div>
    </section>

    <section className="mt-12">
      <SectionHeading eyebrow="Servicios locales" title="Ayuda confiable en tu comunidad"/>
      <div className="grid-auto">{services.data?.slice(0,3).map(x=><ServiceCard key={x.id} item={x}/>)}</div>
    </section>

    <section className="mt-12 rounded-[2rem] bg-slate-950 p-6 text-white sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2 text-sm font-black text-lime-300"><Leaf size={18}/> IMPACTO CIRCULAR</div><DemoDataBadge/></div>
      <div className="mt-2 text-3xl font-black">Lo que la comunidad está aprovechando</div>
      <p className="mt-2 max-w-2xl text-white/65">Más uso, menos desperdicio. Cada operación ayuda a conservar valor por más tiempo.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Metric value={impact.data?.reusedObjects ?? "—"} label="objetos reutilizados"/>
        <Metric value={impact.data?.loansCompleted ?? "—"} label="préstamos"/>
        <Metric value={impact.data?.exchangesCompleted ?? "—"} label="intercambios"/>
        <Metric value={impact.data?.purchasesAvoided ?? "—"} label="compras evitadas"/>
        <Metric value={impact.data?.sharedResources ?? "—"} label="recursos compartidos"/>
        <Metric value={impact.data?.localServices ?? "—"} label="servicios locales"/>
      </div>
    </section>
  </div>
}
