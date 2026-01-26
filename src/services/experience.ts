
import { supabase } from '@/lib/supabase';
import type { WorkExperience } from '@/data/portfolioData';

export async function getExperience(): Promise<WorkExperience[]> {
    const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('start_date', { ascending: false });

    if (error) {
        console.error("Error fetching experience:", error);
        return [];
    }

    return data.map((item: any) => ({
        ...item,
        startDate: item.start_date,
        endDate: item.end_date,
        experienceType: item.experience_type,
        remoteWork: item.remote_work,
        teamSize: item.team_size,
        technicalEnvironment: item.tech_stack,
        // Ensure arrays are arrays (DB might return null for empty arrays if not careful, though we initialized them)
        achievements: item.achievements || [],
        details: item.details || [],
        tags: item.tags || [],
    })) as WorkExperience[];
}
