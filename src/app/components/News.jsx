"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight, Users, Globe, Leaf } from 'lucide-react';

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Mock news data
  const newsItems = [
    {
      id: 1,
      date: "Jun 16, 2025",
      title: "Environment Action For Change: EcoCare Marks World Environment Day with Youth-Focused Action in Bagamoyo",
      excerpt: "On June 5th, in celebration of World Environment Day, EcoCare Foundation in partnership with local organizations launched a comprehensive environmental awareness campaign...",
      readTime: "5 min read",
      category: "Environmental",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      date: "Jun 12, 2025",
      title: "Building Business Skills That Last: Training Tanzania's Youth to Scale Their Businesses to New Heights",
      excerpt: "Across Tanzania, young people are brimming with ideas and the entrepreneurial spirit is alive and well. However, turning these ideas into thriving businesses requires more than just passion...",
      readTime: "4 min read",
      category: "Business Training",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      date: "Jun 8, 2025",
      title: "Sustainable Agriculture Training Program Graduates First Cohort of 200 Farmers",
      excerpt: "Local farmers celebrate as they complete comprehensive training in sustainable farming practices, equipped with new knowledge and tools for eco-friendly agriculture...",
      readTime: "6 min read",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      date: "Jun 4, 2025",
      title: "Educational Technology Initiative Launches in 10 Schools Across Dar es Salaam",
      excerpt: "EcoCare Foundation introduces innovative digital learning platforms to enhance educational outcomes in primary and secondary schools throughout the region...",
      readTime: "3 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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

  return (
    <section id="news-section" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-blue-700 mb-2">
            Latest News
          </h2>
          <div className="w-48 h-1 bg-red-500 mb-8"></div>
        </div>

        {/* Main News Section */}
        <div className="relative">
          <div className={`transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Desktop: Side by side layout */}
            <div className="hidden lg:block relative">
              <div className="bg-white shadow-lg overflow-hidden">
                <div className="flex">
                  {/* Left Side - Text Content */}
                  <div className="w-1/3 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4 leading-tight">
                      {currentNews.title.split(':')[0]}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {currentNews.excerpt.substring(0, 150)}...
                    </p>
                    <p className="text-gray-500 text-xs">
                      {currentNews.date}
                    </p>
                  </div>
                  
                  {/* Center - Image */}
                  <div className="w-1/3 relative">
                    <img
                      src={currentNews.image}
                      alt={currentNews.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  
                  {/* Right Side - Full Content */}
                  <div className="w-1/3 p-8 flex flex-col justify-center">
                    <p className="text-gray-500 text-sm mb-2">{currentNews.date}</p>
                    <h3 className="text-2xl font-bold text-blue-700 mb-4 leading-tight">
                      {currentNews.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {currentNews.excerpt.substring(0, 200)}...
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded transition-all duration-300 w-fit">
                      Read More
                    </button>
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

            {/* Mobile/Tablet: Stacked layout */}
            <div className="lg:hidden relative">
              <div className="bg-white shadow-lg overflow-hidden">
                <div className="relative h-64 sm:h-80">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {newsItems.map((item) => (
                      <div key={item.id} className="w-full flex-shrink-0 h-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{currentNews.date}</p>
                  <h3 className="text-xl font-bold text-blue-700 mb-4 leading-tight">
                    {currentNews.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {currentNews.excerpt.substring(0, 150)}...
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded transition-all duration-300 w-fit">
                    Read More
                  </button>
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
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;