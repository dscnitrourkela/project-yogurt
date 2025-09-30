import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface Sponsor {
  name: string;
  logo: string;
  category: string;
  link: string;
}

interface SponsorCardProps {
  sponsor: Sponsor;
  cardType: 'alpha' | 'beta' | 'gamma' | 'delta';
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, cardType }) => {
  const getCardStyles = () => {
    const baseStyles =
      'flex flex-col justify-center items-center bg-[#fff] rounded-2xl shadow-[7px_7px_5px_0px_#0534c7] transition-transform duration-300 ease-in-out hover:scale-105';

    switch (cardType) {
      case 'alpha':
        return `${baseStyles} w-[290px] h-[140px] md:w-[360px] md:h-[160px] mb-16`;
      case 'beta':
        return `${baseStyles} w-[290px] h-[140px] md:w-[300px] md:h-[140px] mb-12`;
      case 'gamma':
        return `${baseStyles} w-[290px] h-[140px] md:w-[300px] md:h-[140px] mb-12`;
      case 'delta':
        return `${baseStyles} w-[260px] h-[130px] mt-1 mb-3`;
      default:
        return baseStyles;
    }
  };

  return (
    <Link
      href={sponsor.link || '#'}
      target="_blank"
      className={getCardStyles()}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          className="p-4 h-[85px] object-contain"
          width={500}
          height={500}
        />
      </div>
    </Link>
  );
};

export default SponsorCard;
