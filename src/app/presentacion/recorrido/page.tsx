"use client";

import { useRouter } from "next/navigation";
import { PlayCircle } from "lucide-react";
import { useUIStore } from "@/stores/ui-store";

export default function PresentationTourPage(){
  const router=useRouter();
  const setPresentationMode=useUIStore(state=>state.setPresentationMode);
  const start=()=>{ setPresentationMode(true); router.push("/dashboard"); };
  return <main className="min-h-screen bg-slate-950 text-white">
    <div className="container-app flex min-h-screen items-center justify-center py-12">
      <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-300"><PlayCircle size={34}/></div>
        <div className="mt-6 text-sm font-black uppercase tracking-[.18em] text-emerald-300">Modo presentación</div>
        <h1 className="mt-3 text-4xl font-black">Recorrido para evaluación</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/65">Activa una guía discreta para recorrer Dashboard, Préstamos, Intercambios, Servicios, Impacto y Ayuda sin convertir VeciRed en una presentación estática.</p>
        <div className="mt-7 grid gap-2 text-left sm:grid-cols-2">
          {["1. Dashboard","2. Préstamos","3. Intercambios","4. Servicios","5. Impacto","6. Ayuda"].map(step=><div key={step} className="rounded-xl bg-white/5 px-4 py-3 font-bold">{step}</div>)}
        </div>
        <button onClick={start} className="btn btn-primary mt-8">Iniciar recorrido</button>
      </div>
    </div>
  </main>;
}
