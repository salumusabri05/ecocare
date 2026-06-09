"use client";

import React, { useState, useEffect } from 'react';
import { Leaf, ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, is_active: true }]);
      
      if (error) {
        if (error.code === '23505') {
          setSubscribeStatus('already');
        } else {
          throw error;
        }
      } else {
        setSubscribeStatus('success');
        setEmail('');
      }
      setTimeout(() => setSubscribeStatus(''), 4000);
    } catch (err) {
      console.error(err);
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus(''), 4000);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector('.scroll-top-button');
      if (btn) {
        if (window.scrollY > 300) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerLinks = {
    programs: [
      { name: 'About Us', href: '/who-we-are' },
      { name: 'Healthcare Programs', href: '/programs#healthcare' },
      { name: 'Environmental Projects', href: '/programs#environmental' },
      { name: 'Community Outreach', href: '/programs#community' }
    ],
    resources: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Resource Center', href: '/resource-center' },
      { name: 'News & Updates', href: '/resource-center#news' },
      { name: 'Donate & Support', href: '/contact' }
    ]
  };

  return (
    <footer className="relative bg-[var(--primary-darker)] text-white overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-48 h-48 border border-white rounded-full"></div>
      </div>

      {/* Newsletter Bar — JMKF inspired layout */}
      <div className="bg-[var(--primary-dark)] border-b border-white/5 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Join Our Newsletter</h3>
              <p className="text-white/70 text-sm">Subscribe to receive regular updates on health, environment, and outreach programs.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full sm:w-80 px-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm transition-all"
              />
              <button 
                type="submit" 
                className="px-8 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-[var(--primary-dark)] font-bold rounded-lg transition-all duration-300 text-sm flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
              >
                <Mail className="w-4 h-4" />
                Subscribe Now
              </button>
            </form>
          </div>
          
          {subscribeStatus && (
            <div className="max-w-5xl mx-auto mt-4">
              <p className={`text-sm text-center lg:text-right font-medium ${
                subscribeStatus === 'success' ? 'text-green-400' :
                subscribeStatus === 'already' ? 'text-[var(--accent)]' :
                'text-red-400'
              }`}>
                {subscribeStatus === 'success' ? '✓ Thank you! Subscribed successfully.' :
                 subscribeStatus === 'already' ? 'You are already subscribed to our newsletter.' :
                 'Error subscribing. Please try again later.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            
            {/* Logo + Description */}
            <div className="lg:w-2/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[var(--accent)]/30 shadow-lg">
                  <Image src="/logo/logo.jpg" alt="SmartCare Africa Logo" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">SmartCare Africa</h3>
                  <p className="text-[var(--accent)] text-xs font-bold tracking-[0.2em] uppercase mt-0.5">Foundation</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-8 max-w-sm text-sm">
                A registered Tanzanian NGO connecting human health and environmental preservation to secure a resilient, healthy future for local communities.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white font-bold rounded-lg transition-all duration-300 text-sm shadow-md hover:shadow-lg"
              >
                <Heart className="w-4 h-4 text-[var(--accent)]" /> 
                <span>Support Our Mission</span>
              </a>
            </div>

            {/* Links Columns */}
            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Programs links */}
              <div>
                <h4 className="text-sm font-bold text-white mb-6 relative pb-3 uppercase tracking-wider">
                  Our Programs
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[var(--accent)]"></div>
                </h4>
                <ul className="space-y-4">
                  {footerLinks.programs.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-white/60 hover:text-[var(--accent)] transition-colors text-sm flex items-center group">
                        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick links */}
              <div>
                <h4 className="text-sm font-bold text-white mb-6 relative pb-3 uppercase tracking-wider">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[var(--accent)]"></div>
                </h4>
                <ul className="space-y-4">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-white/60 hover:text-[var(--accent)] transition-colors text-sm flex items-center group">
                        <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacts */}
              <div>
                <h4 className="text-sm font-bold text-white mb-6 relative pb-3 uppercase tracking-wider">
                  Contact Info
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[var(--accent)]"></div>
                </h4>
                <div className="space-y-4 text-sm text-white/70">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <p className="leading-relaxed">
                      Mankorongo Street,<br />
                      Biharamulo District,<br />
                      Kagera Region, Tanzania<br />
                      P.O. Box 70
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                    <a href="mailto:info@smartcareafrica.org" className="hover:text-white transition-colors">
                      info@smartcareafrica.org
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                    <a href="tel:+255763729580" className="hover:text-white transition-colors">
                      +255 763 729 580
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal / Bottom footer */}
          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-white/40">
              <div className="text-center lg:text-left leading-relaxed">
                <p>© {new Date().getFullYear()} SmartCare Africa Foundation. All rights reserved.</p>
                <p className="mt-1">Registered NGO in Tanzania under the Non-Governmental Organizations Act, No. 24 of 2002 | Reg. No. 00NGO/R/8467</p>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/admin" className="hover:text-white transition-colors">Admin Portal</a>
                <span>|</span>
                <span>Biharamulo, Kagera, Tanzania</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={scrollToTop} 
          className="w-12 h-12 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center border border-white/10 hover:scale-105 scroll-top-button"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Flag decoration border */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]"></div>
    </footer>
  );
};

export default Footer;