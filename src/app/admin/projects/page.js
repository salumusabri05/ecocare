"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2, CheckCircle2, XCircle, Upload, Loader2 } from 'lucide-react';

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    category: 'General',
    is_featured: false,
    cta_text: 'Learn More'
  });

  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;

      const mappedData = (data || []).map(item => {
        const metrics = item.impact_metrics || {};
        return {
          ...item,
          image_url: metrics.image_url || '',
          is_featured: metrics.is_featured || false,
          cta_text: metrics.cta_text || 'Learn More'
        };
      });
      setProjects(mappedData);
    } catch (error) {
      console.error('Error fetching projects:', error);
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
      const filePath = `project-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('smartcare-assets')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

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
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

      const payload = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        slug: slug,
        impact_metrics: {
          image_url: formData.image_url,
          is_featured: formData.is_featured,
          cta_text: formData.cta_text
        }
      };

      const { error } = await supabase
        .from('projects')
        .insert([payload]);
      
      if (error) throw error;
      
      setIsModalOpen(false);
      setFormData({ title: '', description: '', image_url: '', category: 'General', is_featured: false, cta_text: 'Learn More' });
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project.');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-500 text-sm mt-1">Manage featured projects and initiatives.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white px-4 py-2 rounded-lg font-bold flex items-center shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Featured</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan="4" className="p-8 text-center text-gray-500">Loading...</td></tr>
              ) : projects.length === 0 ? (
                <tr><td colSpan="4" className="p-8 text-center text-gray-500">No projects found.</td></tr>
              ) : (
                projects.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">{item.title}</td>
                    <td className="p-4 text-gray-600">{item.category}</td>
                    <td className="p-4">
                      {item.is_featured ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-gray-300" />}
                    </td>
                    <td className="p-4 text-right space-x-3">
                      <button className="text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"><Edit2 className="w-4 h-4 inline" /></button>
                      <button onClick={() => handleDelete(item.id)} className="text-red-650 hover:text-red-800 transition-colors"><Trash2 className="w-4 h-4 inline" /></button>
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
            <h2 className="text-xl font-bold mb-6">Add New Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-[var(--border)] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[var(--primary-light)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows="3" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none">
                    <option>General</option>
                    <option>Healthcare</option>
                    <option>Environment</option>
                    <option>Community</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CTA Text</label>
                  <input type="text" value={formData.cta_text} onChange={e => setFormData({...formData, cta_text: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input type="url" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} placeholder="https://... or upload file" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
                  </div>
                  <div className="relative">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      disabled={uploadingImage}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed" 
                    />
                    <button type="button" className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg font-medium text-gray-700 transition-colors">
                      {uploadingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
                      {uploadingImage ? 'Uploading...' : 'Upload Image'}
                    </button>
                  </div>
                </div>
                {formData.image_url && (
                  <div className="mt-2 relative h-20 w-32 rounded overflow-hidden border border-gray-200">
                    <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="is_featured" checked={formData.is_featured} onChange={e => setFormData({...formData, is_featured: e.target.checked})} className="w-4 h-4 text-[var(--primary)] rounded border-[var(--border)]" />
                <label htmlFor="is_featured" className="text-sm font-medium text-gray-700">Feature on Homepage</label>
              </div>
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-lg font-bold transition-colors shadow-sm">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
