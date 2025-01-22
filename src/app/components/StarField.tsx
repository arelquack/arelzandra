"use client";
import { useEffect } from "react";
import * as THREE from "three";

const StarField: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = "absolute";  // Posisikan di absolute
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";
        renderer.domElement.style.zIndex = "-1";  // Pastikan berada di bawah
        document.body.appendChild(renderer.domElement);

        // Membuat bintang
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({ color: 0x888888 });
        const starsVertices = [];

        for (let i = 0; i < 10000; i++) {
            const x = Math.random() * 2000 - 1000;
            const y = Math.random() * 2000 - 1000;
            const z = Math.random() * 2000 - 1000;
            starsVertices.push(x, y, z);
        }

        starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3));
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        camera.position.z = 1000;

        const animate = () => {
        requestAnimationFrame(animate);

        stars.rotation.x += 0.0001;
        stars.rotation.y += 0.0001;

        renderer.render(scene, camera);
        };

        animate();

        return () => {
        renderer.dispose();
        };
    }, []);

    return null;
};

export default StarField;
