"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const StarField: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // 1. Scene Setup
        const scene = new THREE.Scene();
        // Sedikit kabut biar partikel yang jauh makin "fade out" (Depth Effect)
        scene.fog = new THREE.FogExp2(0x050505, 0.002); 

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 50, 200); // Posisi kamera agak naik biar liat "ombak" dari atas
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // 2. Create Particles Wave
        const particleCount = 15000; // Jumlah partikel (makin banyak makin padat)
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const scales = new Float32Array(particleCount);

        let i = 0, j = 0;
        // Bikin grid partikel (bukan acak, tapi berbaris)
        const spacing = 4; // Jarak antar titik
        const rows = 150; 
        const cols = 100;

        for (let ix = 0; ix < rows; ix++) {
            for (let iy = 0; iy < cols; iy++) {
                // X dan Z buat posisi grid datar
                positions[i] = ix * spacing - (rows * spacing) / 2; // Center X
                positions[i + 1] = 0; // Y (Nanti digerakin di animate)
                positions[i + 2] = iy * spacing - (cols * spacing) / 2; // Center Z
                
                // Ukuran partikel acak biar natural
                scales[j] = 1;
                
                i += 3;
                j++;
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

        // Material Partikel (Warna Cyan ke Biru Web3)
        const material = new THREE.PointsMaterial({
            color: 0x22d3ee, // Cyan (Warna khas Web3)
            size: 0.8,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true, // Partikel jauh mengecil
            blending: THREE.AdditiveBlending // Efek glow
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // 3. Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // 4. Mouse Interaction (Biar interaktif dikit)
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - window.innerWidth / 2) * 0.5;
            mouseY = (event.clientY - window.innerHeight / 2) * 0.5;
        };
        document.addEventListener('mousemove', handleMouseMove);

        // 5. Animation Loop
        let count = 0;
        let frameId: number;

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            count += 0.05; // Kecepatan gelombang

            const positions = particles.geometry.attributes.position.array as Float32Array;
            let index = 0;

            for (let ix = 0; ix < rows; ix++) {
                for (let iy = 0; iy < cols; iy++) {
                    // Rumus Gelombang Sinus (Sine Wave)
                    // Mengubah posisi Y berdasarkan posisi X dan waktu
                    const x = positions[index];
                    const z = positions[index + 2];
                    
                    // Efek ombak kompleks
                    positions[index + 1] = (Math.sin((ix + count) * 0.3) * 10) + (Math.sin((iy + count) * 0.5) * 10);

                    index += 3;
                }
            }
            particles.geometry.attributes.position.needsUpdate = true; // Wajib update posisi

            // Rotasi kamera halus ngikutin mouse
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY + 200 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(frameId);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
};

export default StarField;