import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
export const Left = styled.div`
 flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Title = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
`;
export const Form = styled.form`
 width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const Input = styled.input`
  padding: 20px;
  background: transparent;
  border: 2px solid;
  border-radius: 20px;
`;
export const Textarea = styled.textarea`
  padding: 20px;
  background: transparent;
  border: 2px solid;
  border-radius: 20px;
`;
export const Right = styled.div`
 flex: 1;
`;