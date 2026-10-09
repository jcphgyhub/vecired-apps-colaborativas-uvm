"use client";
import { useParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { MapPin, Repeat2, ShieldCheck, Star } from "lucide-react";
import { demoRepository } from "@/lib/repositories/demo-repository";
import { Card, StatusBadge } from "@/components/ui";

export default function ExchangeDetailPage(){
 const params=useParams<{id:string}>();
 const {data:item,isLoading}=useQuery({queryKey:["exchange",params.id],queryFn:()=>demoRepository.getExchange(params.id)});
 const mutation=useMutation({mutationFn:()=>demoRepository.proposeExchange(params.id)});
 if(isLoading) return <div className="container-app py-10">Cargando...</div>;
 if(!item) return <div className="container-app py-10">Producto no encontrado.</div>;
 return <div className="container-app py-10">
  <div className="badge badge-blue mb-2">INTERCAMBIO</div>
  <h1 className="text-4xl font-black">Propón un intercambio</h1>
  <p className="mt-2 muted">Dale nueva utilidad a lo que ya no usas.</p>
  <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
   <Card className="overflow-hidden">
    <img src={item.image} alt={item.name} className="h-[360px] w-full bg-slate-50 object-cover"/>
    <div className="p-6">
     <StatusBadge label={item.condition} tone="blue"/>
     <h2 className="mt-4 text-3xl font-black">{item.name}</h2>
     <p className="mt-3 muted">{item.description}</p>
     <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-blue-900"><Repeat2 className="mr-2 inline" size={18}/><b>Busca a cambio:</b> {item.seeks}</div>
     <div className="mt-4 flex items-center gap-1 text-sm muted"><MapPin size={16}/>{item.zone} · {item.distanceKm} km</div>
    </div>
   </Card>
   <div className="space-y-4">
    <Card className="p-5">
      <div className="text-sm font-black text-blue-700">PUBLICADO POR</div>
      <div className="mt-3 flex items-center gap-3"><img src={item.owner.avatar} alt="" className="h-14 w-14 rounded-2xl bg-blue-50"/><div><div className="text-lg font-black">{item.owner.name}</div><div className="flex items-center gap-1 text-sm"><Star size={15} className="fill-amber-400 text-amber-400"/>{item.owner.rating} · {item.owner.completedOperations} operaciones</div></div></div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm font-bold text-emerald-900"><ShieldCheck size={18}/> Perfil con historial en VeciRed</div>
    </Card>
    <Card className="p-5">
      <div className="font-black">Tu propuesta</div>
      <label className="label mt-4">Producto que ofreces</label>
      <select className="input"><option>Lámpara de escritorio</option><option>Juego de llaves</option><option>Libro</option></select>
      <label className="label mt-4">Mensaje breve</label>
      <textarea className="input min-h-24" defaultValue="Puedo entregar esta semana en la zona."/>
      <button onClick={()=>mutation.mutate()} className="btn btn-secondary mt-4 w-full" disabled={mutation.isPending||mutation.isSuccess}>
       {mutation.isSuccess?"Propuesta enviada ✓":mutation.isPending?"Enviando...":"Enviar propuesta de intercambio"}
      </button>
    </Card>
   </div>
  </div>
 </div>
}
