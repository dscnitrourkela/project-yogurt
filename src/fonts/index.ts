import { Cabin_Sketch } from 'next/font/google';
import localFont from 'next/font/local';

export const avertaStd = localFont({
  src: [
    {
      path: './averta-std/AvertaStd-Extrathin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './averta-std/AvertaStd-ExtrathinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './averta-std/AvertaStd-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './averta-std/AvertaStd-ThinItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './averta-std/AvertaStd-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './averta-std/AvertaStd-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './averta-std/AvertaStd-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './averta-std/AvertaStd-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './averta-std/AvertaStd-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './averta-std/AvertaStd-SemiboldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './averta-std/AvertaStd-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './averta-std/AvertaStd-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './averta-std/AvertaStd-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './averta-std/AvertaStd-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './averta-std/AvertaStd-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './averta-std/AvertaStd-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-averta-std',
  display: 'swap',
});

export const grutchShaded = localFont({
  src: './grutch-shaded/GrutchShaded.ttf',
  variable: '--font-grutch-shaded',
  display: 'swap',
});

export const museo = localFont({
  src: [
    {
      path: './museo/Museo100-Regular.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './museo/Museo300-Regular.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './museo/Museo500-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './museo/Museo700-Regular.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './museo/Museo900-Regular.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-museo',
  display: 'swap',
});

export const sketchBlock = localFont({
  src: './sketch-block/Sketch_Block.ttf',
  variable: '--font-sketch-block',
  display: 'swap',
});

export const wcRoughTrad = localFont({
  src: [
    {
      path: './wc-rough-trad/WC_RoughTrad.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-wc-rough-trad',
  display: 'swap',
});

export const cabinSketch = Cabin_Sketch({
  subsets: ['latin'],
  variable: '--font-cabin-sketch',
  display: 'swap',
  weight: ['400', '700'],
});

export const fonts = {
  avertaStd,
  grutchShaded,
  museo,
  sketchBlock,
  wcRoughTrad,
  cabinSketch,
};
