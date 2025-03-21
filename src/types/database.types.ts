export interface Model {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  file_format: string;
  poly_count: number;
  created_at: string;
  user_id: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  model_id: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}