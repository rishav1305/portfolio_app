
import { supabase } from '@/lib/supabase';
import type { SkillRadarDataPoint } from '@/types/portfolio';
import type { SkillRadarRow } from '@/types/db-rows';

export async function getSkillRadarData(): Promise<SkillRadarDataPoint[]> {
    const { data, error } = await supabase
        .from('skill_radar_data')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching skill radar data:", error);
        return [];
    }

    return (data as SkillRadarRow[]).map((item) => ({
        subject: item.subject,
        A: item.value,
        fullMark: item.full_mark,
    }));
}
