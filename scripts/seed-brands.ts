
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedBrands() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting Brands Data Seeding...");

    const payload = portfolioData.brands.map((b, index) => ({
        name: b.name,
        logo: b.logo,
        color: b.color || null,
        display_order: index,
    }));

    const { error: deleteError } = await supabase.from('brands').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (deleteError) console.warn("Warning clearing:", deleteError.message);

    const { data, error } = await supabase.from('brands').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} brands.`);
    }
}

seedBrands();
