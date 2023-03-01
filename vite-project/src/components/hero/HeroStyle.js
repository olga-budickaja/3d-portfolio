import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
export const Title = styled.h1`
    font-size: 74px;
`;
export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Line = styled.img`
  width: 30px;
  height: 5px;
  border-radius: 5px;
`;
export const Img = styled.img`
  width: 720px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
}
`;
export const Subtitle = styled.h2`
  color: deeppink;
  font-size: 30px;
`;
export const Description = styled.div`
 font-size: 24px;
  color: lightgrey;
`;
export const Right = styled.div`
  flex: 3;
  position: relative;
`;