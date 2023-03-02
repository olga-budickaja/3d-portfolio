import { Canvas } from "@react-three/fiber";
import Destiny from "./Destiny.jsx";
import { OrbitControls, Stage } from "@react-three/drei";

const WebDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Destiny />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    );
};

export default WebDesign;