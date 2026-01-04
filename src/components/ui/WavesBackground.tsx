'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WavesBackground = ({ className = '' }: { className?: string }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Dynamically import vanta to avoid SSR issues
    const loadVanta = async () => {
      if (!vantaRef.current) return;

      try {
        // @ts-ignore
        const WAVES = (await import('vanta/dist/vanta.waves.min')).default;

        if (!vantaEffect.current) {
          vantaEffect.current = WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x1e40af, // Darker blue (blue-800) for better contrast
            shininess: 50.00,
            waveHeight: 20.00,
            waveSpeed: 1.0,
            zoom: 1.0,
            THREE: THREE // Pass the THREE instance
          });
        }
      } catch (error) {
        console.error("Failed to load Vanta Waves:", error);
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

export default WavesBackground;