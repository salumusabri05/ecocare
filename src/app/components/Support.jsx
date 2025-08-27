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
      className="relative py-16 bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className={`transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Heading */}
          <h2 className="text-5xl font-bold text-blue-800 mb-8 tracking-tight">
            Support Our Mission
          </h2>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-xl text-gray-800 leading-relaxed font-normal">
              Join us in making a better tomorrow. We imagine a better future and are committed 
              to making it come true. Your contribution will help facilitate and ease our daily 
              activities in <strong className="text-gray-900">transforming people's lives</strong>.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <button className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
              <span className="text-lg">Get Involved</span>
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOurMission;