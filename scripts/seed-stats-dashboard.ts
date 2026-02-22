
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedStatsDashboard() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting Stats Dashboard Data Seeding...");

    const payload = portfolioData.statsDashboard.map((stat, index) => ({
        label: stat.label,
        value: stat.value,
        icon: stat.icon || null,
        display_order: index,
    }));

    const { error: deleteError } = await supabase.from('stats_dashboard').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (deleteError) console.warn("Warning clearing:", deleteError.message);

    const { data, error } = await supabase.from('stats_dashboard').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} stats dashboard items.`);
    }
}

seedStatsDashboard();
