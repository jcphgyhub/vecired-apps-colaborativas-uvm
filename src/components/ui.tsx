import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}
export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mb-5">
      {eyebrow && <div className="mb-2 text-xs font-black uppercase tracking-[.18em] text-emerald-700">{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {text && <p className="mt-2 max-w-3xl muted">{text}</p>}
    </div>
  );
}
export function StatusBadge({ label, tone = "green" }: { label: string; tone?: "green" | "blue" | "yellow" | "red" }) {
  return <span className={`badge badge-${tone}`}>{label}</span>;
}
export function Metric({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
      <div className="text-3xl font-black tracking-tight">{value}</div>
      <div className="mt-1 text-sm font-semibold text-slate-600">{label}</div>
    </div>
  );
}
