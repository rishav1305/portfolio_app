
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedProjects() {
    // Dynamic import to ensure .env is loaded first
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("🌱 Starting Data Seeding...");

    // 1. Prepare Data
    // We map the local data to match the DB columns (snake_case)
    const projectsToInsert = portfolioData.projects.map(p => ({
        title: p.title,
        description: p.description,
        short_description: p.short_description,
        image: p.image,
        thumbnail: p.thumbnail,
        tech_stack: p.techStack, // Maps to tech_stack
        link: p.link,
        category: p.category,
        company: p.company,
        clients: p.clients,
        // Parse dates if available (assuming YYYY-MM-DD string in data)
        // If "start_date" isn't in your TS type, we might check raw object or just use null if undefined
        start_date: (p as any).start_date || null,
        end_date: (p as any).end_date || null,
        // created_at will be auto-generated
    }));

    console.log(`Payload prepared with ${projectsToInsert.length} projects.`);

    // 2. Clear Existing Data (Optional - prevents duplicates for this demo)
    const { error: deleteError } = await supabase.from('projects').delete().neq('id', '00000000-0000-0000-0000-000000000000'); // Delete not-null UUIDs (basically all)
    if (deleteError) {
        console.warn("⚠️ Warning clearing existing data:", deleteError.message);
    } else {
        console.log("DATA CLEARED: Removed all existing projects to avoid duplicates.");
    }

    // 3. Insert Data
    const { data, error } = await supabase.from('projects').insert(projectsToInsert).select();

    if (error) {
        console.error("❌ Insertion Failed:", error);
    } else {
        console.log(`✅ Success! Inserted ${data.length} projects into Supabase.`);
    }
}

seedProjects();
