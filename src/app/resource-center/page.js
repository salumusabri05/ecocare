"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Search, Download, FileText, ArrowRight, BookOpen, Video, Calendar, Filter, ExternalLink } from 'lucide-react';

export default function ResourceCenter() {
  return (
    <div className="font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-green-600 to-emerald-400 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="20" cy="20" r="3" fill="white"></circle>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        {/* Animated Leaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute animate-float" 
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`
              }}
            >
              <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full" />
            </div>
          ))}
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-green-100 border border-green-200 mb-4 px-3 py-1 rounded-full animate-fadeInUp">
              <span className="text-xs font-bold tracking-wider text-green-800 uppercase">Knowledge Hub</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              Resource Center
            </h1>
            <p className="text-xl text-white/90 max-w-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              Access publications, reports, case studies, and educational materials to learn more about 
              our work and impact
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mt-8 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center bg-white rounded-full shadow-lg p-1">
              <div className="pl-4">
                <Search className="text-gray-500 w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search for resources..."
                className="w-full px-4 py-3 rounded-full bg-transparent border-none focus:outline-none" 
              />
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,261.3C672,256,768,224,864,218.7C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Resource Categories */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { title: 'Publications', icon: <FileText className="w-6 h-6" />, color: 'bg-green-100 text-green-700', count: 24 },
                { title: 'Case Studies', icon: <BookOpen className="w-6 h-6" />, color: 'bg-emerald-100 text-emerald-700', count: 18 },
                { title: 'Videos', icon: <Video className="w-6 h-6" />, color: 'bg-lime-100 text-lime-700', count: 12 },
                { title: 'Events', icon: <Calendar className="w-6 h-6" />, color: 'bg-teal-100 text-teal-700', count: 8 }
              ].map((category, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center text-center transition-all animate-fadeIn hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className={`${category.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-500">{category.count} Resources</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Featured Resources */}
          <section className="mb-20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Featured Resources</h2>
              <button className="flex items-center text-green-600 font-semibold hover:text-green-700">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  image: "/eco.jpeg",
                  category: "Annual Report",
                  title: "Annual Report 2025",
                  description: "Our comprehensive report on activities, impact, and financial statements.",
                  type: "PDF",
                  size: "2.4 MB",
                  color: "bg-green-100 text-green-800"
                },
                {
                  image: "/eco1.png",
                  category: "Research",
                  title: "Environmental Impact Study",
                  description: "Research on our environmental conservation programs and their long-term effects.",
                  type: "PDF",
                  size: "1.8 MB",
                  color: "bg-emerald-100 text-emerald-800"
                },
                {
                  image: "/eco2.png", 
                  category: "Report",
                  title: "Healthcare Programs Overview",
                  description: "Detailed overview of our healthcare initiatives and outcomes across Tanzania.",
                  type: "PDF",
                  color: "bg-lime-100 text-lime-800",
                  size: "3.1 MB"
                }
              ].map((resource, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group animate-fadeIn"
                  style={{ animationDelay: `${(index + 4) * 150}ms` }}
                >
                  <div className="relative h-48">
                    <Image 
                      src={resource.image} 
                      alt={resource.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-green-200/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                        <Download className="w-5 h-5 text-green-700" />
                      </button>
                    </div>
                    <div className={`absolute top-3 left-3 ${resource.color} py-1 px-3 rounded-full text-xs font-semibold`}>
                      {resource.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {resource.type} • {resource.size}
                      </span>
                      <button className="flex items-center text-green-600 hover:text-green-800 transition-colors font-medium">
                        Download
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Publications */}
          <section className="mb-20 animate-fadeIn" style={{ animationDelay: '700ms' }}>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Recent Publications</h2>
                <div className="flex items-center">
                  <button className="flex items-center text-gray-600 mr-4">
                    <Filter className="w-4 h-4 mr-1" /> Filter
                  </button>
                  <button className="flex items-center text-green-600 font-semibold hover:text-green-700">
                    View All <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Title</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Category</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Published</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Size</th>
                      <th className="py-3 px-4 text-right text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { 
                        title: "Community Health Assessment 2025", 
                        category: "Report", 
                        date: "May 10, 2025",
                        size: "3.2 MB" 
                      },
                      { 
                        title: "Environmental Conservation Strategy", 
                        category: "Strategy", 
                        date: "Apr 22, 2025",
                        size: "1.8 MB" 
                      },
                      { 
                        title: "Youth Empowerment Program Impact", 
                        category: "Case Study", 
                        date: "Apr 15, 2025", 
                        size: "2.6 MB"
                      },
                      { 
                        title: "Water Purification Project Results", 
                        category: "Research", 
                        date: "Mar 30, 2025", 
                        size: "4.1 MB" 
                      },
                      { 
                        title: "Sustainable Agriculture Guidelines", 
                        category: "Guide", 
                        date: "Mar 18, 2025", 
                        size: "1.4 MB" 
                      }
                    ].map((pub, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm font-medium text-gray-800">{pub.title}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{pub.category}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{pub.date}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{pub.size}</td>
                        <td className="py-4 px-4 text-right">
                          <button className="text-amber-600 hover:text-amber-800 font-medium text-sm">
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* Educational Materials */}
          <section className="mb-20 animate-fadeIn" style={{ animationDelay: '900ms' }}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Educational Resources</h2>
              <button className="flex items-center text-green-600 font-semibold hover:text-green-700">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Health Education Guide",
                  image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  description: "Community health education materials and guidelines for healthcare practitioners and volunteers.",
                  type: "E-Book",
                  category: "Healthcare"
                },
                {
                  title: "Environmental Protection Manual",
                  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  description: "Best practices for environmental conservation, sustainability, and responsible resource management.",
                  type: "PDF Guide",
                  category: "Environment"
                },
                {
                  title: "Youth Leadership Toolkit",
                  image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  description: "Resources for youth empowerment, leadership development, and community engagement programs.",
                  type: "Toolkit",
                  category: "Education"
                }
              ].map((material, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={material.image}
                      alt={material.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        material.category === 'Healthcare' ? 'bg-red-100 text-red-800' :
                        material.category === 'Environment' ? 'bg-green-100 text-green-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {material.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <FileText className="w-4 h-4 mr-1" />
                      <span>{material.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{material.title}</h3>
                    <p className="text-gray-600 mb-5 line-clamp-2">{material.description}</p>
                    <div className="flex justify-between items-center">
                      <button className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 px-4 py-2 rounded-full text-sm">
                        Preview
                      </button>
                      <button className="group flex items-center text-green-600 hover:text-green-800 font-medium transition-colors">
                        Download 
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* External Resources */}
          <section className="mb-20 animate-fadeIn" style={{ animationDelay: '1100ms' }}>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
              <div className="text-center mb-8">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                  Partners & Collaborators
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">External Resources</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Explore additional resources from our partners and trusted collaborators in environmental 
                  conservation and community health development
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "WHO Healthcare Guidelines",
                    organization: "World Health Organization",
                    description: "Official healthcare guidelines and best practices for medical professionals and community health workers.",
                    link: "https://www.who.int/publications/guidelines",
                    icon: "https://cdn.who.int/media/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2"
                  },
                  {
                    title: "Environmental Conservation Resources",
                    organization: "United Nations Environment Programme",
                    description: "Reports, studies and toolkits for environmental protection and sustainable development initiatives.",
                    link: "https://www.unep.org/resources",
                    icon: "https://www.unep.org/themes/custom/unep/logo.svg"
                  },
                  {
                    title: "Community Development Toolkit",
                    organization: "USAID",
                    description: "Frameworks and resources for implementing effective community-based programs and initiatives.",
                    link: "https://www.usaid.gov/resources",
                    icon: "https://www.usaid.gov/sites/all/themes/usaid/logo.png"
                  },
                  {
                    title: "Water & Sanitation Research",
                    organization: "Water Aid",
                    description: "Research papers and implementation guides for clean water and sanitation projects in developing regions.",
                    link: "https://www.wateraid.org/publications",
                    icon: "https://www.wateraid.org/themes/custom/wateraid/logo.svg"
                  }
                ].map((resource, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-white rounded-lg p-3 mr-4 shadow-sm">
                        {/* Replace with actual icon */}
                        <div className="w-10 h-10 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{resource.title}</h3>
                        <p className="text-sm text-blue-700 mb-2">{resource.organization}</p>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.description}</p>
                        <a 
                          href={resource.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm"
                        >
                          Visit Resource <ExternalLink className="ml-1 w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Newsletter */}
          <section className="mb-20 animate-fadeIn" style={{ animationDelay: '1300ms' }}>
            <div className="bg-white border-2 border-green-200 rounded-2xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <Image 
                  src="/forest-svgrepo-com.svg"
                  alt="Background pattern"
                  className="object-contain opacity-5"
                  fill
                />
              </div>
              <div className="container mx-auto px-4 py-16 relative">
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="2" fill="green" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Stay Updated</h2>
                    <p className="text-gray-600 text-lg mb-0 max-w-xl">
                      Subscribe to our newsletter to receive new resources, impact reports, and upcoming event details
                    </p>
                  </div>
                  
                  <div className="md:w-1/2">
                    <form className="bg-white rounded-xl p-2 shadow-sm border border-green-200 flex">
                      <input 
                        type="email" 
                        placeholder="Your email address"
                        className="w-full px-4 py-3 bg-transparent border-none focus:outline-none"
                      />
                      <button className="bg-green-600 text-white hover:bg-green-700 transition-colors px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                        Subscribe
                      </button>
                    </form>
                    <p className="text-gray-500 text-xs mt-2 text-center md:text-left">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* News & Updates */}
          <section className="mb-20 animate-fadeIn" style={{ animationDelay: '1500ms' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">News & Updates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "EcoCare Launches New Health Initiative",
                  date: "August 25, 2025",
                  category: "Healthcare",
                  color: "bg-green-100 text-green-800",
                  image: "/eco.jpeg"
                },
                {
                  title: "Community Tree Planting Success",
                  date: "August 20, 2025",
                  category: "Environment",
                  color: "bg-emerald-100 text-emerald-800",
                  image: "/eco1.png"
                },
                {
                  title: "Youth Leadership Program Results",
                  date: "August 15, 2025",
                  category: "Community",
                  color: "bg-lime-100 text-lime-800",
                  image: "/eco2.png"
                }
              ].map((news, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 group"
                  style={{ animationDelay: `${(index + 10) * 150}ms` }}
                >
                  <div className="relative h-40">
                    <Image
                      src={news.image}
                      alt={news.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${news.color} mb-4`}>
                      {news.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{news.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{news.date}</p>
                    <button className="flex items-center text-green-600 hover:text-green-800 font-medium">
                      Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
