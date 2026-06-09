"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Leaf, Users, Shield, ArrowRight } from 'lucide-react';

const OurApproach = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(true);

  const approaches = [
    {
      id: 1,
      image: "/approach/ecocare.jpg",
      alt: "SmartCare Africa Foundation community health outreach in Biharamulo"
    },
    {
      id: 2,
      image: "/approach/ecocare1.jpg", 
      alt: "Environmental conservation program in Kagera Region"
    },
    {
      id: 3,
      image: "/eco.jpeg",
      alt: "Community engagement and education initiative"
    }
  ];

  const values = [
    { icon: Heart, title: "Compassion", desc: "Serving with care, empathy, and deep respect for humanity." },
    { icon: Shield, title: "Integrity", desc: "Transparent, accountable, and honest in all our operations." },
    { icon: Leaf, title: "Sustainability", desc: "Protecting the ecosystem and health of future generations." },
    { icon: Users, title: "Collaboration", desc: "Partnering with stakeholders for collective community action." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % approaches.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [approaches.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % approaches.length);
  const prevSlide = () => setCurrentSlide((prev) => prev === 0 ? approaches.length - 1 : prev - 1);

  return (
    <section id="approach-section" className="py-12 md:py-14 bg-white border-b border-[var(--border-light)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Intro Block like JMKF */}
        <div className={`mb-10 max-w-5xl transition-all duration-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary-dark)] leading-tight mb-6 tracking-tight">
            We partner with communities and stakeholders to drive sustainable change and improve the quality of lives in Tanzania.
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mb-8 rounded-full"></div>
          
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            SmartCare Africa Foundation works at the intersection of human health and environmental 
            conservation. Driven by research, innovation, and collaboration, we implement programs 
            that empower local communities and promote ecological resilience.
          </p>
        </div>

        {/* Two Column Layout: Slide Show & Values Card Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Slider — 7 Columns */}
          <div className={`lg:col-span-7 relative transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative h-80 sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-[var(--border-light)]">
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {approaches.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 h-full relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/40 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white text-[var(--primary-dark)] rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white text-[var(--primary-dark)] rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-6 flex space-x-2.5 z-10">
                {approaches.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-8 bg-[var(--accent)]' : 'w-2.5 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Values Grid — 5 Columns */}
          <div className={`lg:col-span-5 space-y-6 transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-2">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-[var(--surface)] hover:bg-white rounded-xl p-5 border border-[var(--border-light)] hover:border-[var(--primary)]/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <h4 className="text-base font-bold text-[var(--primary-dark)] mb-1">{value.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>

            <a 
              href="/who-we-are" 
              className="inline-flex items-center space-x-2 text-[var(--primary)] hover:text-[var(--primary-dark)] font-bold text-sm transition-colors duration-300 mt-2"
            >
              <span>Learn more about our mission</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;