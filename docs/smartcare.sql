-- =====================================================================
-- SMARTCARE AFRICA FOUNDATION - SUPABASE DATABASE SCHEMA
-- =====================================================================
-- Target Environment: Supabase PostgreSQL (Postgres 15+)
-- Scope: National NGO Administration, Membership, CMS, Operations, 
--        Mental Health Support, and Financial Audit Compliance.
-- =====================================================================

-- Enable necessary Postgres extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- =====================================================================
-- 1. ENUMS AND CUSTOM DOMAINS
-- =====================================================================

create type user_role as enum (
    'super_admin',       -- Full system administration
    'board_member',      -- Strategic oversight, project approver
    'staff',             -- Core office administrators & project workers
    'volunteer',         -- Public health & environmental field agents
    'member',            -- General voting/non-voting organization members
    'donor'              -- External financial contributors
);

create type membership_status as enum (
    'pending', 
    'active', 
    'suspended', 
    'expired'
);

create type membership_category as enum (
    'founder', 
    'ordinary', 
    'honorary'
);

create type project_status as enum (
    'planning', 
    'active', 
    'completed', 
    'suspended'
);

create type transaction_category as enum (
    'membership_fee', 
    'fundraising_income', 
    'individual_gift', 
    'institutional_grant', 
    'social_enterprise_income', 
    'program_expense', 
    'administrative_expense', 
    'emergency_response'
);

create type approval_status as enum (
    'draft',
    'pending_first_approval',
    'pending_second_approval',
    'approved_and_completed',
    'rejected'
);

create type case_severity as enum (
    'low', 
    'medium', 
    'high', 
    'critical'
);

create type case_status as enum (
    'open', 
    'assigned', 
    'in_progress', 
    'resolved', 
    'closed'
);

-- =====================================================================
-- 2. CORE USER MANAGEMENT & SECURITY (PROFILES)
-- =====================================================================

