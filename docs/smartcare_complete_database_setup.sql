-- =====================================================================
-- SMARTCARE AFRICA FOUNDATION - COMPLETE FINAL SCHEMA
-- This fixes the missing Subscribers, Inquiries, and Announcements tables
-- =====================================================================

-- 1. NEWSLETTER SUBSCRIBERS TABLE
create table if not exists public.newsletter_subscribers (
    id uuid default gen_random_uuid() primary key,
    email text not null unique,
    is_active boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. CONTACT INQUIRIES TABLE
create table if not exists public.contact_inquiries (
    id uuid default gen_random_uuid() primary key,
    full_name text not null,
    email text not null,
    phone text,
    subject text not null,
    message text not null,
    type text default 'general',
    is_resolved boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. ANNOUNCEMENTS (NEWS) TABLE
create table if not exists public.announcements (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    content text not null,
    level text default 'info', -- 'info', 'warning', 'success', 'error'
    is_active boolean default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. ENABLE ROW LEVEL SECURITY
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_inquiries enable row level security;
alter table public.announcements enable row level security;

-- 5. CREATE FULL ADMIN POLICIES
drop policy if exists "Allow all actions for subscribers" on public.newsletter_subscribers;
create policy "Allow all actions for subscribers" on public.newsletter_subscribers for all using (true) with check (true);

drop policy if exists "Allow all actions for inquiries" on public.contact_inquiries;
create policy "Allow all actions for inquiries" on public.contact_inquiries for all using (true) with check (true);

drop policy if exists "Allow all actions for announcements" on public.announcements;
create policy "Allow all actions for announcements" on public.announcements for all using (true) with check (true);

-- 6. FORCE API CACHE REFRESH
NOTIFY pgrst, 'reload schema';
