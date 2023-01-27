import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.magnolia};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    height: 100vh;
    width: 100vw;
  }
`;

export { Container };
