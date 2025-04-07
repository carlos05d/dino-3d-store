import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Model } from '../types/model.types';

const sampleModels: Model[] = [
  {
    id: '1',
    name: 'T-Rex Model',
    description: 'Highly detailed Tyrannosaurus Rex 3D model with realistic textures and rigging for animation. Perfect for game development or educational projects.',
    price: 29.99,
    image_url: 'https://via.placeholder.com/600x400?text=T-Rex+3D+Model'
  },
  {
    id: '2',
    name: 'Triceratops',
    description: 'Beautifully sculpted Triceratops model with multiple texture options. Includes LOD versions for different performance needs.',
    price: 24.99,
    image_url: 'https://via.placeholder.com/600x400?text=Triceratops+3D+Model'
  },
  {
    id: '3',
    name: 'Stegosaurus',
    description: 'Detailed Stegosaurus model with animated plates and tail. Includes blend shapes for facial expressions.',
    price: 19.99,
    image_url: 'https://via.placeholder.com/600x400?text=Stegosaurus+3D+Model'
  },
  {
    id: '4',
    name: 'Velociraptor',
    description: 'Fearsome Velociraptor model with feather detailing. Perfect for Jurassic Park style projects.',
    price: 27.99,
    image_url: 'https://via.placeholder.com/600x400?text=Velociraptor+3D+Model'
  }
];

export default function Models() {
  const [models, setModels] = useState<Model[]>(sampleModels);

  useEffect(() => {
    const fetchModels = async () => {
      const { data, error } = await supabase
        .from('models')
        .select('*');

      if (error) {
        console.error('Error fetching models:', error);
      } else if (data && data.length > 0) {
        setModels(data);
      }
    };

    fetchModels();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">3D Models Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {models.map((model) => (
          <div 
            key={model.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={model.image_url} 
                alt={model.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{model.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${model.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
