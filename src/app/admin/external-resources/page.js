"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2, Upload, Loader2 } from 'lucide-react';

export default function ExternalResourcesAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    description: '',
    link: '',
    icon_url: ''
  });

  const [uploadingIcon, setUploadingIcon] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('external_resources')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleIconUpload(e) {
    try {
      setUploadingIcon(true);
      
      const file = e.target.files[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `icons/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('smartcare-assets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('smartcare-assets')
        .getPublicUrl(filePath);

      setFormData({ ...formData, icon_url: data.publicUrl });
    } catch (error) {
      console.error('Error uploading icon:', error);
      alert('Error uploading icon!');
    } finally {
      setUploadingIcon(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('external_resources')
        .insert([formData]);
      
      if (error) throw error;
      
      setIsModalOpen(false);
      setFormData({ title: '', organization: '', description: '', link: '', icon_url: '' });
      fetchItems();
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save resource.');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure?')) return;
    try {
      const { error } = await supabase.from('external_resources').delete().eq('id', id);
      if (error) throw error;
      fetchItems();
    } catch (error) {
      console.error('Error deleting:', error);
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">External Resources & Partners</h1>
          <p className="text-gray-500 text-sm mt-1">Manage links to external organizations and guidelines.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white px-4 py-2 rounded-lg font-bold flex items-center shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add External Resource
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Organization</th>
                <th className="p-4 font-medium">Link</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan="4" className="p-8 text-center text-gray-500">Loading...</td></tr>
              ) : items.length === 0 ? (
                <tr><td colSpan="4" className="p-8 text-center text-gray-500">No records found.</td></tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">{item.title}</td>
                    <td className="p-4 text-gray-600">{item.organization}</td>
                    <td className="p-4 text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline max-w-[200px] truncate transition-colors">
                      <a href={item.link} target="_blank" rel="noreferrer">{item.link}</a>
                    </td>
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
            <h2 className="text-xl font-bold mb-6">Add External Resource</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary-light)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <input required type="text" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary-light)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows="3" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary-light)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">External Link URL</label>
                <input required type="url" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} placeholder="https://..." className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Icon/Logo Image</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <input type="url" value={formData.icon_url} onChange={e => setFormData({...formData, icon_url: e.target.value})} placeholder="https://... or upload" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none pr-24" />
                    <div className="absolute right-1 top-1 bottom-1">
                      <div className="relative h-full">
                        <input type="file" accept="image/*" onChange={handleIconUpload} disabled={uploadingIcon} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed" />
                        <button type="button" className="h-full px-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium text-gray-700 transition-colors flex items-center">
                          {uploadingIcon ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Upload className="w-3 h-3 mr-1" />} Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {formData.icon_url && (
                  <div className="mt-2 relative h-12 w-12 rounded bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={formData.icon_url} alt="Icon Preview" className="max-w-full max-h-full object-contain" />
                  </div>
                )}
              </div>
              
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-lg font-bold transition-colors shadow-sm">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
