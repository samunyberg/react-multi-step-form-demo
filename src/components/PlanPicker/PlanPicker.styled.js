import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PlansList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export { Container, PlansList };
