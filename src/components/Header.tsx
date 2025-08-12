import React from 'react';
import Button from './ui/Button.tsx';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur border-b border-gray-100/50 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">G</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Gentiq AI</span>
        </div>

        <div className="flex items-center space-x-6">
          <Button
            className="join-beta-button-1"
            onClick={() => window.open('https://forms.gle/jHJztmBTZ2LvLQfj6', '_blank')}
          >
            Join Beta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
