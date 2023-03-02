import { Container, Left, Right, Section, Title, Line, WhatWeDo, Subtitle, Description, Img } from "./HeroStyle.js";
import Navbar from "../navbar/Navbar.jsx";
import { Button } from "../navbar/NavbarStyle.js";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>Not a day without coding.</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" alt="line"/>
                        <Subtitle>What we Do</Subtitle>
                    </WhatWeDo>
                    <Description>we thrive on creating cool, human-centric digital products.</Description>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1,100,200]} scale={2.6}>
                            <MeshDistortMaterial
                                color="#480e60"
                                attach="material"
                                distort={0.5}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>
                    <Img src="./img/cosmo.png" alt="cosmo"/>
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;