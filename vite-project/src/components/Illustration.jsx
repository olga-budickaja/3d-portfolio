import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Laptop from "./Laptop.jsx";

const Illustration = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Laptop />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    );
};

export default Illustration;