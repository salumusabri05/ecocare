"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2, Upload, Loader2, Users } from 'lucide-react';

export default function StaffAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    image_url: '',
    linkedin_url: '',
    twitter_url: '',
    display_order: 0
  });

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleImageUpload(e) {
    try {
      setUploadingImage(true);
      const file = e.target.files[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `team-profiles/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('smartcare-assets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('smartcare-assets')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: data.publicUrl });
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image!');
    } finally {
      setUploadingImage(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('team_members')
        .insert([formData]);
      
      if (error) throw error;
      
      setIsModalOpen(false);
      setFormData({ name: '', role: '', bio: '', image_url: '', linkedin_url: '', twitter_url: '', display_order: 0 });
      fetchItems();
    } catch (error) {
      console.error('Error saving team member:', error);
      alert('Failed to save team member.');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to remove this team member?')) return;
    try {
      const { error } = await supabase.from('team_members').delete().eq('id', id);
      if (error) throw error;
      fetchItems();
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff & Team Members</h1>
          <p className="text-gray-500 text-sm mt-1">Manage the profiles displayed on your &quot;Who We Are&quot; page.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white px-4 py-2 rounded-lg font-bold flex items-center shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Team Member
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                <th className="p-4 font-medium w-16">Photo</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Order</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan="5" className="p-8 text-center text-gray-500">Loading...</td></tr>
              ) : items.length === 0 ? (
                <tr><td colSpan="5" className="p-8 text-center text-gray-500">No team members found.</td></tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50">
                    <td className="p-4">
                      {item.image_url ? (
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                          <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-400">
                          <Users className="w-5 h-5" />
                        </div>
                      )}
                    </td>
                    <td className="p-4 font-medium text-gray-900">{item.name}</td>
                    <td className="p-4 text-gray-600">{item.role}</td>
                    <td className="p-4 text-gray-600">{item.display_order}</td>
                    <td className="p-4 text-right space-x-3">
                      <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-800"><Trash2 className="w-4 h-4 inline" /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-xl shadow-xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-6">Add Team Member</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary-light)] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role / Position</label>
                  <input required type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary-light)] outline-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input type="url" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} placeholder="https://... or upload file" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
                  </div>
                  <div className="relative">
                    <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed" />
                    <button type="button" className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg font-medium text-gray-700 transition-colors">
                      {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                      {uploadingImage ? 'Uploading...' : 'Upload Photo'}
                    </button>
                  </div>
                </div>
                {formData.image_url && (
                  <div className="mt-2 w-16 h-16 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                    <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio (Optional)</label>
                <textarea value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} rows="3" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary-light)] outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL (Optional)</label>
                  <input type="url" value={formData.linkedin_url} onChange={e => setFormData({...formData, linkedin_url: e.target.value})} placeholder="https://linkedin.com/in/..." className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Twitter URL (Optional)</label>
                  <input type="url" value={formData.twitter_url} onChange={e => setFormData({...formData, twitter_url: e.target.value})} placeholder="https://twitter.com/..." className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Display Order (Lower numbers appear first)</label>
                <input type="number" value={formData.display_order} onChange={e => setFormData({...formData, display_order: parseInt(e.target.value) || 0})} className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
              </div>

              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-lg font-bold transition-colors shadow-sm">Save Profile</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
