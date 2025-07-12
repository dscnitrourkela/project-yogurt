'use client';

import React, { useState } from 'react';
import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';

const FontShowcase = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, itemId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(itemId);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const fontExamples = [
    {
      name: 'Averta Std',
      className: 'font-averta-std',
      weights: [100, 200, 300, 400, 600, 700, 800, 900],
      description:
        'A modern, clean geometric typeface with multiple weights and styles',
    },
    {
      name: 'Grutch Shaded',
      className: 'font-grutch-shaded',
      weights: [400],
      description: 'A decorative display font with a unique shaded effect',
    },
    {
      name: 'Museo',
      className: 'font-museo',
      weights: [100, 300, 500, 700, 900],
      description:
        'A sophisticated serif typeface perfect for headlines and body text',
    },
    {
      name: 'Sketch Block',
      className: 'font-sketch-block',
      weights: [400],
      description: 'A hand-drawn, sketchy display font for creative projects',
    },
    {
      name: 'WC Rough Trad',
      className: 'font-wc-rough-trad',
      weights: [400],
      description: 'A rough, traditional-style typeface with character',
    },
    {
      name: 'Cabin Sketch',
      className: 'font-cabin-sketch',
      weights: [400, 700],
      description: 'A Google Font with a hand-drawn, sketchy appearance',
    },
  ];

  const sampleText = 'The quick brown fox jumps over the lazy dog';
  const displayText = 'Typography Showcase';

  return (
    <div className="min-h-screen bg-[var(--color-background)] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography.H1 className="mb-4">Font Collection</Typography.H1>
          <Typography.Lead>
            Explore our curated collection of beautiful typefaces
          </Typography.Lead>
        </div>

        {/* Quick Reference */}
        <div className="bg-[var(--color-gray-50)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] mb-16">
          <Typography.H4 className="mb-6">
            Quick Reference - CSS Class Names
          </Typography.H4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fontExamples.map((font, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-[var(--color-border)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <Typography.Small className="font-medium text-[var(--color-heading)]">
                    {font.name}
                  </Typography.Small>
                  <button
                    onClick={() => handleCopy(font.className, `quick-${index}`)}
                    className="px-2 py-1 bg-[var(--color-primary)] text-white rounded text-xs hover:bg-[var(--color-primary-dark)] transition-colors"
                    title="Copy class name"
                  >
                    {copiedItem === `quick-${index}` ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <Typography.Code>{font.className}</Typography.Code>
                <div className="mt-3">
                  <Typography.P
                    className={cn(`text-lg ${font.className}`)}
                    style={{
                      fontWeight: font.weights.includes(400)
                        ? 400
                        : font.weights[0],
                    }}
                  >
                    Sample Text
                  </Typography.P>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Grid */}
        <div className="space-y-16">
          {fontExamples.map((font, index) => (
            <div
              key={index}
              className="bg-[var(--color-gray-50)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]"
            >
              {/* Font Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <Typography.H2>{font.name}</Typography.H2>
                  <div className="flex gap-2 flex-wrap">
                    {font.weights.map((weight) => (
                      <Typography.Badge key={weight}>{weight}</Typography.Badge>
                    ))}
                  </div>
                </div>
                <Typography.P>{font.description}</Typography.P>
              </div>

              {/* Font Display */}
              <div className="space-y-6">
                {/* Large Display Text */}
                <div className="border-b border-[var(--color-border)] pb-6">
                  <Typography.H3
                    className={cn(`text-4xl md:text-5xl ${font.className}`)}
                    style={{
                      fontWeight: font.weights.includes(700)
                        ? 700
                        : font.weights[font.weights.length - 1],
                    }}
                  >
                    {displayText}
                  </Typography.H3>
                </div>

                {/* Weight Variations */}
                <div className="space-y-4">
                  <Typography.H4>Weight Variations</Typography.H4>
                  <div className="grid gap-4">
                    {font.weights.map((weight) => (
                      <div key={weight} className="flex items-center gap-6">
                        <Typography.Small className="w-12">
                          {weight}
                        </Typography.Small>
                        <Typography.P
                          className={cn(`text-2xl ${font.className}`)}
                          style={{ fontWeight: weight }}
                        >
                          {sampleText}
                        </Typography.P>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CSS Class Name */}
                <div className="bg-[var(--color-primary-soft)] rounded-lg p-4 mb-6">
                  <Typography.H4 className="text-[var(--color-primary)] mb-2">
                    CSS Class Name
                  </Typography.H4>
                  <div className="flex items-center justify-between bg-white rounded-md p-3 border">
                    <Typography.Code className="font-medium">
                      {font.className}
                    </Typography.Code>
                    <button
                      onClick={() =>
                        handleCopy(font.className, `class-${index}`)
                      }
                      className="px-3 py-1 bg-[var(--color-primary)] text-white rounded-md text-xs hover:bg-[var(--color-primary-dark)] transition-colors"
                      title="Copy class name"
                    >
                      {copiedItem === `class-${index}` ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>

                {/* Character Set Preview */}
                <div className="bg-[var(--color-gray-100)] rounded-lg p-6">
                  <Typography.H4 className="mb-3">Character Set</Typography.H4>
                  <div className="space-y-2">
                    <Typography.P
                      className={cn(`text-lg ${font.className}`)}
                      style={{
                        fontWeight: font.weights.includes(400)
                          ? 400
                          : font.weights[0],
                      }}
                    >
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </Typography.P>
                    <Typography.P
                      className={cn(`text-lg ${font.className}`)}
                      style={{
                        fontWeight: font.weights.includes(400)
                          ? 400
                          : font.weights[0],
                      }}
                    >
                      abcdefghijklmnopqrstuvwxyz
                    </Typography.P>
                    <Typography.P
                      className={cn(`text-lg ${font.className}`)}
                      style={{
                        fontWeight: font.weights.includes(400)
                          ? 400
                          : font.weights[0],
                      }}
                    >
                      0123456789 !@#$%^&*()_+-=[]&#123;&#125;|;:,.&lt;&gt;?
                    </Typography.P>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-[var(--color-border)]">
          <Typography.P>
            All fonts are properly configured and ready to use in your project.
          </Typography.P>
        </div>
      </div>
    </div>
  );
};

export default FontShowcase;
