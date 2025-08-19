"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X, Leaf, Users, Target } from 'lucide-react';

const HeaderHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Who We Are', href: '#', hasDropdown: true },
    { name: 'Our Programs', href: '#', hasDropdown: true },
    { name: 'Resource Center', href: '#', hasDropdown: true },
    { name: 'Contact Us', href: '#' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 border-2 border-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-60 w-16 h-16 border-2 border-green-400 rounded-full animate-ping"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 animate-fadeInLeft">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Leaf className={`w-6 h-6 transition-colors ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  EcoCare
                </h1> 
                <p className={`text-sm transition-colors ${
                  isScrolled ? 'text-blue-600' : 'text-blue-200'
                }`}>
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
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                        : 'text-white hover:text-yellow-400 hover:bg-white/10'
                    }`}
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
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative flex items-center min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block animate-fadeInUp">CATALYSING</span>
                  <span className="block text-yellow-400 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                    CHANGE
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-2xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                  We work with governments and stakeholders to drive 
                  change and improve the quality of lives across Africa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                <button className="group flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105">
                  <span>Our Impact</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group flex items-center justify-center space-x-2 px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                  <span>Get Involved</span>
                  <Users className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">500K+</div>
                  <div className="text-sm text-blue-200">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">15+</div>
                  <div className="text-sm text-blue-200">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100+</div>
                  <div className="text-sm text-blue-200">Programs</div>
                </div>
              </div>
            </div>

            {/* Right Content - Card Placeholder */}
            <div className="relative animate-fadeInRight">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 animate-float">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Our Mission</h3>
                      <p className="text-blue-200">Sustainable Development</p>
                    </div>
                  </div>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Empowering communities across Africa through innovative programs that promote environmental sustainability and social development.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-blue-100">Environmental Conservation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-blue-100">Community Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-blue-100">Educational Programs</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-400/20 rounded-full animate-bounce"></div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-20 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-green-400/10 to-transparent rounded-full animate-spin-reverse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeaderHero;