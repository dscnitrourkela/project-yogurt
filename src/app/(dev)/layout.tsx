import Link from 'next/link';

import { Typography } from '@/components';

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {/* <nav>
        <ul className="flex space-x-4 p-4 bg-gray-800 text-white">
          <li>
            <Link href="/" className="hover:underline">
              <Typography.P className="text-white">Production</Typography.P>
            </Link>
          </li>
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
      </nav> */}
      <main>{children}</main>
    </div>
  );
}
