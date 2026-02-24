
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.warn("⚠️ Warning: Missing Supabase Environment Variables. RAG features may not work.");
}

// Client for Server-Side operations (Ingestion, RAG retrieval)
// Uses Secret Key (or legacy Service Role Key) to bypass RLS for admin operations.
export const supabase = createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseKey || "placeholder-key"
);
