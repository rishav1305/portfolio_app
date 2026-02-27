
import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import type { Service, ServiceV3 } from '@/types/portfolio';
import type { ServiceRow } from '@/types/db-rows';

export const getServices = cache(async (): Promise<Service[]> => {
    const { data, error } = await supabase
        .from('services')
        .select('*')
        .is('service_type', null)
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching services:", error);
        return [];
    }

    return (data as ServiceRow[]).map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        iconName: item.icon_name || '',
        skills: item.skills || [],
    }));
});

export const getServicesV3 = cache(async (): Promise<ServiceV3[]> => {
    const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('service_type', 'v3')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching services v3:", error);
        return [];
    }

    return (data as ServiceRow[]).map((item) => ({
        title: item.title,
        description: item.description,
        priceRange: item.price_range || '',
        timeline: item.timeline || '',
        features: item.features || [],
    }));
});
