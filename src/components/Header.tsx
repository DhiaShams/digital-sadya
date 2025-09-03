import React from 'react';
import { Flower2, Crown, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 animate-pulse">
          <Flower2 className="w-8 h-8 text-orange-600" />
        </div>
        <div className="absolute top-8 right-8 animate-pulse delay-300">
          <Crown className="w-6 h-6 text-amber-600" />
        </div>
        <div className="absolute bottom-4 left-1/4 animate-pulse delay-700">
          <Sparkles className="w-5 h-5 text-red-600" />
        </div>
        <div className="absolute bottom-8 right-1/3 animate-pulse delay-500">
          <Flower2 className="w-7 h-7 text-orange-500" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main title */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
            ഓണാശംസകൾ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Onam Ashamsakal
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Digital Onam Sadya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the grandeur of Kerala's traditional feast through an interactive journey. 
            Explore each dish to discover its ingredients, preparation, and cultural significance.
          </p>
        </div>

        {/* Interactive instruction */}
        <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-orange-200 shadow-sm">
          <p className="text-sm md:text-base text-gray-700">
            <span className="hidden md:inline">Hover over</span>
            <span className="md:hidden">Tap on</span>
            {' '}any dish to learn more about it
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;