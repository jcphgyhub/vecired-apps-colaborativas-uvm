import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { LoanItem } from "@/types";
import { Card, StatusBadge } from "@/components/ui";

export function LoanCard({ item }: { item: LoanItem }) {
  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <img src={item.image} alt={item.name} className="h-40 w-full bg-slate-50 object-cover"/>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <StatusBadge label={item.availability} />
          <span className="flex items-center gap-1 text-sm font-bold"><Star size={15} className="fill-amber-400 text-amber-400"/>{item.rating}</span>
        </div>
        <h3 className="text-lg font-black">{item.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm muted">{item.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="flex items-center gap-1 muted"><MapPin size={15}/>{item.distanceKm} km</span>
          <span className="font-bold text-emerald-800">{item.priceLabel}</span>
        </div>
        <Link href={`/loans/${item.id}`} className="btn btn-primary mt-4 w-full">Ver detalle</Link>
      </div>
    </Card>
  );
}
