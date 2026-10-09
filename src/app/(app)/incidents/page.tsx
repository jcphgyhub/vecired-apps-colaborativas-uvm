"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { TriangleAlert } from "lucide-react";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { Card, SectionHeading, StatusBadge } from "@/components/ui";
import { useState } from "react";

export default function IncidentsPage(){
 const {data=[]}=useQuery({queryKey:["incidents"],queryFn:demoRepository.getIncidents});
 const [reason,setReason]=useState("Objeto no devuelto"); const [description,setDescription]=useState("");
 const mutation=useMutation({mutationFn:()=>demoRepository.reportIncident(reason,description)});
 return <div className="container-app py-10">
  <SectionHeading eyebrow="Seguridad" title="Reporta un problema y da seguimiento" text="Los reportes ayudan a que las operaciones no dependan únicamente de confianza informal."/>
  <div className="grid gap-6 lg:grid-cols-2">
   <Card className="p-5">
    <div className="flex items-center gap-2 font-black"><TriangleAlert className="text-red-600"/> Nuevo reporte</div>
    <label className="label mt-4">Motivo</label><select className="input" value={reason} onChange={e=>setReason(e.target.value)}><option>Objeto no devuelto</option><option>Objeto dañado</option><option>Usuario no se presentó</option><option>Información incorrecta</option><option>Comportamiento inapropiado</option><option>Problema con servicio</option><option>Otro</option></select>
    <label className="label mt-4">Descripción</label><textarea className="input min-h-28" value={description} onChange={e=>setDescription(e.target.value)} placeholder="Describe brevemente lo ocurrido."/>
    <button className="btn btn-danger mt-4 w-full" onClick={()=>mutation.mutate()} disabled={mutation.isPending||mutation.isSuccess}>{mutation.isSuccess?"Reporte enviado ✓":mutation.isPending?"Enviando...":"Enviar reporte"}</button>
   </Card>
   <Card className="p-5">
    <div className="font-black">Historial de incidencias</div>
    <div className="mt-4 space-y-3">{data.map(i=><div key={i.id} className="rounded-2xl border border-[var(--border)] p-4"><div className="flex items-center justify-between"><b>{i.reason}</b><StatusBadge label={i.status} tone={i.status==="RESOLVED"?"green":"yellow"}/></div><p className="mt-2 text-sm muted">{i.description}</p><div className="mt-2 text-xs muted">{i.date}</div></div>)}</div>
   </Card>
  </div>
 </div>
}
