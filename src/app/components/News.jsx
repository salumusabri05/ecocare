"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Users, Globe, Leaf } from 'lucide-react';

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Mock news data (replacing images with cards)
  const newsItems = [
    {
      id: 1,
      date: "Jun 16, 2025",
      title: "Environment Action For Change: EcoCare Marks World Environment Day with Youth-Focused Action in Bagamoyo",
      excerpt: "On June 5th, in celebration of World Environment Day, EcoCare Foundation in partnership with local organizations launched a comprehensive environmental awareness campaign...",
      readTime: "5 min read",
      category: "Environmental",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      stats: "500+ Participants"
    },
    {
      id: 2,
      date: "Jun 12, 2025",
      title: "Community Health Initiative Reaches Rural Tanzania: Bringing Healthcare Access to Remote Villages",
      excerpt: "EcoCare's mobile health clinics have successfully completed their first month of operations, providing essential healthcare services to over 15 remote communities...",
      readTime: "4 min read",
      category: "Healthcare",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      stats: "2,000+ Patients Served"
    },
    {
      id: 3,
      date: "Jun 8, 2025",
      title: "Sustainable Agriculture Training Program Graduates First Cohort of 200 Farmers",
      excerpt: "Local farmers celebrate as they complete comprehensive training in sustainable farming practices, equipped with new knowledge and tools for eco-friendly agriculture...",
      readTime: "6 min read",
      category: "Agriculture",
      icon: Globe,
      color: "from-yellow-500 to-orange-600",
      stats: "200+ Farmers Trained"
    },
    {
      id: 4,
      date: "Jun 4, 2025",
      title: "Educational Technology Initiative Launches in 10 Schools Across Dar es Salaam",
      excerpt: "EcoCare Foundation introduces innovative digital learning platforms to enhance educational outcomes in primary and secondary schools throughout the region...",
      readTime: "3 min read",
      category: "Education",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      stats: "3,000+ Students"
    },
    {
      id: 5,
      date: "May 30, 2025",
      title: "Clean Water Project Brings Safe Drinking Water to 20 Communities",
      excerpt: "Through innovative water purification systems and community engagement, EcoCare has successfully provided access to clean, safe drinking water for thousands of families...",
      readTime: "7 min read",
      category: "Water & Sanitation",
      icon: Leaf,
      color: "from-cyan-500 to-blue-600",
      stats: "5,000+ People Impacted"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('news-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [newsItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? newsItems.length - 1 : prev - 1);
  };

  const currentNews = newsItems[currentSlide];
  const IconComponent = currentNews.icon;

  return (
    <section id="news-section" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-100/40 to-transparent rounded-full -translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative">
            Latest News
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </h2>
        </div>

        {/* Main News Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Image Replacement Card */}
              <div className="relative h-96 lg:h-auto">
                <div className={`h-full bg-gradient-to-br ${currentNews.color} relative flex items-center justify-center p-8`}>
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{currentNews.category}</h3>
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{currentNews.stats}</span>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute bottom-8 left-8 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{currentNews.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{currentNews.readTime}</span>
                  </div>
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${currentNews.color} text-white text-xs rounded-full`}>
                    {currentNews.category}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {currentNews.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {currentNews.excerpt}
                </p>

                <button className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group w-fit">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
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

        {/* News Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {newsItems.map((_, index) => (
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

        {/* News Grid - Additional News Items */}
        <div className={`mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          {newsItems.slice(1, 4).map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
                <div className={`h-40 bg-gradient-to-br ${item.color} relative flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <ItemIcon className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                    <Clock className="w-3 h-3 ml-2" />
                    <span>{item.readTime}</span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title.length > 80 ? `${item.title.substring(0, 80)}...` : item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.excerpt.substring(0, 100)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.stats}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group/btn">
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating News Icon */}
      <div className="fixed bottom-8 left-8 z-50">
        <button className="w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
          <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LatestNews;