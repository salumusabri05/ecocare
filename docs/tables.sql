
-- =====================================================================
-- SMARTCARE AFRICA FOUNDATION - PUBLIC WEBSITE SCHEMA ADDITIONS
-- =====================================================================
-- Description: Complementary schema for public-facing assets, events,
--              announcements, newsletter captures, and contact forms.
-- Prerequisite: Must be run after the core schema (supabase_schema.sql)
-- =====================================================================

-- STREAMING_CHUNK: Initializing public events schema...

-- =====================================================================
-- 1. PUBLIC EVENTS & CAMPAIGNS (Article 8 & 9 Public Health Objectives)
-- =====================================================================

create table public.events (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    slug text unique not null,
    description text not null,
    location text not null, -- e.g. "Biharamulo Town Hall", "Virtual"
    latitude numeric(9,6),  -- Optional mapping parameters
    longitude numeric(9,6),
    event_date date not null,
    start_time time with time zone not null,
    end_time time with time zone,
    registration_link text, -- External RSVP or registration if needed
    featured_image text,
    max_attendees integer,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_events_date on public.events(event_date);
create index idx_events_slug on public.events(slug);

-- STREAMING_CHUNK: Building announcement & notification schema...

-- =====================================================================
-- 2. URGENT PUBLIC ANNOUNCEMENTS & ALERTS (e.g. Marburg warnings, health alerts)
-- =====================================================================

create type alert_level as enum ('info', 'warning', 'critical');

create table public.announcements (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    content text not null,
    level alert_level not null default 'info',
    is_active boolean default true not null,
    expires_at timestamp with time zone,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_announcements_active on public.announcements(is_active);

-- STREAMING_CHUNK: Developing public engagement & feedback capture tables...

-- =====================================================================
-- 3. PUBLIC CONTACT INQUIRIES & PARTNERSHIP PROPOSALS
-- =====================================================================

create type inquiry_type as enum ('general_inquiry', 'partnership', 'donation_question', 'membership_issue', 'other');

create table public.contact_inquiries (
    id uuid default gen_random_uuid() primary key,
    full_name text not null,
    email text not null,
    phone_number text,
    type inquiry_type not null default 'general_inquiry',
    subject text not null,
    message text not null,
    
    -- Backend processing statuses
    is_resolved boolean default false not null,
    resolved_by uuid references public.profiles(id) on delete set null,
    resolution_notes text,
    
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_inquiries_resolved on public.contact_inquiries(is_resolved);

-- STREAMING_CHUNK: Designing newsletter and helper info systems...

-- =====================================================================
-- 4. NEWSLETTER SUBSCRIBERS
-- =====================================================================

create table public.newsletter_subscribers (
    id uuid default gen_random_uuid() primary key,
    email text unique not null,
    is_active boolean default true not null,
    subscribed_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unsubscribed_at timestamp with time zone
);

create index idx_newsletter_email on public.newsletter_subscribers(email);

-- =====================================================================
-- 5. PUBLIC FREQUENTLY ASKED QUESTIONS (FAQ)
-- =====================================================================

create table public.faqs (
    id uuid default gen_random_uuid() primary key,
    question text not null,
    answer text not null,
    category text default 'General' not null, -- e.g., "Membership", "Healthcare Services", "Donations"
    display_order integer default 0 not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_faqs_category on public.faqs(category);

-- STREAMING_CHUNK: Applying systemic update triggers...

-- =====================================================================
-- 6. AUTOMATIC UPDATE TRIGGERS
-- =====================================================================

create trigger set_events_updated_at before update on public.events for each row execute procedure public.set_current_timestamp_updated_at();
create trigger set_announcements_updated_at before update on public.announcements for each row execute procedure public.set_current_timestamp_updated_at();
create trigger set_contact_inquiries_updated_at before update on public.contact_inquiries for each row execute procedure public.set_current_timestamp_updated_at();
create trigger set_faqs_updated_at before update on public.faqs for each row execute procedure public.set_current_timestamp_updated_at();

-- STREAMING_CHUNK: Implementing row level security policies...

-- =====================================================================
-- 7. ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================

-- Turn RLS enforcement ON for all new tables
alter table public.events enable row level security;
alter table public.announcements enable row level security;
alter table public.contact_inquiries enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.faqs enable row level security;

-- Events Policies
create policy "Allow public read-only access to events" on public.events for select using (true);
create policy "Staff manage events" on public.events for all using (public.get_auth_role() in ('super_admin', 'staff', 'board_member'));

-- Announcements Policies
create policy "Allow public read-only access to active announcements" 
    on public.announcements for select 
    using (is_active = true and (expires_at is null or expires_at > now()));
create policy "Staff manage announcements" on public.announcements for all using (public.get_auth_role() in ('super_admin', 'staff'));

-- Contact Inquiries Policies
create policy "Allow anonymous insertions of inquiries" on public.contact_inquiries for insert with check (true);
create policy "Only staff can view/edit public inquiries" on public.contact_inquiries for all using (public.get_auth_role() in ('super_admin', 'staff'));

-- Newsletter Subscribers Policies
create policy "Allow anonymous subscription registrations" on public.newsletter_subscribers for insert with check (true);
create policy "Allow subscribers to update their status" on public.newsletter_subscribers for update using (true);
create policy "Only staff can view newsletter rosters" on public.newsletter_subscribers for select using (public.get_auth_role() in ('super_admin', 'staff'));

-- FAQ Policies
create policy "Allow public read-only access to FAQs" on public.faqs for select using (true);
create policy "Staff manage FAQs" on public.faqs for all using (public.get_auth_role() in ('super_admin', 'staff'));