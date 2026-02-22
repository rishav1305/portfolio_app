
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedFaqs() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting FAQs Data Seeding...");

    const payload = portfolioData.faqs.map((faq, index) => ({
        question: faq.question,
        answer: faq.answer,
        display_order: index,
    }));

    const { error: deleteError } = await supabase.from('faqs').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (deleteError) console.warn("Warning clearing:", deleteError.message);

    const { data, error } = await supabase.from('faqs').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} FAQ items.`);
    }
}

seedFaqs();
