"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Who We Are', 
      href: '/who-we-are', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/who-we-are' },
        { name: 'Our Vision & Mission', href: '/who-we-are#vision-mission' },
        { name: 'Core Values', href: '/who-we-are#core-values' },
        { name: 'Our Team', href: '/who-we-are#team' }
      ]
    },
    { 
      name: 'Our Programs', 
      href: '/programs', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Healthcare Initiatives', href: '/programs#healthcare' },
        { name: 'Environmental Projects', href: '/programs#environmental' },
        { name: 'Community Campaigns', href: '/programs#community' }
      ]
    },
    { 
      name: 'Resource Center', 
      href: '/resource-center', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Publications', href: '/resource-center#publications' },
        { name: 'News & Updates', href: '/resource-center#news' }
      ]
    },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105 ring-2 ring-[var(--primary)]/20">
              <Image
                src="/logo/logo.jpg"
                alt="SmartCare Africa Foundation Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                SmartCare Africa
              </h1> 
              <p className="text-[10px] sm:text-xs text-[var(--primary)] font-bold tracking-[0.15em] uppercase">
                Foundation
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface)]"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transform group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-[var(--border-light)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.dropdownItems.map((dropItem) => (
                        <a 
                          key={dropItem.name}
                          href={dropItem.href} 
                          className="block px-5 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--primary)] transition-colors"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a 
              href="/contact" 
              className="ml-4 px-5 py-2.5 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get Involved
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-[var(--text-primary)] hover:bg-[var(--surface)]"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1 border-t border-[var(--border-light)]">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--surface)] transition-colors font-bold rounded-lg"
                  onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.hasDropdown && (
                  <div className="pl-6">
                    {item.dropdownItems.map((dropItem) => (
                      <a
                        key={dropItem.name}
                        href={dropItem.href}
                        className="block px-4 py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--surface)] transition-colors rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-3">
              <a href="/contact" className="block w-full text-center px-5 py-2.5 bg-[var(--primary)] text-white font-bold text-sm rounded-lg">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;