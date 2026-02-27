
import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import type { WorkExperience } from '@/types/portfolio';
import type { ExperienceRow } from '@/types/db-rows';

export const getExperience = cache(async (): Promise<WorkExperience[]> => {
    const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('start_date', { ascending: false });

    if (error) {
        console.error("Error fetching experience:", error);
        return [];
    }

    return (data as ExperienceRow[]).map((item) => ({
        period: item.period,
        startDate: item.start_date,
        endDate: item.end_date,
        location: item.location,
        company: item.company,
        role: item.role,
        experienceType: item.experience_type,
        remoteWork: item.remote_work,
        teamSize: item.team_size ?? undefined,
        technicalEnvironment: item.tech_stack,
        clients: item.clients ?? undefined,
        managerialAchievements: item.managerial_achievements ?? undefined,
        aiEnablement: item.ai_enablement ?? undefined,
        keyMetrics: item.key_metrics ?? undefined,
        achievements: item.achievements || [],
        details: item.details || [],
        tags: item.tags || [],
    }));
});
