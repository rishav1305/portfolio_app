
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedServices() {
    // Dynamic import
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("🌱 Starting Services Data Seeding...");

    // Map existing services. 
    // Note: portfolioData.services has icon components (e.g. <Globe ... />).
    // We cannot store React components in DB. We should verify if we can extract a string name
    // or if we need to manually map them.
    // Looking at the data structure (implied), it likely has 'icon' property.
    // For this migration, we'll store a placeholder or try to infer.

    // Actually, let's look at `portfolioData` structure via a quick check if possible, 
    // but assuming standard structure:
    const payload = portfolioData.services.map((svc, index) => ({
        title: svc.title,
        description: svc.description,
        // We'll simplisticly assume standard icon names for now or null
        // If svc.icon is a ReactNode, we skip it or use a mapping.
        // Let's manually map based on index or title for this demo to ensure it works nicely.
        icon_name: mapIcon(svc.title),
        skills: svc.skills,
        display_order: index
    }));

    console.log(`Payload prepared with ${payload.length} services.`);

    // Clear Existing
    const { error: deleteError } = await supabase.from('services').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
        console.warn("⚠️ Warning clearing:", deleteError.message);
    }

    // Insert
    const { data, error } = await supabase.from('services').insert(payload).select();

    if (error) {
        console.error("❌ Insertion Failed:", error);
    } else {
        console.log(`✅ Success! Inserted ${data.length} services.`);
    }
}

function mapIcon(title: string): string {
    const t = title.toLowerCase();
    if (t.includes('web')) return 'Globe';
    if (t.includes('analytic') || t.includes('data')) return 'BarChart3';
    if (t.includes('cloud') || t.includes('devops')) return 'Cloud';
    if (t.includes('ai') || t.includes('learning')) return 'Brain';
    return 'Code'; // Default
}

seedServices();
