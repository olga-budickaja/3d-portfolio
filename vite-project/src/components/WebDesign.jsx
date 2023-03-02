import { Canvas } from "@react-three/fiber";
import Destiny from "./Destiny.jsx";
import { OrbitControls, Stage } from "@react-three/drei";
import { Desc } from "../Desc.js";

const WebDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Destiny />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>We will make the design according to your desire, in accordance with the latest trends in the world.</Desc>
        </>

    );
};

export default WebDesign;