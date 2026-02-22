
import { supabase } from '@/lib/supabase';
import type { Testimonial } from '@/types/portfolio';
import type { TestimonialRow } from '@/types/db-rows';

export async function getTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching testimonials:", error);
        return [];
    }

    return (data as TestimonialRow[]).map((item) => ({
        name: item.name,
        position: item.position,
        company: item.company,
        text: item.text,
        image: item.image ?? undefined,
        location: item.location ?? undefined,
    }));
}
