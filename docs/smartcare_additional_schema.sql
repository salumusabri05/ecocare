-- =====================================================================
-- SMARTCARE AFRICA FOUNDATION - ADDITIONAL SCHEMA FOR DYNAMIC CONTENT
-- =====================================================================

-- 1. PROJECTS TABLE (For Featured Projects, Environmental Projects, etc.)
create table public.projects (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text not null,
    image_url text,
    category text default 'General', -- e.g. "Healthcare", "Environment", "Community"
    is_featured boolean default false,
    cta_text text default 'Learn More',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create trigger set_projects_updated_at before update on public.projects for each row execute procedure public.set_current_timestamp_updated_at();

-- 2. PUBLICATIONS & RESOURCES TABLE (For Resource Center)
create type resource_type as enum ('pdf', 'video', 'ebook', 'toolkit', 'guide', 'report');

create table public.publications (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    description text not null,
    category text not null, -- e.g. "Report", "Research", "Case Study"
    type resource_type default 'pdf',
    file_size text, -- e.g. "2.4 MB"
    file_url text,
    image_url text,
    is_featured boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create trigger set_publications_updated_at before update on public.publications for each row execute procedure public.set_current_timestamp_updated_at();

-- 3. EXTERNAL RESOURCES TABLE (For Partners & Collaborators)
create table public.external_resources (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    organization text not null,
    description text not null,
    link text not null,
    icon_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES
alter table public.projects enable row level security;
alter table public.publications enable row level security;
alter table public.external_resources enable row level security;

-- Allow public read-only access
create policy "Allow public read-only access to projects" on public.projects for select using (true);
create policy "Allow public read-only access to publications" on public.publications for select using (true);
create policy "Allow public read-only access to external_resources" on public.external_resources for select using (true);

-- Staff management (Requires auth to be set up)
create policy "Staff manage projects" on public.projects for all using (public.get_auth_role() in ('super_admin', 'staff'));
create policy "Staff manage publications" on public.publications for all using (public.get_auth_role() in ('super_admin', 'staff'));
create policy "Staff manage external_resources" on public.external_resources for all using (public.get_auth_role() in ('super_admin', 'staff'));
