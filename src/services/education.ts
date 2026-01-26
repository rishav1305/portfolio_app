
import { supabase } from '@/lib/supabase';
import type { Education } from '@/data/portfolioData';

export async function getEducation(): Promise<Education[]> {
    const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('id', { ascending: true }); // Or order by arbitrary 'order' col if we add one

    if (error) {
        console.error("Error fetching education:", error);
        return [];
    }

    return data.map((item: any) => ({
        institution: item.institution,
        degree: item.degree,
        period: item.period,
        location: item.location,
        focusArea: item.focus_area,
        description: item.description,
    })) as Education[];
}
