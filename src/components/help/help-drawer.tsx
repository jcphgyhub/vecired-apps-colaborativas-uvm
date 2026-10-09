"use client";

import Link from "next/link";
import { X, Lightbulb } from "lucide-react";
import { useEffect } from "react";
import { HelpArticle } from "@/types";

export function HelpDrawer({ article, onClose }: { article: HelpArticle | null; onClose: () => void }) {
  useEffect(() => {
    if (!article) return;
    const handler = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [article, onClose]);

  if (!article) return null;
  return (
    <div className="fixed inset-0 z-[80] flex justify-end" role="dialog" aria-modal="true" aria-label={article.title}>
      <button aria-label="Cerrar ayuda" className="absolute inset-0 bg-slate-950/35" onClick={onClose}/>
      <section className="relative h-full w-full max-w-lg overflow-y-auto bg-white p-6 shadow-2xl sm:p-8">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-xl p-2 hover:bg-slate-100" aria-label="Cerrar"><X/></button>
        <div className="text-xs font-black uppercase tracking-[.18em] text-emerald-700">{article.category}</div>
        <h2 className="mt-2 pr-10 text-2xl font-black">{article.title}</h2>
        <p className="mt-3 muted">{article.summary}</p>
        <ol className="mt-6 space-y-3">
          {article.steps.map((item, index) => (
            <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-700 text-sm font-black text-white">{index + 1}</span>
              <span className="text-sm font-semibold text-slate-700">{item}</span>
            </li>
          ))}
        </ol>
        {article.tip && <div className="mt-5 flex gap-2 rounded-2xl bg-amber-50 p-4 text-sm text-amber-950"><Lightbulb size={18} className="shrink-0"/><span><b>Consejo:</b> {article.tip}</span></div>}
        {article.relatedRoute && <Link href={article.relatedRoute} onClick={onClose} className="btn btn-primary mt-6 w-full">Ir a esta función</Link>}
      </section>
    </div>
  );
}
