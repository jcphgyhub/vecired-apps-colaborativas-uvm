"use client";

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { HistoryEntry } from "@/types";
import { StatusBadge } from "@/components/ui";

const columns: ColumnDef<HistoryEntry>[] = [
  { accessorKey: "type", header: "Tipo" },
  { accessorKey: "title", header: "Operación" },
  { accessorKey: "counterpart", header: "Persona" },
  { accessorKey: "date", header: "Fecha" },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => <StatusBadge label={row.original.status} tone={row.original.status === "Completado" ? "green" : "yellow"} />
  }
];

export function HistoryTable({ data }: { data: HistoryEntry[] }) {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            {table.getHeaderGroups().map(group => (
              <tr key={group.id}>
                {group.headers.map(header => (
                  <th key={header.id} className="p-4">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="border-t border-[var(--border)]">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="p-4">
                    {cell.column.columnDef.cell ? flexRender(cell.column.columnDef.cell, cell.getContext()) : String(cell.getValue() ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
