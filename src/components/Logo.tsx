import React from 'react';

interface LogoProps {
  variant?: 'default' | 'white' | 'compact';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const getTextColor = () => {
    switch (variant) {
      case 'white':
        return 'text-white';
      case 'compact':
        return 'text-teal-600';
      default:
        return 'text-teal-600';
    }
  };

  const getDadsClubColor = () => {
    switch (variant) {
      case 'white':
        return 'text-teal-100';
      case 'compact':
        return 'text-teal-600';
      default:
        return 'text-teal-600';
    }
  };

  return (
    <div className={`text-center ${className}`}>
      {/* DeGOLYER - Large, bold, uppercase */}
      <div className={`font-black text-2xl md:text-4xl lg:text-5xl ${getTextColor()} mb-1 tracking-tight`}>
        DeGOLYER
      </div>
      
      {/* ELEMENTARY - Medium weight, smaller, wider spacing */}
      <div className={`font-medium text-sm md:text-base lg:text-lg ${getTextColor()} mb-2 tracking-[0.2em]`}>
        ELEMENTARY
      </div>
      
      {/* DADS CLUB - Bubbly, playful, prominent */}
      <div className={`font-black text-3xl md:text-5xl lg:text-6xl ${getDadsClubColor()} leading-none tracking-wide`}>
        DADS CLUB
      </div>
    </div>
  );
};

export default Logo; 