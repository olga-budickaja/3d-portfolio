import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Galagram from "./Galagram";


const Development = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Galagram />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    );
};

export default Development;