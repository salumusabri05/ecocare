"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Users } from 'lucide-react';

const SupportOurMission = () => {
  const [isInView, setIsInView] = useState(true);

  const partners = [
    { name: "Ministry of Health Tanzania", type: "Government Partner" },
    { name: "Kagera Regional Council", type: "Local Government" },
    { name: "Biharamulo District Authority", type: "District Council" },
    { name: "NEMC Tanzania", type: "Environmental Partner" },
    { name: "Tanzania Commission for AIDS", type: "Health Partner" }
  ];

  return (
    <div>
      <section 
        id="support-mission-section" 
        className="relative py-12 md:py-14 overflow-hidden border-b border-[var(--border-light)]"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)]"></div>
        
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-[var(--accent)]/10 rounded-full animate-pulse-soft"></div>
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className={`transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Support Our Mission
            </h2>

            {/* Description */}
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-lg text-white/90 leading-relaxed">
                Join us in our vision for a healthy and sustainable future where every person has access 
                to healthcare and lives in harmony with nature. Your contribution supports our work  
                <strong className="text-[var(--accent-light)]"> transforming lives across Tanzania</strong> through healthcare, 
                environmental conservation, and community empowerment.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--primary-dark)] font-bold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-300 border border-white/30"
              >
                <Users className="w-5 h-5" />
                <span>Volunteer</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section like JMKF */}
      <section className="py-12 bg-white border-b border-[var(--border-light)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">Our Partners & Supporters</h3>
            <div className="w-10 h-0.5 bg-[var(--accent)] mx-auto mt-2"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-[var(--border-light)] rounded-xl bg-[var(--surface)] hover:bg-white transition-all duration-300 hover:shadow-sm"
              >
                <span className="text-sm font-bold text-[var(--primary-dark)] tracking-tight text-center">{partner.name}</span>
                <span className="text-[10px] uppercase font-bold text-[var(--primary-light)] tracking-wider mt-1">{partner.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportOurMission;