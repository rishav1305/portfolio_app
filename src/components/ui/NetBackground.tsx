'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NetBackground = ({ className = '' }: { className?: string }) => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        // Dynamically import vanta to avoid SSR issues
        const loadVanta = async () => {
            if (!vantaRef.current) return;

            try {
                // @ts-ignore
                const NET = (await import('vanta/dist/vanta.net.min')).default;

                if (!vantaEffect.current) {
                    vantaEffect.current = NET({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0x3b82f6, // Blue-500
                        backgroundColor: 0xf3f4f6, // Gray-100
                        points: 12.00,
                        maxDistance: 22.00,
                        spacing: 18.00,
                        THREE: THREE // Pass the THREE instance
                    });
                }
            } catch (error) {
                console.error("Failed to load Vanta Net:", error);
            }
        };

        loadVanta();

        return () => {
            if (vantaEffect.current) vantaEffect.current.destroy();
        };
    }, []);

    return (
        <div ref={vantaRef} className={`w-full h-full ${className}`} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
    );
};

export default NetBackground;
