import React from 'react';

import Typography from '@/components/Typography';

interface EmailCellProps {
  email: string;
  onCopy: (email: string) => void;
  isCopied: boolean;
}

export default function EmailCell({ email, onCopy, isCopied }: EmailCellProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
      <Typography.P className="mb-0 text-sm sm:text-base break-all">
        {email}
      </Typography.P>
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 text-xs font-medium bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors duration-200 whitespace-nowrap"
          onClick={() => onCopy(email)}
        >
          Copy
        </button>
        {isCopied && (
          <Typography.Small className="text-green-600 font-medium whitespace-nowrap">
            Copied!
          </Typography.Small>
        )}
      </div>
    </div>
  );
}
