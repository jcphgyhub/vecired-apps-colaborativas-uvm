import { Recycle } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--primary)] text-white shadow-lg shadow-emerald-900/10">
        <Recycle size={22} strokeWidth={2.4}/>
      </span>
      {!compact && (
        <div>
          <div className="text-lg font-black tracking-tight">VeciRed</div>
          <div className="text-[11px] font-semibold text-slate-500">Economía colaborativa local</div>
        </div>
      )}
    </div>
  );
}
