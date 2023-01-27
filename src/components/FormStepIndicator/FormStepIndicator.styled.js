import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { Container };
