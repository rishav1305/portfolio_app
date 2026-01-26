
-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Create a table to store your knowledge base (resume, projects, etc.)
create table if not exists documents (
  id bigserial primary key,
  content text, -- The actual text chunk
  metadata jsonb, -- Metadata like source, title, date
  embedding vector(768) -- Gemini text-embedding-004 uses 768 dimensions
);

-- Enable full text search on the content (optional but useful)
-- create index on documents using gin(to_tsvector('english', content));

-- Create a function to search for documents
create or replace function match_documents (
  query_embedding vector(768),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by documents.embedding <=> query_embedding
  limit match_count;
end;
$$;

-- Create a table to store chat history (for analysis or context)
create table if not exists chat_logs (
  id uuid default gen_random_uuid() primary key,
  session_id text, -- ID to group messages by user session
  role text, -- 'user', 'assistant', or 'system'
  content text,
  created_at timestamp with time zone default now()
);
