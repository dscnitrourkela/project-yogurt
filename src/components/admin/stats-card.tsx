import React from 'react';

import Typography from '@/components/Typography';

interface StatsCardProps {
  title: string;
  value: number;
  titleColor?: string;
}

export default function StatsCard({
  title,
  value,
  titleColor,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] p-6">
      <Typography.H6
        className={`mb-2 ${titleColor || 'text-[var(--color-primary)]'}`}
      >
        {title}
      </Typography.H6>
      <Typography.H6 className="text-2xl sm:text-3xl font-bold text-[var(--color-heading)] mb-0">
        {value}
      </Typography.H6>
    </div>
  );
}
