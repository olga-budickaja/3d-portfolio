import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Bag from "./Bag";
import { Desc } from "../Desc.js";

const ProductDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Bag />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>Your product will be viewed from all sides in 3D format :)</Desc>
        </>

    );
};

export default ProductDesign;