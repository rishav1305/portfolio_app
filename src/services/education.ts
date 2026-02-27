
import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import type { Education } from '@/types/portfolio';
import type { EducationRow } from '@/types/db-rows';

export const getEducation = cache(async (): Promise<Education[]> => {
    const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        console.error("Error fetching education:", error);
        return [];
    }

    return (data as EducationRow[]).map((item) => ({
        institution: item.institution,
        degree: item.degree,
        period: item.period,
        location: item.location,
        focusArea: item.focus_area,
        description: item.description ?? undefined,
    }));
});
