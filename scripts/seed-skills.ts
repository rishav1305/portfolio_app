
import * as dotenv from 'dotenv';
dotenv.config();

import portfolioData from '../src/data/portfolioData';

async function seedSkills() {
    // Dynamic import
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("🌱 Starting Skills Data Seeding...");

    // Transform object { 'Agentic AI': [...], 'DevOps': [...] } into array of rows
    const payload = Object.entries(portfolioData.skills).map(([categoryName, skills], index) => ({
        category_name: categoryName,
        skills: skills,
        display_order: index
    }));

    console.log(`Payload prepared with ${payload.length} categories.`);

    // Clear Existing
    const { error: deleteError } = await supabase.from('skill_categories').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
        console.warn("⚠️ Warning clearing:", deleteError.message);
    }

    // Insert
    const { data, error } = await supabase.from('skill_categories').insert(payload).select();

    if (error) {
        console.error("❌ Insertion Failed:", error);
    } else {
        console.log(`✅ Success! Inserted ${data.length} skill categories.`);
    }
}

seedSkills();
