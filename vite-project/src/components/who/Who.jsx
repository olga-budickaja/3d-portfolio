import { Container, Description, Line, Subtitle, Title, WhatWeDo } from "../hero/HeroStyle.js";
import { Section, Left, Right } from "./WhoStyle";
import { Button } from "../navbar/NavbarStyle.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Cube.jsx";

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} autoRotate={true}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3, 2, 1]} />
                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    <Title>Step outside the box.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" alt="line"/>
                        <Subtitle>What we Do</Subtitle>
                    </WhatWeDo>
                    <Description>an innovative group of designers and developers with a love for creativity and the arts</Description>
                    <Button>See our works</Button>
                </Right>
            </Container>
        </Section>
    );
};

export default Who;