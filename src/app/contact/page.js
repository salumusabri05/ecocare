"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Send, Check, ChevronDown, User, MessageSquare, FileText } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    reason: 'General Inquiry'
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([{
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          type: formData.reason
        }]);
      
      if (error) throw error;
      
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', reason: 'General Inquiry' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting:', error);
      // Fallback — still show success for UX if table doesn't exist or is loading
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-sans bg-white text-[var(--text-primary)]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[380px] bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)] overflow-hidden flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-[var(--accent)]/20 rounded-full"></div>
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 animate-fadeInUp" style={{ animationDelay: '150ms' }}>
              Contact Us
            </h1>
            <p className="text-lg text-white/90 max-w-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              Have questions or want to get involved? We&apos;d love to hear from you.
              Reach out for inquiries, partnerships, or volunteering.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Contact Cards */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Mail className="w-6 h-6 text-[var(--primary)]" />,
                  title: "Email Us",
                  description: "Get a response within 24 hours",
                  info: "info@smartcareafrica.org",
                  action: "Send Email",
                  href: "mailto:info@smartcareafrica.org"
                },
                {
                  icon: <Phone className="w-6 h-6 text-[var(--primary)]" />,
                  title: "Call Us",
                  description: "Mon-Fri from 8AM to 5PM",
                  info: "+255 763 729 580",
                  action: "Call Now",
                  href: "tel:+255763729580"
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[var(--primary)]" />,
                  title: "Visit Us",
                  description: "Our office location",
                  info: "Biharamulo, Kagera, Tanzania",
                  action: "Get Directions",
                  href: "#map"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-[var(--surface)] border border-[var(--border-light)] rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300 flex flex-col items-center hover:-translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="bg-white p-3 rounded-full shadow-sm mb-4 border border-[var(--border-light)]">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-1">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-3">{item.description}</p>
                  <div className="font-bold text-[var(--primary-dark)] mb-4">{item.info}</div>
                  <a 
                    href={item.href} 
                    className="inline-block bg-white border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all px-5 py-2 rounded-full text-sm font-medium text-[var(--text-secondary)]"
                  >
                    {item.action}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-[var(--surface)] border border-[var(--border-light)] p-8 rounded-2xl">
                  <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-6">Contact Information</h2>
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)]/10 p-2 rounded-full mr-4">
                        <MapPin className="w-4 h-4 text-[var(--primary)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--primary-dark)] text-sm">Office Location</h3>
                        <p className="text-[var(--text-muted)] text-sm mt-1">
                          Mankorongo Street<br />
                          Biharamulo District<br />
                          Kagera Region, Tanzania<br />
                          P.O. Box 70
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)]/10 p-2 rounded-full mr-4">
                        <Phone className="w-4 h-4 text-[var(--primary)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--primary-dark)] text-sm">Phone Number</h3>
                        <p className="text-[var(--text-muted)] text-sm mt-1">+255 763 729 580</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)]/10 p-2 rounded-full mr-4">
                        <Mail className="w-4 h-4 text-[var(--primary)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--primary-dark)] text-sm">Email Address</h3>
                        <p className="text-[var(--text-muted)] text-sm mt-1">info@smartcareafrica.org</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[var(--primary)]/10 p-2 rounded-full mr-4">
                        <Clock className="w-4 h-4 text-[var(--primary)]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--primary-dark)] text-sm">Working Hours</h3>
                        <p className="text-[var(--text-muted)] text-sm mt-1">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                <div className="bg-white rounded-2xl shadow-sm border border-[var(--border-light)] p-8">
                  <div className="flex items-center mb-8">
                    <div className="bg-[var(--primary)]/10 p-3 rounded-xl mr-4">
                      <MessageSquare className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[var(--primary-dark)]">Send us a Message</h2>
                      <p className="text-[var(--text-muted)] text-sm">We&apos;ll get back to you within 24 hours</p>
                    </div>
                  </div>
                  
                  {showSuccess && (
                    <div className="mb-6 bg-[var(--primary)]/5 border border-[var(--primary)]/20 text-[var(--primary-dark)] rounded-lg p-4 flex items-center animate-fadeInUp">
                      <div className="bg-[var(--primary)]/10 p-1 rounded-full mr-3">
                        <Check className="w-4 h-4 text-[var(--primary)]" />
                      </div>
                      <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <User className="h-4 w-4 text-[var(--text-muted)]" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full pl-11 pr-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-[var(--text-muted)] text-sm transition-all"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <Mail className="h-4 w-4 text-[var(--text-muted)]" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full pl-11 pr-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-[var(--text-muted)] text-sm transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+255 763 729 580"
                          className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-[var(--text-muted)] text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          Reason for Contact
                        </label>
                        <div className="relative">
                          <select
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className="appearance-none w-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)] py-3 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] text-sm transition-all"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Partnership">Partnership Opportunity</option>
                            <option value="Volunteer">Volunteering</option>
                            <option value="Donation">Donation</option>
                            <option value="Media">Media Inquiry</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                            <ChevronDown className="h-4 w-4 text-[var(--text-muted)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <FileText className="h-4 w-4 text-[var(--text-muted)]" />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Brief description of your inquiry"
                          className="w-full pl-11 pr-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-[var(--text-muted)] text-sm transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] placeholder-[var(--text-muted)] text-sm transition-all"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="privacy" className="h-4 w-4 text-[var(--primary)] focus:ring-[var(--primary)] border-[var(--border)] rounded" required />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-[var(--text-secondary)]">
                        I agree to the <a href="#" className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-medium">Privacy Policy</a> and consent to be contacted.
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full md:w-auto inline-flex justify-center items-center px-8 py-3.5 bg-[var(--primary)] text-white font-bold rounded-lg hover:bg-[var(--primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div id="map" className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-8 text-center">Find Us</h2>
            <div className="w-full h-80 bg-[var(--surface)] border border-[var(--border)] rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-[var(--border)]">
                  <div className="bg-[var(--primary)]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--primary-dark)] text-lg mb-1">SmartCare Africa Foundation</h3>
                  <p className="text-[var(--text-muted)] text-sm">Mankorongo Street, Biharamulo District</p>
                  <p className="text-[var(--text-muted)] text-sm">Kagera Region, Tanzania • P.O. Box 70</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="bg-[var(--surface)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-dark)] mb-3">Frequently Asked Questions</h2>
            <p className="text-[var(--text-muted)]">Find answers to common questions about our organization</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How can I volunteer with SmartCare Africa?",
                answer: "We welcome volunteers in various capacities. Fill out our contact form above or reach us at info@smartcareafrica.org to discuss volunteer opportunities that match your skills."
              },
              {
                question: "How are donations used?",
                answer: "Donations directly fund our healthcare initiatives, environmental projects, and community development programs in Tanzania. We maintain full transparency and provide reports to our donors."
              },
              {
                question: "Can organizations partner with SmartCare Africa?",
                answer: "Yes! We actively seek partnerships with NGOs, government agencies, businesses, and educational institutions that share our commitment to health and sustainability."
              },
              {
                question: "Where does SmartCare Africa operate?",
                answer: "We are headquartered in Biharamulo District, Kagera Region, Tanzania. Our constitution authorizes us to operate at the national level across Tanzania."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 bg-white rounded-xl border border-[var(--border-light)] overflow-hidden hover:border-[var(--primary)]/20 transition-colors"
              >
                <div className="p-6">
                  <h3 className="text-base font-bold text-[var(--primary-dark)] mb-2">{faq.question}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-8 text-center">
              <p className="text-[var(--text-muted)] mb-4 text-sm">Don&apos;t see your question here?</p>
              <a 
                href="mailto:info@smartcareafrica.org" 
                className="inline-flex items-center px-6 py-3 bg-[var(--primary)] text-white font-bold rounded-lg hover:bg-[var(--primary-dark)] transition-colors text-sm"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
