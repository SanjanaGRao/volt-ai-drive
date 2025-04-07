
import React from 'react';
import VoltLogo from './VoltLogo';
import { Bell, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <VoltLogo />
        
        <div className="flex items-center gap-6">
          <button className="p-2 text-gray-600 hover:text-volt-blue transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-volt-blue transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-px h-6 bg-gray-200"></div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-volt-blue transition-colors">
            <User size={20} />
            <span className="hidden sm:inline text-sm font-medium">Driver</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
