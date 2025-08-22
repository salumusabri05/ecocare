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
      alt: "Water and sanitation projects"
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
    <section id="approach-section" className="py-12 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-4xl mb-12 lg:mb-16 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 relative">
            Our Approach
            <div className="w-24 sm:w-32 h-1 bg-red-500 mt-2"></div>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mt-6 max-w-4xl">
            We convene and partner with diverse stakeholders to champion bold ideas, empower communities, and inspire 
            sustainable solutions—driven by research, innovation, and collaboration in health, skills and agriculture.
          </p>
        </div>

        {/* Image Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Desktop: Side by side images */}
            <div className="hidden lg:block relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex h-[286px] gap-4 p-4">
                  {/* Left Image */}
                  <div className="w-1/2 relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src={approaches[0].image}
                      alt={approaches[0].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Right Image */}
                  <div className="w-1/2 relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src={approaches[1].image}
                      alt={approaches[1].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[200px] sm:h-[250px] md:h-[286px]">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {approaches.map((approach) => (
                      <div key={approach.id} className="w-full flex-shrink-0 h-full">
                        <img
                          src={approach.image}
                          alt={approach.alt}
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

        {/* Bottom spacing */}
        <div className="h-8 lg:h-12"></div>
      </div>
    </section>
  );
};

export default OurApproach;