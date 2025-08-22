"use client";

import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Who We Are', href: '#', hasDropdown: true },
    { name: 'Our Programs', href: '#', hasDropdown: true },
    { name: 'Resource Center', href: '#', hasDropdown: true },
    { name: 'Contact Us', href: '#' }
  ];

  return (
    <header className="w-full bg-white shadow-lg relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fadeInLeft">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/logo/logo.jpg" // Replace with your actual logo path
                  alt="EcoCare Foundation Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">
                EcoCare
              </h1> 
              <p className="text-sm text-blue-600">
                FOUNDATION
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 text-blue-700 hover:text-blue-900 hover:bg-blue-50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Our Story
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Our Team
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        Our Mission
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors text-blue-700 hover:bg-blue-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-blue-50 rounded-b-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 text-blue-700 hover:text-blue-900 hover:bg-blue-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;