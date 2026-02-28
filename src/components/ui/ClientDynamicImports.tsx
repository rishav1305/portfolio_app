'use client';

import dynamic from 'next/dynamic';

export const SkillsRadar = dynamic(() => import('@/components/ui/SkillsRadar'), { ssr: false });
export const AutoScrollTestimonials = dynamic(() => import('@/components/ui/AutoScrollTestimonials'), { ssr: false });
export const ExperienceTimeline = dynamic(() => import('@/components/ui/ExperienceTimeline'), { ssr: false });
