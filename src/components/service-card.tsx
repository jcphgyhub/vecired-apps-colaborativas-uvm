import Link from "next/link";
import { MapPin, Star, ShieldCheck } from "lucide-react";
import { ServiceProvider } from "@/types";
import { Card, StatusBadge } from "@/components/ui";

export function ServiceCard({ item }: { item: ServiceProvider }) {
  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <img src={item.image} alt={item.service} className="h-40 w-full bg-slate-50 object-cover"/>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <StatusBadge label={item.availability} tone="yellow"/>
          <span className="flex items-center gap-1 text-sm font-bold"><Star size={15} className="fill-amber-400 text-amber-400"/>{item.rating}</span>
        </div>
        <h3 className="text-lg font-black">{item.service}</h3>
        <p className="text-sm font-semibold text-slate-700">{item.name}</p>
        <p className="mt-1 line-clamp-2 text-sm muted">{item.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 muted"><MapPin size={15}/>{item.distanceKm} km</span>
          <span className="flex items-center gap-1 font-bold text-emerald-800"><ShieldCheck size={15}/>{item.completedJobs} trabajos</span>
        </div>
        <Link href={`/services/${item.id}`} className="btn btn-soft mt-4 w-full">Ver prestador</Link>
      </div>
    </Card>
  );
}
