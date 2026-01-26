
import { supabase } from '@/lib/supabase';
import type { Project } from '@/data/portfolioData';

export async function getProjects(): Promise<Project[]> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching projects:", error);
        return [];
    }

    // Map DB snake_case columns back to CamelCase TS types if needed
    // Our seeding script mapped camel->snake, so we need snake->camel here to match the type
    // OR just use 'any' for now to speed up, or better: adjust the type or map it properly.

    // Let's do a proper map to be safe
    return data.map((p: any) => ({
        ...p,
        techStack: p.tech_stack, // DB uses snake_case
    })) as Project[];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    // Assuming 'link' is used as slug or we just filter by title-slug?
    // The current data uses "link": "projects/foo-bar". 
    // We should query where link LIKE %slug or just fetch all and find?
    // Ideally we should have a 'slug' column. For now let's loosely match or fetch all.

    // Efficient way: Fetch all (since it's small) and find match
    const projects = await getProjects();
    return projects.find(p => p.link.includes(slug)) || null;
}

export async function getProjectById(id: string): Promise<Project | null> {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error("Error fetching project by ID:", error);
        return null;
    }

    return {
        ...data,
        techStack: data.tech_stack,
    } as Project;
}
