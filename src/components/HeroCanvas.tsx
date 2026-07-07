import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo, useEffect } from "react";

// Track mouse position globally for smooth interpolation
const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Create random particles in a sphere shell
  const count = 1200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = Math.acos(THREE.MathUtils.randFloat(-1, 1));
      const distance = THREE.MathUtils.randFloat(1.5, 4.5);

      pos[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = distance * Math.cos(phi);
    }
    return pos;
  }, []);

  // Frame loop to animate particles and rotate camera/mesh with mouse lag
  useFrame((state) => {
    // Smoothly interpolate mouse movement (inertia)
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    const time = state.clock.getElapsedTime();

    // Gentle auto-rotation
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03 + mouse.x * 0.4;
      pointsRef.current.rotation.x = time * 0.01 + mouse.y * 0.3;
    }

    if (meshRef.current) {
      meshRef.current.rotation.y = -time * 0.015 + mouse.x * 0.2;
      meshRef.current.rotation.x = -time * 0.005 + mouse.y * 0.15;
      
      // Undulate mesh slightly
      const positionAttribute = meshRef.current.geometry.attributes.position;
      if (positionAttribute) {
        const v = new THREE.Vector3();
        for (let i = 0; i < positionAttribute.count; i++) {
          v.fromBufferAttribute(positionAttribute, i);
          // Apply a gentle wavy motion
          const wave = Math.sin(v.x * 1.5 + time) * 0.05 + Math.cos(v.y * 1.5 + time) * 0.05;
          v.z = wave;
          positionAttribute.setXYZ(i, v.x, v.y, v.z);
        }
        positionAttribute.needsUpdate = true;
      }
    }
  });

  // Simple wavy wireframe landscape for 3D Artist vibe
  const [gridGeometry, gridMaterial] = useMemo(() => {
    const geo = new THREE.PlaneGeometry(12, 12, 30, 30);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x222225,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
    });
    return [geo, mat];
  }, []);

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Wireframe Background Mesh */}
      <mesh
        ref={meshRef}
        geometry={gridGeometry}
        material={gridMaterial}
        position={[0, -0.5, -2]}
        rotation={[-Math.PI / 2.3, 0, 0]}
      />

      {/* 2. Interactive Particles Sparkles */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff4d00"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7}
        />
      </Points>

      {/* 3. Ambient lighting for extra depth (even if using Basic materials) */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 5]} intensity={1} color="#ff4d00" />
    </group>
  );
}

export default function HeroCanvas() {
  // Capture normalized mouse coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-black/90 -z-10 pointer-events-none overflow-hidden">
      {/* Cinematic Vignette Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 20%, rgba(5, 5, 5, 0.95) 85%)"
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 4], fov: 65 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
