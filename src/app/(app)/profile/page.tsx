"use client";
import { useQuery } from "@tanstack/react-query";
import { BadgeCheck, History, ShieldCheck, Star } from "lucide-react";
import { getDemoUserById } from "@/mocks/data";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { Card, Metric, SectionHeading, StatusBadge } from "@/components/ui";
import { useUIStore } from "@/stores/ui-store";
import { DemoUserSwitcher } from "@/components/users/demo-user-switcher";
import { UserPersonaBadge } from "@/components/users/user-persona-badge";
import { DemoDataBadge } from "@/components/users/demo-data-badge";
import { HelpTooltip } from "@/components/help/help-tooltip";

export default function ProfilePage(){
 const {data:history=[]}=useQuery({queryKey:["history"],queryFn:demoRepository.getHistory});
 const currentDemoUserId=useUIStore(state=>state.currentDemoUserId);
 const demoUser=getDemoUserById(currentDemoUserId);
 return <div className="container-app py-10">
  <div className="flex flex-wrap items-start justify-between gap-3"><SectionHeading eyebrow="Perfil" title="Tu actividad y confianza en VeciRed" text="Consulta reputación, operaciones e historial dentro de la comunidad."/><DemoDataBadge/></div>
  <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
   <Card className="p-6">
    <img src={demoUser.avatar} alt="" className="h-24 w-24 rounded-3xl bg-emerald-50"/>
    <div className="mt-4 flex flex-wrap items-center gap-2"><h2 className="text-2xl font-black">{demoUser.name}</h2><UserPersonaBadge personaType={demoUser.personaType}/></div><p className="muted">{demoUser.zone}</p>
    <div className="mt-5 flex items-end gap-2"><div className="text-5xl font-black">{demoUser.rating}</div><div className="pb-1 text-sm muted"><Star className="inline fill-amber-400 text-amber-400" size={16}/> {demoUser.reviews} evaluaciones</div></div>
    <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-900"><ShieldCheck className="mr-2 inline" size={18}/> Perfil demo con historial en VeciRed</div>
    <div className="mt-4 grid grid-cols-2 gap-3"><Metric value={demoUser.completedOperations} label="operaciones"/><Metric value={demoUser.openIncidents} label="incidencias abiertas"/></div>
    <div className="mt-6 border-t border-slate-100 pt-5"><DemoUserSwitcher/></div>
   </Card>
   <Card className="p-6">
    <div className="flex items-center gap-2 text-lg font-black"><History/> Historial reciente</div>
    <div className="mt-4 space-y-3">
     {history.slice(0,5).map(h=><div key={h.id} className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] p-4"><div><div className="font-black">{h.title}</div><div className="text-sm muted">{h.type} · {h.counterpart} · {h.date}</div></div><StatusBadge label={h.status} tone={h.status==="Completado"?"green":"yellow"}/></div>)}
    </div>
   </Card>
  </div>
  <Card className="mt-6 p-6">
   <div className="flex items-center gap-2 font-black"><BadgeCheck className="text-blue-600"/> Cómo se construye tu reputación <HelpTooltip text="Resume evaluaciones e historial demo dentro de VeciRed. No representa una certificación oficial de identidad."/></div>
   <div className="mt-4 grid gap-3 md:grid-cols-3">
    <div className="rounded-2xl bg-slate-50 p-4"><b>Operaciones completadas</b><p className="mt-1 text-sm muted">Cada préstamo, intercambio o servicio finalizado suma historial.</p></div>
    <div className="rounded-2xl bg-slate-50 p-4"><b>Calificaciones</b><p className="mt-1 text-sm muted">Las evaluaciones ayudan a tomar decisiones con mayor información.</p></div>
    <div className="rounded-2xl bg-slate-50 p-4"><b>Incidencias</b><p className="mt-1 text-sm muted">Los reportes quedan asociados a la operación hasta su resolución.</p></div>
   </div>
  </Card>
 </div>
}
