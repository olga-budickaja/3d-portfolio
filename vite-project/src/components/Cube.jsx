import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
    const textRef = useRef();
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
    return (
        <mesh>
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera
                        makeDefault
                        position={[0,0,2]}
                    />
                    <color attach="background" args={["#ff99ff"]} />
                    <Text ref={textRef} fontSize={0.9} color="#555">
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
};

export default Cube;