
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.warn("⚠️ Warning: Missing Supabase Environment Variables. RAG features may not work.");
}

// Client for Server-Side operations (Ingestion, RAG retrieval)
// We use the Service Role Key to bypass RLS for ingestion scripts, or ensure we have RLS set up properly.
// Check if we have values before creating client to avoid runtime errors during build time static analysis
export const supabase = createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseKey || "placeholder-key"
);
