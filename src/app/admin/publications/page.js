"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2, CheckCircle2, XCircle, Upload, Loader2 } from 'lucide-react';

export default function PublicationsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Report',
    type: 'pdf',
    file_size: '1.0 MB',
    file_url: '',
    image_url: '',
    is_featured: false
  });

  const [uploadingDoc, setUploadingDoc] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('publications')
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

  async function handleFileUpload(e, type) {
    try {
      const isImg = type === 'image';
      isImg ? setUploadingImg(true) : setUploadingDoc(true);
      
      const file = e.target.files[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const folder = isImg ? 'publication-covers' : 'publications';
      const filePath = `${folder}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('smartcare-assets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('smartcare-assets')
        .getPublicUrl(filePath);

      if (isImg) {
        setFormData({ ...formData, image_url: data.publicUrl });
      } else {
        // Also try to auto-calculate file size roughly
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
        setFormData({ ...formData, file_url: data.publicUrl, file_size: `${sizeMb} MB` });
      }
    } catch (error) {
      console.error(`Error uploading ${type}:`, error);
      alert(`Error uploading ${type}!`);
    } finally {
      type === 'image' ? setUploadingImg(false) : setUploadingDoc(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('publications')
        .insert([formData]);
      
      if (error) throw error;
      
      setIsModalOpen(false);
      setFormData({ title: '', description: '', category: 'Report', type: 'pdf', file_size: '1.0 MB', file_url: '', image_url: '', is_featured: false });
      fetchItems();
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save publication.');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure?')) return;
    try {
      const { error } = await supabase.from('publications').delete().eq('id', id);
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
          <h1 className="text-2xl font-bold text-gray-900">Publications & Resources</h1>
          <p className="text-gray-500 text-sm mt-1">Manage downloadable reports, guides, and materials.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium flex items-center shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Publication
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Featured</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan="5" className="p-8 text-center text-gray-500">Loading...</td></tr>
              ) : items.length === 0 ? (
                <tr><td colSpan="5" className="p-8 text-center text-gray-500">No records found.</td></tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-900">{item.title}</td>
                    <td className="p-4 text-gray-600">{item.category}</td>
                    <td className="p-4 text-gray-600 uppercase text-xs font-bold">{item.type}</td>
                    <td className="p-4">
                      {item.is_featured ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-gray-300" />}
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
            <h2 className="text-xl font-bold mb-6">Add New Publication</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows="3" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input required type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} placeholder="e.g. Report, Guide, Case Study" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none">
                    <option value="pdf">PDF</option>
                    <option value="video">Video</option>
                    <option value="ebook">E-Book</option>
                    <option value="toolkit">Toolkit</option>
                    <option value="guide">Guide</option>
                    <option value="report">Report</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">File Size</label>
                  <input type="text" value={formData.file_size} onChange={e => setFormData({...formData, file_size: e.target.value})} placeholder="e.g. 2.5 MB" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Document File</label>
                  <div className="relative">
                    <input type="url" value={formData.file_url} onChange={e => setFormData({...formData, file_url: e.target.value})} placeholder="https://... or upload" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none pr-24" />
                    <div className="absolute right-1 top-1 bottom-1">
                      <div className="relative h-full">
                        <input type="file" onChange={(e) => handleFileUpload(e, 'doc')} disabled={uploadingDoc} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed" />
                        <button type="button" className="h-full px-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium text-gray-700 transition-colors flex items-center">
                          {uploadingDoc ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Upload className="w-3 h-3 mr-1" />} Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
                <div className="relative">
                  <input type="url" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} placeholder="https://... or upload" className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none pr-24" />
                  <div className="absolute right-1 top-1 bottom-1">
                    <div className="relative h-full">
                      <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} disabled={uploadingImg} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed" />
                      <button type="button" className="h-full px-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded text-sm font-medium text-gray-700 transition-colors flex items-center">
                        {uploadingImg ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Upload className="w-3 h-3 mr-1" />} Upload
                      </button>
                    </div>
                  </div>
                </div>
                {formData.image_url && (
                  <div className="mt-2 relative h-20 w-16 rounded overflow-hidden border border-gray-200 shadow-sm">
                    <img src={formData.image_url} alt="Cover Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="is_featured" checked={formData.is_featured} onChange={e => setFormData({...formData, is_featured: e.target.checked})} className="w-4 h-4 text-emerald-600 rounded" />
                <label htmlFor="is_featured" className="text-sm font-medium text-gray-700">Feature at Top of Resource Center</label>
              </div>
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium shadow-sm">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
