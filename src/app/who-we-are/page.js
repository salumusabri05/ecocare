"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Shield, Leaf, Users, Lightbulb, Eye, Target, Linkedin, Twitter, Mail } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function WhoWeAre() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('display_order', { ascending: true })
          .order('created_at', { ascending: false });

        if (error) {
          setTeam([]);
          return;
        }
        setTeam(data || []);
      } catch (err) {
        setTeam([]);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);

  // Default founding members to show if database list is empty or as an executive committee
  const founders = [
    { name: "Karim M. Abdallah", role: "Chairman", bio: "Leading the foundation with strategic oversight and a vision for health equity." },
    { name: "Rashid M. Karubandika", role: "Treasurer", bio: "Managing financial accountability and resource mobilization." },
    { name: "Sabri S. Shabani", role: "Secretary", bio: "Coordinating operations and community partnerships." },
    { name: "Abdul H. Hashim", role: "Board Member", bio: "Guiding public health initiatives and project implementation." }
  ];

  return (
    <div className="font-sans bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/approach/ecocare.jpg" 
            alt="SmartCare Africa Foundation team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/95 via-[var(--primary)]/80 to-[var(--primary-light)]/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">Who We Are</h1>
            <p className="text-lg text-white/95 max-w-xl leading-relaxed">
              A dedicated team working towards a healthier and more sustainable Tanzania since 2025.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          
          {/* About Section */}
          <section id="about-us" className="max-w-6xl mx-auto mb-28 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/approach/ecocare1.jpg" 
                    alt="SmartCare Africa team outreach in Biharamulo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-[var(--accent)] p-5 rounded-xl shadow-lg hidden md:block text-[var(--primary-dark)]">
                  <span className="text-xs font-bold block uppercase tracking-wider">Established</span>
                  <div className="text-4xl font-extrabold">2025</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-dark)] mb-4">About SmartCare Africa Foundation</h2>
              <div className="w-16 h-1.5 bg-[var(--accent)] mb-6 rounded-full"></div>
              <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">
                SmartCare Africa Foundation is a registered NGO in Tanzania (Reg. No. 00NGO/R/8467)
                that works at the intersection of human health and environmental sustainability. Our work aims to improve 
                community well-being while protecting the planet for future generations.
              </p>
              <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">
                The Foundation was established to confront public health emergencies and environmental challenges 
                in Biharamulo District, Kagera Region — including the aftermath of the Marburg virus outbreak, 
                endemic sanitation-related diseases, and cultural barriers to modern healthcare practices.
              </p>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Through targeted interventions, we raise awareness, reduce health disparities, and provide essential 
                services to affected communities — fostering a healthier and more resilient society.
              </p>
            </div>
          </section>

          {/* Vision & Mission */}
          <section id="vision-mission" className="py-20 bg-[var(--surface)] rounded-3xl max-w-7xl mx-auto mb-28 border border-[var(--border)]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-2">Vision & Mission</h2>
                <div className="w-16 h-1 bg-[var(--accent)] mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border-light)] hover:shadow-md transition-all duration-300">
                  <div className="bg-[var(--primary)] w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    <Eye className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Our Vision</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    A healthy and sustainable future where every person has access to healthcare and lives 
                    in harmony with nature — promoting clean air, safe water, nutritious food, and quality healthcare.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--border-light)] hover:shadow-md transition-all duration-300">
                  <div className="bg-[var(--accent)] w-14 h-14 rounded-full flex items-center justify-center mb-5">
                    <Target className="h-7 w-7 text-[var(--primary-dark)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Our Mission</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    To provide healthcare services, promote health education, champion environmental conservation, 
                    and empower communities through sustainable initiatives.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Team Members Section */}
          <section id="team" className="max-w-6xl mx-auto mb-28">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-2">Our Team</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-5 rounded-full"></div>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Meet the dedicated professionals driving SmartCare Africa&apos;s healthcare and environmental programs.
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="skeleton h-80 rounded-2xl"></div>
                ))}
              </div>
            ) : team.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {team.map((member) => (
                  <div key={member.id} className="group bg-white rounded-2xl overflow-hidden border border-[var(--border-light)] hover:border-[var(--primary)]/20 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="h-64 relative bg-[var(--surface)] overflow-hidden">
                      {member.image_url ? (
                        <img 
                          src={member.image_url} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-green-50 text-[var(--primary)]">
                          <Users className="w-16 h-16 opacity-35" />
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[var(--primary-dark)] text-lg leading-tight">{member.name}</h3>
                      <p className="text-[var(--primary)] font-semibold text-xs mt-1 uppercase tracking-wider">{member.role}</p>
                      {member.bio && (
                        <p className="text-sm text-[var(--text-muted)] mt-3 line-clamp-3 leading-relaxed">{member.bio}</p>
                      )}
                      
                      {/* Socials */}
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[var(--border-light)]">
                        {member.linkedin_url && (
                          <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.twitter_url && (
                          <a href={member.twitter_url} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        <a href="mailto:info@smartcareafrica.org" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback to Founding Executive Members if no staff entered in DB yet */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {founders.map((member, i) => (
                  <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-[var(--border-light)] shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="h-64 bg-[var(--surface)] flex items-center justify-center text-[var(--primary)]">
                      <Users className="w-16 h-16 opacity-35" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[var(--primary-dark)] text-lg leading-tight">{member.name}</h3>
                      <p className="text-[var(--primary)] font-semibold text-xs mt-1 uppercase tracking-wider">{member.role}</p>
                      <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">{member.bio}</p>
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[var(--border-light)]">
                        <a href="mailto:info@smartcareafrica.org" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Strategic Objectives */}
          <section id="objectives" className="max-w-6xl mx-auto mb-28">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-2">Strategic Objectives</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Provide free or affordable healthcare services to disadvantaged populations.",
                "Promote health education and awareness campaigns on hygiene, nutrition, maternal health, and disease prevention.",
                "Support mental health initiatives and improve access to mental health services.",
                "Reduce health disparities and promote health equity across communities.",
                "Advocate for policy changes that support access to healthcare, especially for affected communities.",
                "Collaborate with organizations, governments, and institutions to improve public health outcomes."
              ].map((desc, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-[var(--border-light)] border-l-4 border-l-[var(--primary)] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-[var(--surface)] rounded-full flex items-center justify-center mb-3 text-sm font-bold text-[var(--primary)]">
                    {index + 1}
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Values */}
          <section id="core-values" className="max-w-6xl mx-auto mb-28">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-2">Our Core Values</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-5 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Compassion", desc: "Serving humanity with care and empathy, putting people's needs at the heart of our work.", icon: Heart, bg: "bg-red-50 text-red-600" },
                { title: "Integrity", desc: "Maintaining transparency and accountability in all our actions and decisions.", icon: Shield, bg: "bg-blue-50 text-blue-600" },
                { title: "Sustainability", desc: "Protecting the environment for future generations through responsible practices.", icon: Leaf, bg: "bg-green-50 text-green-600" },
                { title: "Collaboration", desc: "Partnering with communities, organizations and institutions to achieve shared goals.", icon: Users, bg: "bg-purple-50 text-purple-600" },
                { title: "Innovation", desc: "Developing creative solutions for health and environmental challenges.", icon: Lightbulb, bg: "bg-yellow-50 text-yellow-600" }
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white p-7 rounded-2xl border border-[var(--border-light)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`${value.bg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-2">{value.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Governance Structure */}
          <section className="relative py-20 bg-[var(--surface)] rounded-3xl max-w-7xl mx-auto mb-16 border border-[var(--border)]">
            <div className="container mx-auto px-6">
              <div className="text-center mb-14">
                <div className="inline-block bg-[var(--primary)]/10 px-4 py-1 rounded-full mb-3">
                  <span className="text-xs font-bold tracking-wider text-[var(--primary)] uppercase">Governance</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-2">Governance & Accountability</h2>
                <div className="w-16 h-1 bg-[var(--accent)] mx-auto mb-5 rounded-full"></div>
                <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                  Our 30-article constitution ensures robust governance, financial transparency, and democratic decision-making.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { title: "Office Bearers", desc: "Chairman, Secretary, and Treasurer elected by General Meeting for 3-year terms", icon: Users },
                  { title: "Board of Directors", desc: "8-member board providing governance, strategic planning, and operational oversight", icon: Shield },
                  { title: "Financial Controls", desc: "Dual-signature bank account requirement — at least 2 of 3 signatories per transaction", icon: Target },
                  { title: "National Scope", desc: "Authorized to operate at the national level across Tanzania with Biharamulo as home base", icon: Leaf }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--border-light)] hover:shadow-md transition-all duration-300">
                      <div className="bg-[var(--primary)]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-[var(--primary)]" />
                      </div>
                      <h3 className="text-base font-bold text-[var(--primary-dark)] mb-2">{item.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}