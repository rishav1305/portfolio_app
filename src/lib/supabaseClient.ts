
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Note: Use Service Role Key for ingestion (server-side only!), Anon key for client-side if needed.

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase Environment Variables');
}

// Client for Server-Side operations (Ingestion, RAG retrieval)
// We use the Service Role Key to bypass RLS for ingestion scripts, or ensure we have RLS set up properly.
// For the client-side chat, we might want a separate client using the Anon key.
export const supabase = createClient(supabaseUrl, supabaseKey);
