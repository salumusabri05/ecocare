"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Leaf } from 'lucide-react';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'SUSTAINING LIFE AND NATURE';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero.jpg"
          alt="SmartCare Africa Foundation community outreach"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Rich Green Gradient Overlay matching JMKF theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/95 via-[var(--primary)]/80 to-[var(--primary-light)]/40"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-[var(--accent)]/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
        <div className="max-w-3xl">

          {/* Main Heading */}
          <div className="space-y-4 mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none text-white tracking-tight animate-fadeInUp">
              EMPOWERING
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none text-[var(--accent)] tracking-tight animate-fadeInUp" style={{ animationDelay: '150ms' }}>
              COMMUNITIES
            </h1>
            
            {/* Animated Subtitle */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              <span className="text-[var(--accent)] min-h-[1.4em] block">
                {animatedText}
                <span className="animate-pulse-soft">|</span>
              </span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10 animate-fadeInUp" style={{ animationDelay: '500ms' }}>
            A registered NGO in Tanzania connecting human health and environmental 
            sustainability to improve community well-being in Biharamulo District, 
            Kagera Region, and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap gap-4 items-center animate-fadeInUp" style={{ animationDelay: '700ms' }}>
            <a 
              href="/who-we-are" 
              className="group flex items-center justify-center space-x-2 px-8 py-3.5 bg-white text-[var(--primary-dark)] rounded-lg font-bold hover:bg-[var(--accent)] hover:text-[var(--primary-dark)] transition-all duration-300 shadow-lg"
            >
              <span>Our Impact</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/contact" 
              className="group flex items-center justify-center space-x-2 px-8 py-3.5 bg-[var(--primary-light)] text-white rounded-lg font-bold hover:bg-[var(--primary)] transition-all duration-300 shadow-lg"
            >
              <Heart className="w-4 h-4" />
              <span>Donate</span>
            </a>
            
            <a 
              href="/programs" 
              className="group flex items-center justify-center space-x-2 px-8 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--primary-dark)] rounded-lg font-bold transition-all duration-300 shadow-lg"
            >
              <span>Volunteer</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;