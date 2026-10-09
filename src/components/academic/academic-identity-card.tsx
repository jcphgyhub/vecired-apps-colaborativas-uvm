export function AcademicIdentityCard() {
  return (
    <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2">
      <div>
        <div className="text-xs font-black uppercase tracking-[.16em] text-slate-500">Alumno</div>
        <div className="mt-1 font-black">Juan Carlos Perez Hernández</div>
      </div>
      <div>
        <div className="text-xs font-black uppercase tracking-[.16em] text-slate-500">Docente</div>
        <div className="mt-1 font-black">Alba Pulido Pineda</div>
      </div>
    </div>
  );
}
