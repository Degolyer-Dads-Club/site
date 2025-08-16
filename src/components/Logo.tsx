import React from 'react';
import Image from 'next/image';
import dadsClubLogo from '../app/assets/dadsclublogo.png';

interface LogoProps {
  variant?: 'default' | 'white' | 'compact';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const getLogoSize = () => {
    switch (variant) {
      case 'compact':
        return { width: 120, height: 60 };
      default:
        return { width: 200, height: 100 };
    }
  };

  const { width, height } = getLogoSize();

  return (
    <div className={`text-center ${className}`}>
      <Image
        src={dadsClubLogo}
        alt="DeGolyer Elementary Dads Club Logo"
        width={width}
        height={height}
        className="mx-auto"
        priority
      />
    </div>
  );
};

export default Logo; 