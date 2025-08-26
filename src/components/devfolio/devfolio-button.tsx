'use client';

import { useEffect } from 'react';

interface DevfolioButtonProps {
  hackathonSlug?: string;
  theme?: 'light' | 'dark' | 'dark-inverted';
  className?: string;
}

export default function DevfolioButton({
  hackathonSlug = 'YOUR-HACKATHON-SLUG',
  theme = 'light',
  className = '',
}: DevfolioButtonProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector(
        'script[src="https://apply.devfolio.co/v2/sdk.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className={`flex justify-center ${className}`}>
      <div
        className="apply-button"
        data-hackathon-slug={hackathonSlug}
        data-button-theme={theme}
        style={{ height: '44px', width: '312px' }}
      />
    </div>
  );
}
