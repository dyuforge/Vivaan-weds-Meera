import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Sparkles as SparkleIcon, RotateCw } from 'lucide-react';

const EmeraldMayuraBaradariModel: React.FC<{ autoRotate: boolean }> = ({ autoRotate }) => {
  const pavilionRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Mesh>(null);
  const floatingLotusesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pavilionRef.current && autoRotate) {
      pavilionRef.current.rotation.y = t * 0.22;
    }
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(t * 7.5) * 0.16;
    }
    if (floatingLotusesRef.current) {
      floatingLotusesRef.current.rotation.y = -t * 0.32;
    }
  });

  const numPillars = 8;
  const pillarRadius = 1.6;

  return (
    <group ref={pavilionRef} position={[0, -0.4, 0]}>
      <mesh position={[0, -1.12, 0]}>
        <cylinderGeometry args={[2.75, 2.9, 0.16, 48]} />
        <meshStandardMaterial color="#042f26" roughness={0.15} metalness={0.85} />
      </mesh>
      <mesh position={[0, -0.95, 0]}>
        <cylinderGeometry args={[2.05, 2.2, 0.2, 8]} />
        <meshStandardMaterial color="#0A3C30" roughness={0.35} metalness={0.55} />
      </mesh>
      <mesh position={[0, -0.82, 0]}>
        <cylinderGeometry args={[1.85, 1.95, 0.1, 8]} />
        <meshStandardMaterial color="#E5C158" roughness={0.22} metalness={0.88} />
      </mesh>

      {Array.from({ length: numPillars }).map((_, idx) => {
        const angle = (idx / numPillars) * Math.PI * 2;
        const px = Math.cos(angle) * pillarRadius;
        const pz = Math.sin(angle) * pillarRadius;
        return (
          <group key={idx} position={[px, 0, pz]}>
            <mesh position={[0, -0.68, 0]}>
              <cylinderGeometry args={[0.17, 0.21, 0.22, 8]} />
              <meshStandardMaterial color="#E5C158" roughness={0.25} metalness={0.88} />
            </mesh>
            <mesh position={[0, 0.18, 0]}>
              <cylinderGeometry args={[0.095, 0.12, 1.65, 16]} />
              <meshStandardMaterial color="#F4FBF7" roughness={0.25} metalness={0.45} />
            </mesh>
            <mesh position={[0, 1.05, 0]}>
              <cylinderGeometry args={[0.2, 0.12, 0.16, 8]} />
              <meshStandardMaterial color="#E5C158" roughness={0.25} metalness={0.88} />
            </mesh>
          </group>
        );
      })}

      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[1.95, 2.25, 0.18, 8]} />
        <meshStandardMaterial color="#073329" roughness={0.35} metalness={0.6} />
      </mesh>
      <mesh position={[0, 2.02, 0]} scale={[1, 0.88, 1]}>
        <sphereGeometry args={[1.12, 32, 24]} />
        <meshStandardMaterial color="#E5C158" roughness={0.2} metalness={0.92} />
      </mesh>
      <mesh position={[0, 2.95, 0]}>
        <coneGeometry args={[0.16, 0.52, 16]} />
        <meshStandardMaterial color="#FBF0C4" roughness={0.1} metalness={0.98} />
      </mesh>

      <group position={[0, -0.64, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.52, 0.62, 0.22, 8]} />
          <meshStandardMaterial color="#E5C158" roughness={0.25} metalness={0.85} />
        </mesh>
        <mesh ref={flameRef} position={[0, 0.42, 0]}>
          <coneGeometry args={[0.22, 0.6, 14]} />
          <meshStandardMaterial color="#F59E0B" emissive="#EA580C" emissiveIntensity={1.9} />
        </mesh>
        <pointLight position={[0, 0.65, 0]} intensity={2.6} color="#FFAA33" distance={5.5} />
      </group>

      <group ref={floatingLotusesRef} position={[0, -0.78, 0]}>
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2;
          const radius = 2.38;
          return (
            <group key={i} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}>
              <mesh position={[0, -0.02, 0]}>
                <cylinderGeometry args={[0.12, 0.06, 0.05, 12]} />
                <meshStandardMaterial color="#F472B6" roughness={0.3} metalness={0.4} />
              </mesh>
              <mesh position={[0, 0.08, 0]}>
                <sphereGeometry args={[0.035, 8, 8]} />
                <meshStandardMaterial color="#FFFDF7" emissive="#FFE57F" emissiveIntensity={2.2} />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
};

export const MayuraPavilion3DScene: React.FC = () => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 rounded-3xl border border-[#E5C158]/50 bg-gradient-to-b from-[#062920]/95 via-[#031A15]/95 to-[#02100D]/95 overflow-hidden emerald-gold-glow">
      <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 border-b border-[#E5C158]/25 bg-[#02120E]/75">
        <div className="flex items-center gap-2.5">
          <SparkleIcon className="w-5 h-5 text-[#34D399]" />
          <div>
            <h4 className="font-display text-sm sm:text-base text-champagne-foil tracking-wider uppercase">
              Interactive 3D Emerald Mayura Baradari &amp; Lotus Pool
            </h4>
            <p className="text-xs text-[#F4FBF7]/70 font-sans">
              Drag to orbit 360° around the 8-pillared Deccan Lake Pavilion
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setAutoRotate((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium border border-[#E5C158]/50 bg-[#0A3C30]/80 text-[#F4FBF7]"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
          {autoRotate ? 'Orbiting Pavilion' : 'Rotation Paused'}
        </button>
      </div>
      <div className="relative w-full h-[330px] sm:h-[395px] cursor-grab">
        <Canvas camera={{ position: [0, 1.55, 5.2], fov: 44 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 8, 5]} intensity={1.7} color="#FFFDF7" />
          <pointLight position={[-4, 3, -3]} intensity={1.4} color="#10B981" />
          <EmeraldMayuraBaradariModel autoRotate={autoRotate} />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};
