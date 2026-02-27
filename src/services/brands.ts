
import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import type { Brand } from '@/types/portfolio';
import type { BrandRow } from '@/types/db-rows';

export const getBrands = cache(async (): Promise<Brand[]> => {
    const { data, error } = await supabase
        .from('brands')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching brands:", error);
        return [];
    }

    return (data as BrandRow[]).map((item) => ({
        id: item.id,
        name: item.name,
        logo: item.logo,
        color: item.color ?? undefined,
    }));
});
