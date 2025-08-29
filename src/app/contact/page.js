"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Send, Check, ChevronDown, AlertCircle, User, MessageSquare, FileText, Users } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    reason: 'General Inquiry'
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    // Reset after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-green-700 to-emerald-500 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <pattern id="pattern-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-grid)" />
          </svg>
        </div>
        
        {/* Floating Elements - Decorative */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-10 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Forest icon */}
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 w-64 h-64 opacity-10">
          <Image
            src="/forest-svgrepo-com.svg"
            alt="Forest"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-green-100 border border-green-200 mb-4 px-3 py-1 rounded-full animate-fadeInUp">
              <span className="text-xs font-bold tracking-wider text-green-800 uppercase">Let&apos;s Connect</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '400ms' }}>
              Have questions or want to get involved? We&apos;d love to hear from you!
              Reach out to our team for inquiries, collaborations, or support.
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 w-full h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Contact Methods */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mail className="w-6 h-6 text-green-1000" />,
                  title: "Email Us",
                  description: "Get a response within 24 hours",
                  info: "info@ecocarealliance.org",
                  action: "Send Email",
                  href: "mailto:info@ecocarealliance.org",
                  color: "bg-green-50 border border-green-100"
                },
                {
                  icon: <Phone className="w-6 h-6 text-emerald-600" />,
                  title: "Call Us",
                  description: "Mon-Fri from 9AM to 5PM",
                  info: "+255 763 729 580",
                  action: "Call Now",
                  href: "tel:+255763729580",
                  color: "bg-emerald-50 border border-emerald-100"
                },
                {
                  icon: <MapPin className="w-6 h-6 text-lime-600" />,
                  title: "Visit Us",
                  description: "Our office location",
                  info: "Biharamulo District, Kagera, Tanzania",
                  action: "Get Directions",
                  href: "#map",
                  color: "bg-lime-50 border border-lime-100"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`${item.color} rounded-xl p-8 text-center hover:shadow-md transition-all duration-300 flex flex-col items-center animate-fadeIn hover:-translate-y-1`}
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="bg-white p-4 rounded-full shadow-sm mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 mb-4">{item.description}</p>
                  <div className="font-bold text-lg mb-5">{item.info}</div>
                  <a 
                    href={item.href} 
                    className="inline-block bg-white border border-gray-300 hover:border-gray-400 transition-colors px-6 py-2 rounded-full text-sm font-medium"
                  >
                    {item.action}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Information */}
              <div className="md:col-span-2 space-y-8">
                <div className="bg-green-50 border border-green-100 p-8 rounded-2xl animate-fadeIn" style={{ animationDelay: '450ms' }}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <MapPin className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Office Location</h3>
                        <p className="text-gray-600 mt-1">
                          Biharamulo District<br />
                          Kagera Region<br />
                          Tanzania
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <Phone className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Phone Number</h3>
                        <p className="text-gray-600 mt-1">+255 763 729 580</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <Mail className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Email Address</h3>
                        <p className="text-gray-600 mt-1">info@ecocarealliance.org</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <Clock className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Working Hours</h3>
                        <p className="text-gray-600 mt-1">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="bg-white border border-gray-100 p-8 rounded-2xl animate-fadeIn" style={{ animationDelay: '600ms' }}>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us</h2>
                  <p className="text-gray-600 mb-5">
                    Follow us on social media to stay updated with our latest projects, 
                    events, and initiatives.
                  </p>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Facebook', color: 'bg-green-500 hover:bg-green-600' },
                      { name: 'Twitter', color: 'bg-green-600 hover:bg-green-700' },
                      { name: 'Instagram', color: 'bg-emerald-600 hover:bg-emerald-700' },
                      { name: 'LinkedIn', color: 'bg-emerald-700 hover:bg-emerald-800' }
                    ].map((platform) => (
                      <a
                        key={platform.name}
                        href="#"
                        className={`${platform.color} w-12 h-12 rounded-full text-white flex items-center justify-center transition-colors`}
                      >
                        <span className="sr-only">{platform.name}</span>
                        {/* Social icon would go here */}
                        <span className="text-sm font-bold">{platform.name.charAt(0)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fadeIn" style={{ animationDelay: '750ms' }}>
                  <div className="flex items-center mb-8">
                    <div className="bg-green-100 p-3 rounded-xl mr-4">
                      <MessageSquare className="w-7 h-7 text-green-700" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
                      <p className="text-gray-500">We&apos;ll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  {/* Success Message */}
                  {showSuccess && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-center animate-fadeIn">
                      <div className="bg-green-100 p-1 rounded-full mr-3">
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <p>Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                        Reason for Contact
                      </label>
                      <div className="relative">
                        <select
                          id="reason"
                          name="reason"
                          value={formData.reason}
                          onChange={handleChange}
                          className="appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Partnership">Partnership Opportunity</option>
                          <option value="Volunteer">Volunteering</option>
                          <option value="Donation">Donation</option>
                          <option value="Media">Media Inquiry</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <FileText className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Brief description of your inquiry"
                          className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="privacy" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" required />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Privacy Policy</a> and consent to be contacted regarding my inquiry.
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div id="map" className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-full h-96 bg-green-50 border border-green-100 rounded-2xl relative overflow-hidden animate-fadeIn" style={{ animationDelay: '1050ms' }}>
                {/* Map background with SVG overlay */}
                <div className="absolute inset-0">
                  <Image 
                    src="/hero.jpg" 
                    alt="Map location" 
                    fill
                    className="object-cover opacity-30"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-green-700" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">EcoCare Alliance Foundation</h3>
                    <p className="text-gray-600">Biharamulo District, Kagera Region, Tanzania</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="bg-green-50 py-16 animate-fadeIn" style={{ animationDelay: '900ms' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find quick answers to common questions about our organization and services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How can I volunteer with EcoCare Alliance?",
                answer: "We welcome volunteers in various capacities. You can fill out our volunteer application form online or contact us directly through email or phone to discuss volunteer opportunities that match your skills and interests."
              },
              {
                question: "How are donations to EcoCare Alliance used?",
                answer: "Donations are directly used to fund our healthcare initiatives, environmental projects, and community development programs in Tanzania. We maintain transparency about fund allocation and provide reports to our donors."
              },
              {
                question: "Can organizations partner with EcoCare Alliance?",
                answer: "Yes, we actively seek partnerships with organizations that share our values and goals. We collaborate with NGOs, government agencies, businesses, and educational institutions on various projects and initiatives."
              },
              {
                question: "How can I stay updated on EcoCare Alliance's activities?",
                answer: "You can subscribe to our newsletter, follow us on social media platforms, or visit our website regularly for updates on our programs, events, and impact stories."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="mb-6 bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden hover:border-green-200 transition-colors animate-fadeIn" 
                style={{ animationDelay: `${(index + 6) * 150}ms` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Don&apos;t see your question here?</p>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Our Support Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
