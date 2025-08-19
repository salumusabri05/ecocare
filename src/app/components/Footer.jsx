import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Leaf, ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700', url: '#' },
    { icon: Twitter, name: 'Twitter', color: 'bg-gray-800 hover:bg-gray-900', url: '#' },
    { icon: Instagram, name: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700', url: '#' },
    { icon: Youtube, name: 'YouTube', color: 'bg-red-600 hover:bg-red-700', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-800', url: '#' }
  ];

  const footerLinks = {
    programs: [
      { name: 'About Us', href: '#' },
      { name: 'Health Programs', href: '#' },
      { name: 'Youth Programs', href: '#' },
      { name: 'Agriculture Programs', href: '#' }
    ],
    resources: [
      { name: 'Contact', href: '#' },
      { name: 'Documents', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Donate', href: '#' }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/5 rounded-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Logo and Description */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">EcoCare</h3>
                <p className="text-red-200 text-sm">FOUNDATION</p>
              </div>
            </div>
            <p className="max-w-2xl mx-auto text-red-100 text-lg leading-relaxed">
              Catalysing change and improving the quality of lives across Africa through sustainable solutions 
              and community empowerment.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            {/* Programs Column */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6 relative">
                Our Programs
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-red-200 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6 relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400"></div>
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-red-200 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6 relative">
                Get in Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-red-200 text-sm">
                      Dar es Salaam, Tanzania<br />
                      East Africa Region
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-300 flex-shrink-0" />
                  <a href="mailto:info@ecocare.org" className="text-red-200 hover:text-white transition-colors text-sm">
                    info@ecocare.org
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-300 flex-shrink-0" />
                  <a href="tel:+255123456789" className="text-red-200 hover:text-white transition-colors text-sm">
                    +255 123 456 789
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-6 relative">
                Stay Updated
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-yellow-400"></div>
              </h4>
              <div className="space-y-4">
                <p className="text-red-200 text-sm">
                  Subscribe to our newsletter for the latest updates on our programs and impact.
                </p>
                <div className="flex flex-col space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-red-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-5 h-5 text-white" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-red-700 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm">
            <div className="text-red-200 text-center lg:text-left">
              <p className="mb-1">
                © 2025 | EcoCare is a registered trust and non-profit organization under the Trustees'
              </p>
              <p>
                Incorporation Act (Cap.318 R.E.2002) of Tanzania, with reg No.5410.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-red-200">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-red-500">|</span>
              <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                <span>Built by</span>
                <span className="text-yellow-400 hover:text-yellow-300 font-medium">Tanzlite Digital</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-50">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
        
        <button className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
          <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>
    </footer>
  );
};

export default Footer;