"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, CheckCircle2, Clock, Mail } from 'lucide-react';

export default function InquiriesAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_inquiries')
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

  async function handleToggleResolve(id, currentStatus) {
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .update({ is_resolved: !currentStatus })
        .eq('id', id);
      
      if (error) throw error;
      fetchItems();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const { error } = await supabase.from('contact_inquiries').delete().eq('id', id);
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
          <h1 className="text-2xl font-bold text-gray-900">Contact Inquiries</h1>
          <p className="text-gray-500 text-sm mt-1">Manage messages received from the contact form.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Name & Contact</th>
                <th className="p-4 font-medium">Subject</th>
                <th className="p-4 font-medium">Date</th>
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
                    <td className="p-4">
                      <button onClick={() => handleToggleResolve(item.id, item.is_resolved)}>
                        {item.is_resolved ? (
                          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        ) : (
                          <Clock className="w-6 h-6 text-amber-500" />
                        )}
                      </button>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{item.full_name}</div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Mail className="w-3 h-3 mr-1" />
                        <a href={`mailto:${item.email}`} className="hover:underline">{item.email}</a>
                      </div>
                      {item.phone && <div className="text-sm text-gray-500">{item.phone}</div>}
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{item.subject}</div>
                      <div className="text-sm text-gray-600 max-w-xs truncate mt-1" title={item.message}>{item.message}</div>
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
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
    </div>
  );
}
