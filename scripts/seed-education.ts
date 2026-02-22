
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedEducation() {
    // Dynamic import
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("🌱 Starting Education Data Seeding...");

    const payload = portfolioData.education.map(edu => ({
        institution: edu.institution,
        degree: edu.degree,
        period: edu.period,
        location: edu.location,
        focus_area: edu.focusArea,
        description: edu.description,
        // We aren't parsing start/end dates from period string "Aug 2014 - May 2018" here
        // But we could if needed. For now keeping it simple matching the UI.
    }));

    console.log(`Payload prepared with ${payload.length} items.`);

    // Clear Existing
    const { error: deleteError } = await supabase.from('education').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
        console.warn("⚠️ Warning clearing:", deleteError.message);
    }

    // Insert
    const { data, error } = await supabase.from('education').insert(payload).select();

    if (error) {
        console.error("❌ Insertion Failed:", error);
    } else {
        console.log(`✅ Success! Inserted ${data.length} education records.`);
    }
}

seedEducation();
