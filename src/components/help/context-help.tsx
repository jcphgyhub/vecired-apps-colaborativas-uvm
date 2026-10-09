"use client";

import Link from "next/link";
import { CircleHelp } from "lucide-react";
import { useState } from "react";

export function ContextHelp({ title, text, href = "/help" }: { title: string; text: string; href?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-5">
      <button type="button" onClick={() => setOpen(value => !value)} className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50" aria-expanded={open}>
        <CircleHelp size={16}/> {title}
      </button>
      {open && (
        <div className="mt-2 max-w-2xl rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-950">
          <p>{text}</p>
          <Link href={href} className="mt-2 inline-flex font-black text-emerald-800">Ver Centro de Ayuda →</Link>
        </div>
      )}
    </div>
  );
}
