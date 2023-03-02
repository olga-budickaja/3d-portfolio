import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
export const Logo = styled.img`
  height: 40px;
  animation: rotateHue 2s alternate infinite;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
  
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const ListItem = styled.li`
  text-transform: uppercase;
 cursor: pointer;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Icon = styled.img`
 width: 20px;
  object-fit: cover;
  cursor: pointer;
`;
export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 40px;
  text-transform: uppercase;
  border: solid rgba(19, 18, 18, 0.7);
  background-image: linear-gradient(60deg, #b286ef 10%, #981fbf 50%, #7e20fd 100%);
  box-shadow: 4px 27px 51px rgba(183, 132, 238, 0.35);
  transition: all 3s ease-in;
  width: max-content;
  &:hover, &:focus {
    background-image: linear-gradient(60deg, #9e77d5 10%, #881cab 50%, #6b1bd7 100%);
    border: solid rgba(19, 18, 18, 0.1);
    box-shadow: 4px 27px 51px rgba(183, 132, 238, 0.1);
  }
`;