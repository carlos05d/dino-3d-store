"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_1 = require("./src/lib/supabase");
async function testSupabase() {
    try {
        console.log('Testing Supabase connection...');
        const { data, error } = await supabase_1.supabase.from('models').select('*');
        if (error)
            throw error;
        console.log('✅ Connection successful! Found', data.length, 'models');
        if (data.length > 0) {
            console.log('First model:', data[0]);
        }
    }
    catch (error) {
        console.error('❌ Connection failed:');
        console.error(error);
        process.exit(1);
    }
}
testSupabase();
