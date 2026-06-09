-- =====================================================================
-- SMARTCARE AFRICA FOUNDATION - STORAGE BUCKETS SETUP
-- =====================================================================

-- 1. Create a public bucket for all foundation assets (images, pdfs, videos)
insert into storage.buckets (id, name, public)
values ('smartcare-assets', 'smartcare-assets', true)
on conflict (id) do nothing;

-- 2. Set up Security Policies (Row Level Security) for the storage.objects table
-- This allows anyone on the internet to view/download the files (needed for your website)
create policy "Public Access" 
on storage.objects for select 
using ( bucket_id = 'smartcare-assets' );

-- 3. Allow uploads (Insert) to the bucket
-- Note: In a strict production environment, this should be restricted to authenticated admin users.
-- For now, this allows the admin panel (or Supabase dashboard) to upload files.
create policy "Allow public uploads" 
on storage.objects for insert 
with check ( bucket_id = 'smartcare-assets' );

-- 4. Allow updates to existing files in the bucket
create policy "Allow public updates" 
on storage.objects for update 
using ( bucket_id = 'smartcare-assets' );

-- 5. Allow deletions from the bucket
create policy "Allow public deletes" 
on storage.objects for delete 
using ( bucket_id = 'smartcare-assets' );
