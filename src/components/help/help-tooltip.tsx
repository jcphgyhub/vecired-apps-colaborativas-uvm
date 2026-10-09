"use client";

import { CircleHelp } from "lucide-react";
import { ReactNode, useId, useState } from "react";

export function HelpTooltip({ text, label = "Más información", children }: { text: string; label?: string; children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <span className="relative inline-flex items-center gap-1.5">
      {children}
      <button
        type="button"
        aria-label={label}
        aria-describedby={open ? id : undefined}
        className="rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        onClick={() => setOpen(value => !value)}
        onBlur={() => setOpen(false)}
      >
        <CircleHelp size={15}/>
      </button>
      {open && (
        <span id={id} role="tooltip" className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-[var(--border)] bg-white p-3 text-left text-xs font-medium leading-5 text-slate-700 shadow-xl">
          {text}
        </span>
      )}
    </span>
  );
}
