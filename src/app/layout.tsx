import './globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';

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
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', '${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}');
        `}
        </Script>
      </head>
      <body
        className={` ${avertaStd.variable} ${grutchShaded.variable} ${museo.variable} ${sketchBlock.variable} ${wcRoughTrad.variable} ${cabinSketch.variable}  antialiased`}
      >
        <HOC>{children}</HOC>
      </body>
    </html>
  );
}
