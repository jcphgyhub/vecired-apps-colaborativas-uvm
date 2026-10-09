"use client";
import { useQuery } from "@tanstack/react-query";
import { Bell } from "lucide-react";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { Card, SectionHeading } from "@/components/ui";

export default function NotificationsPage(){
 const {data=[]}=useQuery({queryKey:["notifications"],queryFn:demoRepository.getNotifications});
 return <div className="container-app py-10">
  <SectionHeading eyebrow="Notificaciones" title="Lo que necesita tu atención" text="Estados, devoluciones, propuestas y actividad comunitaria."/>
  <div className="space-y-3">{data.map(n=><Card key={n.id} className={`flex gap-3 p-4 ${!n.read?"ring-2 ring-emerald-100":""}`}><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Bell size={18}/></div><div><div className="font-black">{n.title}</div><div className="mt-1 text-sm muted">{n.body}</div></div></Card>)}</div>
 </div>
}
