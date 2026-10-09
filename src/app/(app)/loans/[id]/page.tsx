"use client";
import { useParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CalendarClock, CircleHelp, MapPin, ShieldCheck, Star, TriangleAlert } from "lucide-react";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { Card, StatusBadge } from "@/components/ui";
import { useState } from "react";
import { HelpTooltip } from "@/components/help/help-tooltip";

export default function LoanDetailPage(){
 const params=useParams<{id:string}>();
 const {data:item,isLoading}=useQuery({queryKey:["loan",params.id],queryFn:()=>demoRepository.getLoan(params.id)});
 const mutation=useMutation({mutationFn:()=>demoRepository.requestLoan(params.id)});
 const [reported,setReported]=useState(false);
 if(isLoading) return <div className="container-app py-10">Cargando...</div>;
 if(!item) return <div className="container-app py-10">Objeto no encontrado.</div>;
 return <div className="container-app py-10">
  <div className="mb-5"><div className="badge badge-green mb-2">PRÉSTAMO</div><h1 className="text-4xl font-black">Solicita este objeto</h1><p className="mt-2 muted">Usa lo que necesitas sin tener que comprarlo.</p></div>
  <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
   <Card className="overflow-hidden">
    <img src={item.image} alt={item.name} className="h-[360px] w-full bg-slate-50 object-cover"/>
    <div className="p-6">
     <div className="flex flex-wrap items-center gap-2"><StatusBadge label={item.availability}/><StatusBadge label={item.condition} tone="blue"/></div>
     <h2 className="mt-4 text-3xl font-black">{item.name}</h2>
     <p className="mt-3 leading-7 muted">{item.description}</p>
     <div className="mt-5 grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl bg-slate-50 p-4"><b>Zona</b><div className="mt-1 flex items-center gap-1 muted"><MapPin size={16}/>{item.zone} · {item.distanceKm} km</div></div>
      <div className="rounded-2xl bg-slate-50 p-4"><b>Condición</b><div className="mt-1 muted">{item.priceLabel}</div></div>
     </div>
    </div>
   </Card>
   <div className="space-y-4">
    <Card className="p-5">
      <div className="flex items-center gap-1 text-sm font-black text-emerald-700">PROPIETARIO <HelpTooltip text="La reputación resume evaluaciones e historial demo dentro de VeciRed."/></div>
      <div className="mt-3 flex items-center gap-3">
       <img src={item.owner.avatar} alt="" className="h-14 w-14 rounded-2xl bg-emerald-50"/>
       <div><div className="text-lg font-black">{item.owner.name}</div><div className="flex items-center gap-1 text-sm"><Star size={15} className="fill-amber-400 text-amber-400"/>{item.owner.rating} · {item.owner.completedOperations} operaciones</div></div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-bold text-emerald-900"><ShieldCheck size={18}/> Perfil con historial en VeciRed · Sin incidencias abiertas <HelpTooltip text="Las incidencias son reportes asociados a operaciones del prototipo."/></div>
    </Card>
    <Card className="p-5">
      <div className="flex items-center gap-2 font-black"><CalendarClock size={19}/> Cómo funciona</div>
      <ol className="mt-4 space-y-3 text-sm">
       {["Envía la solicitud","El propietario acepta","Recoge y usa el objeto","Devuelve en la fecha acordada","Ambos califican la experiencia"].map((x,i)=><li key={x} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-950 text-xs font-black text-white">{i+1}</span><span>{x}</span></li>)}
      </ol>
      <button onClick={()=>mutation.mutate()} disabled={mutation.isPending||mutation.isSuccess} className="btn btn-primary mt-5 w-full">
       {mutation.isPending?"Enviando...":mutation.isSuccess?"Solicitud enviada ✓":"Solicitar préstamo"}
      </button>
      {mutation.isSuccess&&<div className="mt-3 rounded-xl bg-emerald-50 p-3 text-sm font-bold text-emerald-800">Solicitud registrada. El siguiente paso es esperar la aceptación. <a href="/operations/demo" className="underline">Ver seguimiento demo</a></div>}
    </Card>
    <Card className="p-5">
      <div className="flex items-center justify-between gap-3"><div><div className="font-black">Ayuda y seguridad</div><div className="text-sm muted">¿Dudas o algo salió mal?</div></div><CircleHelp className="text-blue-600"/></div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2"><a href="/help" className="btn btn-soft">¿Cómo funciona?</a><button onClick={()=>setReported(true)} className="btn btn-danger"><TriangleAlert size={17}/> Reportar problema</button></div>
      {reported&&<div className="mt-3 rounded-xl bg-red-50 p-3 text-sm text-red-800">Demo: el reporte quedaría registrado con estado <b>ABIERTO</b>.</div>}
    </Card>
   </div>
  </div>
 </div>
}