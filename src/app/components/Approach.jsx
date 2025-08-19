import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Heart, Sprout, BookOpen, Stethoscope, Wheat } from 'lucide-react';

const OurApproach = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Mock data for cards (replacing images)
  const approaches = [
    {
      id: 1,
      title: "Community Outreach",
      description: "Engaging with local communities to understand their needs and build sustainable partnerships.",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      stats: "50+ Communities",
      category: "Community Development"
    },
    {
      id: 2,
      title: "Educational Programs",
      description: "Empowering through knowledge sharing and skills development across all age groups.",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      stats: "1000+ Students",
      category: "Education"
    },
    {
      id: 3,
      title: "Healthcare Access",
      description: "Providing essential healthcare services and promoting wellness in underserved areas.",
      icon: Stethoscope,
      color: "from-red-500 to-pink-600",
      stats: "25+ Clinics",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Sustainable Agriculture",
      description: "Promoting eco-friendly farming practices to ensure food security and environmental protection.",
      icon: Wheat,
      color: "from-yellow-500 to-orange-600",
      stats: "200+ Farmers",
      category: "Agriculture"
    },
    {
      id: 5,
      title: "Environmental Conservation",
      description: "Protecting natural resources and promoting sustainable practices for future generations.",
      icon: Sprout,
      color: "from-emerald-500 to-green-600",
      stats: "10K+ Trees Planted",
      category: "Environment"
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
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(approaches.length / 2));
    }, 5000);

    return () => clearInterval(timer);
  }, [approaches.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(approaches.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(approaches.length / 2) - 1 : prev - 1
    );
  };

  const getVisibleApproaches = () => {
    const startIndex = currentSlide * 2;
    return approaches.slice(startIndex, startIndex + 2);
  };

  return (
    <section id="approach-section" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100/30 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative">
              Our Approach
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mt-8">
              We convene and partner with diverse stakeholders to champion bold ideas, empower communities, and inspire 
              sustainable solutions—driven by research, innovation, and collaboration in health, skills and agriculture.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative">
              {/* Main Carousel */}
              <div className="flex transition-transform duration-700 ease-in-out">
                <div className="w-full flex gap-6">
                  {getVisibleApproaches().map((approach, index) => {
                    const IconComponent = approach.icon;
                    return (
                      <div
                        key={approach.id}
                        className={`flex-1 transform transition-all duration-700 ${
                          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-96">
                          {/* Card Header with Gradient */}
                          <div className={`h-32 bg-gradient-to-r ${approach.color} relative`}>
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute bottom-4 left-6">
                              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                                {approach.category}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-6 flex flex-col justify-between h-64">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {approach.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed mb-4">
                                {approach.description}
                              </p>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 bg-gradient-to-r ${approach.color} rounded-full flex items-center justify-center`}>
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-semibold text-gray-800">{approach.stats}</span>
                              </div>
                              
                              <button className="group/btn flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                                <span className="mr-2">Learn More</span>
                                <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>

                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Arrows */}
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
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {Array.from({ length: Math.ceil(approaches.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-sm text-gray-600">Communities Served</div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">100K+</div>
            <div className="text-sm text-gray-600">Lives Impacted</div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">25+</div>
            <div className="text-sm text-gray-600">Programs Running</div>
          </div>
          
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
          <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default OurApproach;