import styled from "styled-components";

const Container = styled.div`
  text-align: start;
  width: 100%;
  margin-top: 10px;
`;

const MainHeading = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.marineBlue};
  margin-bottom: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.6rem;
  }
`;

const SecondaryHeading = styled.h2`
  color: ${({ theme }) => theme.colors.coolGray};
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 25px;
  }
`;

export { Container, MainHeading, SecondaryHeading };
