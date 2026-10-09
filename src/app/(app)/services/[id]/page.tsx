"use client";
import { useParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { MapPin, ShieldCheck, Star, Wrench } from "lucide-react";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { Card, StatusBadge } from "@/components/ui";
import { HelpTooltip } from "@/components/help/help-tooltip";

export default function ServiceDetailPage(){
 const params=useParams<{id:string}>();
 const {data:item,isLoading}=useQuery({queryKey:["service",params.id],queryFn:()=>demoRepository.getService(params.id)});
 const mutation=useMutation({mutationFn:()=>demoRepository.requestService(params.id)});
 if(isLoading) return <div className="container-app py-10">Cargando...</div>;
 if(!item) return <div className="container-app py-10">Prestador no encontrado.</div>;
 return <div className="container-app py-10">
  <div className="badge badge-yellow mb-2">SERVICIO LOCAL</div>
  <h1 className="text-4xl font-black">Solicita este servicio</h1>
  <p className="mt-2 muted">Encuentra ayuda confiable cerca de ti.</p>
  <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
   <Card className="overflow-hidden">
    <img src={item.image} alt={item.service} className="h-[330px] w-full bg-slate-50 object-cover"/>
    <div className="p-6">
     <div className="flex flex-wrap gap-2"><StatusBadge label={item.availability} tone="yellow"/><StatusBadge label={`${item.completedJobs} trabajos`} tone="green"/></div>
     <h2 className="mt-4 text-3xl font-black">{item.service}</h2>
     <p className="mt-1 text-lg font-bold">{item.name}</p>
     <p className="mt-3 muted">{item.description}</p>
     <div className="mt-4 flex items-center gap-1 text-sm muted"><MapPin size={16}/>{item.zone} · {item.distanceKm} km</div>
    </div>
   </Card>
   <div className="space-y-4">
    <Card className="p-5">
      <div className="flex items-center gap-2 font-black"><ShieldCheck className="text-emerald-700"/> Perfil y reputación <HelpTooltip text="Revisa evaluaciones, trabajos completados e incidencias demo antes de solicitar."/></div>
      <div className="mt-4 text-4xl font-black">{item.rating}</div>
      <div className="flex items-center gap-1 text-sm"><Star size={16} className="fill-amber-400 text-amber-400"/> {item.reviews} evaluaciones</div>
      <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-bold text-emerald-900">Sin incidencias abiertas · {item.completedJobs} servicios completados</div>
    </Card>
    <Card className="p-5">
      <div className="flex items-center gap-2 font-black"><Wrench size={18}/> Describe lo que necesitas</div>
      <textarea className="input mt-4 min-h-28" defaultValue="Necesito revisar un contacto y una luminaria."/>
      <label className="label mt-4">Fecha preferida</label>
      <input className="input" type="date" defaultValue="2026-10-03"/>
      <button onClick={()=>mutation.mutate()} className="btn btn-primary mt-4 w-full" disabled={mutation.isPending||mutation.isSuccess}>
       {mutation.isSuccess?"Solicitud enviada ✓":mutation.isPending?"Enviando...":"Solicitar servicio"}
      </button>
    </Card>
   </div>
  </div>
 </div>
}