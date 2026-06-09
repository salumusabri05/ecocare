-- =====================================================================
-- SMARTCARE AFRICA FOUNDATION - MASTER SCHEMA FIX
-- Run this to fix all "Error fetching items" issues on the Admin Panel
-- =====================================================================

-- 1. PROJECTS TABLE
create table if not exists public.projects (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text not null,
    image_url text,
    category text default 'General',
    is_featured boolean default false,
    cta_text text default 'Learn More',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. PUBLICATIONS TABLE & ENUM
do $$ 
begin
    if not exists (select 1 from pg_type where typname = 'resource_type') then
        create type resource_type as enum ('pdf', 'video', 'ebook', 'toolkit', 'guide', 'report');
    end if;
end $$;

create table if not exists public.publications (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text not null,
    category text not null,
    type resource_type default 'pdf',
    file_size text,
    file_url text,
    image_url text,
    is_featured boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. EXTERNAL RESOURCES TABLE
create table if not exists public.external_resources (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    organization text not null,
    description text not null,
    link text not null,
    icon_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. ENABLE SECURITY
alter table public.projects enable row level security;
alter table public.publications enable row level security;
alter table public.external_resources enable row level security;

-- 5. DROP OLD RESTRICTIVE POLICIES
drop policy if exists "Allow public read-only access to projects" on public.projects;
drop policy if exists "Allow public read-only access to publications" on public.publications;
drop policy if exists "Allow public read-only access to external_resources" on public.external_resources;

drop policy if exists "Allow all actions for projects" on public.projects;
drop policy if exists "Allow all actions for publications" on public.publications;
drop policy if exists "Allow all actions for external_resources" on public.external_resources;

-- 6. CREATE FULL ADMIN ACCESS POLICIES
create policy "Allow all actions for projects" on public.projects for all using (true) with check (true);
create policy "Allow all actions for publications" on public.publications for all using (true) with check (true);
create policy "Allow all actions for external_resources" on public.external_resources for all using (true) with check (true);

-- 7. FORCE API CACHE REFRESH
NOTIFY pgrst, 'reload schema';
