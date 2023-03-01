import { Container, Left, Right, Section, Title, Line, WhatWeDo, Subtitle, Description, Img } from "./HeroStyle.js";
import Navbar from "../navbar/Navbar.jsx";
import { Button } from "../navbar/NavbarStyle.js";
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
                    {/*3d model*/}
                    <Img src="./img/cosmo.png" alt="cosmo"/>
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;