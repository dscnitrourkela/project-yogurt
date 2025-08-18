'use client';
import React from 'react';

type PortraitProps = {
  src: string;
  id: string; // unique id suffix for clipPath
  className?: string;
  alt?: string;
  viewBox?: string;
};

export const PortraitSVG: React.FC<PortraitProps> = ({
  src,
  id,
  className = '',
  alt = '',
  viewBox = '0 0 351 535',
}) => {
  const clipId = `portrait-clip-${id}`;

  return (
    <div className={className} aria-hidden={alt ? 'false' : 'true'}>
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

        <image
          href={src}
          x="0"
          y="0"
          width="351"
          height="535"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />

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
