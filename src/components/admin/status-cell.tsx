import React from 'react';

import Typography from '@/components/Typography';

interface StatusCellProps {
  emailSent: boolean;
  onMarkAsSent: () => void;
}

export default function StatusCell({
  emailSent,
  onMarkAsSent,
}: StatusCellProps) {
  return emailSent ? (
    <Typography.Badge className="bg-green-100 text-green-800">
      Sent
    </Typography.Badge>
  ) : (
    <button
      onClick={onMarkAsSent}
      className="px-3 py-2 text-xs font-medium bg-[var(--color-primary-soft)] text-[var(--color-primary)] rounded-md hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-200 whitespace-nowrap"
    >
      Mark as Sent
    </button>
  );
}
