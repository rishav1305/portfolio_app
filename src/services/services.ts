
import { supabase } from '@/lib/supabase';
import type { Service } from '@/data/portfolioData';

export async function getServices(): Promise<Service[]> {
    const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching services:", error);
        return [];
    }

    return data.map((item: any) => ({
        title: item.title,
        description: item.description,
        icon: item.icon_name, // Returning string name, component handling needs to be done in UI
        skills: item.skills || [],
        features: item.features || [],
    })) as unknown as Service[]; // Cast as unknown first because Service interface might expect ReactNode for icon
}
