"use client";
import { useQuery } from "@tanstack/react-query";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { ExchangeCard } from "@/components/exchange-card";
import { SectionHeading } from "@/components/ui";
import { ContextHelp } from "@/components/help/context-help";

export default function ExchangesPage(){
 const {data=[]}=useQuery({queryKey:["exchanges"],queryFn:demoRepository.getExchanges});
 return <div className="container-app py-10">
  <SectionHeading eyebrow="Intercambios" title="Dale nueva utilidad a lo que ya no usas" text="Intercambia productos existentes y conserva su valor por más tiempo."/>
  <ContextHelp title="¿Cómo propongo un intercambio?" text="Selecciona un producto propio, agrega un mensaje y envía la propuesta."/>
  <div className="grid-auto">{data.map(x=><ExchangeCard key={x.id} item={x}/>)}</div>
 </div>
}