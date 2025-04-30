"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

// Node component for our data flow
function Node({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Connection line between nodes
function Connection({ start, end, color }: { start: [number, number, number], end: [number, number, number], color: string }) {
  const ref = useRef<THREE.Object3D>(null!);
  
  useEffect(() => {
    const points: THREE.Vector3[] = [];
    points.push(new THREE.Vector3(...start));
    points.push(new THREE.Vector3(...end));
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    if (ref.current && 'geometry' in ref.current) {
      (ref.current as any).geometry = geometry;
    }
  }, [start, end]);
  
  return (
    <line ref={ref as any}>
      <bufferGeometry />
      <lineBasicMaterial color={color} linewidth={1} />
    </line>
  );
}

// Movement animation for particles along connections
function Particle({ start, end, color, speed = 0.01 }: { 
  start: [number, number, number], 
  end: [number, number, number], 
  color: string,
  speed?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const progressRef = useRef(0);
  
  useFrame(() => {
    progressRef.current += speed;
    
    if (progressRef.current >= 1) {
      progressRef.current = 0;
    }
    
    const x = start[0] + (end[0] - start[0]) * progressRef.current;
    const y = start[1] + (end[1] - start[1]) * progressRef.current;
    const z = start[2] + (end[2] - start[2]) * progressRef.current;
    
    meshRef.current.position.set(x, y, z);
  });
  
  return (
    <mesh ref={meshRef} position={start}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

// Scene that rotates slowly
function Scene() {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame(() => {
    groupRef.current.rotation.y += 0.002;
  });
  
  // Define our data flow architecture nodes and connections
  const nodes = [
    { id: 'source', position: [-4, 0, 0] as [number, number, number], color: '#4299e1' },
    { id: 'transform', position: [-1, 2, 0] as [number, number, number], color: '#38b2ac' },
    { id: 'process', position: [0, -2, 1] as [number, number, number], color: '#ed8936' },
    { id: 'warehouse', position: [2, 1, -1] as [number, number, number], color: '#9f7aea' },
    { id: 'analytics', position: [4, -1, 0] as [number, number, number], color: '#48bb78' },
  ];
  
  const connections = [
    { from: 'source', to: 'transform', color: '#90cdf4' },
    { from: 'transform', to: 'process', color: '#90cdf4' },
    { from: 'process', to: 'warehouse', color: '#90cdf4' },
    { from: 'warehouse', to: 'analytics', color: '#90cdf4' },
    { from: 'source', to: 'process', color: '#fbd38d' },
  ];
  
  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node) => (
        <Node key={node.id} position={node.position} color={node.color} />
      ))}
      
      {/* Connections */}
      {connections.map((conn, i) => {
        const from = nodes.find(n => n.id === conn.from)!;
        const to = nodes.find(n => n.id === conn.to)!;
        return (
          <Connection
            key={`conn-${i}`}
            start={from.position}
            end={to.position}
            color={conn.color}
          />
        );
      })}
      
      {/* Data particles flowing */}
      {connections.map((conn, i) => {
        const from = nodes.find(n => n.id === conn.from)!;
        const to = nodes.find(n => n.id === conn.to)!;
        return (
          <Particle
            key={`particle-${i}`}
            start={from.position}
            end={to.position}
            color="#ffffff"
            speed={0.005 + (i * 0.002)}
          />
        );
      })}
      
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      
      {/* Directional light */}
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
    </group>
  );
}

export default function DataFlow3D() {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Scene />
      </Canvas>
      {/* Removed the label with 'Data Engineering Pipeline Architecture' text */}
    </div>
  );
}