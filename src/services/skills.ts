
import { supabase } from '@/lib/supabase';
import type { SkillCategory } from '@/data/portfolioData';

export async function getSkillCategories(): Promise<SkillCategory> {
    const { data, error } = await supabase
        .from('skill_categories')
        .select('*')
        .order('display_order', { ascending: true }); // Ensure preserved order

    if (error) {
        console.error("Error fetching skills:", error);
        return {};
    }

    // Reconstruct the object structure: { "CategoryName": [skills...], ... }
    const skillsMap: SkillCategory = {};

    data.forEach((row: any) => {
        skillsMap[row.category_name] = row.skills;
    });

    return skillsMap;
}
