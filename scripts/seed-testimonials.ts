
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedTestimonials() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting Testimonials Data Seeding...");

    const payload = portfolioData.testimonials.map((t, index) => ({
        name: t.name,
        position: t.position,
        company: t.company,
        text: t.text,
        image: t.image || null,
        location: t.location || null,
        display_order: index,
    }));

    const { error: deleteError } = await supabase.from('testimonials').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (deleteError) console.warn("Warning clearing:", deleteError.message);

    const { data, error } = await supabase.from('testimonials').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} testimonials.`);
    }
}

seedTestimonials();