-- Profiles Table (Extends Supabase Auth.users)
create table public.profiles (
    id uuid references auth.users on delete cascade primary key,
    full_name text not null,
    email text unique not null,
    phone_number text,
    role user_role not null default 'member',
    avatar_url text,
    region text default 'Kagera',
    district text default 'Biharamulo',
    ward text,
    is_active boolean not null default true,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexing for role-based queries
create index idx_profiles_role on public.profiles(role);
create index idx_profiles_email on public.profiles(email);

-- =====================================================================
-- 3. MEMBERSHIP & GOVERNANCE TABLES
-- =====================================================================

-- Official Members Registry (Articles 10, 11, 12, 13)
create table public.members (
    id uuid default gen_random_uuid() primary key,
    profile_id uuid references public.profiles(id) on delete cascade not null unique,
    membership_number text unique not null, -- Format: SAF-MEM-YYYY-XXXXX
    category membership_category not null default 'ordinary',
    status membership_status not null default 'pending',
    date_joined date default current_date not null,
    fees_paid_until date,
    certificate_url text,
    cessation_reason text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Board of Directors Registry (Articles 17, 18, 19)
create table public.board_members (
    id uuid default gen_random_uuid() primary key,
    profile_id uuid references public.profiles(id) on delete cascade not null,
    position text not null, -- e.g., 'Chairman', 'Secretary', 'Treasurer', 'Non-Executive Director'
    term_number integer default 1 not null, -- Max 2 consecutive terms (Article 17)
    term_start date not null,
    term_end date not null,
    is_active boolean default true not null,
    appointed_by_meeting_minutes_url text, -- Verification of AGM appt.
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    constraint check_term_limit check (term_number <= 2)
);

-- =====================================================================
-- 4. OPERATIONS & PROJECTS (Articles 8, 9)
-- =====================================================================

-- Programs & Field Projects
create table public.projects (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    slug text unique not null,
    description text not null,
    category text not null, -- e.g., 'Public Health', 'Environment', 'Mental Health', 'Water Sanitation'
    target_region text not null default 'Kagera',
    target_district text not null default 'Biharamulo',
    status project_status not null default 'planning',
    lead_staff_id uuid references public.profiles(id) on delete set null,
    budget_allocated numeric(15,2) default 0.00 not null,
    start_date date,
    end_date date,
    impact_metrics jsonb default '{}'::jsonb, -- e.g., {"people_served": 1200, "trees_planted": 300}
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- =====================================================================
-- 5. CONSTITUTIONAL FINANCIAL AUDITING (Articles 24, 25, 26, 27)
-- =====================================================================

-- Financial Ledger (Requires 2 of 3 Office Bearer Signatures for disbursements - Article 27)
create table public.financial_transactions (
    id uuid default gen_random_uuid() primary key,
    transaction_number text unique not null, -- Format: SAF-TX-YYYY-XXXXX
    category transaction_category not null,
    amount numeric(15,2) not null,
    currency varchar(3) default 'TZS' not null, -- e.g., TZS, USD
    description text not null,
    project_id uuid references public.projects(id) on delete set null,
    
    -- Transaction Workflow Status
    status approval_status default 'draft' not null,
    
    -- Two-out-of-Three Authorized Signatories (Article 27)
    prepared_by uuid references public.profiles(id) on delete restrict not null,
    approved_by_first uuid references public.profiles(id) on delete restrict,
    approved_by_second uuid references public.profiles(id) on delete restrict,
    
    first_approval_date timestamp with time zone,
    second_approval_date timestamp with time zone,
    receipt_url text, -- Public storage reference to audit receipts
    
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    
    -- Safeguard Constraints to prevent single-person bypasses
    constraint check_different_approvers check (
        (approved_by_first is null or prepared_by <> approved_by_first) and 
        (approved_by_second is null or approved_by_first <> approved_by_second) and
        (approved_by_second is null or prepared_by <> approved_by_second)
    ),
    constraint check_positive_amount check (amount > 0)
);

create index idx_tx_status on public.financial_transactions(status);
create index idx_tx_number on public.financial_transactions(transaction_number);

-- =====================================================================
-- 6. PUBLIC HEALTH & MENTAL HEALTH CASE CLINICS (Privacy-First)
-- =====================================================================

-- Mental Health & Community Wellness Support Tickets (Securely encrypted context)
create table public.helpline_cases (
    id uuid default gen_random_uuid() primary key,
    case_number text unique not null, -- Format: SAF-CASE-YYYY-XXXXX
    client_name_encrypted text, -- Safeguarding anonymity/privacy
    client_contact_encrypted text,
    description text not null, -- Initial case intake notes
    assigned_staff_id uuid references public.profiles(id) on delete set null,
    severity case_severity default 'medium' not null,
    status case_status default 'open' not null,
    resolution_summary text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_cases_status on public.helpline_cases(status);
create index idx_cases_assigned on public.helpline_cases(assigned_staff_id);

-- =====================================================================
-- 7. CMS (CONTENT MANAGEMENT SYSTEM) FOR PUBLIC WEBSITE
-- =====================================================================

create table public.cms_categories (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    slug text unique not null
);

create table public.cms_posts (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    slug text unique not null,
    category_id uuid references public.cms_categories(id) on delete set null,
    summary text,
    content text not null, -- Rich HTML or Markdown field
    featured_image text,
    published_at timestamp with time zone,
    is_published boolean default false not null,
    author_id uuid references public.profiles(id) on delete set null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create index idx_cms_published on public.cms_posts(is_published, published_at);

-- =====================================================================
-- 8. SYSTEM LOGS & AUDIT TRAIL
-- =====================================================================

create table public.audit_logs (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references public.profiles(id) on delete set null,
    action text not null, -- e.g., 'UPDATE_TRANSACTION', 'APPROVE_MEMBER'
    table_name text not null,
    record_id uuid not null,
    changes jsonb, -- e.g., {"old": {"status": "pending"}, "new": {"status": "active"}}
    ip_address text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- =====================================================================
-- 9. FUNCTIONS, TRIGGERS & UTILITIES
-- =====================================================================

-- Auto-update timestamps generator function
create or replace function public.set_current_timestamp_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- Apply timestamp update triggers to appropriate tables
create trigger set_profiles_updated_at before update on public.profiles for each row execute procedure public.set_current_timestamp_updated_at();
create trigger set_members_updated_at before update on public.members for each row execute procedure public.set_current_timestamp_updated_at();
create trigger set_projects_updated_at before update on public.projects for each row execute procedure public.set_current_timestamp_updated_at();
create trigger set_financial_transactions_updated_at before update on public.financial_transactions for each row execute procedure public.set_current_timestamp_updated_at();
create trigger set_helpline_cases_updated_at before update on public.helpline_cases for each row execute procedure public.set_current_timestamp_updated_at();
create trigger set_cms_posts_updated_at before update on public.cms_posts for each row execute procedure public.set_current_timestamp_updated_at();

-- Trigger to Automatically Register Profiles on Sign Up
create or replace function public.handle_new_user_registration()
returns trigger as $$
begin
    insert into public.profiles (id, full_name, email, role, avatar_url)
    values (
        new.id,
        coalesce(new.raw_user_meta_data->>'full_name', 'System User'),
        new.email,
        coalesce((new.raw_user_meta_data->>'role')::user_role, 'member'::user_role),
        new.raw_user_meta_data->>'avatar_url'
    );
    return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
    after insert on auth.users
    for each row execute procedure public.handle_new_user_registration();

-- Automatic Unique Reference Number Generators
create or replace function public.generate_transaction_number()
returns trigger as $$
declare
    current_year text;
    sequential_id text;
begin
    current_year := to_char(now(), 'YYYY');
    select coalesce(to_char(count(*) + 1, 'FM00000'), '00001') into sequential_id 
    from public.financial_transactions 
    where to_char(created_at, 'YYYY') = current_year;
    
    new.transaction_number := 'SAF-TX-' || current_year || '-' || sequential_id;
    return new;
end;
$$ language plpgsql;

create trigger trigger_generate_tx_number
    before insert on public.financial_transactions
    for each row execute procedure public.generate_transaction_number();

-- =====================================================================
-- 10. ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================

-- Turn RLS enforcement ON for all tables
alter table public.profiles enable row level security;
alter table public.members enable row level security;
alter table public.board_members enable row level security;
alter table public.projects enable row level security;
alter table public.financial_transactions enable row level security;
alter table public.helpline_cases enable row level security;
alter table public.cms_categories enable row level security;
alter table public.cms_posts enable row level security;
alter table public.audit_logs enable row level security;

-- RBAC helper functions for RLS logic
create or replace function public.get_auth_role()
returns user_role as $$
declare
    user_role_val user_role;
begin
    select role into user_role_val from public.profiles where id = auth.uid();
    return user_role_val;
exception
    when others then return 'member'::user_role;
end;
$$ language plpgsql security definer;

-- Profiles Policies
create policy "Allow anyone to view profiles" on public.profiles for select using (true);
create policy "Allow user updates on self" on public.profiles for update using (auth.uid() = id);
create policy "Full administrative bypass" on public.profiles for all using (public.get_auth_role() = 'super_admin');

-- CMS Policies (Read-Only to Public, Edit to Staff/Admin)
create policy "Enable read access for all" on public.cms_categories for select using (true);
create policy "Admin edit on categories" on public.cms_categories for all using (public.get_auth_role() in ('super_admin', 'staff'));

create policy "Enable read access for published posts" on public.cms_posts for select using (is_published = true or public.get_auth_role() in ('super_admin', 'staff'));
create policy "Admin edit on posts" on public.cms_posts for all using (public.get_auth_role() in ('super_admin', 'staff'));

-- Operational Projects Policies
create policy "Public read access on Projects" on public.projects for select using (true);
create policy "Staff modification on Projects" on public.projects for all using (public.get_auth_role() in ('super_admin', 'staff', 'board_member'));

-- Financial Control Security (Very Restricted)
create policy "Only members with clearance view finances" on public.financial_transactions for select 
    using (public.get_auth_role() in ('super_admin', 'board_member', 'staff'));

create policy "Admins, board and staff create transactions" on public.financial_transactions for insert 
    with check (
        public.get_auth_role() in ('super_admin', 'board_member', 'staff') 
        and prepared_by = auth.uid()
    );

create policy "Two-Party Sign-off execution" on public.financial_transactions for update
    using (public.get_auth_role() in ('super_admin', 'board_member', 'staff'))
    with check (
        -- Enforcing first approval tracking
        (status = 'pending_first_approval' and approved_by_first = auth.uid()) or
        -- Enforcing second approval tracking
        (status = 'pending_second_approval' and approved_by_second = auth.uid()) or
        -- Administrators overall override
        (public.get_auth_role() = 'super_admin')
    );

-- Helpline & Mental Health privacy (Only assigned counselor and super-admins)
create policy "Strict intake security rules" on public.helpline_cases for all
    using (
        public.get_auth_role() = 'super_admin' or 
        assigned_staff_id = auth.uid()
    );

-- =====================================================================
-- 11. ENHANCED BUSINESS REPORTING VIEWS
-- =====================================================================

-- Financial Health Audit Dashboard View
create view public.view_financial_overview as
select 
    category,
    sum(case when status = 'approved_and_completed' then amount else 0 end) as total_approved_revenue,
    sum(case when status <> 'approved_and_completed' then amount else 0 end) as total_pending_clearance,
    count(id) as transaction_count
from public.financial_transactions
group by category;

-- Membership Breakdown View
create view public.view_membership_breakdown as
select 
    category,
    status,
    count(id) as total_members
from public.members
group by category, status;