import React from 'react';
import type { StatItem } from '@/types/portfolio';

interface StatsDashboardProps {
    stats?: StatItem[];
}

const StatsDashboard = ({ stats = [] }: StatsDashboardProps) => {

    return (
        <div className="w-full bg-white border-y border-gray-100 py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="px-4">
                            <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsDashboard;
