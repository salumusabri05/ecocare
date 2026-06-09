-- =====================================================================
-- SMARTCARE AFRICA FOUNDATION - TEAM / STAFF SCHEMA
-- =====================================================================

create table if not exists public.team_members (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    role text not null,
    bio text,
    image_url text,
    linkedin_url text,
    twitter_url text,
    display_order integer default 0,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.team_members enable row level security;

-- Admin access policy
drop policy if exists "Allow all actions for team_members" on public.team_members;
create policy "Allow all actions for team_members" on public.team_members for all using (true) with check (true);

-- Refresh API Cache
NOTIFY pgrst, 'reload schema';
