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
    <div className="relative min-h-screen bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero.jpg" // Replace with your actual hero image path
          alt="Community member with child"
          className="w-full h-full object-cover object-center sm:object-right opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 via-blue-700/70 to-blue-600/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative flex items-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white">
                <span className="block animate-fadeInUp">CATALYSING</span>
                <span className="block text-yellow-400 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                  CHANGE
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

            {/* CTA Button */}
            <div className="animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
              <button className="group flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white rounded-full text-white font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105">
                <span>Our Impact</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for better text contrast */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/60 to-transparent"></div>

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
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;