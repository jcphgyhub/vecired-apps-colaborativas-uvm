import Link from "next/link";
import { MapPin, Repeat2, Star } from "lucide-react";
import { ExchangeProduct } from "@/types";
import { Card, StatusBadge } from "@/components/ui";

export function ExchangeCard({ item }: { item: ExchangeProduct }) {
  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <img src={item.image} alt={item.name} className="h-40 w-full bg-slate-50 object-cover"/>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <StatusBadge label="Para intercambiar" tone="blue"/>
          <span className="flex items-center gap-1 text-sm font-bold"><Star size={15} className="fill-amber-400 text-amber-400"/>{item.rating}</span>
        </div>
        <h3 className="text-lg font-black">{item.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm muted">{item.description}</p>
        <div className="mt-3 rounded-xl bg-blue-50 p-2 text-sm font-semibold text-blue-800">
          <Repeat2 className="mr-1 inline" size={15}/> Busca: {item.seeks}
        </div>
        <div className="mt-3 flex items-center text-sm muted"><MapPin size={15} className="mr-1"/>{item.distanceKm} km</div>
        <Link href={`/exchanges/${item.id}`} className="btn btn-secondary mt-4 w-full">Ver intercambio</Link>
      </div>
    </Card>
  );
}
