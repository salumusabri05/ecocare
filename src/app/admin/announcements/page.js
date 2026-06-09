"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2, CheckCircle2, XCircle } from 'lucide-react';

export default function AnnouncementsAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    level: 'info',
    is_active: true
  });

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('announcements')
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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('announcements')
        .insert([formData]);
      
      if (error) throw error;
      
      setIsModalOpen(false);
      setFormData({ title: '', content: '', level: 'info', is_active: true });
      fetchItems();
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save announcement.');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure?')) return;
    try {
      const { error } = await supabase.from('announcements').delete().eq('id', id);
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
          <h1 className="text-2xl font-bold text-gray-900">Announcements (News)</h1>
          <p className="text-gray-500 text-sm mt-1">Manage latest news and announcements.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium flex items-center shadow-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Announcement
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Title</th>
                <th className="p-4 font-medium">Category/Level</th>
                <th className="p-4 font-medium">Active</th>
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
                    <td className="p-4 text-gray-600">{item.level}</td>
                    <td className="p-4">
                      {item.is_active ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-gray-300" />}
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
          <div className="bg-white rounded-xl p-6 w-full max-w-xl shadow-xl">
            <h2 className="text-xl font-bold mb-6">Add New Announcement</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content/Excerpt</label>
                <textarea required value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category (Level)</label>
                <select value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})} className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none">
                  <option value="info">Foundation News</option>
                  <option value="warning">Community Programs</option>
                  <option value="success">Healthcare</option>
                  <option value="error">Environment</option>
                </select>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="is_active" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} className="w-4 h-4 text-amber-600 rounded" />
                <label htmlFor="is_active" className="text-sm font-medium text-gray-700">Active (Visible)</label>
              </div>
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium shadow-sm">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
