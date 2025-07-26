'use client';
import React, { useEffect, useState } from 'react';

import {
  collection,
  doc,
  DocumentData,
  getCountFromServer,
  limit,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
  updateDoc,
  where,
} from 'firebase/firestore';

import AuthGuard from '@/components/admin/auth-guard';
import DataTable from '@/components/admin/data-table';
import EmailCell from '@/components/admin/email-cell';
import Pagination from '@/components/admin/pagination';
import StatsCard from '@/components/admin/stats-card';
import StatusCell from '@/components/admin/status-cell';
import Typography from '@/components/Typography';
import Loader from '@/components/ui/loader';
import { useAdminAuth } from '@/hooks/use-admin-auth';
import { clearAdminSession } from '@/lib/admin-auth';
import { db } from '@/lib/firebase';
import { ColumnDef } from '@tanstack/react-table';

type User = {
  id: string;
  displayName: string;
  email: string;
  emailSent: boolean;
};

const PAGE_SIZE = 10;

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);

  const [pageHistory, setPageHistory] = useState<
    (QueryDocumentSnapshot<DocumentData> | null)[]
  >([null]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [emailsSent, setEmailsSent] = useState(0);
  const [pendingEmails, setPendingEmails] = useState(0);

  const { isAuthenticated, adminName } = useAdminAuth();

  useEffect(() => {
    if (!isAuthenticated) return;

    setLoading(true);
    let q = query(
      collection(db, 'users'),
      //   orderBy('emailSent'),
      orderBy('displayName')
    );

    if (searchTerm) {
      q = query(
        collection(db, 'users'),
        // orderBy('emailSent'),
        orderBy('displayName'),
        where('displayName', '>=', searchTerm),
        where('displayName', '<=', searchTerm + '\uf8ff')
      );
    }

    if (page > 0 && pageHistory[page]) {
      q = query(q, startAfter(pageHistory[page]), limit(PAGE_SIZE));
    } else {
      q = query(q, limit(PAGE_SIZE));
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data: User[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<User, 'id'>),
        }));
        setUsers(data);

        if (snapshot.docs.length > 0) {
          const newLastVisible = snapshot.docs[snapshot.docs.length - 1];

          if (page + 1 === pageHistory.length) {
            setPageHistory([...pageHistory, newLastVisible]);
          }
        }
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [page, searchTerm, isAuthenticated]);

  useEffect(() => {
    setPage(0);
    setPageHistory([null]);
  }, [searchTerm]);

  const fetchStats = async () => {
    try {
      const usersCollection = collection(db, 'users');

      const totalSnapshot = await getCountFromServer(usersCollection);
      const totalUsersCount = totalSnapshot.data().count;
      setTotalUsers(totalUsersCount);

      const sentQuery = query(usersCollection, where('emailSent', '==', true));
      const sentSnapshot = await getCountFromServer(sentQuery);
      const sentCount = sentSnapshot.data().count;
      setEmailsSent(sentCount);

      setPendingEmails(totalUsersCount - sentCount);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    fetchStats();
  }, [isAuthenticated]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const markEmailSent = async (userId: string) => {
    await updateDoc(doc(db, 'users', userId), { emailSent: true });
    fetchStats();
  };

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 1500);
    } catch {
      setCopiedEmail(null);
    }
  };

  const handleLogout = () => {
    clearAdminSession();
    window.location.href = '/admin/login';
  };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'displayName',
      header: () => (
        <Typography.H6 className="text-left mb-0">Name</Typography.H6>
      ),
      cell: (info) => (
        <Typography.P className="mb-0 font-medium">
          {info.getValue() as string}
        </Typography.P>
      ),
    },
    {
      accessorKey: 'email',
      header: () => (
        <Typography.H6 className="text-left mb-0">Email</Typography.H6>
      ),
      cell: (info) => {
        const email = info.getValue() as string;
        return (
          <EmailCell
            email={email}
            onCopy={copyEmail}
            isCopied={copiedEmail === email}
          />
        );
      },
    },
    {
      accessorKey: 'emailSent',
      header: () => (
        <Typography.H6 className="text-left mb-0">Status</Typography.H6>
      ),
      cell: (info) => {
        const user = info.row.original;
        return (
          <StatusCell
            emailSent={user.emailSent}
            onMarkAsSent={() => markEmailSent(user.id)}
          />
        );
      },
    },
  ];

  const totalPages = Math.ceil(totalUsers / PAGE_SIZE);

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[var(--color-background)] p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Typography.H2 className="text-[var(--color-heading)] mb-0">
              Admin Dashboard
            </Typography.H2>
            <div className="flex items-center gap-4">
              <Typography.P className="text-[var(--color-text)] mb-0">
                Welcome, {adminName}
              </Typography.P>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <StatsCard title="Total Users" value={totalUsers} />
            <StatsCard
              title="Emails Sent"
              value={emailsSent}
              titleColor="text-green-600"
            />
            <StatsCard
              title="Pending"
              value={pendingEmails}
              titleColor="text-orange-600"
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-[var(--color-border)] overflow-hidden">
            <div className="p-6 border-b border-[var(--color-border)] flex justify-between items-center">
              <Typography.H5 className="mb-0">User Management</Typography.H5>
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              />
            </div>

            {loading ? (
              <div className="py-10 w-full flex justify-center">
                <Loader />
              </div>
            ) : (
              <>
                <DataTable data={users} columns={columns} />

                {totalUsers > PAGE_SIZE && (
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    totalItems={totalUsers}
                    pageSize={PAGE_SIZE}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
