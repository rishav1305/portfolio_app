
import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import type { SkillCategory } from '@/types/portfolio';
import type { SkillCategoryRow } from '@/types/db-rows';

export const getSkillCategories = cache(async (): Promise<SkillCategory> => {
    const { data, error } = await supabase
        .from('skill_categories')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching skills:", error);
        return {};
    }

    const skillsMap: SkillCategory = {};
    (data as SkillCategoryRow[]).forEach((row) => {
        skillsMap[row.category_name] = row.skills;
    });

    return skillsMap;
});
