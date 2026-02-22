'use client';

import dynamic from 'next/dynamic';

export const SkillsRadar = dynamic(() => import('@/components/ui/SkillsRadar'), { ssr: false });
export const AIChatWidget = dynamic(() => import('@/components/ui/AIChatWidget'), { ssr: false });
export const WavesBackground = dynamic(() => import('@/components/ui/WavesBackground'), { ssr: false });
