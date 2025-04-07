
import React from 'react';

interface VoltLogoProps {
  className?: string;
}

const VoltLogo: React.FC<VoltLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-volt rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold">V</div>
      </div>
      <div className="font-bold text-xl">
        <span className="volt-gradient-text">Volt</span>
        <span className="text-volt-navy">AI</span>
      </div>
    </div>
  );
};

export default VoltLogo;
