'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WavesBackgroundProps {
  children: React.ReactNode;
}

export default function WavesBackground({ children }: WavesBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Load vanta.waves.min.js directly via script tag to ensure it's available
    const loadVantaScript = () => {
      return new Promise<void>((resolve, reject) => {
        try {
          const scriptExists = document.querySelector('script[src*="vanta.waves.min.js"]');
          
          if (scriptExists) {
            resolve();
            return;
          }
          
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
          script.async = true;
          script.onload = () => resolve();
          script.onerror = (event) => reject(new Error(`Failed to load Vanta.js script: ${event}`));
          document.body.appendChild(script);
        } catch (error) {
          reject(error);
        }
      });
    };

    const initVanta = async () => {
      try {
        await loadVantaScript();
        
        if (!vantaEffect.current && vantaRef.current && (window as any).VANTA) {
          vantaEffect.current = (window as any).VANTA.WAVES({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3A3CEB, // Blue color similar to yan-holtz.com
            shininess: 60.00,
            waveHeight: 20.00,
            waveSpeed: 0.50,
            zoom: 0.65
          });
        }
      } catch (error) {
        console.error("Error initializing Vanta effect:", error);
        // Continue without the background effect rather than breaking the app
      }
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      <div ref={vantaRef} className="absolute inset-0 z-0 min-h-[100vh]" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}