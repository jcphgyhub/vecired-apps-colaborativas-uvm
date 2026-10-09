"use client";
import { useQuery } from "@tanstack/react-query";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { SectionHeading } from "@/components/ui";
import { HistoryTable } from "@/features/history/components/history-table";
import { ContextHelp } from "@/components/help/context-help";

export default function HistoryPage(){
 const {data=[]}=useQuery({queryKey:["history"],queryFn:demoRepository.getHistory});
 return <div className="container-app py-10">
  <SectionHeading eyebrow="Historial" title="Tu actividad y confianza en VeciRed" text="Todas tus operaciones demo en un solo lugar."/>
  <ContextHelp title="¿Qué aparece aquí?" text="Tus operaciones demo de préstamo, intercambio y servicio en un solo lugar."/>
  <HistoryTable data={data}/>
 </div>
}