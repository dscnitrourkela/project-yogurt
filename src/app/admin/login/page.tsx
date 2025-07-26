'use client';
import React, { useEffect, useState } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

import Typography from '@/components/Typography';
import Loader from '@/components/ui/loader';
import { getAdminSession, setAdminSession } from '@/lib/admin-auth';
import { db } from '@/lib/firebase';

interface Admin {
  id: string;
  username: string;
  password: string;
  name: string;
}

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const session = getAdminSession();
    if (session) {
      router.push('/admin');
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const adminsRef = collection(db, 'admins');
      const q = query(
        adminsRef,
        where('username', '==', username),
        where('password', '==', password)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('Invalid username or password');
        setLoading(false);
        return;
      }

      const adminDoc = querySnapshot.docs[0];
      const adminData = adminDoc.data() as Admin;

      setAdminSession({
        adminId: adminDoc.id,
        username: adminData.username,
        name: adminData.name,
      });

      router.push('/admin');
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg border border-[var(--color-border)] p-8">
          <div className="text-center mb-8">
            <Typography.H5 className="text-[var(--color-heading)] mb-2">
              Login
            </Typography.H5>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <Typography.P className="text-red-600 text-sm mb-0">
                  {error}
                </Typography.P>
              </div>
            )}

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                placeholder="Enter your username"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[var(--color-text)] mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                placeholder="Enter your password"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--color-primary)] text-white py-2 px-4 rounded-md hover:bg-[var(--color-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader />
                  <Typography.P className="text-white text-sm mb-0">
                    Signing in...
                  </Typography.P>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
