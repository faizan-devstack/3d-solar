"use client";

import { Canvas } from "@react-three/fiber";
import { Planet } from "./Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "./AnimatedHeaderSection";
import { useState, useEffect } from "react";
import * as THREE from 'three'
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const mediaMatch = useMediaQuery({ maxWidth: 853 });

  useEffect(() => {
    setIsMobile(mediaMatch);
  }, [mediaMatch]);

  const text = `I am experienced in building scalable, high performance
  web applications using React, Next.js, Node.js, Express,
  and PostgreSQL.Experienced in building pixel perfect 
  UI's, 3D animations, secure REST APIs, AI powered
  features, SEO optimized apps, and translating
  Figma designs into production ready, 
  multilingual interfaces.`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen pb-40">
      <AnimatedHeaderSection
        subTitle={"FULL STACK DEVELOPER"}
        title={"MUHAMMAD FAIZAN"}
        text={text}
        textColor={"white"}
      />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.4} color="#ffffff" />

          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>

          <Environment resolution={512}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form="circle"
                color="#ffffff"
                intensity={3}
                position={[0, 6, -8]}
                scale={14}
              />
              <Lightformer
                form="ring"
                color="#ffd700"
                intensity={3}
                position={[8, 4, 0]}
                scale={16}
              />
              {/* <Lightformer
                form="circle"
                color="#f8f8f8"
                intensity={4}
                position={[-10, 3, -3]}
                scale={12}
              /> */}
              <Lightformer
                form="ring"
                color="#ffebcc"
                intensity={2.5}
                position={[0, -5, 6]}
                scale={20}
              />
            </group>
          </Environment>

          <EffectComposer>
            <Bloom
              intensity={0.15}
              luminanceThreshold={0.5}
              luminanceSmoothing={0.5}
              radius={0.6}
            />
          </EffectComposer>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            autoRotate={false}
            rotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;