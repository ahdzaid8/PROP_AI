import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// This is the server-side client
export const db = createClient(supabaseUrl, supabaseKey);

// Helper for consistency with previous API
export const supabase = db;

export default db;
