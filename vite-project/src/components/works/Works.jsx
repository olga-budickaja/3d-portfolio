import { Container, Left, List, ListItems, Right, Section } from "./WorkStyle.js";

const data = [
    "Web Design",
    "Web Development",
    "Illustration",
    "Product Design",
    "Social Media",
]

const Works = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        <ListItems></ListItems>
                    </List>
                </Left>

                <Right></Right>
            </Container>
        </Section>
    );
};

export default Works;