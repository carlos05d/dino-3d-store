import { supabase } from './src/lib/supabase.js';

(async () => {
  const { data, error } = await supabase.from('models').select('*');
  if (error) {
    console.error('Supabase Error:', error.message);
    process.exit(1);
  }
  console.log('Supabase connection successful! Found', data.length, 'models');
})();
