
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { supabase } from '@/lib/supabaseClient';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1];

        console.log('🗣️ User asked:', lastMessage.content);

        // 1. Generate Embedding for the user's question
        const embeddings = new GoogleGenerativeAIEmbeddings({
            modelName: 'embedding-001',
            apiKey: process.env.GEMINI_API_KEY,
        });

        // Safety check for empty content
        if (!lastMessage.content) {
            return new Response('Message content is empty', { status: 400 });
        }

        const vector = await embeddings.embedQuery(lastMessage.content);

        // 2. Retrieve relevant documents from Supabase
        // Note: 'match_documents' is the RPC function we created in SQL
        const { data: chunks, error } = await supabase.rpc('match_documents', {
            query_embedding: vector,
            match_threshold: 0.4, // Lower threshold = more matches, but potentially less relevant
            match_count: 5        // Get 5 chunks to provide broad context
        });

        if (error) {
            console.error('❌ Supabase retrieval error:', error);
        }

        const context = chunks
            ? chunks.map((c: any) => c.content).join('\n\n---\n\n')
            : 'No specific context found in the knowledge base.';

        console.log(`📚 Retrieved ${chunks?.length || 0} chunks of context.`);

        // 3. Construct the System Prompt
        const systemPrompt = `
    You are Rishav's Digital Twin, an advanced AI Portfolio Assistant. 
    Your goal is to represent Rishav (Lead AI Engineer) to recruiters, potential clients, and engineers.

    CORE INSTRUCTIONS:
    - START by DIRECTLY answering the user's question based on the CONTEXT provided below.
    - BE CONFIDENT: You are an expert. Don't say "According to the documents". Say "I have experience with...".
    - BE PRECISE: Use numbers, metrics, and specific technologies mentioned in the context.
    - IF UNKNOWN: If the answer isn't in the context, say "I don't have that specific detail in my records, but I know Rishav is always learning. You can contact him directly."
    - STYLE: Professional, concise, forward-looking. Use Bullet points for readability.

    CONTEXT FROM RISHAV'S EXPERIENCE:
    ${context}
    `;

        // 4. Stream the Response using Gemini
        const result = streamText({
            model: google('gemini-1.5-flash'),
            messages, // Pass full history so it remembers previous turns
            system: systemPrompt,
        });

        return result.toTextStreamResponse();

    } catch (error) {
        console.error('SERVER ERROR:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
