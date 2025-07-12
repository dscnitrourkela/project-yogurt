import type { Metadata } from 'next';
import './globals.css';
import { metaDataObject } from '@/config/seo';
import {
  avertaStd,
  grutchShaded,
  museo,
  sketchBlock,
  wcRoughTrad,
  cabinSketch,
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
        {children}
      </body>
    </html>
  );
}
