
import { supabase } from '@/lib/supabase';
import type { StatItem } from '@/types/portfolio';
import type { StatsDashboardRow } from '@/types/db-rows';

export async function getStatsDashboard(): Promise<StatItem[]> {
    const { data, error } = await supabase
        .from('stats_dashboard')
        .select('*')
        .order('display_order', { ascending: true });

    if (error) {
        console.error("Error fetching stats dashboard:", error);
        return [];
    }

    return (data as StatsDashboardRow[]).map((item) => ({
        label: item.label,
        value: item.value,
        icon: item.icon ?? undefined,
    }));
}
