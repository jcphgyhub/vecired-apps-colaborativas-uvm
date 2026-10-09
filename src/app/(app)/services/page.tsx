"use client";
import { useQuery } from "@tanstack/react-query";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/ui";
import { ContextHelp } from "@/components/help/context-help";

export default function ServicesPage(){
 const {data=[]}=useQuery({queryKey:["services"],queryFn:demoRepository.getServices});
 return <div className="container-app py-10">
  <SectionHeading eyebrow="Servicios locales" title="Encuentra ayuda confiable cerca de ti" text="Consulta perfiles, historial y evaluaciones antes de solicitar un servicio."/>
  <ContextHelp title="¿Cómo elijo un prestador?" text="Revisa servicio, zona, disponibilidad, trabajos completados y evaluaciones."/>
  <div className="grid-auto">{data.map(x=><ServiceCard key={x.id} item={x}/>)}</div>
 </div>
}