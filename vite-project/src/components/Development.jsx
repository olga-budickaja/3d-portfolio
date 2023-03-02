import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Galagram from "./Galagram";
import { Desc } from "../Desc.js";


const Development = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Galagram />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>We work in the most modern programming languages. We use only innovative approaches.</Desc>
        </>

    );
};

export default Development;