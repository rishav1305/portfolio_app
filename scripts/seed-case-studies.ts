
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedCaseStudies() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting Case Studies Data Seeding...");

    const payload = portfolioData.caseStudies.map((cs, index) => ({
        case_id: cs.id,
        title: cs.title,
        role: cs.role,
        challenge: cs.challenge,
        solution: cs.solution,
        impact: cs.impact,
        metrics: cs.metrics,
        tech_stack: cs.techStack,
        display_order: index,
    }));

    const { error: deleteError } = await supabase.from('case_studies').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (deleteError) console.warn("Warning clearing:", deleteError.message);

    const { data, error } = await supabase.from('case_studies').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} case studies.`);
    }
}

seedCaseStudies();
