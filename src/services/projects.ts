
import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import type { Project } from '@/types/portfolio';
import type { ProjectRow } from '@/types/db-rows';

export const getProjects = cache(async (): Promise<Project[]> => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching projects:", error);
        return [];
    }

    return (data as ProjectRow[]).map((item) => ({
        title: item.title,
        description: item.description,
        short_description: item.short_description ?? undefined,
        image: item.image,
        thumbnail: item.thumbnail ?? undefined,
        techStack: item.tech_stack,
        link: item.link,
        category: item.category,
        company: item.company ?? undefined,
        clients: item.clients ?? undefined,
    }));
});

export const getProjectBySlug = cache(async (slug: string): Promise<Project | null> => {
    const projects = await getProjects();
    return projects.find(p => p.link.includes(slug)) || null;
});

export const getProjectById = cache(async (id: string): Promise<Project | null> => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error("Error fetching project by ID:", error);
        return null;
    }

    const item = data as ProjectRow;
    return {
        title: item.title,
        description: item.description,
        short_description: item.short_description ?? undefined,
        image: item.image,
        thumbnail: item.thumbnail ?? undefined,
        techStack: item.tech_stack,
        link: item.link,
        category: item.category,
        company: item.company ?? undefined,
        clients: item.clients ?? undefined,
    };
});
