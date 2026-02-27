
import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import type { CaseStudy } from '@/types/portfolio';
import type { CaseStudyRow } from '@/types/db-rows';

export const getCaseStudies = cache(async (): Promise<CaseStudy[]> => {
    const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching case studies:", error);
        return [];
    }

    return (data as CaseStudyRow[]).map((item) => ({
        id: item.case_id,
        title: item.title,
        role: item.role,
        challenge: item.challenge,
        solution: item.solution,
        impact: item.impact,
        metrics: item.metrics || [],
        techStack: item.tech_stack || [],
    }));
});
