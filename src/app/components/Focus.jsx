"use client";

import React, { useState, useEffect } from 'react';

const KeyFocusAreas = () => {
  const [isInView, setIsInView] = useState(false);

  const focusAreas = [
    {
      id: 1,
      title: "Healthcare Initiatives",
      description: "We provide free or affordable healthcare to underserved communities, promote mental health awareness, and run education programs on nutrition, hygiene, and disease prevention.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500",
      titleColor: "text-gray-900"
    },
    {
      id: 2,
      title: "Environmental Projects",
      description: "Our environmental work includes tree planting and reforestation, waste management and clean-up campaigns, and innovative solutions like the Helmet Cleaning Vendor Machine.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      titleColor: "text-blue-600"
    },
    {
      id: 3,
      title: "Community Campaigns",
      description: "We run the \"Give Life\" Blood Donation Campaign ensuring hospitals have enough blood supplies, and lead youth and women empowerment initiatives across communities.",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      titleColor: "text-blue-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('focus-areas-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="focus-areas-section" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-blue-700 mb-2">
            Key Focus Areas
          </h2>
          <div className="w-48 h-1 bg-red-500 mb-8"></div>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div 
              key={area.id} 
              className={`transition-all duration-1000 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="mb-6">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className={`text-3xl font-bold mb-6 ${area.titleColor}`}>
                  {area.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8 px-2">
                  {area.description}
                </p>

                <button className={`${area.buttonColor} text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFocusAreas;