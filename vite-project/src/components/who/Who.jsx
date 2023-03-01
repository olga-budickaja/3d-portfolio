import { Container, Description, Line, Subtitle, Title, WhatWeDo } from "../hero/HeroStyle.js";
import { Section, Left, Right } from "./WhoStyle";
import { Button } from "../navbar/NavbarStyle.js";

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    {/*3d model*/}
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