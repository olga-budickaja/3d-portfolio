import React from 'react';
import Hero from "./components/hero/Hero.jsx";
import Who from "./components/who/Who.jsx";
import Contact from "./components/contact/Contact.jsx";
import Works from "./components/works/Works.jsx";
import styled from "styled-components";
import './index.scss'
import Test from "./test/Test.jsx";

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
            <Test />
        </Container>
    );
};

export default App;