
import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import type { FAQItem } from '@/types/portfolio';
import type { FAQRow } from '@/types/db-rows';

export const getFaqs = cache(async (): Promise<FAQItem[]> => {
    const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching FAQs:", error);
        return [];
    }

    return (data as FAQRow[]).map((item) => ({
        question: item.question,
        answer: item.answer,
    }));
});
