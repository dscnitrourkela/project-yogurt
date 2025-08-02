import Link from 'next/link';
import { Typography } from '@/components';
import Navbar from '@/components/marginals/navbar';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        {/* Dev-specific navbar */}

        <Navbar />

        <nav className="bg-gray-800 text-white p-4 mt-40">
          <ul className="flex space-x-4">
            <li>
              <Link href="/playground" className="hover:underline">
                <Typography.P className="text-white">Playground</Typography.P>
              </Link>
            </li>
            <li>
              <Link href="/fonts" className="hover:underline">
                <Typography.P className="text-white">Fonts</Typography.P>
              </Link>
            </li>
            <li>
              <Link href="/typography" className="hover:underline">
                <Typography.P className="text-white">Typography</Typography.P>
              </Link>
            </li>
            <li>
              <Link href="/upload" className="hover:underline">
                <Typography.P className="text-white">Upload Asset</Typography.P>
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:underline">
                <Typography.P className="text-white">Admin</Typography.P>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Children below */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
