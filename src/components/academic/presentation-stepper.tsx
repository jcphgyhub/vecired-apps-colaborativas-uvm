"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type PresentationStep = { label: string; href: string };

export function PresentationStepper({ steps, currentIndex, onExit }: { steps: PresentationStep[]; currentIndex: number; onExit: () => void }) {
  const current = steps[currentIndex];
  const previous = steps[currentIndex - 1];
  const next = steps[currentIndex + 1];
  return (
    <div className="border-b border-emerald-200 bg-emerald-50/95 backdrop-blur">
      <div className="container-app flex min-h-12 flex-wrap items-center justify-between gap-2 py-2 text-sm">
        <div className="font-black text-emerald-900">Recorrido para evaluación · Paso {currentIndex + 1} de {steps.length} · {current?.label}</div>
        <div className="flex items-center gap-2">
          {previous ? <Link href={previous.href} className="btn btn-soft !py-2"><ChevronLeft size={16}/> Anterior</Link> : <span/>}
          {next ? <Link href={next.href} className="btn btn-primary !py-2">Siguiente <ChevronRight size={16}/></Link> : <span/>}
          <button type="button" onClick={onExit} className="btn btn-soft !py-2"><X size={16}/> Salir</button>
        </div>
      </div>
    </div>
  );
}
