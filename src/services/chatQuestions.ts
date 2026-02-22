
import { supabase } from '@/lib/supabase';
import type { ChatQuestion } from '@/types/portfolio';
import type { ChatQuestionRow } from '@/types/db-rows';

export async function getChatQuestions(): Promise<ChatQuestion[]> {
    const { data, error } = await supabase
        .from('chat_questions')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching chat questions:", error);
        return [];
    }

    return (data as ChatQuestionRow[]).map((item) => ({
        id: item.question_id,
        text: item.text,
        response: item.response,
    }));
}
