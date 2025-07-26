'use client';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { getAdminSession } from '@/lib/admin-auth';

import Loader from '../ui/loader';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const session = getAdminSession();

    if (session) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push('/admin/login');
    }
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center">
        <div className="text-center">
          <Loader />
        </div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
}
