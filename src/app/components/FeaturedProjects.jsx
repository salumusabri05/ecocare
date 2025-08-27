"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const [isInView, setIsInView] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Kijana Leo: Our Flagship Program",
      description: "A Swahili TV show empowering Tanzanian youth through entrepreneurship and social innovation. Features young changemakers driving development.",
      ctaText: "Explore the Program",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      overlay: "bg-black/60"
    },
    {
      id: 2,
      title: "Community Health Initiative",
      description: "Bringing essential healthcare services to remote communities through mobile clinics and community health worker training programs.",
      ctaText: "Learn More",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      overlay: "bg-black/50"
    },
    {
      id: 3,
      title: "Maternal Health Project",
      description: "Helping antenatal mothers access essential healthcare services and support.",
      ctaText: "Explore the program",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      overlay: "bg-black/50"
    },
    {
      id: 4,
      title: "Sustainable Agriculture Initiative",
      description: "Training farmers in modern, sustainable agricultural practices to improve food security and economic development.",
      ctaText: "Explore the program",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      overlay: "bg-black/50"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('featured-projects-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="featured-projects-section" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Side - Header */}
          <div className={`bg-white flex items-center justify-center p-12 transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-blue-700 leading-tight">
                Featured<br />
                Projects
              </h2>
            </div>
          </div>

          {/* Right Side - First Project (Large) */}
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative h-96 lg:h-full min-h-96 overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${projects[0].overlay}`}></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-white text-center max-w-lg">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {projects[0].title}
                  </h3>
                  <p className="text-lg mb-6 leading-relaxed">
                    {projects[0].description}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-semibold text-lg transition-colors duration-300 group">
                    <span className="border-b-2 border-yellow-400 group-hover:border-yellow-300">
                      {projects[0].ctaText}
                    </span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left - Second Project */}
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="relative h-64 overflow-hidden">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${projects[1].overlay}`}></div>
              
              <div className="absolute inset-0 flex items-center p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {projects[1].title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed">
                    {projects[1].description.substring(0, 100)}...
                  </p>
                  <button className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors duration-300 group">
                    <span className="border-b border-yellow-400 group-hover:border-yellow-300">
                      {projects[1].ctaText}
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right - Third Project */}
          <div className={`relative transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="relative h-64 overflow-hidden">
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${projects[2].overlay}`}></div>
              
              <div className="absolute inset-0 flex items-center p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {projects[2].title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed">
                    {projects[2].description.substring(0, 100)}...
                  </p>
                  <button className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors duration-300 group">
                    <span className="border-b border-yellow-400 group-hover:border-yellow-300">
                      {projects[2].ctaText}
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;