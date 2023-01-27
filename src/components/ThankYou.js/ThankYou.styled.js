import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url("../../assets/images/icon-thank-you.svg");
  background-size: cover;
  margin-bottom: 15px;
`;

const Heading = styled.h1`
  font-size: 1.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.marineBlue};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.6rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.coolGray};
  margin-top: 0;
  margin-bottom: 60px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export { Container, Icon, Heading, Text };
