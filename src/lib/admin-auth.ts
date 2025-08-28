export interface AdminSession {
  adminId: string;
  username: string;
  name: string;
  expiresAt: number;
}

export const getAdminSession = (): AdminSession | null => {
  if (typeof window === 'undefined') return null;

  const adminSession = localStorage.getItem('adminSession');
  if (!adminSession) return null;

  try {
    const sessionData = JSON.parse(adminSession) as AdminSession;

    if (sessionData.expiresAt && new Date().getTime() < sessionData.expiresAt) {
      return sessionData;
    } else {
      localStorage.removeItem('adminSession');
      return null;
    }
  } catch (error) {
    console.error('Error parsing admin session from localStorage:', error);

    localStorage.removeItem('adminSession');
    return null;
  }
};

export const setAdminSession = (
  sessionData: Omit<AdminSession, 'expiresAt'>
) => {
  const session: AdminSession = {
    ...sessionData,
    expiresAt: new Date().getTime() + 10 * 24 * 60 * 60 * 1000,
  };

  localStorage.setItem('adminSession', JSON.stringify(session));
};

export const clearAdminSession = () => {
  localStorage.removeItem('adminSession');
};

export const isAdminAuthenticated = (): boolean => {
  return getAdminSession() !== null;
};
