import styled from "styled-components";

const Container = styled.div`
  border: 0;
  display: flex;
  justify-content: ${({ currentStep }) =>
    currentStep === 1 ? "flex-end" : "space-between"};
  width: 100%;
`;

export { Container };
