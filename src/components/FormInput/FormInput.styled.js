import styled from "styled-components";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 25px;
`;

const InputDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.strawberryRed};
  font-size: 0.9rem;
  font-weight: 500;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.marineBlue};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const TextField = styled.input`
  border-radius: 10px;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.strawberryRed : theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.marineBlue};
  font-size: 1rem;
  font-weight: 600;
  padding: 15px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.coolGray};
    font-weight: 500;
  }

  &:focus {
    outline-color: ${({ theme, error }) =>
      error ? theme.colors.strawberryRed : theme.colors.purplishBlue};
  }
`;

export { Container, InputDetails, Label, Error, TextField };
