"use client";

import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Check, Heart, Leaf, Trash2, Users, Lightbulb } from 'lucide-react';

export default function Programs() {
  return (
    <div className="font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden bg-amber-50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-green-500 mb-4 px-3 py-1 rounded-full animate-fadeInUp">
              <span className="text-xs font-bold tracking-wider text-white uppercase">Making a Difference</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              Our Programs
            </h1>
            <p className="text-xl text-white/90 max-w-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              Discover how we&apos;re creating meaningful impact through our healthcare, environmental, 
              and community initiatives across Tanzania
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,202.7C672,192,768,160,864,165.3C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-white" >
        <div className="container mx-auto px-4 bg-white">
          {/* Healthcare Initiatives */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                Healthcare Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-4">Our Healthcare Initiatives</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                Providing accessible and quality healthcare services to underserved communities across Tanzania
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="relative h-72">
                  <Image 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Healthcare services" 
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="bg-green-500 inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      Outreach Program
                    </div>
                    <h3 className="text-2xl font-bold">Free Healthcare Services</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We provide free or affordable healthcare services to underserved communities across Tanzania, focusing on preventative care and health education.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Our Services Include:</h4>
                    <ul className="space-y-2">
                      {['Mobile medical clinics', 'Health screenings', 'Maternal and child health services', 'Vaccination programs'].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                            <Check className="w-4 h-4 text-green-600" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="group flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="relative h-72">
                  <Image 
                    src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Blood donation campaign" 
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="bg-green-500 inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      Flagship Initiative
                    </div>
                    <h3 className="text-2xl font-bold">&quot;Give Life&quot; Blood Donation</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our flagship blood donation campaign ensures hospitals have adequate blood supplies, especially in rural areas where shortages are common.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Program Components:</h4>
                    <ul className="space-y-2">
                      {['Regular donation drives', 'Community awareness programs', 'Partnerships with hospitals', 'Blood storage facilities'].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-red-100 p-1 rounded-full mr-3 mt-0.5">
                            <Heart className="w-4 h-4 text-red-600" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="group flex items-center text-red-600 font-medium hover:text-red-800 transition-colors">
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Environmental Projects */}
          <section className="mb-24 relative">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#047857" d="M41.9,-71.5C53.4,-66,61.3,-51.6,65.9,-37.5C70.5,-23.4,71.9,-9.6,71.1,4.6C70.3,18.9,67.3,33.6,58.4,42C49.5,50.5,34.7,52.7,21.3,57.8C8,62.9,-3.8,70.8,-16.8,71.3C-29.8,71.8,-44,64.8,-56.3,54.4C-68.6,44,-79,30.1,-82.5,14.6C-86,-0.9,-82.8,-17.9,-76.2,-33.5C-69.6,-49.1,-59.7,-63.3,-46,-69.9C-32.4,-76.6,-16.2,-75.6,-0.5,-74.8C15.2,-74,30.3,-77,41.9,-71.5Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <div className="text-center mb-12">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                Environmental Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Environmental Projects</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                Creating sustainable solutions to protect our planet for future generations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden shadow-lg p-1">
                <div className="bg-white rounded-lg overflow-hidden h-full">
                  <div className="relative h-64">
                    <Image 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Tree planting initiative" 
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                      Flagship Project
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Leaf className="w-5 h-5 text-green-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Tree Planting & Reforestation</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our extensive reforestation program aims to combat deforestation and restore 
                      Tanzania&apos;s natural ecosystems while providing economic opportunities for local communities.
                    </p>
                    
                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-green-800 mb-2">Key Initiatives:</h4>
                      <ul className="space-y-2">
                        {['Community tree planting events', 'School nursery programs', 'Forest conservation education', 'Sustainable agriculture training'].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="bg-green-200 p-1 rounded-full mr-3 mt-0.5">
                              <Check className="w-3 h-3 text-green-700" />
                            </span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-sm text-gray-500">Trees Planted</span>
                        <span className="text-xl font-bold text-green-700">25,000+</span>
                      </div>
                      <button className="group flex items-center text-green-700 font-medium hover:text-green-900 transition-colors">
                        Learn More 
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl overflow-hidden shadow-lg p-1">
                <div className="bg-white rounded-lg overflow-hidden h-full">
                  <div className="relative h-64">
                    <Image 
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Waste management project" 
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                      Innovation Project
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <Trash2 className="w-5 h-5 text-green-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Waste Management Solutions</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our comprehensive waste management program tackles pollution and promotes 
                      recycling through innovative technology and community education initiatives.
                    </p>
                    
                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-green-800 mb-2">Program Highlights:</h4>
                      <ul className="space-y-2">
                        {['Community clean-up campaigns', 'Recycling programs', 'Helmet Cleaning Vendor Machine', 'Environmental education'].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="bg-green-200 p-1 rounded-full mr-3 mt-0.5">
                              <Check className="w-3 h-3 text-green-700" />
                            </span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-sm text-gray-500">Communities Served</span>
                        <span className="text-xl font-bold text-green-700">12+</span>
                      </div>
                      <button className="group flex items-center text-green-700 font-medium hover:text-green-900 transition-colors">
                        Learn More 
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Campaigns */}
          <section className="mb-20 relative">
            {/* Decorative background element */}
            <div className="absolute left-0 bottom-0 -z-10 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#7e22ce" d="M54.2,-61.4C68.8,-49.4,78.2,-30.6,79.9,-11.7C81.6,7.3,75.5,26.5,63.5,39.6C51.5,52.8,33.5,59.8,15.7,63.8C-2.1,67.7,-19.7,68.6,-35.9,62.2C-52.1,55.9,-66.8,42.4,-73.3,25.8C-79.7,9.3,-77.9,-10.2,-69.8,-25.8C-61.6,-41.4,-47.2,-53.1,-32.1,-64.7C-17,-76.3,-1.3,-87.9,13.2,-85.9C27.6,-83.9,39.7,-73.3,54.2,-61.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <div className="text-center mb-12">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                Community Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Empowerment</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                Investing in our communities to create lasting positive change
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative">
                  <div className="relative h-72 overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Youth empowerment" 
                      className="object-cover transform transition-transform duration-500 hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-600/80 via-blue-500/50 to-transparent text-white">
                    <div className="flex items-center">
                      <div className="bg-blue-600 p-2 rounded-full">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold ml-3">Youth Empowerment</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our youth programs focus on creating the next generation of leaders and change-makers
                    through mentorship, education, and hands-on community involvement.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      {icon: <Lightbulb className="w-5 h-5 text-green-600" />, text: 'Leadership Training'},
                      {icon: <Leaf className="w-5 h-5 text-green-600" />, text: 'Environmental Clubs'},
                      {icon: <Heart className="w-5 h-5 text-red-600" />, text: 'Health Advocacy'},
                      {icon: <Users className="w-5 h-5 text-blue-600" />, text: 'Skills Development'}
                    ].map((item, i) => (
                      <div key={i} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <div className="bg-white p-1.5 rounded-full shadow-sm mr-2">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">
                        +12
                      </div>
                    </div>
                    <button className="group flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative">
                  <div className="relative h-72 overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Women's empowerment" 
                      className="object-cover transform transition-transform duration-500 hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-purple-600/80 via-purple-500/50 to-transparent text-white">
                    <div className="flex items-center">
                      <div className="bg-purple-600 p-2 rounded-full">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold ml-3">Women&apos;s Empowerment</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our women&apos;s programs provide education, resources and support networks to help women 
                    become economically independent and leaders in their communities.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      {icon: <Lightbulb className="w-5 h-5 text-yellow-600" />, text: 'Skills Training'},
                      {icon: <Heart className="w-5 h-5 text-red-600" />, text: 'Health Education'},
                      {icon: <Users className="w-5 h-5 text-blue-600" />, text: 'Economic Empowerment'},
                      {icon: <Users className="w-5 h-5 text-green-600" />, text: 'Leadership Development'}
                    ].map((item, i) => (
                      <div key={i} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <div className="bg-white p-1.5 rounded-full shadow-sm mr-2">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-sm text-gray-500">Women Supported</span>
                      <span className="text-xl font-bold text-green-700">1,500+</span>
                    </div>
                    <button className="group flex items-center text-green-600 font-medium hover:text-green-800 transition-colors">
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl overflow-hidden my-20">
            <div className="container mx-auto px-4 py-16 relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="white" strokeWidth="1" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:w-3/5">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Make a Difference Today</h2>
                  <p className="text-white/80 text-lg mb-6 max-w-xl">
                    Join us in creating a healthier environment and stronger communities across Tanzania. 
                    Your support can help fund our programs and make a lasting impact.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-blue-700 hover:bg-gray-100 transition-colors px-6 py-3 rounded-full font-bold">
                      Donate Now
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white/10 transition-colors px-6 py-3 rounded-full font-bold">
                      Volunteer With Us
                    </button>
                  </div>
                </div>
                
                <div className="md:w-2/5 bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-white/30">
                  <h3 className="text-xl font-bold text-white mb-3">Get Program Updates</h3>
                  <p className="text-white/80 mb-4">
                    Stay informed about our latest programs, initiatives and success stories.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button className="w-full bg-white text-blue-700 hover:bg-gray-100 transition-colors px-4 py-3 rounded-lg font-bold">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}