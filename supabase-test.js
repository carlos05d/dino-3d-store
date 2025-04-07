// Plain JavaScript test
const SUPABASE_URL = 'https://fndtduskhtxtunropbbc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZHRkdXNraHR4dHVucm9wYmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NTA0MDEsImV4cCI6MjA1ODEyNjQwMX0.pPvneYe05EnxgqkeDL5i50y7I35X9coLLzJOeZCqd04';

async function testSupabase() {
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    console.log('Testing Supabase connection...');
    const { data, error } = await supabase.from('models').select('*');
    
    if (error) throw error;

    console.log('✅ Connection successful! Found', data.length, 'models');
    if (data.length > 0) {
      console.log('First model:', data[0]);
    }
  } catch (error) {
    console.error('❌ Connection failed:');
    console.error(error.message);
    process.exit(1);
  }
}

testSupabase();
