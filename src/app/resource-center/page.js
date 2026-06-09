"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, FileText, ArrowRight, BookOpen, Calendar, Mail, Download } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ResourceCenter() {
  const [recentPublications, setRecentPublications] = useState([]);
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [pubRes, newsRes] = await Promise.all([
          supabase.from('publications').select('*').order('created_at', { ascending: false }).limit(5),
          supabase.from('announcements').select('*').eq('is_active', true).order('created_at', { ascending: false }).limit(6)
        ]);

        if (pubRes.data?.length) {
          setRecentPublications(pubRes.data.map(r => ({
            title: r.title, 
            category: r.category, 
            date: new Date(r.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }), 
            size: r.file_size || "1.2 MB",
            url: r.file_url || "#"
          })));
        } else {
          setRecentPublications([
            {
              title: "SmartCare Africa Foundation Constitution & Charter",
              category: "Governance",
              date: "June 01, 2026",
              size: "2.4 MB",
              url: "#"
            },
            {
              title: "Strategic Action Plan 2025-2030 (Biharamulo & Kagera)",
              category: "Policy",
              date: "May 15, 2026",
              size: "4.1 MB",
              url: "#"
            },
            {
              title: "Annual Public Health & Hygiene Survey Report",
              category: "Report",
              date: "April 10, 2026",
              size: "1.8 MB",
              url: "#"
            }
          ]);
        }

        if (newsRes.data?.length) {
          setNewsUpdates(newsRes.data.map(r => ({
            id: r.id,
            title: r.title, 
            date: new Date(r.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }), 
            category: r.level || "Outreach",
            excerpt: r.content
          })));
        } else {
          setNewsUpdates([
            {
              id: 'fallback-news-1',
              title: 'Empowering Biharamulo Communities through Health Education Outreach',
              date: 'June 08, 2026',
              category: 'Healthcare',
              excerpt: 'Our recent outreach program in Kagera Region engaged over 500 residents on preventative health, hygiene practices, and disease control guidelines.'
            },
            {
              id: 'fallback-news-2',
              title: 'Reforestation Drive Restores 5 Hectares of Degraded Forest Land',
              date: 'June 02, 2026',
              category: 'Environment',
              excerpt: 'In collaboration with local schools, our team planted 2,500 native trees to restore key water catchment areas and promote ecological resilience.'
            },
            {
              id: 'fallback-news-3',
              title: 'SmartCare Launches "Give Life" Blood Donation Mobilization Campaign',
              date: 'May 24, 2026',
              category: 'Campaign',
              excerpt: 'Faced with local blood supply shortages, our team successfully mobilized youth volunteers to support emergency health reserves in Tanzanian hospitals.'
            }
          ]);
        }
      } catch (err) {
        setRecentPublications([
          {
            title: "SmartCare Africa Foundation Constitution & Charter",
            category: "Governance",
            date: "June 01, 2026",
            size: "2.4 MB",
            url: "#"
          },
          {
            title: "Strategic Action Plan 2025-2030 (Biharamulo & Kagera)",
            category: "Policy",
            date: "May 15, 2026",
            size: "4.1 MB",
            url: "#"
          }
        ]);
        setNewsUpdates([
          {
            id: 'fallback-news-1',
            title: 'Empowering Biharamulo Communities through Health Education Outreach',
            date: 'June 08, 2026',
            category: 'Healthcare',
            excerpt: 'Our recent outreach program in Kagera Region engaged over 500 residents on preventative health, hygiene practices, and disease control guidelines.'
          }
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: subscribeEmail, is_active: true }]);
      
      if (error) throw error;
      setSubscribeStatus('success');
      setSubscribeEmail('');
      setTimeout(() => setSubscribeStatus(''), 4000);
    } catch (err) {
      console.error(err);
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus(''), 4000);
    }
  };

  const filteredNews = newsUpdates.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans bg-white text-[var(--text-primary)]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[380px] bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)] overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="relative container mx-auto px-4 z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 animate-fadeInUp" style={{ animationDelay: '150ms' }}>
              Resource Center
            </h1>
            <p className="text-lg text-white/90 max-w-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              Access our publications, news updates, and educational materials to learn more about 
              our work and impact in healthcare and environmental conservation.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mt-8 animate-fadeInUp" style={{ animationDelay: '450ms' }}>
            <div className="flex items-center bg-white rounded-xl shadow-md p-1.5">
              <div className="pl-3">
                <Search className="text-[var(--text-muted)] w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Search news and stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-transparent border-none focus:outline-none text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]" 
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Recent Publications */}
          <section className="mb-24 max-w-6xl mx-auto">
            <div className="bg-[var(--surface-warm)] border border-[var(--border)] rounded-2xl p-8 sm:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--primary-dark)]">Recent Publications</h2>
                <div className="w-16 h-1 bg-[var(--accent)] mt-2 rounded-full"></div>
              </div>
              
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="skeleton h-12 w-full"></div>
                  ))}
                </div>
              ) : recentPublications.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-sm border border-[var(--border-light)]">
                    <thead className="bg-[var(--primary)]/5 border-b border-[var(--border)]">
                      <tr>
                        <th className="py-4 px-6 text-left text-sm font-bold text-[var(--primary-dark)]">Document Title</th>
                        <th className="py-4 px-6 text-left text-sm font-bold text-[var(--primary-dark)]">Category</th>
                        <th className="py-4 px-6 text-left text-sm font-bold text-[var(--primary-dark)]">Release Date</th>
                        <th className="py-4 px-6 text-right text-sm font-bold text-[var(--primary-dark)]">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border-light)]">
                      {recentPublications.map((pub, i) => (
                        <tr key={i} className="hover:bg-[var(--surface)] transition-colors">
                          <td className="py-4 px-6 text-sm font-semibold text-[var(--text-primary)]">{pub.title}</td>
                          <td className="py-4 px-6 text-sm text-[var(--text-muted)]">{pub.category}</td>
                          <td className="py-4 px-6 text-sm text-[var(--text-muted)]">{pub.date}</td>
                          <td className="py-4 px-6 text-right">
                            <a 
                              href={pub.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-bold text-sm"
                            >
                              <Download className="w-4 h-4 mr-1.5" />
                              <span>PDF ({pub.size})</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-[var(--border-light)]">
                  <FileText className="w-12 h-12 text-[var(--text-muted)] opacity-30 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-[var(--text-secondary)] mb-1">Publications & Reports</h3>
                  <p className="text-[var(--text-muted)] text-sm">Official newsletters and impact statements will be available here.</p>
                </div>
              )}
            </div>
          </section>

          {/* News & Updates Grid */}
          <section className="mb-24 max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[var(--primary-dark)]">News & Announcements</h2>
              <div className="w-16 h-1 bg-[var(--accent)] mt-2 rounded-full"></div>
            </div>
            
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="skeleton h-60 rounded-xl"></div>
                ))}
              </div>
            ) : filteredNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((news, index) => (
                  <article 
                    key={index} 
                    id={`news-${news.id}`}
                    className="bg-white rounded-2xl shadow-sm border border-[var(--border)] p-6 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block bg-[var(--primary)]/10 text-[var(--primary-dark)] text-xs font-bold px-3 py-1 rounded-full">
                          {news.category}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">{news.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-2 leading-snug">{news.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{news.excerpt}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-[var(--border-light)]">
                      <a href="mailto:info@smartcareafrica.org" className="text-xs font-bold text-[var(--primary)] hover:underline flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" />
                        <span>Inquire about this news</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[var(--surface)] rounded-2xl border border-[var(--border-light)]">
                <Calendar className="w-12 h-12 text-[var(--text-muted)] opacity-35 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[var(--text-secondary)] mb-1">No Updates Found</h3>
                <p className="text-[var(--text-muted)] text-sm">Please check back later or adjust your search query.</p>
              </div>
            )}
          </section>
          
          {/* Newsletter Box */}
          <section className="mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)] rounded-3xl overflow-hidden relative p-10 sm:p-12 shadow-md">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-60 h-60 bg-white rounded-full"></div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-3">Subscribe to updates</h2>
                  <p className="text-white/80 text-sm">
                    Subscribe to receive new resources, impact reports, and event updates directly in your inbox.
                  </p>
                </div>
                
                <div className="md:w-1/2 w-full">
                  <form onSubmit={handleSubscribe} className="bg-white/10 backdrop-blur-sm rounded-xl p-2 flex border border-white/20">
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-transparent border-none focus:outline-none text-white placeholder-white/40 text-sm"
                      required
                    />
                    <button type="submit" className="bg-[var(--accent)] text-[var(--primary-dark)] hover:bg-[var(--accent-light)] transition-colors px-6 py-3 rounded-lg font-bold whitespace-nowrap text-sm flex items-center gap-2 shadow-sm">
                      <Mail className="w-4 h-4" />
                      Subscribe
                    </button>
                  </form>
                  {subscribeStatus && (
                    <p className={`text-xs mt-2 text-center md:text-left font-bold ${
                      subscribeStatus === 'success' ? 'text-green-300' : 'text-red-300'
                    }`}>
                      {subscribeStatus === 'success' ? '✓ Subscribed successfully!' : 'Something went wrong. Please try again.'}
                    </p>
                  )}
                  <p className="text-white/50 text-[10px] mt-2 text-center md:text-left">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
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
