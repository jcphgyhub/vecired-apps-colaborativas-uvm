"use client";
import Link from "next/link";
import { CheckCircle, CircleHelp, Clock3, RotateCcw, ShieldCheck, Star, TriangleAlert } from "lucide-react";
import { Card, SectionHeading, StatusBadge } from "@/components/ui";

const steps = [
  ["Solicitud enviada", true],
  ["Aceptada por Carlos", true],
  ["Objeto entregado", true],
  ["En uso", true],
  ["Devolución pendiente", false],
  ["Calificación", false]
] as const;

export default function DemoOperationPage(){
 return <div className="container-app py-10">
  <SectionHeading eyebrow="Seguimiento" title="Seguimiento de tu operación" text="Siempre sabes qué pasó y cuál es el siguiente paso."/>
  <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
   <Card className="p-6">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div><div className="text-sm font-black text-emerald-700">PRÉSTAMO</div><h2 className="text-2xl font-black">Taladro inalámbrico 20V</h2></div>
      <StatusBadge label="En uso" tone="yellow"/>
    </div>
    <div className="mt-6 space-y-3">{steps.map(([label,done],i)=><div key={label} className="flex items-center gap-3">
      <div className={`grid h-9 w-9 place-items-center rounded-full ${done?"bg-emerald-100 text-emerald-800":"bg-slate-100 text-slate-400"}`}>{done?<CheckCircle size={18}/>:<span className="text-xs font-black">{i+1}</span>}</div>
      <div className="font-bold">{label}</div>
    </div>)}</div>
    <div className="mt-6 rounded-2xl bg-amber-50 p-4 text-amber-900">
      <div className="flex items-center gap-2 font-black"><Clock3 size={18}/> Próximo paso</div>
      <p className="mt-1 text-sm">Devuelve el taladro mañana antes de las 18:00 y confirma la devolución.</p>
    </div>
    <button className="btn btn-primary mt-4 w-full"><RotateCcw size={17}/> Confirmar devolución</button>
   </Card>
   <div className="space-y-4">
    <Card className="p-5">
      <div className="flex items-center gap-2 font-black"><ShieldCheck className="text-emerald-700"/> Confianza visible</div>
      <div className="mt-4 text-3xl font-black">4.9 <Star className="inline fill-amber-400 text-amber-400" size={20}/></div>
      <p className="mt-1 text-sm muted">Carlos Mendoza · 27 operaciones completadas · sin incidencias abiertas.</p>
    </Card>
    <Card className="p-5">
      <div className="flex items-center gap-2 font-black"><TriangleAlert className="text-red-600"/> ¿Algo salió mal?</div>
      <p className="mt-2 text-sm muted">Registra una incidencia ligada a esta operación para conservar trazabilidad.</p>
      <Link href="/incidents" className="btn btn-danger mt-4 w-full">Reportar problema</Link>
    </Card>
    <Card className="p-5">
      <div className="flex items-center gap-2 font-black"><CircleHelp className="text-blue-600"/> Ayuda breve</div>
      <p className="mt-2 text-sm muted">Consulta cómo confirmar una devolución o qué hacer si existe un problema.</p>
      <Link href="/help" className="btn btn-soft mt-4 w-full">Abrir Centro de Ayuda</Link>
    </Card>
   </div>
  </div>
 </div>
}
