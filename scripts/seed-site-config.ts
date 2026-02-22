
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import portfolioData from '../src/data/portfolioData';

async function seedSiteConfig() {
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log("Starting Site Config Data Seeding...");

    const { personalInfo } = portfolioData;

    const payload = {
        name: personalInfo.name,
        title: personalInfo.title,
        email: personalInfo.email,
        short_bio: personalInfo.shortBio,
        long_bio: personalInfo.longBio,
        location: personalInfo.location,
        years_experience_start_year: personalInfo.yearsExperienceStartYear,
        whatsapp: personalInfo.whatsapp,
        contact_info: personalInfo.contactInfo,
        social_media: personalInfo.socialMedia,
        domain_expertise: (personalInfo as any).domainExpertise || [],
    };

    // Clear existing
    const { error: deleteError } = await supabase
        .from('site_config')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
        console.warn("Warning clearing:", deleteError.message);
    }

    const { data, error } = await supabase.from('site_config').insert(payload).select();

    if (error) {
        console.error("Insertion Failed:", error);
    } else {
        console.log(`Success! Inserted ${data.length} site_config record(s).`);
    }
}

seedSiteConfig();
