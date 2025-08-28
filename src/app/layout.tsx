import './globals.css';

import type { Metadata } from 'next';

import HOC from '@/components/hoc/hoc';
import { metaDataObject } from '@/config/seo';
import {
  avertaStd,
  cabinSketch,
  grutchShaded,
  museo,
  sketchBlock,
  wcRoughTrad,
} from '@/fonts';

export const metadata = metaDataObject as Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${avertaStd.variable} ${grutchShaded.variable} ${museo.variable} ${sketchBlock.variable} ${wcRoughTrad.variable} ${cabinSketch.variable}  antialiased`}
      >
        <HOC>{children}</HOC>
      </body>
    </html>
  );
}
