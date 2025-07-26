import { useEffect, useState } from 'react';

import { getAdminSession } from '../lib/admin-auth';

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    const session = getAdminSession();

    if (session) {
      setIsAuthenticated(true);
      setAdminName(session.name || 'Admin');
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return {
    isAuthenticated,
    adminName,
    isLoading: isAuthenticated === null,
  };
};
