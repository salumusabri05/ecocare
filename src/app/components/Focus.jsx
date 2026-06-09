"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Leaf, Users, ArrowRight } from 'lucide-react';

const KeyFocusAreas = () => {
  const [isInView, setIsInView] = useState(true);

  const focusAreas = [
    {
      id: 1,
      title: "Health Programs",
      description: "Providing public health outreach, maternal and child wellness initiatives, disease prevention awareness, and blood donation campaigns to reduce local health disparities.",
      icon: Heart,
      image: "/approach/ecocare.jpg",
      color: "bg-[var(--primary)]",
      href: "/programs#healthcare"
    },
    {
      id: 2,
      title: "Environmental Projects",
      description: "Restoring local ecosystems through tree planting, plastic waste clean-up campaigns, and promoting sustainable farming practices in kagera region.",
      icon: Leaf,
      image: "/eco.jpeg",
      color: "bg-[var(--primary-light)]",
      href: "/programs#environmental"
    },
    {
      id: 3,
      title: "Community Outreach",
      description: "Empowering youths and women, leading advocacy networks, building resilience capacity, and promoting social innovation across Biharamulo.",
      icon: Users,
      image: "/approach/ecocare1.jpg",
      color: "bg-[var(--primary-dark)]",
      href: "/programs#community"
    }
  ];

  return (
    <section id="focus-areas-section" className="py-12 md:py-14 bg-[var(--surface-warm)] border-b border-[var(--border-light)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-4 tracking-tight">
            Key Focus Areas
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Connecting human health and environmental preservation to secure a resilient, thriving future for all.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={area.id} 
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[var(--border)] ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-[var(--surface)]">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${area.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border border-white/20`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <a 
                    href={area.href}
                    className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-bold text-sm group/link transition-colors"
                  >
                    <span className="border-b-2 border-transparent group-hover/link:border-[var(--primary)] pb-0.5 transition-all">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFocusAreas;