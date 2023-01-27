import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.magnolia : theme.colors.white};
  border: 1px solid
    ${({ selected, theme }) =>
      selected ? theme.colors.purplishBlue : theme.colors.lightGray};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-around;
  padding: 5px 20px;
  transition: all 0.3s;
  width: 180px;

  &:hover {
    border-color: hsl(243, 100%, 62%);
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: auto;
    max-height: 100px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 15px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.marineBlue};
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const Price = styled.span`
  color: ${({ theme }) => theme.colors.coolGray};
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const Additional = styled.span`
  color: #02295a;
  font-size: 0.9rem;
`;

export { Container, Details, Title, Price, Additional };
