'use client';

import Link from 'next/link';

import Typography from '@/components/Typography';
import Button from '@/components/ui/button';

export default function NotFound() {
  

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <Typography.H1 className="text-[10rem] md:text-[12rem] lg:text-[16rem] font-grutch-shaded text-[var(--color-primary)] leading-none mb-0">
            404
          </Typography.H1>
        </div>
        {' '}
        <Typography.H2 className="text-[var(--color-heading)] mb-4 font-averta-std">
          Page Not Found
        </Typography.H2>
        <Typography.Lead className="text-[var(--color-subheading)] mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have wandered off into
          the digital void. Don&apos;t worry, even the best hackers get lost
          sometimes.
        </Typography.Lead>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button className="min-w-[150px] text-white font-medium">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
