"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, Mail } from 'lucide-react';

export default function SubscribersAdmin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('newsletter_subscribers')
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

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to remove this subscriber?')) return;
    try {
      const { error } = await supabase.from('newsletter_subscribers').delete().eq('id', id);
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
          <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
          <p className="text-gray-500 text-sm mt-1">Manage email subscribers.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Email Address</th>
                <th className="p-4 font-medium">Subscribed Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan="4" className="p-8 text-center text-gray-500">Loading...</td></tr>
              ) : items.length === 0 ? (
                <tr><td colSpan="4" className="p-8 text-center text-gray-500">No subscribers found.</td></tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50">
                    <td className="p-4">
                      <div className="font-medium text-gray-900 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        {item.email}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-md font-medium">
                        Active
                      </span>
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
