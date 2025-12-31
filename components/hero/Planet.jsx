"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import * as THREE from "three";

export function Planet(props) {
    const shapeContainer = useRef(null);
    const spheresContainer = useRef(null);
    const ringContainer = useRef(null);
    const { nodes, materials } = useGLTF("/models/Planet.glb");

    //     useEffect(() => {
    //     if (materials["Material.002"]) {
    //         materials["Material.002"].setValues({
    //             color: new THREE.Color("#ffffff"),
    //             metalness: 0,
    //             roughness: 0.1, // Reduced for smoother surface
    //             envMapIntensity: 1.0, // Increased for more realistic reflections
    //             transmission: 0,
    //             clearcoat: 1.0, // Added clearcoat for glossy, realistic finish
    //             clearcoatRoughness: 0.1, // Smooth clearcoat for realism
    //         });
    //     }

    //     if (materials["Material.001"]) {
    //         materials["Material.001"].setValues({
    //             color: new THREE.Color("#ffd700"),
    //             metalness: 1.0,
    //             roughness: 0.15, // Slightly reduced for smoother, polished metal look
    //             envMapIntensity: 2.0, // Increased for stronger, more realistic metallic reflections
    //             emissive: new THREE.Color("#ffaa00"),
    //             emissiveIntensity: 0.2, // Slightly reduced to avoid over-glow while keeping subtle warmth
    //         });
    //     }
    // }, [materials]);

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 1.9});
        tl.from(shapeContainer.current.position, {
            y: 5,
            duration: 3,
            ease: "circ.out",
        });
        tl.from(
            spheresContainer.current.rotation,
            {
                x: 0,
                y: Math.PI,
                z: -Math.PI,
                duration: 10,
                ease: "power1.inOut",
            },
            "-=25%"
        );
        tl.from(
            ringContainer.current.rotation,
            {
                x: 0.8,
                y: 0,
                z: 0,
                duration: 10,
                ease: "power1.inOut",
            },
            "<"
        );
    }, []);

    return (
        <group ref={shapeContainer} {...props} dispose={null}>
            <group ref={spheresContainer}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={materials["Material.002"]}
                    rotation={[0, 0, 0.741]}
                    scale={0.95}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere2.geometry}
                    material={materials["Material.001"]}
                    position={[0.647, 1.03, -0.724]}
                    rotation={[0, 0, 0.741]}
                    scale={0.18}
                />
            </group>
            <mesh
                ref={ringContainer}
                castShadow
                receiveShadow
                geometry={nodes.Ring.geometry}
                material={materials["Material.001"]}
                rotation={[-0.124, 0.123, -0.778]}
                scale={1.4}
            />
        </group>
    );
}

useGLTF.preload("/models/Planet.glb");