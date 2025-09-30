'use client';
import React from 'react';
import Image from 'next/image';

type PortraitProps = {
  src: string;
  id: string;
  className?: string;
  alt?: string;
  viewBox?: string;
};

export const PortraitSVG: React.FC<PortraitProps> = ({
  src,
  id,
  className = '',
  alt = 'Gallery image',
  viewBox = '0 0 351 535',
}) => {
  const clipId = `portrait-clip-${id}`;

  return (
    <div
      className={`relative ${className}`}
      aria-hidden={alt ? 'false' : 'true'}
    >
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id={clipId}>
            <path d="M11.9519 68.3457L2 77.4682V531.631L27.709 516.788H136.35L179.06 492.13H335.388V465.591L349.486 451.493V2H335.388L316.728 11.6469H212.233L170.767 35.5874H11.9519V68.3457Z" />
          </clipPath>
        </defs>

        {/* Clipped image */}
        <foreignObject width="100%" height="100%" clipPath={`url(#${clipId})`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            style={{ width: '100%', height: '100%' }}
          />
        </foreignObject>

        {/* Frame border */}
        <path
          d="M11.9519 68.3457L2 77.4682V531.631L27.709 516.788H136.35L179.06 492.13H335.388V465.591L349.486 451.493V2H335.388L316.728 11.6469H212.233L170.767 35.5874H11.9519V68.3457Z"
          fill="none"
          stroke="#FFF"
          strokeWidth={3}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PortraitSVG;
