"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  Users, Calendar, Bell, Mail, Activity, AlertTriangle, 
  CheckCircle2, Clock, FileText, ChevronRight, Briefcase, BookOpen
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    announcements: 0,
    publications: 0,
    inquiries: 0
  });
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    setLoading(true);
    try {
      // Fetch counts concurrently
      const [projectsRes, announcementsRes, publicationsRes, inquiriesRes, recentInqRes] = await Promise.all([
        supabase.from('projects').select('*', { count: 'exact', head: true }),
        supabase.from('announcements').select('*', { count: 'exact', head: true }),
        supabase.from('publications').select('*', { count: 'exact', head: true }),
        supabase.from('contact_inquiries').select('*', { count: 'exact', head: true }),
        supabase.from('contact_inquiries').select('*').order('created_at', { ascending: false }).limit(5)
      ]);

      setStats({
        projects: projectsRes.count || 0,
        announcements: announcementsRes.count || 0,
        publications: publicationsRes.count || 0,
        inquiries: inquiriesRes.count || 0
      });

      if (recentInqRes.data) {
        setRecentInquiries(recentInqRes.data);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  }

  const statCards = [
    { title: 'Total Projects', value: stats.projects, icon: Briefcase, color: 'text-[var(--primary)]', bg: 'bg-[var(--primary)]/10' },
    { title: 'Active News', value: stats.announcements, icon: Bell, color: 'text-[var(--accent-dark)]', bg: 'bg-[var(--accent)]/10' },
    { title: 'Publications', value: stats.publications, icon: BookOpen, color: 'text-[var(--primary-light)]', bg: 'bg-[var(--primary-light)]/10' },
    { title: 'Inquiries', value: stats.inquiries, icon: Mail, color: 'text-indigo-600', bg: 'bg-indigo-50' }
  ];

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-[var(--border-light)] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">{stat.title}</h3>
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div className="flex items-baseline">
              {loading ? (
                <div className="h-10 w-20 bg-[var(--border-light)] rounded animate-pulse"></div>
              ) : (
                <span className="text-4xl font-extrabold text-[var(--primary-dark)]">{stat.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Inquiries */}
        <div className="lg:col-span-2 bg-white border border-[var(--border-light)] rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[var(--border-light)] flex items-center justify-between bg-[var(--surface)]/50">
            <h2 className="text-lg font-bold text-[var(--primary-dark)]">Recent Inquiries</h2>
            <Link href="/admin/inquiries" className="text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-dark)] flex items-center">
              View all <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="divide-y divide-[var(--border-light)]">
            {loading ? (
              <div className="p-8 text-center text-[var(--text-muted)]">Loading inquiries...</div>
            ) : recentInquiries.length === 0 ? (
              <div className="p-8 text-center text-[var(--text-muted)]">No recent inquiries</div>
            ) : (
              recentInquiries.map((inquiry) => (
                <div key={inquiry.id} className="p-6 hover:bg-[var(--surface-warm)]/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        {inquiry.is_resolved ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-[var(--accent-dark)]" />
                        )}
                      </div>
                      <span className="text-sm font-bold text-[var(--text-primary)]">{inquiry.full_name}</span>
                      <span className="text-xs text-[var(--text-muted)] bg-[var(--surface)] px-2.5 py-1 rounded-md font-semibold border border-[var(--border-light)]">
                        {inquiry.type ? inquiry.type.replace('_', ' ') : 'General'}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-muted)]">
                      {new Date(inquiry.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1 ml-8">{inquiry.subject}</p>
                  <p className="text-sm text-[var(--text-muted)] line-clamp-2 ml-8 leading-relaxed">{inquiry.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-[var(--border-light)] rounded-2xl shadow-sm overflow-hidden h-fit">
          <div className="p-6 border-b border-[var(--border-light)] bg-[var(--surface)]/50">
            <h2 className="text-lg font-bold text-[var(--primary-dark)]">Quick Actions</h2>
          </div>
          <div className="p-6 space-y-4">
            <Link href="/admin/projects" className="w-full flex items-center justify-between p-4 rounded-xl border border-[var(--border-light)] hover:border-[var(--primary)]/20 hover:bg-[var(--surface-warm)] transition-all group">
              <div className="flex items-center space-x-4">
                <div className="p-2.5 bg-[var(--primary)]/10 rounded-lg text-[var(--primary)]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-[var(--text-secondary)] group-hover:text-[var(--primary)]">Manage Projects</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
            </Link>
            <Link href="/admin/announcements" className="w-full flex items-center justify-between p-4 rounded-xl border border-[var(--border-light)] hover:border-[var(--accent)]/20 hover:bg-[var(--accent)]/5 transition-all group">
              <div className="flex items-center space-x-4">
                <div className="p-2.5 bg-[var(--accent)]/10 rounded-lg text-[var(--accent-dark)]">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent-dark)]">Post Announcement</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-dark)] transition-colors" />
            </Link>
            <Link href="/admin/publications" className="w-full flex items-center justify-between p-4 rounded-xl border border-[var(--border-light)] hover:border-[var(--primary-light)]/20 hover:bg-[var(--primary-light)]/5 transition-all group">
              <div className="flex items-center space-x-4">
                <div className="p-2.5 bg-[var(--primary-light)]/10 rounded-lg text-[var(--primary-light)]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-[var(--text-secondary)] group-hover:text-[var(--primary-light)]">Add Publication</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--primary-light)] transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
