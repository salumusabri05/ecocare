"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Leaf, Users, ArrowRight, Droplets, TreePine, GraduationCap, Activity, ShieldCheck, HandHeart } from 'lucide-react';

export default function Programs() {
  return (
    <div className="font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/eco.jpeg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/90 to-[var(--secondary)]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Our Programs</h1>
            <p className="text-lg text-white/85 max-w-xl leading-relaxed">
              Focused interventions in healthcare, environmental conservation, and community 
              empowerment — creating lasting impact across Tanzania.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,250.7C840,256,960,224,1080,202.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-white">
        <div className="container mx-auto px-4">
          
          {/* SECTION 1 — Healthcare */}
          <section id="healthcare" className="max-w-7xl mx-auto mb-28">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[var(--secondary)]">
                  Healthcare Initiatives
                </h2>
                <div className="w-16 h-1 bg-[var(--accent)] rounded-full"></div>

                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  We provide free or affordable healthcare services to disadvantaged populations in Biharamulo District — 
                  addressing the critical public health challenges faced by communities, including the aftermath of the 
                  Marburg virus outbreak and endemic sanitation-related diseases.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Activity, title: "Health Screenings", desc: "Community-based medical checkups and early disease detection" },
                    { icon: ShieldCheck, title: "Disease Prevention", desc: "Health education on hygiene, nutrition, maternal health, and disease prevention" },
                    { icon: Heart, title: "Mental Health", desc: "Supporting mental health initiatives and improving access to mental health services" }
                  ].map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4 bg-[var(--surface)] p-4 rounded-xl border border-[var(--border-light)] hover:shadow-sm transition-all">
                        <div className="bg-[var(--primary)]/10 p-2.5 rounded-lg flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-[var(--primary)]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--secondary)] mb-1">{item.title}</h4>
                          <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/approach/ecocare.jpg" 
                    alt="Healthcare program in Biharamulo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg border border-[var(--border-light)] hidden md:flex items-center gap-4">
                  <div className="bg-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--secondary)]">Give Life Campaign</p>
                    <p className="text-xs text-[var(--text-muted)]">Blood Donation Initiative</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 — Environmental */}
          <section id="environmental" className="max-w-7xl mx-auto mb-28">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/eco.jpeg" 
                    alt="Environmental conservation in Kagera Region" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg border border-[var(--border-light)] hidden md:flex items-center gap-4">
                  <div className="bg-[var(--primary)] w-12 h-12 rounded-full flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--secondary)]">Reforestation</p>
                    <p className="text-xs text-[var(--text-muted)]">Tree planting & conservation</p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-4xl font-bold text-[var(--secondary)]">
                  Environmental Projects
                </h2>
                <div className="w-16 h-1 bg-[var(--accent)] rounded-full"></div>
                
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  Our environmental work focuses on addressing the ecological challenges in Kagera Region — 
                  from deforestation and soil degradation to waste management — by empowering communities with 
                  the knowledge and tools for sustainable living.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: TreePine, title: "Reforestation", desc: "Tree planting campaigns to restore degraded landscapes and promote biodiversity" },
                    { icon: Droplets, title: "Clean Water & Waste", desc: "Waste management and clean-up campaigns for healthier communities" },
                    { icon: Leaf, title: "Sustainable Agriculture", desc: "Training communities in eco-friendly farming practices for food security" }
                  ].map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4 bg-[var(--surface)] p-4 rounded-xl border border-[var(--border-light)] hover:shadow-sm transition-all">
                        <div className="bg-[var(--primary)]/10 p-2.5 rounded-lg flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-[var(--primary)]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--secondary)] mb-1">{item.title}</h4>
                          <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 — Community */}
          <section id="community" className="max-w-7xl mx-auto mb-28">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[var(--secondary)]">
                  Community Campaigns
                </h2>
                <div className="w-16 h-1 bg-[var(--accent)] rounded-full"></div>
                
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                  We empower communities through targeted campaigns that tackle cultural barriers to 
                  healthcare, build youth and women&apos;s leadership, and create platforms for dialogue 
                  and collective action.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: HandHeart, title: '"Give Life" Campaign', desc: "Our flagship blood donation campaign addressing critical blood supply shortages" },
                    { icon: GraduationCap, title: "Youth Empowerment", desc: "Building leadership capacity and skills in young people across the district" },
                    { icon: Users, title: "Women Empowerment", desc: "Supporting women through economic and health empowerment programs" }
                  ].map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4 bg-[var(--surface)] p-4 rounded-xl border border-[var(--border-light)] hover:shadow-sm transition-all">
                        <div className="bg-[var(--secondary)]/10 p-2.5 rounded-lg flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-[var(--secondary)]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[var(--secondary)] mb-1">{item.title}</h4>
                          <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/approach/ecocare1.jpg" 
                    alt="Community engagement program" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] py-16 rounded-3xl max-w-6xl mx-auto mb-16 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-60 h-60 bg-white rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Support Our Programs</h2>
                <p className="text-white/80 text-lg mb-8">
                  Your support helps us continue delivering healthcare, environmental conservation, and 
                  community empowerment programs in Tanzania.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/contact" className="px-7 py-3 bg-white text-[var(--primary)] rounded-full font-bold hover:bg-[var(--accent-light)] hover:text-[var(--secondary)] transition-all shadow-lg">
                    Support Us
                  </a>
                  <a href="/contact" className="px-7 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all">
                    Contact Our Team
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