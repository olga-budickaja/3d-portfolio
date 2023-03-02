import styled from "styled-components";

export const Desc = styled.div`
  width: 200px;
  height: auto;
  padding: 20px;
  background: #f8e0f8;
  position: absolute;
  bottom: 100px;
  right: 0;
  border-radius: 5px;
  color: grey;
  -webkit-box-shadow: 10px 10px 77px 12px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 77px 12px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 77px 12px rgba(0,0,0,0.75);

  @media only screen and (max-width: 768px) {
    top: -200px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-height: 150px;
  }
`;