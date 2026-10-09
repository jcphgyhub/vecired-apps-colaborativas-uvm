"use client";
import { useQuery } from "@tanstack/react-query";
import { Leaf, Recycle, ShoppingBag, Handshake, Repeat2, Wrench } from "lucide-react";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { Card, Metric, SectionHeading } from "@/components/ui";
import { DemoDataBadge } from "@/components/users/demo-data-badge";
import { ContextHelp } from "@/components/help/context-help";

export default function ImpactPage(){
 const {data}=useQuery({queryKey:["impact"],queryFn:demoRepository.getImpact});
 const flow=[["Necesidad",ShoppingBag],["Busca en la comunidad",Handshake],["Usa / intercambia",Repeat2],["Reutiliza",Recycle],["Conserva valor",Leaf]];
 return <div className="container-app py-10">
  <div className="flex flex-wrap items-start justify-between gap-3"><SectionHeading eyebrow="Economía circular" title="Lo que la comunidad está aprovechando" text="Más uso, menos desperdicio. Cada objeto compartido conserva valor por más tiempo."/><DemoDataBadge/></div>
  <ContextHelp title="¿Qué significan estas métricas?" text="Son datos demo para mostrar cómo VeciRed podría visualizar reutilización, préstamos, intercambios, compras evitadas y servicios locales."/>
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
   <Metric value={data?.reusedObjects??"—"} label="objetos reutilizados"/>
   <Metric value={data?.loansCompleted??"—"} label="préstamos completados"/>
   <Metric value={data?.exchangesCompleted??"—"} label="intercambios completados"/>
   <Metric value={data?.purchasesAvoided??"—"} label="compras evitadas"/>
   <Metric value={data?.sharedResources??"—"} label="recursos compartidos"/>
   <Metric value={data?.localServices??"—"} label="servicios locales"/>
  </div>
  <Card className="mt-6 p-6 sm:p-8">
   <div className="text-sm font-black text-emerald-700">MODELO CIRCULAR DE VECIRED</div>
   <h2 className="mt-2 text-2xl font-black">Utilizar en lugar de poseer</h2>
   <div className="mt-6 grid gap-3 lg:grid-cols-5">{flow.map(([label,Icon]:any,i)=><div key={label} className="relative rounded-2xl bg-slate-50 p-4"><div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-800"><Icon size={20}/></div><div className="mt-3 font-black">{label}</div>{i<flow.length-1&&<div className="absolute -right-2 top-1/2 hidden text-slate-300 lg:block">→</div>}</div>)}</div>
  </Card>
 </div>
}