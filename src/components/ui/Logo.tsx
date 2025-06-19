import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  scrolled?: boolean;
  footer?: boolean;
}

const Logo: React.FC<LogoProps> = ({  footer = false }) => {
  const textColor = footer ? 'text-white':' text-primary-700';

  return (
    <div className={`flex items-center ${textColor}`}>
      <Zap 
        className={`w-8 h-8 ${footer ? 'text-primary-500' : 'text-primary-500'}`} 
        strokeWidth={2.5}
      />
      <span className="ml-2 text-xl font-bold">HD Media Network</span>
    </div>
  );
};

export default Logo;