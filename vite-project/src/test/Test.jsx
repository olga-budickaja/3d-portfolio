import { Container } from "./TestStyle.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, } from "@react-three/drei";
import Cube from "../components/Cube.jsx";

const Test = () => {
    return (
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate={true}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3, 2, 1]} />
                <Cube />
            </Canvas>
        </Container>
    );
};

export default Test;