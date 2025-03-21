import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Model } from '../types/model.types';

export default function Models() {
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    const fetchModels = async () => {
      const { data, error } = await supabase
        .from('models')
        .select('*');

      if (error) {
        console.error('Error fetching models:', error);
      } else {
        setModels(data);
      }
    };

    fetchModels();
  }, []);

  return (
    <div>
      <h1>Models</h1>
      <div>
        {models.map((model) => (
          <div key={model.id}>
            <h2>{model.name}</h2>
            <img src={model.image_url} alt={model.name} />
            <p>{model.description}</p>
            <p>Price: ${model.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
