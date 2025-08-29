"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OurApproach = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Mock data for approach images
  const approaches = [
    {
      id: 1,
      image: "/approach/ecocare.jpg",
      alt: "Healthcare worker examining a child"
    },
    {
      id: 2,
      image: "/approach/ecocare1.jpg", 
      alt: "Community education and outreach program"
    },
    {
      id: 3,
      image: "/approach/ecocare.jpg",
      alt: "Sustainable agriculture and farming practices"
    },
    {
      id: 4,
      image: "/approach/ecocare1.jpg",
      alt: "Blood donation campaign in Biharamulo District"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('approach-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % approaches.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [approaches.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % approaches.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? approaches.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="approach-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-blue-700 mb-2">
            Our Approach
          </h2>
          <div className="w-48 h-1 bg-red-500 mb-8"></div>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-5xl">
            Our mission is to provide healthcare services, promote health education, champion environmental conservation, 
            and empower communities through sustainable initiatives—driven by our core values of compassion, integrity, 
            sustainability, collaboration, and innovation.
          </p>
        </div>

        {/* Image Carousel Container */}
        <div className="relative">
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Desktop: Side by side images */}
            <div className="hidden lg:block relative">
              <div className="flex gap-4 h-96">
                {/* Left Image */}
                <div className="w-1/2 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Team meeting and collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Right Image */}
                <div className="w-1/2 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Community environmental cleanup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Navigation Arrows for Desktop */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile/Tablet: Single image carousel */}
            <div className="lg:hidden relative">
              <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {[
                    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  ].map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full">
                      <img
                        src={src}
                        alt={approaches[index]?.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows for Mobile */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-10"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-10"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Slide Indicators for Mobile */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {approaches.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Dots (outside carousel) */}
            <div className="flex justify-center space-x-3 mt-6">
              {approaches.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;