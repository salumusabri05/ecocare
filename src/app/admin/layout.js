"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Activity, Calendar, Bell, Mail, Users, FileText, 
  LogOut, Settings, LayoutDashboard, Briefcase, BookOpen, Link as LinkIcon, UserCircle
} from 'lucide-react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: Briefcase },
    { name: 'Staff & Team', href: '/admin/staff', icon: UserCircle },
    { name: 'Announcements', href: '/admin/announcements', icon: Bell },
    { name: 'Publications', href: '/admin/publications', icon: BookOpen },
    { name: 'External Resources', href: '/admin/external-resources', icon: LinkIcon },
    { name: 'Inquiries', href: '/admin/inquiries', icon: Mail },
    { name: 'Subscribers', href: '/admin/subscribers', icon: Users },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--surface)] text-[var(--text-primary)] font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-white flex flex-col shadow-sm z-20">
        <div className="p-6 border-b border-[var(--border)] flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm ring-2 ring-[var(--primary)]/20">
            <img 
              src="/logo/logo.jpg" 
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-bold text-[var(--primary-dark)] text-base block leading-none">SmartCare</span>
            <span className="text-[10px] text-[var(--accent-dark)] font-bold tracking-wider uppercase">Portal Admin</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-1.5 px-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200 border-l-4 ${
                    isActive 
                      ? 'bg-[var(--surface-warm)] text-[var(--primary)] border-[var(--accent)] shadow-sm' 
                      : 'text-[var(--text-secondary)] border-transparent hover:bg-[var(--surface)] hover:text-[var(--primary)]'
                  }`}
                >
                  <item.icon className={`mr-3 flex-shrink-0 h-5 w-5 ${isActive ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="p-6 border-t border-[var(--border)] bg-[var(--surface)]/50">
          <Link href="/" className="flex items-center px-4 py-3 text-sm font-bold rounded-xl text-[var(--text-secondary)] hover:bg-white hover:text-red-600 hover:shadow-sm transition-all">
            <LogOut className="mr-3 flex-shrink-0 h-5 w-5 text-[var(--text-muted)] group-hover:text-red-600" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-16 border-b border-[var(--border)] bg-white flex items-center justify-between px-8 shadow-sm z-10">
          <h1 className="text-lg font-extrabold text-[var(--primary-dark)] capitalize">
            {pathname === '/admin' ? 'Dashboard Overview' : pathname.split('/').pop().replace('-', ' ')}
          </h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-[var(--surface)] text-[var(--text-muted)] transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <div className="h-9 w-9 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold shadow-sm ring-2 ring-[var(--accent)]/30">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-[var(--surface)] p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
