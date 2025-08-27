"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[345px] overflow-hidden">
      {/* Hero Background Image - Improved responsiveness */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile optimized image */}
          <source media="(max-width: 640px)" srcSet="/hero-mobile.jpg" />
          {/* Tablet optimized image */}
          <source media="(max-width: 1024px)" srcSet="/hero-tablet.jpg" />
          {/* Desktop image */}
          <img 
            src="/hero.jpg" // Default/fallback image
            alt="Community member with child"
            className="w-full h-full object-cover object-center md:object-center"
            loading="eager"
            fetchpriority="high"
            sizes="100vw"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div> {/* Improved gradient overlay for better text readability */}
      </div>

      {/* Hero Content - Adjusted for fixed height */}
      <div className="relative flex items-center h-[345px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl py-4">
            {/* Main Heading - Reduced size for 345px height */}
            <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                <span className="block animate-fadeInUp">EMPOWERING </span>
                <span className="block text-yellow-400 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                  COMMUNITIES
                </span>
              </h1>
              
              {/* Animated subtitle - Reduced size */}
              <div className="text-base sm:text-xl md:text-2xl font-bold leading-tight">
                <span className="block text-yellow-400 min-h-[1.2em]">
                  {animatedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>
            
            {/* Description - Reduced and shortened for compact layout */}
            <p className="text-sm sm:text-base text-white/90 max-w-2xl lg:max-w-3xl leading-snug mb-3 sm:mb-4 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
              Working with communities to improve health, protect the environment, and create sustainable solutions across Tanzania and beyond.
            </p>

            {/* CTA Buttons - Compact layout for smaller height */}
            <div className="flex flex-row gap-2 sm:gap-3 mt-2 relative z-10">
              {/* Our Impact Button - Smaller size */}
              <button className="group flex items-center justify-center space-x-1 px-3 sm:px-4 py-1 sm:py-2 bg-transparent border-2 border-white rounded-full text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-float-small" style={{ animationDelay: '1000ms' }}>
                <span>Our Impact</span>
                <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Donate Button - Smaller size */}
              <button className="group flex items-center justify-center space-x-1 px-3 sm:px-4 py-1 sm:py-2 bg-green-600 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeInUp animate-float-medium" style={{ animationDelay: '1200ms' }}>
                <span>Donate</span>
              </button>
              
              {/* Volunteer Button - Smaller size */}
              <button className="group flex items-center justify-center space-x-1 px-3 sm:px-4 py-1 sm:py-2 bg-yellow-500 text-blue-900 rounded-full font-semibold text-xs sm:text-sm hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeInUp animate-float-large" style={{ animationDelay: '1400ms' }}>
                <span>Volunteer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay - Reduced height for compact hero */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>

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
        
        @keyframes float-small {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes float-large {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-float-small {
          animation: float-small 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-float-large {
          animation: float-large 5s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Hero;