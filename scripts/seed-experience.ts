
import * as dotenv from 'dotenv';
dotenv.config();

import portfolioData from '../src/data/portfolioData';

async function seedExperience() {
    console.log("DEBUG: Keys present?", {
        url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        key: !!process.env.SUPABASE_SERVICE_ROLE_KEY
    });

    // Dynamic import
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("🌱 Starting Experience Data Seeding...");

    // Combine professional and freelance
    const allExperience = [...portfolioData.professionalExperience, ...portfolioData.freelanceExperience];

    const payload = allExperience.map(exp => ({
        company: exp.company,
        role: exp.role,
        period: exp.period,
        start_date: exp.startDate,
        end_date: exp.endDate,
        location: exp.location,
        experience_type: exp.experienceType,
        achievements: exp.achievements || [],
        details: exp.details || [],
        tags: exp.tags || [],
        remote_work: exp.remoteWork,
        team_size: exp.teamSize,
        tech_stack: exp.technicalEnvironment || [],
    }));

    console.log(`Payload prepared with ${payload.length} items.`);

    // Clear Existing
    const { error: deleteError } = await supabase.from('experience').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
        console.warn("⚠️ Warning clearing:", deleteError.message);
    }

    // Insert
    const { data, error } = await supabase.from('experience').insert(payload).select();

    if (error) {
        console.error("❌ Insertion Failed:", error);
    } else {
        console.log(`✅ Success! Inserted ${data.length} experience records.`);
    }
}

seedExperience();
