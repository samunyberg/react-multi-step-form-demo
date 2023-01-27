import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 20px;
  margin: 25px 20px;
`;

const StepNumberIcon = styled.div`
  align-items: center;
  background-color: ${({ active, theme }) => active && theme.colors.lightBlue};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ active, theme }) => active && theme.colors.marineBlue};
  display: flex;
  font-weight: 600;
  min-height: 40px;
  justify-content: center;
  min-width: 40px;
  transition: all 0.3s;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Title = styled.div`
  font-weight: 300;
  opacity: 0.5;
`;

export { Container, StepNumberIcon, Details, Title };
