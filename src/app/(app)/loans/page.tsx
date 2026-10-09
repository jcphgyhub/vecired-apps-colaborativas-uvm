"use client";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, SlidersHorizontal } from "lucide-react";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { LoanCard } from "@/components/item-card";
import { SectionHeading } from "@/components/ui";
import { ContextHelp } from "@/components/help/context-help";

export default function LoansPage(){
 const {data=[]}=useQuery({queryKey:["loans"],queryFn:demoRepository.getLoans});
 const [q,setQ]=useState("taladro");
 const filtered=useMemo(()=>data.filter(x=>(x.name+" "+x.category).toLowerCase().includes(q.toLowerCase())),[data,q]);
 return <div className="container-app py-10">
  <SectionHeading eyebrow="Préstamos" title="Encuentra algo que puedas usar sin comprar" text="Busca objetos y herramientas disponibles dentro de tu comunidad."/>
  <ContextHelp title="¿Cómo funciona un préstamo?" text="Busca → revisa → solicita → usa → devuelve → califica."/>
  <div className="card mb-6 flex flex-col gap-3 p-3 sm:flex-row">
   <div className="flex flex-1 items-center rounded-xl bg-slate-50 px-3"><Search size={18} className="text-slate-400"/><input className="w-full bg-transparent px-3 py-3 outline-none" value={q} onChange={e=>setQ(e.target.value)} aria-label="Buscar objetos"/></div>
   <button className="btn btn-soft"><SlidersHorizontal size={17}/> Filtros</button>
  </div>
  <div className="mb-4 text-sm font-bold muted">{filtered.length} resultado(s)</div>
  <div className="grid-auto">{filtered.map(x=><LoanCard key={x.id} item={x}/>)}</div>
 </div>
}