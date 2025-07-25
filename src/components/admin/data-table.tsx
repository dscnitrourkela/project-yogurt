import React from 'react';

import Typography from '@/components/Typography';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export default function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-[var(--color-gray-50)] border-b border-[var(--color-border)]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-4 text-left font-medium text-[var(--color-heading)]"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-[var(--color-border)]">
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={`hover:bg-[var(--color-gray-50)] transition-colors duration-150 ${
                index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-gray-50)]'
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {table.getRowModel().rows.length === 0 && (
        <div className="text-center py-12">
          <Typography.P className="text-[var(--color-subheading)]">
            No users found
          </Typography.P>
        </div>
      )}
    </div>
  );
}
