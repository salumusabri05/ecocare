"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const FeaturedProjects = () => {
  const [isInView, setIsInView] = useState(true);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('id, title, description, category, slug, created_at, impact_metrics')
          .order('created_at', { ascending: false })
          .limit(3);

        const defaultImages = [
          "/approach/ecocare.jpg",
          "/approach/ecocare1.jpg",
          "/eco.jpeg"
        ];

        if (error) {
          // If query fails, silently set fallback data
          setProjects([
            {
              id: 'fallback-proj-1',
              title: 'Community Public Health Initiative',
              description: 'Bringing medical screening, vaccinations, and maternal wellness workshops directly to remote settlements in the Kagera Region.',
              ctaText: 'Explore Health Programs',
              image: '/approach/ecocare.jpg'
            },
            {
              id: 'fallback-proj-2',
              title: 'Ecosystem Restoration & Sustainable Farming',
              description: 'Training farmers in eco-friendly agricultural techniques and executing mass tree planting to protect Biharamulo water basins.',
              ctaText: 'Learn About Eco Projects',
              image: '/eco.jpeg'
            }
          ]);
          return;
        }
        
        let formattedData = [];
        if (data && data.length > 0) {
          formattedData = data.map((item, index) => {
            const metrics = item.impact_metrics || {};
            return {
              id: item.id,
              title: item.title,
              description: item.description,
              ctaText: metrics.cta_text || "Explore the Program",
              image: metrics.image_url || defaultImages[index % defaultImages.length],
            };
          });
        } else {
          // Clean premium fallback projects
          formattedData = [
            {
              id: 'fallback-proj-1',
              title: 'Community Public Health Initiative',
              description: 'Bringing medical screening, vaccinations, and maternal wellness workshops directly to remote settlements in the Kagera Region.',
              ctaText: 'Explore Health Programs',
              image: '/approach/ecocare.jpg'
            },
            {
              id: 'fallback-proj-2',
              title: 'Ecosystem Restoration & Sustainable Farming',
              description: 'Training farmers in eco-friendly agricultural techniques and executing mass tree planting to protect Biharamulo water basins.',
              ctaText: 'Learn About Eco Projects',
              image: '/eco.jpeg'
            }
          ];
        }
        
        setProjects(formattedData);
      } catch (err) {
        // Silently set fallback data on exception
        setProjects([
          {
            id: 'fallback-proj-1',
            title: 'Community Public Health Initiative',
            description: 'Bringing medical screening, vaccinations, and maternal wellness workshops directly to remote settlements in the Kagera Region.',
            ctaText: 'Explore Health Programs',
            image: '/approach/ecocare.jpg'
          },
          {
            id: 'fallback-proj-2',
            title: 'Ecosystem Restoration & Sustainable Farming',
            description: 'Training farmers in eco-friendly agricultural techniques and executing mass tree planting to protect Biharamulo water basins.',
            ctaText: 'Learn About Eco Projects',
            image: '/eco.jpeg'
          }
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);



  if (loading) {
    return (
      <section className="py-12 md:py-14 bg-white border-b border-[var(--border-light)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="animate-pulse space-y-4">
            <div className="skeleton h-8 w-48"></div>
            <div className="grid lg:grid-cols-2 gap-6 mt-8">
              <div className="skeleton h-64 rounded-2xl"></div>
              <div className="skeleton h-64 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) return null;

  return (
    <section id="featured-projects-section" className="py-12 md:py-14 bg-white border-b border-[var(--border-light)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className={`mb-10 transition-all duration-700 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary-dark)] mb-3 tracking-tight">
            Featured Programs
          </h2>
          <div className="w-16 h-1 bg-[var(--accent)] rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* First Project — Large */}
          <div className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[var(--border)] ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '150ms' }}>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/45 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                <div className="text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-tight">
                    {projects[0].title}
                  </h3>
                  <p className="text-white/90 mb-5 leading-relaxed max-w-lg text-sm sm:text-base">
                    {projects[0].description}
                  </p>
                  <a 
                    href="/programs" 
                    className="inline-flex items-center space-x-2 text-[var(--accent-light)] hover:text-[var(--accent)] font-bold transition-all duration-300 group/btn"
                  >
                    <span className="border-b-2 border-transparent group-hover/btn:border-[var(--accent)] pb-0.5">
                      {projects[0].ctaText}
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — stacked */}
          <div className="flex flex-col gap-8">
            {projects.slice(1).map((project, index) => (
              <div 
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex-1 border border-[var(--border)] ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} 
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="relative h-64 lg:h-full min-h-[200px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/90 via-[var(--primary-dark)]/45 to-transparent"></div>
                  
                  <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/85 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <a 
                        href="/programs" 
                        className="inline-flex items-center space-x-1.5 text-[var(--accent-light)] hover:text-[var(--accent)] font-bold text-sm transition-all duration-300 group/btn"
                      >
                        <span className="border-b-2 border-transparent group-hover/btn:border-[var(--accent)] pb-0.5">
                          {project.ctaText}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;