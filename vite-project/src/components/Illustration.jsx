import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Laptop from "./Laptop.jsx";
import { Desc } from "../Desc.js";

const Illustration = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Laptop />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>We show illustrations in 3D format from all angles.</Desc>
        </>

    );
};

export default Illustration;