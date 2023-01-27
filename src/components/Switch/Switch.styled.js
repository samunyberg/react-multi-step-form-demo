import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: ${({ trackColor }) => trackColor};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  height: 22px;
  justify-content: ${({ checked }) => (checked ? "flex-end" : "flex-start")};
  padding: 3px;
  width: 45px;
`;

const Handle = styled.div`
  background-color: ${({ handleColor }) => handleColor};
  border-radius: 50%;
  height: 16px;
  width: 16px;
`;

export { Container, Handle };
