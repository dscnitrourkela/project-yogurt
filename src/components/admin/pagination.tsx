import React from 'react';

import Typography from '@/components/Typography';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const startItem = currentPage * pageSize + 1;
  const endItem = Math.min((currentPage + 1) * pageSize, totalItems);

  return (
    <div className="px-6 py-4 border-t border-[var(--color-border)] bg-[var(--color-gray-50)]">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Typography.Small className="text-[var(--color-subheading)]">
          Showing {startItem} to {endItem} of {totalItems} users
        </Typography.Small>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="px-4 py-2 text-sm font-medium text-[var(--color-subheading)] bg-white border border-[var(--color-border)] rounded-md hover:bg-[var(--color-gray-50)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => onPageChange(i)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  currentPage === i
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-[var(--color-subheading)] hover:bg-[var(--color-gray-50)]'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              onPageChange(Math.min(totalPages - 1, currentPage + 1))
            }
            disabled={currentPage >= totalPages - 1}
            className="px-4 py-2 text-sm font-medium text-[var(--color-subheading)] bg-white border border-[var(--color-border)] rounded-md hover:bg-[var(--color-gray-50)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
