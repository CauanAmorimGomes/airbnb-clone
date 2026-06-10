import React from 'react';
import { Search, Menu, User, Globe } from 'lucide-react';

interface HeaderProps {
  onSearchClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
              <span className="hidden sm:block text-xl font-bold text-rose-500">airbnb</span>
            </a>
          </div>

          {/* Search Bar */}
          <button
            onClick={onSearchClick}
            className="hidden md:flex items-center space-x-4 border border-gray-300 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <span className="text-sm font-semibold">Anywhere</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-semibold">Any week</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-600">Add guests</span>
            <div className="bg-rose-500 text-white p-2 rounded-full">
              <Search className="w-4 h-4" />
            </div>
          </button>

          {/* Mobile Search */}
          <button
            onClick={onSearchClick}
            className="md:hidden flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span className="text-sm font-semibold">Search</span>
          </button>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:block text-sm font-semibold hover:bg-gray-100 px-4 py-2 rounded-full transition">
              Airbnb your home
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Globe className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition">
              <Menu className="w-4 h-4" />
              <div className="bg-gray-600 text-white rounded-full p-1">
                <User className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
