import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Model } from '../types/database.types';
import { ShoppingCart } from 'lucide-react';

export default function ModelDetail() {
  const { id } = useParams();
  const [model, setModel] = useState<Model | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModel();
  }, [id]);

  async function fetchModel() {
    try {
      if (!id) return;

      const { data, error } = await supabase
        .from('models')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setModel(data);
    } catch (error) {
      console.error('Error fetching model:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!model) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Model not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-96 w-full object-cover md:w-96"
              src={model.image_url || 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800'}
              alt={model.name}
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{model.name}</h1>
            <p className="text-gray-600 mb-6">{model.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Format</p>
                  <p className="font-medium">{model.file_format}</p>
                </div>
                <div>
                  <p className="text-gray-600">Poly Count</p>
                  <p className="font-medium">{model.poly_count?.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-indigo-600">${model.price}</span>
              <button
                className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                onClick={() => {/* TODO: Implement add to cart */}}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}