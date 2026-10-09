"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { helpArticles } from "@/content/help";
import { HelpArticle } from "@/types";
import { HelpArticleCard } from "@/components/help/help-article-card";
import { HelpDrawer } from "@/components/help/help-drawer";

export default function HelpPage(){
 const [q,setQ]=useState("");
 const [selected,setSelected]=useState<HelpArticle|null>(null);
 const filtered=useMemo(()=>{
  const query=q.trim().toLowerCase();
  if(!query) return helpArticles;
  return helpArticles.filter(article=>[article.category,article.title,article.summary,...article.steps].join(" ").toLowerCase().includes(query));
 },[q]);
 return <div className="container-app py-10">
  <SectionHeading eyebrow="Centro de ayuda" title="Resuelve dudas sin salir de VeciRed" text="Encuentra respuestas rápidas sobre préstamos, intercambios, servicios, seguridad y uso del prototipo."/>
  <div className="card flex items-center gap-2 p-3"><Search size={18} className="text-slate-400"/><input className="w-full bg-transparent p-2 outline-none" placeholder="Buscar ayuda..." value={q} onChange={e=>setQ(e.target.value)}/></div>
  {filtered.length===0 ? <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center"><div className="font-black">0 resultados</div><p className="mt-1 text-sm muted">Prueba con préstamos, reputación, devolución, servicios o presentación.</p></div> : <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{filtered.map(article=><HelpArticleCard key={article.id} article={article} onOpen={setSelected}/>)}</div>}
  <HelpDrawer article={selected} onClose={()=>setSelected(null)}/>
 </div>
}
