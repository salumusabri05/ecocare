"use client";

import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const SupportOurMission = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('support-mission-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="support-mission-section" 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className={`transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-8">
            Support Our Mission
          </h2>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Join us in making a better tomorrow. We imagine a better future and are committed 
              to making it come true. Your contribution will help facilitate and ease our in daily 
              activities in <span className="font-semibold text-gray-900">transforming people's lives</span>.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <button className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="text-lg">Get Involved</span>
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 -z-10"></div>
    </section>
  );
};

export default SupportOurMission;