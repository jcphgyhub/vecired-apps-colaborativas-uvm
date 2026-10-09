"use client";
import { CircleHelp } from "lucide-react";
import { HelpArticle } from "@/types";
import { Card } from "@/components/ui";

export function HelpArticleCard({ article, onOpen }: { article: HelpArticle; onOpen: (article: HelpArticle) => void }) {
  return (
    <Card className="flex h-full flex-col p-5">
      <div className="text-xs font-black uppercase tracking-[.14em] text-emerald-700">{article.category}</div>
      <h3 className="mt-2 text-lg font-black">{article.title}</h3>
      <p className="mt-2 flex-1 text-sm muted">{article.summary}</p>
      <button type="button" onClick={() => onOpen(article)} className="btn btn-soft mt-4 w-full"><CircleHelp size={16}/> Abrir ayuda breve</button>
    </Card>
  );
}
