import { Container, Left, List, ListItems, Right, Section } from "./WorkStyle.js";
import { useState } from "react";
import WebDesign from "../WebDesign.jsx";
import Development from "../Development.jsx";
import ProductDesign from "../ProductDesign.jsx";
import Illustration from "../Illustration.jsx";

const data = [
    "Web Design",
    "Web Development",
    "Illustration",
    "Product Design",
    "Social Media",
]

const Works = () => {
    const [work, setWork] = useState("Web Design");
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map(item => (
                            <ListItems
                                key={item}
                                text={item}
                                onClick={() => setWork(item)}
                            >
                                {item}
                            </ListItems>
                        ))}
                    </List>
                </Left>

                <Right>
                    {work === "Web Design" ? (
                        <WebDesign />
                    ) : (
                        work === "Web Development" ? (
                            <Development />
                        ) : (
                            work === "Illustration" ? (
                                <Illustration />
                            ) : (
                                <ProductDesign />
                            )
                        )
                    )}
                </Right>
            </Container>
        </Section>
    );
};

export default Works;