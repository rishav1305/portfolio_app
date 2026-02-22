'use client';

import React, { createContext, useContext } from 'react';
import type { SiteConfig } from '@/types/portfolio';

// Fallback values so components never break if no data is passed
const DEFAULT_SITE_CONFIG: SiteConfig = {
    name: 'RISHAV',
    title: 'AI Engineer | AI Consultant | AI Researcher',
    email: 'mail@rishavchatterjee.com',
    short_bio: '',
    long_bio: [],
    location: 'Delhi',
    years_experience_start_year: 2018,
    whatsapp: '+91 9560382351',
    contact_info: { sidebarTitle: 'CONNECT WITH RISHAV', buttonText: 'CONNECT WITH RISHAV' },
    social_media: {
        github: 'https://github.com/rishav1305',
        linkedin: 'https://www.linkedin.com/in/chatterjeerishav/',
        leetcode: 'https://leetcode.com/u/rishav115/',
        medium: 'https://medium.com/@chatterjeerishav96',
    },
    domain_expertise: [],
};

const SiteConfigContext = createContext<SiteConfig>(DEFAULT_SITE_CONFIG);

type SiteConfigProviderProps = {
    initialConfig?: SiteConfig | null;
    children: React.ReactNode;
};

export function SiteConfigProvider({ initialConfig, children }: SiteConfigProviderProps) {
    const config = initialConfig || DEFAULT_SITE_CONFIG;

    return (
        <SiteConfigContext.Provider value={config}>
            {children}
        </SiteConfigContext.Provider>
    );
}

export function useSiteConfig(): SiteConfig {
    return useContext(SiteConfigContext);
}
