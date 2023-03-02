import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Bag from "./Bag";

const ProductDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Bag />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default ProductDesign;