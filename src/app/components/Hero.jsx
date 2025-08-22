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
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image - Improved responsiveness */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile optimized image */}
          <source media="(max-width: 640px)" srcSet="/hero.jpg" />
          {/* Tablet optimized image */}
          <source media="(max-width: 1024px)" srcSet="/hero.jpg" />
          {/* Desktop image */}
          <img 
            src="/hero.jpg" // Default/fallback image
            alt="Community member with child"
            className="w-full h-full object-cover object-center md:object-[center_30%] xl:object-center"
            loading="eager"
            fetchpriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div> {/* Improved gradient overlay for better text readability */}
      </div>

      {/* Hero Content - Adjusted for better spacing */}
      <div className="relative flex items-center min-h-screen pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl pt-16 md:pt-0">
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
                <span className="block animate-fadeInUp">EMPOWERING </span>
                <span className="block text-yellow-400 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                  COMMUNITIES
                </span>
              </h1>
              
              {/* Animated subtitle */}
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="block text-yellow-400 min-h-[1.2em]">
                  {animatedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl lg:max-w-3xl leading-relaxed mb-6 sm:mb-8 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
              We work with communities, partners, and stakeholders to improve health, protect the environment, 
              and create sustainable solutions—leveraging innovation, ICT, and AI to enhance the quality of life across Tanzania and beyond.
            </p>

            {/* CTA Buttons - Added floating animations and improved spacing */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 relative z-10">
              {/* Our Impact Button */}
              <button className="group flex items-center justify-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white rounded-full text-white font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 animate-fadeInUp animate-float-small" style={{ animationDelay: '1000ms' }}>
                <span>Our Impact</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Donate Button */}
              <button className="group flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeInUp animate-float-medium" style={{ animationDelay: '1200ms' }}>
                <span>Donate</span>
              </button>
              
              {/* Volunteer Button */}
              <button className="group flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-blue-900 rounded-full font-semibold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeInUp animate-float-large" style={{ animationDelay: '1400ms' }}>
                <span>Volunteer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for better text contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>

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