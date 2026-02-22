
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedServicesV3() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting Services V3 Data Seeding...");

    const payload = portfolioData.servicesV3.map((svc, index) => ({
        title: svc.title,
        description: svc.description,
        price_range: svc.priceRange,
        timeline: svc.timeline,
        features: svc.features,
        service_type: 'v3',
        display_order: index,
    }));

    // Only clear v3 services, not all services
    const { error: deleteError } = await supabase
        .from('services')
        .delete()
        .eq('service_type', 'v3');

    if (deleteError) console.warn("Warning clearing:", deleteError.message);

    const { data, error } = await supabase.from('services').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} V3 services.`);
    }
}

seedServicesV3();
