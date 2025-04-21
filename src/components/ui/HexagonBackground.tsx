'use client';

import React, { useEffect, useRef, useState } from 'react';

interface HexagonBackgroundProps {
  className?: string;
}

const HexagonBackground: React.FC<HexagonBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: -1000, y: -1000 });
  const prevMousePosition = useRef({ x: -1000, y: -1000 });
  const animationFrameId = useRef<number | undefined>(undefined);
  const ripples = useRef<Array<{ x: number; y: number; size: number; opacity: number; strength: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    // Enable anti-aliasing for smoother lines
    // @ts-ignore - This is a non-standard property but works in most browsers
    if (ctx.imageSmoothingEnabled !== undefined) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }
    
    let hexagons: Array<{
      x: number;
      y: number;
      size: number;
      phase: number;
      connections: { idx: number; distance: number }[];
      hoverIntensity: number;
    }> = [];
    let width = 0;
    let height = 0;
    let devicePixelRatio = window.devicePixelRatio || 1;
    
    const resizeCanvas = () => {
      // Handle high DPI displays for sharper rendering
      devicePixelRatio = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      
      // Scale the context to match device pixel ratio
      ctx.scale(devicePixelRatio, devicePixelRatio);
      
      // Generate hexagons
      const hexSize = 28; // Slightly smaller for more density
      const horizontalSpacing = hexSize * 1.7;
      const verticalSpacing = hexSize * 1.48;
      const maxConnDistance = hexSize * 3.5; // Maximum distance for connections
      
      hexagons = [];
      
      // Create hexagons
      for (let y = -hexSize; y < height + hexSize; y += verticalSpacing) {
        const isOddRow = Math.floor(y / verticalSpacing) % 2 === 1;
        const xOffset = isOddRow ? horizontalSpacing / 2 : 0;
        
        for (let x = -hexSize; x < width + hexSize; x += horizontalSpacing) {
          hexagons.push({
            x: x + xOffset,
            y,
            size: hexSize,
            phase: Math.random() * Math.PI * 2,
            connections: [], // Will be populated below
            hoverIntensity: 0 // For smooth hover transitions
          });
        }
      }
      
      // Calculate connections between hexagons
      for (let i = 0; i < hexagons.length; i++) {
        const hex = hexagons[i];
        for (let j = i + 1; j < hexagons.length; j++) {
          const otherHex = hexagons[j];
          const distance = Math.hypot(hex.x - otherHex.x, hex.y - otherHex.y);
          
          if (distance < maxConnDistance) {
            hex.connections.push({ idx: j, distance });
            otherHex.connections.push({ idx: i, distance });
          }
        }
      }
    };
    
    // Throttled mouse move handler for better performance
    let lastMove = 0;
    const throttleTime = 5; // ms
    
    const handleMouseMove = (event: MouseEvent) => {
      const now = performance.now();
      if (now - lastMove < throttleTime) return;
      lastMove = now;
      
      const rect = canvas.getBoundingClientRect();
      prevMousePosition.current = { ...mousePosition.current };
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      
      setIsHovering(true);
      
      // Calculate mouse speed for more dynamic ripples
      const dx = mousePosition.current.x - prevMousePosition.current.x;
      const dy = mousePosition.current.y - prevMousePosition.current.y;
      const speed = Math.hypot(dx, dy);
      
      // Create ripples based on movement speed
      if (speed > 5 || Math.random() > 0.85) {
        const strength = Math.min(1, Math.max(0.3, speed / 50));
        ripples.current.push({
          x: mousePosition.current.x,
          y: mousePosition.current.y,
          size: 0,
          opacity: 0.3 + strength * 0.4,
          strength // Use movement speed to determine ripple strength
        });
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      mousePosition.current = { x: -1000, y: -1000 };
    };
    
    const handleClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      
      // Create a stronger ripple on click
      for (let i = 0; i < 3; i++) { // Multiple ripples for more impact
        setTimeout(() => {
          ripples.current.push({
            x: clickX + (Math.random() * 20 - 10),
            y: clickY + (Math.random() * 20 - 10),
            size: i * 10,
            opacity: 0.9 - i * 0.2,
            strength: 1.0
          });
        }, i * 50);
      }
    };
    
    const drawHexagon = (
      hex: typeof hexagons[number],
      highlightIntensity: number,
      inRipple: boolean
    ) => {
      if (!ctx) return;
      
      const { x, y, size, phase, hoverIntensity } = hex;
      const time = performance.now() * 0.0008; // Slightly slower for smoother animation
      
      // Smooth hover intensity transitions
      hex.hoverIntensity = inRipple || highlightIntensity > hex.hoverIntensity 
        ? Math.min(1, hex.hoverIntensity + 0.1) 
        : Math.max(0, hex.hoverIntensity - 0.05);
      
      const intensity = Math.max(hex.hoverIntensity, highlightIntensity);
      
      // More subtle pulsation
      const pulsatingSize = size * (0.95 + 0.05 * Math.sin(time + phase));
      
      // Draw hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const pointX = x + pulsatingSize * Math.cos(angle);
        const pointY = y + pulsatingSize * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
      
      // Enhanced visuals for highlighted hexagons
      const baseOpacity = 0.15;
      const maxOpacity = inRipple ? 0.9 : 0.75;
      const finalOpacity = baseOpacity + intensity * (maxOpacity - baseOpacity);
      
      // Use a more vibrant blue color with higher opacity
      const baseColor = inRipple ? '23, 92, 230' : '23, 92, 230';
      
      // Draw hexagon stroke with improved visibility
      ctx.strokeStyle = `rgba(${baseColor}, ${finalOpacity})`;
      ctx.lineWidth = inRipple ? 1.5 : 1 + intensity * 0.5;
      ctx.stroke();
      
      // Add fill for better visual impact
      if (intensity > 0.1 || inRipple) {
        const fillOpacity = inRipple ? 0.15 : intensity * 0.1;
        ctx.fillStyle = `rgba(${baseColor}, ${fillOpacity})`;
        ctx.fill();
      }
      
      // Draw connections to nearby hexagons
      if (intensity > 0.15 || inRipple) {
        drawConnections(hex, intensity, inRipple);
      }
    };
    
    const drawConnections = (
      hex: typeof hexagons[number],
      intensity: number,
      inRipple: boolean
    ) => {
      const { x, y, connections } = hex;
      
      connections.forEach(conn => {
        const otherHex = hexagons[conn.idx];
        if (!otherHex) return;
        
        // Only draw connections for visible hexagons
        if (otherHex.hoverIntensity < 0.05 && intensity < 0.15 && !inRipple) return;
        
        // Normalized distance for opacity calculation
        const normalized = Math.min(1, conn.distance / (hex.size * 3));
        const connOpacity = (1 - normalized) * intensity * 0.5;
        
        if (connOpacity > 0.02) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(otherHex.x, otherHex.y);
          ctx.strokeStyle = `rgba(23, 92, 230, ${connOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    };
    
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw ripples with improved visuals
      for (let i = ripples.current.length - 1; i >= 0; i--) {
        const ripple = ripples.current[i];
        
        // Faster expansion for more responsive feedback
        ripple.size += 6 + ripple.strength * 4;
        
        // Slower fade for longer-lasting effects
        ripple.opacity -= 0.008 + ripple.strength * 0.004;
        
        if (ripple.opacity <= 0) {
          ripples.current.splice(i, 1);
          continue;
        }
      }
      
      // Process hexagons with improved hover detection
      hexagons.forEach(hex => {
        const distanceToMouse = Math.hypot(hex.x - mousePosition.current.x, hex.y - mousePosition.current.y);
        const hoverRadius = isHovering ? 180 : 0;
        
        // Determine if hexagon is affected by any ripples
        let inRipple = false;
        let rippleHighlight = 0;
        
        ripples.current.forEach(ripple => {
          const distance = Math.hypot(hex.x - ripple.x, hex.y - ripple.y);
          const rippleEdge = ripple.size;
          const rippleWidth = 25 + ripple.strength * 15;
          
          if (Math.abs(distance - rippleEdge) < rippleWidth) {
            const normalizedDist = Math.abs(distance - rippleEdge) / rippleWidth;
            const rippleIntensity = (1 - normalizedDist) * ripple.opacity * ripple.strength;
            rippleHighlight = Math.max(rippleHighlight, rippleIntensity);
            inRipple = true;
          }
        });
        
        // Calculate hover highlight intensity with smoother falloff
        let hoverHighlight = 0;
        if (distanceToMouse < hoverRadius) {
          // Use cubic easing for more natural hover transition
          const t = 1 - (distanceToMouse / hoverRadius);
          hoverHighlight = t * t * (3 - 2 * t);
        }
        
        // Draw with the combined highlight value
        const highlightIntensity = Math.max(hoverHighlight, rippleHighlight * 0.7);
        drawHexagon(hex, highlightIntensity, inRipple);
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Initialize - make sure this runs right away
    resizeCanvas();
    
    // Set up event listeners after initial setup
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    
    // Start animation loop
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isHovering]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`} style={{ position: 'absolute', inset: 0 }}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full" 
        style={{ display: 'block', opacity: 0.9 }}
      />
    </div>
  );
};

export default HexagonBackground;