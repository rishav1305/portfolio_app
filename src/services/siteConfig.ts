
import { supabase } from '@/lib/supabase';
import type { SiteConfig } from '@/types/portfolio';
import type { SiteConfigRow } from '@/types/db-rows';

export async function getSiteConfig(): Promise<SiteConfig | null> {
    const { data, error } = await supabase
        .from('site_config')
        .select('*')
        .limit(1)
        .single();

    if (error) {
        console.error("Error fetching site config:", error);
        return null;
    }

    const item = data as SiteConfigRow;
    return {
        name: item.name,
        title: item.title,
        email: item.email,
        short_bio: item.short_bio,
        long_bio: item.long_bio || [],
        location: item.location,
        years_experience_start_year: item.years_experience_start_year,
        whatsapp: item.whatsapp,
        contact_info: item.contact_info || { sidebarTitle: '', buttonText: '' },
        social_media: item.social_media || { github: '', linkedin: '', leetcode: '', medium: '' },
        domain_expertise: item.domain_expertise || [],
    };
}
