import React from 'react';
import Hero from "./hero/Hero.jsx";
import Who from "./who/Who.jsx";
import Contact from "./contact/Contact.jsx";
import Works from "./works/Works.jsx";
import styled from "styled-components";
import './index.scss'

const Container = styled.div`
  height: 100vh;
  -webkit-scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;
const App = () => {
    return (
        <Container>
            <Hero/>
            <Who/>
            <Works/>
            <Contact/>
        </Container>
    );
};

export default App;