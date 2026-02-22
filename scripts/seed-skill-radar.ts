
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedSkillRadar() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting Skill Radar Data Seeding...");

    const payload = portfolioData.skillRadarData.map((item, index) => ({
        subject: item.subject,
        value: item.A,
        full_mark: item.fullMark,
        display_order: index,
    }));

    const { error: deleteError } = await supabase.from('skill_radar_data').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (deleteError) console.warn("Warning clearing:", deleteError.message);

    const { data, error } = await supabase.from('skill_radar_data').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} skill radar data points.`);
    }
}

seedSkillRadar();
