
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedChatQuestions() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting Chat Questions Data Seeding...");

    const payload = portfolioData.chatSimulation.map((q, index) => ({
        question_id: q.id,
        text: q.text,
        response: q.response,
        display_order: index,
    }));

    const { error: deleteError } = await supabase.from('chat_questions').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (deleteError) console.warn("Warning clearing:", deleteError.message);

    const { data, error } = await supabase.from('chat_questions').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} chat questions.`);
    }
}

seedChatQuestions();
