"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhoWeAre() {
  return (
    <div className="font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fadeIn">
            <div className="inline-block bg-blue-600 mb-4 px-3 py-1 rounded-full">
              <span className="text-xs font-bold tracking-wider text-white uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Who We Are</h1>
            <p className="text-xl text-white/90 max-w-xl leading-relaxed">
              A dedicated team working towards a healthier and more sustainable Tanzania since 2025
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,250.7C840,256,960,224,1080,202.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* About Us Section */}
          <section id="about-us" className="max-w-6xl mx-auto mb-24 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}
                  ></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl hidden md:block">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")' }}
                  ></div>
                </div>
                <div className="absolute -top-6 -left-6 bg-blue-50 p-4 rounded-lg shadow-lg hidden md:block">
                  <span className="text-blue-800 font-bold text-lg">Since</span>
                  <div className="text-blue-800 font-bold text-3xl">2025</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-100 px-3 py-1 rounded-full mb-4">
                <span className="text-sm font-semibold text-blue-800">About Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About EcoCare Alliance Foundation</h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                EcoCare Alliance Foundation is a registered NGO in Tanzania (Reg. No. 00NGO/R/8467, registered on 23rd May 2025) 
                that works at the intersection of human health and environmental sustainability. Our work aims to improve 
                community well-being while protecting the planet for future generations.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Founded with a vision of creating a healthy and sustainable future, we believe that every person deserves 
                access to quality healthcare and the right to live in harmony with nature.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Blood Units</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100+</div>
                  <div className="text-gray-600">Communities</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">1000+</div>
                  <div className="text-gray-600">Lives Impacted</div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section id="vision-mission" className="py-24 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl max-w-7xl mx-auto mb-24 shadow-lg">
            <div className="container mx-auto px-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-white px-4 py-1 rounded-full mb-3 shadow-sm">
                  <span className="text-sm font-semibold text-blue-800">Our Purpose</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Vision & Mission</h2>
                <div className="w-24 h-1 bg-green-600 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-white p-10 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed text-center text-lg">
                    A healthy and sustainable future where every person has access to healthcare and lives in harmony with nature.
                  </p>
                </div>
                
                <div className="bg-white p-10 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed text-center text-lg">
                    To provide healthcare services, promote health education, champion environmental conservation, 
                    and empower communities through sustainable initiatives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section id="core-values" className="max-w-6xl mx-auto mb-24">
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 px-4 py-1 rounded-full mb-3">
                <span className="text-sm font-semibold text-blue-800">What Guides Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Core Values</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values define our approach and commitment to creating meaningful impact in everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Compassion",
                  description: "Serving humanity with care and empathy, putting people's needs at the heart of our work.",
                  color: "bg-yellow-50",
                  textColor: "text-yellow-800",
                  borderColor: "border-yellow-200",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: "Integrity",
                  description: "Maintaining transparency and accountability in all our actions and decisions.",
                  color: "bg-blue-50",
                  textColor: "text-blue-800",
                  borderColor: "border-blue-200",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Sustainability",
                  description: "Protecting the environment for future generations through responsible practices.",
                  color: "bg-green-50",
                  textColor: "text-green-800",
                  borderColor: "border-green-200",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: "Collaboration",
                  description: "Partnering with communities, organizations and institutions to achieve shared goals.",
                  color: "bg-green-50",
                  textColor: "text-green-800",
                  borderColor: "border-green-200",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: "Innovation",
                  description: "Developing creative solutions for health and environmental challenges.",
                  color: "bg-red-50",
                  textColor: "text-red-800",
                  borderColor: "border-red-200",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className={`${value.color} p-8 rounded-xl border-2 ${value.borderColor} shadow-lg transform transition-transform hover:-translate-y-2`}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {value.icon}
                    </div>
                    <h3 className={`text-2xl font-bold ${value.textColor}`}>{value.title}</h3>
                  </div>
                  <p className="text-gray-700 text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Section */}
          <section id="impact" className="relative py-24 overflow-hidden bg-gray-50 rounded-2xl">
            
            {/* Background Design Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
            
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block bg-blue-100 px-4 py-1 rounded-full mb-3">
                  <span className="text-sm font-semibold text-blue-800">Making A Difference</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Impact</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Since our founding in 2025, we&#39;ve been making meaningful impact across Tanzania&#39;s communities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Healthcare Services</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Hundreds of people reached with essential healthcare services through our outreach programs 
                    and mobile clinics.
                  </p>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-blue-600 mr-3">100+</div>
                    <div className="text-gray-600">Villages served across Tanzania</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Blood Donation</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Our &quot;Give Life&quot; Blood Donation Campaign has collected over 500 units in Biharamulo District alone, 
                    supporting local hospitals and saving lives.
                  </p>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-red-600 mr-3">500+</div>
                    <div className="text-gray-600">Units of blood collected</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Environmental Protection</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Communities mobilized for tree planting and environmental protection initiatives across Tanzania.
                  </p>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-green-600 mr-3">1000+</div>
                    <div className="text-gray-600">Trees planted across Tanzania</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Youth Empowerment</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Youth inspired and equipped to take leadership roles in health and climate action projects.
                  </p>
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-yellow-600 mr-3">250+</div>
                    <div className="text-gray-600">Youth trained in leadership</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action Section */}
          <section className="bg-blue-700 py-16 rounded-3xl max-w-6xl mx-auto mb-16 shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Us in Making a Difference</h2>
                <p className="text-white/90 text-lg mb-8">
                  Together, we can create a healthier and more sustainable future for Tanzania and beyond.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/contact" className="px-6 py-3 bg-white text-blue-700 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-lg">
                    Get Involved
                  </a>
                  <a href="/programs" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition">
                    Explore Our Programs
                  </a>
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