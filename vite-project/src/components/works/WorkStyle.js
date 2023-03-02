import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const List = styled.ul`
   list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ListItems = styled.li`
    font-size: 80px;
  font-weight: 900;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  
  &:after {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    :after {
      animation: moveText 0.5s linear both;
      
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
export const Right = styled.div`
  position: relative;
  flex: 1;
  cursor: grab;
`;